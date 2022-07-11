import {initNavMenu} from './navmenu.js';
import {initFooter} from './footer.js';
import {initMain} from './main.js';

import './style.css';
import './imgs/splash.jpg';

const content = document.getElementById('content');
initMain();
initNavMenu();

initFooter();