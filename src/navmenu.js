export{initNavMenu};
import{setContent} from './main.js';


function initNavMenu() {
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
homeBtn.value = "Home";
homeBtn.classList.add('buttons');


menuBtn.setAttribute('id', 'menu-button');
menuBtn.innerHTML = "Menu";
menuBtn.value = "Menu";
menuBtn.classList.add('buttons');

contactBtn.setAttribute('id', 'contact-button');
contactBtn.classList.add('buttons');
contactBtn.value = "Contact";
contactBtn.innerHTML= "Contact"

navButtons.appendChild(homeBtn);
navButtons.appendChild(menuBtn);
navButtons.appendChild(contactBtn);
header.appendChild(navButtons);
content.prepend(header);
initClickEvents();
}


function initClickEvents() {
   const buttons = document.querySelectorAll('.buttons');
   buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (!button.classList.contains('active')) {
            const mainInfo = document.querySelector('.mainInfo');
            while (mainInfo.hasChildNodes()) {
                mainInfo.removeChild(mainInfo.lastChild);
            }
            setContent(button.value);
            buttons.forEach((item) => {
                item.classList.remove('active');
            })
            button.classList.add('active');
        }
    })
   })
    
}