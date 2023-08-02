const buttons = document.querySelectorAll('.button');
const menus = document.querySelectorAll('.menu');

const highlight = document.createElement('span');
document.body.appendChild(highlight);
highlight.classList.add('highlight');

// Set initial dimensions and position of 'highlight' based on activeButton coords 
function initialHightlightLocation() {
