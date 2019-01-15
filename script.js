console.log('reading js');

var rain = [];

function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');

  for (var i = 0; i < 15; i++) {
    rain.push(new Rain(i * 50, i * -50, 0));
  }
}

function draw() {
  background(255);
  for (var i = 0; i < rain.length; i++) {
    if ((mouseX > rain[i].x) && (mouseX < rain[i].x + 11) && (mouseY > rain[i].y) && (mouseY < rain[i].y + 61)) {
      rain[i].color = color(244, 95, 66);
    } else {
      rain[i].color = color(0);
    }
    rain[i].move();
    rain[i].display();
  }
}

function Rain(x, y, c) {
  this.x = x;
  this.y = y;
  this.speed = 1;
  this.color = c;

  this.move = function() {
    this.y += 1.5;
  };

  this.display = function() {
    noStroke();
    fill(this.color)
    rect(this.x, this.y, 20, 60);

    if (this.y >= height) {
      this.y = -60;
    }
  };
}
