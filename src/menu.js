export{initMenu};
import{getHome} from './main.js';


function initMenu() {
const content = document.getElementById('content');
const header = document.createElement('div');
header.setAttribute('id', 'header');

const navButtons = document.createElement('div');
navButtons.setAttribute('id', 'navButtons');


const homeBtn = document.createElement('button')
const menuBtn = document.createElement('button');
const contactBtn = document.createElement('button');


homeBtn.setAttribute('id', 'home-button');
homeBtn.innerHTML = "Home";
homeBtn.classList.add('buttons');


menuBtn.setAttribute('id', 'menu-button');
menuBtn.innerHTML = "Menu";
menuBtn.classList.add('buttons');

contactBtn.setAttribute('id', 'contact-button');
contactBtn.classList.add('buttons');
contactBtn.innerHTML= "Contact"

navButtons.appendChild(homeBtn);
navButtons.appendChild(menuBtn);
navButtons.appendChild(contactBtn);
header.appendChild(navButtons);

initClickEvents(homeBtn,menuBtn,contactBtn);
content.prepend(header);
}


function initClickEvents(homeBtn, menuBtn, contactBtn) {
    homeBtn.addEventListener('click', () => {
        if (!homeBtn.classList.contains('active')) {
            getHome();
            homeBtn.classList.add('active');
        }
    })

    menuBtn.addEventListener('click', () => {
        if (!menuBtn.classList.contains('active')) {
           
            homeBtn.classList.add('active');
        }
    })

    contactBtn.addEventListener('click', () => {
        if (!homeBtn.classList.contains('active')) {
           
            homeBtn.classList.add('active');
        }
    })
    
}