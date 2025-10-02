// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLeft = document.querySelector('.nav-left .nav-menu');
const navRight = document.querySelector('.nav-right .nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLeft.classList.toggle('active');
    navRight.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effects to product cards
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Simple animation for hero section
const heroContent = document.querySelector('.hero-content');
const heroImage = document.querySelector('.hero-image');

window.addEventListener('load', () => {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    heroImage.style.opacity = '0';
    heroImage.style.transform = 'translateX(20px)';
    
    setTimeout(() => {
        heroContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        heroImage.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'translateX(0)';
    }, 300);
});

// Add loading animation for product cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all product cards
productCards.forEach(card => {
    observer.observe(card);
});