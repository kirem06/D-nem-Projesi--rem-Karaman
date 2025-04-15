document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('message').classList.remove('hidden');
  this.reset();
});

  
  