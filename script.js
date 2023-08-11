// Select the chess board element from the HTML
let chessBoard = document.querySelector("#chessBoard");

// Array containing the initial arrangement of chess pieces
const chessPeices = [
  brook, bknight, bbishop, bqueen, bking, bbishop, bknight, brook,
  bpawn, bpawn, bpawn, bpawn, bpawn, bpawn, bpawn, bpawn,
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  wpawn, wpawn, wpawn, wpawn, wpawn, wpawn, wpawn, wpawn,
  wrook, wknight, wbishop, wqueen, wking, wbishop, wknight, wrook
]

// An array of strings representing the names of chess pieces
let chessPeicesString = [
  'brook', 'bknight', 'bbishop', 'bqueen', 'bking', 'bbishop', 'bknight', 'brook',
  'bpawn', 'bpawn', 'bpawn', 'bpawn', 'bpawn', 'bpawn', 'bpawn', 'bpawn',
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  'wpawn', 'wpawn', 'wpawn', 'wpawn', 'wpawn', 'wpawn', 'wpawn', 'wpawn',
  'wrook', 'wknight', 'wbishop', 'wqueen', 'wking', 'wbishop', 'wknight', 'wrook'
]

// Array to store the selected piece's square ID
let choosenPieceID = [];

// Function to create the chess board and populate it with pieces
function createBoard() {
  chessPieces.forEach((chessPiece, i) => {
    let square = document.createElement("div");
    square.setAttribute("square-id", i);
    square.classList.add("square");
    square.innerHTML = chessPiece;
    let row = Math.floor((63 - i) / 8) + 1;
    if (row % 2 === 0) {
      square.classList.add(i % 2 === 0 ? "white" : "black");
    } else {
      square.classList.add(i % 2 === 0 ? "black" : "white");
    }
    if (i >= 48) {
      square.firstChild.firstChild.classList.add("whitePiece");
    }
    if (i <= 15) {
      square.firstChild.firstChild.classList.add("blackPiece");
    }
    square.addEventListener("click", movePiece);
    chessBoard.append(square);
  });
}
// Call the function to create the chess board
createBoard();

// Select all the squares on the chess board
const allSquares = document.querySelectorAll("#chessBoard .square");

// Function to visually indicate the selected piece
function pieceSelector(pieceID, row){
  if (row % 2 === 0) {
    if (pieceID % 2)
      allSquares[pieceID].classList.replace("black", "selectedSquareBlack");
    else
      allSquares[pieceID].classList.replace("white", "selectedSquareWhite");
  } else {
    if (pieceID % 2 === 0)
      allSquares[pieceID].classList.replace("black", "selectedSquareBlack");
    else
      allSquares[pieceID].classList.replace("white", "selectedSquareWhite");
  }
}

// Function to remove the visual selection of a piece
function pieceDeselector(pieceID, row){
  if (row % 2 === 0) {
    if (pieceID % 2)
      allSquares[pieceID].classList.replace("selectedSquareBlack", "black");
    else allSquares[pieceID].classList.replace("selectedSquareWhite", "white");
  }else {
    if (pieceID % 2 === 0)
      allSquares[pieceID].classList.replace("selectedSquareBlack", "black");
    else allSquares[pieceID].classList.replace("selectedSquareWhite", "white");
  }
}

// Function called when a square is clicked
function movePiece() {
  let pieceID = this.getAttribute("square-id");
  choosenPieceID.push(pieceID);
  row = Math.floor((63 - pieceID) / 8) + 1;
  if (choosenPieceID.length === 1 && chessPiecesString[pieceID] !== "") {
    pieceSelector(pieceID,row);
  }
  if (allSquares[choosenPieceID[0]].innerHTML === "") {
    choosenPieceID = [];
  }
  if (choosenPieceID.length === 2) {
    let pec1 = choosenPieceID[0];
    let pec2 = choosenPieceID[1];
    if (choosenPieceID[0] === choosenPieceID[1]) {
      pieceDeselector(pieceID,row)
      choosenPieceID = [];
    } else if (
      chessPiecesString[pec2] !== "" &&
      chessPiecesString[pec2].charAt(0) === chessPiecesString[pec1].charAt(0)
    ) {
      pieceID = pec1;
      row = Math.floor((63 - pieceID) / 8) + 1;
      pieceDeselector(pieceID,row)
      choosenPieceID = [];
      choosenPieceID.push(pec2);
      pieceID = pec2;
      row = Math.floor((63 - pieceID) / 8) + 1;
      pieceSelector(pieceID,row)
    } else checkMove();
  }
}

// Function to perform the move of the selected piece
function checkMove() {
  chessPiecesString[choosenPieceID[1]] = chessPiecesString[choosenPieceID[0]];
  chessPiecesString[choosenPieceID[0]] = "";
  allSquares[choosenPieceID[1]].innerHTML = allSquares[choosenPieceID[0]].innerHTML;
  allSquares[choosenPieceID[0]].innerHTML = "";
  pieceID = choosenPieceID[0];
  row = Math.floor((63 - pieceID) / 8) + 1;
  pieceDeselector(pieceID,row)
  choosenPieceID = [];
}

