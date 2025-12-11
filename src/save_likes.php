<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

$dataFile = __DIR__ . '/data/likes_data.json';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Guardar datos de likes
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    
    if ($data) {
        $data['lastUpdate'] = date('Y-m-d H:i:s');
        file_put_contents($dataFile, json_encode($data, JSON_PRETTY_PRINT));
        echo json_encode(['status' => 'success', 'message' => 'Datos guardados correctamente']);
    } else {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Datos inválidos']);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Obtener datos actuales
    if (file_exists($dataFile)) {
        echo file_get_contents($dataFile);
    } else {
        echo json_encode(['photos' => [], 'lastUpdate' => '']);
    }
}
?>
