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
    // Function to show popup
    function showPopup() {
        const popupShown = localStorage.getItem('popupShown');
        // Show the popup if it hasn't been shown before
        if (!popupShown) {
            document.getElementById('popupOffer').style.display = 'flex';
            localStorage.setItem('popupShown', 'true');
        }
    }

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

    // Detect if the page was loaded via refresh or direct navigation
    if (performance.navigation.type === 1 || performance.navigation.type === 0) {
        // If the page was loaded via refresh or direct navigation (not via back button)
        showPopup();
    }
});
