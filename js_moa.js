document.addEventListener('DOMContentLoaded', () => {
  const animBlock = document.querySelector('.scroll-animation-block');
  const molecule = document.querySelector('.scroll-molecule');
  const membrane = document.querySelector('.scroll-membrane');
  const lungs = document.querySelector('.scroll-lungs');
  const interferons = document.querySelector('.scroll-interferons');
  const lungsDescription = document.querySelector('.scroll-lungs-description');
  const interferonsDescription = document.querySelector('.scroll-interferons-description');
  
  let isInView = false;

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isInView = true;
        startAnimation();
      } else {
        isInView = false;
        resetAnimation();
      }
    });
  }, options);

  observer.observe(animBlock);

  function startAnimation() {
    window.addEventListener('scroll', debounce(moveElements, 20));
    molecule.style.opacity = '1';
  }

  function resetAnimation() {
    window.removeEventListener('scroll', moveElements);
    molecule.style = '';
    membrane.style = '';
    lungs.style = '';
    interferons.style = '';
    lungsDescription.style = '';
    interferonsDescription.style = '';
  }

  function moveElements() {
    if (!isInView) return;

    const scrollPosition = window.scrollY;
    const blockTop = animBlock.offsetTop;
    const blockHeight = animBlock.offsetHeight;

    const scrollInsideBlock = scrollPosition - blockTop;

    if (scrollInsideBlock >= 0 && scrollInsideBlock <= blockHeight) {
      const percentage = scrollInsideBlock / blockHeight;

      const newMoleculeTop = 60 + percentage * (blockHeight - 60);
      molecule.style.top = `${newMoleculeTop}px`;

      if (newMoleculeTop >= 60) {
        membrane.style.opacity = '1';
      }

      if (newMoleculeTop >= membrane.offsetTop - 100 && newMoleculeTop <= membrane.offsetTop + membrane.offsetHeight + 100) {
        lungs.style.opacity = '1';
        lungs.style.top = '40%';
        lungs.style.left = '20%';
        lungsDescription.style.opacity = '1';

        interferons.style.opacity = '1';
        interferons.style.top = '40%';
        interferons.style.left = '80%';
        interferonsDescription.style.opacity = '1';
      } else {
        lungs.style.opacity = '0';
        interferons.style.opacity = '0';
        lungsDescription.style.opacity = '0';
        interferonsDescription.style.opacity = '0';
      }
    }
  }

  // Функция debounce для оптимизации прокрутки
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }
});