let players = ["Nanda", "Sanafa", "Rifat", "Civil1", "Civil2"];
let turn = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function renderPlayers() {
  const container = document.getElementById("players");
  container.innerHTML = "";
  players.forEach((name, i) => {
    const card = document.createElement("div");
    card.className = "card" + (i === turn ? " active" : "");
    card.textContent = name;
    container.appendChild(card);
  });
}

function startGame() {
  players = shuffle(players);
  turn = 0;
  renderPlayers();
}

function nextTurn() {
  turn = (turn + 1) % players.length;
  renderPlayers();
}

renderPlayers();
