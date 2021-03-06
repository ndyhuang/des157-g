'use strict';
console.log('reading js');

AOS.init({
  duration: 1500
});

var intro = document.querySelector('#intro');
var sketch = document.querySelector('#sketch');

var hm = document.querySelector('#hm');
var abt = document.querySelector('#aboutpg');
var shr = document.querySelector('#sharepg');

var fact1 = document.querySelector('#fact1');
var fact2 = document.querySelector('#fact2');
var fact3 = document.querySelector('#fact3');
var fact4 = document.querySelector('#fact4');
var fact5 = document.querySelector('#fact5');
var fact6 = document.querySelector('#fact6');
var fact7 = document.querySelector('#fact7');

var f1 = document.querySelector('#f1');
var f2 = document.querySelector('#f2');
var f3 = document.querySelector('#f3');
var f4 = document.querySelector('#f4');
var f5 = document.querySelector('#f5');
var f6 = document.querySelector('#f6');
var f7 = document.querySelector('#f7');

var optn = document.querySelector('#optn');
var optn2 = document.querySelector('#optn2');

var secone = document.querySelector('#secone');
var sectwo = document.querySelector('#sectwo');
var secthree = document.querySelector('#secthree');
var secfour = document.querySelector('#secfour');
var secfive = document.querySelector('#secfive');
var secsix = document.querySelector('#secsix');

var linkone = document.querySelector('#linkone');
var linktwo = document.querySelector('#linktwo');
var linkthree = document.querySelector('#linkthree');
var linkfour = document.querySelector('#linkfour');
var linkfive = document.querySelector('#linkfive');
var linksix = document.querySelector('#linksix');

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

var timeout = setTimeout(function() {
  optn.style.opacity = '0.4';
  optn2.style.opacity = '0.4';
}, 5000)

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

bird1.addEventListener('click', function() {
  linkone.href = '#one-1';
  linktwo.href = '#two-1';
  linkthree.href = '#three-1';
  linkfour.href = '#four-1';
  linkfive.href = '#five-1';
  linksix.href = '#six-1';

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
  linkone.href = '#one-2';
  linktwo.href = '#two-2';
  linkthree.href = '#three-2';
  linkfour.href = '#four-2';
  linkfive.href = '#five-2';
  linksix.href = '#six-2';

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
  linkone.href = '#one-3';
  linktwo.href = '#two-3';
  linkthree.href = '#three-3';
  linkfour.href = '#four-3';
  linkfive.href = '#five-3';
  linksix.href = '#six-3';

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
  linkone.href = '#one-1';
  linktwo.href = '#two-1';
  linkthree.href = '#three-1';
  linkfour.href = '#four-1';
  linkfive.href = '#five-1';
  linksix.href = '#six-1';

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
  linkone.href = '#one-2';
  linktwo.href = '#two-2';
  linkthree.href = '#three-2';
  linkfour.href = '#four-2';
  linkfive.href = '#five-2';
  linksix.href = '#six-2';

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
  linkone.href = '#one-3';
  linktwo.href = '#two-3';
  linkthree.href = '#three-3';
  linkfour.href = '#four-3';
  linkfive.href = '#five-3';
  linksix.href = '#six-3';

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
//
// fact1.addEventListener('mouseout', hide(fone))
// fact1.addEventListener('mouseover', show(fone))
//
// function show(f) {
//   f.style.right = '-40vh';
//   f.style.opacity = '1';
// }
//
// function hide(f) {
//   f.style.right = '-60vh';
//   f.style.opacity = '0';
// }

fact1.addEventListener('mouseover', function() {
  f1.style.right = '-40vh';
  f1.style.opacity = '1';
})

fact1.addEventListener('mouseout', function() {
  f1.style.right = '-60vh';
  f1.style.opacity = '0';
})

fact2.addEventListener('mouseover', function() {
  f2.style.right = '-40vh';
  f2.style.opacity = '1';
})

fact2.addEventListener('mouseout', function() {
  f2.style.right = '-60vh';
  f2.style.opacity = '0';
})

fact3.addEventListener('mouseover', function() {
  f3.style.right = '-40vh';
  f3.style.opacity = '1';
})

fact3.addEventListener('mouseout', function() {
  f3.style.right = '-60vh';
  f3.style.opacity = '0';
})

fact4.addEventListener('mouseover', function() {
  f4.style.right = '-40vh';
  f4.style.opacity = '1';
})

fact4.addEventListener('mouseout', function() {
  f4.style.right = '-60vh';
  f4.style.opacity = '0';
})

fact5.addEventListener('mouseover', function() {
  f5.style.right = '-40vh';
  f5.style.opacity = '1';
})

fact5.addEventListener('mouseout', function() {
  f5.style.right = '-60vh';
  f5.style.opacity = '0';
})

fact6.addEventListener('mouseover', function() {
  f6.style.right = '-40vh';
  f6.style.opacity = '1';
})

fact6.addEventListener('mouseout', function() {
  f6.style.right = '-60vh';
  f6.style.opacity = '0';
})

fact7.addEventListener('mouseover', function() {
  f7.style.right = '-40vh';
  f7.style.opacity = '1';
})

fact7.addEventListener('mouseout', function() {
  f7.style.right = '-60vh';
  f7.style.opacity = '0';
})
// abt.addEventListener('click',function(){
//   abt.style.left = '20%';
//   window.scrollTo(0, 0);
//
//   story1.style.left = '-200%';
//   story2.style.left = '-200%';
//   story3.style.left = '-200%';
//   intro.style.left = '-200%';
//   shr.style.left = '-200%';
//
//   story1.style.opacity = '0';
//   story2.style.opacity = '0';
//   story3.style.opacity = '0';
//
//   optn.style.left = '-15%';
//   optn.style.opacity = '0';
//   optn2.style.right = '-15%';
//   optn2.style.opacity = '0';
// })

// shr.addEventListener('click',function(){
// shr.style.left = '20%';
// window.scrollTo(0, 0);
//
// story1.style.left = '-200%';
// story2.style.left = '-200%';
// story3.style.left = '-200%';
// intro.style.left = '-200%';
// abt.style.left = '-200%';
//
// story1.style.opacity = '0';
// story2.style.opacity = '0';
// story3.style.opacity = '0';
//
// optn.style.left = '-15%';
// optn.style.opacity = '0';
// optn2.style.right = '-15%';
// optn2.style.opacity = '0';
// })

optn.addEventListener('mouseover', function() {
  optn.style.opacity = '1';
  clearTimeout(timeout);
})

optn2.addEventListener('mouseover', function() {
  optn2.style.opacity = '1';
  clearTimeout(timeout);
})

optn.addEventListener('mouseout', function() {
  timeout = setTimeout(function() {
    optn.style.opacity = '0.4';
  }, 5000);
})

optn2.addEventListener('mouseout', function() {
  timeout = setTimeout(function() {
    optn2.style.opacity = '0.4';
  }, 5000);
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
