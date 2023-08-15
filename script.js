// Select the chess board element from the HTML
let chessBoard = document.querySelector("#chessBoard");
let valid = [];
let chance = 'white';
let whiteK=false,blackK=false,whiteShortRook=false,whiteLongRook=false,blackShortRook=false,blackLongRook=false;
// Array containing the initial arrangement of chess pieces
const chessPieces = [
  brook, bnight, bbishop, bqueen, bking, bbishop, bnight, brook,
  bpawn, bpawn, bpawn, bpawn, bpawn, bpawn, bpawn, bpawn,
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  wpawn, wpawn, wpawn, wpawn, wpawn, wpawn, wpawn, wpawn,
  wrook, wnight, wbishop, wqueen, wking, wbishop, wnight, wrook
]

// An array of strings representing the names of chess pieces
let chessPiecesString = [
  'brook', 'bnight', 'bbishop', 'bqueen', 'bking', 'bbishop', 'bnight', 'brook',
  'bpawn', 'bpawn', 'bpawn', 'bpawn', 'bpawn', 'bpawn', 'bpawn', 'bpawn',
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  'wpawn', 'wpawn', 'wpawn', 'wpawn', 'wpawn', 'wpawn', 'wpawn', 'wpawn',
  'wrook', 'wnight', 'wbishop', 'wqueen', 'wking', 'wbishop', 'wnight', 'wrook'
]

// Array to store the selected piece's square ID
let chosenPieceID = [];

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
    square.addEventListener("click", checkMove);
    chessBoard.append(square);
  });
}

// Call the function to create the chess board
createBoard();

// Select all the squares on the chess board
const allSquares = document.querySelectorAll("#chessBoard .square");
//allSquares[25].classList.add('dot')
// Function to visually indicate the selected piece
function pieceSelector(pieceID, row) {
  if (row % 2 === 0) {
    if (pieceID % 2)
      allSquares[pieceID].classList.replace("black", "selectedSquareBlack");
    else allSquares[pieceID].classList.replace("white", "selectedSquareWhite");
  } else {
    if (pieceID % 2 === 0)
      allSquares[pieceID].classList.replace("black", "selectedSquareBlack");
    else allSquares[pieceID].classList.replace("white", "selectedSquareWhite");
  }
  for (let i = 0; i < 64; i++) {
    if (valid[i] === 1 || valid[i] === 2)
      allSquares[i].classList.add("validSquarse");
  }
}

// Function to remove the visual selection of a piece
function pieceDeselector(pieceID, row) {
  if (row % 2 === 0) {
    if (pieceID % 2)
      allSquares[pieceID].classList.replace("selectedSquareBlack", "black");
    else allSquares[pieceID].classList.replace("selectedSquareWhite", "white");
  } else {
    if (pieceID % 2 === 0)
      allSquares[pieceID].classList.replace("selectedSquareBlack", "black");
    else allSquares[pieceID].classList.replace("selectedSquareWhite", "white");
  }
  for (let i = 0; i < 64; i++) {
    if (valid[i] === 1 || valid[i] === 2)
      allSquares[i].classList.remove("validSquarse");
  }
  valid = [];
}

// Function called when a square is clicked
function checkMove() {
  let pieceID = this.getAttribute("square-id");
  chosenPieceID.push(pieceID);
  row = Math.floor((63 - pieceID) / 8) + 1;
  if (allSquares[chosenPieceID[0]].innerHTML === ""||chessPiecesString[chosenPieceID[0]].charAt(0)!==chance.charAt(0)) {
    chosenPieceID = [];
  }
  if (chosenPieceID.length === 1 && chessPiecesString[pieceID] !== "") {
    if (
      chessPiecesString[chosenPieceID[0]] === "wrook" ||
      chessPiecesString[chosenPieceID[0]] === "brook"
    )
      checkRook(pieceID);
    else if (chessPiecesString[chosenPieceID[0]] === "bpawn")
      checkBPawn(pieceID);
    else if (chessPiecesString[chosenPieceID[0]] === "wpawn")
      checkWPawn(pieceID);
    else if (
      chessPiecesString[chosenPieceID[0]] === "wbishop" ||
      chessPiecesString[chosenPieceID[0]] === "bbishop"
    )
      checkBishop(pieceID);
    else if (
      chessPiecesString[chosenPieceID[0]] === "wqueen" ||
      chessPiecesString[chosenPieceID[0]] === "bqueen"
    )
      checkQueen(pieceID);
    else if (
      chessPiecesString[chosenPieceID[0]] === "wnight" ||
      chessPiecesString[chosenPieceID[0]] === "bnight"
    )
      checkNight(pieceID);
    else checkKing(pieceID);
    pieceSelector(pieceID, row);
  }
  if (chosenPieceID.length === 2) {
    let pec1 = chosenPieceID[0];
    let pec2 = chosenPieceID[1];
    if (chosenPieceID[0] === chosenPieceID[1]) {
      pieceDeselector(pieceID, row);
      chosenPieceID = [];
    } else if (
      chessPiecesString[pec2] !== "" &&
      chessPiecesString[pec2].charAt(0) === chessPiecesString[pec1].charAt(0)
    ) {
      chosenPieceID.splice(1);
    } else {
      if (valid[chosenPieceID[1]] === 1 || valid[chosenPieceID[1]] === 2)
        movePiece();
      else {
        chosenPieceID.splice(1);
      }
    }
  }
}

// Function to perform the move of the selected piece
function movePiece() {
  if(blackLongRook===false && chosenPieceID[0] == 0) blackLongRook=true;
  if(blackShortRook===false && chosenPieceID[0] == 7) blackShortRook=true;
  if(blackK===false && chosenPieceID[0] == 4) blackK=true;
  if(whiteK===false && chosenPieceID[0] == 60) whiteK=true;
  if(whiteLongRook===false && chosenPieceID[0] == 56) whiteLongRook=true;
  if(whiteShortRook===false && chosenPieceID[0] == 63) whiteShortRook=true;

  chessPiecesString[chosenPieceID[1]] = chessPiecesString[chosenPieceID[0]];
  chessPiecesString[chosenPieceID[0]] = "";
  allSquares[chosenPieceID[1]].innerHTML =
    allSquares[chosenPieceID[0]].innerHTML;
  allSquares[chosenPieceID[0]].innerHTML = "";
  pieceID = chosenPieceID[0];
  row = Math.floor((63 - pieceID) / 8) + 1;
  pieceDeselector(pieceID, row);
  if((chosenPieceID[0]==4 ||chosenPieceID[0]==60) && (chosenPieceID[1]==6 || chosenPieceID[1]==2 ||chosenPieceID[1]==62 || chosenPieceID[1]==58)) castling(chosenPieceID)
  chosenPieceID = [];
  if(chance==='white') chance='black';
  else chance='white';
}

function castling(chosenPieceID) {
  if(chosenPieceID[1]-chosenPieceID[0]>0) {
    let rookid=parseInt(chosenPieceID[1])+1;
    chessPiecesString[parseInt(chosenPieceID[1])-1]=chessPiecesString[rookid];
    chessPiecesString[rookid]=""
    allSquares[parseInt(chosenPieceID[1])-1].innerHTML =
    allSquares[rookid].innerHTML;
    allSquares[rookid].innerHTML = "";
  }else{
    let rookid=parseInt(chosenPieceID[1])-2;
    chessPiecesString[parseInt(chosenPieceID[1])+1]=chessPiecesString[rookid];
    chessPiecesString[rookid]=""
    allSquares[parseInt(chosenPieceID[1])+1].innerHTML =
    allSquares[rookid].innerHTML;
    allSquares[rookid].innerHTML = "";
  }
}


