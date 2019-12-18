/* eslint-disable no-tabs */
import $ from 'jquery';
import { get } from 'axios';
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

get('src/app/projects.json')
  .then((response) => response.data.projects)
  .then((projects) => {
    const sortedProjects = projects.reverse();
    for (const project of sortedProjects) {
      const techUsed = project.techUsed.join(' - ');
      let component = `
					  <div class="col l6">
						  <div class="card sticky-action .shadow-diffuse">
							  <div class="card-image waves-effect waves-block waves-light">
								  <img class="activator" src="./assets/images/projects/${project.screenshot}" />
							  </div>
							  <div class="card-content">
								  <span class="card-title activator grey-text text-darken-4">
									  ${project.name}
									  <i class="material-icons right">
										  more_vert
									  </i>
								  </span>
							  </div>
							  <div class="card-action">`;
      if (project.linkLive) {
        component += `<a href="${project.linkLive}">View Live <i class="material-icons">language</i></a>`;
      }
      if (project.linkCode) {
        component += `<a href="${project.linkCode}">View Code <i class="material-icons">code</i></a>`;
      }
      component += 	`							  
				  </div>
				  <div class="card-reveal">
					  <span class="card-title grey-text text-darken-4">${project.name}<i class="material-icons right">close</i></span>
					  <p>
						  ${project.description}
					  </p>
					  <p>
	  					  Technologies utilisées : ${techUsed}
					  </p>
				  </div>
			  </div>
		  </div>
		  `;
      $('.projects-list').append(component);
    }
  });
