


(function () {
    'use strict'


    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    
   

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {

          
          const TestNin =document.querySelector('#TestAlerter');





          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            TestNin.classList.add('d-none');
          }else{
            event.preventDefault()
            TestNin.classList.remove('d-none');
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  


 