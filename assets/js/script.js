$(function(){   //Esta es la función general de jquery
  //Todos los métodos de jquery van acá adentro

$('[data-bs-toggle ="tooltip"]').tooltip();

$('#boton').click(function(){
alert("El correo se ha enviado correctamente");
});

$('.card-title').click(function(){
$('.card-text').toggle();
});

$('body').on('dblclick','#cambio-color1', function(){
$(this).css("color", "red");
})

});
