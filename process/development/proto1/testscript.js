'use strict';

// AOS.init({
//   duration: 1500
// });

var intro = document.querySelector('#intro');

var bird1 = document.querySelector('#bird1');

var story1 = document.querySelector('#story1');

bird1.addEventListener('click',function() {
  intro.style.left="-100%";
  story1.style.left="15%";
})

var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 300}});

new ScrollMagic.Scene({triggerElement:'#one'})
.setClassToggle('#secone','active')
.addTo(controller);

new ScrollMagic.Scene({triggerElement:'#two'})
.setClassToggle('#sectwo','active')
.addTo(controller);

new ScrollMagic.Scene({triggerElement:'#three'})
.setClassToggle('#secthree','active')
.addTo(controller);

var star = [];

function setup() {
  var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
  myCanvas.parent('sketch');

  for (var i = 0; i < 40; i++) {
    star.push(new Star(random(0,width), random(0,height), 4, .5));
  }
}

function draw() {
  background(6, 32, 57);
  for (var i = 0; i < star.length; i++) {
    if ((mouseX > star[i].x-50) && (mouseX < star[i].x + 50) && (mouseY > star[i].y-50) && (mouseY < star[i].y + 50)) {
      star[i].color = color(255);
      star[i].radius = 8;
    } else {
      star[i].color = color(249, 236, 94);
      star[i].radius = random(3,6);
    }
    star[i].move();
    star[i].display();
  }
}

function Star(x, y, r, s) {
  this.x = x;
  this.y = y;
  this.speed = s;
  this.radius = r;

  this.move = function() {
    this.x += this.speed;
  };

  this.display = function() {
    noStroke();
    fill(this.color)
    ellipse(this.x, this.y, this.radius, this.radius);

    if (this.x >= width) {
      this.x = 0;
    }
  };
}
