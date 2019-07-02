const refs = {
  button: document.querySelector("button[data-action='theme-switch']"),
  body: document.querySelector('body'),
  icon: document.querySelector('.js-change-icon'),
};

const themeDark = 'theme-dark';
const themeLight = 'theme-light';

let currentTheme = localStorage.getItem('theme');

if (currentTheme === null) {
  localStorage.setItem('theme', themeLight);
  refs.body.classList.add(themeLight);
} else {
  localStorage.setItem('theme', currentTheme);
  if (currentTheme === themeDark) {
    refs.body.classList.add(themeDark);
  }
}

refs.button.addEventListener('click', changeTheme);

function changeTheme() {
  if (currentTheme === themeDark) {
    localStorage.setItem('theme', themeLight);
    refs.body.classList.remove(themeDark);
    refs.body.classList.add(themeLight);
    currentTheme = themeLight;
    refs.icon.textContent = 'brightness_3';
  } else if (currentTheme === themeLight) {
    localStorage.setItem('theme', themeDark);
    refs.body.classList.remove(themeLight);
    refs.body.classList.add(themeDark);
    currentTheme = themeDark;
    refs.icon.textContent = 'wb_sunny';
  }
}
