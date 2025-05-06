// Navbar Scroll Efekti
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animasyon Efektleri
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.service-card, .about-section, .contact-section');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Form İşlevselliği
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const formError = document.getElementById('formError');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form gönderildikten sonra başarı mesajını göster
        setTimeout(function() {
            formSuccess.classList.remove('d-none');
            contactForm.reset();
            
            // 5 saniye sonra başarı mesajını gizle
            setTimeout(function() {
                formSuccess.classList.add('d-none');
            }, 5000);
        }, 1000);
    });
}

// WhatsApp Mesajı
const whatsappButton = document.querySelector('.whatsapp-button');
if (whatsappButton) {
    whatsappButton.addEventListener('click', function() {
        // WhatsApp mesajını özelleştir
        const message = "Merhaba, elektrik ve su tesisatı hizmetleriniz hakkında bilgi almak istiyorum.";
        this.href = `https://wa.me/905070461543?text=${encodeURIComponent(message)}`;
    });
}

// Mobil Menü
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
    });
} 