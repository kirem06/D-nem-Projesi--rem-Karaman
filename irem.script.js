document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const message = document.getElementById('message');
    message.textContent = "Teşekkürler! Mesajınız iletildi.";
    message.classList.remove('hidden');
  
    // Yeşil başarı mesajı stili
    message.style.color = 'white';
    message.style.backgroundColor = '#28a745';
    message.style.padding = '10px';
    message.style.borderRadius = '5px';
  
    this.reset();
  
    // 4 saniye sonra mesajı gizle
    setTimeout(() => {
      message.classList.add('hidden');
    }, 4000);
  });
  
  