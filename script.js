// Select the chess board element from the HTML
let chessBoard = document.querySelector("#chessBoard");
// Select the back ground chess board element from the HTML
let chessBoard1 = document.querySelector("#chessBoard1");
// Array for calculating valid moves
let valid = [];
let validAfterCheck=[];
// Flag for switching turns of black and white after every move
let chance = "white";
// Flags for checking if castling is possible or not

let undoPiece = [];
let undoPieceID = [];
let undoPieceString = [];
let whiteK = false,
  blackK = false,
  whiteShortRook = false,
  whiteLongRook = false,
  blackShortRook = false,
  blackLongRook = false;
let whiteCheck = false,
  blackCheck = false;
let wKingPos = 60,
  bKingPos = 4;
let kingsqID = 1;
let enPassantCheck=false;
let enPassntPos;
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
    // Create a new <div> element for the square
    let square = document.createElement("div");
    // Set a custom attribute "square-id" with the value of i
    square.setAttribute("square-id", i);
    // Add the "square" class to the <div> element
    square.classList.add("square");
    // Set the content of the <div> element to the chess piece
    square.innerHTML = chessPiece;
    // Calculate the row of the square based on its index
    let row = Math.floor((63 - i) / 8) + 1;
    // Check if the row is even or odd and add appropriate class (black or white)
    if (row % 2 === 0) {
      square.classList.add(i % 2 === 0 ? "white" : "black");
    } else {
      square.classList.add(i % 2 === 0 ? "black" : "white");
    }
    // Add "whitePiece" class to the first child of the first child for certain rows
    if (i >= 48) {
      square.firstChild.firstChild.classList.add("whitePiece");
    }
    // Add "blackPiece" class to the first child of the first child for certain rows
    if (i <= 15) {
      square.firstChild.firstChild.classList.add("blackPiece");
    }
    // Add a click event listener to the square element, calling the checkMove function
    square.addEventListener("click", checkMove);
    // Append the square element to the chessBoard
    chessBoard.append(square);
  });
}

// Creates a same layer of the board behind the real board
function create() {
  chessPieces.forEach((chessPiece, i) => {
    // Create a new <div> element for the square
    let row = Math.floor((63 - i) / 8) + 1;
    let squar = document.createElement("div");
    // Add the "square" class to the <div> element
    squar.classList.add("square");
    // Check if the row is even or odd and add appropriate class (black or white)
    if (row % 2 === 0) {
      squar.classList.add(i % 2 === 0 ? "white" : "black");
    } else {
      squar.classList.add(i % 2 === 0 ? "black" : "white");
    }
    chessBoard1.append(squar);
  });
}

// Call the function to create the chess board
create();
createBoard();

// Select all the squares on the chess board
const allSquares = document.querySelectorAll("#chessBoard .square");
const allSquares1 = document.querySelectorAll("#chessBoard1 .square");
// Function to visually indicate the selected piece
function pieceSelector(pieceID, row) {
  // Check if the row is even or odd and update square classes accordingly
  if (row % 2 === 0) {
    if (pieceID % 2)
      allSquares[pieceID].classList.replace("black", "selectedSquareBlack");
    else allSquares[pieceID].classList.replace("white", "selectedSquareWhite");
  } else {
    if (pieceID % 2 === 0)
      allSquares[pieceID].classList.replace("black", "selectedSquareBlack");
    else allSquares[pieceID].classList.replace("white", "selectedSquareWhite");
  }
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
  // Loop through all squares to apply validSquares class
  for (let i = 0; i < 64; i++) {
    if (valid[i] === 1) allSquares[i].classList.add("validSquares");
    else if (valid[i] == 2) {
      allSquares[i].classList.add("validTakes");
      allSquares1[i].classList.replace("square", "square1");
    }
  }
}


// Function to remove the visual selection of a piece
function pieceDeselector(pieceID, row) {
  // Check if the row is even or odd and revert square classes accordingly
  if (row % 2 === 0) {
    if (pieceID % 2)
      allSquares[pieceID].classList.replace("selectedSquareBlack", "black");
    else allSquares[pieceID].classList.replace("selectedSquareWhite", "white");
  } else {
    if (pieceID % 2 === 0)
      allSquares[pieceID].classList.replace("selectedSquareBlack", "black");
    else allSquares[pieceID].classList.replace("selectedSquareWhite", "white");
  }
  // Loop through all squares to remove validSquares class
  for (let i = 0; i < 64; i++) {
    if (valid[i] === 1) allSquares[i].classList.remove("validSquares");
    else if (valid[i] == 2) {
      allSquares[i].classList.remove("validTakes");
      allSquares1[i].classList.replace("square1", "square");
    }
  }
  // Reset the valid array to an empty array
  valid = [];
}


// Function called when a square is clicked
function checkMove() {
  let pieceID = this.getAttribute("square-id");
  chosenPieceID.push(pieceID);
  row = Math.floor((63 - pieceID) / 8) + 1;
  if (
    allSquares[chosenPieceID[0]].innerHTML === "" ||
    chessPiecesString[chosenPieceID[0]].charAt(0) !== chance.charAt(0)
  ) {
    chosenPieceID = [];
  }
  if (chosenPieceID.length === 1 && chessPiecesString[pieceID] !== "") {
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
      pieceID = pec1;
      row = Math.floor((63 - pieceID) / 8) + 1;
      pieceDeselector(pieceID, row);
      chosenPieceID = [];
      pieceID = pec2;
      row = Math.floor((63 - pieceID) / 8) + 1;
      chosenPieceID.push(pec2);
      pieceSelector(pieceID, row);
    } else {
      if (valid[chosenPieceID[1]] === 1 || valid[chosenPieceID[1]] === 2) {
        if (chessPiecesString[chosenPieceID[0]].charAt(1) === "k") {
          if (chessPiecesString[chosenPieceID[0]].charAt(0) === "w")
            wKingPos = chosenPieceID[1];
          else bKingPos = chosenPieceID[1];
        }
        if(blackCheck==true||whiteCheck==true){
          blackCheck=false;
          whiteCheck=false;
          allSquares[kingsqID].classList.remove("kingincheck");
        }
        if(chessPiecesString[chosenPieceID[0]].charAt(1)=='p'){
          if(Math.abs(chosenPieceID[0]/8-chosenPieceID[1]/8)===2){
            enPassantCheck=true;
            enPassntPos=parseInt(chosenPieceID[1]);
          }else enPassantCheck=false;
        }else enPassantCheck=false;
        if(chessPiecesString[chosenPieceID[0]].charAt(1)=='p'){
          if((chosenPieceID[0]%8!==chosenPieceID[1]%8) && chessPiecesString[chosenPieceID[1]]===""){
            if(chessPiecesString[chosenPieceID[0]].charAt(0)=='w'){
              undoPiece.push([ allSquares[parseInt(chosenPieceID[1])+8].innerHTML,""])
              undoPieceID.push([parseInt(chosenPieceID[1])+8 , -1]);
              undoPieceString.push([chessPiecesString[parseInt(chosenPieceID[1])+8],""]);
              allSquares[parseInt(chosenPieceID[1])+8].innerHTML="";
              chessPiecesString[parseInt(chosenPieceID[1])+8]="";
            }else if(chessPiecesString[chosenPieceID[0]].charAt(0)=='b'){
              undoPiece.push([ allSquares[parseInt(chosenPieceID[1])-8].innerHTML,""])
              undoPieceID.push([parseInt(chosenPieceID[1])-8 , -1]);
              undoPieceString.push([chessPiecesString[parseInt(chosenPieceID[1])-8],""]);
              allSquares[parseInt(chosenPieceID[1])-8].innerHTML="";
              chessPiecesString[parseInt(chosenPieceID[1])-8]="";
            }
          }
        }
        movePiece();
        checker();
        if(blackCheck==true||whiteCheck==true) checkmate();
        else stalemate();
      } 
      else {
        chosenPieceID.splice(1);
      }
    }
  }
}

function removeLastMove(){
  if(undoPieceID.length===0) return;
  undoLen = undoPieceID.length;
  if(undoPieceID[undoLen-1].length==2) undoLen-- ;
  allSquares[undoPieceID[undoLen-2]].classList.remove("LastMoveSquares");
  allSquares[undoPieceID[undoLen-1]].classList.remove("LastMoveSquares");
}

function addLastMove(){
  if(undoPieceID.length===0) return;
  undoLen = undoPieceID.length;
  if(undoPieceID[undoLen-1].length==2) undoLen-- ;
  allSquares[undoPieceID[undoLen-2]].classList.add("LastMoveSquares");
  allSquares[undoPieceID[undoLen-1]].classList.add("LastMoveSquares");
}

// Function to perform the move of the selected piece
function movePiece() {
  if (blackLongRook === false && chosenPieceID[0] == 0) blackLongRook = true;
  if (blackShortRook === false && chosenPieceID[0] == 7) blackShortRook = true;
  if (blackK === false && chosenPieceID[0] == 4) blackK = true;
  if (whiteK === false && chosenPieceID[0] == 60) whiteK = true;
  if (whiteLongRook === false && chosenPieceID[0] == 56) whiteLongRook = true;
  if (whiteShortRook === false && chosenPieceID[0] == 63) whiteShortRook = true;

  removeLastMove();
  undoPieceID.push(parseInt(chosenPieceID[0]));
  undoPieceID.push(parseInt(chosenPieceID[1]));
  undoPiece.push(allSquares[chosenPieceID[0]].innerHTML);
  undoPiece.push(allSquares[chosenPieceID[1]].innerHTML);
  undoPieceString.push(chessPiecesString[chosenPieceID[0]]);
  undoPieceString.push(chessPiecesString[chosenPieceID[1]]);
  chessPiecesString[chosenPieceID[1]] = chessPiecesString[chosenPieceID[0]];
  chessPiecesString[chosenPieceID[0]] = "";
  allSquares[chosenPieceID[1]].innerHTML =  allSquares[chosenPieceID[0]].innerHTML;
  allSquares[chosenPieceID[0]].innerHTML = "";
  pieceID = chosenPieceID[0];
  row = Math.floor((63 - pieceID) / 8) + 1;
  
  if (
    (chosenPieceID[0] == 4 || chosenPieceID[0] == 60) &&
    (chosenPieceID[1] == 6 ||
      chosenPieceID[1] == 2 ||
      chosenPieceID[1] == 62 ||
      chosenPieceID[1] == 58)
  )
    castling(chosenPieceID);
  if((chessPiecesString[chosenPieceID[1]]=='bpawn' && row==2) || (chessPiecesString[chosenPieceID[1]]=='wpawn' && row==7)){
    popPieceColor = chessPiecesString[chosenPieceID[1]].charAt(0);
     showPopup();}
  else chosenPieceID = [];
  pieceDeselector(pieceID, row);
  addLastMove();
  if (chance === "white") chance = "black";
  else chance = "white";
}
function undoMove(){
  if(undoPieceID.length == 0) return;
  
  if (chosenPieceID.length === 1 && chessPiecesString[chosenPieceID[0]] !== "") {
    row = Math.floor((63 - chosenPieceID[0]) / 8) + 1;
    pieceDeselector(chosenPieceID[0], row);
  }
  let undoLen = undoPieceID.length;
  removeLastMove();
  if(undoPieceID[undoLen-1].length == 2){
    allSquares[undoPieceID[undoLen-1][0]].innerHTML = undoPiece[undoLen-1][0];
    allSquares[undoPieceID[undoLen-1][1]].innerHTML = undoPiece[undoLen-1][1];
    chessPiecesString[undoPieceID[undoLen-1][1]] = undoPieceString[undoLen-1][1];
    chessPiecesString[undoPieceID[undoLen-1][0]] = undoPieceString[undoLen-1][0];
    if(undoPieceID[undoLen-1][0]==3) blackLongRook = false , blackK = false;
    else if(undoPieceID[undoLen-1][0]==5) blackShortRook = false,blackK = false;
    else if(undoPieceID[undoLen-1][0]==59) whiteLongRook = false , whiteK = false;
    else if(undoPieceID[undoLen-1][0]==61) whiteShortRook = false , whiteK = false;
    undoPiece.splice(undoLen-1,1);
    undoPieceID.splice(undoLen-1,1);
    undoPieceString.splice(undoLen-1,1);
  }
  undoLen = undoPieceID.length;
  allSquares[undoPieceID[undoLen-2]].innerHTML = undoPiece[undoLen-2];
  allSquares[undoPieceID[undoLen-1]].innerHTML = undoPiece[undoLen-1];
  chessPiecesString[undoPieceID[undoLen-1]] = undoPieceString[undoLen-1];
  chessPiecesString[undoPieceID[undoLen-2]] = undoPieceString[undoLen-2];
  if (chessPiecesString[undoPieceID[undoLen-1]].charAt(1) === "k") {
    if (chessPiecesString[undoPieceID[undoLen-1]].charAt(0) === "w")
      wKingPos = undoPieceID[undoLen-1] ;
    else bKingPos = undoPieceID[undoLen-1] ;
  }
  if (chessPiecesString[undoPieceID[undoLen-2]].charAt(1) === "k") {
    if (chessPiecesString[undoPieceID[undoLen-2]].charAt(0) === "w")
      wKingPos = undoPieceID[undoLen-2];
    else bKingPos = undoPieceID[undoLen-2] ;
  }
  undoPiece.splice(undoLen-2,2);
  undoPieceID.splice(undoLen-2,2);
  undoPieceString.splice(undoLen-2,2);
  undoLen = undoPieceID.length;
  if(undoLen>0 && undoPieceID[undoLen-1].length == 2){
    allSquares[undoPieceID[undoLen-1][0]].innerHTML = undoPiece[undoLen-1][0];
    chessPiecesString[undoPieceID[undoLen-1][0]] = undoPieceString[undoLen-1][0];
    enPassantCheck=true;
    undoPiece.splice(undoLen-1,1);
    undoPieceID.splice(undoLen-1,1);
    undoPieceString.splice(undoLen-1,1);
  }
  checker();
  if (chance === "white") chance = "black";
  else chance = "white";
  if(blackCheck==true||whiteCheck==true){
    blackCheck=false;
    whiteCheck=false;
    allSquares[kingsqID].classList.remove("kingincheck");
  }
  checker();
  addLastMove();
}

function castling(chosenPieceID) {
  // Check if castling is kingside (short castling) or queenside (long castling)
  if (chosenPieceID[1] - chosenPieceID[0] > 0) {
    // Kingside castling
    let rookid = parseInt(chosenPieceID[1]) + 1; // Calculate the rook's new position
    // Swap positions of the king and the rook in the chessPiecesString array

    undoPiece.push([allSquares[parseInt(chosenPieceID[1]) - 1].innerHTML,allSquares[rookid].innerHTML]);
    undoPieceID.push([parseInt(chosenPieceID[1]) - 1 , rookid]);
    undoPieceString.push([chessPiecesString[parseInt(chosenPieceID[1]) - 1],chessPiecesString[rookid]]);
    chessPiecesString[parseInt(chosenPieceID[1]) - 1] =
      chessPiecesString[rookid];
    chessPiecesString[rookid] = "";
    // Update the innerHTML of the corresponding squares to reflect the new positions
    allSquares[parseInt(chosenPieceID[1]) - 1].innerHTML =
      allSquares[rookid].innerHTML;
    allSquares[rookid].innerHTML = "";

  } else {
    // Queenside castling
    let rookid = parseInt(chosenPieceID[1]) - 2; // Calculate the rook's new position
    // Swap positions of the king and the rook in the chessPiecesString array
    undoPiece.push([allSquares[parseInt(chosenPieceID[1]) + 1].innerHTML,allSquares[rookid].innerHTML]);
    undoPieceID.push([parseInt(chosenPieceID[1]) +1 , rookid]);
    undoPieceString.push([chessPiecesString[parseInt(chosenPieceID[1]) +1],chessPiecesString[rookid]]);
    chessPiecesString[parseInt(chosenPieceID[1]) + 1] =
      chessPiecesString[rookid];
    chessPiecesString[rookid] = "";
    // Update the innerHTML of the corresponding squares to reflect the new positions
    allSquares[parseInt(chosenPieceID[1]) + 1].innerHTML =
      allSquares[rookid].innerHTML;
    allSquares[rookid].innerHTML = "";
  }
}

// Get a reference to the "popup" element
let popup = document.getElementById("popup");

// Function to show the popup
function showPopup() {
  // Replace the "popupBoxhidden" class with "popupBoxshow" to display the popup
  popup.classList.replace("popupBoxhidden", "popupBoxshow");
}

// Function to handle getting a Queen chess piece
function getQueen() {
  // Check if the chosen chess piece is black or white
  if (chessPiecesString[chosenPieceID[1]].charAt(0) == "b") {
    // Update the square with the black Queen and adjust its class
    allSquares[chosenPieceID[1]].innerHTML = bqueen;
    chessPiecesString[chosenPieceID[1]] = "bqueen";
    allSquares[chosenPieceID[1]].firstChild.firstChild.classList.add(
      "blackPiece"
    );
  } else {
    // Update the square with the white Queen and adjust its class
    allSquares[chosenPieceID[1]].innerHTML = wqueen;
    chessPiecesString[chosenPieceID[1]] = "wqueen";
    allSquares[chosenPieceID[1]].firstChild.firstChild.classList.add(
      "whitePiece"
    );
  }
  checker();
  // Hide the popup by replacing "popupBoxshow" class with "popupBoxhidden"
  popup.classList.replace("popupBoxshow", "popupBoxhidden");
  // Reset the chosenPieceID array
  chosenPieceID = [];
}

// Function to handle getting a Bishop chess piece
function getBishop() {
  // Check if the chosen chess piece is black or white
  if (chessPiecesString[chosenPieceID[1]].charAt(0) == "b") {
    // Update the square with the black Bishop and adjust its class
    allSquares[chosenPieceID[1]].innerHTML = bbishop;
    chessPiecesString[chosenPieceID[1]] = "bbishop";
    allSquares[chosenPieceID[1]].firstChild.firstChild.classList.add(
      "blackPiece"
    );
  } else {
    // Update the square with the white Bishop and adjust its class
    allSquares[chosenPieceID[1]].innerHTML = wbishop;
    chessPiecesString[chosenPieceID[1]] = "wbishop";
    allSquares[chosenPieceID[1]].firstChild.firstChild.classList.add(
      "whitePiece"
    );
    
  }
  checker();
  // Hide the popup by replacing "popupBoxshow" class with "popupBoxhidden"
  popup.classList.replace("popupBoxshow", "popupBoxhidden");
  // Reset the chosenPieceID array
  chosenPieceID = [];
}

// Function to handle getting a Rook chess piece
function getRook() {
  // Check if the chosen chess piece is black or white
  if (chessPiecesString[chosenPieceID[1]].charAt(0) == "b") {
    // Update the square with the black Rook and adjust its class
    allSquares[chosenPieceID[1]].innerHTML = brook;
    chessPiecesString[chosenPieceID[1]] = "brook";
    allSquares[chosenPieceID[1]].firstChild.firstChild.classList.add(
      "blackPiece"
    );
  } else {
    // Update the square with the white Rook and adjust its class
    allSquares[chosenPieceID[1]].innerHTML = wrook;
    chessPiecesString[chosenPieceID[1]] = "wrook";
    allSquares[chosenPieceID[1]].firstChild.firstChild.classList.add(
      "whitePiece"
    );
  }
  checker();
  // Hide the popup by replacing "popupBoxshow" class with "popupBoxhidden"
  popup.classList.replace("popupBoxshow", "popupBoxhidden");
  // Reset the chosenPieceID array
  chosenPieceID = [];
}

// Function to handle getting a Knight chess piece
function getNight() {
  // Check if the chosen chess piece is white or black
  if (chessPiecesString[chosenPieceID[1]].charAt(0) == "w") {
    // Update the square with the white Knight and adjust its class
    allSquares[chosenPieceID[1]].innerHTML = wnight;
    chessPiecesString[chosenPieceID[1]] = "wnight";
    allSquares[chosenPieceID[1]].firstChild.firstChild.classList.add(
      "whitePiece"
    );
  } else {
    // Update the square with the black Knight and adjust its class
    allSquares[chosenPieceID[1]].innerHTML = bnight;
    chessPiecesString[chosenPieceID[1]] = "bnight";
    allSquares[chosenPieceID[1]].firstChild.firstChild.classList.add(
      "blackPiece"
    );
  }
  checker();
  // Hide the popup by replacing "popupBoxshow" class with "popupBoxhidden"
  popup.classList.replace("popupBoxshow", "popupBoxhidden");
  // Reset the chosenPieceID array
  chosenPieceID = [];
}
