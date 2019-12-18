let toggleA = true, toggleB = false;

function ReturnPosition()
{
    returnPositions.to($("#b1"), 0.5, {left: matrizBBack1[0][0], top: matrizBBack1[0][1]})
        .to($("#b2"), 0.5, {left: matrizBBack1[1][0], top: matrizBBack1[1][1]}, "-=0.5")
        .to($("#b3"), 0.5, {left: matrizBBack1[2][0], top: matrizBBack1[2][1]}, "-=0.5")
        .to($("#b4"), 0.5, {left: matrizBBack1[3][0], top: matrizBBack1[3][1]}, "-=0.5")
        .to($("#b5"), 0.5, {left: matrizBBack1[4][0], top: matrizBBack1[4][1]}, "-=0.5")
        .to($("#b6"), 0.5, {left: matrizBBack1[5][0], top: matrizBBack1[5][1]}, "-=0.5")
        .to($("#b7"), 0.5, {left: matrizBBack1[6][0], top: matrizBBack1[6][1]}, "-=0.5")
        .to($("#b8"), 0.5, {left: matrizBBack1[7][0], top: matrizBBack1[7][1]}, "-=0.5")
        .to($("#b9"), 0.5, {left: matrizBBack1[8][0], top: matrizBBack1[8][1]}, "-=0.5")
        .to($("#b10"), 0.5, {left: matrizBBack1[9][0], top: matrizBBack1[9][1]}, "-=0.5")
        .to($("#b11"), 0.5, {left: matrizBBack1[10][0], top: matrizBBack1[10][1]}, "-=0.5")
// -------------------------------------------------------------------------------------------- //
        .to($("#r1"), 0.5, {left: matrizRBack1[0][0], top: matrizRBack1[0][1]}, "-=0.5")
        .to($("#r2"), 0.5, {left: matrizRBack1[1][0], top: matrizRBack1[1][1]}, "-=0.5")
        .to($("#r3"), 0.5, {left: matrizRBack1[2][0], top: matrizRBack1[2][1]}, "-=0.5")
        .to($("#r4"), 0.5, {left: matrizRBack1[3][0], top: matrizRBack1[3][1]}, "-=0.5")
        .to($("#r5"), 0.5, {left: matrizRBack1[4][0], top: matrizRBack1[4][1]}, "-=0.5")
        .to($("#r6"), 0.5, {left: matrizRBack1[5][0], top: matrizRBack1[5][1]}, "-=0.5")
        .to($("#r7"), 0.5, {left: matrizRBack1[6][0], top: matrizRBack1[6][1]}, "-=0.5")
        .to($("#r8"), 0.5, {left: matrizRBack1[7][0], top: matrizRBack1[7][1]}, "-=0.5")
        .to($("#r9"), 0.5, {left: matrizRBack1[8][0], top: matrizRBack1[8][1]}, "-=0.5")
        .to($("#r10"), 0.5, {left: matrizRBack1[9][0], top: matrizRBack1[9][1]}, "-=0.5")
        .to($("#r11"), 0.5, {left: matrizRBack1[10][0], top: matrizRBack1[10][1]}, "-=0.5");
}

function GoPosition()
{
    goPositions.to($("#b1"), 1.5, {left: matrizBGo1[0][0], top: matrizBGo1[0][1]})
        .to($("#b2"), 1.5, {left: matrizBGo1[1][0], top: matrizBGo1[1][1]}, "-=1.5")
        .to($("#b3"), 1.5, {left: matrizBGo1[2][0], top: matrizBGo1[2][1]}, "-=1.5")
        .to($("#b4"), 1.5, {left: matrizBGo1[3][0], top: matrizBGo1[3][1]}, "-=1.5")
        .to($("#b5"), 1.5, {left: matrizBGo1[4][0], top: matrizBGo1[4][1]}, "-=1.5")
        .to($("#b6"), 1.5, {left: matrizBGo1[5][0], top: matrizBGo1[5][1]}, "-=1.5")
        .to($("#b7"), 1.5, {left: matrizBGo1[6][0], top: matrizBGo1[6][1]}, "-=1.5")
        .to($("#b8"), 1.5, {left: matrizBGo1[7][0], top: matrizBGo1[7][1]}, "-=1.5")
        .to($("#b9"), 1.5, {left: matrizBGo1[8][0], top: matrizBGo1[8][1]}, "-=1.5")
        .to($("#b10"), 1.5, {left: matrizBGo1[9][0], top: matrizBGo1[9][1]}, "-=1.5")
        .to($("#b11"), 1.5, {left: matrizBGo1[10][0], top: matrizBGo1[10][1]}, "-=1.5")
// ---------------------------------------------------------------------------------- //
        .to($("#r1"), 1.5, {left: matrizRGo1[0][0], top: matrizRGo1[0][1]}, "-=1.5")
        .to($("#r2"), 1.5, {left: matrizRGo1[1][0], top: matrizRGo1[1][1]}, "-=1.5")
        .to($("#r3"), 1.5, {left: matrizRGo1[2][0], top: matrizRGo1[2][1]}, "-=1.5")
        .to($("#r4"), 1.5, {left: matrizRGo1[3][0], top: matrizRGo1[3][1]}, "-=1.5")
        .to($("#r5"), 1.5, {left: matrizRGo1[4][0], top: matrizRGo1[4][1]}, "-=1.5")
        .to($("#r6"), 1.5, {left: matrizRGo1[5][0], top: matrizRGo1[5][1]}, "-=1.5")
        .to($("#r7"), 1.5, {left: matrizRGo1[6][0], top: matrizRGo1[6][1]}, "-=1.5")
        .to($("#r8"), 1.5, {left: matrizRGo1[7][0], top: matrizRGo1[7][1]}, "-=1.5")
        .to($("#r9"), 1.5, {left: matrizRGo1[8][0], top: matrizRGo1[8][1]}, "-=1.5")
        .to($("#r10"), 1.5, {left: matrizRGo1[9][0], top: matrizRGo1[9][1]}, "-=1.5")
        .to($("#r11"), 1.5, {left: matrizRGo1[10][0], top: matrizRGo1[10][1]}, "-=1.5");
}

function ReturnPosition2()
{
    returnPositions2.to($("#b1"), 0.5, {left: matrizBBack2[0][0], top: matrizBBack2[0][1]})
        .to($("#b2"), 0.5, {left: matrizBBack2[1][0], top: matrizBBack2[1][1]}, "-=0.5")
        .to($("#b3"), 0.5, {left: matrizBBack2[2][0], top: matrizBBack2[2][1]}, "-=0.5")
        .to($("#b4"), 0.5, {left: matrizBBack2[3][0], top: matrizBBack2[3][1]}, "-=0.5")
        .to($("#b5"), 0.5, {left: matrizBBack2[4][0], top: matrizBBack2[4][1]}, "-=0.5")
        .to($("#b6"), 0.5, {left: matrizBBack2[5][0], top: matrizBBack2[5][1]}, "-=0.5")
        .to($("#b7"), 0.5, {left: matrizBBack2[6][0], top: matrizBBack2[6][1]}, "-=0.5")
        .to($("#b8"), 0.5, {left: matrizBBack2[7][0], top: matrizBBack2[7][1]}, "-=0.5")
        .to($("#b9"), 0.5, {left: matrizBBack2[8][0], top: matrizBBack2[8][1]}, "-=0.5")
        .to($("#b10"), 0.5, {left: matrizBBack2[9][0], top: matrizBBack2[9][1]}, "-=0.5")
        .to($("#b11"), 0.5, {left: matrizBBack2[10][0], top: matrizBBack2[10][1]}, "-=0.5")
// -------------------------------------------------------------------------------------------- //
        .to($("#r1"), 0.5, {left: matrizRBack2[0][0], top: matrizRBack2[0][1]}, "-=0.5")
        .to($("#r2"), 0.5, {left: matrizRBack2[1][0], top: matrizRBack2[1][1]}, "-=0.5")
        .to($("#r3"), 0.5, {left: matrizRBack2[2][0], top: matrizRBack2[2][1]}, "-=0.5")
        .to($("#r4"), 0.5, {left: matrizRBack2[3][0], top: matrizRBack2[3][1]}, "-=0.5")
        .to($("#r5"), 0.5, {left: matrizRBack2[4][0], top: matrizRBack2[4][1]}, "-=0.5")
        .to($("#r6"), 0.5, {left: matrizRBack2[5][0], top: matrizRBack2[5][1]}, "-=0.5")
        .to($("#r7"), 0.5, {left: matrizRBack2[6][0], top: matrizRBack2[6][1]}, "-=0.5")
        .to($("#r8"), 0.5, {left: matrizRBack2[7][0], top: matrizRBack2[7][1]}, "-=0.5")
        .to($("#r9"), 0.5, {left: matrizRBack2[8][0], top: matrizRBack2[8][1]}, "-=0.5")
        .to($("#r10"), 0.5, {left: matrizRBack2[9][0], top: matrizRBack2[9][1]}, "-=0.5")
        .to($("#r11"), 0.5, {left: matrizRBack2[10][0], top: matrizRBack2[10][1]}, "-=0.5");
}

function GoPosition2()
{
    goPositions2.to($("#b1"), 1.5, {left: matrizBGo2[0][0], top: matrizBGo2[0][1]})
        .to($("#b2"), 1.5, {left: matrizBGo2[1][0], top: matrizBGo2[1][1]}, "-=1.5")
        .to($("#b3"), 1.5, {left: matrizBGo2[2][0], top: matrizBGo2[2][1]}, "-=1.5")
        .to($("#b4"), 1.5, {left: matrizBGo2[3][0], top: matrizBGo2[3][1]}, "-=1.5")
        .to($("#b5"), 1.5, {left: matrizBGo2[4][0], top: matrizBGo2[4][1]}, "-=1.5")
        .to($("#b6"), 1.5, {left: matrizBGo2[5][0], top: matrizBGo2[5][1]}, "-=1.5")
        .to($("#b7"), 1.5, {left: matrizBGo2[6][0], top: matrizBGo2[6][1]}, "-=1.5")
        .to($("#b8"), 1.5, {left: matrizBGo2[7][0], top: matrizBGo2[7][1]}, "-=1.5")
        .to($("#b9"), 1.5, {left: matrizBGo2[8][0], top: matrizBGo2[8][1]}, "-=1.5")
        .to($("#b10"), 1.5, {left: matrizBGo2[9][0], top: matrizBGo2[9][1]}, "-=1.5")
        .to($("#b11"), 1.5, {left: matrizBGo2[10][0], top: matrizBGo2[10][1]}, "-=1.5")
// -------------------------------------------------------------------------------------------- //
        .to($("#r1"), 1.5, {left: matrizRGo2[0][0], top: matrizRGo2[0][1]}, "-=1.5")
        .to($("#r2"), 1.5, {left: matrizRGo2[1][0], top: matrizRGo2[1][1]}, "-=1.5")
        .to($("#r3"), 1.5, {left: matrizRGo2[2][0], top: matrizRGo2[2][1]}, "-=1.5")
        .to($("#r4"), 1.5, {left: matrizRGo2[3][0], top: matrizRGo2[3][1]}, "-=1.5")
        .to($("#r5"), 1.5, {left: matrizRGo2[4][0], top: matrizRGo2[4][1]}, "-=1.5")
        .to($("#r6"), 1.5, {left: matrizRGo2[5][0], top: matrizRGo2[5][1]}, "-=1.5")
        .to($("#r7"), 1.5, {left: matrizRGo2[6][0], top: matrizRGo2[6][1]}, "-=1.5")
        .to($("#r8"), 1.5, {left: matrizRGo2[7][0], top: matrizRGo2[7][1]}, "-=1.5")
        .to($("#r9"), 1.5, {left: matrizRGo2[8][0], top: matrizRGo2[8][1]}, "-=1.5")
        .to($("#r10"), 1.5, {left: matrizRGo2[9][0], top: matrizRGo2[9][1]}, "-=1.5")
        .to($("#r11"), 1.5, {left: matrizRGo2[10][0], top: matrizRGo2[10][1]}, "-=1.5");
}

function toggleTeamA()
{
    if(toggleA == false)
    {
        $("#TimeA").css('visibility', 'visible');
        toggleA = true;
    }   
    else
    {
        $("#TimeA").css('visibility', 'hidden');
        toggleA = false;
    }
    
}

function toggleTeamB()
{
    if(toggleB == false)
    {
        $("#TimeB").css('visibility', 'visible');
        toggleB = true;
    }
    else
    {
        $("#TimeB").css('visibility', 'hidden');  
        toggleB = false;
    }  
} 