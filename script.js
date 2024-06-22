document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const serviceID = 'service_axqo2mo'; // Replace with your EmailJS service ID
        const templateID = 'template_gw62qke'; // Replace with your EmailJS template ID

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert('Thank you for contacting us. We will get back to you shortly.');
                document.getElementById('contact-form').reset();
            }, (err) => {
                alert(JSON.stringify(err));
            });
    });
    

    
});

// Existing JavaScript
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Smooth scroll to section on link click
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Close the navbar on mobile after clicking a link
        if (window.innerWidth <= 600) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        }
    });
});
