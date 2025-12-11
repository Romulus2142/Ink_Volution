<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $photoIndex = $data['photoIndex'];
    $photoName = $data['photoName'];
    $action = $data['action'];
    $timestamp = $data['timestamp'];
    $date = $data['date'];
    
    // Archivo CSV de resumen
    $summaryFile = 'data/likes_summary.csv';
    $historyFile = 'data/likes_history.csv';
    
    // Crear directorio data si no existe
    if (!file_exists('data')) {
        mkdir('data', 0777, true);
    }
    
    // Inicializar archivo de resumen si no existe
    if (!file_exists($summaryFile)) {
        $header = "Foto,Total de Likes\n";
        $photoNames = [
            'Soulfire',
            'Tenazas Witchblade',
            'Batman 1989',
            'Catwoman Anne',
            'Magik',
            'A Vampire',
            'Batman',
            'Selina',
            'Angela Spica',
            'Mirada Aphrodite IX'
        ];
        
        $content = $header;
        foreach ($photoNames as $name) {
            $content .= "\"$name\",0\n";
        }
        file_put_contents($summaryFile, $content);
    }
    
    // Inicializar archivo de historial si no existe
    if (!file_exists($historyFile)) {
        $header = "Foto,Accion,Fecha y Hora,Timestamp\n";
        file_put_contents($historyFile, $header);
    }
    
    // Actualizar resumen
    $lines = file($summaryFile);
    $updated = false;
    
    for ($i = 1; $i < count($lines); $i++) {
        $parts = str_getcsv($lines[$i]);
        if (trim($parts[0], '"') === $photoName) {
            $currentCount = intval($parts[1]);
            $newCount = $action === 'like' ? $currentCount + 1 : max(0, $currentCount - 1);
            $lines[$i] = "\"$photoName\",$newCount\n";
            $updated = true;
            break;
        }
    }
    
    if ($updated) {
        file_put_contents($summaryFile, implode('', $lines));
    }
    
    // Agregar al historial
    $historyEntry = "\"$photoName\",\"$action\",\"$date\",\"$timestamp\"\n";
    file_put_contents($historyFile, $historyEntry, FILE_APPEND);
    
    echo json_encode([
        'success' => true,
        'message' => 'Like guardado correctamente'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Método no permitido'
    ]);
}
?>
