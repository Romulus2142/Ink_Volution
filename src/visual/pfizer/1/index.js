(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap12 = function() {
	this.initialize(img.Bitmap12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,317);


(lib.Bitmap13 = function() {
	this.initialize(img.Bitmap13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,476);


(lib.Bitmap14 = function() {
	this.initialize(img.Bitmap14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,606);


(lib.Bitmap15 = function() {
	this.initialize(img.Bitmap15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,476);


(lib.Bitmap16 = function() {
	this.initialize(img.Bitmap16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,556);


(lib.Bitmap19 = function() {
	this.initialize(img.Bitmap19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,317);


(lib.Bitmap20 = function() {
	this.initialize(img.Bitmap20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,543);


(lib.Bitmap22 = function() {
	this.initialize(img.Bitmap22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,51);


(lib.icon1 = function() {
	this.initialize(img.icon1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,102);


(lib.icon2 = function() {
	this.initialize(img.icon2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,104);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol103 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap22();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol103, new cjs.Rectangle(0,0,142,51), null);


(lib.Symbol102 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgEAEAAQAFAAADAEQADADAAAEQAAAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape.setTransform(211.65,20.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AA5A2IAAg5QAAgKgFgGQgGgFgJgBQgKABgGAFQgEAGAAAKIAAA5IggAAIAAg5QAAgKgGgGQgFgFgJgBQgKABgGAFQgEAGAAAKIAAA5IghAAIAAhqIAhAAIAAAOQAEgHAIgEQAIgDAKgBQAMAAAJAGQAJAEAFAKQAGgIAKgGQAJgFALgBQAUAAALAMQAMAMAAAVIAAA+g");
	this.shape_1.setTransform(199.65,16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgcAwQgMgHgHgMQgHgNAAgQQAAgPAHgNQAHgNANgGQANgHAOAAQAPAAANAHQANAGAHANQAHANAAAPQAAAQgHANQgIAMgNAHQgMAHgPAAQgPAAgNgHgAgPgTQgGAHAAAMQAAAMAGAIQAGAGAJAAQAJAAAGgGQAHgIAAgMQAAgMgHgHQgFgGgKAAQgIAAgHAGg");
	this.shape_2.setTransform(183.5,16.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AgZAwQgNgHgGgMQgHgNAAgQQAAgPAHgNQAGgNANgGQAMgHAOAAQAUAAAOALQANAKAEAUIgiAAQgFgNgMAAQgJAAgFAHQgFAHAAAMQAAANAFAHQAFAHAJgBQAMAAAFgMIAiAAQgEATgNALQgOALgUAAQgOAAgMgHg");
	this.shape_3.setTransform(171.75,16.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("AgNANQgFgFAAgIQAAgGAFgFQAGgGAHAAQAJAAAFAGQAFAFAAAGQAAAIgFAFQgFAFgJAAQgHAAgGgFg");
	this.shape_4.setTransform(163.325,20.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#193F70").s().p("AgVAyQgLgFgGgIQgGgJgBgKIAgAAQABAGAFADQAEADAGABQAFgBAEgCQAEgCgBgEQAAgEgEgDIgPgEQgLgDgIgDQgIgDgFgGQgGgGABgLQAAgJAEgIQAGgHAJgEQAKgFANAAQATAAAMALQALAJADAQIgfAAQgBgFgDgDQgFgDgGgBQgFAAgDACQgDADAAAEQAAAFAFACQAEACAKACIATAGQAIADAFAGQAGAGAAALQAAAKgFAHQgFAHgLAEQgJAEgNABQgNAAgLgFg");
	this.shape_5.setTransform(155.25,16.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#193F70").s().p("AggA2IAAhqIAgAAIAAASQAFgJAJgEQAIgGALAAIAAAjIgJAAQgMAAgGAFQgGAFAAAMIAAAyg");
	this.shape_6.setTransform(146.425,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#193F70").s().p("AgaAwQgNgHgGgMQgHgNAAgQQAAgPAHgNQAGgNANgGQAMgHAPAAQAPAAAMAHQALAGAIAMQAGAMAAAQIAAAJIhJAAQABAKAFAFQAGAFAIAAQAMAAAEgKIAjAAQgDALgHAIQgHAIgKAFQgKAFgNAAQgPAAgMgHgAAUgKQAAgHgGgFQgGgFgIgBQgHABgGAFQgFAEgCAIIAoAAIAAAAg");
	this.shape_7.setTransform(136.1,16.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#193F70").s().p("AAMBGIgfgsIAAAsIggAAIAAiLIAgAAIAABMIAfgqIAoAAIgsA0IAsA1g");
	this.shape_8.setTransform(125,14.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#193F70").s().p("AggA2IAAhqIAgAAIAAASQAFgJAJgEQAIgGALAAIAAAjIgJAAQgMAAgGAFQgGAFAAAMIAAAyg");
	this.shape_9.setTransform(114.925,16.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#193F70").s().p("AggAwQgLgHgGgMQgGgNAAgQQAAgPAGgNQAGgNALgGQAKgHAOAAQAKAAAIAFQAIAFAFAHIAAgPIAhAAIAABpIghAAIAAgPQgFAHgIAFQgJAFgJAAQgOAAgKgHgAgPgTQgHAIAAALQAAAMAHAHQAHAHAIAAQAKAAAHgHQAGgHAAgMQAAgLgGgHQgHgHgKAAQgIAAgHAGg");
	this.shape_10.setTransform(103.7,16.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#193F70").s().p("AA5A2IAAg5QAAgKgGgGQgFgFgKgBQgJABgFAFQgGAGAAAKIAAA5IgfAAIAAg5QAAgKgFgGQgGgFgKgBQgJABgFAFQgGAGABAKIAAA5IghAAIAAhqIAhAAIAAAOQAEgHAIgEQAIgDAKgBQAMAAAKAGQAIAEAFAKQAGgIAJgGQAKgFALgBQAUAAAMAMQALAMAAAVIAAA+g");
	this.shape_11.setTransform(87.55,16.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#193F70").s().p("AgbAwQgNgHgHgMQgHgNAAgQQAAgPAHgNQAIgNAMgGQAMgHAPAAQAQAAAMAHQAMAGAIANQAHANAAAPQAAAQgIANQgGAMgNAHQgNAHgPAAQgPAAgMgHgAgPgTQgGAHAAAMQAAAMAGAIQAGAGAJAAQAJAAAHgGQAGgIAAgMQAAgMgGgHQgHgGgJAAQgIAAgHAGg");
	this.shape_12.setTransform(71.4,16.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#193F70").s().p("AgPBMIAAhpIAfAAIAABpgAgNgtQgGgFAAgIQAAgHAGgFQAFgFAIAAQAJAAAFAFQAGAFAAAHQAAAIgGAFQgFAFgJAAQgIAAgFgFg");
	this.shape_13.setTransform(62.55,14.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#193F70").s().p("Ag0BDIAAiFIA7AAQAUAAALAKQAMAJAAAQQAAAMgGAIQgGAHgKADQALACAHAJQAHAJAAALQAAARgMAKQgLAKgVAAgAgUAoIAXAAQAJAAAEgDQAEgEAAgHQABgHgGgEQgEgEgIAAIgXAAgAgUgMIAVAAQAHAAAFgDQAEgEAAgHQAAgGgEgEQgFgEgHAAIgVAAg");
	this.shape_14.setTransform(53.75,15.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#193F70").s().p("AggA8QgPgKgIgOQgJgQAAgUQAAgSAJgQQAIgQAPgJQAPgIATAAQAXAAASANQAQAMAGAWIgkAAQgDgJgIgEQgHgFgKABQgNAAgKAKQgJAKAAARQAAASAJAKQAKAKANAAQAKABAHgFQAIgEADgJIAkAAQgGAWgQAMQgSANgXAAQgTAAgPgIg");
	this.shape_15.setTransform(35.95,15.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#193F70").s().p("AAQBDIgbgzIgIAAIAAAzIggAAIAAiFIA1AAQAQAAALAGQALAFAGAKQAFAKAAALQAAAOgHAKQgIAKgPAEIAfA1gAgTgGIATAAQAJAAAFgEQAEgEAAgIQAAgIgEgEQgFgFgJAAIgTAAg");
	this.shape_16.setTransform(22.875,15.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#193F70").s().p("AggA8QgPgKgIgOQgJgQAAgUQAAgSAJgQQAIgQAPgJQAPgIATAAQAYAAARANQAQAMAGAWIgkAAQgEgJgHgEQgHgFgKABQgNAAgKAKQgJAKAAARQAAASAJAKQAKAKANAAQAKABAHgFQAHgEAEgJIAkAAQgGAWgQAMQgRANgYAAQgTAAgPgIg");
	this.shape_17.setTransform(9.15,15.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol102, new cjs.Rectangle(0,0,223.8,30.6), null);


(lib.Symbol101 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AAPBIQgPAAgIgHQgIgIAAgRIAAhCIgPAAIAAgQIAPAAIAAgdIASAAIAAAdIAeAAIAAAQIgeAAIAABCQAAAJAEAEQADADAJAAIAOAAIAAAQg");
	this.shape.setTransform(38.75,16.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgJBQIAAhyIATAAIAABygAgIg5QgEgEAAgFQAAgGAEgDQAEgEAEAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_1.setTransform(32.425,16.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgUA3QgLgFgGgHQgGgJgBgLIAUAAQABAKAHAEQAHAGALAAQALAAAGgFQAHgEAAgIQgBgHgGgEQgHgEgNgDIgUgHQgJgDgGgGQgFgHgBgLQAAgJAGgIQAFgHAKgEQAKgEALgBQATAAALAKQAMAKACAQIgTAAQgBgIgHgGQgGgFgLgBQgKABgGAEQgGAEAAAIQAAAFAEAEQADAEAGACIAOAFQAMADAJADQAHADAFAGQAGAGAAALQAAAKgFAHQgFAIgJAEQgKAFgNgBQgMABgKgFg");
	this.shape_2.setTransform(24.35,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AgJBQIAAhyIATAAIAABygAgIg5QgEgEAAgFQAAgGAEgDQAEgEAEAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_3.setTransform(16.325,16.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("AgKA5IgthyIAUAAIAjBhIAkhhIAUAAIgtByg");
	this.shape_4.setTransform(7.875,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol101, new cjs.Rectangle(0,0,44.8,33.4), null);


(lib.Symbol100 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgfBHQgMgHgIgOQgGgOgBgRQABgSAGgMQAIgNAMgIQANgHAPAAQANAAALAGQAMAGAGAKIAAg9IATAAIAACbIgTAAIAAgWQgGAKgLAHQgLAHgOAAQgPAAgNgIgAgSgSQgKAFgFAKQgFAJAAANQAAANAFAKQAFAKAKAFQAIAFAKAAQAKAAAKgFQAIgFAGgKQAFgKAAgNQAAgNgFgJQgGgJgIgGQgKgFgKAAQgKAAgIAFg");
	this.shape.setTransform(36.3,16.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AAhA6IAAhAQAAgRgJgJQgJgJgOAAQgPAAgJAJQgIAKAAASIAAA+IgUAAIAAhyIAUAAIAAARQAFgJAKgFQAKgEALgBQAUAAANANQAOAMAAAZIAABCg");
	this.shape_1.setTransform(22.925,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgfA0QgMgHgIgPQgHgNAAgRQAAgRAHgOQAIgNAMgHQANgIAPAAQAOABALAGQALAHAGAKIAAgWIATAAIAAByIgTAAIAAgVQgFAKgMAHQgLAHgOgBQgPABgNgIgAgSglQgKAFgEAKQgGAJAAANQAAANAGAJQAEALAKAEQAIAFAKABQAKgBAKgFQAJgEAEgLQAGgJAAgNQAAgNgGgJQgEgJgJgGQgKgFgKAAQgKAAgIAFg");
	this.shape_2.setTransform(8.75,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol100, new cjs.Rectangle(0,0,45.9,33.4), null);


(lib.Symbol99 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("Ag5BWIAAipIATAAIAAAVQAGgKALgGQALgHAOAAQAPAAANAIQAMAHAIANQAGAOABARQgBASgGAMQgIAOgMAIQgNAHgPAAQgOAAgLgGQgLgHgGgKIAABMgAgSg/QgKAFgFAKQgFAKAAANQAAANAFAJQAFAJAKAFQAJAFAJAAQALAAAIgFQAJgFAGgJQAFgJAAgOQAAgNgFgJQgGgKgJgFQgIgFgLAAQgJAAgJAFg");
	this.shape.setTransform(41,20.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgbA0QgOgHgGgOQgIgNAAgSQAAgRAHgOQAIgNAMgHQANgIAQAAQAQAAANAIQAMAHAIAMQAGANAAAPIgBALIhbAAQABARALAKQALAJAOAAQANAAAHgGQAJgGADgJIAVAAQgFAQgNALQgPALgUgBQgQABgMgIgAAkgHQAAgLgEgIQgFgIgJgEQgIgEgKgBQgOAAgKAKQgKAJgBARIBHAAIAAAAg");
	this.shape_1.setTransform(27.05,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AAPBIQgPAAgIgHQgIgIAAgRIAAhCIgPAAIAAgQIAPAAIAAgdIASAAIAAAdIAeAAIAAAQIgeAAIAABCQAAAJAEAEQADADAJAAIAOAAIAAAQg");
	this.shape_2.setTransform(16.7,16.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AgUA3QgLgFgGgHQgGgJgBgLIAUAAQABAKAHAEQAHAGALAAQALAAAGgFQAHgEgBgIQAAgHgGgEQgHgEgNgDIgUgHQgJgDgGgGQgFgHAAgLQgBgJAGgIQAFgHAKgEQAKgEALgBQATAAAMAKQAMAKAAAQIgTAAQgBgIgGgGQgGgFgLgBQgKABgGAEQgGAEAAAIQAAAFADAEQAEAEAFACIAPAFQANADAHADQAIADAGAGQAFAGAAALQABAKgGAHQgFAIgKAEQgJAFgMgBQgNABgKgFg");
	this.shape_3.setTransform(7.45,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol99, new cjs.Rectangle(0,0,49.9,33.4), null);


(lib.Symbol98 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AAPBIQgPAAgIgHQgIgIAAgRIAAhCIgPAAIAAgQIAPAAIAAgdIASAAIAAAdIAeAAIAAAQIgeAAIAABCQAAAJADAEQAEADAJAAIAOAAIAAAQg");
	this.shape.setTransform(42.2,16.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AAZA5IgagrIgaArIgTAAIAkg4Igkg6IAVAAIAaArIAagrIAUAAIglA5IAlA5g");
	this.shape_1.setTransform(33.45,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgbA0QgNgHgIgOQgHgNAAgSQAAgRAHgOQAHgNANgHQANgIAQAAQARAAAMAIQANAHAGAMQAHANAAAPIgBALIhaAAQABARAKAKQALAJAOAAQANAAAHgGQAJgGADgJIAVAAQgFAQgNALQgOALgVgBQgPABgNgIgAAlgHQAAgLgGgIQgEgIgIgEQgJgEgKgBQgNAAgLAKQgKAJgBARIBIAAIAAAAg");
	this.shape_2.setTransform(21.9,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AAhA6IAAhAQAAgRgJgJQgJgJgOAAQgPAAgJAJQgIAKAAASIAAA+IgUAAIAAhyIAUAAIAAARQAFgJAKgFQAKgEALgBQAUAAANANQAOAMAAAZIAABCg");
	this.shape_3.setTransform(8.775,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol98, new cjs.Rectangle(0,0,48.3,33.4), null);


(lib.Symbol97 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgcA0QgNgHgGgOQgIgNAAgSQAAgRAHgOQAIgNAMgHQANgIAQAAQAQAAANAIQAMAHAIAMQAGANAAAPIgBALIhbAAQABARALAKQALAJAOAAQAMAAAJgGQAIgGADgJIAVAAQgFAQgOALQgOALgUgBQgPABgOgIgAAkgHQAAgLgEgIQgFgIgJgEQgIgEgKgBQgOAAgJAKQgLAJgBARIBHAAIAAAAg");
	this.shape.setTransform(29.5,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AAhBOIAAhBQAAgRgJgJQgJgJgOAAQgPAAgJAKQgIAJAAARIAABAIgUAAIAAibIAUAAIAAA5QAFgJAKgFQAKgEAMAAQANAAAKAFQALAGAGALQAGALAAAPIAABEg");
	this.shape_1.setTransform(16.375,16.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AAPBIQgPAAgIgHQgIgIAAgRIAAhCIgPAAIAAgQIAPAAIAAgdIASAAIAAAdIAeAAIAAAQIgeAAIAABCQAAAJADAEQAEADAJAAIAOAAIAAAQg");
	this.shape_2.setTransform(5.75,16.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol97, new cjs.Rectangle(0,0,38.2,33.4), null);


(lib.Symbol96 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgcA0QgNgHgGgOQgIgNAAgSQAAgRAHgOQAIgNAMgHQANgIAQAAQAQAAANAIQAMAHAIAMQAGANAAAPIgBALIhbAAQABARALAKQALAJAOAAQAMAAAJgGQAIgGADgJIAVAAQgFAQgOALQgOALgUgBQgPABgOgIgAAkgHQAAgLgEgIQgFgIgJgEQgIgEgKgBQgOAAgJAKQgLAJgBARIBHAAIAAAAg");
	this.shape.setTransform(44.8,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AATBOIgsgzIAAAzIgTAAIAAibIATAAIAABbIArgyIAbAAIg1A4IA1A6g");
	this.shape_1.setTransform(33.625,16.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgfA0QgMgHgIgPQgGgNgBgRQABgRAGgOQAIgNAMgHQANgIAPAAQAPABAKAGQALAHAGAKIAAgWIATAAIAAByIgTAAIAAgVQgGAKgLAHQgLAHgOgBQgPABgNgIgAgSglQgKAFgFAKQgFAJAAANQAAANAFAJQAFALAKAEQAIAFAKABQAKgBAJgFQAJgEAGgLQAFgJAAgNQAAgNgFgJQgGgJgJgGQgJgFgKAAQgKAAgIAFg");
	this.shape_2.setTransform(20.1,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AgIBJIAAiCIgoAAIAAgPIBhAAIAAAPIgnAAIAACCg");
	this.shape_3.setTransform(7.65,16.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol96, new cjs.Rectangle(0,0,53.5,33.4), null);


(lib.Symbol95 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAFAAQAFAAADAEQAEAEAAAEQAAAFgEAEQgDAEgFAAQgFAAgEgEg");
	this.shape.setTransform(89.65,22.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgjBHQgMgHgHgOQgHgOAAgSQAAgSAHgMQAHgOAMgIQALgHAPAAQAKAAAKAFQAJAFAGAIIAAg3IAkAAIAACbIgkAAIAAgRQgFAJgJAEQgKAGgLAAQgPAAgLgIgAgRgCQgHAHAAANQAAAOAHAIQAIAHAJAAQALAAAHgHQAIgIAAgOQAAgNgIgHQgHgHgLAAQgJAAgIAHg");
	this.shape_1.setTransform(79.975,16.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgjA7IAAh0IAjAAIAAAUQAGgKAJgGQAKgFALAAIAAAmIgJAAQgOAAgHAGQgGAFAAAOIAAA2g");
	this.shape_2.setTransform(69.175,18.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AgjA1QgMgHgHgOQgHgOAAgSQAAgRAHgOQAHgNAMgIQALgHAPAAQALAAAKAFQAJAFAFAIIAAgQIAkAAIAAB0IgkAAIAAgRQgFAIgKAFQgJAFgLAAQgPAAgLgHgAgRgUQgHAIAAAMQAAANAHAIQAIAIAJAAQALAAAHgIQAIgHAAgOQAAgMgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_3.setTransform(56.775,18.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("AATA6IgShKIgTBKIgoAAIgfh0IAjAAIARBTIAUhTIAlAAIAUBSIARhSIAhAAIggB0g");
	this.shape_4.setTransform(40.95,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#193F70").s().p("AgjA7IAAh0IAjAAIAAAUQAGgKAJgGQAKgFALAAIAAAmIgJAAQgOAAgHAGQgGAFAAAOIAAA2g");
	this.shape_5.setTransform(27.825,18.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#193F70").s().p("AgeA1QgOgHgIgOQgIgOAAgSQAAgRAIgOQAIgNAOgIQAOgHAQAAQARAAAOAHQAOAIAIANQAIAOAAARQAAASgIAOQgIAOgOAHQgOAHgRAAQgRAAgNgHgAgQgVQgHAIAAANQAAAOAGAIQAHAHAKAAQAKAAAHgHQAHgIAAgOQAAgNgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_6.setTransform(16.225,18.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#193F70").s().p("AgUBSIAAhWIgNAAIAAgeIANAAIAAgDQAAgWAMgLQAMgLAYAAIAFAAIAAAeQgKAAgEADQgEAEAAAJIAAABIATAAIAAAeIgTAAIAABWg");
	this.shape_7.setTransform(5.775,15.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol95, new cjs.Rectangle(0,0,94.1,33.4), null);


(lib.Symbol94 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AAXBOIAAhAQAAgMgGgFQgHgHgKAAQgJAAgGAHQgGAFAAAMIAABAIgkAAIAAibIAkAAIAAA2QAFgHAKgFQAIgFAMAAQAUAAAMAOQAMANAAAWIAABFg");
	this.shape.setTransform(46.125,16.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AATBJQgTAAgLgKQgLgJAAgWIAAguIgOAAIAAgdIAOAAIAAgdIAjAAIAAAdIAYAAIAAAdIgYAAIAAAuQAAAGACACQADACAGAAIANAAIAAAfg");
	this.shape_1.setTransform(34.65,16.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgjA1QgMgHgHgOQgHgOAAgSQAAgRAHgOQAHgNAMgIQALgHAPAAQALAAAKAFQAJAFAFAIIAAgQIAkAAIAAB0IgkAAIAAgRQgFAIgKAFQgJAFgLAAQgPAAgLgHgAgRgUQgHAIAAAMQAAANAHAIQAIAIAJAAQALAAAHgIQAIgHAAgOQAAgMgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_2.setTransform(23.025,18.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("Ag9BXIAAisIAkAAIAAARQAFgJAKgEQAJgGALAAQAPABAMAHQALAIAHANQAHANAAATQAAASgHAMQgHAPgLAHQgMAHgPAAQgLAAgJgFQgKgFgFgIIAABIgAgSgwQgHAJAAANQAAANAHAIQAIAHAKAAQAKAAAIgHQAHgIAAgNQAAgNgHgJQgIgHgKAAQgKAAgIAHg");
	this.shape_3.setTransform(9.475,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol94, new cjs.Rectangle(0,0,55.4,33.4), null);


(lib.Symbol93 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AATBJQgTAAgLgKQgLgJAAgWIAAguIgOAAIAAgdIAOAAIAAgdIAjAAIAAAdIAYAAIAAAdIgYAAIAAAuQAAAGACACQADACAGAAIANAAIAAAfg");
	this.shape.setTransform(45,16.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgXA3QgMgFgHgJQgHgJAAgMIAjAAQABAGAEAEQAGAEAGAAQAHAAADgDQAEgCAAgEQAAgGgFgCQgGgCgKgDIgWgGQgIgEgGgGQgGgHAAgMQAAgKAGgIQAFgIALgFQALgFANAAQAWAAANALQANALACASIghAAQgBgGgEgEQgFgDgHAAQgFAAgEACQgEACABAFQgBAFAGACQAFADAKACIAWAHQAIADAGAGQAGAIABAMQgBAKgFAIQgGAIgLAFQgKAEgPAAQgOAAgMgFg");
	this.shape_1.setTransform(34.9,18.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgdA1QgOgHgHgOQgIgOAAgSQAAgRAIgOQAHgNANgIQAOgHAQAAQARAAAOAHQANAHAHANQAIAOAAARIgBAKIhQAAQABALAGAFQAGAGAJAAQANAAAFgLIAmAAQgDALgIAKQgHAJgMAFQgLAFgPAAQgQAAgNgHgAAWgKQAAgJgGgGQgHgFgJAAQgIAAgGAFQgGAFgCAKIAsAAIAAAAg");
	this.shape_2.setTransform(22.725,18.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AgKBJQgKgEgFgIIAAAQIgkAAIAAibIAkAAIAAA4QAFgJAKgFQAJgFALAAQAPAAAMAHQALAIAHAOQAHAMAAASQAAASgHAOQgHAOgLAHQgMAIgPAAQgLAAgJgGgAgSgCQgHAHAAANQAAAOAHAIQAIAHAKAAQAKAAAIgHQAHgIAAgOQAAgNgHgHQgIgHgKAAQgKAAgIAHg");
	this.shape_3.setTransform(9.475,16.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol93, new cjs.Rectangle(0,0,51.6,33.4), null);


(lib.Symbol92 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgcA0QgNgHgGgOQgIgNAAgSQAAgRAHgOQAIgNAMgHQANgIAQAAQAQAAANAIQAMAHAIAMQAGANAAAPIgBALIhbAAQABARALAKQALAJAOAAQAMAAAJgGQAIgGADgJIAVAAQgFAQgOALQgOALgUgBQgPABgOgIgAAkgHQAAgLgEgIQgFgIgJgEQgIgEgKgBQgOAAgJAKQgLAJgBARIBHAAIAAAAg");
	this.shape.setTransform(29.5,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AAhBOIAAhBQAAgRgJgJQgJgJgOAAQgPAAgJAKQgIAJAAARIAABAIgUAAIAAibIAUAAIAAA5QAFgJAKgFQAKgEAMAAQANAAAKAFQALAGAGALQAGALAAAPIAABEg");
	this.shape_1.setTransform(16.375,16.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AAPBIQgPAAgIgHQgIgIAAgRIAAhCIgPAAIAAgQIAPAAIAAgdIASAAIAAAdIAeAAIAAAQIgeAAIAABCQAAAJADAEQAEADAJAAIAOAAIAAAQg");
	this.shape_2.setTransform(5.75,16.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol92, new cjs.Rectangle(0,0,38.2,33.4), null);


(lib.Symbol91 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AghBMQgQgKgDgTIATAAQADALALAGQAJAGANAAQAQAAAKgKQAKgJAAgSIAAgYQgGAKgLAGQgLAHgOAAQgPAAgNgHQgMgIgIgOQgGgMgBgSQABgRAGgOQAIgNAMgHQANgIAPAAQAOAAALAHQALAGAGAKIAAgVIATAAIAAB1QAAAQgGAMQgHAMgNAHQgMAHgRAAQgVAAgPgLgAgShAQgKAFgFAKQgFAJAAANQAAAOAFAJQAFAJAKAFQAIAFAKAAQAKAAAJgFQAJgFAGgJQAFgJAAgNQAAgOgFgJQgGgKgJgFQgJgFgKAAQgKAAgIAFg");
	this.shape.setTransform(66.9,21.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AAhA6IAAhAQAAgRgJgJQgJgJgOAAQgPAAgJAJQgIAKAAASIAAA+IgUAAIAAhyIAUAAIAAARQAFgJAKgFQAKgEALgBQAUAAANANQAOAMAAAZIAABCg");
	this.shape_1.setTransform(53.525,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgJBQIAAhyIATAAIAABygAgIg5QgEgEAAgFQAAgGAEgDQAEgEAEAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_2.setTransform(44.175,16.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AgfBHQgMgHgHgOQgIgOABgRQgBgSAIgMQAHgNAMgIQANgHAPAAQANAAAMAGQALAGAGAKIAAg9IATAAIAACbIgTAAIAAgWQgFAKgMAHQgLAHgOAAQgPAAgNgIgAgTgSQgIAFgFAKQgGAJAAANQAAANAGAKQAFAKAIAFQAJAFAKAAQALAAAJgFQAIgFAFgKQAGgKAAgNQAAgNgGgJQgFgJgIgGQgJgFgLAAQgKAAgJAFg");
	this.shape_3.setTransform(34.2,16.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("AAhA6IAAhAQAAgRgJgJQgJgJgOAAQgPAAgJAJQgIAKAAASIAAA+IgUAAIAAhyIAUAAIAAARQAFgJAKgFQAKgEALgBQAUAAANANQAOAMAAAZIAABCg");
	this.shape_4.setTransform(20.825,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#193F70").s().p("AgJBQIAAhyIATAAIAABygAgIg5QgEgEAAgFQAAgGAEgDQAEgEAEAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_5.setTransform(11.475,16.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#193F70").s().p("AgNBQIAAhiIgPAAIAAgQIAPAAIAAgIQgBgTAKgJQAKgJAWAAIAAAQQgNAAgFAFQgFAFAAALIAAAIIAYAAIAAAQIgYAAIAABig");
	this.shape_6.setTransform(5.4,16.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol91, new cjs.Rectangle(0,0,76.5,33.4), null);


(lib.Symbol90 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AAhA6IAAhAQAAgRgJgJQgJgJgOAAQgPAAgJAJQgIAKAAASIAAA+IgUAAIAAhyIAUAAIAAARQAFgJAKgFQAKgEALgBQAUAAANANQAOAMAAAZIAABCg");
	this.shape.setTransform(13.925,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgJBQIAAhyIATAAIAABygAgIg5QgEgEAAgFQAAgGAEgDQAEgEAEAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_1.setTransform(4.575,16.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol90, new cjs.Rectangle(0,0,22.8,33.4), null);


(lib.Symbol89 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgJBOIAAibIATAAIAACbg");
	this.shape.setTransform(92.775,16.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgfA0QgMgHgHgPQgIgNAAgRQAAgRAIgOQAHgNANgHQAMgIAPAAQAOABALAGQAMAHAFAKIAAgWIAUAAIAAByIgUAAIAAgVQgFAKgMAHQgLAHgOgBQgQABgMgIgAgTglQgIAFgFAKQgGAJAAANQAAANAGAJQAFALAIAEQAJAFAKABQALgBAJgFQAIgEAFgLQAGgJAAgNQAAgNgGgJQgFgJgIgGQgJgFgLAAQgKAAgJAFg");
	this.shape_1.setTransform(82.8,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgJBQIAAhyIATAAIAABygAgIg5QgEgEAAgFQAAgGAEgDQAEgEAEAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_2.setTransform(73.475,16.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AAPBIQgPAAgIgHQgIgIAAgRIAAhCIgPAAIAAgQIAPAAIAAgdIASAAIAAAdIAeAAIAAAQIgeAAIAABCQAAAJADAEQAEADAJAAIAOAAIAAAQg");
	this.shape_3.setTransform(67.05,16.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("AAhA6IAAhAQAAgRgJgJQgJgJgOAAQgPAAgJAJQgIAKAAASIAAA+IgUAAIAAhyIAUAAIAAARQAFgJAKgFQAKgEALgBQAUAAANANQAOAMAAAZIAABCg");
	this.shape_4.setTransform(56.675,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#193F70").s().p("AgbA0QgNgHgIgOQgHgNAAgSQAAgRAHgOQAHgNANgHQANgIAQAAQARAAAMAIQAMAHAHAMQAHANAAAPIAAALIhbAAQABARAKAKQALAJAOAAQANAAAHgGQAJgGADgJIAVAAQgFAQgNALQgOALgVgBQgPABgNgIgAAlgHQAAgLgGgIQgEgIgIgEQgJgEgKgBQgNAAgKAKQgLAJgBARIBIAAIAAAAg");
	this.shape_5.setTransform(43.4,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#193F70").s().p("AgUA3QgLgFgGgHQgGgJgBgLIAUAAQABAKAHAEQAIAGAKAAQALAAAHgFQAFgEAAgIQAAgHgGgEQgGgEgOgDIgUgHQgJgDgGgGQgFgHAAgLQgBgJAGgIQAFgHAKgEQAKgEALgBQATAAAMAKQAMAKAAAQIgTAAQgBgIgGgGQgHgFgKgBQgKABgGAEQgGAEAAAIQAAAFADAEQAEAEAFACIAPAFQANADAHADQAIADAGAGQAFAGAAALQABAKgGAHQgFAIgKAEQgJAFgMgBQgNABgKgFg");
	this.shape_6.setTransform(31.4,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#193F70").s().p("AgVA3QgKgFgGgHQgGgJAAgLIATAAQABAKAHAEQAIAGAKAAQALAAAHgFQAFgEABgIQAAgHgHgEQgGgEgOgDIgVgHQgIgDgFgGQgHgHAAgLQABgJAFgIQAFgHAKgEQAJgEAMgBQATAAALAKQAMAKACAQIgUAAQAAgIgHgGQgGgFgLgBQgKABgGAEQgGAEAAAIQAAAFAEAEQADAEAGACIAOAFQANADAIADQAHADAFAGQAGAGABALQAAAKgGAHQgFAIgKAEQgJAFgNgBQgMABgLgFg");
	this.shape_7.setTransform(20.45,18.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#193F70").s().p("AgbA0QgOgHgGgOQgIgNAAgSQAAgRAHgOQAIgNAMgHQANgIAQAAQARAAAMAIQANAHAGAMQAHANAAAPIgBALIhaAAQAAARALAKQALAJAOAAQAMAAAIgGQAJgGADgJIAVAAQgFAQgNALQgPALgUgBQgQABgMgIgAAkgHQABgLgGgIQgEgIgJgEQgIgEgKgBQgOAAgKAKQgKAJgBARIBHAAIAAAAg");
	this.shape_8.setTransform(8.5,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol89, new cjs.Rectangle(0,0,97.6,33.4), null);


(lib.Symbol88 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgVA3QgKgFgGgHQgGgJAAgLIATAAQABAKAHAEQAIAGAKAAQALAAAHgFQAFgEAAgIQABgHgHgEQgGgEgOgDIgVgHQgIgDgGgGQgFgHAAgLQgBgJAGgIQAFgHAKgEQAJgEAMgBQATAAAMAKQAMAKAAAQIgTAAQgBgIgGgGQgHgFgKgBQgKABgGAEQgGAEAAAIQAAAFADAEQAEAEAFACIAPAFQAMADAIADQAIADAGAGQAFAGAAALQABAKgGAHQgFAIgKAEQgJAFgMgBQgNABgLgFg");
	this.shape.setTransform(12.6,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgJBQIAAhyIATAAIAABygAgIg5QgEgEAAgFQAAgGAEgDQAEgEAEAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_1.setTransform(4.575,16.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol88, new cjs.Rectangle(0,0,20.3,33.4), null);


(lib.Symbol87 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgXA3QgMgFgHgJQgHgJgBgMIAkAAQAAAGAGAEQAEAEAHAAQAGAAAEgDQAEgCAAgEQAAgGgGgCQgEgCgMgDIgUgGQgJgEgGgGQgGgHAAgMQAAgKAFgIQAGgIALgFQALgFAOAAQAVAAAOALQAMALACASIghAAQgBgGgFgEQgEgDgHAAQgGAAgDACQgDACgBAFQABAFAFACQAGADAKACIAVAHQAIADAGAGQAHAIgBAMQABAKgGAIQgGAIgKAFQgLAEgPAAQgOAAgMgFg");
	this.shape.setTransform(121.7,18.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgjA7IAAh0IAjAAIAAAUQAGgKAJgGQAKgFALAAIAAAmIgJAAQgOAAgHAGQgGAFAAAOIAAA2g");
	this.shape_1.setTransform(111.925,18.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgdA1QgOgHgHgOQgIgOAAgSQAAgRAIgOQAHgNANgIQAOgHAQAAQARAAAOAHQANAHAHANQAIAOAAARIgBAKIhQAAQABALAGAFQAGAGAJAAQANAAAFgLIAmAAQgDALgIAKQgHAJgMAFQgLAFgPAAQgQAAgNgHgAAWgKQAAgJgGgGQgHgFgJAAQgIAAgGAFQgGAFgCAKIAsAAIAAAAg");
	this.shape_2.setTransform(100.575,18.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AAOBOIgjgxIAAAxIgkAAIAAibIAkAAIAABVIAjguIArAAIgwA5IAxA7g");
	this.shape_3.setTransform(88.25,16.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("AgjA7IAAh0IAjAAIAAAUQAGgKAJgGQAKgFALAAIAAAmIgJAAQgOAAgHAGQgGAFAAAOIAAA2g");
	this.shape_4.setTransform(77.125,18.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#193F70").s().p("AgjA1QgMgHgHgOQgHgOAAgSQAAgRAHgOQAHgNAMgIQALgHAPAAQALAAAKAFQAJAFAFAIIAAgQIAkAAIAAB0IgkAAIAAgRQgFAIgKAFQgJAFgLAAQgPAAgLgHgAgRgUQgHAIAAAMQAAANAHAIQAIAIAJAAQALAAAHgIQAIgHAAgOQAAgMgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_5.setTransform(64.725,18.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#193F70").s().p("AA/A7IAAg+QAAgMgGgGQgGgGgLAAQgKAAgGAGQgGAGAAAMIAAA+IgiAAIAAg+QgBgMgGgGQgGgGgKAAQgKAAgHAGQgFAGAAAMIAAA+IgkAAIAAh0IAkAAIAAAPQAFgIAIgEQAKgEAKAAQAOAAAKAFQAJAGAHALQAFgKALgGQALgGAMAAQAWAAANANQANANAAAYIAABDg");
	this.shape_6.setTransform(46.9,18.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#193F70").s().p("AgeA1QgOgHgIgOQgIgOAAgSQAAgRAIgOQAIgNAOgIQAOgHAQAAQARAAAOAHQAOAIAIANQAIAOAAARQAAASgIAOQgIAOgOAHQgOAHgRAAQgRAAgNgHgAgQgVQgHAIAAANQAAAOAGAIQAHAHAKAAQAKAAAHgHQAHgIAAgOQAAgNgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_7.setTransform(29.075,18.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#193F70").s().p("AgRBUIAAh0IAjAAIAAB0gAgOgyQgHgFAAgJQAAgIAHgFQAFgGAJAAQAKAAAFAGQAHAFAAAIQAAAJgHAFQgFAGgKgBQgJABgFgGg");
	this.shape_8.setTransform(19.35,15.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#193F70").s().p("AgKBJQgKgEgFgIIAAAQIgkAAIAAibIAkAAIAAA4QAFgJAKgFQAJgFALAAQAPAAAMAHQALAIAHAOQAHAMAAASQAAASgHAOQgHAOgLAHQgMAIgPAAQgLAAgJgGgAgSgCQgHAHAAANQAAAOAHAIQAIAHAKAAQAKAAAIgHQAHgIAAgOQAAgNgHgHQgIgHgKAAQgKAAgIAHg");
	this.shape_9.setTransform(9.475,16.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol87, new cjs.Rectangle(0,0,129.9,33.4), null);


(lib.Symbol86 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AAPBIQgPAAgIgHQgIgIAAgRIAAhCIgPAAIAAgQIAPAAIAAgdIASAAIAAAdIAeAAIAAAQIgeAAIAABCQAAAJADAEQAEADAJAAIAOAAIAAAQg");
	this.shape.setTransform(60.85,16.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgbA1QgLgGgGgLQgGgLgBgQIAAhCIATAAIAABAQAAARAJAJQAJAJAOAAQAPAAAJgKQAJgJAAgSIAAg+IATAAIAAByIgTAAIAAgRQgGAJgJAEQgLAFgKAAQgNAAgLgFg");
	this.shape_1.setTransform(50.35,18.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgdA0QgNgHgIgOQgHgNAAgSQAAgRAHgOQAIgNANgHQAOgIAPAAQAQAAAOAIQANAHAHANQAIAOAAARQAAASgIANQgIAOgNAHQgOAIgPgBQgQABgNgIgAgSglQgJAEgFAKQgGAKAAANQAAAOAFAJQAGAKAIAFQAJAFAKAAQAJgBAJgFQAJgEAGgKQAGgJAAgOQAAgNgGgKQgFgKgJgEQgJgFgKAAQgKAAgIAFg");
	this.shape_2.setTransform(37.025,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AgWBIQgLgGgFgKIAAAVIgUAAIAAibIAUAAIAAA+QAFgKAMgHQAMgGANAAQAPAAAMAHQANAIAHANQAIAMgBASQABARgIAOQgHAOgNAHQgMAIgPAAQgOAAgMgHgAgSgSQgJAGgGAJQgFAJAAANQAAANAFAKQAGAKAJAFQAIAFAKAAQAKAAAKgFQAJgFAEgKQAGgKAAgNQAAgNgGgJQgEgKgJgFQgKgFgKAAQgKAAgIAFg");
	this.shape_3.setTransform(23.6,16.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("AgfA0QgMgHgIgPQgHgNAAgRQAAgRAHgOQAIgNAMgHQANgIAPAAQAOABALAGQALAHAGAKIAAgWIATAAIAAByIgTAAIAAgVQgFAKgMAHQgLAHgOgBQgPABgNgIgAgSglQgKAFgEAKQgGAJAAANQAAANAGAJQAEALAKAEQAIAFAKABQAKgBAKgFQAJgEAEgLQAGgJAAgNQAAgNgGgJQgEgJgJgGQgKgFgKAAQgKAAgIAFg");
	this.shape_4.setTransform(8.75,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol86, new cjs.Rectangle(0,0,66.9,33.4), null);


(lib.Symbol85 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AghBMQgPgKgDgTIATAAQADALAJAGQALAGAMAAQAQAAAKgKQAKgJAAgSIAAgYQgGAKgLAGQgLAHgOAAQgPAAgNgHQgMgIgHgOQgIgMAAgSQAAgRAIgOQAHgNAMgHQANgIAPAAQAOAAALAHQAMAGAFAKIAAgVIATAAIAAB1QABAQgIAMQgGAMgNAHQgMAHgRAAQgWAAgOgLgAgThAQgIAFgFAKQgGAJAAANQAAAOAGAJQAFAJAIAFQAJAFAKAAQAKAAAKgFQAIgFAFgJQAGgJAAgNQAAgOgGgJQgFgKgIgFQgKgFgKAAQgKAAgJAFg");
	this.shape.setTransform(84.7,21.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AAhA6IAAhAQAAgRgJgJQgJgJgOAAQgPAAgJAJQgIAKAAASIAAA+IgUAAIAAhyIAUAAIAAARQAFgJAKgFQAKgEALgBQAUAAANANQAOAMAAAZIAABCg");
	this.shape_1.setTransform(71.325,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgJBQIAAhyIATAAIAABygAgIg5QgEgEAAgFQAAgGAEgDQAEgEAEAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_2.setTransform(61.975,16.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AAhA6IAAhAQAAgRgJgJQgJgJgOAAQgPAAgJAJQgIAKAAASIAAA+IgUAAIAAhyIAUAAIAAARQAFgJAKgFQAKgEALgBQAUAAANANQAOAMAAAZIAABCg");
	this.shape_3.setTransform(52.775,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("AgbA6IAAhyIATAAIAAATQAFgKAIgFQAKgGANAAIAAAUIgFAAQgfAAAAAjIAAA9g");
	this.shape_4.setTransform(42.625,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#193F70").s().p("AgfA0QgMgHgIgPQgHgNAAgRQAAgRAHgOQAIgNAMgHQANgIAPAAQAOABALAGQALAHAGAKIAAgWIATAAIAAByIgTAAIAAgVQgFAKgMAHQgLAHgOgBQgPABgNgIgAgSglQgKAFgFAKQgFAJAAANQAAANAFAJQAFALAKAEQAIAFAKABQAKgBAKgFQAJgEAEgLQAGgJAAgNQAAgNgGgJQgEgJgJgGQgKgFgKAAQgKAAgIAFg");
	this.shape_5.setTransform(30.8,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#193F70").s().p("AgcA0QgMgHgIgOQgHgNAAgSQAAgRAHgOQAHgNANgHQANgIAQAAQAQAAANAIQAMAHAIAMQAGANAAAPIAAALIhcAAQACARAKAKQALAJAOAAQAMAAAJgGQAIgGADgJIAVAAQgFAQgOALQgNALgVgBQgQABgNgIgAAlgHQgBgLgFgIQgEgIgIgEQgJgEgKgBQgNAAgKAKQgLAJgBARIBIAAIAAAAg");
	this.shape_6.setTransform(17.55,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#193F70").s().p("AgiBJIAAiRIATAAIAACCIAyAAIAAAPg");
	this.shape_7.setTransform(7.125,16.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol85, new cjs.Rectangle(0,0,94.3,33.4), null);


(lib.Symbol83 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap15();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol83, new cjs.Rectangle(0,0,125,476), null);


(lib.Symbol82 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap16();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol82, new cjs.Rectangle(0,0,18,556), null);


(lib.Symbol81 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap14();
	this.instance.setTransform(0,0,1,1.1387);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol81, new cjs.Rectangle(0,0,18,690.1), null);


(lib.Symbol80 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape.setTransform(109.95,22.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AAPBIQgPAAgIgHQgIgIAAgRIAAhCIgPAAIAAgQIAPAAIAAgdIASAAIAAAdIAeAAIAAAQIgeAAIAABCQAAAJAEAEQADADAJAAIAOAAIAAAQg");
	this.shape_1.setTransform(103.9,16.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AAhA6IAAhAQAAgRgJgJQgJgJgOAAQgPAAgJAJQgIAKAAASIAAA+IgUAAIAAhyIAUAAIAAARQAFgJAKgFQAKgEALgBQAUAAANANQAOAMAAAZIAABCg");
	this.shape_2.setTransform(93.525,18.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AgbA0QgOgHgGgOQgIgNAAgSQAAgRAHgOQAIgNAMgHQANgIAQAAQAQAAANAIQAMAHAIAMQAGANAAAPIgBALIhbAAQABARALAKQALAJAOAAQANAAAIgGQAIgGADgJIAVAAQgFAQgOALQgOALgUgBQgPABgNgIgAAkgHQAAgLgEgIQgFgIgJgEQgIgEgKgBQgNAAgLAKQgKAJgBARIBHAAIAAAAg");
	this.shape_3.setTransform(80.25,18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("ABKA6IAAhAQAAgRgIgJQgJgJgPAAQgPAAgIAJQgJAKAAASIAAA+IgSAAIAAhAQAAgRgIgJQgJgJgOAAQgPAAgKAJQgIAKAAASIAAA+IgUAAIAAhyIAUAAIAAARQAFgJAKgFQAJgEAMgBQAOABALAGQALAHAFAMQAFgMAMgHQALgGANgBQANABALAFQALAGAFALQAHAKAAARIAABCg");
	this.shape_4.setTransform(63,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#193F70").s().p("AAPBIQgPAAgIgHQgIgIAAgRIAAhCIgPAAIAAgQIAPAAIAAgdIASAAIAAAdIAeAAIAAAQIgeAAIAABCQAAAJAEAEQADADAJAAIAOAAIAAAQg");
	this.shape_5.setTransform(48.3,16.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#193F70").s().p("AgfA0QgMgHgHgPQgIgNABgRQgBgRAIgOQAHgNANgHQAMgIAPAAQAOABAMAGQALAHAFAKIAAgWIAUAAIAAByIgUAAIAAgVQgFAKgMAHQgLAHgOgBQgQABgMgIgAgTglQgJAFgEAKQgGAJAAANQAAANAGAJQAEALAJAEQAJAFAKABQALgBAIgFQAKgEAFgLQAFgJAAgNQAAgNgFgJQgFgJgKgGQgIgFgLAAQgKAAgJAFg");
	this.shape_6.setTransform(37.15,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#193F70").s().p("AgbA0QgOgHgGgOQgIgNAAgSQAAgRAHgOQAIgNAMgHQANgIAQAAQARAAAMAIQAMAHAIAMQAGANAAAPIgBALIhaAAQAAARALAKQALAJAOAAQANAAAHgGQAJgGADgJIAVAAQgFAQgOALQgOALgUgBQgQABgMgIgAAkgHQAAgLgEgIQgFgIgJgEQgIgEgKgBQgOAAgKAKQgKAJgBARIBHAAIAAAAg");
	this.shape_7.setTransform(23.9,18.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#193F70").s().p("AgbA6IAAhyIATAAIAAATQAFgKAIgFQAKgGANAAIAAAUIgFAAQgfAAAAAjIAAA9g");
	this.shape_8.setTransform(14.025,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#193F70").s().p("AAPBIQgPAAgIgHQgIgIAAgRIAAhCIgPAAIAAgQIAPAAIAAgdIASAAIAAAdIAeAAIAAAQIgeAAIAABCQAAAJADAEQAEADAJAAIAOAAIAAAQg");
	this.shape_9.setTransform(5.75,16.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol80, new cjs.Rectangle(0,0,114.4,33.4), null);


(lib.Symbol79 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgcA0QgMgHgIgOQgHgNAAgSQAAgRAHgOQAHgNANgHQANgIAQAAQAQAAANAIQAMAHAHAMQAHANAAAPIAAALIhcAAQACARAKAKQALAJAOAAQAMAAAJgGQAIgGADgJIAVAAQgFAQgOALQgNALgVgBQgQABgNgIgAAlgHQgBgLgFgIQgEgIgIgEQgJgEgKgBQgNAAgKAKQgLAJgBARIBIAAIAAAAg");
	this.shape.setTransform(55.35,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgeBHQgNgHgIgOQgGgOAAgRQAAgSAGgMQAIgNANgIQAMgHAQAAQAMAAALAGQAMAGAGAKIAAg9IAUAAIAACbIgUAAIAAgWQgGAKgLAHQgLAHgOAAQgPAAgMgIgAgSgSQgJAFgGAKQgFAJAAANQAAANAFAKQAGAKAJAFQAIAFAKAAQALAAAIgFQAJgFAGgKQAFgKAAgNQAAgNgFgJQgGgJgJgGQgIgFgLAAQgKAAgIAFg");
	this.shape_1.setTransform(41.45,16.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgJBQIAAhyIATAAIAABygAgIg5QgEgEAAgFQAAgGAEgDQAEgEAEAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_2.setTransform(32.125,16.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AgbA1QgLgGgGgLQgGgLgBgQIAAhCIATAAIAABAQAAARAJAJQAJAJAOAAQAPAAAJgKQAJgJgBgSIAAg+IAUAAIAAByIgUAAIAAgRQgFAJgJAEQgKAFgLAAQgOAAgKgFg");
	this.shape_3.setTransform(22.8,18.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("AghBMQgPgKgDgTIATAAQADALAJAGQAKAGANAAQAQAAAKgKQAKgJAAgSIAAgYQgFAKgMAGQgLAHgOAAQgPAAgNgHQgMgIgIgOQgHgMAAgSQAAgRAHgOQAIgNAMgHQANgIAPAAQAOAAALAHQALAGAGAKIAAgVIATAAIAAB1QABAQgIAMQgGAMgNAHQgMAHgRAAQgWAAgOgLgAgShAQgKAFgEAKQgGAJAAANQAAAOAGAJQAEAJAKAFQAIAFAKAAQAKAAAKgFQAJgFAEgJQAGgJAAgNQAAgOgGgJQgEgKgJgFQgKgFgKAAQgKAAgIAFg");
	this.shape_4.setTransform(8.75,21.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol79, new cjs.Rectangle(0,0,64.1,33.4), null);


(lib.Symbol78 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AAhA6IAAhAQAAgRgJgJQgJgJgOAAQgPAAgJAJQgIAKAAASIAAA+IgUAAIAAhyIAUAAIAAARQAFgJAKgFQAKgEALgBQAUAAANANQAOAMAAAZIAABCg");
	this.shape.setTransform(35.625,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgfA0QgMgHgIgPQgGgNgBgRQABgRAGgOQAIgNAMgHQANgIAPAAQAPABAKAGQALAHAGAKIAAgWIATAAIAAByIgTAAIAAgVQgGAKgLAHQgLAHgOgBQgPABgNgIgAgSglQgKAFgFAKQgFAJAAANQAAANAFAJQAFALAKAEQAIAFAKABQAKgBAJgFQAJgEAGgLQAFgJAAgNQAAgNgFgJQgGgJgJgGQgJgFgKAAQgKAAgIAFg");
	this.shape_1.setTransform(21.45,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgbA0QgMgHgIgOQgHgNAAgSQAAgRAHgOQAIgNAMgHQANgIAPAAQAWAAANALQAOAKAEATIgUAAQgDgLgIgGQgJgGgNgBQgPAAgKAMQgKALAAAUQAAAVAKALQAKALAPAAQANAAAJgGQAIgFADgMIAUAAQgEASgOALQgOALgVgBQgPABgNgIg");
	this.shape_2.setTransform(8.35,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol78, new cjs.Rectangle(0,0,44.5,33.4), null);


(lib.Symbol77 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AAPBIQgPAAgIgHQgIgIAAgRIAAhCIgPAAIAAgQIAPAAIAAgdIASAAIAAAdIAeAAIAAAQIgeAAIAABCQAAAJAEAEQADADAJAAIAOAAIAAAQg");
	this.shape.setTransform(40.9,16.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgfA0QgMgHgIgPQgGgNAAgRQAAgRAGgOQAIgNANgHQAMgIAPAAQAOABAMAGQAKAHAGAKIAAgWIAUAAIAAByIgUAAIAAgVQgGAKgLAHQgLAHgOgBQgPABgNgIgAgSglQgJAFgGAKQgFAJAAANQAAANAFAJQAGALAJAEQAIAFAKABQALgBAIgFQAJgEAGgLQAFgJAAgNQAAgNgFgJQgGgJgJgGQgIgFgLAAQgKAAgIAFg");
	this.shape_1.setTransform(29.75,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AAhBOIAAhBQAAgRgJgJQgJgJgOAAQgPAAgJAKQgIAJAAARIAABAIgUAAIAAibIAUAAIAAA5QAFgJAKgFQAKgEAMAAQANAAAKAFQALAGAGALQAGALAAAPIAABEg");
	this.shape_2.setTransform(16.375,16.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AAPBIQgPAAgIgHQgIgIAAgRIAAhCIgPAAIAAgQIAPAAIAAgdIASAAIAAAdIAeAAIAAAQIgeAAIAABCQAAAJADAEQAEADAJAAIAOAAIAAAQg");
	this.shape_3.setTransform(5.75,16.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol77, new cjs.Rectangle(0,0,47,33.4), null);


(lib.Symbol76 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgjA7IAAh0IAjAAIAAAUQAGgKAJgGQAKgFALAAIAAAmIgJAAQgOAAgHAGQgGAFAAAOIAAA2g");
	this.shape.setTransform(73.625,18.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgdA1QgOgHgHgOQgIgOAAgSQAAgRAIgOQAHgNANgIQAOgHAQAAQARAAAOAHQANAHAHANQAIAOAAARIgBAKIhQAAQABALAGAFQAGAGAJAAQANAAAFgLIAmAAQgDALgIAKQgHAJgMAFQgLAFgPAAQgQAAgNgHgAAWgKQAAgJgGgGQgHgFgJAAQgIAAgGAFQgGAFgCAKIAsAAIAAAAg");
	this.shape_1.setTransform(62.275,18.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgcA1QgOgHgHgOQgIgOABgSQgBgRAIgOQAHgNAOgIQANgHAQAAQAWAAAPALQAPAMAEAVIgmAAQgFgNgOAAQgJAAgFAHQgGAIAAANQAAAOAGAIQAFAIAJAAQAOAAAFgOIAmAAQgEAVgPAMQgPALgWAAQgQAAgNgHg");
	this.shape_2.setTransform(49.45,18.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AAXA7IAAg+QAAgMgGgHQgHgGgKAAQgJAAgGAGQgGAHAAAMIAAA+IgkAAIAAh0IAkAAIAAAQQAFgIAJgFQAJgEALAAQAVAAAMANQAMANAAAYIAABDg");
	this.shape_3.setTransform(36.075,18.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("AgjA1QgMgHgHgOQgHgOAAgSQAAgRAHgOQAHgNAMgIQALgHAPAAQALAAAKAFQAJAFAFAIIAAgQIAkAAIAAB0IgkAAIAAgRQgFAIgKAFQgJAFgLAAQgPAAgLgHgAgRgUQgHAIAAAMQAAANAHAIQAIAIAJAAQALAAAHgIQAIgHAAgOQAAgMgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_4.setTransform(21.475,18.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#193F70").s().p("AgcA1QgNgHgIgOQgHgOAAgSQAAgRAHgOQAIgNANgIQANgHAQAAQAWAAAPALQAPAMAFAVIgnAAQgEgNgPAAQgIAAgGAHQgGAIAAANQAAAOAGAIQAGAIAIAAQAPAAAEgOIAnAAQgFAVgPAMQgPALgWAAQgQAAgNgHg");
	this.shape_5.setTransform(8.35,18.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol76, new cjs.Rectangle(0,0,79.9,33.4), null);


(lib.Symbol75 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgRBOIAAibIAjAAIAACbg");
	this.shape.setTransform(107.95,16.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgjA1QgMgHgHgOQgHgOAAgSQAAgRAHgOQAHgNAMgIQALgHAPAAQALAAAKAFQAJAFAFAIIAAgQIAkAAIAAB0IgkAAIAAgRQgFAIgKAFQgJAFgLAAQgPAAgLgHgAgRgUQgHAIAAAMQAAANAHAIQAIAIAJAAQALAAAHgIQAIgHAAgOQAAgMgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_1.setTransform(97.375,18.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AATBJQgTAAgLgKQgLgJAAgWIAAguIgOAAIAAgdIAOAAIAAgdIAjAAIAAAdIAYAAIAAAdIgYAAIAAAuQAAAGADACQACACAGAAIANAAIAAAfg");
	this.shape_2.setTransform(86.25,16.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AgcA1QgNgHgIgOQgHgOAAgSQAAgRAHgOQAIgNANgIQANgHAQAAQAWAAAPALQAPAMAFAVIgnAAQgFgNgOAAQgJAAgFAHQgGAIAAANQAAAOAGAIQAFAIAJAAQAOAAAFgOIAnAAQgFAVgPAMQgPALgWAAQgQAAgNgHg");
	this.shape_3.setTransform(75.75,18.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("AgdA1QgOgHgHgOQgIgOAAgSQAAgRAIgOQAHgNANgIQAOgHAQAAQARAAAOAHQANAHAHANQAIAOAAARIgBAKIhQAAQABALAGAFQAGAGAJAAQANAAAFgLIAmAAQgDALgIAKQgHAJgMAFQgLAFgPAAQgQAAgNgHgAAWgKQAAgJgGgGQgHgFgJAAQgIAAgGAFQgGAFgCAKIAsAAIAAAAg");
	this.shape_4.setTransform(62.975,18.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#193F70").s().p("AgjA7IAAh0IAjAAIAAAUQAGgKAJgGQAKgFALAAIAAAmIgJAAQgOAAgHAGQgGAFAAAOIAAA2g");
	this.shape_5.setTransform(52.475,18.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#193F70").s().p("AgeA1QgOgHgIgOQgIgOAAgSQAAgRAIgOQAIgNAOgIQAOgHAQAAQARAAAOAHQAOAIAIANQAIAOAAARQAAASgIAOQgIAOgOAHQgOAHgRAAQgRAAgNgHgAgQgVQgHAIAAANQAAAOAGAIQAHAHAKAAQAKAAAHgHQAHgIAAgOQAAgNgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_6.setTransform(40.875,18.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#193F70").s().p("AgRBOIAAibIAjAAIAACbg");
	this.shape_7.setTransform(31.15,16.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#193F70").s().p("AgeA1QgOgHgIgOQgIgOAAgSQAAgRAIgOQAIgNAOgIQAOgHAQAAQARAAAOAHQAOAIAIANQAIAOAAARQAAASgIAOQgIAOgOAHQgOAHgRAAQgRAAgNgHgAgQgVQgHAIAAANQAAAOAGAIQAHAHAKAAQAKAAAHgHQAHgIAAgOQAAgNgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_8.setTransform(21.375,18.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#193F70").s().p("AgcA1QgNgHgIgOQgHgOAAgSQAAgRAHgOQAIgNANgIQANgHAQAAQAWAAAPALQAPAMAFAVIgnAAQgEgNgPAAQgIAAgGAHQgGAIAAANQAAAOAGAIQAGAIAIAAQAPAAAEgOIAnAAQgFAVgPAMQgPALgWAAQgQAAgNgHg");
	this.shape_9.setTransform(8.35,18.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol75, new cjs.Rectangle(0,0,113.2,33.4), null);


(lib.Symbol74 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AASBJQgSAAgLgKQgLgJAAgWIAAguIgOAAIAAgdIAOAAIAAgdIAjAAIAAAdIAXAAIAAAdIgXAAIAAAuQAAAGADACQACACAGAAIANAAIAAAfg");
	this.shape.setTransform(62.15,16.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgkA1QgKgFgGgMQgFgMAAgPIAAhDIAjAAIAAA/QAAALAGAHQAHAGAJAAQAKAAAGgGQAHgHAAgLIAAg/IAjAAIAAB0IgjAAIAAgQQgGAIgJAEQgJAFgLAAQgNAAgLgGg");
	this.shape_1.setTransform(50.875,18.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgeA1QgOgHgIgOQgIgOAAgSQAAgRAIgOQAIgNAOgIQAOgHAQAAQARAAAOAHQAOAIAIANQAIAOAAARQAAASgIAOQgIAOgOAHQgOAHgRAAQgRAAgNgHgAgQgVQgHAIAAANQAAAOAGAIQAHAHAKAAQAKAAAHgHQAHgIAAgOQAAgNgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_2.setTransform(37.175,18.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AgKBJQgKgEgFgIIAAAQIgkAAIAAibIAkAAIAAA4QAFgJAKgFQAJgFALAAQAPAAAMAHQALAIAHAOQAHAMAAASQAAASgHAOQgHAOgLAHQgMAIgPAAQgLAAgJgGgAgSgCQgHAHAAANQAAAOAHAIQAIAHAKAAQAKAAAIgHQAHgIAAgOQAAgNgHgHQgIgHgKAAQgKAAgIAHg");
	this.shape_3.setTransform(23.725,16.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("AgjA1QgMgHgHgOQgHgOAAgSQAAgRAHgOQAHgNAMgIQALgHAPAAQALAAAKAFQAJAFAFAIIAAgQIAkAAIAAB0IgkAAIAAgRQgFAIgKAFQgJAFgLAAQgPAAgLgHgAgRgUQgHAIAAAMQAAANAHAIQAIAIAJAAQALAAAHgIQAIgHAAgOQAAgMgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_4.setTransform(8.775,18.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol74, new cjs.Rectangle(0,0,68.7,33.4), null);


(lib.Symbol73 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgXA3QgMgFgHgJQgHgJgBgMIAkAAQAAAGAGAEQAEAEAHAAQAGAAAEgDQAEgCAAgEQAAgGgGgCQgEgCgMgDIgUgGQgJgEgGgGQgGgHAAgMQAAgKAFgIQAGgIALgFQALgFAOAAQAVAAAOALQAMALACASIghAAQgBgGgFgEQgEgDgHAAQgGAAgDACQgDACgBAFQABAFAFACQAGADAKACIAVAHQAIADAGAGQAHAIgBAMQABAKgGAIQgGAIgKAFQgLAEgPAAQgOAAgMgFg");
	this.shape.setTransform(69.95,18.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgRBOIAAibIAjAAIAACbg");
	this.shape_1.setTransform(61.15,16.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgRBUIAAh0IAjAAIAAB0gAgOgyQgHgFAAgJQAAgIAHgFQAFgGAJAAQAKAAAFAGQAHAFgBAIQABAJgHAFQgFAGgKgBQgJABgFgGg");
	this.shape_2.setTransform(55,15.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AgjA1QgMgHgHgOQgHgOAAgSQAAgRAHgOQAHgNAMgIQALgHAPAAQALAAAKAFQAJAFAFAIIAAgQIAkAAIAAB0IgkAAIAAgRQgFAIgKAFQgJAFgLAAQgPAAgLgHgAgRgUQgHAIAAAMQAAANAHAIQAIAIAJAAQALAAAHgIQAIgHAAgOQAAgMgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_3.setTransform(44.425,18.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("AATBJQgTAAgLgKQgLgJAAgWIAAguIgOAAIAAgdIAOAAIAAgdIAjAAIAAAdIAYAAIAAAdIgYAAIAAAuQAAAGACACQADACAGAAIANAAIAAAfg");
	this.shape_4.setTransform(33.3,16.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#193F70").s().p("AgdA1QgOgHgHgOQgIgOAAgSQAAgRAIgOQAHgNANgIQAOgHAQAAQARAAAOAHQANAHAHANQAIAOAAARIgBAKIhQAAQABALAGAFQAGAGAJAAQANAAAFgLIAmAAQgDALgIAKQgHAJgMAFQgLAFgPAAQgQAAgNgHgAAWgKQAAgJgGgGQgHgFgJAAQgIAAgGAFQgGAFgCAKIAsAAIAAAAg");
	this.shape_5.setTransform(22.725,18.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#193F70").s().p("AgjBHQgMgHgHgOQgHgOAAgSQAAgSAHgMQAHgOAMgIQALgHAPAAQAKAAAKAFQAJAFAGAIIAAg3IAkAAIAACbIgkAAIAAgRQgFAJgJAEQgKAGgLAAQgPAAgLgIgAgRgCQgHAHAAANQAAAOAHAIQAIAHAJAAQALAAAHgHQAIgIAAgOQAAgNgIgHQgHgHgLAAQgJAAgIAHg");
	this.shape_6.setTransform(8.775,16.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol73, new cjs.Rectangle(0,0,78.1,33.4), null);


(lib.Symbol72 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgVA3QgKgFgGgHQgGgJAAgLIATAAQABAKAHAEQAIAGAKAAQALAAAHgFQAFgEAAgIQABgHgHgEQgGgEgOgDIgVgHQgIgDgGgGQgFgHAAgLQgBgJAGgIQAFgHAKgEQAJgEAMgBQATAAAMAKQAMAKAAAQIgTAAQgBgIgGgGQgHgFgKgBQgKABgGAEQgGAEAAAIQAAAFADAEQAEAEAFACIAPAFQAMADAIADQAIADAGAGQAFAGAAALQABAKgGAHQgFAIgKAEQgJAFgMgBQgNABgLgFg");
	this.shape.setTransform(86.85,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgbA0QgNgHgIgOQgHgNAAgSQAAgRAHgOQAHgNANgHQANgIAQAAQARAAAMAIQAMAHAHAMQAHANAAAPIAAALIhbAAQABARAKAKQALAJAOAAQANAAAHgGQAJgGADgJIAVAAQgFAQgNALQgOALgVgBQgPABgNgIgAAlgHQAAgLgGgIQgEgIgIgEQgJgEgKgBQgNAAgLAKQgKAJgBARIBIAAIAAAAg");
	this.shape_1.setTransform(74.9,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgeBHQgNgHgHgOQgIgOABgRQgBgSAIgMQAHgNANgIQAMgHAQAAQAMAAAMAGQALAGAGAKIAAg9IAUAAIAACbIgUAAIAAgWQgFAKgMAHQgLAHgOAAQgPAAgMgIgAgTgSQgJAFgEAKQgGAJAAANQAAANAGAKQAEAKAJAFQAJAFAKAAQALAAAIgFQAKgFAEgKQAGgKAAgNQAAgNgGgJQgEgJgKgGQgIgFgLAAQgKAAgJAFg");
	this.shape_2.setTransform(61,16.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AgJBQIAAhyIATAAIAABygAgIg5QgEgEAAgFQAAgGAEgDQAEgEAEAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_3.setTransform(51.675,16.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("AgKA5IgthyIAUAAIAjBhIAkhhIAUAAIgtByg");
	this.shape_4.setTransform(43.225,18.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#193F70").s().p("AgdA0QgNgHgIgOQgHgNAAgSQAAgRAHgOQAIgNANgHQAOgIAPAAQAQAAAOAIQANAHAHANQAIAOAAARQAAASgIANQgIAOgNAHQgOAIgPgBQgQABgNgIgAgSglQgJAEgFAKQgGAKAAANQAAAOAFAJQAGAKAIAFQAJAFAKAAQAJgBAJgFQAJgEAGgKQAGgJAAgOQAAgNgGgKQgFgKgJgEQgJgFgKAAQgKAAgIAFg");
	this.shape_5.setTransform(30.675,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#193F70").s().p("AgbA6IAAhyIATAAIAAATQAFgKAIgFQAKgGANAAIAAAUIgFAAQgfAAAAAjIAAA9g");
	this.shape_6.setTransform(20.575,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#193F70").s().p("Ag6BWIAAipIAUAAIAAAVQAFgKALgGQAMgHAOAAQAPAAAMAIQANAHAHANQAIAOAAARQAAASgIAMQgHAOgNAIQgMAHgPAAQgOAAgLgGQgMgHgFgKIAABMgAgTg/QgIAFgGAKQgFAKAAANQAAANAFAJQAGAJAIAFQAJAFAKAAQALAAAJgFQAIgFAFgJQAGgJAAgOQAAgNgGgJQgFgKgIgFQgJgFgLAAQgKAAgJAFg");
	this.shape_7.setTransform(9.45,20.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol72, new cjs.Rectangle(0,0,94.6,33.4), null);


(lib.Symbol71 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgiBMQgPgKgCgTIASAAQADALALAGQAJAGANAAQAQAAAKgKQAKgJAAgSIAAgYQgGAKgLAGQgLAHgOAAQgPAAgNgHQgMgIgIgOQgGgMgBgSQABgRAGgOQAIgNAMgHQANgIAPAAQAOAAALAHQALAGAGAKIAAgVIATAAIAAB1QAAAQgGAMQgHAMgNAHQgMAHgRAAQgVAAgQgLgAgShAQgKAFgFAKQgFAJAAANQAAAOAFAJQAFAJAKAFQAIAFAKAAQAKAAAKgFQAIgFAGgJQAFgJAAgNQAAgOgFgJQgGgKgIgFQgKgFgKAAQgKAAgIAFg");
	this.shape.setTransform(66.45,21.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AAhA6IAAhAQAAgRgJgJQgJgJgOAAQgPAAgJAJQgIAKAAASIAAA+IgUAAIAAhyIAUAAIAAARQAFgJAKgFQAKgEALgBQAUAAANANQAOAMAAAZIAABCg");
	this.shape_1.setTransform(53.075,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgJBQIAAhyIATAAIAABygAgIg5QgEgEAAgFQAAgGAEgDQAEgEAEAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_2.setTransform(43.725,16.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AAPBIQgPAAgIgHQgIgIAAgRIAAhCIgPAAIAAgQIAPAAIAAgdIASAAIAAAdIAeAAIAAAQIgeAAIAABCQAAAJAEAEQADADAJAAIAOAAIAAAQg");
	this.shape_3.setTransform(37.3,16.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("AgUA3QgLgFgGgHQgGgJgBgLIAUAAQABAKAHAEQAHAGALAAQALAAAGgFQAHgEAAgIQgBgHgGgEQgGgEgOgDIgUgHQgJgDgGgGQgFgHgBgLQAAgJAGgIQAFgHAKgEQAKgEALgBQATAAAMAKQALAKABAQIgSAAQgCgIgGgGQgHgFgKgBQgKABgGAEQgGAEAAAIQAAAFAEAEQADAEAFACIAPAFQAMADAJADQAHADAFAGQAGAGAAALQAAAKgFAHQgFAIgJAEQgKAFgNgBQgMABgKgFg");
	this.shape_4.setTransform(28.05,18.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#193F70").s().p("AgcA0QgMgHgIgOQgHgNAAgSQAAgRAHgOQAIgNAMgHQANgIAQAAQAQAAANAIQAMAHAIAMQAGANAAAPIAAALIhcAAQABARALAKQALAJAOAAQAMAAAJgGQAIgGADgJIAVAAQgFAQgOALQgNALgVgBQgPABgOgIgAAkgHQAAgLgEgIQgFgIgJgEQgIgEgKgBQgOAAgJAKQgLAJgBARIBHAAIAAAAg");
	this.shape_5.setTransform(16.1,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#193F70").s().p("AAPBIQgPAAgIgHQgIgIAAgRIAAhCIgPAAIAAgQIAPAAIAAgdIASAAIAAAdIAeAAIAAAQIgeAAIAABCQAAAJADAEQAEADAJAAIAOAAIAAAQg");
	this.shape_6.setTransform(5.75,16.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol71, new cjs.Rectangle(0,0,76.1,33.4), null);


(lib.Symbol70 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgbA6IAAhyIATAAIAAATQAFgKAIgFQAKgGANAAIAAAUIgFAAQgfAAAAAjIAAA9g");
	this.shape.setTransform(105.175,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgbA0QgNgHgIgOQgHgNAAgSQAAgRAHgOQAHgNANgHQANgIAQAAQARAAAMAIQAMAHAHAMQAHANAAAPIAAALIhbAAQABARAKAKQALAJAOAAQANAAAHgGQAJgGADgJIAVAAQgFAQgNALQgOALgVgBQgPABgNgIgAAlgHQAAgLgGgIQgEgIgIgEQgJgEgKgBQgNAAgLAKQgKAJgBARIBIAAIAAAAg");
	this.shape_1.setTransform(94.25,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AATBOIgsgzIAAAzIgTAAIAAibIATAAIAABbIArgyIAbAAIg1A4IA1A6g");
	this.shape_2.setTransform(83.075,16.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AgbA6IAAhyIATAAIAAATQAFgKAIgFQAKgGANAAIAAAUIgFAAQgfAAAAAjIAAA9g");
	this.shape_3.setTransform(73.575,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("AgfA0QgMgHgHgPQgIgNAAgRQAAgRAIgOQAHgNAMgHQANgIAPAAQAOABALAGQAMAHAFAKIAAgWIATAAIAAByIgTAAIAAgVQgGAKgLAHQgLAHgOgBQgQABgMgIgAgTglQgIAFgFAKQgGAJAAANQAAANAGAJQAFALAIAEQAJAFAKABQAKgBAKgFQAIgEAFgLQAGgJAAgNQAAgNgGgJQgFgJgIgGQgKgFgKAAQgKAAgJAFg");
	this.shape_4.setTransform(61.75,18.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#193F70").s().p("ABKA6IAAhAQAAgRgJgJQgIgJgPAAQgOAAgKAJQgIAKgBASIAAA+IgRAAIAAhAQAAgRgJgJQgIgJgOAAQgPAAgKAJQgIAKAAASIAAA+IgTAAIAAhyIATAAIAAARQAGgJAJgFQAKgEALgBQAPABALAGQAKAHAGAMQAEgMAMgHQAKgGAOgBQAOABAKAFQAKAGAHALQAFAKAAARIAABCg");
	this.shape_5.setTransform(44.25,18.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#193F70").s().p("AgdA0QgNgHgIgOQgHgNAAgSQAAgRAHgOQAIgNANgHQAOgIAPAAQAQAAAOAIQANAHAHANQAIAOAAARQAAASgIANQgIAOgNAHQgOAIgPgBQgQABgNgIgAgSglQgJAEgFAKQgGAKAAANQAAAOAFAJQAGAKAIAFQAJAFAKAAQAJgBAJgFQAJgEAGgKQAGgJAAgOQAAgNgGgKQgFgKgJgEQgJgFgKAAQgKAAgIAFg");
	this.shape_6.setTransform(26.725,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#193F70").s().p("AgJBQIAAhyIATAAIAABygAgIg5QgEgEAAgFQAAgGAEgDQAEgEAEAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_7.setTransform(17.425,16.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#193F70").s().p("AgyBJIAAiRIAzAAQAPAAALAFQAKAFAGAIQAFAJAAAKQAAANgHAJQgHAIgMAEQAIABAHAEQAGAGAEAHQAEAIAAAJQAAALgFAJQgGAJgLAFQgLAFgOAAgAgfA5IAhAAQAOAAAIgGQAIgHAAgMQAAgMgIgHQgJgHgOAAIggAAgAgfgJIAfAAQAOAAAHgGQAHgHAAgLQAAgLgHgGQgHgGgOAAIgfAAg");
	this.shape_8.setTransform(8.725,16.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol70, new cjs.Rectangle(0,0,110.8,33.4), null);


(lib.Symbol67 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap12, null, new cjs.Matrix2D(1,0,0,44.94,-102.5,-11061.9)).s().p("EgC4A/NMAAAh5pIAAkwIFwAAMAAAB+Zg");
	this.shape.setTransform(102.55,629.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.Bitmap12, null, new cjs.Matrix2D(1,0,0,1,-60.5,-127.6)).s().p("ApcT8MAAAgn3IS5AAMAAAAjHIlxAAIAAEwg");
	this.shape_1.setTransform(60.5,127.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol67, new cjs.Rectangle(0,0,121,1033.7), null);


(lib.Symbol66 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap13, null, new cjs.Matrix2D(1,0,0,1,-62.5,-299.6)).s().p("ApwbkMAAAg3HIThAAMAAAA3Hg");
	this.shape.setTransform(63.5,229.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol66, new cjs.Rectangle(1,53.1,125,352.79999999999995), null);


(lib.Symbol65 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape.setTransform(53,22.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AAXA7IAAg+QAAgMgGgHQgHgGgKAAQgJAAgGAGQgGAHAAAMIAAA+IgkAAIAAh0IAkAAIAAAQQAFgIAJgFQAJgEALAAQAVAAAMANQAMANAAAYIAABDg");
	this.shape_1.setTransform(43.775,18.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgjA1QgMgHgHgOQgHgOAAgSQAAgRAHgOQAHgNAMgIQALgHAPAAQALAAAKAFQAJAFAFAIIAAgQIAkAAIAAB0IgkAAIAAgRQgFAIgKAFQgJAFgLAAQgPAAgLgHgAgRgUQgHAIAAAMQAAANAHAIQAIAIAJAAQALAAAHgIQAIgHAAgOQAAgMgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_2.setTransform(29.175,18.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AgRBOIAAibIAjAAIAACbg");
	this.shape_3.setTransform(19.35,16.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("Ag9BXIAAisIAkAAIAAARQAFgJAKgEQAJgGALAAQAPABAMAHQALAIAHANQAHANAAATQAAASgHAMQgHAPgLAHQgMAHgPAAQgLAAgJgFQgKgFgFgIIAABIgAgSgwQgHAJAAANQAAANAHAIQAIAHAKAAQAKAAAIgHQAHgIAAgNQAAgNgHgJQgIgHgKAAQgKAAgIAHg");
	this.shape_4.setTransform(9.475,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol65, new cjs.Rectangle(0,0,57.4,33.4), null);


(lib.Symbol64 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AASBJQgSAAgLgKQgLgJAAgWIAAguIgOAAIAAgdIAOAAIAAgdIAjAAIAAAdIAXAAIAAAdIgXAAIAAAuQAAAGADACQACACAGAAIANAAIAAAfg");
	this.shape.setTransform(108.5,16.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AAXA7IAAg+QAAgMgGgHQgHgGgKAAQgJAAgGAGQgGAHAAAMIAAA+IgkAAIAAh0IAkAAIAAAQQAFgIAJgFQAJgEALAAQAVAAAMANQAMANAAAYIAABDg");
	this.shape_1.setTransform(97.325,18.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgdA1QgOgHgHgOQgIgOAAgSQAAgRAIgOQAHgNANgIQAOgHAQAAQARAAAOAHQANAHAHANQAIAOAAARIgBAKIhQAAQABALAGAFQAGAGAJAAQANAAAFgLIAmAAQgDALgIAKQgHAJgMAFQgLAFgPAAQgQAAgNgHgAAWgKQAAgJgGgGQgHgFgJAAQgIAAgGAFQgGAFgCAKIAsAAIAAAAg");
	this.shape_2.setTransform(83.775,18.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AA/A7IAAg+QAAgMgGgGQgGgGgLAAQgKAAgGAGQgGAGAAAMIAAA+IgiAAIAAg+QgBgMgFgGQgHgGgKAAQgKAAgHAGQgFAGAAAMIAAA+IgkAAIAAh0IAkAAIAAAPQAFgIAIgEQAKgEAKAAQAOAAAKAFQAJAGAHALQAFgKALgGQALgGAMAAQAWAAANANQANANAAAYIAABDg");
	this.shape_3.setTransform(66.25,18.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("AASBJQgSAAgLgKQgLgJAAgWIAAguIgOAAIAAgdIAOAAIAAgdIAjAAIAAAdIAXAAIAAAdIgXAAIAAAuQAAAGACACQADACAGAAIANAAIAAAfg");
	this.shape_4.setTransform(50.75,16.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#193F70").s().p("AgjA1QgMgHgHgOQgHgOAAgSQAAgRAHgOQAHgNAMgIQALgHAPAAQALAAAKAFQAJAFAFAIIAAgQIAkAAIAAB0IgkAAIAAgRQgFAIgKAFQgJAFgLAAQgPAAgLgHgAgRgUQgHAIAAAMQAAANAHAIQAIAIAJAAQALAAAHgIQAIgHAAgOQAAgMgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_5.setTransform(39.125,18.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#193F70").s().p("AgdA1QgOgHgHgOQgIgOAAgSQAAgRAIgOQAHgNANgIQAOgHAQAAQARAAAOAHQANAHAHANQAIAOAAARIgBAKIhQAAQABALAGAFQAGAGAJAAQANAAAFgLIAmAAQgDALgIAKQgHAJgMAFQgLAFgPAAQgQAAgNgHgAAWgKQAAgJgGgGQgHgFgJAAQgIAAgGAFQgGAFgCAKIAsAAIAAAAg");
	this.shape_6.setTransform(25.925,18.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#193F70").s().p("AgjA7IAAh0IAjAAIAAAUQAGgKAJgGQAKgFALAAIAAAmIgJAAQgOAAgHAGQgGAFAAAOIAAA2g");
	this.shape_7.setTransform(15.425,18.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#193F70").s().p("AATBJQgTAAgLgKQgLgJAAgWIAAguIgOAAIAAgdIAOAAIAAgdIAjAAIAAAdIAYAAIAAAdIgYAAIAAAuQAAAGADACQACACAGAAIANAAIAAAfg");
	this.shape_8.setTransform(6.15,16.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol64, new cjs.Rectangle(0,0,115.1,33.4), null);


(lib.Symbol63 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgjA1QgMgHgHgOQgHgOAAgSQAAgRAHgOQAHgNAMgIQALgHAPAAQALAAAKAFQAJAFAFAIIAAgQIAkAAIAAB0IgkAAIAAgRQgFAIgKAFQgJAFgLAAQgPAAgLgHgAgRgUQgHAIAAAMQAAANAHAIQAIAIAJAAQALAAAHgIQAIgHAAgOQAAgMgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape.setTransform(8.775,18.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol63, new cjs.Rectangle(0,0,18.5,33.4), null);


(lib.Symbol62 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgdA1QgOgHgHgOQgIgOAAgSQAAgRAIgOQAHgNANgIQAOgHAQAAQARAAAOAHQANAHAHANQAIAOAAARIgBAKIhQAAQABALAGAFQAGAGAJAAQANAAAFgLIAmAAQgDALgIAKQgHAJgMAFQgLAFgPAAQgQAAgNgHgAAWgKQAAgJgGgGQgHgFgJAAQgIAAgGAFQgGAFgCAKIAsAAIAAAAg");
	this.shape.setTransform(108.475,18.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AAXA7IAAg+QAAgMgGgHQgHgGgKAAQgJAAgGAGQgGAHAAAMIAAA+IgkAAIAAh0IAkAAIAAAQQAFgIAJgFQAJgEALAAQAVAAAMANQAMANAAAYIAABDg");
	this.shape_1.setTransform(94.975,18.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgRBUIAAh0IAjAAIAAB0gAgPgyQgFgFgBgJQABgIAFgFQAHgGAIAAQAKAAAFAGQAHAFgBAIQABAJgHAFQgFAGgKgBQgIABgHgGg");
	this.shape_2.setTransform(84.8,15.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AA/A7IAAg+QAAgMgGgGQgGgGgLAAQgKAAgGAGQgGAGAAAMIAAA+IgiAAIAAg+QgBgMgFgGQgHgGgKAAQgKAAgHAGQgFAGAAAMIAAA+IgkAAIAAh0IAkAAIAAAPQAFgIAIgEQAKgEAKAAQAOAAAKAFQAJAGAHALQAFgKALgGQALgGAMAAQAWAAANANQAMANAAAYIAABDg");
	this.shape_3.setTransform(70.65,18.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("AgjA7IAAh0IAjAAIAAAUQAGgKAJgGQAKgFALAAIAAAmIgJAAQgOAAgHAGQgGAFAAAOIAAA2g");
	this.shape_4.setTransform(55.475,18.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#193F70").s().p("AgdA1QgOgHgHgOQgIgOAAgSQAAgRAIgOQAHgNANgIQAOgHAQAAQARAAAOAHQANAHAHANQAIAOAAARIgBAKIhQAAQABALAGAFQAGAGAJAAQANAAAFgLIAmAAQgDALgIAKQgHAJgMAFQgLAFgPAAQgQAAgNgHgAAWgKQAAgJgGgGQgHgFgJAAQgIAAgGAFQgGAFgCAKIAsAAIAAAAg");
	this.shape_5.setTransform(44.125,18.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#193F70").s().p("AATBJQgTAAgLgKQgLgJAAgWIAAguIgOAAIAAgdIAOAAIAAgdIAjAAIAAAdIAYAAIAAAdIgYAAIAAAuQAAAGACACQADACAGAAIANAAIAAAfg");
	this.shape_6.setTransform(33.3,16.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#193F70").s().p("AgdA1QgOgHgHgOQgIgOAAgSQAAgRAIgOQAHgNANgIQAOgHAQAAQARAAAOAHQANAHAHANQAIAOAAARIgBAKIhQAAQABALAGAFQAGAGAJAAQANAAAFgLIAmAAQgDALgIAKQgHAJgMAFQgLAFgPAAQgQAAgNgHgAAWgKQAAgJgGgGQgHgFgJAAQgIAAgGAFQgGAFgCAKIAsAAIAAAAg");
	this.shape_7.setTransform(22.725,18.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#193F70").s().p("AgjBHQgMgHgHgOQgHgOAAgSQAAgSAHgMQAHgOAMgIQALgHAPAAQAKAAAKAFQAJAFAGAIIAAg3IAkAAIAACbIgkAAIAAgRQgFAJgJAEQgKAGgLAAQgPAAgLgIgAgRgCQgHAHAAANQAAAOAHAIQAIAHAJAAQALAAAHgHQAIgIAAgOQAAgNgIgHQgHgHgLAAQgJAAgIAHg");
	this.shape_8.setTransform(8.775,16.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol62, new cjs.Rectangle(0,0,117.1,33.4), null);


(lib.Symbol61 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("Ag9BXIAAisIAkAAIAAARQAFgJAKgEQAJgGALAAQAPABAMAHQALAIAHANQAHANAAATQAAASgHAMQgHAPgLAHQgMAHgPAAQgLAAgJgFQgKgFgFgIIAABIgAgSgwQgHAJAAANQAAANAHAIQAIAHAKAAQAKAAAIgHQAHgIAAgNQAAgNgHgJQgIgHgKAAQgKAAgIAHg");
	this.shape.setTransform(42.675,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgRBOIAAibIAjAAIAACbg");
	this.shape_1.setTransform(32.15,16.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgdA1QgOgHgHgOQgIgOAAgSQAAgRAIgOQAHgNANgIQAOgHAQAAQARAAAOAHQANAHAHANQAIAOAAARIgBAKIhQAAQABALAGAFQAGAGAJAAQANAAAFgLIAmAAQgDALgIAKQgHAJgMAFQgLAFgPAAQgQAAgNgHgAAWgKQAAgJgGgGQgHgFgJAAQgIAAgGAFQgGAFgCAKIAsAAIAAAAg");
	this.shape_2.setTransform(22.625,18.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AAXBOIAAhAQAAgMgGgFQgHgHgKAAQgJAAgGAHQgGAFAAAMIAABAIgkAAIAAibIAkAAIAAA2QAFgHAKgFQAIgFAMAAQAUAAAMAOQAMANAAAWIAABFg");
	this.shape_3.setTransform(9.125,16.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol61, new cjs.Rectangle(0,0,51.7,33.4), null);


(lib.Symbol60 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AAXA7IAAg+QAAgMgGgHQgHgGgKAAQgJAAgGAGQgGAHAAAMIAAA+IgkAAIAAh0IAkAAIAAAQQAFgIAJgFQAJgEALAAQAVAAAMANQAMANAAAYIAABDg");
	this.shape.setTransform(36.075,18.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgjA1QgMgHgHgOQgHgOAAgSQAAgRAHgOQAHgNAMgIQALgHAPAAQALAAAKAFQAJAFAFAIIAAgQIAkAAIAAB0IgkAAIAAgRQgFAIgKAFQgJAFgLAAQgPAAgLgHgAgRgUQgHAIAAAMQAAANAHAIQAIAIAJAAQALAAAHgIQAIgHAAgOQAAgMgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_1.setTransform(21.475,18.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgcA1QgNgHgIgOQgHgOAAgSQAAgRAHgOQAIgNANgIQANgHAQAAQAWAAAPALQAPAMAFAVIgnAAQgEgNgPAAQgIAAgGAHQgGAIAAANQAAAOAGAIQAGAIAIAAQAPAAAEgOIAnAAQgFAVgPAMQgPALgWAAQgQAAgNgHg");
	this.shape_2.setTransform(8.35,18.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol60, new cjs.Rectangle(0,0,45.3,33.4), null);


(lib.Symbol59 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgXA3QgMgFgHgJQgHgJgBgMIAkAAQAAAGAGAEQAEAEAHAAQAGAAAEgDQAEgCAAgEQAAgGgGgCQgEgCgMgDIgUgGQgJgEgGgGQgGgHAAgMQAAgKAFgIQAGgIALgFQALgFAOAAQAVAAAOALQAMALACASIghAAQgBgGgFgEQgEgDgHAAQgGAAgDACQgDACgBAFQABAFAFACQAGADAKACIAVAHQAIADAGAGQAHAIgBAMQABAKgGAIQgGAIgKAFQgLAEgPAAQgOAAgMgFg");
	this.shape.setTransform(121.7,18.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgjA7IAAh0IAjAAIAAAUQAGgKAJgGQAKgFALAAIAAAmIgJAAQgOAAgHAGQgGAFAAAOIAAA2g");
	this.shape_1.setTransform(111.925,18.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgdA1QgOgHgHgOQgIgOAAgSQAAgRAIgOQAHgNANgIQAOgHAQAAQARAAAOAHQANAHAHANQAIAOAAARIgBAKIhQAAQABALAGAFQAGAGAJAAQANAAAFgLIAmAAQgDALgIAKQgHAJgMAFQgLAFgPAAQgQAAgNgHgAAWgKQAAgJgGgGQgHgFgJAAQgIAAgGAFQgGAFgCAKIAsAAIAAAAg");
	this.shape_2.setTransform(100.575,18.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AAOBOIgjgxIAAAxIgkAAIAAibIAkAAIAABVIAjguIArAAIgwA5IAxA7g");
	this.shape_3.setTransform(88.25,16.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("AgjA7IAAh0IAjAAIAAAUQAGgKAJgGQAKgFALAAIAAAmIgJAAQgOAAgHAGQgGAFAAAOIAAA2g");
	this.shape_4.setTransform(77.125,18.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#193F70").s().p("AgjA1QgMgHgHgOQgHgOAAgSQAAgRAHgOQAHgNAMgIQALgHAPAAQALAAAKAFQAJAFAFAIIAAgQIAkAAIAAB0IgkAAIAAgRQgFAIgKAFQgJAFgLAAQgPAAgLgHgAgRgUQgHAIAAAMQAAANAHAIQAIAIAJAAQALAAAHgIQAIgHAAgOQAAgMgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_5.setTransform(64.725,18.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#193F70").s().p("AA/A7IAAg+QAAgMgGgGQgGgGgLAAQgKAAgGAGQgGAGAAAMIAAA+IgiAAIAAg+QgBgMgGgGQgGgGgKAAQgKAAgHAGQgFAGAAAMIAAA+IgkAAIAAh0IAkAAIAAAPQAFgIAIgEQAKgEAKAAQAOAAAKAFQAJAGAHALQAFgKALgGQALgGAMAAQAWAAANANQANANAAAYIAABDg");
	this.shape_6.setTransform(46.9,18.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#193F70").s().p("AgeA1QgOgHgIgOQgIgOAAgSQAAgRAIgOQAIgNAOgIQAOgHAQAAQARAAAOAHQAOAIAIANQAIAOAAARQAAASgIAOQgIAOgOAHQgOAHgRAAQgRAAgNgHgAgQgVQgHAIAAANQAAAOAGAIQAHAHAKAAQAKAAAHgHQAHgIAAgOQAAgNgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_7.setTransform(29.075,18.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#193F70").s().p("AgRBUIAAh0IAjAAIAAB0gAgOgyQgHgFAAgJQAAgIAHgFQAFgGAJAAQAKAAAFAGQAHAFAAAIQAAAJgHAFQgFAGgKgBQgJABgFgGg");
	this.shape_8.setTransform(19.35,15.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#193F70").s().p("AgKBJQgKgEgFgIIAAAQIgkAAIAAibIAkAAIAAA4QAFgJAKgFQAJgFALAAQAPAAAMAHQALAIAHAOQAHAMAAASQAAASgHAOQgHAOgLAHQgMAIgPAAQgLAAgJgGgAgSgCQgHAHAAANQAAAOAHAIQAIAHAKAAQAKAAAIgHQAHgIAAgOQAAgNgHgHQgIgHgKAAQgKAAgIAHg");
	this.shape_9.setTransform(9.475,16.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol59, new cjs.Rectangle(0,0,129.9,33.4), null);


(lib.Symbol58 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgbA6IAAhyIATAAIAAATQAFgKAIgFQAKgGANAAIAAAUIgFAAQgfAAAAAjIAAA9g");
	this.shape.setTransform(26.725,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgdA0QgNgHgIgOQgHgNAAgSQAAgRAHgOQAIgNANgHQAOgIAPAAQAQAAAOAIQANAHAHANQAIAOAAARQAAASgIANQgIAOgNAHQgOAIgPgBQgQABgNgIgAgSglQgJAEgFAKQgGAKAAANQAAAOAFAJQAGAKAIAFQAJAFAKAAQAJgBAJgFQAJgEAGgKQAGgJAAgOQAAgNgGgKQgFgKgJgEQgJgFgKAAQgKAAgIAFg");
	this.shape_1.setTransform(15.625,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgNBQIAAhiIgPAAIAAgQIAPAAIAAgIQgBgTAKgJQAKgJAWAAIAAAQQgNAAgFAFQgFAFAAALIAAAIIAYAAIAAAQIgYAAIAABig");
	this.shape_2.setTransform(5.4,16.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol58, new cjs.Rectangle(0,0,32.3,33.4), null);


(lib.Symbol57 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgbA6IAAhyIATAAIAAATQAFgKAIgFQAKgGANAAIAAAUIgFAAQgfAAAAAjIAAA9g");
	this.shape.setTransform(72.375,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgcA0QgNgHgGgOQgIgNAAgSQAAgRAHgOQAIgNAMgHQANgIAQAAQAQAAANAIQAMAHAIAMQAGANAAAPIgBALIhbAAQABARALAKQALAJAOAAQAMAAAJgGQAIgGADgJIAVAAQgFAQgOALQgOALgUgBQgPABgOgIgAAkgHQAAgLgEgIQgFgIgJgEQgIgEgKgBQgOAAgJAKQgLAJgBARIBHAAIAAAAg");
	this.shape_1.setTransform(61.45,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgbA0QgMgHgIgOQgGgNgBgSQABgRAGgOQAIgNAMgHQANgIAQAAQAVAAAOALQANAKAFATIgVAAQgDgLgJgGQgIgGgMgBQgQAAgKAMQgKALAAAUQAAAVAKALQAKALAQAAQAMAAAIgGQAJgFADgMIAVAAQgFASgNALQgOALgVgBQgQABgNgIg");
	this.shape_2.setTransform(48.6,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AAhA6IAAhAQAAgRgJgJQgJgJgOAAQgPAAgJAJQgIAKAAASIAAA+IgUAAIAAhyIAUAAIAAARQAFgJAKgFQAKgEALgBQAUAAANANQAOAMAAAZIAABCg");
	this.shape_3.setTransform(35.625,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("AgfA0QgMgHgIgPQgGgNgBgRQABgRAGgOQAIgNAMgHQANgIAPAAQAPABAKAGQALAHAGAKIAAgWIATAAIAAByIgTAAIAAgVQgGAKgLAHQgLAHgOgBQgPABgNgIgAgSglQgKAFgFAKQgFAJAAANQAAANAFAJQAFALAKAEQAIAFAKABQAKgBAJgFQAJgEAGgLQAFgJAAgNQAAgNgFgJQgGgJgJgGQgJgFgKAAQgKAAgIAFg");
	this.shape_4.setTransform(21.45,18.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#193F70").s().p("AgbA0QgMgHgIgOQgHgNAAgSQAAgRAHgOQAIgNAMgHQANgIAPAAQAWAAANALQAOAKAEATIgUAAQgDgLgIgGQgJgGgNgBQgPAAgKAMQgKALAAAUQAAAVAKALQAKALAPAAQANAAAJgGQAIgFADgMIAUAAQgEASgOALQgOALgVgBQgPABgNgIg");
	this.shape_5.setTransform(8.35,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol57, new cjs.Rectangle(0,0,78,33.4), null);


(lib.Symbol56 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgJBOIAAibIATAAIAACbg");
	this.shape.setTransform(104.475,16.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgfA0QgMgHgHgPQgIgNABgRQgBgRAIgOQAHgNAMgHQANgIAPAAQAOABAMAGQALAHAFAKIAAgWIATAAIAAByIgTAAIAAgVQgFAKgMAHQgLAHgOgBQgQABgMgIgAgTglQgIAFgFAKQgGAJAAANQAAANAGAJQAFALAIAEQAJAFAKABQALgBAJgFQAIgEAFgLQAGgJAAgNQAAgNgGgJQgFgJgIgGQgJgFgLAAQgKAAgJAFg");
	this.shape_1.setTransform(94.5,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AAPBIQgPAAgIgHQgIgIAAgRIAAhCIgPAAIAAgQIAPAAIAAgdIASAAIAAAdIAeAAIAAAQIgeAAIAABCQAAAJADAEQAEADAJAAIAOAAIAAAQg");
	this.shape_2.setTransform(83.9,16.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AgbA0QgMgHgIgOQgGgNgBgSQABgRAGgOQAIgNAMgHQANgIAQAAQAVAAAOALQANAKAFATIgVAAQgDgLgJgGQgIgGgMgBQgQAAgKAMQgKALAAAUQAAAVAKALQAKALAQAAQAMAAAIgGQAJgFADgMIAVAAQgFASgNALQgPALgUgBQgQABgNgIg");
	this.shape_3.setTransform(73.8,18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("AgbA0QgNgHgIgOQgHgNAAgSQAAgRAHgOQAHgNANgHQANgIAQAAQARAAAMAIQAMAHAHAMQAHANAAAPIAAALIhbAAQABARAKAKQALAJAOAAQANAAAHgGQAJgGADgJIAVAAQgFAQgNALQgOALgVgBQgPABgNgIgAAlgHQAAgLgGgIQgEgIgIgEQgJgEgKgBQgNAAgLAKQgKAJgBARIBIAAIAAAAg");
	this.shape_4.setTransform(60.95,18.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#193F70").s().p("AgbA6IAAhyIATAAIAAATQAFgKAIgFQAKgGANAAIAAAUIgFAAQgfAAAAAjIAAA9g");
	this.shape_5.setTransform(51.075,18.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#193F70").s().p("AgdA0QgNgHgIgOQgHgNAAgSQAAgRAHgOQAIgNANgHQAOgIAPAAQAQAAAOAIQANAHAHANQAIAOAAARQAAASgIANQgIAOgNAHQgOAIgPgBQgQABgNgIgAgSglQgJAEgFAKQgGAKAAANQAAAOAFAJQAGAKAIAFQAJAFAKAAQAJgBAJgFQAJgEAGgKQAGgJAAgOQAAgNgGgKQgFgKgJgEQgJgFgKAAQgKAAgIAFg");
	this.shape_6.setTransform(39.975,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#193F70").s().p("AgJBOIAAibIATAAIAACbg");
	this.shape_7.setTransform(30.675,16.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#193F70").s().p("AgdA0QgNgHgIgOQgHgNAAgSQAAgRAHgOQAIgNANgHQAOgIAPAAQAQAAAOAIQANAHAHANQAIAOAAARQAAASgIANQgIAOgNAHQgOAIgPgBQgQABgNgIgAgSglQgJAEgFAKQgGAKAAANQAAAOAFAJQAGAKAIAFQAJAFAKAAQAJgBAJgFQAJgEAGgKQAGgJAAgOQAAgNgGgKQgFgKgJgEQgJgFgKAAQgKAAgIAFg");
	this.shape_8.setTransform(21.425,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#193F70").s().p("AgbA0QgMgHgIgOQgHgNAAgSQAAgRAHgOQAIgNAMgHQANgIAPAAQAWAAANALQAOAKAEATIgUAAQgDgLgIgGQgJgGgNgBQgPAAgKAMQgKALAAAUQAAAVAKALQAKALAPAAQANAAAJgGQAIgFADgMIAUAAQgEASgOALQgOALgVgBQgPABgNgIg");
	this.shape_9.setTransform(8.35,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol56, new cjs.Rectangle(0,0,109.3,33.4), null);


(lib.Symbol55 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AghBMQgPgKgDgTIATAAQACALAKAGQALAGANAAQAPAAAKgKQAKgJAAgSIAAgYQgFAKgMAGQgLAHgOAAQgPAAgNgHQgMgIgHgOQgIgMAAgSQAAgRAIgOQAHgNAMgHQANgIAPAAQAOAAALAHQAMAGAFAKIAAgVIATAAIAAB1QABAQgIAMQgGAMgNAHQgMAHgQAAQgXAAgOgLgAgThAQgIAFgFAKQgGAJAAANQAAAOAGAJQAFAJAIAFQAJAFAKAAQALAAAJgFQAIgFAFgJQAGgJAAgNQAAgOgGgJQgFgKgIgFQgJgFgLAAQgKAAgJAFg");
	this.shape.setTransform(70.2,21.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AAhA6IAAhAQAAgRgJgJQgJgJgOAAQgPAAgJAJQgIAKAAASIAAA+IgUAAIAAhyIAUAAIAAARQAFgJAKgFQAKgEALgBQAUAAANANQAOAMAAAZIAABCg");
	this.shape_1.setTransform(56.825,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgJBQIAAhyIATAAIAABygAgIg5QgEgEAAgFQAAgGAEgDQAEgEAEAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_2.setTransform(47.475,16.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AAPBIQgPAAgIgHQgIgIAAgRIAAhCIgPAAIAAgQIAPAAIAAgdIASAAIAAAdIAeAAIAAAQIgeAAIAABCQAAAJADAEQAEADAJAAIAOAAIAAAQg");
	this.shape_3.setTransform(41.05,16.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#193F70").s().p("AgVA3QgKgFgGgHQgGgJAAgLIATAAQABAKAHAEQAIAGAKAAQALAAAGgFQAGgEABgIQAAgHgHgEQgGgEgOgDIgVgHQgIgDgFgGQgHgHAAgLQABgJAFgIQAFgHAKgEQAKgEALgBQATAAALAKQANAKABAQIgTAAQgCgIgGgGQgGgFgLgBQgKABgGAEQgGAEAAAIQAAAFAEAEQADAEAGACIAOAFQAMADAJADQAHADAFAGQAGAGABALQgBAKgFAHQgFAIgJAEQgKAFgNgBQgMABgLgFg");
	this.shape_4.setTransform(31.8,18.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#193F70").s().p("AgbA0QgOgHgGgOQgIgNAAgSQAAgRAHgOQAIgNAMgHQANgIAQAAQAQAAANAIQAMAHAIAMQAGANAAAPIgBALIhbAAQABARALAKQALAJAOAAQANAAAHgGQAJgGADgJIAVAAQgFAQgOALQgOALgUgBQgQABgMgIgAAkgHQAAgLgEgIQgFgIgJgEQgIgEgKgBQgOAAgKAKQgKAJgBARIBHAAIAAAAg");
	this.shape_5.setTransform(19.85,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#193F70").s().p("AgIBJIAAiCIgoAAIAAgPIBhAAIAAAPIgnAAIAACCg");
	this.shape_6.setTransform(7.65,16.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol55, new cjs.Rectangle(0,0,79.8,33.4), null);


(lib.Symbol54 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AATA6IgThKIgSBKIgnAAIggh0IAjAAIARBTIAUhTIAlAAIAUBSIARhSIAhAAIgfB0g");
	this.shape.setTransform(51.55,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgeA1QgOgHgIgOQgIgOAAgSQAAgRAIgOQAIgNAOgIQAOgHAQAAQARAAAOAHQAOAIAIANQAIAOAAARQAAASgIAOQgIAOgOAHQgOAHgRAAQgRAAgNgHgAgQgVQgHAIAAANQAAAOAGAIQAHAHAKAAQAKAAAHgHQAHgIAAgOQAAgNgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_1.setTransform(35.775,18.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AAXA7IAAg+QAAgMgGgHQgHgGgKAAQgJAAgGAGQgGAHAAAMIAAA+IgkAAIAAh0IAkAAIAAAQQAFgIAJgFQAJgEALAAQAVAAAMANQAMANAAAYIAABDg");
	this.shape_2.setTransform(22.075,18.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#193F70").s().p("AANBOIgigxIAAAxIgkAAIAAibIAkAAIAABVIAiguIAsAAIgwA5IAxA7g");
	this.shape_3.setTransform(9.1,16.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol54, new cjs.Rectangle(0,0,62.8,33.4), null);


(lib.Symbol53 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgkA1QgKgFgGgMQgFgMAAgPIAAhDIAjAAIAAA/QAAALAGAHQAHAGAJAAQAKAAAGgGQAHgHAAgLIAAg/IAjAAIAAB0IgjAAIAAgQQgGAIgJAEQgJAFgLAAQgNAAgLgGg");
	this.shape.setTransform(35.625,18.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgeA1QgOgHgIgOQgIgOAAgSQAAgRAIgOQAIgNAOgIQAOgHAQAAQARAAAOAHQAOAIAIANQAIAOAAARQAAASgIAOQgIAOgOAHQgOAHgRAAQgRAAgNgHgAgQgVQgHAIAAANQAAAOAGAIQAHAHAKAAQAKAAAHgHQAHgIAAgOQAAgNgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_1.setTransform(21.925,18.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AgtBWIAbg7IgvhwIAoAAIAaBJIAbhJIAmAAIhICrg");
	this.shape_2.setTransform(8.625,20.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol53, new cjs.Rectangle(0,0,45,33.4), null);


(lib.Symbol52 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#193F70").s().p("AgjBHQgMgHgHgOQgHgOAAgSQAAgSAHgMQAHgOAMgIQALgHAPAAQAKAAAKAFQAJAFAGAIIAAg3IAkAAIAACbIgkAAIAAgRQgFAJgJAEQgKAGgLAAQgPAAgLgIgAgRgCQgHAHAAANQAAAOAHAIQAIAHAJAAQALAAAHgHQAIgIAAgOQAAgNgIgHQgHgHgLAAQgJAAgIAHg");
	this.shape.setTransform(30.175,16.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193F70").s().p("AgRBUIAAh0IAjAAIAAB0gAgOgyQgHgFAAgJQAAgIAHgFQAFgGAJAAQAKAAAFAGQAHAFgBAIQABAJgHAFQgFAGgKgBQgJABgFgGg");
	this.shape_1.setTransform(20.35,15.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#193F70").s().p("AhBBKIAAiTIA3AAQAWAAASAKQARAJAKAQQAJARAAAVQAAAWgJAQQgKARgRAKQgSAJgWAAgAgdArIARAAQATAAALgLQAMgMAAgUQAAgTgMgMQgLgLgTAAIgRAAg");
	this.shape_2.setTransform(9.925,16.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol52, new cjs.Rectangle(0,0,39.9,33.4), null);


(lib.Symbol51 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AD0B+QgHgEgEgIQgEgHAAgIQAAgKAEgHQAEgHAHgEQAGgEAJAAQAJAAAGAEQAHAEAEAGQADAHAAAIIAAAGIgwAAQAAAJAGAFQAFAFAIAAQAHAAAEgDQAEgDACgFIALAAQgCAJgIAFQgHAFgLAAQgIAAgHgDgAD2BRQgFAEgBAJIAmAAQAAgGgDgEQgCgEgFgCQgEgCgFgBQgIAAgFAGgABpB/QgGgDgDgGQgDgGAAgJIAAgjIAKAAIAAAiQAAAJAEAFQAFAEAHAAQAIAAAFgEQAFgFAAgJIAAgiIAKAAIAAA9IgKAAIAAgKQgDAFgFADQgFADgHgBQgHAAgFgCgAAlB7QgGgGAAgJIAKAAQAAAFADAEQADADAGAAQAFAAADgDQADgEAAgEIAAg5IAKAAIAAA5QAAAJgGAFQgGAHgJgBQgKABgGgHgAmjB/QgGgDgDgFQgDgEAAgHIAKAAQABAGAEADQAEAEAHAAQAHAAAEgEQAEgDAAgGQAAgEgCgDQgCgDgEgCIgKgDIgMgDQgFgCgDgEQgDgFAAgHQAAgGADgFQADgFAGgCQAGgDAHAAQALAAAHAFQAHAGABAJIgLAAQgBgFgEgDQgEgEgHAAQgGAAgEAEQgEADAAAGQAAAEADACQACADADACIAKACIAMAFQAFACADAEQAEAEAAAIQAAAFgDAFQgDAFgGADQgGADgIAAQgIAAgGgCgAnpB+QgHgDgEgGQgDgHAAgKIAAgwIAKAAIAAAxQAAAJAFAGQAFAEAIAAQAJAAAFgEQAFgGAAgJIAAgxIAKAAIAAAwQAAAKgEAHQgDAGgHADQgHADgIAAQgIAAgGgDgAhXB7QgHgGgBgMIAJAAQABAHAFAFQAEADAIAAQAIAAAEgDQAEgFAAgGQAAgIgGgEQgFgDgLAAIgDAAIAAgIIADAAQAKgBAFgDQAFgEAAgGQAAgGgEgEQgDgDgHAAQgHAAgEADQgFAEAAAGIgKAAQABgKAHgGQAHgFALAAQAHAAAGACQAFADADAEQADAFAAAGQAAAGgEAGQgEAFgGABIAAAAQAHACAEAFQAEAFAAAJQAAAHgDAFQgCAEgGADQgGADgIAAQgMAAgHgGgAIyCBIAAgSIgpAAIAAgIIAng1IAMAAIAAA0IALAAIAAAJIgLAAIAAASgAIVBmIAdAAIAAgqgAGOB2QgGgLAAgTQAAgTAGgLQAGgKAPAAQAQAAAGAKQAGALAAATQAAATgGALQgGAKgQABQgPgBgGgKgAGYA9QgEAEgBAHQgCAGAAAKQAAAKACAGQABAHAEAFQAEADAHAAQAIAAAEgDQADgFACgHQABgGAAgKQAAgKgBgGQgCgHgDgEQgEgEgIAAQgHAAgEAEgADPCBIAAgjQAAgIgEgFQgFgFgHAAQgIAAgFAFQgFAFAAAJIAAAiIgKAAIAAg9IAKAAIAAAJQADgFAFgDQAFgCAHAAQALAAAGAHQAHAHAAAMIAAAkgAgWCBIAAhHIgKAAIAAgJIAVAAIAABQgAiZB7QgHgGgCgKIAKAAQABAGAFAEQAFADAHAAQAIAAAFgFQAEgFAAgJQAAgIgEgFQgFgEgIAAQgGAAgEACQgFADgCAEIgJAAIAAgsIAwAAIAAAIIgnAAIAAAaQADgEAFgCQAFgCAFgBQAJAAAGAEQAGAFACAGQADAGAAAGQAAAIgDAGQgDAGgGAEQgGADgJABQgMgBgHgFgAjiB2QgGgLAAgTQAAgTAGgLQAGgKAQAAQAPAAAGAKQAGALAAATQAAATgGALQgGAKgPABQgQgBgGgKgAjYA9QgEAEgBAHQgBAGAAAKQAAAKABAGQABAHAEAFQAEADAIAAQAHAAAEgDQAEgFABgHQACgGAAgKQAAgKgCgGQgBgHgEgEQgEgEgHAAQgIAAgEAEgAk5CBIgGgSIgiAAIgGASIgLAAIAchMIAMAAIAbBMgAleBnIAcAAIgOgmgApKCBIgGgSIgiAAIgGASIgLAAIAchMIAMAAIAbBMgApvBnIAcAAIgOgmgAqYCBIgSggIgMAAIAAAgIgKAAIAAhNIAYAAQAJAAAGADQAGADADAFQADAFAAAGQAAAJgEAGQgFAFgJACIATAhgAq2BZIAOAAQAJAAAEgEQAEgEAAgHQAAgGgEgEQgEgEgJAAIgOAAgAsDCBIAAhNIAbAAQAIAAAGADQAFACADAFQADAEAAAGQAAAGgEAFQgEAEgGACQAEABAEACQADADACAEQACAFAAAEQAAAGgDAFQgDAEgFADQgGACgIABgAr5B4IARAAQAIAAAEgDQAEgEAAgGQAAgGgEgEQgFgEgHAAIgRAAgAr5BVIARAAQAHAAADgDQAEgDAAgGQAAgHgEgCQgDgEgIAAIgQAAgAt/CBIAAhNIAYAAQANAAAHAGQAHAGAAAKQAAAKgHAGQgGAHgOgBIgOAAIAAAhgAt1BYIAOAAQAJAAAEgEQAEgDAAgHQAAgOgRAAIgOAAgAu/CBIAAhNIAZAAQANAAAHAGQAGAGAAAKQAAAKgGAGQgHAHgNgBIgPAAIAAAhgAu1BYIAPAAQAIAAAEgEQAEgDAAgHQAAgOgQAAIgPAAgAHLCAIAAgIIAWgSQAIgHAGgIQAFgIAAgHQAAgIgDgEQgEgEgIAAQgHAAgEAFQgEAEgBAJIgJAAQAAgNAHgGQAHgIALABQAMAAAGAGQAHAGAAALQAAAJgFAJQgGAIgHAHIgSAPIAmAAIAAAJgAFHCAIAAgIIAWgSQAIgHAGgIQAFgIAAgHQAAgIgDgEQgEgEgIAAQgHAAgEAFQgEAEgBAJIgJAAQAAgNAHgGQAHgIALABQAMAAAGAGQAHAGAAALQAAAJgFAJQgGAIgHAHIgSAPIAmAAIAAAJgAklBcIAAgIIAsAAIAAAIgAo2BcIAAgIIAsAAIAAAIgAtCBcIAAgIIAsAAIAAAIgADVgVQgIgFgBgJIAKAAQABAFAFADQAGADAHAAQAIABAFgGQAGgFAAgJIAAgNQgDAFgGAEQgGADgIABQgIAAgHgFQgGgDgEgIQgEgHAAgJQAAgJAEgHQAEgHAGgEQAHgEAIAAQAIAAAGADQAGAEADAFIAAgLIAKAAIAAA+QAAAIgEAGQgDAHgHAEQgGADgJAAQgMAAgIgGgADdhfQgFADgDAFQgCAFAAAHQAAAHACAFQADAGAFACQAEACAGABQAGgBAEgCQAFgCADgGQADgFAAgHQAAgHgDgFQgDgEgFgEQgEgCgGAAQgGAAgEACgAN5gwQgHgDgDgIQgEgHAAgJQAAgJAEgHQADgHAHgEQAHgEAIAAQAHAAAGADQAGADADAGIAAggIAKAAIAABSIgKAAIAAgMQgDAFgGAEQgGADgHABQgIAAgHgFgAN/hfQgEADgDAFQgDAFAAAHQAAAHADAFQADAGAEACQAFACAGABQAFgBAFgCQAFgCACgGQADgFAAgHQAAgHgDgFQgCgEgFgEQgFgCgFAAQgGAAgFACgAM1gwQgGgDgEgIQgEgGAAgKQAAgJAEgHQADgHAHgEQAHgEAJAAQAIAAAHAEQAHADADAHQAEAHAAAIIgBAGIgwAAQABAJAFAFQAGAFAIAAQAGAAAFgDQAEgDACgFIALAAQgDAIgHAGQgHAFgLABQgJAAgHgFgAM3hdQgFAGgBAIIAmAAQAAgGgCgEQgDgEgEgCQgEgDgGABQgHAAgGAEgAKLgwQgHgDgEgIQgEgGAAgKQAAgJAEgHQAEgHAHgEQAGgEAJAAQAJAAAGAEQAHADAEAHQADAHAAAIIAAAGIgwAAQAAAJAGAFQAFAFAIAAQAHAAAEgDQAEgDACgFIALAAQgCAIgIAGQgHAFgLABQgIAAgHgFgAKNhdQgFAGgBAIIAmAAQAAgGgDgEQgCgEgFgCQgEgDgFABQgIAAgFAEgAJQguQgFgCgEgEQgDgFAAgFIAKAAQABAFAEACQADADAGAAQAGAAADgCQAEgDAAgEQAAgEgEgCIgLgDIgLgEQgEgCgDgDQgDgEAAgGQAAgEADgEQADgFAFgCQAFgCAGAAQAKAAAGAFQAHAGAAAIIgKAAQAAgFgEgDQgDgCgGAAQgFgBgEADQgDADAAADQAAADACACQACACADABIAIADIALADIAHAFQACAEABAFQAAAFgDAEQgDAEgFACQgFACgGABQgHgBgGgCgAIOgwQgHgDgEgIQgEgGAAgKQAAgJAEgHQAEgHAHgEQAGgEAJAAQAJAAAGAEQAHADAEAHQADAHAAAIIAAAGIgwAAQAAAJAGAFQAFAFAIAAQAHAAAEgDQAEgDACgFIALAAQgCAIgIAGQgHAFgLABQgIAAgHgFgAIQhdQgFAGgBAIIAmAAQAAgGgDgEQgCgEgFgCQgEgDgFABQgIAAgFAEgAGNguQgFgCgEgEQgDgFAAgFIAKAAQABAFAEACQADADAGAAQAGAAADgCQAEgDAAgEQAAgEgEgCIgLgDIgLgEQgEgCgDgDQgDgEAAgGQAAgEADgEQADgFAFgCQAFgCAGAAQAKAAAGAFQAHAGAAAIIgKAAQAAgFgEgDQgDgCgGAAQgFgBgEADQgDADAAADQAAADACACQACACADABIAIADIALADIAHAFQACAEABAFQAAAFgDAEQgDAEgFACQgFACgGABQgHgBgGgCgAiAgwQgHgDgDgHQgEgIAAgJQAAgJAEgHQADgHAHgEQAHgEAIAAQALAAAIAFQAHAGACAJIgLAAQgBgFgFgDQgEgEgHABQgIAAgGAFQgFAHAAAKQAAALAFAGQAGAGAIAAQAHAAAEgDQAFgDABgGIALAAQgCAJgHAGQgIAFgLABQgIAAgHgFgAlrgwQgGgDgEgIQgEgGAAgKQAAgJAEgHQADgHAHgEQAHgEAJAAQAIAAAHAEQAHADADAHQAEAHAAAIIgBAGIgwAAQABAJAFAFQAGAFAIAAQAGAAAFgDQAEgDACgFIALAAQgDAIgHAGQgHAFgLABQgJAAgHgFgAlphdQgFAGgBAIIAmAAQAAgGgCgEQgDgEgEgCQgEgDgGABQgHAAgGAEgAO3guQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgCACgDQABAAAAAAQABgBAAAAQABAAABAAQAAgBABAAQADAAACACQACADAAACQAAABAAABQgBAAAAABQAAAAAAABQgBABAAAAQgCACgDAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAgAhJguQgBAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgCACgDQAAAAABAAQAAgBABAAQAAAAABAAQABgBAAAAQADAAACACQACADAAACQAAABAAABQAAAAAAABQAAAAgBABQAAABgBAAQgCACgDAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAgAuwgxQgIgFgFgIQgFgJAAgMQAAgLAFgJQAFgJAIgFQAJgFALAAQAMAAAIAFQAJAFAFAJQAEAJAAALQAAAMgEAJQgFAIgJAFQgIAFgMAAQgLAAgJgFgAuthxQgIAEgEAIQgEAIAAAKQAAAKAEAIQAEAIAIAFQAHAEAKAAQALAAAHgEQAIgFAEgIQAEgIAAgKQAAgKgEgIQgEgIgIgEQgHgFgLABQgKgBgHAFgAL+gsIgYg9IALAAIATA0IASg0IALAAIgYA9gALEgsIAAg9IAKAAIAAAKQADgFAFgDQAFgDAHAAIAAAKIgDAAQgRABAAARIAAAigAHagsIAAg9IAKAAIAAAKQADgFAFgDQAFgDAHAAIAAAKIgDAAQgRABAAARIAAAigAFvgsQgIAAgEgFQgFgDAAgJIAAgjIgHAAIAAgJIAHAAIAAgPIAKAAIAAAPIAQAAIAAAJIgQAAIAAAjQAAAFACABQACACAFAAIAHAAIAAAJgAFCgsIAAgiQAAgJgEgGQgFgEgHAAQgIAAgFAFQgFAFAAAJIAAAiIgKAAIAAhSIAKAAIAAAeQADgFAFgDQAGgCAGAAQAHAAAFADQAGADADAGQADAGAAAIIAAAkgACxgsIAAg9IAKAAIAAA9gACIgsIAAg9IAKAAIAAAKQADgFAFgDQAFgDAHAAIAAAKIgDAAQgRABAAARIAAAigABQgsIAAhSIAKAAIAABSgAA1gsIAAhSIAKAAIAABSgAAfgsIgGgRIghAAIgGARIgLAAIAbhNIAMAAIAbBNgAgFhFIAbAAIgOgngAikgsIAAgiQAAgJgFgGQgEgEgIAAQgIAAgFAFQgEAFAAAJIAAAiIgKAAIAAg9IAKAAIAAAJQADgFAFgDQAFgCAGAAQALAAAHAHQAHAHAAAMIAAAkgAjrgsIAAhNIAKAAIAABNgAkxgsIAAg9IAKAAIAAAKQACgFAFgDQAFgDAHAAIAAAKIgCAAQgRABAAARIAAAigAmrgsIAAgJIAdgrIgdAAIAAgJIApAAIAAAJIgeArIAeAAIAAAJgAnCgsIAAg9IAKAAIAAA9gAnkgsIAAg0IgIAAIAAgJIAIAAIAAgEQAAgKAFgFQAFgFAMAAIAAAJQgHAAgDADQgCACAAAGIAAAEIAMAAIAAAJIgMAAIAAA0gAomgsIAAhNIAZAAQANAAAHAGQAGAHAAAKQAAAJgGAGQgHAGgNAAIgPAAIAAAhgAochVIAPAAQAIAAAEgDQAEgEAAgGQAAgPgQAAIgPAAgApjgsIAAgSIgpAAIAAgIIAng1IAMAAIAAA0IALAAIAAAJIgLAAIAAASgAqAhHIAdAAIAAgqgAsHg3QgGgLAAgTQAAgTAGgKQAGgLAPAAQAQAAAGALQAGAKAAATQAAATgGALQgGALgQAAQgPAAgGgLgAr9hwQgEAEgBAGQgCAIAAAJQAAAKACAGQABAHAEAEQAEAFAHAAQAIAAAEgFQADgEACgHQABgGAAgKQAAgJgBgIQgCgGgDgEQgEgEgIAAQgHAAgEAEgArKgtIAAgHIAWgTQAIgHAGgIQAFgIAAgIQAAgGgDgFQgEgEgIAAQgHAAgEAFQgEAEgBAJIgJAAQAAgNAHgHQAHgGALAAQAMgBAGAHQAHAGAAALQAAAJgFAJQgGAIgHAHIgSAQIAmAAIAAAIgAtOgtIAAgHIAWgTQAIgHAGgIQAFgIAAgIQAAgGgDgFQgEgEgIAAQgHAAgEAFQgEAEgBAJIgJAAQAAgNAHgHQAHgGALAAQAMgBAGAHQAHAGAAALQAAAJgFAJQgGAIgHAHIgSAQIAmAAIAAAIgAuog8QgFgEgDgFQgEgHAAgHQAAgIAEgFQADgGAFgDQAGgDAGAAQAJgBAGAFQAGAEACAIIgJAAQgCgEgDgDQgEgCgFAAQgGAAgFAFQgEAEAAAJQAAAJAEAFQAFAEAGAAQAKABAEgKIAJAAQgCAHgHAFQgGAFgIgBQgGAAgGgCgACyh0QgCgCAAgEQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAQADAAACACQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAAEgCACQgCACgDAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAAAgAnCh0QgCgCAAgEQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAEgBACQgCACgDAAQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape.setTransform(-34.225,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol51, new cjs.Rectangle(-130.5,-10,192.6,25.9), null);


(lib.Symbol50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXArQgLgGgGgLQgHgLAAgPQAAgOAHgLQAGgLAKgGQALgGANAAQAOAAALAGQALAGAGAKQAGALAAAOIgBAIIhBAAQABAJAFAEQAFAFAHAAQAKAAAFgJIAfAAQgDAJgGAIQgGAHgKAEQgJAFgMAAQgMAAgLgGgAASgIQAAgIgFgEQgFgFgIAAQgGAAgFAFQgFAEgBAIIAjAAIAAAAg");
	this.shape.setTransform(64.275,-7.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAwIAAheIAdAAIAAAQQAFgIAIgFQAHgEAKAAIAAAfIgIAAQgMAAgFAFQgFAEAAALIAAAsg");
	this.shape_1.setTransform(55.8,-7.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZArQgLgGgGgLQgHgLABgPQgBgOAHgLQAGgLAMgGQALgGANAAQAOAAALAGQAMAGAGALQAHALAAAOQAAAOgHAMQgHALgLAGQgMAGgNAAQgNAAgMgGgAgNgRQgFAGAAALQAAALAFAGQAFAGAIAAQAIAAAGgGQAGgGAAgLQAAgLgGgGQgGgGgIAAQgIAAgFAGg");
	this.shape_2.setTransform(46.4,-7.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAzAwIAAgyQAAgJgFgGQgFgEgIAAQgJAAgFAEQgEAGAAAJIAAAyIgcAAIAAgyQAAgJgFgGQgFgEgIAAQgJAAgFAEQgFAGAAAJIAAAyIgdAAIAAheIAdAAIAAAMQAFgGAHgEQAHgDAJAAQALAAAIAEQAIAGAEAIQAFgIAJgFQAIgFAKAAQASAAAKALQALAKAAATIAAA3g");
	this.shape_3.setTransform(32.025,-7.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASAwIAAgyQAAgKgFgGQgFgEgIAAQgHAAgFAEQgFAGAAAKIAAAyIgdAAIAAheIAdAAIAAAMQAEgFAIgEQAGgEAKAAQAQAAAKALQAKAKAAATIAAA3g");
	this.shape_4.setTransform(13.725,-7.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAwIAAheIAdAAIAAAQQAFgIAHgFQAIgEAKAAIAAAfIgJAAQgLAAgFAFQgFAEAAALIAAAsg");
	this.shape_5.setTransform(4.7,-7.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcArQgKgGgFgMQgGgLAAgOQAAgOAGgLQAFgLAKgGQAJgGAMAAQAJAAAHAEQAIAEAEAHIAAgOIAdAAIAABeIgdAAIAAgNQgEAGgIAFQgHAEgJAAQgMAAgJgGgAgNgQQgGAGAAAKQAAALAGAGQAGAGAHAAQAJAAAGgGQAGgGAAgLQAAgKgGgGQgGgHgJAAQgHAAgGAHg");
	this.shape_6.setTransform(-5.325,-7.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXArQgLgGgGgLQgHgLAAgPQAAgOAHgLQAGgLAKgGQALgGANAAQAOAAALAGQALAGAGAKQAGALAAAOIgBAIIhBAAQABAJAFAEQAFAFAHAAQAKAAAFgJIAfAAQgDAJgGAIQgGAHgKAEQgJAFgMAAQgMAAgLgGgAASgIQAAgIgFgEQgFgFgIAAQgGAAgFAFQgFAEgBAIIAjAAIAAAAg");
	this.shape_7.setTransform(-16.025,-7.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggA8IAAh3IAdAAIAABgIAkAAIAAAXg");
	this.shape_8.setTransform(-24.95,-9.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E96A5B").ss(1,1,1).p("Aoji9IRHAAQBOAAA4A4QA4A4AABNQAABOg4A4Qg4A4hOAAIxHAAQhPAAg4g4Qg3g4AAhOQAAhNA3g4QA4g4BPAAg");
	this.shape_9.setTransform(19.8328,-8.8,1.0003,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E96A5B").s().p("AojC+QhPAAg4g4Qg3g3AAhPQAAhNA3g5QA4g3BPAAIRHAAQBOAAA4A3QA4A5AABNQAABPg4A3Qg4A4hOAAg");
	this.shape_10.setTransform(19.8328,-8.8,1.0003,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol50, new cjs.Rectangle(-55,-28.8,149.7,40), null);


(lib.Symbol39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.icon2();
	this.instance.setTransform(-52,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(-52,-104,104,104), null);


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.icon1();
	this.instance.setTransform(-49,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-49,-102,98,102), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkDEEIAAoHIIHAAIAAIHg");
	mask.setTransform(26,26);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5BED4").s().p("AgzD/Qg0gLgpgcQhAgsgfhHQgKgYgFgZQgKg0AKgzQALg0AcgpQAshABHgfQAYgKAZgFQAzgKA0AKQA0ALApAcQBAAsAfBHQAKAYAFAZQAKAzgKA0QgLA0gcApQgsBAhHAfQgXAJgaAGQgYAFgcAAQgbAAgYgFgAgvhqQgVAJgSAQQgRASgJAUQgUAsAUAuQAJAUARARQASAQAVAJQAvATAwgTQAVgJASgQQARgRAJgUQAUgugUgsQgJgUgRgSQgSgQgVgJQgXgJgZAAQgYAAgXAJg");
	this.shape.setTransform(25.9875,26.0125);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,52,52), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag5BPIAAidIBzAAIAACdg");
	mask.setTransform(5.8,7.925);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D97161").s().p("AAUBPQgfAAgWgXQgWgWgBggQAAgfAWgYQAWgXAggBIAaAAIAAgBQALApAAAlQAAAngLAog");
	this.shape.setTransform(5.8995,7.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0.2,0.1,11.4,15.700000000000001), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Aj/EAIAAn/IH/AAIAAH/g");
	mask_1.setTransform(25.55,25.55);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D97161").s().p("AhyAAIByhyIBzByIhzBzg");
	this.shape_1.setTransform(25.55,25.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#213C69").s().p("AB0DoIlblcQgXgXAAgiQAAgiAXgYQAYgYAiAAQAiAAAXAYIFcFbQAXAYAAAiQAAAigXAYQgYAXgiABQgigBgYgXg");
	this.shape_2.setTransform(25.575,25.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#213C69").s().p("AjnDoQgXgYAAgiQAAgiAXgYIFblbQAYgYAiAAQAiAAAYAYQAXAYAAAiQAAAigXAXIlcFcQgXAXgiABQgigBgYgXg");
	this.shape_3.setTransform(25.575,25.55);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0.1,0,51,51.1), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D2DFEA").s().p("EgrwABOQggAAgXgXQgXgWAAghQAAgfAXgXQAXgXAgAAMBXPAAAQAoAAAbAXQAdAXAAAfQAAAhgdAWQgbAXgoAAg");
	this.shape_4.setTransform(287.875,7.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,575.8,15.7), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AiiCTIDQlpIB0BEIjPFpg");
	mask_2.setTransform(16.25,21.45);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CA775E").s().p("AgRBHIgvgbQgFgDgBgFQgCgGADgFIANgXQAEgFgHgFQgGgDgCgHQgCgIADgHIAXgnIBzBDIgWAnQgEAHgIACQgHACgHgFQgCgBgEAAQgDABgBADIgNAXQgCAFgGACIgEAAQgDAAgDgCg");
	this.shape_5.setTransform(12.8969,28.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B5CAE3").s().p("AgiAbQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAdgxQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIAlAWQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABIgGAKIgCABIg6AQg");
	this.shape_6.setTransform(7.35,35.7833);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#213C69").s().p("AhMCvIgvgbQgFgDgBgGQgCgFADgFIANgXQAEgHgHgDIAAgBQgGgDgCgIQgCgHADgHICJjtQAEgGAHgCQAIgCAGAEIBUAwQAHAEACAIQACAHgEAHIiIDsQgEAHgHACQgIACgHgEQgGgDgEAGIgNAXQgDAFgGABIgDABQgDAAgEgCg");
	this.shape_7.setTransform(18.7552,18.3775);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(3.8,0.7,28,37.8), null);


(lib.text2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Symbol_80
	this.instance = new lib.Symbol80();
	this.instance.setTransform(35.3,33.3,1,1,0,0,0,57.1,16.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({y:43.3,alpha:1},9).wait(27));

	// Symbol_79
	this.instance_1 = new lib.Symbol79();
	this.instance_1.setTransform(-55.25,33.3,1,1,0,0,0,32,16.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({y:43.3,alpha:1},9).wait(29));

	// Symbol_78
	this.instance_2 = new lib.Symbol78();
	this.instance_2.setTransform(64.55,6.9,1,1,0,0,0,22.2,16.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({y:16.9,alpha:1},9).wait(32));

	// Symbol_77
	this.instance_3 = new lib.Symbol77();
	this.instance_3.setTransform(17.4,6.9,1,1,0,0,0,23.4,16.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).to({y:16.9,alpha:1},9).wait(34));

	// Symbol_76
	this.instance_4 = new lib.Symbol76();
	this.instance_4.setTransform(-47.35,6.9,1,1,0,0,0,39.9,16.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({y:16.9,alpha:1},9).wait(36));

	// Symbol_75
	this.instance_5 = new lib.Symbol75();
	this.instance_5.setTransform(32.4,-19.5,1,1,0,0,0,50.7,16.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).to({y:-9.5,alpha:1},9).wait(38));

	// Symbol_74
	this.instance_6 = new lib.Symbol74();
	this.instance_6.setTransform(-52.85,-19.5,1,1,0,0,0,34.4,16.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({_off:false},0).to({y:-9.5,alpha:1},9).wait(40));

	// Symbol_73
	this.instance_7 = new lib.Symbol73();
	this.instance_7.setTransform(46.65,-45.9,1,1,0,0,0,39.1,16.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({y:-35.9,alpha:1},9).wait(43));

	// Symbol_72
	this.instance_8 = new lib.Symbol72();
	this.instance_8.setTransform(-40.05,-45.9,1,1,0,0,0,47.2,16.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({y:-35.9,alpha:1},9).wait(45));

	// Symbol_71
	this.instance_9 = new lib.Symbol71();
	this.instance_9.setTransform(62.9,-72.3,1,1,0,0,0,38,16.7);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({_off:false},0).to({y:-62.3,alpha:1},9).wait(48));

	// Symbol_70
	this.instance_10 = new lib.Symbol70();
	this.instance_10.setTransform(-31.85,-72.3,1,1,0,0,0,55.4,16.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:-62.3},9).wait(51));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-89,188.2,149);


(lib.text1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_164 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(164).call(this.frame_164).wait(1));

	// Symbol_65
	this.instance = new lib.Symbol65();
	this.instance.setTransform(47.65,79.7,1,1,0,0,0,28.7,16.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({y:94.7,alpha:1},9).wait(132));

	// Symbol_64
	this.instance_1 = new lib.Symbol64();
	this.instance_1.setTransform(-38.85,79.7,1,1,0,0,0,57.5,16.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({y:94.7,alpha:1},9).wait(132));

	// Symbol_63
	this.instance_2 = new lib.Symbol63();
	this.instance_2.setTransform(82.1,53.3,1,1,0,0,0,9.2,16.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({y:68.3,alpha:1},9).wait(132));

	// Symbol_62
	this.instance_3 = new lib.Symbol62();
	this.instance_3.setTransform(14.15,53.3,1,1,0,0,0,58.6,16.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).to({y:68.3,alpha:1},9).wait(134));

	// Symbol_61
	this.instance_4 = new lib.Symbol61();
	this.instance_4.setTransform(-70.55,53.3,1,1,0,0,0,25.8,16.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({_off:false},0).to({y:68.3,alpha:1},9).wait(134));

	// Symbol_60
	this.instance_5 = new lib.Symbol60();
	this.instance_5.setTransform(56.45,26.9,1,1,0,0,0,22.7,16.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).to({y:41.9,alpha:1},9).wait(135));

	// Symbol_59
	this.instance_6 = new lib.Symbol59();
	this.instance_6.setTransform(-31.45,26.9,1,1,0,0,0,64.9,16.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({y:41.9,alpha:1},9).wait(137));

	// Symbol_58
	this.instance_7 = new lib.Symbol58();
	this.instance_7.setTransform(-0.9,0.5,1,1,0,0,0,16.1,16.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(17).to({_off:false},0).to({y:15.5,alpha:1},9).wait(139));

	// Symbol_57
	this.instance_8 = new lib.Symbol57();
	this.instance_8.setTransform(-57.35,0.5,1,1,0,0,0,39,16.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15).to({_off:false},0).to({y:15.5,alpha:1},9).wait(141));

	// Symbol_56
	this.instance_9 = new lib.Symbol56();
	this.instance_9.setTransform(33.45,-25.9,1,1,0,0,0,48.6,16.7);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(12).to({_off:false},0).to({y:-10.9,alpha:1},9).wait(144));

	// Symbol_55
	this.instance_10 = new lib.Symbol55();
	this.instance_10.setTransform(-56.45,-25.9,1,1,0,0,0,39.9,16.7);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(9).to({_off:false},0).to({y:-10.9,alpha:1},9).wait(147));

	// Symbol_54
	this.instance_11 = new lib.Symbol54();
	this.instance_11.setTransform(20.35,-52.3,1,1,0,0,0,31.4,16.7);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(6).to({_off:false},0).to({y:-37.3,alpha:1},9).wait(150));

	// Symbol_53
	this.instance_12 = new lib.Symbol53();
	this.instance_12.setTransform(-33.85,-52.3,1,1,0,0,0,22.4,16.7);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({_off:false},0).to({y:-37.3,alpha:1},9).wait(153));

	// Symbol_52
	this.instance_13 = new lib.Symbol52();
	this.instance_13.setTransform(-76.45,-52.3,1,1,0,0,0,19.9,16.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({y:-37.3},9).wait(156));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.3,-69,190.39999999999998,180.4);


(lib.Symbol84 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol82();
	this.instance.setTransform(9,342.8,1,1.2331,0,0,0,9,278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol84, new cjs.Rectangle(0,0,18,685.6), null);


(lib.Symbol69 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol66();
	this.instance.setTransform(63,687.2,1,1,0,0,0,62.5,203);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap12, null, new cjs.Matrix2D(1,0,0,1,-60.5,-127.6)).s().p("ApcT8MAAAgn3IS5AAMAAAAi/IoHAAIAAE4g");
	this.shape.setTransform(169.5,447.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2DFEA").s().p("EgA2AsiQgXgbAAgoMAAAhXPQAAggAXgXQAWgXAgAAQAgAAAXAXQAXAXAAAgMAAABXPQAAAogXAbQgXAdggAAQggAAgWgdg");
	this.shape_1.setTransform(9.075,287.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol69, new cjs.Rectangle(1.3,0,228.7,890.1), null);


(lib.Symbol68 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol67();
	this.instance.setTransform(169.5,516.8,1,1,0,0,0,60.5,516.8);

	this.instance_1 = new lib.Symbol66();
	this.instance_1.setTransform(62.5,367.1,1,1,0,0,0,62.5,203);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol68, new cjs.Rectangle(1,0,229,1033.7), null);


(lib.Symbol41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Symbol_102
	this.instance = new lib.Symbol102();
	this.instance.setTransform(-31.15,9,1,1,0,0,0,111.9,15.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({y:25,alpha:1},9).wait(9));

	// Symbol_101
	this.instance_1 = new lib.Symbol101();
	this.instance_1.setTransform(-73.35,-16,1,1,0,0,0,22.4,16.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({y:0,alpha:1},9).wait(11));

	// Symbol_100
	this.instance_2 = new lib.Symbol100();
	this.instance_2.setTransform(-120.15,-16,1,1,0,0,0,22.9,16.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({y:0,alpha:1},9).wait(13));

	// Symbol_99
	this.instance_3 = new lib.Symbol99();
	this.instance_3.setTransform(26,-42.4,1,1,0,0,0,24.9,16.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({y:-26.4,alpha:1},9).wait(15));

	// Symbol_98
	this.instance_4 = new lib.Symbol98();
	this.instance_4.setTransform(-24.45,-42.4,1,1,0,0,0,24.1,16.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({y:-26.4,alpha:1},9).wait(17));

	// Symbol_97
	this.instance_5 = new lib.Symbol97();
	this.instance_5.setTransform(-69.05,-42.4,1,1,0,0,0,19.1,16.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({y:-26.4,alpha:1},9).wait(19));

	// Symbol_96
	this.instance_6 = new lib.Symbol96();
	this.instance_6.setTransform(-116.25,-42.4,1,1,0,0,0,26.8,16.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:-26.4},9).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143,-59.1,223.8,99.4);


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Symbol_95
	this.instance = new lib.Symbol95();
	this.instance.setTransform(12.6,19.3,1,1,0,0,0,47,16.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({y:43.3,alpha:1},9).wait(32));

	// Symbol_94
	this.instance_1 = new lib.Symbol94();
	this.instance_1.setTransform(-62.3,19.3,1,1,0,0,0,27.7,16.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).to({y:43.3,alpha:1},9).wait(34));

	// Symbol_93
	this.instance_2 = new lib.Symbol93();
	this.instance_2.setTransform(53.3,-7.1,1,1,0,0,0,25.8,16.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({y:16.9,alpha:1},9).wait(36));

	// Symbol_92
	this.instance_3 = new lib.Symbol92();
	this.instance_3.setTransform(7,-7.1,1,1,0,0,0,19.1,16.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({y:16.9,alpha:1},9).wait(38));

	// Symbol_91
	this.instance_4 = new lib.Symbol91();
	this.instance_4.setTransform(-51.8,-7.1,1,1,0,0,0,38.2,16.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({y:16.9,alpha:1},9).wait(40));

	// Symbol_90
	this.instance_5 = new lib.Symbol90();
	this.instance_5.setTransform(20.25,-33.5,1,1,0,0,0,11.3,16.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({y:-9.5,alpha:1},9).wait(42));

	// Symbol_89
	this.instance_6 = new lib.Symbol89();
	this.instance_6.setTransform(-41.2,-33.5,1,1,0,0,0,48.8,16.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).to({y:-9.5,alpha:1},9).wait(44));

	// Symbol_88
	this.instance_7 = new lib.Symbol88();
	this.instance_7.setTransform(51.45,-59.9,1,1,0,0,0,10.2,16.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({_off:false},0).to({y:-35.9,alpha:1},9).wait(46));

	// Symbol_87
	this.instance_8 = new lib.Symbol87();
	this.instance_8.setTransform(-25.1,-59.9,1,1,0,0,0,64.9,16.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).to({y:-35.9,alpha:1},9).wait(48));

	// Symbol_86
	this.instance_9 = new lib.Symbol86();
	this.instance_9.setTransform(39.2,-86.3,1,1,0,0,0,33.5,16.7);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).to({y:-62.3,alpha:1},9).wait(49));

	// Symbol_85
	this.instance_10 = new lib.Symbol85();
	this.instance_10.setTransform(-42.9,-86.3,1,1,0,0,0,47.1,16.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:-62.3},9).wait(51));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-103,169.1,163);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(20.2,-26,1,1,0,0,0,5.8,7.9);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(0,-26,1,1,0,0,0,26,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-26,-52,52,52), null);


// stage content:
(lib._300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [453];
	// timeline functions:
	this.frame_453 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(453).call(this.frame_453).wait(1));

	// text_f
	this.instance = new lib.Symbol51();
	this.instance.setTransform(212.85,553.2,1,1,0,0,0,0,-7.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(443).to({_off:false},0).to({y:561.2,alpha:1},10).wait(1));

	// cta
	this.instance_1 = new lib.Symbol50();
	this.instance_1.setTransform(156.35,492.3,1,1,0,0,0,19.8,-8.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(441).to({_off:false},0).to({y:498.3,alpha:1},10).wait(3));

	// ACT
	this.instance_2 = new lib.Symbol103();
	this.instance_2.setTransform(154.2,339.5,1,1,0,0,0,71,25.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(439).to({_off:false},0).to({y:351.5,alpha:1},10).wait(5));

	// Layer_30
	this.instance_3 = new lib.Symbol41();
	this.instance_3.setTransform(121.65,389.2,1,1,0,0,0,-103.3,-43);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(420).to({_off:false},0).wait(34));

	// txt2
	this.instance_4 = new lib.Symbol27();
	this.instance_4.setTransform(37.6,18.65,1,1,0,0,0,-90,-99);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(264).to({_off:false},0).wait(89).to({x:360.8},21).to({_off:true},1).wait(79));

	// ico_2
	this.instance_5 = new lib.Symbol39();
	this.instance_5.setTransform(98.5,195.5,0.4985,0.4985,0,0,0,0.1,-52);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(304).to({_off:false},0).to({y:227.5,alpha:1},15).wait(34).to({x:421.7},21).to({_off:true},1).wait(79));

	// txt_2
	this.instance_6 = new lib.text2();
	this.instance_6.setTransform(31.05,414.75,1,1,0,0,0,-87.2,-79);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(106).to({_off:false},0).wait(103).to({x:-268.15},25).to({_off:true},1).wait(219));

	// lupa
	this.instance_7 = new lib.Symbol26();
	this.instance_7.setTransform(97.85,316.55,0.5015,0.5015,0,0,0,0.1,-50.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(106).to({_off:false},0).to({y:334.75,alpha:1},13).wait(90).to({x:-201.35},25).to({_off:true},1).wait(219));

	// text_1
	this.instance_8 = new lib.text1();
	this.instance_8.setTransform(53.15,33.9,1,1,0,0,0,-111.2,-79);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).wait(75).to({y:-766.1},25).to({_off:true},1).wait(349));

	// x_idn
	this.instance_9 = new lib.ClipGroup_2();
	this.instance_9.setTransform(42.5,551.35,0.2732,0.2732,0,0,0,25.6,25.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(410).to({_off:false},0).to({regX:26.1,regY:25.9,scaleX:1.2929,scaleY:1.2926,x:43.1,y:551.7},10).wait(34));

	// pen
	this.instance_10 = new lib.ClipGroup_4();
	this.instance_10.setTransform(52.45,66.05,1,1,90.0009,0,0,16.3,21.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(7).to({_off:false},0).to({x:52.4,y:625.5},19,cjs.Ease.none).wait(28).to({regX:16.2,rotation:0,x:155.45,y:582.9},0).to({x:162.5,y:410},10).wait(1).to({rotation:90,x:172.6,y:427},0).wait(4).to({x:188.6,y:398},0).wait(1).to({x:222.6},0).wait(1).to({x:264.6,y:429.9},0).to({y:623.95},4).wait(4).to({y:12.45},25).wait(2).to({x:262.1,y:-2.05},0).to({y:661.95},23).wait(106).to({x:54.1,y:612.35},0).to({y:244.35},11).to({x:102.1,y:231.55},2).to({x:145.3,y:242.75},2).to({x:161.3,y:273.15},2).to({y:357.95},3).to({y:465.15},2).to({y:625.15},5).wait(6).to({rotation:0,skewY:180,x:255.3,y:595.95},0).to({x:261.55,y:-28.6},35).wait(72).to({x:253.55},0).to({x:256.5,y:169.8},7).to({x:209.65,y:202.6},2).to({x:160.05,y:177.8},2).to({x:152.05,y:150.6},2).to({y:94.6},2).to({y:62.6},2).to({y:22.6},2).to({y:-25.4},2).wait(2).to({rotation:90,skewY:0,x:48.1,y:7.9},0).to({y:591.9},17).to({_off:true},1).wait(38));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_398 = new cjs.Graphics().p("Ag+AwIAAhfIFnAAIAABfg");
	var mask_graphics_399 = new cjs.Graphics().p("AizDdIAAm4IFnAAIAAG4g");
	var mask_graphics_400 = new cjs.Graphics().p("AizGJIAAsRIFnAAIAAMRg");
	var mask_graphics_401 = new cjs.Graphics().p("AizI1IAAxpIFnAAIAARpg");
	var mask_graphics_402 = new cjs.Graphics().p("AizLhIAA3BIFnAAIAAXBg");
	var mask_graphics_403 = new cjs.Graphics().p("AizONIAA8ZIFnAAIAAcZg");
	var mask_graphics_404 = new cjs.Graphics().p("AizQ5MAAAghxIFnAAMAAAAhxg");
	var mask_graphics_405 = new cjs.Graphics().p("AizTmMAAAgnLIFnAAMAAAAnLg");
	var mask_graphics_406 = new cjs.Graphics().p("AizWSMAAAgsjIFnAAMAAAAsjg");
	var mask_graphics_407 = new cjs.Graphics().p("AizY+MAAAgx7IFnAAMAAAAx7g");
	var mask_graphics_408 = new cjs.Graphics().p("AizbqMAAAg3TIFnAAMAAAA3Tg");
	var mask_graphics_409 = new cjs.Graphics().p("AizeXMAAAg8tIFnAAMAAAA8tg");
	var mask_graphics_410 = new cjs.Graphics().p("EgCzAhDMAAAhCFIFnAAMAAABCFg");
	var mask_graphics_411 = new cjs.Graphics().p("EgCzAjvMAAAhHdIFnAAMAAABHdg");
	var mask_graphics_412 = new cjs.Graphics().p("EgCzAmbMAAAhM1IFnAAMAAABM1g");
	var mask_graphics_413 = new cjs.Graphics().p("EgCzApIMAAAhSOIFnAAMAAABSOg");
	var mask_graphics_414 = new cjs.Graphics().p("EgCzAr0MAAAhXnIFnAAMAAABXng");
	var mask_graphics_415 = new cjs.Graphics().p("EgA+AugMAAAhc/IFnAAMAAABc/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(398).to({graphics:mask_graphics_398,x:29.65,y:-4.825}).wait(1).to({graphics:mask_graphics_399,x:41.3,y:12.4}).wait(1).to({graphics:mask_graphics_400,x:41.3,y:29.625}).wait(1).to({graphics:mask_graphics_401,x:41.3,y:46.85}).wait(1).to({graphics:mask_graphics_402,x:41.3,y:64.05}).wait(1).to({graphics:mask_graphics_403,x:41.3,y:81.275}).wait(1).to({graphics:mask_graphics_404,x:41.3,y:98.5}).wait(1).to({graphics:mask_graphics_405,x:41.3,y:115.725}).wait(1).to({graphics:mask_graphics_406,x:41.3,y:132.95}).wait(1).to({graphics:mask_graphics_407,x:41.3,y:150.175}).wait(1).to({graphics:mask_graphics_408,x:41.3,y:167.4}).wait(1).to({graphics:mask_graphics_409,x:41.3,y:184.625}).wait(1).to({graphics:mask_graphics_410,x:41.3,y:201.85}).wait(1).to({graphics:mask_graphics_411,x:41.3,y:219.075}).wait(1).to({graphics:mask_graphics_412,x:41.3,y:236.275}).wait(1).to({graphics:mask_graphics_413,x:41.3,y:253.5}).wait(1).to({graphics:mask_graphics_414,x:41.3,y:270.725}).wait(1).to({graphics:mask_graphics_415,x:29.65,y:287.95}).wait(39));

	// li2
	this.instance_11 = new lib.Bitmap20();
	this.instance_11.setTransform(33,-67,1,1.1562);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(398).to({_off:false},0).wait(56));

	// mask_idn (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_375 = new cjs.Graphics().p("AnnA2IAAhsIPPAAIAABsg");
	var mask_1_graphics_376 = new cjs.Graphics().p("AnnC9IAAl5IPPAAIAAF5g");
	var mask_1_graphics_377 = new cjs.Graphics().p("AnnFEIAAqHIPPAAIAAKHg");
	var mask_1_graphics_378 = new cjs.Graphics().p("AnnHKIAAuTIPPAAIAAOTg");
	var mask_1_graphics_379 = new cjs.Graphics().p("AnnJRIAAyhIPPAAIAAShg");
	var mask_1_graphics_380 = new cjs.Graphics().p("AnnLYIAA2vIPPAAIAAWvg");
	var mask_1_graphics_381 = new cjs.Graphics().p("AnnNeIAA67IPPAAIAAa7g");
	var mask_1_graphics_382 = new cjs.Graphics().p("AnnPlIAA/JIPPAAIAAfJg");
	var mask_1_graphics_383 = new cjs.Graphics().p("AnnRsMAAAgjXIPPAAMAAAAjXg");
	var mask_1_graphics_384 = new cjs.Graphics().p("AnnTyMAAAgnjIPPAAMAAAAnjg");
	var mask_1_graphics_386 = new cjs.Graphics().p("AsPTyIAAmgIJQAAMAAAghDIPPAAMAAAAnjIvPAAIAAAAg");
	var mask_1_graphics_388 = new cjs.Graphics().p("AsPTyIAAq3IIQAAIAAEXIBAAAMAAAghDIPPAAMAAAAnjIvPAAIAAAAg");
	var mask_1_graphics_390 = new cjs.Graphics().p("AsPTyIAAy/IFgAAIAAIIICwAAIAAEXIBAAAMAAAghDIPPAAMAAAAnjIvPAAIAAAAg");
	var mask_1_graphics_392 = new cjs.Graphics().p("AsPTyIAA4mIFgAAIAANvICwAAIAAEXIBAAAMAAAghDIPPAAMAAAAnjIvPAAIAAAAg");
	var mask_1_graphics_394 = new cjs.Graphics().p("AsPTyIAA+WIFgAAIAATfICwAAIAAEXIBAAAMAAAghDIPPAAMAAAAnjIvPAAIAAAAg");
	var mask_1_graphics_396 = new cjs.Graphics().p("AsPTyMAAAgkWIFgAAIAAZfICwAAIAAEXIBAAAMAAAghDIPPAAMAAAAnjIvPAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(375).to({graphics:mask_1_graphics_375,x:258.4,y:-16.95}).wait(1).to({graphics:mask_1_graphics_376,x:258.4,y:-3.5}).wait(1).to({graphics:mask_1_graphics_377,x:258.4,y:9.975}).wait(1).to({graphics:mask_1_graphics_378,x:258.4,y:23.425}).wait(1).to({graphics:mask_1_graphics_379,x:258.4,y:36.9}).wait(1).to({graphics:mask_1_graphics_380,x:258.4,y:50.35}).wait(1).to({graphics:mask_1_graphics_381,x:258.4,y:63.825}).wait(1).to({graphics:mask_1_graphics_382,x:258.4,y:77.275}).wait(1).to({graphics:mask_1_graphics_383,x:258.4,y:90.75}).wait(1).to({graphics:mask_1_graphics_384,x:258.4,y:104.2}).wait(2).to({graphics:mask_1_graphics_386,x:228.825,y:104.225}).wait(2).to({graphics:mask_1_graphics_388,x:228.825,y:104.225}).wait(2).to({graphics:mask_1_graphics_390,x:228.825,y:104.225}).wait(2).to({graphics:mask_1_graphics_392,x:228.825,y:104.225}).wait(2).to({graphics:mask_1_graphics_394,x:228.825,y:104.225}).wait(2).to({graphics:mask_1_graphics_396,x:228.825,y:104.225}).wait(58));

	// li1
	this.instance_12 = new lib.Bitmap19();
	this.instance_12.setTransform(153,-95);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(375).to({_off:false},0).wait(79));

	// mask_idn (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_268 = new cjs.Graphics().p("AlPBIIAAiAIgQAAIAAgPIK/AAIAACPg");
	var mask_2_graphics_269 = new cjs.Graphics().p("AlPCgIAAkeIgQAAIAAghIK/AAIAAE/g");
	var mask_2_graphics_270 = new cjs.Graphics().p("AlPD4IAAm8IgQAAIAAgzIK/AAIAAHvg");
	var mask_2_graphics_271 = new cjs.Graphics().p("AlPFQIAApZIgQAAIAAhGIK/AAIAAKfg");
	var mask_2_graphics_272 = new cjs.Graphics().p("AlPGoIAAr3IgQAAIAAhYIK/AAIAANPg");
	var mask_2_graphics_273 = new cjs.Graphics().p("AlPIAIAAuUIgQAAIAAhrIK/AAIAAP/g");
	var mask_2_graphics_274 = new cjs.Graphics().p("AlPJYIAAwyIgQAAIAAh9IK/AAIAASvg");
	var mask_2_graphics_275 = new cjs.Graphics().p("AlPKwIAAzPIgQAAIAAiQIK/AAIAAVfg");
	var mask_2_graphics_276 = new cjs.Graphics().p("AlPMIIAA1uIgQAAIAAihIK/AAIAAYPg");
	var mask_2_graphics_277 = new cjs.Graphics().p("AlPNgIAA4LIgQAAIAAi0IK/AAIAAa/g");
	var mask_2_graphics_278 = new cjs.Graphics().p("AlPO4IAA6pIgQAAIAAjGIK/AAIAAdvg");
	var mask_2_graphics_279 = new cjs.Graphics().p("AlPQQIAA9GIgQAAIAAjZIK/AAMAAAAgfg");
	var mask_2_graphics_280 = new cjs.Graphics().p("AlPRoIAA/kIgQAAIAAjrIK/AAMAAAAjPg");
	var mask_2_graphics_281 = new cjs.Graphics().p("AlPTAMAAAgiBIgQAAIAAj+IK/AAMAAAAl/g");
	var mask_2_graphics_282 = new cjs.Graphics().p("AlPUYMAAAgkfIgQAAIAAkQIK/AAMAAAAovg");
	var mask_2_graphics_283 = new cjs.Graphics().p("AlPVwMAAAgm9IgQAAIAAkiIK/AAMAAAArfg");
	var mask_2_graphics_284 = new cjs.Graphics().p("AlPXIMAAAgpbIgQAAIAAk0IK/AAMAAAAuPg");
	var mask_2_graphics_285 = new cjs.Graphics().p("AlPYgMAAAgr4IgQAAIAAlHIK/AAMAAAAw/g");
	var mask_2_graphics_286 = new cjs.Graphics().p("AlPZ4MAAAguWIgQAAIAAlZIK/AAMAAAAzvg");
	var mask_2_graphics_287 = new cjs.Graphics().p("AlPbQMAAAgw0IgQAAIAAlrIK/AAMAAAA2fg");
	var mask_2_graphics_288 = new cjs.Graphics().p("AlPcoMAAAgzRIgQAAIAAl+IK/AAMAAAA5Pg");
	var mask_2_graphics_289 = new cjs.Graphics().p("AlPeAMAAAg1wIgQAAIAAmPIK/AAMAAAA7/g");
	var mask_2_graphics_290 = new cjs.Graphics().p("AlPfYMAAAg4NIgQAAIAAmiIK/AAMAAAA+vg");
	var mask_2_graphics_291 = new cjs.Graphics().p("EgFPAgwMAAAg6rIgQAAIAAm0IK/AAMAAABBfg");
	var mask_2_graphics_292 = new cjs.Graphics().p("EgFPAiIMAAAg9IIgQAAIAAnHIK/AAMAAABEPg");
	var mask_2_graphics_293 = new cjs.Graphics().p("EgFPAjgMAAAg/mIgQAAIAAnZIK/AAMAAABG/g");
	var mask_2_graphics_294 = new cjs.Graphics().p("EgFPAk4MAAAhCDIgQAAIAAnsIK/AAMAAABJvg");
	var mask_2_graphics_295 = new cjs.Graphics().p("EgFPAmQMAAAhEhIgQAAIAAn+IK/AAMAAABMfg");
	var mask_2_graphics_296 = new cjs.Graphics().p("EgFPAnoMAAAhG/IgQAAIAAoQIK/AAMAAABPPg");
	var mask_2_graphics_297 = new cjs.Graphics().p("EgFPApAMAAAhJdIgQAAIAAoiIK/AAMAAABR/g");
	var mask_2_graphics_298 = new cjs.Graphics().p("EgFPAqYMAAAhL6IgQAAIAAo1IK/AAMAAABUvg");
	var mask_2_graphics_299 = new cjs.Graphics().p("EgFPArwMAAAhOYIgQAAIAApHIK/AAMAAABXfg");
	var mask_2_graphics_300 = new cjs.Graphics().p("EgFPAtIMAAAhQ2IgQAAIAApZIK/AAMAAABaPg");
	var mask_2_graphics_301 = new cjs.Graphics().p("EgFPAugMAAAhTTIgQAAIAApsIK/AAMAAABc/g");
	var mask_2_graphics_302 = new cjs.Graphics().p("EgFPAv4MAAAhVxIgQAAIAAp+IK/AAMAAABfvg");
	var mask_2_graphics_303 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");
	var mask_2_graphics_353 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");
	var mask_2_graphics_354 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");
	var mask_2_graphics_355 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");
	var mask_2_graphics_356 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");
	var mask_2_graphics_357 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");
	var mask_2_graphics_358 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");
	var mask_2_graphics_359 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");
	var mask_2_graphics_360 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");
	var mask_2_graphics_361 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");
	var mask_2_graphics_362 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");
	var mask_2_graphics_363 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");
	var mask_2_graphics_364 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");
	var mask_2_graphics_365 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");
	var mask_2_graphics_366 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");
	var mask_2_graphics_367 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");
	var mask_2_graphics_368 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");
	var mask_2_graphics_369 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");
	var mask_2_graphics_370 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");
	var mask_2_graphics_371 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");
	var mask_2_graphics_372 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");
	var mask_2_graphics_373 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");
	var mask_2_graphics_374 = new cjs.Graphics().p("EgFPAxQMAAAhYOIgQAAIAAqRIK/AAMAAABifg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(268).to({graphics:mask_2_graphics_268,x:264.8,y:614.55}).wait(1).to({graphics:mask_2_graphics_269,x:264.8,y:605.75}).wait(1).to({graphics:mask_2_graphics_270,x:264.8,y:596.95}).wait(1).to({graphics:mask_2_graphics_271,x:264.8,y:588.15}).wait(1).to({graphics:mask_2_graphics_272,x:264.8,y:579.35}).wait(1).to({graphics:mask_2_graphics_273,x:264.8,y:570.55}).wait(1).to({graphics:mask_2_graphics_274,x:264.8,y:561.75}).wait(1).to({graphics:mask_2_graphics_275,x:264.8,y:552.95}).wait(1).to({graphics:mask_2_graphics_276,x:264.8,y:544.15}).wait(1).to({graphics:mask_2_graphics_277,x:264.8,y:535.35}).wait(1).to({graphics:mask_2_graphics_278,x:264.8,y:526.55}).wait(1).to({graphics:mask_2_graphics_279,x:264.8,y:517.75}).wait(1).to({graphics:mask_2_graphics_280,x:264.8,y:508.95}).wait(1).to({graphics:mask_2_graphics_281,x:264.8,y:500.15}).wait(1).to({graphics:mask_2_graphics_282,x:264.8,y:491.35}).wait(1).to({graphics:mask_2_graphics_283,x:264.8,y:482.55}).wait(1).to({graphics:mask_2_graphics_284,x:264.8,y:473.775}).wait(1).to({graphics:mask_2_graphics_285,x:264.8,y:464.95}).wait(1).to({graphics:mask_2_graphics_286,x:264.8,y:456.2}).wait(1).to({graphics:mask_2_graphics_287,x:264.8,y:447.375}).wait(1).to({graphics:mask_2_graphics_288,x:264.8,y:438.6}).wait(1).to({graphics:mask_2_graphics_289,x:264.8,y:429.8}).wait(1).to({graphics:mask_2_graphics_290,x:264.8,y:421}).wait(1).to({graphics:mask_2_graphics_291,x:264.8,y:412.2}).wait(1).to({graphics:mask_2_graphics_292,x:264.8,y:403.4}).wait(1).to({graphics:mask_2_graphics_293,x:264.8,y:394.6}).wait(1).to({graphics:mask_2_graphics_294,x:264.8,y:385.8}).wait(1).to({graphics:mask_2_graphics_295,x:264.8,y:377}).wait(1).to({graphics:mask_2_graphics_296,x:264.8,y:368.2}).wait(1).to({graphics:mask_2_graphics_297,x:264.8,y:359.4}).wait(1).to({graphics:mask_2_graphics_298,x:264.8,y:350.6}).wait(1).to({graphics:mask_2_graphics_299,x:264.8,y:341.8}).wait(1).to({graphics:mask_2_graphics_300,x:264.8,y:333}).wait(1).to({graphics:mask_2_graphics_301,x:264.8,y:324.2}).wait(1).to({graphics:mask_2_graphics_302,x:264.8,y:315.4}).wait(1).to({graphics:mask_2_graphics_303,x:264.8,y:306.6}).wait(50).to({graphics:mask_2_graphics_353,x:264.8,y:306.6}).wait(1).to({graphics:mask_2_graphics_354,x:280.05,y:306.6}).wait(1).to({graphics:mask_2_graphics_355,x:295.3,y:306.6}).wait(1).to({graphics:mask_2_graphics_356,x:310.5,y:306.6}).wait(1).to({graphics:mask_2_graphics_357,x:325.75,y:306.6}).wait(1).to({graphics:mask_2_graphics_358,x:341,y:306.6}).wait(1).to({graphics:mask_2_graphics_359,x:356.25,y:306.6}).wait(1).to({graphics:mask_2_graphics_360,x:371.45,y:306.6}).wait(1).to({graphics:mask_2_graphics_361,x:386.7,y:306.6}).wait(1).to({graphics:mask_2_graphics_362,x:401.95,y:306.6}).wait(1).to({graphics:mask_2_graphics_363,x:417.2,y:306.6}).wait(1).to({graphics:mask_2_graphics_364,x:432.4,y:306.6}).wait(1).to({graphics:mask_2_graphics_365,x:447.65,y:306.6}).wait(1).to({graphics:mask_2_graphics_366,x:462.9,y:306.6}).wait(1).to({graphics:mask_2_graphics_367,x:478.15,y:306.6}).wait(1).to({graphics:mask_2_graphics_368,x:493.35,y:306.6}).wait(1).to({graphics:mask_2_graphics_369,x:508.6,y:306.6}).wait(1).to({graphics:mask_2_graphics_370,x:523.85,y:306.6}).wait(1).to({graphics:mask_2_graphics_371,x:539.1,y:306.6}).wait(1).to({graphics:mask_2_graphics_372,x:554.3,y:306.6}).wait(1).to({graphics:mask_2_graphics_373,x:569.55,y:306.6}).wait(1).to({graphics:mask_2_graphics_374,x:584.8,y:306.6}).wait(1).to({graphics:null,x:0,y:0}).wait(79));

	// line_x2
	this.instance_13 = new lib.Symbol84();
	this.instance_13.setTransform(265,314.25,1,1,0,0,0,9,342.8);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(268).to({_off:false},0).wait(85).to({x:585},21).to({_off:true},1).wait(79));

	// mask_idn (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_235 = new cjs.Graphics().p("AmXAgIAAg/IMvAAIAAA/g");
	var mask_3_graphics_236 = new cjs.Graphics().p("AmXC/IAAl9IMvAAIAAF9g");
	var mask_3_graphics_237 = new cjs.Graphics().p("AmXFdIAAq5IMvAAIAAK5g");
	var mask_3_graphics_238 = new cjs.Graphics().p("AmXH8IAAv2IMvAAIAAP2g");
	var mask_3_graphics_239 = new cjs.Graphics().p("AmXKaIAA0zIMvAAIAAUzg");
	var mask_3_graphics_240 = new cjs.Graphics().p("AmXM5IAA5xIMvAAIAAZxg");
	var mask_3_graphics_241 = new cjs.Graphics().p("AmXPXIAA+tIMvAAIAAetg");
	var mask_3_graphics_242 = new cjs.Graphics().p("AmXR2MAAAgjrIMvAAMAAAAjrg");
	var mask_3_graphics_243 = new cjs.Graphics().p("AmXUVMAAAgooIMvAAMAAAAoog");
	var mask_3_graphics_244 = new cjs.Graphics().p("AmXWzMAAAgtlIMvAAMAAAAtlg");
	var mask_3_graphics_245 = new cjs.Graphics().p("AmXZSMAAAgyjIMvAAMAAAAyjg");
	var mask_3_graphics_246 = new cjs.Graphics().p("AmXbwMAAAg3fIMvAAMAAAA3fg");
	var mask_3_graphics_248 = new cjs.Graphics().p("AmXfAMAAAg9/IMvAAMAAAA9/g");
	var mask_3_graphics_250 = new cjs.Graphics().p("AtnfAMAAAg9/IbPAAIAAGgIufAAMAAAA3fg");
	var mask_3_graphics_252 = new cjs.Graphics().p("AtnfAMAAAg9/IbPAAIAAJgIqwAAIAAjAIjvAAMAAAA3fg");
	var mask_3_graphics_255 = new cjs.Graphics().p("AtnfAMAAAg9/IbPAAIAAHAIqwAAIAAggIjvAAMAAAA3fgAC4n+IAAwBIKwAAIAAQBg");
	var mask_3_graphics_257 = new cjs.Graphics().p("AtnfAMAAAg9/IbPAAIAAHAIqwAAIAAggIjvAAMAAAA3fgAC4JBMAAAghAIKwAAMAAAAhAg");
	var mask_3_graphics_259 = new cjs.Graphics().p("AtnfAMAAAg9/IbPAAIAAHAIqwAAIAAggIjvAAMAAAA3fgAC4SxMAAAgqvIKwAAMAAAAqvg");
	var mask_3_graphics_260 = new cjs.Graphics().p("AtnfAMAAAg9/IbPAAIAAHAIqwAAIAAggIjvAAMAAAA3fgAC4YBMAAAgv/IKwAAMAAAAv/g");
	var mask_3_graphics_262 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");
	var mask_3_graphics_353 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");
	var mask_3_graphics_354 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");
	var mask_3_graphics_355 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");
	var mask_3_graphics_356 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");
	var mask_3_graphics_357 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");
	var mask_3_graphics_358 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");
	var mask_3_graphics_359 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");
	var mask_3_graphics_360 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");
	var mask_3_graphics_361 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");
	var mask_3_graphics_362 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");
	var mask_3_graphics_363 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");
	var mask_3_graphics_364 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");
	var mask_3_graphics_365 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");
	var mask_3_graphics_366 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");
	var mask_3_graphics_367 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");
	var mask_3_graphics_368 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");
	var mask_3_graphics_369 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");
	var mask_3_graphics_370 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");
	var mask_3_graphics_371 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");
	var mask_3_graphics_372 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");
	var mask_3_graphics_373 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");
	var mask_3_graphics_374 = new cjs.Graphics().p("AC4f4MAAAg5PIjvAAMAAAA3fIswAAMAAAg9/IbPAAMAAAA/vg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(235).to({graphics:mask_3_graphics_235,x:50.4,y:596.8}).wait(1).to({graphics:mask_3_graphics_236,x:50.4,y:580.95}).wait(1).to({graphics:mask_3_graphics_237,x:50.4,y:565.1}).wait(1).to({graphics:mask_3_graphics_238,x:50.4,y:549.25}).wait(1).to({graphics:mask_3_graphics_239,x:50.4,y:533.375}).wait(1).to({graphics:mask_3_graphics_240,x:50.4,y:517.525}).wait(1).to({graphics:mask_3_graphics_241,x:50.4,y:501.675}).wait(1).to({graphics:mask_3_graphics_242,x:50.4,y:485.825}).wait(1).to({graphics:mask_3_graphics_243,x:50.4,y:469.95}).wait(1).to({graphics:mask_3_graphics_244,x:50.4,y:454.1}).wait(1).to({graphics:mask_3_graphics_245,x:50.4,y:438.25}).wait(1).to({graphics:mask_3_graphics_246,x:50.4,y:422.4}).wait(2).to({graphics:mask_3_graphics_248,x:50.4,y:401.6}).wait(2).to({graphics:mask_3_graphics_250,x:96.8,y:401.6}).wait(2).to({graphics:mask_3_graphics_252,x:96.8,y:401.6}).wait(3).to({graphics:mask_3_graphics_255,x:96.8,y:401.6}).wait(2).to({graphics:mask_3_graphics_257,x:96.8,y:401.6}).wait(2).to({graphics:mask_3_graphics_259,x:96.8,y:401.6}).wait(1).to({graphics:mask_3_graphics_260,x:96.8,y:401.6}).wait(2).to({graphics:mask_3_graphics_262,x:96.8,y:407.2}).wait(91).to({graphics:mask_3_graphics_353,x:96.8,y:407.2}).wait(1).to({graphics:mask_3_graphics_354,x:112.05,y:407.2}).wait(1).to({graphics:mask_3_graphics_355,x:127.3,y:407.2}).wait(1).to({graphics:mask_3_graphics_356,x:142.5,y:407.2}).wait(1).to({graphics:mask_3_graphics_357,x:157.75,y:407.2}).wait(1).to({graphics:mask_3_graphics_358,x:173,y:407.2}).wait(1).to({graphics:mask_3_graphics_359,x:188.25,y:407.2}).wait(1).to({graphics:mask_3_graphics_360,x:203.45,y:407.2}).wait(1).to({graphics:mask_3_graphics_361,x:218.7,y:407.2}).wait(1).to({graphics:mask_3_graphics_362,x:233.95,y:407.2}).wait(1).to({graphics:mask_3_graphics_363,x:249.2,y:407.2}).wait(1).to({graphics:mask_3_graphics_364,x:264.4,y:407.2}).wait(1).to({graphics:mask_3_graphics_365,x:279.65,y:407.2}).wait(1).to({graphics:mask_3_graphics_366,x:294.9,y:407.2}).wait(1).to({graphics:mask_3_graphics_367,x:310.15,y:407.2}).wait(1).to({graphics:mask_3_graphics_368,x:325.35,y:407.2}).wait(1).to({graphics:mask_3_graphics_369,x:340.6,y:407.2}).wait(1).to({graphics:mask_3_graphics_370,x:355.85,y:407.2}).wait(1).to({graphics:mask_3_graphics_371,x:371.1,y:407.2}).wait(1).to({graphics:mask_3_graphics_372,x:386.3,y:407.2}).wait(1).to({graphics:mask_3_graphics_373,x:401.55,y:407.2}).wait(1).to({graphics:mask_3_graphics_374,x:416.8,y:407.2}).wait(1).to({graphics:null,x:0,y:0}).wait(79));

	// line_x1
	this.instance_14 = new lib.Symbol83();
	this.instance_14.setTransform(98.5,456,1,1,0,0,0,62.5,238);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(235).to({_off:false},0).wait(118).to({x:418.5},21).to({_off:true},1).wait(79));

	// mask_1 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_106 = new cjs.Graphics().p("AmtAoIAAhPINbAAIAABPg");
	var mask_4_graphics_107 = new cjs.Graphics().p("AmtC2IAAlrINbAAIAAFrg");
	var mask_4_graphics_108 = new cjs.Graphics().p("AmtFDIAAqFINbAAIAAKFg");
	var mask_4_graphics_109 = new cjs.Graphics().p("AmtHRIAAuhINbAAIAAOhg");
	var mask_4_graphics_110 = new cjs.Graphics().p("AmtJfIAAy9INbAAIAAS9g");
	var mask_4_graphics_111 = new cjs.Graphics().p("AmtLtIAA3ZINbAAIAAXZg");
	var mask_4_graphics_112 = new cjs.Graphics().p("AmtN6IAA7zINbAAIAAbzg");
	var mask_4_graphics_113 = new cjs.Graphics().p("AmtQIMAAAggPINbAAMAAAAgPg");
	var mask_4_graphics_114 = new cjs.Graphics().p("AmtSWMAAAgkrINbAAMAAAAkrg");
	var mask_4_graphics_115 = new cjs.Graphics().p("AmtUkMAAAgpHINbAAMAAAApHg");
	var mask_4_graphics_116 = new cjs.Graphics().p("AmtWxMAAAgthINbAAMAAAAthg");
	var mask_4_graphics_117 = new cjs.Graphics().p("AmtY/MAAAgx9INbAAMAAAAx9g");
	var mask_4_graphics_118 = new cjs.Graphics().p("AmtbNMAAAg2ZINbAAMAAAA2Zg");
	var mask_4_graphics_119 = new cjs.Graphics().p("AmtdbMAAAg61INbAAMAAAA61g");
	var mask_4_graphics_120 = new cjs.Graphics().p("AmtfoMAAAg/QINbAAMAAAA/Qg");
	var mask_4_graphics_121 = new cjs.Graphics().p("EgGtAh2MAAAhDrINbAAMAAABDrg");
	var mask_4_graphics_122 = new cjs.Graphics().p("EgGtAkEMAAAhIHINbAAMAAABIHg");
	var mask_4_graphics_123 = new cjs.Graphics().p("EgGtAmSMAAAhMjINbAAMAAABMjg");
	var mask_4_graphics_124 = new cjs.Graphics().p("EgGtAofMAAAhQ+INbAAMAAABQ+g");
	var mask_4_graphics_125 = new cjs.Graphics().p("EgGtAqtMAAAhVZINbAAMAAABVZg");
	var mask_4_graphics_126 = new cjs.Graphics().p("EgGtAs7MAAAhZ1INbAAMAAABZ1g");
	var mask_4_graphics_127 = new cjs.Graphics().p("EgGtAvJMAAAheRINbAAMAAABeRg");
	var mask_4_graphics_128 = new cjs.Graphics().p("EgGtAxWMAAAhisINbAAMAAABisg");
	var mask_4_graphics_129 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_209 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_210 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_211 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_212 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_213 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_214 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_215 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_216 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_217 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_218 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_219 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_220 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_221 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_222 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_223 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_224 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_225 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_226 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_227 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_228 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_229 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_230 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_231 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_232 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_233 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");
	var mask_4_graphics_234 = new cjs.Graphics().p("EgGtAzkMAAAhnHINbAAMAAABnHg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(106).to({graphics:mask_4_graphics_106,x:255.1,y:1.925}).wait(1).to({graphics:mask_4_graphics_107,x:255.1,y:16.1}).wait(1).to({graphics:mask_4_graphics_108,x:255.1,y:30.275}).wait(1).to({graphics:mask_4_graphics_109,x:255.1,y:44.45}).wait(1).to({graphics:mask_4_graphics_110,x:255.1,y:58.625}).wait(1).to({graphics:mask_4_graphics_111,x:255.1,y:72.8}).wait(1).to({graphics:mask_4_graphics_112,x:255.1,y:86.975}).wait(1).to({graphics:mask_4_graphics_113,x:255.1,y:101.15}).wait(1).to({graphics:mask_4_graphics_114,x:255.1,y:115.325}).wait(1).to({graphics:mask_4_graphics_115,x:255.1,y:129.5}).wait(1).to({graphics:mask_4_graphics_116,x:255.1,y:143.675}).wait(1).to({graphics:mask_4_graphics_117,x:255.1,y:157.85}).wait(1).to({graphics:mask_4_graphics_118,x:255.1,y:172.05}).wait(1).to({graphics:mask_4_graphics_119,x:255.1,y:186.225}).wait(1).to({graphics:mask_4_graphics_120,x:255.1,y:200.4}).wait(1).to({graphics:mask_4_graphics_121,x:255.1,y:214.575}).wait(1).to({graphics:mask_4_graphics_122,x:255.1,y:228.75}).wait(1).to({graphics:mask_4_graphics_123,x:255.1,y:242.925}).wait(1).to({graphics:mask_4_graphics_124,x:255.1,y:257.1}).wait(1).to({graphics:mask_4_graphics_125,x:255.1,y:271.275}).wait(1).to({graphics:mask_4_graphics_126,x:255.1,y:285.45}).wait(1).to({graphics:mask_4_graphics_127,x:255.1,y:299.625}).wait(1).to({graphics:mask_4_graphics_128,x:255.1,y:313.8}).wait(1).to({graphics:mask_4_graphics_129,x:255.1,y:327.975}).wait(80).to({graphics:mask_4_graphics_209,x:255.1,y:327.975}).wait(1).to({graphics:mask_4_graphics_210,x:242.35,y:327.975}).wait(1).to({graphics:mask_4_graphics_211,x:229.65,y:327.975}).wait(1).to({graphics:mask_4_graphics_212,x:216.9,y:327.975}).wait(1).to({graphics:mask_4_graphics_213,x:204.15,y:327.975}).wait(1).to({graphics:mask_4_graphics_214,x:191.4,y:327.975}).wait(1).to({graphics:mask_4_graphics_215,x:178.7,y:327.975}).wait(1).to({graphics:mask_4_graphics_216,x:165.95,y:327.975}).wait(1).to({graphics:mask_4_graphics_217,x:153.2,y:327.975}).wait(1).to({graphics:mask_4_graphics_218,x:140.5,y:327.975}).wait(1).to({graphics:mask_4_graphics_219,x:127.75,y:327.975}).wait(1).to({graphics:mask_4_graphics_220,x:115,y:327.975}).wait(1).to({graphics:mask_4_graphics_221,x:102.25,y:327.975}).wait(1).to({graphics:mask_4_graphics_222,x:89.55,y:327.975}).wait(1).to({graphics:mask_4_graphics_223,x:76.8,y:327.975}).wait(1).to({graphics:mask_4_graphics_224,x:64.05,y:327.975}).wait(1).to({graphics:mask_4_graphics_225,x:51.3,y:327.975}).wait(1).to({graphics:mask_4_graphics_226,x:38.6,y:327.975}).wait(1).to({graphics:mask_4_graphics_227,x:25.85,y:327.975}).wait(1).to({graphics:mask_4_graphics_228,x:13.1,y:327.975}).wait(1).to({graphics:mask_4_graphics_229,x:0.4,y:327.975}).wait(1).to({graphics:mask_4_graphics_230,x:-12.35,y:327.975}).wait(1).to({graphics:mask_4_graphics_231,x:-25.1,y:327.975}).wait(1).to({graphics:mask_4_graphics_232,x:-37.85,y:327.975}).wait(1).to({graphics:mask_4_graphics_233,x:-50.55,y:327.975}).wait(1).to({graphics:mask_4_graphics_234,x:-63.3,y:327.975}).wait(1).to({graphics:null,x:0,y:0}).wait(219));

	// linea_1
	this.instance_15 = new lib.Bitmap14();
	this.instance_15.setTransform(245,-32,1,1.1387);

	this.instance_16 = new lib.Symbol81();
	this.instance_16.setTransform(254,313,1,1,0,0,0,9,345);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_15,this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},106).to({state:[{t:this.instance_16}]},103).to({state:[{t:this.instance_16}]},25).to({state:[]},1).wait(219));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(209).to({_off:false},0).to({x:-64.4},25).to({_off:true},1).wait(219));

	// circule
	this.instance_17 = new lib.Symbol14();
	this.instance_17.setTransform(42,41,0.2885,0.2885,90,0,0,0,-26);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({scaleX:1,scaleY:1,alpha:1},7).wait(73).to({y:-561.15},24).to({_off:true},1).wait(349));

	// Layer_5
	this.instance_18 = new lib.Symbol69();
	this.instance_18.setTransform(148,735.8,1,1,0,0,0,115,676.9);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).to({y:133.65},24).wait(105).to({x:-170.4},25).to({_off:true},1).wait(219));

	// Layer_11 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_54 = new cjs.Graphics().p("AiISKMAAAgkTIERAAMAAAAkTg");
	var mask_5_graphics_55 = new cjs.Graphics().p("AiISKMAAAgkTIERAAMAAAAkTg");
	var mask_5_graphics_56 = new cjs.Graphics().p("AiISKMAAAgkTIERAAMAAAAkTg");
	var mask_5_graphics_57 = new cjs.Graphics().p("AiISKMAAAgkTIERAAMAAAAkTg");
	var mask_5_graphics_58 = new cjs.Graphics().p("AiISKMAAAgkTIERAAMAAAAkTg");
	var mask_5_graphics_59 = new cjs.Graphics().p("AiISKMAAAgkTIERAAMAAAAkTg");
	var mask_5_graphics_60 = new cjs.Graphics().p("AiISKMAAAgkTIERAAMAAAAkTg");
	var mask_5_graphics_61 = new cjs.Graphics().p("AiISKMAAAgkTIERAAMAAAAkTg");
	var mask_5_graphics_62 = new cjs.Graphics().p("AiISKMAAAgkTIERAAMAAAAkTg");
	var mask_5_graphics_63 = new cjs.Graphics().p("AiISKMAAAgkTIERAAMAAAAkTg");
	var mask_5_graphics_64 = new cjs.Graphics().p("AiISKMAAAgkTIERAAMAAAAkTg");
	var mask_5_graphics_65 = new cjs.Graphics().p("AiISKMAAAgkTIERAAMAAAAkTg");
	var mask_5_graphics_66 = new cjs.Graphics().p("AiISKMAAAgkTIERAAMAAAAkTg");
	var mask_5_graphics_67 = new cjs.Graphics().p("AiISKMAAAgkTIERAAMAAAAkTg");
	var mask_5_graphics_68 = new cjs.Graphics().p("AiISKMAAAgkTIERAAMAAAAkTg");
	var mask_5_graphics_69 = new cjs.Graphics().p("AjoRBIhbhwMAAAghDIFMAAIE7GCIAAHGIl0HIIAAM/Ii4CWg");
	var mask_5_graphics_70 = new cjs.Graphics().p("An+S/MAAAgm1IGHAAIJ2DBIAAIXIrqDkIAAPPIhbErIAAE3g");
	var mask_5_graphics_71 = new cjs.Graphics().p("Aq4WTMAAAgslIVyAAIAAJmIxgAAMAAAAi/g");
	var mask_5_graphics_72 = new cjs.Graphics().p("Aq2bSIgCgCMAAAg2hIOFAAIHtE3IAALpIgDADIk0AAInnk0IkJAAIg5BaMAAAAofIhdA7g");
	var mask_5_graphics_73 = new cjs.Graphics().p("EgK2AgRIgCgEMAAAhAdIQpAAIFJJtIAANxIgFACIlrAAIlGpoIk4AAIhyA9MAAAAv2Ig+B2g");
	var mask_5_graphics_74 = new cjs.Graphics().p("EgK3AlQIgBgHMAAAhKYITNAAIClOjIAAP5IgHABImkAAIijubIloAAIiqAeMAAAA3OIgeCxg");
	var mask_5_graphics_75 = new cjs.Graphics().p("EgK4AqPMAAAhUdIVyAAMAAAAlaInlAAIAAzPIp7AAMAAABCSg");
	var mask_5_graphics_79 = new cjs.Graphics().p("Aq4SFMAAAgkJIVyAAMAAAAkJg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_5_graphics_54,x:149.8,y:720.825}).wait(1).to({graphics:mask_5_graphics_55,x:149.8,y:702.525}).wait(1).to({graphics:mask_5_graphics_56,x:149.8,y:684.225}).wait(1).to({graphics:mask_5_graphics_57,x:149.8,y:665.925}).wait(1).to({graphics:mask_5_graphics_58,x:149.8,y:647.625}).wait(1).to({graphics:mask_5_graphics_59,x:149.8,y:629.325}).wait(1).to({graphics:mask_5_graphics_60,x:149.8,y:610.975}).wait(1).to({graphics:mask_5_graphics_61,x:149.8,y:592.675}).wait(1).to({graphics:mask_5_graphics_62,x:149.8,y:574.375}).wait(1).to({graphics:mask_5_graphics_63,x:149.8,y:556.075}).wait(1).to({graphics:mask_5_graphics_64,x:149.8,y:537.775}).wait(1).to({graphics:mask_5_graphics_65,x:149.8,y:537.775}).wait(1).to({graphics:mask_5_graphics_66,x:149.8,y:537.775}).wait(1).to({graphics:mask_5_graphics_67,x:149.8,y:537.775}).wait(1).to({graphics:mask_5_graphics_68,x:149.8,y:537.775}).wait(1).to({graphics:mask_5_graphics_69,x:168.475,y:517.775}).wait(1).to({graphics:mask_5_graphics_70,x:187.125,y:513.275}).wait(1).to({graphics:mask_5_graphics_71,x:205.8,y:511.275}).wait(1).to({graphics:mask_5_graphics_72,x:205.8,y:543.15}).wait(1).to({graphics:mask_5_graphics_73,x:205.8,y:575.05}).wait(1).to({graphics:mask_5_graphics_74,x:205.8,y:606.925}).wait(1).to({graphics:mask_5_graphics_75,x:205.8,y:638.8}).wait(4).to({graphics:mask_5_graphics_79,x:205.8,y:484.325}).wait(1).to({graphics:null,x:0,y:0}).wait(374));

	// Layer_1
	this.instance_19 = new lib.Symbol68();
	this.instance_19.setTransform(148,895.8,1,1,0,0,0,115,516.8);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(54).to({_off:false},0).wait(25).to({_off:true},1).wait(374));

	// Layer_6 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_7 = new cjs.Graphics().p("Ak6B2IAAjrIJ1AAIAADrg");
	var mask_6_graphics_8 = new cjs.Graphics().p("Ak6EIIAAoPIJ1AAIAAIPg");
	var mask_6_graphics_9 = new cjs.Graphics().p("Ak6GZIAAsxIJ1AAIAAMxg");
	var mask_6_graphics_10 = new cjs.Graphics().p("Ak6IqIAAxTIJ1AAIAARTg");
	var mask_6_graphics_11 = new cjs.Graphics().p("Ak6K7IAA11IJ1AAIAAV1g");
	var mask_6_graphics_12 = new cjs.Graphics().p("Ak6NNIAA6YIJ1AAIAAaYg");
	var mask_6_graphics_13 = new cjs.Graphics().p("Ak6PeIAA+7IJ1AAIAAe7g");
	var mask_6_graphics_14 = new cjs.Graphics().p("Ak6RvMAAAgjdIJ1AAMAAAAjdg");
	var mask_6_graphics_15 = new cjs.Graphics().p("Ak6UAMAAAgn/IJ1AAMAAAAn/g");
	var mask_6_graphics_16 = new cjs.Graphics().p("Ak6WSMAAAgsiIJ1AAMAAAAsig");
	var mask_6_graphics_17 = new cjs.Graphics().p("Ak6YiMAAAgxEIJ1AAMAAAAxEg");
	var mask_6_graphics_18 = new cjs.Graphics().p("Ak6a0MAAAg1nIJ1AAMAAAA1ng");
	var mask_6_graphics_19 = new cjs.Graphics().p("Ak6dFMAAAg6JIJ1AAMAAAA6Jg");
	var mask_6_graphics_20 = new cjs.Graphics().p("Ak6fWMAAAg+rIJ1AAMAAAA+rg");
	var mask_6_graphics_21 = new cjs.Graphics().p("EgE6AhoMAAAhDPIJ1AAMAAABDPg");
	var mask_6_graphics_22 = new cjs.Graphics().p("EgE6Aj5MAAAhHxIJ1AAMAAABHxg");
	var mask_6_graphics_23 = new cjs.Graphics().p("EgE6AmKMAAAhMTIJ1AAMAAABMTg");
	var mask_6_graphics_24 = new cjs.Graphics().p("EgE6AobMAAAhQ1IJ1AAMAAABQ1g");
	var mask_6_graphics_25 = new cjs.Graphics().p("EgE6AqsMAAAhVXIJ1AAMAAABVXg");
	var mask_6_graphics_26 = new cjs.Graphics().p("EgE6As+MAAAhZ7IJ1AAMAAABZ7g");
	var mask_6_graphics_79 = new cjs.Graphics().p("EgE6As+MAAAhZ7IJ1AAMAAABZ7g");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(7).to({graphics:mask_6_graphics_7,x:43.75,y:55.85}).wait(1).to({graphics:mask_6_graphics_8,x:43.75,y:70.375}).wait(1).to({graphics:mask_6_graphics_9,x:43.75,y:84.9}).wait(1).to({graphics:mask_6_graphics_10,x:43.75,y:99.425}).wait(1).to({graphics:mask_6_graphics_11,x:43.75,y:113.95}).wait(1).to({graphics:mask_6_graphics_12,x:43.75,y:128.45}).wait(1).to({graphics:mask_6_graphics_13,x:43.75,y:142.975}).wait(1).to({graphics:mask_6_graphics_14,x:43.75,y:157.5}).wait(1).to({graphics:mask_6_graphics_15,x:43.75,y:172.025}).wait(1).to({graphics:mask_6_graphics_16,x:43.75,y:186.55}).wait(1).to({graphics:mask_6_graphics_17,x:43.75,y:201.1}).wait(1).to({graphics:mask_6_graphics_18,x:43.75,y:215.625}).wait(1).to({graphics:mask_6_graphics_19,x:43.75,y:230.15}).wait(1).to({graphics:mask_6_graphics_20,x:43.75,y:244.675}).wait(1).to({graphics:mask_6_graphics_21,x:43.75,y:259.2}).wait(1).to({graphics:mask_6_graphics_22,x:43.75,y:273.7}).wait(1).to({graphics:mask_6_graphics_23,x:43.75,y:288.225}).wait(1).to({graphics:mask_6_graphics_24,x:43.75,y:302.75}).wait(1).to({graphics:mask_6_graphics_25,x:43.75,y:317.275}).wait(1).to({graphics:mask_6_graphics_26,x:43.75,y:331.8}).wait(53).to({graphics:mask_6_graphics_79,x:43.75,y:331.8}).wait(1).to({graphics:null,x:0,y:0}).wait(374));

	// FlashAICB
	this.instance_20 = new lib.ClipGroup_3();
	this.instance_20.setTransform(42.1,185.2,1,1,90,0,0,126.3,7.8);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(7).to({_off:false},0).wait(72).to({_off:true},1).wait(374));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-134.1,-456.1,728.1,1405.1);
// library properties:
lib.properties = {
	id: '5B9E5DF726B849F5B1D170CF22D6F831',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap12.png?1718903883186", id:"Bitmap12"},
		{src:"images/Bitmap13.png?1718903883186", id:"Bitmap13"},
		{src:"images/Bitmap14.png?1718903883186", id:"Bitmap14"},
		{src:"images/Bitmap15.png?1718903883186", id:"Bitmap15"},
		{src:"images/Bitmap16.png?1718903883186", id:"Bitmap16"},
		{src:"images/Bitmap19.png?1718903883186", id:"Bitmap19"},
		{src:"images/Bitmap20.png?1718903883186", id:"Bitmap20"},
		{src:"images/Bitmap22.png?1718903883186", id:"Bitmap22"},
		{src:"images/icon1.png?1718903883186", id:"icon1"},
		{src:"images/icon2.png?1718903883186", id:"icon2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5B9E5DF726B849F5B1D170CF22D6F831'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;