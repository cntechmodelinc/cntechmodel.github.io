document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section.tab-content');

    // Display the "Home" section by default
    document.getElementById('home').classList.add('active');

    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            // Hide all sections
            sections.forEach((section) => section.classList.remove('active'));

            // Display the selected section
            document.getElementById(targetId).classList.add('active');
        });
    });
});
