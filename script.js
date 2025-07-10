window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    const logo = document.getElementById('logo');

    logo.style.transition = 'transform 1s ease';
    logo.style.transform = 'scale(10)';

    setTimeout(() => {
      loader.style.display = 'none';
      document.getElementById('main').style.display = 'block';
      document.body.style.overflow = 'auto';
    }, 1000);
  }, 4000);
});

document.getElementById('closeWelcome').addEventListener('click', () => {
  const welcome = document.getElementById('welcome');
  welcome.style.opacity = 0;
  setTimeout(() => welcome.style.display = 'none', 500);
});

// Cargar imágenes fullscreen
const gallery = document.getElementById('gallery');
for (let i = 1; i <= 17; i++) {
  const img = document.createElement('img');
  img.src = `${i}.png`;
  img.alt = `Imagen ${i}`;
  img.loading = 'lazy';
  gallery.appendChild(img);
}

// Animación en la pestaña
let titleText = "UDA25 by Pipaon Esperientziak ✦ ";
setInterval(() => {
  titleText = titleText.substring(1) + titleText[0];
  document.title = titleText;
}, 200);
