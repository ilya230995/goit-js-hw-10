const themeSwitchToggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function change() {
  if (themeSwitchToggleRef.checked) {
    bodyRef.classList.add(`${Theme.DARK}`);
    localStorage.setItem('theme', 'dark');
  } else {
    bodyRef.classList.replace(`${Theme.DARK}`, `${Theme.LIGHT}`);
    localStorage.setItem('theme', 'light');
  }
}

function savedTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    themeSwitchToggleRef.checked = 'dark';
    bodyRef.classList.add(`${Theme.DARK}`);
  } else {
    bodyRef.classList.replace(`${Theme.DARK}`, `${Theme.LIGHT}`);
  }
}

const asd = themeSwitchToggleRef.addEventListener('change', change);

savedTheme();
