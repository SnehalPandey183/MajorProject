// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// Auto-dismiss flash alerts after 5 seconds
document.addEventListener('DOMContentLoaded', function() {
  const alerts = document.querySelectorAll('.alert-container');
  
  alerts.forEach(alert => {
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      const closeBtn = alert.querySelector('.alert-close');
      if (closeBtn) {
        closeBtn.click();
      }
    }, 5000);
    
    // Remove alert when close button is clicked
    const closeBtn = alert.querySelector('.alert-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        alert.classList.add('hide');
        setTimeout(() => {
          alert.remove();
        }, 400);
      });
    }
  });
});