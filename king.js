// Function to check valid squares of a King
function checkKing(id) 
{
  // Loop through all squares on the board to check for possible moves
  for (let sqId = 0; sqId < 64; sqId++) {
    // Skip empty squares and squares with same-color pieces
    if (chessPiecesString[sqId] === "") continue;
    if (chessPiecesString[id].charAt(0) === chessPiecesString[sqId].charAt(0))
      continue;

    // Check for opponent's king
    if (chessPiecesString[sqId].charAt(1) === "k") {
      let r = Math.floor(sqId / 8);
      let c = Math.floor(sqId % 8);
      // Loop through surrounding squares for valid moves
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i == 0 && j == 0) continue;
          if (r + i < 0 || r + i > 7 || c + j < 0 || c + j > 7) continue;

          if (chessPiecesString[(r + i) * 8 + c + j] === "")
            valid[(r + i) * 8 + c + j] = 1; // Mark the square as a valid move
        }
      }
    }
    // Check for opponent's rook
    else if (chessPiecesString[sqId].charAt(1) === "r"){
      row = Math.floor(sqId / 8);
      const col = Math.floor(sqId % 8);

      // Check valid moves in upward direction
      for (let i = row + 1; i < 8; i++) {
        if (chessPiecesString[i * 8 + col] !== "") {
          if (
            chessPiecesString[i * 8 + col].charAt(0) !==
            chessPiecesString[row * 8 + col].charAt(0)
          ) {
            if(i<7 && chessPiecesString[i * 8 + col].charAt(1)=='k'){
              valid[(i+1) * 8 + col]=1;
            }
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
            if(i>0 && chessPiecesString[i * 8 + col].charAt(1)=='k'){
              valid[(i-1) * 8 + col]=1;
            }
            valid[i * 8 + col] = 2;
          } 
          else valid[i * 8 + col] = 3;
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
            if(i>0 && chessPiecesString[row * 8 + i].charAt(1)=='k'){
              valid[row * 8 + i-1]=1;
            }
            valid[row * 8 + i] = 2;
          }
          else valid[row * 8 + i] = 3;
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
            if(i<7 && chessPiecesString[row * 8 + i].charAt(1)=='k'){
              valid[row * 8 + i+1]=1;
            }
            valid[row * 8 + i] = 2;
          } 
          else valid[row * 8 + i] = 3;
          break;
        } else {
          valid[row * 8 + i] = 1;
        }
      }
      
    }
    // Check for opponent's bishop
    else if (chessPiecesString[sqId].charAt(1) === "b"){
      row = Math.floor(sqId / 8);
      const col = Math.floor(sqId % 8);

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
            if(i<7 && j<7 && chessPiecesString[i * 8 + j].charAt(1)=='k'){
              valid[(i+1) * 8 + j+1]=1;
            }
            valid[i * 8 + j] = 2; // Mark the square as capturing move
          } 
          else valid[i * 8 + j] = 3;
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
            if(i<7 && j>0 && chessPiecesString[i * 8 + j].charAt(1)=='k'){
              valid[(i+1) * 8 + j-1]=1;
            }
            valid[i * 8 + j] = 2;
          } 
          else valid[i * 8 + j] = 3;
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
            if(i>0 && j>0 && chessPiecesString[i * 8 + j].charAt(1)=='k'){
              valid[(i-1) * 8 + j-1]=1;
            }
            valid[i * 8 + j] = 2;
          } 
          else valid[i * 8 + j] = 3;
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
            if(i>0 && j<7 && chessPiecesString[i * 8 + j].charAt(1)=='k'){
              valid[(i-1) * 8 + j+1]=1;
            }
            valid[i * 8 + j] = 2;
          } 
          else valid[i * 8 + j] = 3;
          break;
        } else {
          valid[i * 8 + j] = 1;
        }
      }
      
    }
    // Check for opponent's queen
    else if (chessPiecesString[sqId].charAt(1) === "q"){
      row = Math.floor(sqId / 8);
      let col = Math.floor(sqId % 8);

      // Check valid moves in upward direction
      for (let i = row + 1; i < 8; i++) {
        if (chessPiecesString[i * 8 + col] !== "") {
          if (
            chessPiecesString[i * 8 + col].charAt(0) !==
            chessPiecesString[row * 8 + col].charAt(0)
          ) {
            if(i<7 && chessPiecesString[i * 8 + col].charAt(1)=='k'){
              valid[(i+1) * 8 + col]=1;
            }
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
            if(i>0 && chessPiecesString[i * 8 + col].charAt(1)=='k'){
              valid[(i-1) * 8 + col]=1;
            }
            valid[i * 8 + col] = 2;
          } 
          else valid[i * 8 + col] = 3;
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
            if(i>0 && chessPiecesString[row * 8 + i].charAt(1)=='k'){
              valid[row * 8 + i-1]=1;
            }
            valid[row * 8 + i] = 2;
          }
          else valid[row * 8 + i] = 3;
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
            if(i<7 && chessPiecesString[row * 8 + i].charAt(1)=='k'){
              valid[row * 8 + i+1]=1;
            }
            valid[row * 8 + i] = 2;
          } 
          else valid[row * 8 + i] = 3;
          break;
        } else {
          valid[row * 8 + i] = 1;
        }
      }
      

      row = Math.floor(sqId / 8);
      col = Math.floor(sqId % 8);

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
            if(i<7 && j<7 && chessPiecesString[i * 8 + j].charAt(1)=='k'){
              valid[(i+1) * 8 + j+1]=1;
            }
            valid[i * 8 + j] = 2; // Mark the square as capturing move
          } 
          else valid[i * 8 + j] = 3;
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
            if(i<7 && j>0 && chessPiecesString[i * 8 + j].charAt(1)=='k'){
              valid[(i+1) * 8 + j-1]=1;
            }
            valid[i * 8 + j] = 2;
          } 
          else valid[i * 8 + j] = 3;
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
            if(i>0 && j>0 && chessPiecesString[i * 8 + j].charAt(1)=='k'){
              valid[(i-1) * 8 + j-1]=1;
            }
            valid[i * 8 + j] = 2;
          } 
          else valid[i * 8 + j] = 3;
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
            if(i>0 && j<7 && chessPiecesString[i * 8 + j].charAt(1)=='k'){
              valid[(i-1) * 8 + j+1]=1;
            }
            valid[i * 8 + j] = 2;
          } 
          else valid[i * 8 + j] = 3;
          break;
        } else {
          valid[i * 8 + j] = 1;
        }
      }
      
    }
    // Check for opponent's knight
    else if (chessPiecesString[sqId].charAt(1) === "n"){
      row = Math.floor(sqId / 8);
      const col = Math.floor(sqId % 8);

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
      
    }
    // Check for opponent's pawn
    else if (chessPiecesString[sqId].charAt(0) === "b") {
      let r = Math.floor(sqId / 8);
      let c = Math.floor(sqId % 8);
      if (r === 7) break;
      if (c > 0 && chessPiecesString[(r + 1) * 8 + c - 1] === "")
        valid[(r + 1) * 8 + c - 1] = 1;
      if (c < 7 && chessPiecesString[(r + 1) * 8 + c + 1] === "")
        valid[(r + 1) * 8 + c + 1] = 1;
      if (
        r < 7 &&
        c < 7 &&
        chessPiecesString[(r + 1) * 8 + c + 1].charAt(0) === "w"
      )
        valid[(r + 1) * 8 + c + 1] = 2;
      if (
        r < 7 &&
        c > 0 &&
        chessPiecesString[(r + 1) * 8 + c - 1].charAt(0) === "b"
      )
        valid[(r + 1) * 8 + c - 1] = 3;
      if (
        r < 7 &&
        c < 7 &&
        chessPiecesString[(r + 1) * 8 + c + 1].charAt(0) === "b"
      )
        valid[(r + 1) * 8 + c + 1] = 3;
    } 
    
    else {
      let r = Math.floor(sqId / 8);
      let c = Math.floor(sqId % 8);
      if (r === 0) break;
      if (c > 0 && chessPiecesString[(r - 1) * 8 + c - 1] === "")
        valid[(r - 1) * 8 + c - 1] = 1;
      if (c < 7 && chessPiecesString[(r - 1) * 8 + c + 1] === "")
        valid[(r - 1) * 8 + c + 1] = 1;
      if (
        r > 0 &&
        c < 7 &&
        chessPiecesString[(r - 1) * 8 + c + 1].charAt(0) === "b"
      )
        valid[(r - 1) * 8 + c + 1] = 2;
      if (
        r > 0 &&
        c > 0 &&
        chessPiecesString[(r - 1) * 8 + c - 1].charAt(0) === "w"
      )
        valid[(r - 1) * 8 + c - 1] = 3;

      if (
        r > 0 &&
        c < 7 &&
        chessPiecesString[(r - 1) * 8 + c + 1].charAt(0) === "w"
      )
        valid[(r - 1) * 8 + c + 1] = 3;
    }
  }

  // Calculate the row and column of the current square
  row = Math.floor(id / 8);
  const col = Math.floor(id % 8);

  // Store the previous valid moves
  let notValid = [];
  notValid = valid;
  valid = [];

  // Loop through surrounding squares for valid moves
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i == 0 && j == 0) continue;
      if (row + i < 0 || row + i > 7 || col + j < 0 || col + j > 7) continue;

      if (
        notValid[(row + i) * 8 + col + j] === 1 ||
        notValid[(row + i) * 8 + col + j] === 2 ||
        notValid[(row + i) * 8 + col + j] === 3
      )
        continue;
      if (chessPiecesString[(row + i) * 8 + col + j] === "")
        valid[(row + i) * 8 + col + j] = 1; // Mark the square as a valid move
      else if (
        chessPiecesString[(row + i) * 8 + col + j].charAt(0) !==
          chessPiecesString[id].charAt(0) &&
        notValid[(row + i) * 8 + col + j] !== 3
      )
        valid[(row + i) * 8 + col + j] = 2; // Mark the square as a capturing move
    }
  }

  // Special moves for castling
  if (blackK === false && id == 4) {
    if (
      blackLongRook === false &&
      notValid[3] !== 1 &&
      notValid[2] !== 1 &&
      chessPiecesString[1] === "" &&
      chessPiecesString[2] === "" &&
      chessPiecesString[3] === ""
    )
      valid[2] = 1; // Mark the square as a valid move for castling
    if (
      blackShortRook === false &&
      notValid[5] !== 1 &&
      notValid[6] !== 1 &&
      chessPiecesString[5] === "" &&
      chessPiecesString[6] === ""
    )
      valid[6] = 1; // Mark the square as a valid move for castling
  } else if (whiteK === false && id == 60) {
    if (
      whiteLongRook === false &&
      notValid[58] !== 1 &&
      notValid[59] !== 1 &&
      chessPiecesString[57] === "" &&
      chessPiecesString[58] === "" &&
      chessPiecesString[59] === ""
    )
      valid[58] = 1; // Mark the square as a valid move for castling
    if (
      whiteShortRook === false &&
      notValid[61] !== 1 &&
      notValid[62] !== 1 &&
      chessPiecesString[61] === "" &&
      chessPiecesString[62] === ""
    )
      valid[62] = 1; // Mark the square as a valid move for castling
  }
}
