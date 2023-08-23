let direction = -1;
// Function to check valid squares of a white pawn
function checkWPawn(id) {
  // Calculate the row and column of the current square
  row = Math.floor(id / 8);
  const col = Math.floor(id % 8);
  let i = row;
  let j = col;
  // Check if the pawn is in its starting position (row 6)
  if (row == 6) {
    // Check if the two squares in front of the pawn are empty
    if (
      chessPiecesString[(row - 2) * 8 + col] === "" &&
      chessPiecesString[(row - 1) * 8 + col] === ""
    )
      valid[(row - 2) * 8 + col] = 1;
  }

  // Check if the square directly in front of the pawn is empty
  if (row > 0 && chessPiecesString[(row - 1) * 8 + col] === "")
    valid[(row - 1) * 8 + col] = 1;

  // Check if there's an enemy piece diagonally to the left of the pawn
  if (
    row > 0 &&
    col > 0 &&
    chessPiecesString[(row - 1) * 8 + col - 1].charAt(0) === "b"
  )
    valid[(row - 1) * 8 + col - 1] = 2;

  // Check if there's an enemy piece diagonally to the right of the pawn
  if (
    row > 0 &&
    col < 7 &&
    chessPiecesString[(row - 1) * 8 + col + 1].charAt(0) === "b"
  )
    valid[(row - 1) * 8 + col + 1] = 2;
  if (
    row > 0 &&
    col > 0 &&
    chessPiecesString[(row - 1) * 8 + col - 1].charAt(0) === "w"
  )
    valid[(row - 1) * 8 + col - 1] = 3;

  if (
    row > 0 &&
    col < 7 &&
    chessPiecesString[(row - 1) * 8 + col + 1].charAt(0) === "w"
  )
    valid[(row - 1) * 8 + col + 1] = 3;
  directionCheck(id, chance);
  if (direction !== -1) {
    restrict(direction, row, col);
  }
  direction = -1;
  if(whiteCheck==true) checkValidAfterCheck();
}

// Function to check valid squares of a Black pawn
function checkBPawn(id) {
  // Calculate the row and column of the current square
  row = Math.floor(id / 8);
  const col = Math.floor(id % 8);

  // Check if the pawn is in its starting position (row 1)
  if (row == 1) {
    // Check if the two squares in front of the pawn are empty
    if (
      chessPiecesString[(row + 2) * 8 + col] === "" &&
      chessPiecesString[(row + 1) * 8 + col] == ""
    )
      valid[(row + 2) * 8 + col] = 1;
  }

  // Check if the square directly in front of the pawn is empty
  if (row < 7 && chessPiecesString[(row + 1) * 8 + col] === "")
    valid[(row + 1) * 8 + col] = 1;

  // Check if there's an enemy piece diagonally to the left of the pawn
  if (
    row < 7 &&
    col > 0 &&
    chessPiecesString[(row + 1) * 8 + col - 1].charAt(0) === "w"
  )
    valid[(row + 1) * 8 + col - 1] = 2;

  // Check if there's an enemy piece diagonally to the right of the pawn
  if (
    row < 7 &&
    col < 7 &&
    chessPiecesString[(row + 1) * 8 + col + 1].charAt(0) === "w"
  )
    valid[(row + 1) * 8 + col + 1] = 2;
  if (
    row < 7 &&
    col > 0 &&
    chessPiecesString[(row + 1) * 8 + col - 1].charAt(0) === "b"
  )
    valid[(row + 1) * 8 + col - 1] = 3;

  if (
    row < 7 &&
    col < 7 &&
    chessPiecesString[(row + 1) * 8 + col + 1].charAt(0) === "b"
  )
    valid[(row + 1) * 8 + col + 1] = 3;
  directionCheck(id, chance);
  if (direction !== -1) {
    restrict(direction, row, col);
  }
  direction = -1;
  if(blackCheck==true) checkValidAfterCheck();
}

// Function to check valid squares of a Rook
function checkRook(id) {
  // Calculate the row and column of the current square
  row = Math.floor(id / 8);
  const col = Math.floor(id % 8);

  // Check valid moves in upward direction
  for (let i = row + 1; i < 8; i++) {
    if (chessPiecesString[i * 8 + col] !== "") {
      if (
        chessPiecesString[i * 8 + col].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + col] = 2; // Mark the square as capturing move
      } else valid[i * 8 + col] = 3;
      break; // Stop searching in this direction after encountering a piece
    } else {
      valid[i * 8 + col] = 1; // Mark the square as valid move
    }
  }

  // Check valid moves in downward direction
  for (let i = row - 1; i > -1; i--) {
    if (chessPiecesString[i * 8 + col] !== "") {
      if (
        chessPiecesString[i * 8 + col].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + col] = 2;
      } else valid[i * 8 + col] = 3;
      break;
    } else {
      valid[i * 8 + col] = 1;
    }
  }

  // Check valid moves to the left
  for (let i = col - 1; i > -1; i--) {
    if (chessPiecesString[row * 8 + i] !== "") {
      if (
        chessPiecesString[row * 8 + i].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[row * 8 + i] = 2;
      } else valid[row * 8 + i] = 3;
      break;
    } else {
      valid[row * 8 + i] = 1;
    }
  }

  // Check valid moves to the right
  for (let i = col + 1; i < 8; i++) {
    if (chessPiecesString[row * 8 + i] !== "") {
      if (
        chessPiecesString[row * 8 + i].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[row * 8 + i] = 2;
      } else valid[row * 8 + i] = 3;
      break;
    } else {
      valid[row * 8 + i] = 1;
    }
  }
  directionCheck(id, chance);
  if (direction !== -1) {
    restrict(direction, row, col);
  }
  direction = -1;
  if(whiteCheck==true||blackCheck==true) checkValidAfterCheck();
}

// Function to check valid squares of a Bishop
function checkBishop(id) {
  // Calculate the row and column of the current square
  row = Math.floor(id / 8);
  const col = Math.floor(id % 8);

  let i = row;
  let j = col;

  // Check valid moves in the upward-right diagonal direction
  while (i < 7 && j < 7) {
    i++;
    j++;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2; // Mark the square as capturing move
      } else valid[i * 8 + j] = 3;
      break; // Stop searching in this direction after encountering a piece
    } else {
      valid[i * 8 + j] = 1; // Mark the square as valid move
    }
  }

  // Reset i and j
  i = row;
  j = col;

  // Check valid moves in the upward-left diagonal direction
  while (i < 7 && j > 0) {
    i++;
    j--;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2;
      } else valid[i * 8 + j] = 3;
      break;
    } else {
      valid[i * 8 + j] = 1;
    }
  }

  // Reset i and j
  i = row;
  j = col;

  // Check valid moves in the downward-left diagonal direction
  while (i > 0 && j > 0) {
    i--;
    j--;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2;
      } else valid[i * 8 + j] = 3;
      break;
    } else {
      valid[i * 8 + j] = 1;
    }
  }

  // Reset i and j
  i = row;
  j = col;

  // Check valid moves in the downward-right diagonal direction
  while (i > 0 && j < 7) {
    i--;
    j++;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2;
      } else valid[i * 8 + j] = 3;
      break;
    } else {
      valid[i * 8 + j] = 1;
    }
  }
  directionCheck(id, chance);
  if (direction !== -1) {
    restrict(direction, row, col);
  }
  direction = -1;
  if(blackCheck==true||whiteCheck==true) checkValidAfterCheck();
}

// Function to check valid squares of a Knight
function checkNight(id) {
  // Calculate the row and column of the current square
  row = Math.floor(id / 8);
  const col = Math.floor(id % 8);

  let i = row;
  let j = col;

  // Check valid moves in all possible L-shaped knight's moves

  // Check move two rows down and one column right
  if (i + 2 <= 7 && j + 1 <= 7) {
    i += 2;
    j += 1;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2; // Mark the square as capturing move
      } else valid[i * 8 + j] = 3;
    } else {
      valid[i * 8 + j] = 1; // Mark the square as valid move
    }
    i = row;
    j = col;
  }

  // Check move two rows down and one column left
  if (i + 2 <= 7 && j - 1 >= 0) {
    i += 2;
    j -= 1;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2;
      } else valid[i * 8 + j] = 3;
    } else {
      valid[i * 8 + j] = 1;
    }
    i = row;
    j = col;
  }

  // Check move two rows up and one column left
  if (i - 2 >= 0 && j - 1 >= 0) {
    i -= 2;
    j -= 1;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2;
      } else valid[i * 8 + j] = 3;
    } else {
      valid[i * 8 + j] = 1;
    }
    i = row;
    j = col;
  }

  // Check move two rows up and one column right
  if (i - 2 >= 0 && j + 1 <= 7) {
    i -= 2;
    j += 1;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2;
      } else valid[i * 8 + j] = 3;
    } else {
      valid[i * 8 + j] = 1;
    }
    i = row;
    j = col;
  }

  // Check move one row down and two columns right
  if (j + 2 <= 7 && i + 1 <= 7) {
    j += 2;
    i += 1;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2;
      } else valid[i * 8 + j] = 3;
    } else {
      valid[i * 8 + j] = 1;
    }
    i = row;
    j = col;
  }

  // Check move one row down and two columns left
  if (j + 2 <= 7 && i - 1 >= 0) {
    j += 2;
    i -= 1;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2;
      } else valid[i * 8 + j] = 3;
    } else {
      valid[i * 8 + j] = 1;
    }
    i = row;
    j = col;
  }

  // Check move one row up and two columns left
  if (j - 2 >= 0 && i - 1 >= 0) {
    j -= 2;
    i -= 1;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2;
      } else valid[i * 8 + j] = 3;
    } else {
      valid[i * 8 + j] = 1;
    }
    i = row;
    j = col;
  }

  // Check move one row up and two columns right
  if (j - 2 >= 0 && i + 1 <= 7) {
    j -= 2;
    i += 1;
    if (chessPiecesString[i * 8 + j] !== "") {
      if (
        chessPiecesString[i * 8 + j].charAt(0) !==
        chessPiecesString[row * 8 + col].charAt(0)
      ) {
        valid[i * 8 + j] = 2;
      } else valid[i * 8 + j] = 3;
    } else {
      valid[i * 8 + j] = 1;
    }
    i = row;
    j = col;
  }
  directionCheck(id, chance);
  if (direction !== -1) {
    restrict(direction, row, col);
  }
  direction = -1;
  if(blackCheck==true||whiteCheck==true) checkValidAfterCheck();
}

// Function to check valid squares of a Queen
function checkQueen(id) {
  // Since queen moves diagonally, horizontally and vertically
  row = Math.floor(id / 8);
  const col = Math.floor(id % 8);
  checkBishop(id);
  checkRook(id);
  directionCheck(id, chance);
  if (direction !== -1) {
    restrict(direction, row, col);
  }
  direction = -1;
  
}


