document.addEventListener('DOMContentLoaded', () => {
  const animBlock = document.querySelector('.scroll-animation-block'); // Убедитесь, что этот селектор правильный
  const molecule = document.querySelector('.scroll-molecule');
  const membrane = document.querySelector('.scroll-membrane');
  const lungs = document.querySelector('.scroll-lungs');
  const interferons = document.querySelector('.scroll-interferons');
  const lungsDescription = document.querySelector('.scroll-lungs-description');
  const interferonsDescription = document.querySelector('.scroll-interferons-description');

  // Проверяем, существуют ли элементы
  if (!animBlock || !molecule || !membrane || !lungs || !interferons || !lungsDescription || !interferonsDescription) {
    console.error('Некоторые элементы не найдены в DOM. Проверьте селекторы.');
    return;
  }

  let isInView = false;

  const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.1
  };

  // Создаем IntersectionObserver для отслеживания появления animBlock
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
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

  // Запуск анимации
  function startAnimation() {
    window.addEventListener('scroll', moveElements);
    molecule.style.opacity = '1';
  }

  // Сброс анимации
  function resetAnimation() {
    window.removeEventListener('scroll', moveElements);
    molecule.style.top = '60px';
    molecule.style.opacity = '0';
    membrane.style.opacity = '0';
    lungs.style.opacity = '0';
    interferons.style.opacity = '0';
    lungsDescription.style.opacity = '0';
    interferonsDescription.style.opacity = '0';
    lungs.style.top = '100%';
    lungs.style.left = '50%';
    interferons.style.top = '100%';
    interferons.style.left = '50%';
  }

  // Движение элементов на основе скролла
  function moveElements() {
    if (!isInView) return;

    let scrollPosition = window.scrollY + window.innerHeight / 2; // Центр экрана
    let blockTop = animBlock.getBoundingClientRect().top + window.scrollY; // Положение блока
    let blockHeight = animBlock.offsetHeight;

    let scrollInsideBlock = scrollPosition - blockTop;

    if (scrollInsideBlock >= 0 && scrollInsideBlock <= blockHeight) {
      let percentage = scrollInsideBlock / blockHeight;
      let newMoleculeTop = (percentage * blockHeight);
      molecule.style.top = `${newMoleculeTop}px`;

      if (percentage >= 0.2) { // Логический порог для membrane
        membrane.style.opacity = '1';
      }

      if (percentage >= 0.4) { // Логический порог для lungs и interferons
        lungs.style.opacity = '1';
        lungs.style.top = '40%';
        lungs.style.left = '20%';
        lungsDescription.style.opacity = '1';
        interferons.style.opacity = '1';
        interferons.style.top = '45%';
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
});
