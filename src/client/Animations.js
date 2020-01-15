let toggleA = true, toggleB = false;
// VISIBILIDADE DOS TIMES
let returnPositions = new TimelineLite();
let goPositions = new TimelineLite();
$("#black").click(toggleTeamA);

$("#red").click(toggleTeamB);

function ReturnPosition(n){
    returnPositions.to($("#b1"), 0.5, {left: matrizes[n].presetPositions.matrixBackTeamA[0][0], top: matrizes[n].presetPositions.matrixBackTeamA[0][1]})
        .to($("#b2"), 0.5, {left: matrizes[n].presetPositions.matrixBackTeamA[1][0], top: matrizes[n].presetPositions.matrixBackTeamA[1][1]}, "-=0.5")
        .to($("#b3"), 0.5, {left: matrizes[n].presetPositions.matrixBackTeamA[2][0], top: matrizes[n].presetPositions.matrixBackTeamA[2][1]}, "-=0.5")
        .to($("#b4"), 0.5, {left: matrizes[n].presetPositions.matrixBackTeamA[3][0], top: matrizes[n].presetPositions.matrixBackTeamA[3][1]}, "-=0.5")
        .to($("#b5"), 0.5, {left: matrizes[n].presetPositions.matrixBackTeamA[4][0], top: matrizes[n].presetPositions.matrixBackTeamA[4][1]}, "-=0.5")
        .to($("#b6"), 0.5, {left: matrizes[n].presetPositions.matrixBackTeamA[5][0], top: matrizes[n].presetPositions.matrixBackTeamA[5][1]}, "-=0.5")
        .to($("#b7"), 0.5, {left: matrizes[n].presetPositions.matrixBackTeamA[6][0], top: matrizes[n].presetPositions.matrixBackTeamA[6][1]}, "-=0.5")
        .to($("#b8"), 0.5, {left: matrizes[n].presetPositions.matrixBackTeamA[7][0], top: matrizes[n].presetPositions.matrixBackTeamA[7][1]}, "-=0.5")
        .to($("#b9"), 0.5, {left: matrizes[n].presetPositions.matrixBackTeamA[8][0], top: matrizes[n].presetPositions.matrixBackTeamA[8][1]}, "-=0.5")
        .to($("#b10"), 0.5, {left: matrizes[n].presetPositions.matrixBackTeamA[9][0], top: matrizes[n].presetPositions.matrixBackTeamA[9][1]}, "-=0.5")
        .to($("#b11"), 0.5, {left: matrizes[n].presetPositions.matrixBackTeamA[10][0], top: matrizes[n].presetPositions.matrixBackTeamA[10][1]}, "-=0.5")

        .to($("#r1"), 0.5, {left: matrizes[n].presetPositions.matrixBackTeamB[0][0], top: matrizes[n].presetPositions.matrixBackTeamB[0][1]})
        .to($("#r2"), 0.5, {left: matrizes[n].presetPositions.matrixBackTeamB[1][0], top: matrizes[n].presetPositions.matrixBackTeamB[1][1]}, "-=0.5")
        .to($("#r3"), 0.5, {left: matrizes[n].presetPositions.matrixBackTeamB[2][0], top: matrizes[n].presetPositions.matrixBackTeamB[2][1]}, "-=0.5")
        .to($("#r4"), 0.5, {left: matrizes[n].presetPositions.matrixBackTeamB[3][0], top: matrizes[n].presetPositions.matrixBackTeamB[3][1]}, "-=0.5")
        .to($("#r5"), 0.5, {left: matrizes[n].presetPositions.matrixBackTeamB[4][0], top: matrizes[n].presetPositions.matrixBackTeamB[4][1]}, "-=0.5")
        .to($("#r6"), 0.5, {left: matrizes[n].presetPositions.matrixBackTeamB[5][0], top: matrizes[n].presetPositions.matrixBackTeamB[5][1]}, "-=0.5")
        .to($("#r7"), 0.5, {left: matrizes[n].presetPositions.matrixBackTeamB[6][0], top: matrizes[n].presetPositions.matrixBackTeamB[6][1]}, "-=0.5")
        .to($("#r8"), 0.5, {left: matrizes[n].presetPositions.matrixBackTeamB[7][0], top: matrizes[n].presetPositions.matrixBackTeamA[7][1]}, "-=0.5")
        .to($("#r9"), 0.5, {left: matrizes[n].presetPositions.matrixBackTeamB[8][0], top: matrizes[n].presetPositions.matrixBackTeamB[8][1]}, "-=0.5")
        .to($("#r10"), 0.5, {left: matrizes[n].presetPositions.matrixBackTeamB[9][0], top: matrizes[n].presetPositions.matrixBackTeamB[9][1]}, "-=0.5")
        .to($("#r11"), 0.5, {left: matrizes[n].presetPositions.matrixBackTeamB[10][0], top: matrizes[n].presetPositions.matrixBackTeamB[10][1]}, "-=0.5")
}

function GoPosition(n){
    goPositions.to($("#b1"), 1.5, {left: matrizes[n].presetPositions.matrixGoTeamA[0][0], top: matrizes[n].presetPositions.matrixGoTeamA[0][1]})
        .to($("#b2"), 1.5, {left: matrizes[n].presetPositions.matrixGoTeamA[1][0], top: matrizes[n].presetPositions.matrixGoTeamA[1][1]}, "-=1.5")
        .to($("#b3"), 1.5, {left: matrizes[n].presetPositions.matrixGoTeamA[2][0], top: matrizes[n].presetPositions.matrixGoTeamA[2][1]}, "-=1.5")
        .to($("#b4"), 1.5, {left: matrizes[n].presetPositions.matrixGoTeamA[3][0], top: matrizes[n].presetPositions.matrixGoTeamA[3][1]}, "-=1.5")
        .to($("#b5"), 1.5, {left: matrizes[n].presetPositions.matrixGoTeamA[4][0], top: matrizes[n].presetPositions.matrixGoTeamA[4][1]}, "-=1.5")
        .to($("#b6"), 1.5, {left: matrizes[n].presetPositions.matrixGoTeamA[5][0], top: matrizes[n].presetPositions.matrixGoTeamA[5][1]}, "-=1.5")
        .to($("#b7"), 1.5, {left: matrizes[n].presetPositions.matrixGoTeamA[6][0], top: matrizes[n].presetPositions.matrixGoTeamA[6][1]}, "-=1.5")
        .to($("#b8"), 1.5, {left: matrizes[n].presetPositions.matrixGoTeamA[7][0], top: matrizes[n].presetPositions.matrixGoTeamA[7][1]}, "-=1.5")
        .to($("#b9"), 1.5, {left: matrizes[n].presetPositions.matrixGoTeamA[8][0], top: matrizes[n].presetPositions.matrixGoTeamA[8][1]}, "-=1.5")
        .to($("#b10"), 1.5, {left: matrizes[n].presetPositions.matrixGoTeamA[9][0], top: matrizes[n].presetPositions.matrixGoTeamA[9][1]}, "-=1.5")
        .to($("#b11"), 1.5, {left: matrizes[n].presetPositions.matrixGoTeamA[10][0], top: matrizes[n].presetPositions.matrixGoTeamA[10][1]}, "-=1.5")

        .to($("#r1"), 1.5, {left: matrizes[n].presetPositions.matrixGoTeamB[1][0], top: matrizes[n].presetPositions.matrixGoTeamB[1][1]}, "-=1.5")
        .to($("#r2"), 1.5, {left: matrizes[n].presetPositions.matrixGoTeamB[1][0], top: matrizes[n].presetPositions.matrixGoTeamB[1][1]}, "-=1.5")
        .to($("#r3"), 1.5, {left: matrizes[n].presetPositions.matrixGoTeamB[2][0], top: matrizes[n].presetPositions.matrixGoTeamB[2][1]}, "-=1.5")
        .to($("#r4"), 1.5, {left: matrizes[n].presetPositions.matrixGoTeamB[3][0], top: matrizes[n].presetPositions.matrixGoTeamB[3][1]}, "-=1.5")
        .to($("#r5"), 1.5, {left: matrizes[n].presetPositions.matrixGoTeamB[4][0], top: matrizes[n].presetPositions.matrixGoTeamB[4][1]}, "-=1.5")
        .to($("#r6"), 1.5, {left: matrizes[n].presetPositions.matrixGoTeamB[5][0], top: matrizes[n].presetPositions.matrixGoTeamB[5][1]}, "-=1.5")
        .to($("#r7"), 1.5, {left: matrizes[n].presetPositions.matrixGoTeamB[6][0], top: matrizes[n].presetPositions.matrixGoTeamB[6][1]}, "-=1.5")
        .to($("#r8"), 1.5, {left: matrizes[n].presetPositions.matrixGoTeamB[7][0], top: matrizes[n].presetPositions.matrixGoTeamB[7][1]}, "-=1.5")
        .to($("#r9"), 1.5, {left: matrizes[n].presetPositions.matrixGoTeamB[8][0], top: matrizes[n].presetPositions.matrixGoTeamB[8][1]}, "-=1.5")
        .to($("#r10"), 1.5, {left: matrizes[n].presetPositions.matrixGoTeamB[9][0], top: matrizes[n].presetPositions.matrixGoTeamB[9][1]}, "-=1.5")
        .to($("#r11"), 1.5, {left: matrizes[n].presetPositions.matrixGoTeamB[10][0], top: matrizes[n].presetPositions.matrixGoTeamB[10][1]}, "-=1.5")
}


function toggleTeamA(){
    if(!toggleA){
        $("#TimeA").css('visibility', 'visible');
        toggleA = true;
    }   
    else{
        $("#TimeA").css('visibility', 'hidden');
        toggleA = false;
    }
    
}

function toggleTeamB(){
    if(!toggleB){
        $("#TimeB").css('visibility', 'visible');
        toggleB = true;
    }
    else{
        $("#TimeB").css('visibility', 'hidden');  
        toggleB = false;
    }  
} 