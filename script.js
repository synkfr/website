// Smooth scroll when navigating to sections (can be extended with more functionality later)
document.addEventListener('DOMContentLoaded', function () {
  const skillsSection = document.querySelector('#skills');
  const projectsSection = document.querySelector('#projects');
  const contactSection = document.querySelector('#contact');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight;

    if (scrollPos > skillsSection.offsetTop + skillsSection.offsetHeight / 2) {
      skillsSection.classList.add('animate-slide');
    }

    if (scrollPos > projectsSection.offsetTop + projectsSection.offsetHeight / 2) {
      projectsSection.classList.add('animate-fade');
    }

    if (scrollPos > contactSection.offsetTop + contactSection.offsetHeight / 2) {
      contactSection.classList.add('animate-slide');
    }
  });
});

