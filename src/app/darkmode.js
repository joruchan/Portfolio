export let darkMode = localStorage.getItem('darkMode');
export const darkModeToggle = document.querySelector('#dark-mode-toggle');
export const darkModeIcon = document.getElementById('darkModeIcon');

// check if dark mode is enabled
// if enabled, turn it off
// if disabled, turn it on

export const enableDarkMode = () => {
  // ajouter la classe "darkmode" au body
  document.body.classList.add('darkmode');
  // mettre à jour l'item darkMode dans le localstorage
  localStorage.setItem('darkMode', 'enabled');
};

export const disableDarkMode = () => {
  // enlever la classe darkmode du body
  document.body.classList.remove('darkmode');
  // mettre à jour l'item darkMode dans le localstorage
  localStorage.setItem('darkMode', null);
};

// si le darkmode du localstorage est set comme enabled, lancer enableDarkMode
if (darkMode === 'enabled') {
  enableDarkMode();
  darkModeIcon.setAttribute('src', './assets/images/sun.png');
}

darkModeToggle.addEventListener('click', () => {
  // Faire en sorte que le darkmode se set à chaque clic et non qu'une fois la page loadée
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
    darkModeIcon.setAttribute('src', './assets/images/sun.png');
  } else {
    disableDarkMode();
    darkModeIcon.setAttribute('src', './assets/images/moon.png');
  }
});
