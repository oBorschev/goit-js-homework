import './styles.css';
import menu from './menu.json';
import nemuTemplate from './templates/index.hbs';
import './change-theme';

const insertMenu = document.querySelector('.menu');

const markup = nemuTemplate(menu);
insertMenu.insertAdjacentHTML('beforeend', markup);
