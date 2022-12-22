//Calling function that will show the active/current page the user is on.

const navbar = document.querySelector('.navbar');
const toggler = document.querySelector('.navbar-toggler');

toggler.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    if (link.href === window.location.href) {
        link.setAttribute('aria-current', 'page');
    }
});

