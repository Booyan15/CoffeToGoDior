document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById('navbar');
    const logoHeight = document.querySelector('.logo').offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > logoHeight) {
            navbar.classList.add('show');
        } else {
            navbar.classList.remove('show');
        }
    });
});
