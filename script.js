const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (pageYOffset > 300) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
});