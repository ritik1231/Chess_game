function checkmate(){
    let isCheckMate=true;
    let temp=[];

    for(let i=0;i<63;i++){
        if(chessPiecesString[i]==''||chessPiecesString[i].charAt(0)!==chance.charAt(0)) continue;

        if(chessPiecesString[i].charAt(1)=='k'){
            checkKing(i);
            for(let j=0;j<64;j++) temp[j]=valid[j];
        }
        else if(chessPiecesString[i].charAt(1)=='b'){
            checkBishop(i);
            for(let j=0;j<64;j++) temp[j]=valid[j];
        }
        else if(chessPiecesString[i].charAt(1)=='r'){
            checkRook(i);
            for(let j=0;j<64;j++) temp[j]=valid[j];
        }
        else if(chessPiecesString[i].charAt(1)=='q'){
            checkQueen(i);
            for(let j=0;j<64;j++) temp[j]=valid[j];
        }
        else if(chessPiecesString[i].charAt(1)=='n'){
            checkNight(i);
            for(let j=0;j<64;j++) temp[j]=valid[j];
        }
        else if(chessPiecesString[i].charAt(0)=='b'){
            checkBPawn(i);
            for(let j=0;j<64;j++) temp[j]=valid[j];
        }
        else{
            checkWPawn(i);
            for(let j=0;j<64;j++) temp[j]=valid[j];
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
            console.log('white wins!');
        }
        else{
            console.log('white wins!');
        }
    }
}