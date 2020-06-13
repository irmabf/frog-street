const canvas = document.getElementById('my-canvas')
const ctx = canvas.getContext('2d')

const game = new Game(ctx)

game.start()

const input = document.getElementById("name-field");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn-play").click();
  }
});

function playGame() {
  document.getElementById("dead").classList.remove("show");
  document.getElementById("dead").classList.add("hide");
  document.getElementById("start").classList.remove("show");
  document.getElementById("start").classList.add("hide");
  document.getElementById("game").classList.remove("hide");
  document.getElementById("game").classList.add("show");
}

function goBackToGame() {
  document.getElementById("dead").classList.remove("show");
  document.getElementById("dead").classList.add("hide");
  document.getElementById("won").classList.remove("show");
  document.getElementById("won").classList.add("hide");
  document.getElementById("start").classList.remove("show");
  document.getElementById("start").classList.add("hide");
  document.getElementById("game").classList.remove("hide");
  document.getElementById("game").classList.add("show");
}

function resetGame() {
  document.getElementById("dead").classList.remove("show");
  document.getElementById("dead").classList.add("hide");
  document.getElementById("won").classList.remove("show");
  document.getElementById("won").classList.add("hide");
  document.getElementById("start").classList.remove("hide");
  document.getElementById("start").classList.add("show");
  document.getElementById("name-field").value = "";
}

function handleInput(event) {
  if (event.value.length >= 3) {
    document.getElementById("btn-play").disabled = false;
    document.getElementById("btn-play").classList.remove("disabled");
    document.getElementById("btn-play").classList.add("enabled");
  }

  localStorage.setItem("PLAYER_NAME", event.value);
}