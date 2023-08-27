function checkmate(){
    let isCheckMate=true;

    for(let i=0;i<63;i++){
        if(chessPiecesString[i]==''||chessPiecesString[i].charAt(0)!==chance.charAt(0)) continue;

        if(chessPiecesString[i].charAt(1)=='k'){
            checkKing(i);
        }
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
            console.log('black wins!');
        }
        else{
            console.log('white wins!');
        }
    }
}
