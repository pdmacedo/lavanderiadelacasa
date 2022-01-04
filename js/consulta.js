$(document).ready(function () 
{

    var forms = document.querySelectorAll('.needs-validation')
  
        Array.prototype.slice.call(forms)
          .forEach(function (form) 
          {
            form.addEventListener('submit', function (event) 
            {
              if (form.checkValidity()) 
              {
                  alert("Enviado com sucesso.")
              }

            event.preventDefault()
            event.stopPropagation()
      
              form.classList.add('was-validated')
            }, false)
          })
})

$(function () {
    document.getElementById('formContacto').addEventListener('submit', function () {
          var nome = this.querySelector('input[name=nome]'), nome = nome.value;
          var texto = 'Olá Lavandaria da Casa, \nmeu nome é: '+ nome;
          this.querySelector('input[name=Body]').setAttribute('value', texto);
      });
    });