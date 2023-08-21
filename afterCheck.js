function checkValidAfterCheck(){
        for(let i=0;i<64;i++){
                if((valid[i]==1||valid[i]==2)&&validAfterCheck[i]!==1) valid[i]=0;
        }
}