function checkmate(){
    let isCheckMate=true;

    if(chance=='white') checkKing(wKingPos);
    else checkKing(bKingPos);

    for(let i=0;i<64;i++){
        if(chessPiecesString[i]==''||chessPiecesString[i].charAt(0)!==chance.charAt(0)) continue;

        if(chessPiecesString[i].charAt(1)=='k') continue;

        else if(chessPiecesString[i].charAt(1)=='b'){
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
    }
    
    for(let i=0;i<64;i++){
        if(valid[i]==1||valid[i]==2){
            isCheckMate=false;
            break;
        }
    }

    if(isCheckMate==true){
        if(chance=='white'){
            setTimeout(function(){
                alert('Black wins!');
            },100);
        }
        else{
            setTimeout(function(){
                alert('White wins!');
            },100);
        }
    }

    valid=[];
}
