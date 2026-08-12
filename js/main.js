window.addEventListener("scroll", function() {
  var menu = document.getElementById("menu");
  var desplazamiento = window.pageYOffset;
  
  // Se activa al bajar más de 100 píxeles
  menu.classList.toggle("sticky", desplazamiento > 100);
});