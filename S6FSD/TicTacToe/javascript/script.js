let counter = 0;

function playOnClick(event) {
  const clickedTile = event.target;
  if (clickedTile.textContent !== "") {
    return;
  }
  counter++;
  clickedTile.textContent = counter % 2 === 0 ? "0" : "x";
}

const tiles = document.getElementsByClassName("tile");
for (let i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener("click", playOnClick);
}
