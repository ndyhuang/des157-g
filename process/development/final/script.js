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
var shrclick = document.querySelector('#shrclick');
var submit = document.querySelector('#submit');
var received = document.querySelector('#received');
var close = document.querySelector('#close');

var about = document.querySelector('#aboutpg');
var share = document.querySelector('#sharepg');

var fact1 = document.querySelector('#fact1');
var fact2 = document.querySelector('#fact2');
var fact3 = document.querySelector('#fact3');
var fact4 = document.querySelector('#fact4');
var fact5 = document.querySelector('#fact5');
var fact6 = document.querySelector('#fact6');
var fact7 = document.querySelector('#fact7');
var fact8 = document.querySelector('#fact8');
var fact9 = document.querySelector('#fact9');
var fact10 = document.querySelector('#fact10');
var fact11 = document.querySelector('#fact11');
var fact12 = document.querySelector('#fact12');
var fact13 = document.querySelector('#fact13');
var fact14 = document.querySelector('#fact14');
var fact15 = document.querySelector('#fact15');
var fact16 = document.querySelector('#fact16');
var fact17 = document.querySelector('#fact17');
var fact18 = document.querySelector('#fact18');

var f1 = document.querySelector('#f1');
var f2 = document.querySelector('#f2');
var f3 = document.querySelector('#f3');
var f4 = document.querySelector('#f4');
var f5 = document.querySelector('#f5');
var f6 = document.querySelector('#f6');
var f7 = document.querySelector('#f7');
var f8 = document.querySelector('#f8');
var f9 = document.querySelector('#f9');
var f10 = document.querySelector('#f10');
var f11 = document.querySelector('#f11');
var f12 = document.querySelector('#f12');
var f13 = document.querySelector('#f13');
var f14 = document.querySelector('#f14');
var f15 = document.querySelector('#f15');
var f16 = document.querySelector('#f16');
var f17 = document.querySelector('#f17');
var f18 = document.querySelector('#f18');

var optn = document.querySelector('#optn');
var optn2 = document.querySelector('#optn2');

var secone = document.querySelector('#secone');
var sectwo = document.querySelector('#sectwo');
var secthree = document.querySelector('#secthree');
var secfour = document.querySelector('#secfour');
var secfive = document.querySelector('#secfive');
var secsix = document.querySelector('#secsix');

var linkzero = document.querySelector('#linkzero');
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

var scene0 = new ScrollMagic.Scene({
    triggerElement: '.storypic'
  })
  .setClassToggle('#seczero', 'active')
  .addTo(controller);

var scene1 = new ScrollMagic.Scene({
    triggerElement: '#one1'
  })
  .setClassToggle('#secone', 'active')
  .enabled(false)
  .addTo(controller);

var scene2 = new ScrollMagic.Scene({
    triggerElement: '#two1'
  })
  .setClassToggle('#sectwo', 'active')
  .enabled(false)
  .addTo(controller);

var scene3 = new ScrollMagic.Scene({
    triggerElement: '#three1'
  })
  .setClassToggle('#secthree', 'active')
  .enabled(false)
  .addTo(controller);

var scene4 = new ScrollMagic.Scene({
    triggerElement: '#four1'
  })
  .setClassToggle('#secfour', 'active')
  .enabled(false)
  .addTo(controller);

var scene5 = new ScrollMagic.Scene({
    triggerElement: '#five1'
  })
  .setClassToggle('#secfive', 'active')
  .enabled(false)
  .addTo(controller);

var scene6 = new ScrollMagic.Scene({
    triggerElement: '#six1'
  })
  .setClassToggle('#secsix', 'active')
  .enabled(false)
  .addTo(controller);

var scene7 = new ScrollMagic.Scene({
    triggerElement: '#one2'
  })
  .setClassToggle('#secone', 'active')
  .enabled(false)
  .addTo(controller);

var scene8 = new ScrollMagic.Scene({
    triggerElement: '#two2'
  })
  .setClassToggle('#sectwo', 'active')
  .enabled(false)
  .addTo(controller);

var scene9 = new ScrollMagic.Scene({
    triggerElement: '#three2'
  })
  .setClassToggle('#secthree', 'active')
  .enabled(false)
  .addTo(controller);

var scene10 = new ScrollMagic.Scene({
    triggerElement: '#four2'
  })
  .setClassToggle('#secfour', 'active')
  .enabled(false)
  .addTo(controller);

var scene11 = new ScrollMagic.Scene({
    triggerElement: '#five2'
  })
  .setClassToggle('#secfive', 'active')
  .enabled(false)
  .addTo(controller);

var scene12 = new ScrollMagic.Scene({
    triggerElement: '#six2'
  })
  .setClassToggle('#secsix', 'active')
  .enabled(false)
  .addTo(controller);

var scene13 = new ScrollMagic.Scene({
    triggerElement: '#one3'
  })
  .setClassToggle('#secone', 'active')
  .enabled(false)
  .addTo(controller);

var scene14 = new ScrollMagic.Scene({
    triggerElement: '#two3'
  })
  .setClassToggle('#sectwo', 'active')
  .enabled(false)
  .addTo(controller);

var scene15 = new ScrollMagic.Scene({
    triggerElement: '#three3'
  })
  .setClassToggle('#secthree', 'active')
  .enabled(false)
  .addTo(controller);

var scene16 = new ScrollMagic.Scene({
    triggerElement: '#four3'
  })
  .setClassToggle('#secfour', 'active')
  .enabled(false)
  .addTo(controller);

var scene17 = new ScrollMagic.Scene({
    triggerElement: '#five3'
  })
  .setClassToggle('#secfive', 'active')
  .enabled(false)
  .addTo(controller);

var scene18 = new ScrollMagic.Scene({
    triggerElement: '#six3'
  })
  .setClassToggle('#secsix', 'active')
  .enabled(false)
  .addTo(controller);

bird1.addEventListener('click', function() {
  scene1.enabled(true);
  scene2.enabled(true);
  scene3.enabled(true);
  scene4.enabled(true);
  scene5.enabled(true);
  scene6.enabled(true);
  scene7.enabled(false);
  scene8.enabled(false);
  scene9.enabled(false);
  scene10.enabled(false);
  scene11.enabled(false);
  scene12.enabled(false);
  scene13.enabled(false);
  scene14.enabled(false);
  scene15.enabled(false);
  scene16.enabled(false);
  scene17.enabled(false);
  scene18.enabled(false);

  linkzero.href = '#story1pic';
  linkone.href = '#one-1';
  linktwo.href = '#two-1';
  linkthree.href = '#three-1';
  linkfour.href = '#four-1';
  linkfive.href = '#five-1';
  linksix.href = '#six-1';

  story1.style.left = '50%';
  story1.style.transform = 'translateX(-50%)';
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
  scene1.enabled(false);
  scene2.enabled(false);
  scene3.enabled(false);
  scene4.enabled(false);
  scene5.enabled(false);
  scene6.enabled(false);
  scene7.enabled(true);
  scene8.enabled(true);
  scene9.enabled(true);
  scene10.enabled(true);
  scene11.enabled(true);
  scene12.enabled(true);
  scene13.enabled(false);
  scene14.enabled(false);
  scene15.enabled(false);
  scene16.enabled(false);
  scene17.enabled(false);
  scene18.enabled(false);

  linkzero.href = '#story2pic';
  linkone.href = '#one-2';
  linktwo.href = '#two-2';
  linkthree.href = '#three-2';
  linkfour.href = '#four-2';
  linkfive.href = '#five-2';
  linksix.href = '#six-2';

  story2.style.left = '50%';
  story2.style.transform = 'translateX(-50%)';
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
  scene1.enabled(false);
  scene2.enabled(false);
  scene3.enabled(false);
  scene4.enabled(false);
  scene5.enabled(false);
  scene6.enabled(false);
  scene7.enabled(false);
  scene8.enabled(false);
  scene9.enabled(false);
  scene10.enabled(false);
  scene11.enabled(false);
  scene12.enabled(false);
  scene13.enabled(true);
  scene14.enabled(true);
  scene15.enabled(true);
  scene16.enabled(true);
  scene17.enabled(true);
  scene18.enabled(true);

  linkzero.href = '#story3pic';
  linkone.href = '#one-3';
  linktwo.href = '#two-3';
  linkthree.href = '#three-3';
  linkfour.href = '#four-3';
  linkfive.href = '#five-3';
  linksix.href = '#six-3';

  story3.style.left = '50%';
  story3.style.transform = 'translateX(-50%)';
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
  intro.style.left = '17.5%';
  hm.style.borderBottom = '3px solid #C4775C';
  shr.style.borderBottom = 'none';
  abt.style.borderBottom = 'none';
  window.scrollTo(0, 0);

  story1.style.left = '-200%';
  story2.style.left = '-200%';
  story3.style.left = '-200%';
  about.style.left = '-200%';
  share.style.left = '-200%';

  story1.style.opacity = '0';
  story2.style.opacity = '0';
  story3.style.opacity = '0';
  share.style.opacity = '0';
  about.style.opacity = '0';

  optn.style.left = '-15%';
  optn.style.opacity = '0';
  optn2.style.right = '-15%';
  optn2.style.opacity = '0';
})

shrclick.addEventListener('click', function() {
  share.style.left = '22.5%';
  share.style.opacity = '1';
  shr.style.borderBottom = '3px solid #C4775C';
  abt.style.borderBottom = 'none';
  hm.style.borderBottom = 'none';
  window.scrollTo(0, 0);

  about.style.left = '-200%';
})

abt.addEventListener('click',function(){
  about.style.left = '22.5%';
  about.style.opacity = '1';
  abt.style.borderBottom = '3px solid #C4775C';
  shr.style.borderBottom = 'none';
  hm.style.borderBottom = 'none';
  window.scrollTo(0, 0);

  intro.style.left = '-200vh';
  story1.style.left = '-200vh';
  story2.style.left = '-200vh';
  story3.style.left = '-200vh';
  intro.style.left = '-200vh';
  share.style.left = '-200vh';

  story1.style.opacity = '0';
  story2.style.opacity = '0';
  story3.style.opacity = '0';
  share.style.opacity = '0';

  optn.style.left = '-25vh';
  optn.style.opacity = '0';
  optn2.style.right = '-25vh';
  optn2.style.opacity = '0';
})

shr.addEventListener('click',function(){
  share.style.left = '22.5%';
  share.style.opacity = '1';
  shr.style.borderBottom = '3px solid #C4775C';
  abt.style.borderBottom = 'none';
  hm.style.borderBottom = 'none';
  window.scrollTo(0, 0);

  intro.style.left = '-200vh';
  story1.style.left = '-200vh';
  story2.style.left = '-200vh';
  story3.style.left = '-200vh';
  intro.style.left = '-200vh';
  about.style.left = '-200vh';

  story1.style.opacity = '0';
  story2.style.opacity = '0';
  story3.style.opacity = '0';
  about.style.opacity = '0';

  optn.style.left = '-25vh';
  optn.style.opacity = '0';
  optn2.style.right = '-25vh';
  optn2.style.opacity = '0';
})

submit.addEventListener('click', function(evt) {
  received.style.left = '25%';
  received.style.opacity = '1';

  evt.preventDefault();
  return false;
})

close.addEventListener('click', function() {
  received.style.left = '-100%';
  received.style.opacity = '0';
})

icon.addEventListener('click', function() {
  scene1.enabled(true);
  scene2.enabled(true);
  scene3.enabled(true);
  scene4.enabled(true);
  scene5.enabled(true);
  scene6.enabled(true);
  scene7.enabled(false);
  scene8.enabled(false);
  scene9.enabled(false);
  scene10.enabled(false);
  scene11.enabled(false);
  scene12.enabled(false);
  scene13.enabled(false);
  scene14.enabled(false);
  scene15.enabled(false);
  scene16.enabled(false);
  scene17.enabled(false);
  scene18.enabled(false);

  linkzero.href = '#story1pic';
  linkone.href = '#one-1';
  linktwo.href = '#two-1';
  linkthree.href = '#three-1';
  linkfour.href = '#four-1';
  linkfive.href = '#five-1';
  linksix.href = '#six-1';

  story1.style.left = '50%';
  story1.style.transform = 'translateX(-50%)';
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
  scene1.enabled(false);
  scene2.enabled(false);
  scene3.enabled(false);
  scene4.enabled(false);
  scene5.enabled(false);
  scene6.enabled(false);
  scene7.enabled(true);
  scene8.enabled(true);
  scene9.enabled(true);
  scene10.enabled(true);
  scene11.enabled(true);
  scene12.enabled(true);
  scene13.enabled(false);
  scene14.enabled(false);
  scene15.enabled(false);
  scene16.enabled(false);
  scene17.enabled(false);
  scene18.enabled(false);

  linkzero.href = '#story2pic';
  linkone.href = '#one-2';
  linktwo.href = '#two-2';
  linkthree.href = '#three-2';
  linkfour.href = '#four-2';
  linkfive.href = '#five-2';
  linksix.href = '#six-2';

  story2.style.left = '50%';
  story2.style.transform = 'translateX(-50%)';
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
  scene1.enabled(false);
  scene2.enabled(false);
  scene3.enabled(false);
  scene4.enabled(false);
  scene5.enabled(false);
  scene6.enabled(false);
  scene7.enabled(false);
  scene8.enabled(false);
  scene9.enabled(false);
  scene10.enabled(false);
  scene11.enabled(false);
  scene12.enabled(false);
  scene13.enabled(true);
  scene14.enabled(true);
  scene15.enabled(true);
  scene16.enabled(true);
  scene17.enabled(true);
  scene18.enabled(true);

  linkzero.href = '#story3pic';
  linkone.href = '#one-3';
  linktwo.href = '#two-3';
  linkthree.href = '#three-3';
  linkfour.href = '#four-3';
  linkfive.href = '#five-3';
  linksix.href = '#six-3';

  story3.style.left = '50%';
  story3.style.transform = 'translateX(-50%)';
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

fact1.addEventListener('mouseover', function() {
  f1.style.right = '-40vh';
  f1.style.opacity = '1';
})

fact1.addEventListener('mouseout', function() {
  f1.style.right = '-43vh';
  f1.style.opacity = '0';
})

fact2.addEventListener('mouseover', function() {
  f2.style.right = '-40vh';
  f2.style.opacity = '1';
})

fact2.addEventListener('mouseout', function() {
  f2.style.right = '-43vh';
  f2.style.opacity = '0';
})

fact3.addEventListener('mouseover', function() {
  f3.style.right = '-40vh';
  f3.style.opacity = '1';
})

fact3.addEventListener('mouseout', function() {
  f3.style.right = '-43vh';
  f3.style.opacity = '0';
})

fact4.addEventListener('mouseover', function() {
  f4.style.right = '-40vh';
  f4.style.opacity = '1';
})

fact4.addEventListener('mouseout', function() {
  f4.style.right = '-43vh';
  f4.style.opacity = '0';
})

fact5.addEventListener('mouseover', function() {
  f5.style.right = '-40vh';
  f5.style.opacity = '1';
})

fact5.addEventListener('mouseout', function() {
  f5.style.right = '-43vh';
  f5.style.opacity = '0';
})

fact6.addEventListener('mouseover', function() {
  f6.style.right = '-40vh';
  f6.style.opacity = '1';
})

fact6.addEventListener('mouseout', function() {
  f6.style.right = '-43vh';
  f6.style.opacity = '0';
})

fact7.addEventListener('mouseover', function() {
  f7.style.right = '-40vh';
  f7.style.opacity = '1';
})

fact7.addEventListener('mouseout', function() {
  f7.style.right = '-43vh';
  f7.style.opacity = '0';
})

fact8.addEventListener('mouseover', function() {
  f8.style.right = '-40vh';
  f8.style.opacity = '1';
})

fact8.addEventListener('mouseout', function() {
  f8.style.right = '-43vh';
  f8.style.opacity = '0';
})

fact9.addEventListener('mouseover', function() {
  f9.style.right = '-40vh';
  f9.style.opacity = '1';
})

fact9.addEventListener('mouseout', function() {
  f9.style.right = '-43vh';
  f9.style.opacity = '0';
})

fact10.addEventListener('mouseover', function() {
  f10.style.right = '-40vh';
  f10.style.opacity = '1';
})

fact10.addEventListener('mouseout', function() {
  f10.style.right = '-43vh';
  f10.style.opacity = '0';
})

fact11.addEventListener('mouseover', function() {
  f11.style.right = '-40vh';
  f11.style.opacity = '1';
})

fact11.addEventListener('mouseout', function() {
  f11.style.right = '-43vh';
  f11.style.opacity = '0';
})

fact12.addEventListener('mouseover', function() {
  f12.style.right = '-40vh';
  f12.style.opacity = '1';
})

fact12.addEventListener('mouseout', function() {
  f12.style.right = '-43vh';
  f12.style.opacity = '0';
})

fact13.addEventListener('mouseover', function() {
  f13.style.right = '-40vh';
  f13.style.opacity = '1';
})

fact13.addEventListener('mouseout', function() {
  f13.style.right = '-43vh';
  f13.style.opacity = '0';
})

fact14.addEventListener('mouseover', function() {
  f14.style.right = '-40vh';
  f14.style.opacity = '1';
})

fact14.addEventListener('mouseout', function() {
  f14.style.right = '-43vh';
  f14.style.opacity = '0';
})

fact15.addEventListener('mouseover', function() {
  f15.style.right = '-40vh';
  f15.style.opacity = '1';
})

fact15.addEventListener('mouseout', function() {
  f15.style.right = '-43vh';
  f15.style.opacity = '0';
})

fact16.addEventListener('mouseover', function() {
  f16.style.right = '-40vh';
  f16.style.opacity = '1';
})

fact16.addEventListener('mouseout', function() {
  f16.style.right = '-43vh';
  f16.style.opacity = '0';
})

fact17.addEventListener('mouseover', function() {
  f17.style.right = '-40vh';
  f17.style.opacity = '1';
})

fact17.addEventListener('mouseout', function() {
  f17.style.right = '-43vh';
  f17.style.opacity = '0';
})

fact18.addEventListener('mouseover', function() {
  f18.style.right = '-40vh';
  f18.style.opacity = '1';
})

fact18.addEventListener('mouseout', function() {
  f18.style.right = '-43vh';
  f18.style.opacity = '0';
})

optn.addEventListener('mouseover', function() {
  optn.style.opacity = '1';
  clearTimeout(timeout);
})

optn2.addEventListener('mouseover', function() {
  optn2.style.opacity = '1';
  clearTimeout(timeout);
})

var timeout = setTimeout(function() {
  optn.style.opacity = '0.4';
  optn2.style.opacity = '0.4';
}, 5000)

optn.addEventListener('mouseout', function() {
  timeout = setTimeout(function() {
    optn.style.opacity = '0.4';
  }, 5000)
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
