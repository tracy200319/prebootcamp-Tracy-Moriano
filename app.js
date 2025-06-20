document.getElementById("botonSaludo").addEventListener("click", function() {
  const nombre = document.getElementById("nombre").value;
  const mensaje = `Hola ${nombre}, un gusto, te saluda Tracy Moriano:p`;
  document.getElementById("mensaje").textContent = mensaje;
}); 