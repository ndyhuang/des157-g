'use strict';

AOS.init({
  duration: 1200
});

var intro = document.querySelector('#intro');

var hm = document.querySelector('#hm');
var strs = document.querySelector('#strs');
var abt = document.querySelector('#abt');
var shr = document.querySelector('#shr');

var aboutpg = document.querySelector('#aboutpg');
var sharepg = document.querySelector('#sharepg');

var bird1 = document.querySelector('#bird1');
var bird2 = document.querySelector('#bird2');
var bird3 = document.querySelector('#bird3');

var story1 = document.querySelector('#story1');
var story2 = document.querySelector('#story2');
var story3 = document.querySelector('#story3');

bird1.addEventListener('click',function(){
  intro.style.opacity='0';
  intro.style.marginTop='-55%';
  story1.style.opacity='1';
  story1.style.display='block';
})

bird2.addEventListener('click',function(){
  intro.style.opacity='0';
  intro.style.display='none';
  story2.style.display='block';
})

bird3.addEventListener('click',function(){
  intro.style.opacity='0';
  intro.style.display='none';
  story3.style.display='block';
})

hm.addEventListener('click',function(){
  story1.style.display='none';
  story2.style.display='none';
  story3.style.display='none';
  aboutpg.style.display='none';
  sharepg.style.display='none';

  intro.style.opacity='1';
  intro.style.marginTop='7%';
  hm.style.borderBottom='3px solid #C4775C'
})

abt.addEventListener('click',function(){
  story1.style.display='none';
  story2.style.display='none';
  story3.style.display='none';
  intro.style.display='none';
  sharepg.style.display='none';

  aboutpg.style.display='block';
  abt.style.borderBottom='3px solid #C4775C'
})

shr.addEventListener('click',function(){
  story1.style.display='none';
  story2.style.display='none';
  story3.style.display='none';
  intro.style.display='none';
  aboutpg.style.display='none';

  sharepg.style.display='block';
  shr.style.borderBottom='3px solid #C4775C'
})
