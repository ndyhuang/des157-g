'use strict';
console.log('reading js');

AOS.init({
  duration: 1500
});

var intro = document.querySelector('#intro');
var sketch = document.querySelector('#sketch');

var hm = document.querySelector('#hm');
var abt = document.querySelector('#abt');
var shr = document.querySelector('#shr');

var down = document.querySelectorAll('.down');
var one = document.querySelectorAll('.one');

var optn = document.querySelector('#optn');
var optn2 = document.querySelector('#optn2');

var secone = document.querySelector('#secone');
var sectwo = document.querySelector('#sectwo');
var secthree = document.querySelector('#secthree');
var secfour = document.querySelector('#secfour');
var secfive = document.querySelector('#secfive');
var secsix = document.querySelector('#secsix');

var icon = document.querySelector('#icon');
var icon2 = document.querySelector('#icon2');
var icon3 = document.querySelector('#icon3');

var aboutpg = document.querySelector('#aboutpg');
var sharepg = document.querySelector('#sharepg');

var bird1 = document.querySelector('#bird1');
var bird2 = document.querySelector('#bird2');
var bird3 = document.querySelector('#bird3');

var story1 = document.querySelector('#story1');
var story2 = document.querySelector('#story2');
var story3 = document.querySelector('#story3');

var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: 500
  }
});

var timeout = setTimeout(function() {optn.style.opacity = '0.4'; optn2.style.opacity='0.4'}, 5000);

new ScrollMagic.Scene({
    triggerElement: '.one'
  })
  .setClassToggle('#secone', 'active')
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.two'
  })
  .setClassToggle('#sectwo', 'active')
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.three'
  })
  .setClassToggle('#secthree', 'active')
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.four'
  })
  .setClassToggle('#secfour', 'active')
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.five'
  })
  .setClassToggle('#secfive', 'active')
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.six'
  })
  .setClassToggle('#secsix', 'active')
  .addTo(controller);

console.log(sketch.offsetHeight);

bird1.addEventListener('click', function() {
  story1.style.left = '15%';
  story1.style.opacity = '1';

  icon.src = 'images/humming.svg';
  icon2.src = 'images/hawkhov.svg';
  icon3.src = 'images/swallowhov.svg';

  optn.style.left = '0';
  optn.style.opacity = '1';
  optn2.style.right = '3%';
  optn2.style.opacity = '1';

  intro.style.left = '-100%';
})

bird2.addEventListener('click', function() {
  story2.style.left = '15%';
  story2.style.opacity = '1';

  icon.src = 'images/humminghov.svg';
  icon2.src = 'images/hawk.svg';
  icon3.src = 'images/swallowhov.svg';

  optn.style.left = '0';
  optn.style.opacity = '1';
  optn2.style.right = '3%';
  optn2.style.opacity = '1';

  intro.style.left = '-100%';
})

bird3.addEventListener('click', function() {
  story3.style.left = '15%';
  story3.style.opacity = '1';

  icon.src = 'images/humminghov.svg';
  icon2.src = 'images/hawkhov.svg';
  icon3.src = 'images/swallow.svg';

  optn.style.left = '0';
  optn.style.opacity = '1';
  optn2.style.right = '3%';
  optn2.style.opacity = '1';

  intro.style.left = '-100%';
})

hm.addEventListener('click', function() {
  intro.style.left = '20%';
  window.scrollTo(0, 0);

  story1.style.left = '-200%';
  story2.style.left = '-200%';
  story3.style.left = '-200%';

  story1.style.opacity = '0';
  story2.style.opacity = '0';
  story3.style.opacity = '0';

  optn.style.left = '-15%';
  optn.style.opacity = '0';
  optn2.style.right = '-15%';
  optn2.style.opacity = '0';
})

icon.addEventListener('click', function() {
  story1.style.left = '15%';
  story1.style.opacity = '1';
  window.scrollTo(0, 0);

  icon.src = 'images/humming.svg';
  icon2.src = 'images/hawkhov.svg';
  icon3.src = 'images/swallowhov.svg';

  optn.style.left = '0';
  optn.style.opacity = '1';
  optn2.style.right = '3%';
  optn2.style.opacity = '1';

  intro.style.left = '-100%';
  story2.style.left = '-100%';
  story3.style.left = '-100%';
})

icon2.addEventListener('click', function() {
  story2.style.left = '15%';
  story2.style.opacity = '1';
  window.scrollTo(0, 0);

  icon.src = 'images/humminghov.svg';
  icon2.src = 'images/hawk.svg';
  icon3.src = 'images/swallowhov.svg';

  optn.style.left = '0';
  optn.style.opacity = '1';
  optn2.style.right = '3%';
  optn2.style.opacity = '1';

  intro.style.left = "-100%";
  story1.style.left = "-100%";
  story3.style.left = "-100%";
})

icon3.addEventListener('click', function() {
  story3.style.left = '15%';
  story3.style.opacity = '1';
  window.scrollTo(0, 0);

  icon.src = 'images/humminghov.svg';
  icon2.src = 'images/hawkhov.svg';
  icon3.src = 'images/swallow.svg';

  optn.style.left = '0';
  optn.style.opacity = '1';
  optn2.style.right = '3%';
  optn2.style.opacity = '1';

  intro.style.left = '-100%';
  story1.style.left = '-100%';
  story2.style.left = '-100%';
})

optn.addEventListener('mouseover', function() {
  optn.style.opacity = '1';
  clearTimeout(timeout);
})

optn2.addEventListener('mouseover', function() {
  optn2.style.opacity = '1';
  clearTimeout(timeout);
})

optn.addEventListener('mouseout', function() {
  timeout = setTimeout(function() {optn.style.opacity = '0.4';}, 5000);
})

optn2.addEventListener('mouseout', function() {
  timeout = setTimeout(function() {optn2.style.opacity = '0.4';}, 5000);
})

var star = [];

function setup() {
  var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
  myCanvas.parent('sketch');

  for (var i = 0; i < 50; i++) {
    star.push(new Star(random(0, width), random(0, height), 4, random(.2, .4)));
  }
}

function draw() {
  background(6, 32, 57);
  for (var i = 0; i < star.length; i++) {
    if ((mouseX > star[i].x - 50) && (mouseX < star[i].x + 50) && (mouseY > star[i].y - 50) && (mouseY < star[i].y + 50)) {
      star[i].color = color(255);
      star[i].radius = 8;
    } else {
      star[i].color = color(249, 236, 94);
      star[i].radius = 4;
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

// abt.addEventListener('click',function(){
//   story1.style.display='none';
//   story2.style.display='none';
//   story3.style.display='none';
//   intro.style.display='none';
//   sharepg.style.display='none';
//
//   aboutpg.style.display='block';
//   abt.style.borderBottom='3px solid #C4775C';
// })
//
// shr.addEventListener('click',function(){
//   story1.style.display='none';
//   story2.style.display='none';
//   story3.style.display='none';
//   intro.style.display='none';
//   aboutpg.style.display='none';
//
//   sharepg.style.display='block';
//   shr.style.borderBottom='3px solid #C4775C';
// })
