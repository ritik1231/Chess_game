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


