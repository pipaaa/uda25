const modoActualizacion = "off"; // Cambia a "on" para solo mostrar el aviso

window.addEventListener("DOMContentLoaded", () => {
  const actualizacion = document.getElementById("actualizacion");
  const contenido = document.getElementById("contenidoWeb");
  const loader = document.getElementById("loader");
  const logo = document.getElementById("loader-logo");
  const video = document.getElementById("video-intro");
  const videoContainer = document.getElementById("video-container");

  if (modoActualizacion === "on") {
    actualizacion.classList.remove("oculto");
    contenido.style.display = "none";
    if (loader) loader.style.display = "none";
    if (videoContainer) videoContainer.style.display = "none";
    return;
  }

  // VIDEO
  video.src = "anuncio.mp4";
  video.muted = false;
  video.volume = 1.0;

  // AL TERMINAR EL VIDEO
  video.onended = () => {
    videoContainer.classList.add("oculto");
    loader.classList.remove("oculto");

    setTimeout(() => {
      if (logo) {
        logo.style.transform = "scale(20)";
      }

      setTimeout(() => {
        loader.classList.add("oculto");
        contenido.classList.remove("oculto");
      }, 1000);
    }, 4000);
  };

  video.onerror = () => {
    console.warn("No se pudo reproducir el vídeo. Saltando...");
    videoContainer.classList.add("oculto");
    loader.classList.remove("oculto");

    setTimeout(() => {
      if (logo) {
        logo.style.transform = "scale(20)";
      }

      setTimeout(() => {
        loader.classList.add("oculto");
        contenido.classList.remove("oculto");
      }, 1000);
    }, 4000);
  };
});
