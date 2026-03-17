// Commercial Cleaning Services Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initFAQAccordion();
    initFormValidation();
    initSmoothScrolling();
    handleInitialHashScroll();
    initAnimations();
    initMobileMenu();
});

// FAQ Accordion Functionality
function initFAQAccordion() {
    const faqButtons = document.querySelectorAll('[onclick="toggleFAQ(this)"]');
    
    faqButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            toggleFAQ(this);
        });
    });
}

function toggleFAQ(button) {
    const faqItem = button.closest('.border');
    const content = faqItem.querySelector('.px-6.pb-4');
    const icon = button.querySelector('.fas.fa-chevron-down');
    
    // Close all other FAQ items
    document.querySelectorAll('.px-6.pb-4').forEach(item => {
        if (item !== content) {
            item.classList.add('hidden');
            const otherIcon = item.closest('.border').querySelector('.fas.fa-chevron-down');
            if (otherIcon) {
                otherIcon.style.transform = 'rotate(0deg)';
            }
        }
    });
    
    // Toggle current FAQ item
    content.classList.toggle('hidden');
    
    // Rotate icon
    if (icon) {
        if (content.classList.contains('hidden')) {
            icon.style.transform = 'rotate(0deg)';
        } else {
            icon.style.transform = 'rotate(180deg)';
        }
    }
}

// Form Validation
function initFormValidation() {
    const form = document.getElementById('quote-form');
    if (!form) return;
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

function validateForm() {
    const form = document.getElementById('quote-form');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    // Validate email format
    const emailField = form.querySelector('#email');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            showFieldError(emailField, 'Please enter a valid email address');
            isValid = false;
        }
    }
    
    // Validate phone format
    const phoneField = form.querySelector('#phone');
    if (phoneField && phoneField.value) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,}$/;
        if (!phoneRegex.test(phoneField.value)) {
            showFieldError(phoneField, 'Please enter a valid phone number');
            isValid = false;
        }
    }
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'This field is required');
        return false;
    }
    
    clearFieldError(field);
    return true;
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    field.classList.add('form-error');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    errorDiv.id = `error-${field.id}`;
    
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.classList.remove('form-error');
    
    const errorDiv = field.parentNode.querySelector(`#error-${field.id}`);
    if (errorDiv) {
        errorDiv.remove();
    }
}



// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Smooth scroll to hash if the page is loaded with one (e.g., from Google Ads sitelinks)
function handleInitialHashScroll() {
    if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            // Delay to ensure layout is settled
            setTimeout(() => {
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }, 0);
        }
    }
}

// Animations
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.bg-white.rounded-lg, .text-center.p-4');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Mobile Menu (if needed)
function initMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(function() {
    // Recalculate any dynamic layouts if needed
}, 250));

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData = {}) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, eventData);
    
    // Example: Google Analytics 4
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventName, eventData);
    // }
}

// Track form interactions
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quote-form');
    if (form) {
        // Track form start
        form.addEventListener('focusin', function() {
            trackEvent('form_start', {
                form_name: 'cleaning_quote'
            });
        });
        
        // Track form submission
        form.addEventListener('submit', function() {
            trackEvent('form_submit', {
                form_name: 'cleaning_quote'
            });
        });
    }
    
    // Track phone clicks
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('phone_click', {
                phone_number: this.getAttribute('href').replace('tel:', '')
            });
        });
    });
    
    // Track CTA button clicks
    const ctaButtons = document.querySelectorAll('a[href="#quote-form"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('cta_click', {
                button_text: this.textContent.trim(),
                button_location: this.closest('section')?.className || 'unknown'
            });
        });
    });
});

// Performance monitoring
window.addEventListener('load', function() {
    // Track page load performance
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0];
        if (perfData) {
            trackEvent('page_load_performance', {
                load_time: perfData.loadEventEnd - perfData.loadEventStart,
                dom_content_loaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart
            });
        }
    }
});
