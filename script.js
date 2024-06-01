window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const bgAudio = new Audio('D:\\WD_01\\interactive-nav\\Introducing Jung Kook _ Calvin Klein Spring 2023.mp3');
    bgAudio.play(); // Play the audio when the page loads

    const productsLink = document.getElementById('products');
    if (productsLink) {
        productsLink.addEventListener('click', () => {
            window.location.href = 'products.html';
        });
    }

    const aboutLink = document.getElementById('about');
    if (aboutLink) {
        aboutLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default behavior of the link
            window.location.href = 'about.html'; // Redirect to the About page
        });
    }

    const contactLink = document.getElementById('contact');
    if (contactLink) {
        contactLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default behavior of the link
            window.location.href = 'contact.html'; // Redirect to the Contact page
        });
    }

    document.getElementById('navbar').addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            const href = event.target.getAttribute('href');
            if (href && href.startsWith('#')) {
                event.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    });
});
