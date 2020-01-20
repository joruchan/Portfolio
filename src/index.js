/* eslint-disable no-tabs */
import $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css';
import data from './app/projects.json';
import './app/darkmode';

AOS.init();

document.addEventListener('DOMContentLoaded', () => {
  const elemsSidenav = document.querySelectorAll('.sidenav');
  const sidenav = M.Sidenav.init(elemsSidenav);
  const elemsTooltip = document.querySelectorAll('.tooltipped');
  const tooltips = M.Tooltip.init(elemsTooltip);
  const elemsCarousel = document.querySelectorAll('.carousel');
  const carousel = M.Carousel.init(elemsCarousel);

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

const sortedProjects = data.projects.reverse();
for (const project of sortedProjects) {
  const techUsed = project.techUsed.join(' - ');
  let component = `
					  <div class="col xl6">
						  <div class="card sticky-action .shadow-diffuse">
							  <div class="card-image waves-effect waves-block waves-light">
								  <img class="activator" src="./assets/images/projects/${project.screenshot}" />
							  </div>
							  <div class="card-content">
								  <span class="card-title activator text-darken-4">
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
					  <span class="card-title text-darken-4">${project.name}<i class="material-icons right">close</i></span>
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
