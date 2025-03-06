// Add smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dropdown Menu Interaction
document.addEventListener('DOMContentLoaded', function () {
    let dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function () {
            this.querySelector('.dropdown-content').style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', function () {
            this.querySelector('.dropdown-content').style.display = 'none';
        });
    });
});

// Search Bar Functionality (Basic Implementation)
document.querySelector('.search-input').addEventListener('input', function () {
    let query = this.value.toLowerCase();
    let links = document.querySelectorAll('.navbar nav ul li a');

    links.forEach(link => {
        if (link.textContent.toLowerCase().includes(query)) {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
    });
});
