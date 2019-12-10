export let darkMode = localStorage.getItem('darkMode');
export const darkModeToggle = document.querySelector('#dark-mode-toggle');
export const darkModeIcon = document.getElementById('darkModeIcon');

// check if dark mode is enabled
// if enabled, turn it off
// if disabled, turn it on

export const enableDarkMode = () => {
  // add darkmode class to the body
  document.body.classList.add('darkmode');
  // update darkmode in the localstorage
  localStorage.setItem('darkMode', 'enabled');
};

export const disableDarkMode = () => {
  // remove darkmode class from the body
  document.body.classList.remove('darkmode');
  // update darkmode in the localstorage
  localStorage.setItem('darkMode', null);
};

// if the localstorage has darkmode as enabled, enable darkmode
if (darkMode === 'enabled') {
  enableDarkMode();
  darkModeIcon.setAttribute('src', '/public/assets/images/sun.png');
}

darkModeToggle.addEventListener('click', () => {
  // set the darkmode every time we click and not just once the page is loading
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
    darkModeIcon.setAttribute('src', '/public/assets/images/sun.png');
  } else {
    disableDarkMode();
    darkModeIcon.setAttribute('src', '/public/assets/images/moon.png');
  }
});
