'use strict';

var balm = document.querySelector('#balm');
var phone = document.querySelector('#phone');
var bottle = document.querySelector('#bottle');

var balmhov = document.querySelector('#balmhov');
var phonehov = document.querySelector('#phonehov');
var bottlehov = document.querySelector('#bottlehov');

var balmclose = document.querySelector('#balmclose');
var phoneclose = document.querySelector('#phoneclose');
var phoneclose = document.querySelector('#phoneclose');

var bmpic = document.querySelector('#bmpic');
var pnpic = document.querySelector('#pnpic');
var btpic = document.querySelector('#btpic');

var bmpic2 = document.querySelector('#bmpic2');
var pnpic2 = document.querySelector('#pnpic2');
var btpic2 = document.querySelector('#btpic2');

//overlay behavior

balm.addEventListener('click',function(){
  balmhov.style.display='flex';
  balm.style.display='none';
  phone.style.display='none';
  bottle.style.display='none';
})

phone.addEventListener('click',function(){
  phonehov.style.display='flex';
  balm.style.display='none';
  phone.style.display='none';
  bottle.style.display='none';
})

bottle.addEventListener('click',function(){
  bottlehov.style.display='flex';
  balm.style.display='none';
  phone.style.display='none';
  bottle.style.display='none';
})

//close behavior

balmclose.addEventListener('click',function(){
  balmhov.style.display='none';
  phonehov.style.display='none';
  bottlehov.style.display='none';

  balm.style.display='flex';
  phone.style.display='flex';
  bottle.style.display='flex';
})

phoneclose.addEventListener('click',function(){
  balmhov.style.display='none';
  phonehov.style.display='none';
  bottlehov.style.display='none';

  balm.style.display='flex';
  phone.style.display='flex';
  bottle.style.display='flex';
})

bottleclose.addEventListener('click',function(){
  balmhov.style.display='none';
  phonehov.style.display='none';
  bottlehov.style.display='none';

  balm.style.display='flex';
  phone.style.display='flex';
  bottle.style.display='flex';
})

//img hover for buttons

bmpic.addEventListener('mouseover',function(){
  bmpic.style.opacity='1';
  bmpic.src='images/balms.svg';
})

bmpic.addEventListener('mouseout',function(){
  bmpic.style.opacity='.7';
  bmpic.src='images/balmo.svg';
})

pnpic.addEventListener('mouseover',function(){
  pnpic.style.opacity='1';
  pnpic.src='images/phones.svg';
})

pnpic.addEventListener('mouseout',function(){
  pnpic.style.opacity='.7';
  pnpic.src='images/phoneo.svg';
})

btpic.addEventListener('mouseover',function(){
  btpic.style.opacity='1';
  btpic.src='images/bottles.svg';
})

btpic.addEventListener('mouseout',function(){
  btpic.style.opacity='.7';
  btpic.src='images/bottleo.svg';
})

//img hover for overlays

bmpic2.addEventListener('mouseover',function(){
  bmpic2.src='images/balmx.svg';
})

bmpic2.addEventListener('mouseout',function(){
  bmpic2.src='images/balms.svg';
})

pnpic2.addEventListener('mouseover',function(){
  pnpic2.src='images/phonex.svg';
})

pnpic2.addEventListener('mouseout',function(){
  pnpic2.src='images/phones.svg';
})

btpic2.addEventListener('mouseover',function(){
  btpic2.src='images/bottlex.svg';
})

btpic2.addEventListener('mouseout',function(){
  btpic2.src='images/bottles.svg';
})
