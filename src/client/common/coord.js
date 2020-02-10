function matrizBackPositions(n){
    for(let i=0; i<11; i++){
        for(let j=0; j<2; j++){
            if(j == 0){
                matrizes[n].presetPositions.matrixBackTeamA[i][j] = $("#b"+(i+1))[0].style.left;
                matrizes[n].presetPositions.matrixBackTeamB[i][j] = $("#r"+(i+1))[0].style.left;
            } 
            else if(j == 1){
                matrizes[n].presetPositions.matrixBackTeamA[i][j] = $("#b"+(i+1))[0].style.top;
                matrizes[n].presetPositions.matrixBackTeamB[i][j] = $("#r"+(i+1))[0].style.top;
            }    
        }
    }
    console.log(matrizes[n]);
}

function matrizGoPositions(n){
    for(let i=0; i<11; i++){
        for(let j=0; j<2; j++){
            if(j == 0){
                matrizes[n].presetPositions.matrixGoTeamA[i][j] = $("#b"+(i+1))[0].style.left;
                matrizes[n].presetPositions.matrixGoTeamB[i][j] = $("#r"+(i+1))[0].style.left;
            } 
            else if(j == 1){
                matrizes[n].presetPositions.matrixGoTeamA[i][j] = $("#b"+(i+1))[0].style.top;
                matrizes[n].presetPositions.matrixGoTeamB[i][j] = $("#r"+(i+1))[0].style.top;
            }    
        }
    }
    console.log(matrizes[n]);
}