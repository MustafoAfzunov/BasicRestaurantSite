document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('open');
        if (mobileNav.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('open');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Sticky Header
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
    
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - headerHeight;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Testimonials Slider
    const testimonials = [
        { quote: "Absolutely amazing experience. The food was incredible and the service was impeccable.", author: "Jane Doe" },
        { quote: "The best dining experience I've had in years. Every dish was a masterpiece.", author: "John Smith" },
        { quote: "The atmosphere was perfect for our anniversary dinner. We'll definitely be back!", author: "Emily Johnson" }
    ];
    
    let currentTestimonialIndex = 0;
    const testimonialElement = document.querySelector('.testimonial');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    function updateTestimonial() {
        const { quote, author } = testimonials[currentTestimonialIndex];
        testimonialElement.innerHTML = `
            <div class="quote">"${quote}"</div>
            <div class="author">- ${author}</div>
        `;
    }
    
    prevBtn.addEventListener('click', function() {
        currentTestimonialIndex--;
        if (currentTestimonialIndex < 0) {
            currentTestimonialIndex = testimonials.length - 1;
        }
        updateTestimonial();
    });
    
    nextBtn.addEventListener('click', function() {
        currentTestimonialIndex++;
        if (currentTestimonialIndex >= testimonials.length) {
            currentTestimonialIndex = 0;
        }
        updateTestimonial();
    });
    
    updateTestimonial();
    
    // Form Validation
    const reservationForm = document.querySelector('.reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const guests = document.getElementById('guests').value;
            const phone = document.getElementById('phone').value;
            if (!name || !email || !date || !time || !guests || !phone) {
                alert('Please fill in all required fields');
                return;
            }
            alert('Thank you for your reservation! We look forward to seeing you.');
            reservationForm.reset();
        });
    }
    
    // Animation on scroll
    const animateElements = document.querySelectorAll('.section');
    function checkIfInView() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                element.classList.add('in-view');
            }
        });
    }
    
    const style = document.createElement('style');
    style.textContent = `
        .section { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .section.in-view { opacity: 1; transform: translateY(0); }
    `;
    document.head.appendChild(style);
    
    checkIfInView();
    window.addEventListener('scroll', checkIfInView);
});
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
    document.querySelector('.mobile-nav').classList.toggle('active');
});

// Basic lightbox (enhance as needed)
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        alert('Image clicked! Add lightbox functionality here.');
    });
});