document.addEventListener('DOMContentLoaded', cnnSpawner);

function cnnSpawner() {
  const siteHeader = document.querySelector('header');
  if (!siteHeader) return;

  const bElement = siteHeader.querySelector('b');
  const fontSize = parseFloat(getComputedStyle(bElement).fontSize);
  const maxSize = fontSize * 2;

  const cnnContainer = document.createElement('div');
  cnnContainer.classList.add('cnnContainer');
  siteHeader.appendChild(cnnContainer);

  const images = ["cnn.png", "rnn.png", "lstm.png", "gan.jpg", "siamese.jpg"];

  function createCnn() {
    const img = document.createElement('img');
    img.src = images[Math.floor(Math.random() * images.length)];
    img.classList.add('fallingCnn');
    img.style.height = `${10 + Math.random() * (maxSize - 10)}px`;
    img.style.right = `${Math.random() * 100}%`;

    cnnContainer.appendChild(img);

    const fallDistance = cnnContainer.clientHeight + maxSize;
    const duration = 4000 + Math.random() * 3000;

    img.animate(
      [
        { transform: 'translateY(0)', opacity: 1 },
        { transform: `translateY(${fallDistance}px)`, opacity: 0 }
      ],
      {
        duration: duration,
        easing: 'linear'
      }
    ).onfinish = () => img.remove();

    setTimeout(createCnn, 1000 + Math.random() * 2000);
  }

  createCnn();
}