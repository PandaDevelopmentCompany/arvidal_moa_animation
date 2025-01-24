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
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.1
      };

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

      function startAnimation() {
        window.addEventListener('scroll', moveElements);
        molecule.style.opacity = '1';
      }

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

      function moveElements() {
        if (!isInView) return;

        let scrollPosition = window.scrollY;
        let blockTop = animBlock.offsetTop;
        let blockHeight = animBlock.offsetHeight;

        let scrollInsideBlock = scrollPosition - blockTop;

        if (scrollInsideBlock >= 0 && scrollInsideBlock <= blockHeight) {
          let percentage = scrollInsideBlock / blockHeight;
          let newMoleculeTop = 60 + (percentage * (blockHeight - 60));
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