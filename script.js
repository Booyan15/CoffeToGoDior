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


document.addEventListener('DOMContentLoaded', function () {
    // Show the popup immediately when the page loads
    document.getElementById('popupOffer').style.display = 'flex';

    // Close the popup when the close button is clicked
    document.getElementById('closePopup').addEventListener('click', function () {
        document.getElementById('popupOffer').style.display = 'none';
    });

    // Optional: Close the popup if clicking outside of it
    document.getElementById('popupOffer').addEventListener('click', function (e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    });
});
