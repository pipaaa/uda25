window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    const logo = document.getElementById('logo');

    logo.style.transition = 'transform 1s ease';
    logo.style.transform = 'scale(10)';

    setTimeout(() => {
      loader.style.display = 'none';
      document.getElementById('main').style.display = 'block';
    }, 1000);
  }, 4000);
});

document.getElementById('closeWelcome').addEventListener('click', () => {
  document.getElementById('welcome').style.opacity = 0;
  setTimeout(() => document.getElementById('welcome').style.display = 'none', 500);
});

const gallery = document.getElementById('gallery');
for (let i = 1; i <= 17; i++) {
  const img = document.createElement('img');
  img.src = `${i}.png`;
  img.alt = `Foto ${i}`;
  img.loading = 'lazy';
  gallery.appendChild(img);
}

// Parallax scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.gallery img').forEach((img) => {
    const speed = 0.2;
    const offset = window.scrollY * speed;
    img.style.transform = `translateY(${offset}px)`;
  });
});

// Animated tab title
let titleText = "UDA25 by Pipaon Esperientziak ✦ ";
setInterval(() => {
  titleText = titleText.substring(1) + titleText[0];
  document.title = titleText;
}, 200);
