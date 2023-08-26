function checker() {
    validAfterCheck=[];
    let squareID;
    if(chance=='white') squareID=wKingPos
    else squareID=bKingPos
    let checkCount=0;
  
    row = Math.floor(squareID / 8);
    const col = Math.floor(squareID % 8);
    let i = row;
    let j = col;
    let flag=false;
    let temp=[];
    
    while (i > 0) {
      i--;
      if (chessPiecesString[i * 8 + col] !== "") {
        if (
            chessPiecesString[i * 8 + j].charAt(0) !== chance.charAt(0)&&
            (chessPiecesString[i * 8 + j].charAt(1) === "r"||chessPiecesString[i * 8 + j].charAt(1) === "q" )
          
        ) {
          checkCount++;
          temp[i*8+j]=1;
          flag=true;
        } 
        break;
      }
      temp[i*8+j]=1;
    }
    if(flag==false) temp=[];
    else{
      for(i=0;i<64;i++) if(temp[i]==1) validAfterCheck[i]=1;
    }

    i = row;
    j = col;
    flag=false;
    while (i < 7) {
      i++;
      if (chessPiecesString[i * 8 + col] !== "") {
        if (
            chessPiecesString[i * 8 + j].charAt(0) !== chance.charAt(0)&&
            (chessPiecesString[i * 8 + j].charAt(1) === "r"||chessPiecesString[i * 8 + j].charAt(1) === "q" )
        ) {
            checkCount++;
            temp[i*8+j]=1;
            flag=true;
        }
        break;
      }
      temp[i*8+j]=1;
    }
    if(flag==false) temp=[];
    else{
      for(i=0;i<64;i++) if(temp[i]==1) validAfterCheck[i]=1;
    }

    i = row;
    j = col;
    flag=false;
    while (j < 7) {
      j++;
      if (chessPiecesString[row * 8 + j] !== "") {
        if (
            chessPiecesString[i * 8 + j].charAt(0) !== chance.charAt(0)&&
            (chessPiecesString[i * 8 + j].charAt(1) === "r"||chessPiecesString[i * 8 + j].charAt(1) === "q" )
        ) {
          checkCount++;
          temp[i*8+j]=1;
          flag=true;
        }
        break;
      }
      temp[i*8+j]=1;
    }
    if(flag==false) temp=[];
    else{
      for(i=0;i<64;i++) if(temp[i]==1) validAfterCheck[i]=1;
    }

    i = row;
    j = col;
    flag=false;
    while (j > 0) {
      j--;
      if (chessPiecesString[row * 8 + j] !== "") {
        if (
            chessPiecesString[i * 8 + j].charAt(0) !== chance.charAt(0)&&
            (chessPiecesString[i * 8 + j].charAt(1) === "r"||chessPiecesString[i * 8 + j].charAt(1) === "q" )
        ) {
          checkCount++;
          temp[i*8+j]=1;
          flag=true;
        } 
        break;
      }
      temp[i*8+j]=1;
    }
    if(flag==false) temp=[];
    else{
      for(i=0;i<64;i++) if(temp[i]==1) validAfterCheck[i]=1;
    }

    i = row;
    j = col;
    falg=false;
    while (i > 0 && j > 0) {
      j--;
      i--;
      if (chessPiecesString[i * 8 + j] !== "") {
        if (
            chessPiecesString[i * 8 + j].charAt(0) !== chance.charAt(0)&&
            (chessPiecesString[i * 8 + j].charAt(1) === "b"||chessPiecesString[i * 8 + j].charAt(1) === "q" )
        ) {
            checkCount++;
            temp[i*8+j]=1;
            flag=true;
        } 
        break;
      }
      temp[i*8+j]=1;
    }
    if(flag==false) temp=[];
    else{
      for(i=0;i<64;i++) if(temp[i]==1) validAfterCheck[i]=1;
    }

    i = row;
    j = col;
    flag=false;
    while (i > 0 && j < 7) {
      j++;
      i--;
      if (chessPiecesString[i * 8 + j] !== "") {
        if (
            chessPiecesString[i * 8 + j].charAt(0) !== chance.charAt(0)&&
            (chessPiecesString[i * 8 + j].charAt(1) === "b"||chessPiecesString[i * 8 + j].charAt(1) === "q" )
        ) {
            checkCount++;
            temp[i*8+j]=1;
            flag=true;
        } 
        break;
      }
      temp[i*8+j]=1;
    }
    if(flag==false) temp=[];
    else{
      for(i=0;i<64;i++) if(temp[i]==1) validAfterCheck[i]=1;
    }

    i = row;
    j = col;
    flag=false;
    while (i < 7 && j < 7) {
      j++;
      i++;
      if (chessPiecesString[i * 8 + j] !== "") {
        if (
            chessPiecesString[i * 8 + j].charAt(0) !== chance.charAt(0)&&
            (chessPiecesString[i * 8 + j].charAt(1) === "b"||chessPiecesString[i * 8 + j].charAt(1) === "q" )
        ) {
          checkCount++;
          temp[i*8+j]=1;
          flag=true;
        } 
        break;
      }
      temp[i*8+j]=1;
    }
    if(flag==false) temp=[];
    else{
      for(i=0;i<64;i++) if(temp[i]==1) validAfterCheck[i]=1;
    }

    i = row;
    j = col;
    flag=false;
    while (i < 7 && j > 0) {
      j--;
      i++;
      if (chessPiecesString[i * 8 + j] !== "") {
        if (
            chessPiecesString[i * 8 + j].charAt(0) !== chance.charAt(0)&&
            (chessPiecesString[i * 8 + j].charAt(1) === "b"||chessPiecesString[i * 8 + j].charAt(1) === "q" )
        ) {
          checkCount++;
          temp[i*8+j]=1;
          flag=true;
        } 
        break;
      }
      temp[i*8+j]=1;
    }
    if(flag==false) temp=[];
    else{
      for(i=0;i<64;i++) if(temp[i]==1) validAfterCheck[i]=1;
    }

    for(i=-2;i<=2;i++) for(j=-2;j<=2;j++){
      if(i==0||j==0||Math.abs(i)==Math.abs(j)) continue;
      if(row+i<8&&row+i>=0&&col+j<8&&col+j>=0&&
        chessPiecesString[(row+i)*8+col+j]!==''&&
        chessPiecesString[(row+i)*8+col+j].charAt(0)!==chessPiecesString[row*8+col].charAt(0)&&
        chessPiecesString[(row+i)*8+col+j].charAt(1)=='n'){
        checkCount++;
        validAfterCheck[(row+i)*8+col+j]=1;
        break;  
      }
    }
    
    if(chance=='white'&&row>2){
      if(col-1>=0&&chessPiecesString[(row-1)*8+col-1]=='bpawn'){
        validAfterCheck[(row-1)*8+col-1]=1;
        checkCount++;
      }
      else if(col+1<8&&chessPiecesString[(row-1)*8+col+1]=='bpawn'){
        validAfterCheck[(row-1)*8+col+1]=1;
        checkCount++;
      } 
    }
    else if(chance=='black'&&row<5){
      if(col-1>=0&&chessPiecesString[(row+1)*8+col-1]=='wpawn'){
        validAfterCheck[(row+1)*8+col-1]=1;
        checkCount++;
      }
      else if(col+1<8&&chessPiecesString[(row+1)*8+col+1]=='wpawn'){
        validAfterCheck[(row+1)*8+col+1]=1;
        checkCount++;
      }
    }

    if(checkCount>0){
      if(chance=='white') whiteCheck=true;
      else blackCheck=true;
    }

    if(checkCount==2) validAfterCheck=[];
  }
  
