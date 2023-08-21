function directionCheck(id, chance) {
  row = Math.floor(id / 8);
  const col = Math.floor(id % 8);
  let i = row;
  let j = col;
  while (i > 0 && direction === -1) {
    i--;
    if (chessPiecesString[i * 8 + col] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(1) === "k" &&
        chessPiecesString[i * 8 + j].charAt(0) === chance.charAt(0)
      ) {
        direction = 4;
        break;
      } else break;
    }
  }
  i = row;
  j = col;
  while (i < 7 && direction === -1) {
    i++;
    if (chessPiecesString[i * 8 + col] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(1) === "k" &&
        chessPiecesString[i * 8 + j].charAt(0) === chance.charAt(0)
      ) {
        direction = 0;
        break;
      } else break;
    }
  }
  i = row;
  j = col;
  while (j < 7 && direction === -1) {
    j++;
    if (chessPiecesString[row * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(1) === "k" &&
        chessPiecesString[i * 8 + j].charAt(0) === chance.charAt(0)
      ) {
        direction = 6;
        break;
      } else break;
    }
  }
  i = row;
  j = col;
  while (j > 0 && direction === -1) {
    j--;
    if (chessPiecesString[row * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(1) === "k" &&
        chessPiecesString[i * 8 + j].charAt(0) === chance.charAt(0)
      ) {
        direction = 2;
        break;
      } else break;
    }
  }
  i = row;
  j = col;
  while (i > 0 && j > 0 && direction === -1) {
    j--;
    i--;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(1) === "k" &&
        chessPiecesString[i * 8 + j].charAt(0) === chance.charAt(0)
      ) {
        direction = 3;
        break;
      } else break;
    }
  }
  i = row;
  j = col;
  while (i > 0 && j < 7 && direction === -1) {
    j++;
    i--;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(1) === "k" &&
        chessPiecesString[i * 8 + j].charAt(0) === chance.charAt(0)
      ) {
        direction = 5;
        break;
      } else break;
    }
  }
  i = row;
  j = col;
  while (i < 7 && j < 7 && direction === -1) {
    j++;
    i++;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(1) === "k" &&
        chessPiecesString[i * 8 + j].charAt(0) === chance.charAt(0)
      ) {
        direction = 7;
        break;
      } else break;
    }
  }
  i = row;
  j = col;
  while (i < 7 && j > 0 && direction === -1) {
    j--;
    i++;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(1) === "k" &&
        chessPiecesString[i * 8 + j].charAt(0) === chance.charAt(0)
      ) {
        direction = 1;
        break;
      } else break;
    }
  }
}

let directionFlag;
let oppoDirectionPiece;
function restrict(direction, row, col) {
  if (direction === 0) {
    i = row;
    j = col;
    while (i > 0) {
      i--;
      if (chessPiecesString[i * 8 + col] !== "") {
        if (
          chessPiecesString[i * 8 + j].charAt(0) !==
          chessPiecesString[row * 8 + col].charAt(0)
        ) {
          oppoDirectionPiece = chessPiecesString[i * 8 + j].charAt(1);
          break;
        } else break;
      }
    }
  } else if (direction === 4) {
    i = row;
    j = col;
    while (i < 7) {
      i++;
      if (chessPiecesString[i * 8 + col] !== "") {
        if (
          chessPiecesString[i * 8 + j].charAt(0) !==
          chessPiecesString[row * 8 + col].charAt(0)
        ) {
          oppoDirectionPiece = chessPiecesString[i * 8 + j].charAt(1);
          break;
        } else break;
      }
    }
  } else if (direction === 6) {
    i = row;
    j = col;
    while (j > 0) {
      j--;
      if (chessPiecesString[row * 8 + j] !== "") {
        if (
          chessPiecesString[i * 8 + j].charAt(0) !==
          chessPiecesString[row * 8 + col].charAt(0)
        ) {
          oppoDirectionPiece = chessPiecesString[i * 8 + j].charAt(1);
          break;
        } else break;
      }
    }
  } else if (direction === 2) {
    i = row;
    j = col;
    while (j < 7) {
      j++;
      if (chessPiecesString[row * 8 + j] !== "") {
        if (
          chessPiecesString[i * 8 + j].charAt(0) !==
          chessPiecesString[row * 8 + col].charAt(0)
        ) {
          oppoDirectionPiece = chessPiecesString[i * 8 + j].charAt(1);
          break;
        } else break;
      }
    }
  } else if (direction === 1) {
    i = row;
    j = col;
    while (j < 7 && i > 0) {
      i--;
      j++;
      if (chessPiecesString[i * 8 + j] !== "") {
        if (
          chessPiecesString[i * 8 + j].charAt(0) !==
          chessPiecesString[row * 8 + col].charAt(0)
        ) {
          oppoDirectionPiece = chessPiecesString[i * 8 + j].charAt(1);
          break;
        } else break;
      }
    }
  }
  if (direction === 5) {
    i = row;
    j = col;
    while (j > 0 && i < 7) {
      j--;
      i++;
      if (chessPiecesString[i * 8 + j] !== "") {
        if (
          chessPiecesString[i * 8 + j].charAt(0) !==
          chessPiecesString[row * 8 + col].charAt(0)
        ) {
          oppoDirectionPiece = chessPiecesString[i * 8 + j].charAt(1);
          break;
        } else break;
      }
    }
  }
  if (direction === 3) {
    i = row;
    j = col;
    while (j < 7 && i < 7) {
      j++;
      i++;
      if (chessPiecesString[i * 8 + j] !== "") {
        if (
          chessPiecesString[i * 8 + j].charAt(0) !==
          chessPiecesString[row * 8 + col].charAt(0)
        ) {
          oppoDirectionPiece = chessPiecesString[i * 8 + j].charAt(1);
          break;
        } else break;
      }
    }
  }
  if (direction === 7) {
    i = row;
    j = col;
    while (j > 0 && i > 0) {
      j--;
      i--;
      if (chessPiecesString[i * 8 + j] !== "") {
        if (
          chessPiecesString[i * 8 + j].charAt(0) !==
          chessPiecesString[row * 8 + col].charAt(0)
        ) {
          oppoDirectionPiece = chessPiecesString[i * 8 + j].charAt(1);
          break;
        } else break;
      }
    }
  }
  if (
    (oppoDirectionPiece === "r" ||
      oppoDirectionPiece === "q" ||
      oppoDirectionPiece === "b") &&
    chessPiecesString[row * 8 + col].charAt(1) === "n"
  ) {
    valid = [];
  } else {
    for (let i = 0; i < 64; i++) {
      if (valid[i] === 1 || valid[i] === 2) {
        if (
          (oppoDirectionPiece === "r" || oppoDirectionPiece === "q") &&
          (direction === 0 || direction === 4) &&
          col != i % 8
        ) {
          valid[i] = 0;
        } else if (
          (oppoDirectionPiece === "r" || oppoDirectionPiece === "q") &&
          (direction === 2 || direction === 6) &&
          row != Math.floor(i / 8)
        ) {
          valid[i] = 0;
        } else if (
          (oppoDirectionPiece === "b" || oppoDirectionPiece === "q") &&
          direction === 1 &&
          ((row <= Math.floor(i / 8) && col <= i % 8) ||
            (row >= Math.floor(i / 8) && col >= i % 8))
        ) {
          valid[i] = 0;
        } else if (
          (oppoDirectionPiece === "b" || oppoDirectionPiece === "q") &&
          direction === 5 &&
          ((row <= Math.floor(i / 8) && col <= i % 8) ||
            (row >= Math.floor(i / 8) && col >= i % 8))
        ) {
          valid[i] = 0;
        } else if (
          (oppoDirectionPiece === "b" || oppoDirectionPiece === "q") &&
          direction === 3 &&
          ((row >= Math.floor(i / 8) && col <= i % 8) ||
            (row <= Math.floor(i / 8) && col >= i % 8))
        ) {
          valid[i] = 0;
        } else if (
          (oppoDirectionPiece === "b" || oppoDirectionPiece === "q") &&
          direction === 7 &&
          ((row >= Math.floor(i / 8) && col <= i % 8) ||
            (row <= Math.floor(i / 8) && col >= i % 8))
        ) {
          valid[i] = 0;
        }
      }
    }
  }
  oppoDirectionPiece = null;
}


function checker(id) {
  validAfterCheck=[]
  if (chessPiecesString[id].charAt(0) === "b") {
    if (
      chessPiecesString[id].charAt(1) === "r" ||
      chessPiecesString[id].charAt(1) === "q"
    ) {
      if (Math.floor(chosenPieceID[1] / 8) === Math.floor(wKingPos / 8)) {
        let attackPos = chosenPieceID[1] % 8;
        let kingPos = wKingPos % 8;
        let sml, big;
        if (attackPos < kingPos) {
          sml = parseInt(attackPos);
          big = parseInt(kingPos);
        } else {
          sml = parseInt(kingPos);
          big = parseInt(attackPos);
        }
        validAfterCheck[chosenPieceID[1]]=1
        let flag = 1;
        for (let i = sml + 1; i < big; i++) {
          validAfterCheck[Math.floor(wKingPos / 8) * 8 + i]=1;
          if (chessPiecesString[Math.floor(wKingPos / 8) * 8 + i] !== "") {
            flag = 0;
            validAfterCheck=[]
            break;
          }
         
        }
        if (flag === 1) whiteCheck = true;
      } else if (
        Math.floor(chosenPieceID[1] % 8) === Math.floor(wKingPos % 8)
      ) {
        let attackPos = Math.floor(chosenPieceID[1] / 8);
        let kingPos = Math.floor(wKingPos / 8);
        let sml, big;
        if (attackPos < kingPos) {
          sml = parseInt(attackPos);
          big = parseInt(kingPos);
        } else {
          sml = parseInt(kingPos);
          big = parseInt(attackPos);
        }
        validAfterCheck[chosenPieceID[1]]=1
        let flag = 1;
        for (let i = sml + 1; i < big; i++) {
          validAfterCheck[i * 8 + (wKingPos % 8)] = 1
          if (chessPiecesString[i * 8 + (wKingPos % 8)] !== "") {
            flag = 0;
            validAfterCheck=[]
            break;
          }
          
        }
        if (flag === 1) whiteCheck = true;
      }
    }
    if (
      chessPiecesString[id].charAt(1) === "b" ||
      chessPiecesString[id].charAt(1) === "q"
    ) {
      let kingRow = Math.floor(parseInt(wKingPos) / 8);
      let kingCol = parseInt(wKingPos) % 8;
      let attackRow = Math.floor(parseInt(chosenPieceID[1]) / 8);
      let attackCol = parseInt(chosenPieceID[1]) % 8;
      if (kingRow - kingCol === attackRow - attackCol) {
        let sml, big, sml1;
        if (kingRow < attackRow) {
          sml = kingRow + 1;
          sml1 = kingCol + 1;
          big = attackRow;
        } else {
          sml = attackRow + 1;
          sml1 = attackCol + 1;
          big = kingRow;
        }
        validAfterCheck[chosenPieceID[1]]=1
        let flag = 1;
        for (let i = sml; i < big; i++) {
          validAfterCheck[i * 8 + sml1]=1
          if (chessPiecesString[i * 8 + sml1] !== "") {
            flag = 0;
            validAfterCheck=[]
            break;
          }
          sml1++;
        }
        if (flag === 1) whiteCheck = true;
      } else if (kingRow + kingCol === attackRow + attackCol) {
        let sml, big, sml1;
        if (kingRow < attackRow) {
          sml = kingRow + 1;
          sml1 = kingCol - 1;
          big = attackRow;
        } else {
          sml = attackRow + 1;
          sml1 = attackCol - 1;
          big = kingRow;
        }
        validAfterCheck[chosenPieceID[1]]=1
        let flag = 1;
        for (let i = sml; i < big; i++) {
          validAfterCheck[i * 8 + sml1]=1
          if (chessPiecesString[i * 8 + sml1] !== "") {
            flag = 0;
            validAfterCheck=[]
            break;
            
          }
      
          sml1--;
        }
        if (flag === 1) whiteCheck = true;
      }
    } else if (chessPiecesString[id].charAt(1) === "n") {
      let nrow = Math.floor(chosenPieceID[1] / 8);
      let ncol = Math.floor(chosenPieceID[1] % 8);

      for (let i = -2; i <= 2; i++)
        for (let j = -2; j <= 2; j++) {
          if (i == 0 || j == 0 || Math.abs(i) == Math.abs(j)) continue;
          if (
            row + i >= 0 &&
            nrow < 8 &&
            ncol + j >= 0 &&
            ncol < 8 &&
            (nrow + i) * 8 + ncol + j == wKingPos
          ) {
            whiteCheck = true;
            validAfterCheck[chosenPieceID[1]]=1
            break;
          }
        }
    } else if (chessPiecesString[id].charAt(1) === "p") {
      if (
        (chosenPieceID[1] % 8 != 0 &&
          parseInt(chosenPieceID[1]) + 7 == wKingPos) ||
        ((parseInt(chosenPieceID[1]) + 1) % 8 != 0 &&
          parseInt(chosenPieceID[1]) + 9 == wKingPos)
      ) {
        whiteCheck = true;
        validAfterCheck[chosenPieceID[1]]=1
      }
    }
  } 
  
  
  else {
    if (
      chessPiecesString[id].charAt(1) === "r" ||
      chessPiecesString[id].charAt(1) === "q"
    ) {
      if (Math.floor(chosenPieceID[1] / 8) === Math.floor(bKingPos / 8)) {
        let attackPos = chosenPieceID[1] % 8;
        let kingPos = bKingPos % 8;
        let sml, big;
        if (attackPos < kingPos) {
          sml = parseInt(attackPos);
          big = parseInt(kingPos);
        } else {
          sml = parseInt(kingPos);
          big = parseInt(attackPos);
        }
        validAfterCheck[chosenPieceID[1]]=1
        let flag = 1;
        for (let i = sml + 1; i < big; i++) {
          validAfterCheck[Math.floor(bKingPos / 8) * 8 + i]=1
          if (chessPiecesString[Math.floor(bKingPos / 8) * 8 + i] !== "") {
            flag = 0;
            validAfterCheck=[]
            break;
          }
          
        }
        if (flag === 1) blackCheck = true;
      } else if (
        Math.floor(chosenPieceID[1] % 8) === Math.floor(bKingPos % 8)
      ) {
        let attackPos = Math.floor(chosenPieceID[1] / 8);
        let kingPos = Math.floor(bKingPos / 8);
        let sml, big;
        if (attackPos < kingPos) {
          sml = parseInt(attackPos);
          big = parseInt(kingPos);
        } else {
          sml = parseInt(kingPos);
          big = parseInt(attackPos);
        }
        validAfterCheck[chosenPieceID[1]]=1
        let flag = 1;
        for (let i = sml + 1; i < big; i++) {
          validAfterCheck[i * 8 + (bKingPos % 8)]=1
          if (chessPiecesString[i * 8 + (bKingPos % 8)] !== "") {
            flag = 0;
            validAfterCheck=[]
            break;
          }
       
        }
        if (flag === 1) blackCheck = true;
      }
    }
    if (
      chessPiecesString[id].charAt(1) === "b" ||
      chessPiecesString[id].charAt(1) === "q"
    ) {
      let kingRow = Math.floor(parseInt(bKingPos) / 8);
      let kingCol = parseInt(bKingPos) % 8;
      let attackRow = Math.floor(parseInt(chosenPieceID[1]) / 8);
      let attackCol = parseInt(chosenPieceID[1]) % 8;
      if (kingRow - kingCol === attackRow - attackCol) {
        let sml, big, sml1;
        if (kingRow < attackRow) {
          sml = kingRow + 1;
          sml1 = kingCol + 1;
          big = attackRow;
        } else {
          sml = attackRow + 1;
          sml1 = attackCol + 1;
          big = kingRow;
        }
        validAfterCheck[chosenPieceID[1]]=1
        let flag = 1;
        for (let i = sml; i < big; i++) {
          validAfterCheck[i * 8 + sml1]=1
          if (chessPiecesString[i * 8 + sml1] !== "") {
            flag = 0;
            validAfterCheck=[]
            break;
          }

          sml1++;
        }
        if (flag === 1) blackCheck = true;
      } else if (kingRow + kingCol === attackRow + attackCol) {
        let sml, big, sml1;
        if (kingRow < attackRow) {
          sml = kingRow + 1;
          sml1 = kingCol - 1;
          big = attackRow;
        } else {
          sml = attackRow + 1;
          sml1 = attackCol - 1;
          big = kingRow;
        }
        validAfterCheck[chosenPieceID[1]]=1
        let flag = 1;
        for (let i = sml; i < big; i++) {
          validAfterCheck[i * 8 + sml1]=1
          if (chessPiecesString[i * 8 + sml1] !== "") {
            flag = 0;
            validAfterCheck=[]
            break;
          }
         
          sml1--;
        }
        if (flag === 1) blackCheck = true;
      }
    } else if (chessPiecesString[id].charAt(1) === "n") {
      let nrow = Math.floor(chosenPieceID[1] / 8);
      let ncol = Math.floor(chosenPieceID[1] % 8);

      for (let i = -2; i <= 2; i++)
        for (let j = -2; j <= 2; j++) {
          if (i == 0 || j == 0 || Math.abs(i) == Math.abs(j)) continue;
          if (
            row + i >= 0 &&
            nrow < 8 &&
            ncol + j >= 0 &&
            ncol < 8 &&
            (nrow + i) * 8 + ncol + j == bKingPos
          ) {
            blackCheck = true;
            validAfterCheck[chosenPieceID[1]]=1
            break;
          }
        }
    } else if (chessPiecesString[id].charAt(1) === "p") {
      if (
        (chosenPieceID[1] % 8 != 0 &&
          parseInt(chosenPieceID[1]) - 9 == bKingPos) ||
        ((parseInt(chosenPieceID[1]) + 1) % 8 != 0 &&
          parseInt(chosenPieceID[1]) - 7 == bKingPos)
      ) {
        blackCheck = true;
        validAfterCheck[chosenPieceID[1]]=1
      }
    }
  }
}
