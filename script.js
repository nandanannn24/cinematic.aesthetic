let players = [];
let roles = [];
let currentPlayer = 0;

const cluesCivil = ["Gunung", "Kucing", "Pantai", "Sekolah", "Pisang", "Kopi", "Komputer", "Singa", "Hujan", "Buku"];
const cluesUnder = ["Merapi", "Kucing Anggora", "Pantai Bali", "Universitas", "Pisang Goreng", "Espresso", "Laptop", "Harimau", "Gerimis", "Novel"];

function nextSlide() {
  document.querySelector(".active").classList.remove("active");
  document.querySelector("#setup").classList.add("active");
}

function addPlayer() {
  const name = document.getElementById("playerInput").value.trim();
  if (name) {
    players.push(name);
    const li = document.createElement("li");
    li.textContent = name;
    document.getElementById("playerList").appendChild(li);
    document.getElementById("playerInput").value = "";
  }
}

function startGame() {
  if (players.length < 3) {
    alert("Minimal 3 pemain!");
    return;
  }
  // random roles
  roles = Array(players.length).fill("Civil");
  roles[Math.floor(Math.random() * players.length)] = "Undercover";
  roles[Math.floor(Math.random() * players.length)] = "Mr. White";

  document.querySelector(".active").classList.remove("active");
  document.querySelector("#game").classList.add("active");
  showCard();
}

function showCard() {
  const card = document.getElementById("card");
  card.classList.remove("flipped");

  const role = roles[currentPlayer];
  document.getElementById("roleText").textContent = role;

  if (role === "Civil") {
    const clue = cluesCivil[Math.floor(Math.random() * cluesCivil.length)];
    document.getElementById("clueText").textContent = "Clue: " + clue;
  } else if (role === "Undercover") {
    const clue = cluesUnder[Math.floor(Math.random() * cluesUnder.length)];
    document.getElementById("clueText").textContent = "Clue: " + clue;
  } else {
    document.getElementById("clueText").textContent = "Kamu harus menebak clue orang lain!";
  }

  card.onclick = () => card.classList.toggle("flipped");
}

function nextPlayer() {
  currentPlayer++;
  if (currentPlayer >= players.length) {
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#end").classList.add("active");
  } else {
    showCard();
  }
}

function restartGame() {
  players = [];
  roles = [];
  currentPlayer = 0;
  document.querySelector(".active").classList.remove("active");
  document.querySelector("#setup").classList.add("active");
  document.getElementById("playerList").innerHTML = "";
}
