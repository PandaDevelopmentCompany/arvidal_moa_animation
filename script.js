document.addEventListener("DOMContentLoaded", () => {
  const molecule = document.querySelector(".molecule");
  const receptor = document.querySelector(".receptor");

  molecule.addEventListener("animationend", () => {
    // Change receptor state
    receptor.classList.add("changed");

    // Move receptor into the membrane
    setTimeout(() => {
      receptor.style.transform = "translate(-50%, 150px)";
      receptor.style.transition = "transform 2s ease";
    }, 2000);
  });
});
