const text = ['Web designer I design and build user interfaces no', 'Back End dev sorry', 'Full Stack Developer'];
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