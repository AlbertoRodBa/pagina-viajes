const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)) //enable tooltips


$("#boton-formulario").click(function(){
    alert("¡Gracias por tu mensaje!");
  });