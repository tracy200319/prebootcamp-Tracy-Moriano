document.getElementById("botonSaludo").addEventListener("click", function() {
  const nombre = document.getElementById("nombre").value;
  const mensaje = `Hola ${nombre}, un gusto:p`;
  document.getElementById("mensaje").textContent = mensaje;
}); 