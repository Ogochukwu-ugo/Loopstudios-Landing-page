const navbar = document.querySelector('.navbar');
const toggler = document.querySelector('.navbar-toggler');

toggler.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

function myFunction() {
    var element = document.querySelector('nav');
    element.classList.toggle("navbar-dark");
}

document.querySelectorAll('.nav-link').forEach(link => {
    if(link.href === window.location.href){
        link.setAttribute('aria-current', 'page');
    }
})
