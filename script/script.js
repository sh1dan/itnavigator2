document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.querySelector('.btnContact-popup');
    const wrapper = document.querySelector('.wrapper');
    const closeButton = document.querySelector('.icon-close');
    const formBoxContact = document.querySelector('.form-box.contact');
  
    contactButton.addEventListener('click', function(event) {
      event.preventDefault();
      wrapper.classList.add('active-popup');
      formBoxContact.style.display = 'block';
    });
  
    closeButton.addEventListener('click', function() {
      wrapper.classList.remove('active-popup');
      formBoxContact.style.display = 'none';
    });
  });
  