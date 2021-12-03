const text = ['Front end developer no', 'Backend dev sorry', 'Full Stack Developer'];
let count = 0;
index = 0;
let currenttxt = '';
let character = '';

(function typing () {
  if (count === text.length) {
    count = 0;
  }
  currenttxt = text[count];
  character = currenttxt.slice(0, ++index);

  document.querySelector('.screen-type').textContent = character;
  if (character.length === currenttxt.length) {
    count++;
    index = 0;
  }
  setTimeout(typing, 300);
}());