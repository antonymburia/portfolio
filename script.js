const text = ['Web developer I design and build user websites no', 'Back End developer', 'Full Stack Developer'];
let count = 0;
txtindex = 0;
let currenttxt = '';
let character = '';

(function typing () {
  if (count === text.length) {
    count = 0;
  }
  currenttxt = text[count];
  character = currenttxt.slice(0, ++txtindex);

  document.querySelector('.screen-type').textContent = character;
  if (character.length === currenttxt.length) {
    count++;
    txtindex = 0;
  }
  setTimeout(typing, 300);
}());