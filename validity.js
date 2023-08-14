function checkWPawn(id) {
  row = Math.floor(id / 8);
  const col = Math.floor(id % 8);

  if (row == 6) {
    if (chessPiecesString[(row - 2) * 8 + col] === "")
      valid[(row - 2) * 8 + col] = 1;
  }

  if (row > 0 && chessPiecesString[(row - 1) * 8 + col] === "")
    valid[(row - 1) * 8 + col] = 1;

  if (
    row > 0 &&
    col > 0 &&
    chessPiecesString[(row - 1) * 8 + col - 1].charAt(0) === "b"
  )
    valid[(row - 1) * 8 + col - 1] = 2;

  if (
    row > 0 &&
    col < 7 &&
    chessPiecesString[(row - 1) * 8 + col + 1].charAt(0) === "b"
  )
    valid[(row - 1) * 8 + col + 1] = 2;
}

function checkBPawn(id) {
  row = Math.floor(id / 8);
  const col = Math.floor(id % 8);

  if (row == 1) {
    if (chessPiecesString[(row + 2) * 8 + col] === "")
      valid[(row + 2) * 8 + col] = 1;
  }

  if (row < 7 && chessPiecesString[(row + 1) * 8 + col] === "")
    valid[(row + 1) * 8 + col] = 1;

  if (
    row < 7 &&
    col > 0 &&
    chessPiecesString[(row + 1) * 8 + col - 1].charAt(0) === "w"
  )
    valid[(row + 1) * 8 + col - 1] = 2;

  if (
    row < 7 &&
    col < 7 &&
    chessPiecesString[(row + 1) * 8 + col + 1].charAt(0) === "w"
  )
    valid[(row + 1) * 8 + col + 1] = 2;
}

function checkRook(id) {
  row = Math.floor(id / 8);
  const col = Math.floor(id % 8);
  //chessPiecesString[(row-1)*8+col]
  for (let i = row + 1; i < 8; i++) {
    if (chessPiecesString[i * 8 + col] !== "") {
      if (
        chessPiecesString[i * 8 + col].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + col] = 2;
      }
      break;
    } else valid[i * 8 + col] = 1;
  }
  for (let i = row - 1; i > -1; i--) {
    if (chessPiecesString[i * 8 + col] !== "") {
      if (
        chessPiecesString[i * 8 + col].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + col] = 2;
      }
      break;
    } else valid[i * 8 + col] = 1;
  }
  for (let i = col - 1; i > -1; i--) {
    if (chessPiecesString[row * 8 + i] !== "") {
      if (
        chessPiecesString[row * 8 + i].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[row * 8 + i] = 2;
      }
      break;
    } else valid[row * 8 + i] = 1;
  }
  for (let i = col + 1; i < 8; i++) {
    if (chessPiecesString[row * 8 + i] !== "") {
      if (
        chessPiecesString[row * 8 + i].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[row * 8 + i] = 2;
      }
      break;
    } else valid[row * 8 + i] = 1;
  }
}

function checkBishop(id) {
  row = Math.floor(id / 8);
  const col = Math.floor(id % 8);
  let i = row;
  let j = col;
  while (i < 7 && j < 7) {
    i++;
    j++;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2;
      }
      break;
    } else valid[i * 8 + j] = 1;
  }
  i = row;
  j = col;
  while (i < 7 && j > 0) {
    i++;
    j--;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2;
      }
      break;
    } else valid[i * 8 + j] = 1;
  }
  i = row;
  j = col;
  while (i > 0 && j > 0) {
    i--;
    j--;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2;
      }
      break;
    } else valid[i * 8 + j] = 1;
  }
  i = row;
  j = col;
  while (i > 0 && j < 7) {
    i--;
    j++;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2;
      }
      break;
    } else valid[i * 8 + j] = 1;
  }
}

function checkNight(id) {
  row = Math.floor(id / 8);
  const col = Math.floor(id % 8);
  let i = row;
  let j = col;
  if (i + 2 <= 7 && j + 1 <= 7) {
    i += 2;
    j += 1;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2;
      }
    } else valid[i * 8 + j] = 1;
    i = row;
    j = col;
  }
  if (i + 2 <= 7 && j - 1 >= 0) {
    i += 2;
    j -= 1;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2;
      }
    } else valid[i * 8 + j] = 1;
    i = row;
    j = col;
  }
  if (i - 2 >= 0 && j - 1 >= 0) {
    i -= 2;
    j -= 1;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2;
      }
    } else valid[i * 8 + j] = 1;
    i = row;
    j = col;
  }
  if (i - 2 >= 0 && j + 1 <= 7) {
    i -= 2;
    j += 1;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2;
      }
    } else valid[i * 8 + j] = 1;
    i = row;
    j = col;
  }
  if (j + 2 <= 7 && i + 1 <= 7) {
    j += 2;
    i += 1;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2;
      }
    } else valid[i * 8 + j] = 1;
    i = row;
    j = col;
  }
  if (j + 2 <= 7 && i - 1 >= 0) {
    j += 2;
    i -= 1;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2;
      }
    } else valid[i * 8 + j] = 1;
    i = row;
    j = col;
  }
  if (j - 2 >= 0 && i - 1 >= 0) {
    j -= 2;
    i -= 1;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2;
      }
    } else valid[i * 8 + j] = 1;
    i = row;
    j = col;
  }
  if (j - 2 >= 0 && i + 1 <= 7) {
    j -= 2;
    i += 1;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2;
      }
    } else valid[i * 8 + j] = 1;
    i = row;
    j = col;
  }
}

function checkQueen(id) {
  checkBishop(id);
  checkRook(id);
}
