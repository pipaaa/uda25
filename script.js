const modoActualizacion = "off"; // Cambia a "on" para modo solo actualización

window.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.getElementById("video-fullscreen");
  const video = document.getElementById("anuncio");
  const loader = document.getElementById("loader");
  const logo = document.getElementById("logo-loader");
  const contenido = document.getElementById("contenido");
  const actualizacion = document.getElementById("actualizacion");

  if (modoActualizacion === "on") {
    actualizacion.classList.remove("oculto");
    return;
  }

  // Cargar video
  video.src = "anuncio.mp4";
  video.muted = false;
  video.volume = 1.0;

  video.onended = () => {
    videoContainer.classList.add("oculto");
    loader.classList.remove("oculto");

    // Espera 4 segundos y agranda logo
    setTimeout(() => {
      logo.style.transform = "scale(20)";
      setTimeout(() => {
        loader.classList.add("oculto");
        contenido.classList.remove("oculto");
        document.body.style.overflow = "auto";
      }, 1000);
    }, 4000);
  };

  // En caso de error en el video
  video.onerror = () => {
    videoContainer.classList.add("oculto");
    loader.classList.remove("oculto");

    setTimeout(() => {
      logo.style.transform = "scale(20)";
      setTimeout(() => {
        loader.classList.add("oculto");
        contenido.classList.remove("oculto");
        document.body.style.overflow = "auto";
      }, 1000);
    }, 4000);
  };
});
