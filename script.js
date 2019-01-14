console.log('reading js');

var bugs = []; // array of Jitter objects

function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
  // Create objects
  for (var i=0; i<15; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {
  background(255);
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

// Jitter class
function Jitter() {
  this.x = 0;
  this.y = 0;
  this.speed = 1;
  this.color = 0;

  this.move = function() {
    this.y+=1.5;
  };

  this.display = function() {
    fill(this.color)
    rect(this.x, this.y, 20,60);

    if (this.y>=height) {
      this.y=-60;
    }
  };
}


// var rain = [];
//
// function setup() {
//   var myCanvas = createCanvas(800,250);
//
//   myCanvas.parent(mySketch);
//
//   for (var i=0; i<15; i++) {
//     rain.push(new Rain(i*50,i*-50,1,0))
//   }
// }
//
// function draw() {
//   // ellipse(mouseX,mouseY,50,50);
//   for (var i=0; i<rain.length; i++) {
//     if ((mouseX>rain[i].x) && (mouseX<rain[i].x+11) && (mouseY>rain[i].y) && (mouseY<rain[i].y+61)) {
//       rain[i].c=color(244, 95, 66);
//     } else {
//       rain[i].c=color(0);
//     }
//   }
//   rain[i].run();
// }
//
// function Rain(x, y, speed, color) {
//     this.x = x;
//     this.y = y;
//     this.speed = speed;
//     this.color = color;
//
//   this.run = function() {
//     fill(color);
//     rect(x,y,10,60);
//     y+=speed;
//     if (y>=height) {
//       y=int(random(-60, -100));
//     }
//   };
//
// }
