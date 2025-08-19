document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleInfo");
  const infoBox = document.getElementById("infoBox");

  if (toggleBtn && infoBox) {
    toggleBtn.addEventListener("click", () => {
      infoBox.classList.toggle("hidden");
    });
  }

  document.querySelectorAll(".game-card").forEach(card => {
    const plus = card.querySelector(".plus");
    const minus = card.querySelector(".minus");
    const countSpan = card.querySelector(".count");
    let count = 0;

    if (plus && minus && countSpan) {
      plus.addEventListener("click", () => {
        count++;
        countSpan.textContent = count;
      });
      minus.addEventListener("click", () => {
        if (count > 0) count--;
        countSpan.textContent = count;
      });
    }
  });
});
