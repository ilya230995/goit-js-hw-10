import template from '../templates/menu-item.hbs';
import items from '../menu.json';

const menuRef = document.querySelector('.menu');

const markup = items.map(item => template(item)).join(' ');

menuRef.insertAdjacentHTML('beforeend', markup);
