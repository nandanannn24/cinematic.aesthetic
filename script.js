document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");

  startBtn.addEventListener("click", () => {
    alert("Game dimulai! (Nanti bisa diarahkan ke halaman role/clue)");
    // Bisa redirect ke halaman lain, misalnya:
    // window.location.href = "game.html";
  });
});
