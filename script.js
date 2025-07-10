window.addEventListener('load', () => {
  setTimeout(() => {
    const logo = document.getElementById('logo');

    // Agrandar drásticamente el logo
    logo.style.transform = 'scale(50)';
    logo.style.opacity = '0';

    // Después quitar el loader y mostrar contenido
    setTimeout(() => {
      document.getElementById('loader').style.display = 'none';
      document.getElementById('main').style.display = 'block';
      document.body.style.overflow = 'auto';
    }, 1000);
  }, 4000);
});

// Cerrar aviso
document.getElementById('closeWelcome').addEventListener('click', () => {
  const welcome = document.getElementById('welcome');
  welcome.style.opacity = 0;
  setTimeout(() => welcome.style.display = 'none', 500);
});

// Cargar imágenes 1.png a 17.png
const gallery = document.getElementById('gallery');
for (let i = 1; i <= 17; i++) {
  const img = document.createElement('img');
  img.src = `${i}.png`;
  img.alt = `Imagen ${i}`;
  img.loading = 'lazy';
  gallery.appendChild(img);
}

// Texto animado en pestaña
let titleText = "UDA25 by Pipaon Esperientziak ✦ ";
setInterval(() => {
  titleText = titleText.substring(1) + titleText[0];
  document.title = titleText;
}, 200);
