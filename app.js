document.getElementById("botonSaludo").addEventListener("click", function() {
  const nombre = document.getElementById("nombre").value;
  const mensaje = `Hola ${nombre}, un gusto, te saluda Tracy Moriano.`;
  document.getElementById("mensaje").textContent = mensaje;
});  