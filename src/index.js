import {initMenu} from './menu.js';
import {initFooter} from './footer.js';
import {initMain} from './main.js';

import './style.css';
import './imgs/splash.jpg';

const content = document.getElementById('content');
initMain();
initMenu();

initFooter();