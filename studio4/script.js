'use strict';

var header = document.querySelector('#header');
var humm = document.querySelector('#humm');
var humming = document.querySelector('#humming');
var body = document.querySelector('body');

var home = document.querySelector('#home');


humm.addEventListener('click', function() {
  header.style.opacity = '0';
  header.style.marginTop = '-18%';
  humming.style.opacity = '1';
  humming.style.display = 'block';
})


home.addEventListener('click', function() {
  header.style.opacity = '1';
  header.style.marginTop = '8%';
  humming.style.opacity = '0';
  humming.style.display = 'none';
})
