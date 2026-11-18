
// Smooth scrolling
function goTo(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });

  burst();
}

// Open the personal letter
function openLetter(event) {
  event.stopPropagation();

  const letter = document.getElementById('letterContent');
  const envelope = document.getElementById('envelope');

  letter.style.display = 'block';
  envelope.style.display = 'none';

  burst();

  setTimeout(() => {
    letter.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }, 200);
}

// Royal surprise
function royalSurprise() {
  const box = document.getElementById('surpriseBox');

  box.style.display = 'block';

  burst();

  setTimeout(() => {
    box.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }, 100);
}

// Magical floating animation
function burst() {
  const symbols = ['💗', '✨', '🌸', '👑', '🦋', '⭐'];

  for (let i = 0; i < 40; i++) {
    const item = document.createElement('div');

    item.className = 'float-item';
    item.innerHTML = symbols[
      Math.floor(Math.random() * symbols.length)
    ];

    item.style.left = Math.random() * 100 + 'vw';
    item.style.fontSize = (15 + Math.random() * 25) + 'px';
    item.style.animationDuration = (3 + Math.random() * 4) + 's';

    document.getElementById('hearts').appendChild(item);

    setTimeout(() => item.remove(), 7000);
  }
}

// Continuous floating sparkles
setInterval(() => {
  const item = document.createElement('div');
  item.className = 'float-item';
  item.innerHTML = Math.random() > 0.5 ? '✨' : '🌸';

  item.style.left = Math.random() * 100 + 'vw';
  item.style.fontSize = '18px';

  document.getElementById('hearts').appendChild(item);

  setTimeout(() => item.remove(), 6000);
}, 1000);

