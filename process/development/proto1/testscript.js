'use strict';

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: '#two'
})

.setClassToggle('#two','fade-in');
.addTo(controller);
