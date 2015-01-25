var boxWidth = 20;
var canvasSize = 400;
var numBoxes = canvasSize / boxWidth;

var myBoxArray = [];

function setup() {
  createCanvas(canvasSize, canvasSize);
  smooth();
  background(0);
  for(var i = 1; i <= numBoxes; i++) {
    for(var h = 1; h <= numBoxes; h++) {
      var xPos = boxWidth * (i-1);
      var yPos = boxWidth * (h-1);
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
  this.bgInc = int(random(5));

  this.display = function() {
    noStroke();

    if ((this.bg > 255 || this.bg < 0)) {
      this.bgInc = this.bgInc * -1;
    }

    this.bg = this.bg + this.bgInc;

    fill(this.bg);
    rect(x, y, boxWidth, boxWidth);

  }

  this.setBg = function(bg) {
    fill(bg);
    // console.log(bg);
    rect(x, y, boxWidth, boxWidth);
  }
}
