const modoActualizacion = "off"; // Cambia a "on" si quieres mostrar solo la pantalla de actualización

window.addEventListener("DOMContentLoaded", () => {
  const actualizacion = document.getElementById("actualizacion");
  const contenido = document.getElementById("contenidoWeb");
  const loader = document.getElementById("loader");
  const logo = document.getElementById("loader-logo");
  const video = document.getElementById("video-intro");
  const videoContainer = document.getElementById("video-container");

  // Modo actualización
  if (modoActualizacion === "on") {
    actualizacion.classList.remove("oculto");
    contenido.style.display = "none";
    if (loader) loader.style.display = "none";
    if (videoContainer) videoContainer.style.display = "none";
    return;
  }

  // Reproducir video a volumen alto
  video.src = "anuncio.mp4";
  video.volume = 1.0; // Volumen máximo

  // Cuando termina el vídeo
  video.onended = () => {
    videoContainer.classList.add("oculto");
    loader.classList.remove("oculto");

    // Pantalla de carga (4s) + animación de logo
    setTimeout(() => {
      if (logo) {
        logo.style.transition = "transform 1s ease-in-out";
        logo.style.transform = "scale(20)";
      }

      setTimeout(() => {
        loader.classList.add("oculto");
        contenido.classList.remove("oculto");
      }, 1000);
    }, 4000);
  };

  // Si el vídeo no se puede reproducir (por error), saltamos directamente
  video.onerror = () => {
    console.warn("No se pudo reproducir el vídeo. Cargando contenido directamente.");
    videoContainer.classList.add("oculto");
    loader.classList.remove("oculto");

    setTimeout(() => {
      if (logo) {
        logo.style.transition = "transform 1s ease-in-out";
        logo.style.transform = "scale(20)";
      }

      setTimeout(() => {
        loader.classList.add("oculto");
        contenido.classList.remove("oculto");
      }, 1000);
    }, 4000);
  };
});
