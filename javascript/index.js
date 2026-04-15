// Mobile Menu Toggle
document.getElementById("menu").addEventListener("click", () => {
    document.getElementById("mobileMenu").classList.toggle("hidden");
});

// Close mobile menu when a link is clicked
document.querySelectorAll("#mobileMenu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("mobileMenu").classList.add("hidden");
    });
});

// Smooth scroll for navigation links
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

// Scroll animations - add fade-in effect to elements
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Contact Form Validation and Submission
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = this.querySelector('input[placeholder="Your Name"]').value.trim();
        const email = this.querySelector('input[placeholder="Your Email"]').value.trim();
        const subject = this.querySelector('input[placeholder="Subject"]').value.trim();
        const message = this.querySelector('textarea').value.trim();

        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Show success message
        alert('Thank you! Your message has been sent successfully. I will get back to you soon!');

        // Reset form
        this.reset();
    });
}

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('text-black');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('text-black');
        }
    });
});

// Animate statistics counter
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 50);

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (target === 100 ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (current >= target - 1 ? '+' : '');
        }
    }, 50);
}

// Trigger counter animation when stats section is visible
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.querySelector('h1').textContent.includes('Statistics')) {
            const counters = entry.target.querySelectorAll('h3');
            counters.forEach(counter => {
                const value = parseInt(counter.textContent);
                if (!isNaN(value)) {
                    animateCounter(counter, value);
                }
            });
            observer2.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Find stats section
document.querySelectorAll('section').forEach(section => {
    if (section.querySelector('h1') && section.querySelector('h1').textContent.includes('Statistics')) {
        observer2.observe(section);
    }
});

// Keyboard accessible scroll to top
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});