
import {createHomepage} from './homepage.js';
import {createMenu} from './menu.js';
import {createContact} from './contact.js';
import './style.css';
import prancingPony2 from './prancingPony.png';

let container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);

let heading = document.createElement('div');
heading.setAttribute('id', 'header');

const prancingPony = new Image();
prancingPony.src = prancingPony2;
prancingPony.id="ponyLogo";


container.appendChild(heading);
heading.appendChild(prancingPony);

const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.appendChild(content);


function removeElements() {
    let element = document.getElementById('content');
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}


let homepageButton = document.createElement('button');
homepageButton.innerText = "Home";
homepageButton.setAttribute('id', 'homebutton');
homepageButton.setAttribute('class', 'linkButton');
heading.appendChild(homepageButton);
homepageButton.addEventListener('click', removeElements);
homepageButton.addEventListener('click', createHomepage);

let menuButton = document.createElement('button');
menuButton.innerText = "Menu";
menuButton.setAttribute('id', 'menubutton');
menuButton.setAttribute('class', 'linkButton');
heading.appendChild(menuButton);
menuButton.addEventListener('click', removeElements);
menuButton.addEventListener('click', createMenu);

let contactButton = document.createElement('button');
contactButton.innerText = "Contact";
contactButton.setAttribute('id', 'contactbutton');
contactButton.setAttribute('class', 'linkButton');
heading.appendChild(contactButton);
contactButton.addEventListener('click', removeElements);
contactButton.addEventListener('click', createContact);

createHomepage();


