// Cambia esto a "on" para activar el modo de actualización
const modoActualizacion = "on"; // <-- CAMBIA AQUÍ

window.addEventListener("DOMContentLoaded", () => {
  const actualizacion = document.getElementById("actualizacion");
  const contenido = document.getElementById("contenidoWeb");
  const loader = document.getElementById("loader");
  const logo = document.getElementById("loader-logo");

  // Modo actualización
  if (modoActualizacion === "on") {
    actualizacion.classList.remove("oculto");
    contenido.style.display = "none";
    if (loader) loader.style.display = "none";
    return;
  } else {
    actualizacion.classList.add("oculto");
    contenido.style.display = "block";
  }

  // Pantalla de carga
  setTimeout(() => {
    // Animación de agrandamiento
    logo.style.transition = "transform 1s ease-in-out";
    logo.style.transform = "scale(20)";

    // Después de la animación, ocultar el loader y mostrar la web
    setTimeout(() => {
      loader.classList.add("oculto");
      contenido.classList.remove("oculto");
    }, 1000);
  }, 4000); // Duración de pantalla de carga
});
