// Initialize board state as an array of empty strings
let boardState = ["", "", "", "", "", "", "", "", ""];

// Function to update the board state and display the current player's mark
function playOnClick(event) {
  const tileIndex = parseInt(event.target.getAttribute("data-index"));

  // If the selected tile is already occupied, do nothing
  if (boardState[tileIndex] !== "") {
    return;
  }

  // Update board state with current player's mark
  const currentPlayer =
    boardState.filter((s) => s !== "").length % 2 === 0 ? "X" : "O";
  boardState[tileIndex] = currentPlayer;

  // Update display of board
  event.target.innerHTML = currentPlayer;

  // Check for win or tie
  // ...
}

// Attach click event listeners to all tiles
const tiles = document.getElementsByClassName("tile");
for (let i = 0; i < tiles.length; i++) {
  tiles[i].setAttribute("data-index", i);
  tiles[i].addEventListener("click", playOnClick);
}

function checkWin(board) {
  const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // horizontal
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // vertical
    [0, 4, 8],
    [2, 4, 6], // diagonal
  ];

  for (let i = 0; i < winningPositions.length; i++) {
    const [a, b, c] = winningPositions[i];
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }

  return null;
}
const board = ["X", null, "O", "X", "O", null, null, null, null];
const winner = checkWin(board);
console.log(winner); // should output null, since no player has won yet
