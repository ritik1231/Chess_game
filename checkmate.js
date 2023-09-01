function checkmate(){
    let isCheckMate=true;
    let temp=[];

    if(chance=='white') checkKing(wKingPos);
    else checkKing(bKingPos);
    temp=valid;

    for(let i=0;i<64;i++){
        if(chessPiecesString[i]==''||chessPiecesString[i].charAt(0)!==chance.charAt(0)) continue;

        if(chessPiecesString[i].charAt(1)=='k') continue;

        valid=[];

        if(chessPiecesString[i].charAt(1)=='b'){
            checkBishop(i);
        }
        else if(chessPiecesString[i].charAt(1)=='r'){
            checkRook(i);
        }
        else if(chessPiecesString[i].charAt(1)=='q'){
            checkQueen(i);
        }
        else if(chessPiecesString[i].charAt(1)=='n'){
            checkNight(i);
        }
        else if(chessPiecesString[i].charAt(0)=='b'){
            checkBPawn(i);
        }
        else{
            checkWPawn(i);
        }

        for(let i=0;i<64;i++){
            if(temp[i]==1||temp[i]==2) continue;
            temp[i]=valid[i];
        }
    }
    
    for(let i=0;i<64;i++){
        if(temp[i]==1||temp[i]==2){
            isCheckMate=false;
            break;
        }
    }

    if(isCheckMate==true){
        if(chance=='white'){
            setTimeout(function(){
                alert('Black Wins!');
            },100);
        }
        else{
            setTimeout(function(){
                alert('White Wins!');
            },100);
        }
    }

    valid=[];
}
