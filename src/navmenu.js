export{initNavMenu};
import{setContent} from './main.js';


function initNavMenu() {
const content = document.getElementById('content');
const header = document.createElement('div');
header.setAttribute('id', 'header');

const navButtons = document.createElement('div');
navButtons.setAttribute('id', 'navButtons');
navButtons.appendChild(createButton('Home', 'home-button'));
navButtons.appendChild(createButton('Menu', 'menuBtn'));
navButtons.appendChild(createButton('Contact', 'contact-button'));
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

function createButton(name, id) {
    const button = document.createElement('button');
    button.setAttribute('id', id);
    button.innerHTML = name;
    button.value = name;
    button.classList.add('buttons');
    
    return button;
}