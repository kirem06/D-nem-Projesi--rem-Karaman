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

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form verilerini al
        const formData = {
            name: this.name.value,
            phone: this.phone.value,
            email: this.email.value,
            message: this.message.value
        };

        // Form verilerini konsola yazdır (gerçek uygulamada burada API çağrısı yapılır)
        console.log('Form verileri:', formData);

        // Başarı mesajını göster
        formSuccess.classList.remove('d-none');
        formSuccess.classList.add('animate__animated', 'animate__fadeIn');

        // Formu temizle
        this.reset();

        // 5 saniye sonra başarı mesajını gizle
        setTimeout(() => {
            formSuccess.classList.add('animate__fadeOut');
            setTimeout(() => {
                formSuccess.classList.add('d-none');
                formSuccess.classList.remove('animate__fadeOut', 'animate__fadeIn');
            }, 500);
        }, 5000);
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