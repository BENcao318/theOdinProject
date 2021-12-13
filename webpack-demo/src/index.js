import _ from 'lodash';
import myName from './myName';
// import './style.css';
// import Icon from './icon.jpg';
// // import Books from './books.xml';
// // import Sample from './sample.csv';

import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');


  // Lodash, currently included via a script, is required for this line to work

  // Lodash, now imported by this script
  element.innerHTML = myName('Beny');
  element.classList.add('hello');

  // Add the image to our existing div.
  // const myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);

  // console.log('Read books');
  // console.log('Sample csvs');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());