function sendEmail(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
  
    // Validar los campos del formulario antes de enviar el correo electrónico
    if (!validateForm()) {
      return;
    }
  
    var name = escapeHtml(document.getElementById("name").value);
    var subject = escapeHtml(document.getElementById("subject").value);
    var email = escapeHtml(document.getElementById("email").value);
    var message = escapeHtml(document.getElementById("message").value);
  
    var mailtoLink = "mailto:helver248@hotmail.es?subject=" + encodeURIComponent(subject) +
      "&body=Nombre: " + encodeURIComponent(name) + "%0D%0A%0D%0ACorreo: " + encodeURIComponent(email) +
      "%0D%0A%0D%0AMensaje:%0D%0A" + encodeURIComponent(message);
  
    window.location.href = mailtoLink;
  }
  
  function validateForm() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Validar los campos del formulario con expresiones regulares
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var subjectRegex = /^[^\n\r]+$/;
    var messageRegex = /^[^\n\r]+$/;
  
    if (!nameRegex.test(name)) {
      alert("Por favor, introduce un nombre válido.");
      return false;
    }
  
    if (!emailRegex.test(email)) {
      alert("Por favor, introduce un correo electrónico válido.");
      return false;
    }
  
    if (!subjectRegex.test(subject)) {
      alert("Por favor, introduce un asunto válido.");
      return false;
    }
  
    if (!messageRegex.test(message)) {
      alert("Por favor, introduce un mensaje válido.");
      return false;
    }
  
    return true;
  }
  
  function escapeHtml(text) {
    var map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
  
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
  }