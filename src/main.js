export {initMain, setContent};
import {getHome} from './home.js';
import {getMenu} from './menu.js';
import {getContact} from './contact.js';

function initMain() {
   const content = document.getElementById('content');
   const main = document.createElement('div');
   main.setAttribute('id', 'main');
   const mainInfo = document.createElement('div');
   mainInfo.classList.add('mainInfo');
   main.appendChild(mainInfo);
   content.append(main);
}

function setContent(content) {
    if (content === 'Home') {
        getHome();
    }
    if (content ==='Menu') {
        getMenu();
    }
    if (content === 'Contact'){
        getContact();
    }
}



