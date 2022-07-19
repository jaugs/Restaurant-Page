export {createContact}
import barliman from './barliman.jpg';
import nob from './nob.jpg';


function createItem(string, id) {
    let title = string;
    let item = document.createElement('div');
    item.setAttribute('id', id);
    item.setAttribute('class', 'item');
    item.innerText = title;
    return item;
 }
 
 function createTitle(string) {
    let titleText = string;
    let title = document.createElement('div');
    title.setAttribute('class', 'title');
    title.innerText = titleText;
    return title;
 }
 
 function createDescription(string) {
    let title = document.createElement('div');
    title.setAttribute('class', 'text');
    title.innerText = string;
    return title;
 }
 
 function createImage(string, id){
    let newImage = new Image();
    newImage.src = string;
    newImage.id = id;
    newImage.className = 'image';
    return newImage;
 }

function createContact () {
    let content = document.getElementById('content');

    let contactTitle = createTitle('Contact Us');
    content.appendChild(contactTitle);

    let barlimanCard = createItem('Barliman Butterbur', 'barliman')
    content.appendChild(barlimanCard);
    let barlimanImage = createImage(barliman, 'barliman');
    barlimanCard.appendChild(barlimanImage);
    let barlimanText = createDescription('Innkeep - BBbur@breeland.net');
    barlimanCard.appendChild(barlimanText);

    let nobCard = createItem('Nob', 'nob')
    content.appendChild(nobCard);
    let nobImage = createImage(nob, 'nob');
    nobCard.appendChild(nobImage);
    let nobText = createDescription('Cook - slowcoach1@breeland.net');
    nobCard.appendChild(nobText);

} 