'use strict';

document.querySelector('#submit').addEventListener('click', processForm);
document.querySelector('#reset').addEventListener('click', resetForm);

function processForm(evt) {
  var name = document.querySelector('#name').value;
  var adjone = document.querySelector('#adjone').value;
  var numb = document.querySelector('#numb').value;
  var verb = document.querySelector('#verb').value;
  var noun = document.querySelector('#noun').value;
  var food = document.querySelector('#food').value;
  var image = document.querySelector('#image');
  var choose = document.querySelector('#choose').value;
  var adjtwo;
  var yourname = document.querySelector('#yourname').value;

  var myMsg = document.querySelector('#myMsg')
  var msgSection = document.querySelector('#msgSection')

  if (choose == 'active') {
    adjtwo = 'run around and play';
    image.innerHTML = '<img id="avatar" src="images/dog.svg" alt="dog avatar" width="250" height="250">'
  } else if (choose == 'lazy') {
    adjtwo = 'sleep all day';
    image.innerHTML = '<img id="avatar" src="images/dogone.svg" alt="dog avatar" width="250" height="250">'
  } else if (choose == 'anxious') {
    adjtwo = 'chew on your socks';
    image.innerHTML = '<img id="avatar" src="images/dogtwo.svg" alt="dog avatar" width="250" height="250">'
  }

  myMsg.innerHTML = '<span>hello!</span> <br> my name is ' + name + ' and i am a ' + adjone + ', ' + numb + ' year old pup. i love to ' + verb + ' with my ' + noun + '.' + ' my favorite thing to eat is ' + food + ' and i love to ' + adjtwo + ', but my most favorite thing to do is be with ' + yourname + '!';

  msgSection.className = "show";

  evt.preventDefault();
}

function resetForm() {
  msgSection.className = "hide";
  image.innerHTML = '<img id="avatar" src="images/vague.svg" alt="dog avatar" width="250" height="250">'
}
