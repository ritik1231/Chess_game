let chessBoard = document.querySelector("#chessBoard")
//array for 64 squares
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
let choosenPeiceID = []

function createBoard() {
  chessPeices.forEach((chessPeice, i) => {
    let square = document.createElement('div')
    square.setAttribute('square-id', i)
    square.classList.add('square')
    square.innerHTML = chessPeice
    //square.firstChild?.setAttribute('draggable',true)
    const row = Math.floor((63 - i) / 8) + 1
    if (row % 2 === 0) {
      square.classList.add(i % 2 === 0 ? 'white' : 'black')
    }
    else {
      square.classList.add(i % 2 === 0 ? 'black' : 'white')
    }
    if (i >= 48) {
      square.firstChild.firstChild.classList.add('whitePeice')
    }
    if (i <=15) {
      square.firstChild.firstChild.classList.add('blackPeice')
    }
    square.addEventListener('click', movePeice)
    chessBoard.append(square)
  })
}
createBoard()

const allSquares = document.querySelectorAll("#chessBoard .square")
function checkMove() {
  chessPeicesString[choosenPeiceID[1]] = chessPeicesString[choosenPeiceID[0]]
  chessPeicesString[choosenPeiceID[0]] = ""
  allSquares[choosenPeiceID[1]].innerHTML = allSquares[choosenPeiceID[0]].innerHTML
  allSquares[choosenPeiceID[0]].innerHTML = ""
  choosenPeiceID=[]
}

function movePeice() {
  const peiceID = this.getAttribute('square-id')
  choosenPeiceID.push(peiceID)
  if(allSquares[choosenPeiceID[0]].innerHTML === ""){
  	choosenPeiceID= []
  }
  if (choosenPeiceID.length === 2) {
  const pec1 = choosenPeiceID[0]
  const pec2 = choosenPeiceID[1]
    if(choosenPeiceID[0]===choosenPeiceID[1]){
      choosenPeiceID = []
      choosenPeiceID.push(pec1)
    }
    else if(chessPeicesString[pec2]!=="" && chessPeicesString[pec2].charAt(0) === chessPeicesString[pec1].charAt(0)){
    	choosenPeiceID = []
      choosenPeiceID.push(pec1)
    }
    else checkMove()
  }
}

