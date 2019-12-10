import $ from 'jquery';
import {
  darkMode, darkModeToggle, enableDarkMode, disableDarkMode,
} from './app/darkmode';


document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.sidenav');
  const instances = M.Sidenav.init(elems);

  $('.sidenav-close').on('click', () => {
    $('#slide-out').animate({
      width: '0px',
      'margin-left': '-300px',
      opacity: '0',
	  }, 500);
	  if (window.innerWidth > 992) {
	      $('main').animate({
	        'margin-left': '50px',
		  });
    }
  });

  $('.side-nav').on('click', () => {
    $('#slide-out').animate({
      width: '300px',
      'margin-left': '0',
      opacity: '1',
    }, 500);
    if (window.innerWidth > 992) {
      $('main').animate({
        'margin-left': '300px',
      });
    }
  });
});
