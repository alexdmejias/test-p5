var boxWidth = 20;
var padding = 10;
var canvasSize = 400;
// var numBoxes = canvasSize / boxWidth;

var numBoxes = (canvasSize - (padding * 2)) / ((padding + boxWidth) - padding)
console.log(numBoxes);

var myBoxArray = [];

function setup() {
  createCanvas(canvasSize, canvasSize);
  smooth();
  background(0);
  for(var i = 1; i <= numBoxes; i++) {
    for(var h = 1; h <= numBoxes; h++) {
      var xPos = boxWidth * (i-1);
      var xPos = padding + ((boxWidth + padding) * (i-1));
      var yPos = padding + ((boxWidth + padding) * (h-1));
      myBoxArray.push(new Box(xPos, yPos, parseInt(random(255))));
    }
  }
}

function draw(){
  for(var i = 0; i < myBoxArray.length; i++) {
    myBoxArray[i].display();
  }
}

function Box(x, y, bg) {
  this.x = x;
  this.y = y;
  this.bg = bg;
  this.bgInc = int(random(10));

  this.display = function() {
    noStroke();

    if ((this.bg > 255 || this.bg < 0)) {
      this.bgInc = this.bgInc * -1;
    }

    this.bg = this.bg + this.bgInc;

    fill(color(this.bg,0,0));
    rect(x, y, boxWidth, boxWidth);

  }

  this.setBg = function(bg) {
    fill(bg);
    rect(x, y, boxWidth, boxWidth);
  }
}
