let lastClicked = null;

document.querySelectorAll(".tile").forEach((tile) => {
  tile.addEventListener("click", (event) => {
    event.target.innerHTML = "x"; // set text in clicked tile
    
  });
});