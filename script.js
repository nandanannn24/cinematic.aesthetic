document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const nextBtn = document.getElementById("nextBtn");
  const intro = document.getElementById("intro");
  const cards = document.getElementById("cards");
  const card = document.getElementById("card");
  const cardContent = document.getElementById("cardContent");

  // Data role + clue (nanti bisa random)
  const roles = [
    { role: "Civil", clue: "Gunung" },
    { role: "Undercover", clue: "Merapi" },
    { role: "Mr White", clue: "" }
  ];
  let currentIndex = 0;

  // Start Game
  startBtn.addEventListener("click", () => {
    intro.classList.remove("active");
    cards.classList.add("active");
    loadCard();
  });

  // Flip kartu
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  // Next kartu
  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= roles.length) {
      currentIndex = 0; // ulang dari awal
    }
    card.classList.remove("flipped");
    setTimeout(loadCard, 300);
  });

  function loadCard() {
    const { role, clue } = roles[currentIndex];
    cardContent.innerHTML = role === "Mr White"
      ? "Kamu adalah <b>Mr White</b> ❖ (tebak clue orang lain!)"
      : `Kamu adalah <b>${role}</b><br>Clue: ${clue}`;
  }
});
