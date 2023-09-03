import {frontPageContent} from './content.js';
import {menuContent} from './menu.js';
import {contactContent} from './contact.js';

frontPageContent();

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');

homeBtn.addEventListener('click', event => {
    frontPageContent();
    menuBtn.classList.remove('currentTab');
    contactBtn.classList.remove('currentTab');
    homeBtn.classList.add('currentTab');
})

menuBtn.addEventListener('click', event => {
    menuContent();
    homeBtn.classList.remove('currentTab');
    contactBtn.classList.remove('currentTab');
    menuBtn.classList.add('currentTab');
})

contactBtn.addEventListener('click', event => {
    contactContent();
    menuBtn.classList.remove('currentTab');
    homeBtn.classList.remove('currentTab');
    contactBtn.classList.add('currentTab');
})