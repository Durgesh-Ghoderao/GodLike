// Toggle mobile menu visibility
document.getElementById('menuToggle').addEventListener('click', function() {
    this.classList.toggle('active'); // Toggle active class for menu icon
    const navbarMenu = document.getElementById('navbarMenu');
    navbarMenu.style.display = navbarMenu.style.display === 'block' ? 'none' : 'block'; // Toggle menu visibility
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
