/*Select the last child of the <ol> tag and put it at the beginning of the list*/
const ol = document.querySelector('ol');
const a = ol.children[0]
const b = ol.children[4];
ol.insertBefore(b, a);

/*Move the <h2> of the third section in the second one and vice-versa*/
const secondh2 = document.querySelectorAll('h2')[1];
const thirdh2 = document.querySelectorAll('h2')[2];
const secondsection = document.querySelectorAll('section')[1];

secondsection.insertBefore(thirdh2, secondh2);

const div = document.querySelector('div');
const parag = div.lastElementChild;

div.insertBefore(secondh2, parag);

/*Delete the last section from the DOM, we don't need it anyways*/
const thirdsection = document.querySelectorAll('section')[2];
thirdsection.remove();