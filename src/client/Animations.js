let toggleA = true, toggleB = false;
// VISIBILIDADE DOS TIMES
let returnPositions = new TimelineLite(), returnPositions2 = new TimelineLite(),
    returnPositions3 = new TimelineLite(), returnPositions4 = new TimelineLite(),
    returnPositions5 = new TimelineLite(), returnPositions6 = new TimelineLite();
let goPositions = new TimelineLite(), goPositions2 = new TimelineLite(),
    goPositions3 = new TimelineLite(), goPositions4 = new TimelineLite(),
    goPositions5 = new TimelineLite(), goPositions6 = new TimelineLite();
$("#black").click(toggleTeamA);

$("#red").click(toggleTeamB);

function ReturnPosition()
{
    returnPositions.to($("#b1"), 0.5, {left: matrizes[0].presetPositions.matrixBackTeamA[0][0], top: matrizes[0].presetPositions.matrixBackTeamA[0][1]})
        .to($("#b2"), 0.5, {left: matrizes[0].presetPositions.matrixBackTeamA[1][0], top: matrizes[0].presetPositions.matrixBackTeamA[1][1]}, "-=0.5")
        .to($("#b3"), 0.5, {left: matrizes[0].presetPositions.matrixBackTeamA[2][0], top: matrizes[0].presetPositions.matrixBackTeamA[2][1]}, "-=0.5")
        .to($("#b4"), 0.5, {left: matrizes[0].presetPositions.matrixBackTeamA[3][0], top: matrizes[0].presetPositions.matrixBackTeamA[3][1]}, "-=0.5")
        .to($("#b5"), 0.5, {left: matrizes[0].presetPositions.matrixBackTeamA[4][0], top: matrizes[0].presetPositions.matrixBackTeamA[4][1]}, "-=0.5")
        .to($("#b6"), 0.5, {left: matrizes[0].presetPositions.matrixBackTeamA[5][0], top: matrizes[0].presetPositions.matrixBackTeamA[5][1]}, "-=0.5")
        .to($("#b7"), 0.5, {left: matrizes[0].presetPositions.matrixBackTeamA[6][0], top: matrizes[0].presetPositions.matrixBackTeamA[6][1]}, "-=0.5")
        .to($("#b8"), 0.5, {left: matrizes[0].presetPositions.matrixBackTeamA[7][0], top: matrizes[0].presetPositions.matrixBackTeamA[7][1]}, "-=0.5")
        .to($("#b9"), 0.5, {left: matrizes[0].presetPositions.matrixBackTeamA[8][0], top: matrizes[0].presetPositions.matrixBackTeamA[8][1]}, "-=0.5")
        .to($("#b10"), 0.5, {left: matrizes[0].presetPositions.matrixBackTeamA[9][0], top: matrizes[0].presetPositions.matrixBackTeamA[9][1]}, "-=0.5")
        .to($("#b11"), 0.5, {left: matrizes[0].presetPositions.matrixBackTeamA[10][0], top: matrizes[0].presetPositions.matrixBackTeamA[10][1]}, "-=0.5")

        .to($("#r1"), 0.5, {left: matrizes[0].presetPositions.matrixBackTeamB[0][0], top: matrizes[0].presetPositions.matrixBackTeamB[0][1]})
        .to($("#r2"), 0.5, {left: matrizes[0].presetPositions.matrixBackTeamB[1][0], top: matrizes[0].presetPositions.matrixBackTeamB[1][1]}, "-=0.5")
        .to($("#r3"), 0.5, {left: matrizes[0].presetPositions.matrixBackTeamB[2][0], top: matrizes[0].presetPositions.matrixBackTeamB[2][1]}, "-=0.5")
        .to($("#r4"), 0.5, {left: matrizes[0].presetPositions.matrixBackTeamB[3][0], top: matrizes[0].presetPositions.matrixBackTeamB[3][1]}, "-=0.5")
        .to($("#r5"), 0.5, {left: matrizes[0].presetPositions.matrixBackTeamB[4][0], top: matrizes[0].presetPositions.matrixBackTeamB[4][1]}, "-=0.5")
        .to($("#r6"), 0.5, {left: matrizes[0].presetPositions.matrixBackTeamB[5][0], top: matrizes[0].presetPositions.matrixBackTeamB[5][1]}, "-=0.5")
        .to($("#r7"), 0.5, {left: matrizes[0].presetPositions.matrixBackTeamB[6][0], top: matrizes[0].presetPositions.matrixBackTeamB[6][1]}, "-=0.5")
        .to($("#r8"), 0.5, {left: matrizes[0].presetPositions.matrixBackTeamB[7][0], top: matrizes[0].presetPositions.matrixBackTeamA[7][1]}, "-=0.5")
        .to($("#r9"), 0.5, {left: matrizes[0].presetPositions.matrixBackTeamB[8][0], top: matrizes[0].presetPositions.matrixBackTeamB[8][1]}, "-=0.5")
        .to($("#r10"), 0.5, {left: matrizes[0].presetPositions.matrixBackTeamB[9][0], top: matrizes[0].presetPositions.matrixBackTeamB[9][1]}, "-=0.5")
        .to($("#r11"), 0.5, {left: matrizes[0].presetPositions.matrixBackTeamB[10][0], top: matrizes[0].presetPositions.matrixBackTeamB[10][1]}, "-=0.5")
}

function GoPosition()
{
    goPositions.to($("#b1"), 1.5, {left: matrizes[0].presetPositions.matrixGoTeamA[0][0], top: matrizes[0].presetPositions.matrixGoTeamA[0][1]})
        .to($("#b2"), 1.5, {left: matrizes[0].presetPositions.matrixGoTeamA[1][0], top: matrizes[0].presetPositions.matrixGoTeamA[1][1]}, "-=1.5")
        .to($("#b3"), 1.5, {left: matrizes[0].presetPositions.matrixGoTeamA[2][0], top: matrizes[0].presetPositions.matrixGoTeamA[2][1]}, "-=1.5")
        .to($("#b4"), 1.5, {left: matrizes[0].presetPositions.matrixGoTeamA[3][0], top: matrizes[0].presetPositions.matrixGoTeamA[3][1]}, "-=1.5")
        .to($("#b5"), 1.5, {left: matrizes[0].presetPositions.matrixGoTeamA[4][0], top: matrizes[0].presetPositions.matrixGoTeamA[4][1]}, "-=1.5")
        .to($("#b6"), 1.5, {left: matrizes[0].presetPositions.matrixGoTeamA[5][0], top: matrizes[0].presetPositions.matrixGoTeamA[5][1]}, "-=1.5")
        .to($("#b7"), 1.5, {left: matrizes[0].presetPositions.matrixGoTeamA[6][0], top: matrizes[0].presetPositions.matrixGoTeamA[6][1]}, "-=1.5")
        .to($("#b8"), 1.5, {left: matrizes[0].presetPositions.matrixGoTeamA[7][0], top: matrizes[0].presetPositions.matrixGoTeamA[7][1]}, "-=1.5")
        .to($("#b9"), 1.5, {left: matrizes[0].presetPositions.matrixGoTeamA[8][0], top: matrizes[0].presetPositions.matrixGoTeamA[8][1]}, "-=1.5")
        .to($("#b10"), 1.5, {left: matrizes[0].presetPositions.matrixGoTeamA[9][0], top: matrizes[0].presetPositions.matrixGoTeamA[9][1]}, "-=1.5")
        .to($("#b11"), 1.5, {left: matrizes[0].presetPositions.matrixGoTeamA[10][0], top: matrizes[0].presetPositions.matrixGoTeamA[10][1]}, "-=1.5")

        .to($("#r1"), 1.5, {left: matrizes[0].presetPositions.matrixGoTeamB[1][0], top: matrizes[0].presetPositions.matrixGoTeamB[1][1]}, "-=1.5")
        .to($("#r2"), 1.5, {left: matrizes[0].presetPositions.matrixGoTeamB[1][0], top: matrizes[0].presetPositions.matrixGoTeamB[1][1]}, "-=1.5")
        .to($("#r3"), 1.5, {left: matrizes[0].presetPositions.matrixGoTeamB[2][0], top: matrizes[0].presetPositions.matrixGoTeamB[2][1]}, "-=1.5")
        .to($("#r4"), 1.5, {left: matrizes[0].presetPositions.matrixGoTeamB[3][0], top: matrizes[0].presetPositions.matrixGoTeamB[3][1]}, "-=1.5")
        .to($("#r5"), 1.5, {left: matrizes[0].presetPositions.matrixGoTeamB[4][0], top: matrizes[0].presetPositions.matrixGoTeamB[4][1]}, "-=1.5")
        .to($("#r6"), 1.5, {left: matrizes[0].presetPositions.matrixGoTeamB[5][0], top: matrizes[0].presetPositions.matrixGoTeamB[5][1]}, "-=1.5")
        .to($("#r7"), 1.5, {left: matrizes[0].presetPositions.matrixGoTeamB[6][0], top: matrizes[0].presetPositions.matrixGoTeamB[6][1]}, "-=1.5")
        .to($("#r8"), 1.5, {left: matrizes[0].presetPositions.matrixGoTeamB[7][0], top: matrizes[0].presetPositions.matrixGoTeamB[7][1]}, "-=1.5")
        .to($("#r9"), 1.5, {left: matrizes[0].presetPositions.matrixGoTeamB[8][0], top: matrizes[0].presetPositions.matrixGoTeamB[8][1]}, "-=1.5")
        .to($("#r10"), 1.5, {left: matrizes[0].presetPositions.matrixGoTeamB[9][0], top: matrizes[0].presetPositions.matrixGoTeamB[9][1]}, "-=1.5")
        .to($("#r11"), 1.5, {left: matrizes[0].presetPositions.matrixGoTeamB[10][0], top: matrizes[0].presetPositions.matrixGoTeamB[10][1]}, "-=1.5")
}

function ReturnPosition2()
{
    returnPositions2.to($("#b1"), 0.5, {left: matrizes[1].presetPositions.matrixBackTeamA[0][0], top: matrizes[1].presetPositions.matrixBackTeamA[0][1]})
        .to($("#b2"), 0.5, {left: matrizes[1].presetPositions.matrixBackTeamA[1][0], top: matrizes[1].presetPositions.matrixBackTeamA[1][1]}, "-=0.5")
        .to($("#b3"), 0.5, {left: matrizes[1].presetPositions.matrixBackTeamA[2][0], top: matrizes[1].presetPositions.matrixBackTeamA[2][1]}, "-=0.5")
        .to($("#b4"), 0.5, {left: matrizes[1].presetPositions.matrixBackTeamA[3][0], top: matrizes[1].presetPositions.matrixBackTeamA[3][1]}, "-=0.5")
        .to($("#b5"), 0.5, {left: matrizes[1].presetPositions.matrixBackTeamA[4][0], top: matrizes[1].presetPositions.matrixBackTeamA[4][1]}, "-=0.5")
        .to($("#b6"), 0.5, {left: matrizes[1].presetPositions.matrixBackTeamA[5][0], top: matrizes[1].presetPositions.matrixBackTeamA[5][1]}, "-=0.5")
        .to($("#b7"), 0.5, {left: matrizes[1].presetPositions.matrixBackTeamA[6][0], top: matrizes[1].presetPositions.matrixBackTeamA[6][1]}, "-=0.5")
        .to($("#b8"), 0.5, {left: matrizes[1].presetPositions.matrixBackTeamA[7][0], top: matrizes[1].presetPositions.matrixBackTeamA[7][1]}, "-=0.5")
        .to($("#b9"), 0.5, {left: matrizes[1].presetPositions.matrixBackTeamA[8][0], top: matrizes[1].presetPositions.matrixBackTeamA[8][1]}, "-=0.5")
        .to($("#b10"), 0.5, {left: matrizes[1].presetPositions.matrixBackTeamA[9][0], top: matrizes[1].presetPositions.matrixBackTeamA[9][1]}, "-=0.5")
        .to($("#b11"), 0.5, {left: matrizes[1].presetPositions.matrixBackTeamA[10][0], top: matrizes[1].presetPositions.matrixBackTeamA[10][1]}, "-=0.5")

        .to($("#r1"), 0.5, {left: matrizes[1].presetPositions.matrixBackTeamB[0][0], top: matrizes[1].presetPositions.matrixBackTeamB[0][1]})
        .to($("#r2"), 0.5, {left: matrizes[1].presetPositions.matrixBackTeamB[1][0], top: matrizes[1].presetPositions.matrixBackTeamB[1][1]}, "-=0.5")
        .to($("#r3"), 0.5, {left: matrizes[1].presetPositions.matrixBackTeamB[2][0], top: matrizes[1].presetPositions.matrixBackTeamB[2][1]}, "-=0.5")
        .to($("#r4"), 0.5, {left: matrizes[1].presetPositions.matrixBackTeamB[3][0], top: matrizes[1].presetPositions.matrixBackTeamB[3][1]}, "-=0.5")
        .to($("#r5"), 0.5, {left: matrizes[1].presetPositions.matrixBackTeamB[4][0], top: matrizes[1].presetPositions.matrixBackTeamB[4][1]}, "-=0.5")
        .to($("#r6"), 0.5, {left: matrizes[1].presetPositions.matrixBackTeamB[5][0], top: matrizes[1].presetPositions.matrixBackTeamB[5][1]}, "-=0.5")
        .to($("#r7"), 0.5, {left: matrizes[1].presetPositions.matrixBackTeamB[6][0], top: matrizes[1].presetPositions.matrixBackTeamB[6][1]}, "-=0.5")
        .to($("#r8"), 0.5, {left: matrizes[1].presetPositions.matrixBackTeamB[7][0], top: matrizes[1].presetPositions.matrixBackTeamA[7][1]}, "-=0.5")
        .to($("#r9"), 0.5, {left: matrizes[1].presetPositions.matrixBackTeamB[8][0], top: matrizes[1].presetPositions.matrixBackTeamB[8][1]}, "-=0.5")
        .to($("#r10"), 0.5, {left: matrizes[1].presetPositions.matrixBackTeamB[9][0], top: matrizes[1].presetPositions.matrixBackTeamB[9][1]}, "-=0.5")
        .to($("#r11"), 0.5, {left: matrizes[1].presetPositions.matrixBackTeamB[10][0], top: matrizes[1].presetPositions.matrixBackTeamB[10][1]}, "-=0.5")
}

function GoPosition2()
{
    goPositions2.to($("#b1"), 1.5, {left: matrizes[1].presetPositions.matrixGoTeamA[0][0], top: matrizes[1].presetPositions.matrixGoTeamA[0][1]})
        .to($("#b2"), 1.5, {left: matrizes[1].presetPositions.matrixGoTeamA[1][0], top: matrizes[1].presetPositions.matrixGoTeamA[1][1]}, "-=1.5")
        .to($("#b3"), 1.5, {left: matrizes[1].presetPositions.matrixGoTeamA[2][0], top: matrizes[1].presetPositions.matrixGoTeamA[2][1]}, "-=1.5")
        .to($("#b4"), 1.5, {left: matrizes[1].presetPositions.matrixGoTeamA[3][0], top: matrizes[1].presetPositions.matrixGoTeamA[3][1]}, "-=1.5")
        .to($("#b5"), 1.5, {left: matrizes[1].presetPositions.matrixGoTeamA[4][0], top: matrizes[1].presetPositions.matrixGoTeamA[4][1]}, "-=1.5")
        .to($("#b6"), 1.5, {left: matrizes[1].presetPositions.matrixGoTeamA[5][0], top: matrizes[1].presetPositions.matrixGoTeamA[5][1]}, "-=1.5")
        .to($("#b7"), 1.5, {left: matrizes[1].presetPositions.matrixGoTeamA[6][0], top: matrizes[1].presetPositions.matrixGoTeamA[6][1]}, "-=1.5")
        .to($("#b8"), 1.5, {left: matrizes[1].presetPositions.matrixGoTeamA[7][0], top: matrizes[1].presetPositions.matrixGoTeamA[7][1]}, "-=1.5")
        .to($("#b9"), 1.5, {left: matrizes[1].presetPositions.matrixGoTeamA[8][0], top: matrizes[1].presetPositions.matrixGoTeamA[8][1]}, "-=1.5")
        .to($("#b10"), 1.5, {left: matrizes[1].presetPositions.matrixGoTeamA[9][0], top: matrizes[1].presetPositions.matrixGoTeamA[9][1]}, "-=1.5")
        .to($("#b11"), 1.5, {left: matrizes[1].presetPositions.matrixGoTeamA[10][0], top: matrizes[1].presetPositions.matrixGoTeamA[10][1]}, "-=1.5")

        .to($("#r1"), 1.5, {left: matrizes[1].presetPositions.matrixGoTeamB[1][0], top: matrizes[1].presetPositions.matrixGoTeamB[1][1]}, "-=1.5")
        .to($("#r2"), 1.5, {left: matrizes[1].presetPositions.matrixGoTeamB[1][0], top: matrizes[1].presetPositions.matrixGoTeamB[1][1]}, "-=1.5")
        .to($("#r3"), 1.5, {left: matrizes[1].presetPositions.matrixGoTeamB[2][0], top: matrizes[1].presetPositions.matrixGoTeamB[2][1]}, "-=1.5")
        .to($("#r4"), 1.5, {left: matrizes[1].presetPositions.matrixGoTeamB[3][0], top: matrizes[1].presetPositions.matrixGoTeamB[3][1]}, "-=1.5")
        .to($("#r5"), 1.5, {left: matrizes[1].presetPositions.matrixGoTeamB[4][0], top: matrizes[1].presetPositions.matrixGoTeamB[4][1]}, "-=1.5")
        .to($("#r6"), 1.5, {left: matrizes[1].presetPositions.matrixGoTeamB[5][0], top: matrizes[1].presetPositions.matrixGoTeamB[5][1]}, "-=1.5")
        .to($("#r7"), 1.5, {left: matrizes[1].presetPositions.matrixGoTeamB[6][0], top: matrizes[1].presetPositions.matrixGoTeamB[6][1]}, "-=1.5")
        .to($("#r8"), 1.5, {left: matrizes[1].presetPositions.matrixGoTeamB[7][0], top: matrizes[1].presetPositions.matrixGoTeamB[7][1]}, "-=1.5")
        .to($("#r9"), 1.5, {left: matrizes[1].presetPositions.matrixGoTeamB[8][0], top: matrizes[1].presetPositions.matrixGoTeamB[8][1]}, "-=1.5")
        .to($("#r10"), 1.5, {left: matrizes[1].presetPositions.matrixGoTeamB[9][0], top: matrizes[1].presetPositions.matrixGoTeamB[9][1]}, "-=1.5")
        .to($("#r11"), 1.5, {left: matrizes[1].presetPositions.matrixGoTeamB[10][0], top: matrizes[1].presetPositions.matrixGoTeamB[10][1]}, "-=1.5")
}

function ReturnPosition3()
{
    returnPositions3.to($("#b1"), 0.5, {left: matrizes[2].presetPositions.matrixBackTeamA[0][0], top: matrizes[2].presetPositions.matrixBackTeamA[0][1]})
        .to($("#b2"), 0.5, {left: matrizes[2].presetPositions.matrixBackTeamA[1][0], top: matrizes[2].presetPositions.matrixBackTeamA[1][1]}, "-=0.5")
        .to($("#b3"), 0.5, {left: matrizes[2].presetPositions.matrixBackTeamA[2][0], top: matrizes[2].presetPositions.matrixBackTeamA[2][1]}, "-=0.5")
        .to($("#b4"), 0.5, {left: matrizes[2].presetPositions.matrixBackTeamA[3][0], top: matrizes[2].presetPositions.matrixBackTeamA[3][1]}, "-=0.5")
        .to($("#b5"), 0.5, {left: matrizes[2].presetPositions.matrixBackTeamA[4][0], top: matrizes[2].presetPositions.matrixBackTeamA[4][1]}, "-=0.5")
        .to($("#b6"), 0.5, {left: matrizes[2].presetPositions.matrixBackTeamA[5][0], top: matrizes[2].presetPositions.matrixBackTeamA[5][1]}, "-=0.5")
        .to($("#b7"), 0.5, {left: matrizes[2].presetPositions.matrixBackTeamA[6][0], top: matrizes[2].presetPositions.matrixBackTeamA[6][1]}, "-=0.5")
        .to($("#b8"), 0.5, {left: matrizes[2].presetPositions.matrixBackTeamA[7][0], top: matrizes[2].presetPositions.matrixBackTeamA[7][1]}, "-=0.5")
        .to($("#b9"), 0.5, {left: matrizes[2].presetPositions.matrixBackTeamA[8][0], top: matrizes[2].presetPositions.matrixBackTeamA[8][1]}, "-=0.5")
        .to($("#b10"), 0.5, {left: matrizes[2].presetPositions.matrixBackTeamA[9][0], top: matrizes[2].presetPositions.matrixBackTeamA[9][1]}, "-=0.5")
        .to($("#b11"), 0.5, {left: matrizes[2].presetPositions.matrixBackTeamA[10][0], top: matrizes[2].presetPositions.matrixBackTeamA[10][1]}, "-=0.5")

        .to($("#r1"), 0.5, {left: matrizes[2].presetPositions.matrixBackTeamB[0][0], top: matrizes[2].presetPositions.matrixBackTeamB[0][1]})
        .to($("#r2"), 0.5, {left: matrizes[2].presetPositions.matrixBackTeamB[1][0], top: matrizes[2].presetPositions.matrixBackTeamB[1][1]}, "-=0.5")
        .to($("#r3"), 0.5, {left: matrizes[2].presetPositions.matrixBackTeamB[2][0], top: matrizes[2].presetPositions.matrixBackTeamB[2][1]}, "-=0.5")
        .to($("#r4"), 0.5, {left: matrizes[2].presetPositions.matrixBackTeamB[3][0], top: matrizes[2].presetPositions.matrixBackTeamB[3][1]}, "-=0.5")
        .to($("#r5"), 0.5, {left: matrizes[2].presetPositions.matrixBackTeamB[4][0], top: matrizes[2].presetPositions.matrixBackTeamB[4][1]}, "-=0.5")
        .to($("#r6"), 0.5, {left: matrizes[2].presetPositions.matrixBackTeamB[5][0], top: matrizes[2].presetPositions.matrixBackTeamB[5][1]}, "-=0.5")
        .to($("#r7"), 0.5, {left: matrizes[2].presetPositions.matrixBackTeamB[6][0], top: matrizes[2].presetPositions.matrixBackTeamB[6][1]}, "-=0.5")
        .to($("#r8"), 0.5, {left: matrizes[2].presetPositions.matrixBackTeamB[7][0], top: matrizes[2].presetPositions.matrixBackTeamA[7][1]}, "-=0.5")
        .to($("#r9"), 0.5, {left: matrizes[2].presetPositions.matrixBackTeamB[8][0], top: matrizes[2].presetPositions.matrixBackTeamB[8][1]}, "-=0.5")
        .to($("#r10"), 0.5, {left: matrizes[2].presetPositions.matrixBackTeamB[9][0], top: matrizes[2].presetPositions.matrixBackTeamB[9][1]}, "-=0.5")
        .to($("#r11"), 0.5, {left: matrizes[2].presetPositions.matrixBackTeamB[10][0], top: matrizes[2].presetPositions.matrixBackTeamB[10][1]}, "-=0.5")
}

function GoPosition3()
{
    goPositions3.to($("#b1"), 1.5, {left: matrizes[2].presetPositions.matrixGoTeamA[0][0], top: matrizes[2].presetPositions.matrixGoTeamA[0][1]})
        .to($("#b2"), 1.5, {left: matrizes[2].presetPositions.matrixGoTeamA[1][0], top: matrizes[2].presetPositions.matrixGoTeamA[1][1]}, "-=1.5")
        .to($("#b3"), 1.5, {left: matrizes[2].presetPositions.matrixGoTeamA[2][0], top: matrizes[2].presetPositions.matrixGoTeamA[2][1]}, "-=1.5")
        .to($("#b4"), 1.5, {left: matrizes[2].presetPositions.matrixGoTeamA[3][0], top: matrizes[2].presetPositions.matrixGoTeamA[3][1]}, "-=1.5")
        .to($("#b5"), 1.5, {left: matrizes[2].presetPositions.matrixGoTeamA[4][0], top: matrizes[2].presetPositions.matrixGoTeamA[4][1]}, "-=1.5")
        .to($("#b6"), 1.5, {left: matrizes[2].presetPositions.matrixGoTeamA[5][0], top: matrizes[2].presetPositions.matrixGoTeamA[5][1]}, "-=1.5")
        .to($("#b7"), 1.5, {left: matrizes[2].presetPositions.matrixGoTeamA[6][0], top: matrizes[2].presetPositions.matrixGoTeamA[6][1]}, "-=1.5")
        .to($("#b8"), 1.5, {left: matrizes[2].presetPositions.matrixGoTeamA[7][0], top: matrizes[2].presetPositions.matrixGoTeamA[7][1]}, "-=1.5")
        .to($("#b9"), 1.5, {left: matrizes[2].presetPositions.matrixGoTeamA[8][0], top: matrizes[2].presetPositions.matrixGoTeamA[8][1]}, "-=1.5")
        .to($("#b10"), 1.5, {left: matrizes[2].presetPositions.matrixGoTeamA[9][0], top: matrizes[2].presetPositions.matrixGoTeamA[9][1]}, "-=1.5")
        .to($("#b11"), 1.5, {left: matrizes[2].presetPositions.matrixGoTeamA[10][0], top: matrizes[2].presetPositions.matrixGoTeamA[10][1]}, "-=1.5")

        .to($("#r1"), 1.5, {left: matrizes[2].presetPositions.matrixGoTeamB[1][0], top: matrizes[2].presetPositions.matrixGoTeamB[1][1]}, "-=1.5")
        .to($("#r2"), 1.5, {left: matrizes[2].presetPositions.matrixGoTeamB[1][0], top: matrizes[2].presetPositions.matrixGoTeamB[1][1]}, "-=1.5")
        .to($("#r3"), 1.5, {left: matrizes[2].presetPositions.matrixGoTeamB[2][0], top: matrizes[2].presetPositions.matrixGoTeamB[2][1]}, "-=1.5")
        .to($("#r4"), 1.5, {left: matrizes[2].presetPositions.matrixGoTeamB[3][0], top: matrizes[2].presetPositions.matrixGoTeamB[3][1]}, "-=1.5")
        .to($("#r5"), 1.5, {left: matrizes[2].presetPositions.matrixGoTeamB[4][0], top: matrizes[2].presetPositions.matrixGoTeamB[4][1]}, "-=1.5")
        .to($("#r6"), 1.5, {left: matrizes[2].presetPositions.matrixGoTeamB[5][0], top: matrizes[2].presetPositions.matrixGoTeamB[5][1]}, "-=1.5")
        .to($("#r7"), 1.5, {left: matrizes[2].presetPositions.matrixGoTeamB[6][0], top: matrizes[2].presetPositions.matrixGoTeamB[6][1]}, "-=1.5")
        .to($("#r8"), 1.5, {left: matrizes[2].presetPositions.matrixGoTeamB[7][0], top: matrizes[2].presetPositions.matrixGoTeamB[7][1]}, "-=1.5")
        .to($("#r9"), 1.5, {left: matrizes[2].presetPositions.matrixGoTeamB[8][0], top: matrizes[2].presetPositions.matrixGoTeamB[8][1]}, "-=1.5")
        .to($("#r10"), 1.5, {left: matrizes[2].presetPositions.matrixGoTeamB[9][0], top: matrizes[2].presetPositions.matrixGoTeamB[9][1]}, "-=1.5")
        .to($("#r11"), 1.5, {left: matrizes[2].presetPositions.matrixGoTeamB[10][0], top: matrizes[2].presetPositions.matrixGoTeamB[10][1]}, "-=1.5")
}

function ReturnPosition4()
{
    returnPositions4.to($("#b1"), 0.5, {left: matrizes[3].presetPositions.matrixBackTeamA[0][0], top: matrizes[3].presetPositions.matrixBackTeamA[0][1]})
        .to($("#b2"), 0.5, {left: matrizes[3].presetPositions.matrixBackTeamA[1][0], top: matrizes[3].presetPositions.matrixBackTeamA[1][1]}, "-=0.5")
        .to($("#b3"), 0.5, {left: matrizes[3].presetPositions.matrixBackTeamA[2][0], top: matrizes[3].presetPositions.matrixBackTeamA[2][1]}, "-=0.5")
        .to($("#b4"), 0.5, {left: matrizes[3].presetPositions.matrixBackTeamA[3][0], top: matrizes[3].presetPositions.matrixBackTeamA[3][1]}, "-=0.5")
        .to($("#b5"), 0.5, {left: matrizes[3].presetPositions.matrixBackTeamA[4][0], top: matrizes[3].presetPositions.matrixBackTeamA[4][1]}, "-=0.5")
        .to($("#b6"), 0.5, {left: matrizes[3].presetPositions.matrixBackTeamA[5][0], top: matrizes[3].presetPositions.matrixBackTeamA[5][1]}, "-=0.5")
        .to($("#b7"), 0.5, {left: matrizes[3].presetPositions.matrixBackTeamA[6][0], top: matrizes[3].presetPositions.matrixBackTeamA[6][1]}, "-=0.5")
        .to($("#b8"), 0.5, {left: matrizes[3].presetPositions.matrixBackTeamA[7][0], top: matrizes[3].presetPositions.matrixBackTeamA[7][1]}, "-=0.5")
        .to($("#b9"), 0.5, {left: matrizes[3].presetPositions.matrixBackTeamA[8][0], top: matrizes[3].presetPositions.matrixBackTeamA[8][1]}, "-=0.5")
        .to($("#b10"), 0.5, {left: matrizes[3].presetPositions.matrixBackTeamA[9][0], top: matrizes[3].presetPositions.matrixBackTeamA[9][1]}, "-=0.5")
        .to($("#b11"), 0.5, {left: matrizes[3].presetPositions.matrixBackTeamA[10][0], top: matrizes[3].presetPositions.matrixBackTeamA[10][1]}, "-=0.5")

        .to($("#r1"), 0.5, {left: matrizes[3].presetPositions.matrixBackTeamB[0][0], top: matrizes[3].presetPositions.matrixBackTeamB[0][1]})
        .to($("#r2"), 0.5, {left: matrizes[3].presetPositions.matrixBackTeamB[1][0], top: matrizes[3].presetPositions.matrixBackTeamB[1][1]}, "-=0.5")
        .to($("#r3"), 0.5, {left: matrizes[3].presetPositions.matrixBackTeamB[2][0], top: matrizes[3].presetPositions.matrixBackTeamB[2][1]}, "-=0.5")
        .to($("#r4"), 0.5, {left: matrizes[3].presetPositions.matrixBackTeamB[3][0], top: matrizes[3].presetPositions.matrixBackTeamB[3][1]}, "-=0.5")
        .to($("#r5"), 0.5, {left: matrizes[3].presetPositions.matrixBackTeamB[4][0], top: matrizes[3].presetPositions.matrixBackTeamB[4][1]}, "-=0.5")
        .to($("#r6"), 0.5, {left: matrizes[3].presetPositions.matrixBackTeamB[5][0], top: matrizes[3].presetPositions.matrixBackTeamB[5][1]}, "-=0.5")
        .to($("#r7"), 0.5, {left: matrizes[3].presetPositions.matrixBackTeamB[6][0], top: matrizes[3].presetPositions.matrixBackTeamB[6][1]}, "-=0.5")
        .to($("#r8"), 0.5, {left: matrizes[3].presetPositions.matrixBackTeamB[7][0], top: matrizes[3].presetPositions.matrixBackTeamA[7][1]}, "-=0.5")
        .to($("#r9"), 0.5, {left: matrizes[3].presetPositions.matrixBackTeamB[8][0], top: matrizes[3].presetPositions.matrixBackTeamB[8][1]}, "-=0.5")
        .to($("#r10"), 0.5, {left: matrizes[3].presetPositions.matrixBackTeamB[9][0], top: matrizes[3].presetPositions.matrixBackTeamB[9][1]}, "-=0.5")
        .to($("#r11"), 0.5, {left: matrizes[3].presetPositions.matrixBackTeamB[10][0], top: matrizes[3].presetPositions.matrixBackTeamB[10][1]}, "-=0.5")
}

function GoPosition4()
{
    goPositions4.to($("#b1"), 1.5, {left: matrizes[3].presetPositions.matrixGoTeamA[0][0], top: matrizes[3].presetPositions.matrixGoTeamA[0][1]})
        .to($("#b2"), 1.5, {left: matrizes[3].presetPositions.matrixGoTeamA[1][0], top: matrizes[3].presetPositions.matrixGoTeamA[1][1]}, "-=1.5")
        .to($("#b3"), 1.5, {left: matrizes[3].presetPositions.matrixGoTeamA[2][0], top: matrizes[3].presetPositions.matrixGoTeamA[2][1]}, "-=1.5")
        .to($("#b4"), 1.5, {left: matrizes[3].presetPositions.matrixGoTeamA[3][0], top: matrizes[3].presetPositions.matrixGoTeamA[3][1]}, "-=1.5")
        .to($("#b5"), 1.5, {left: matrizes[3].presetPositions.matrixGoTeamA[4][0], top: matrizes[3].presetPositions.matrixGoTeamA[4][1]}, "-=1.5")
        .to($("#b6"), 1.5, {left: matrizes[3].presetPositions.matrixGoTeamA[5][0], top: matrizes[3].presetPositions.matrixGoTeamA[5][1]}, "-=1.5")
        .to($("#b7"), 1.5, {left: matrizes[3].presetPositions.matrixGoTeamA[6][0], top: matrizes[3].presetPositions.matrixGoTeamA[6][1]}, "-=1.5")
        .to($("#b8"), 1.5, {left: matrizes[3].presetPositions.matrixGoTeamA[7][0], top: matrizes[3].presetPositions.matrixGoTeamA[7][1]}, "-=1.5")
        .to($("#b9"), 1.5, {left: matrizes[3].presetPositions.matrixGoTeamA[8][0], top: matrizes[3].presetPositions.matrixGoTeamA[8][1]}, "-=1.5")
        .to($("#b10"), 1.5, {left: matrizes[3].presetPositions.matrixGoTeamA[9][0], top: matrizes[3].presetPositions.matrixGoTeamA[9][1]}, "-=1.5")
        .to($("#b11"), 1.5, {left: matrizes[3].presetPositions.matrixGoTeamA[10][0], top: matrizes[3].presetPositions.matrixGoTeamA[10][1]}, "-=1.5")

        .to($("#r1"), 1.5, {left: matrizes[3].presetPositions.matrixGoTeamB[1][0], top: matrizes[3].presetPositions.matrixGoTeamB[1][1]}, "-=1.5")
        .to($("#r2"), 1.5, {left: matrizes[3].presetPositions.matrixGoTeamB[1][0], top: matrizes[3].presetPositions.matrixGoTeamB[1][1]}, "-=1.5")
        .to($("#r3"), 1.5, {left: matrizes[3].presetPositions.matrixGoTeamB[2][0], top: matrizes[3].presetPositions.matrixGoTeamB[2][1]}, "-=1.5")
        .to($("#r4"), 1.5, {left: matrizes[3].presetPositions.matrixGoTeamB[3][0], top: matrizes[3].presetPositions.matrixGoTeamB[3][1]}, "-=1.5")
        .to($("#r5"), 1.5, {left: matrizes[3].presetPositions.matrixGoTeamB[4][0], top: matrizes[3].presetPositions.matrixGoTeamB[4][1]}, "-=1.5")
        .to($("#r6"), 1.5, {left: matrizes[3].presetPositions.matrixGoTeamB[5][0], top: matrizes[3].presetPositions.matrixGoTeamB[5][1]}, "-=1.5")
        .to($("#r7"), 1.5, {left: matrizes[3].presetPositions.matrixGoTeamB[6][0], top: matrizes[3].presetPositions.matrixGoTeamB[6][1]}, "-=1.5")
        .to($("#r8"), 1.5, {left: matrizes[3].presetPositions.matrixGoTeamB[7][0], top: matrizes[3].presetPositions.matrixGoTeamB[7][1]}, "-=1.5")
        .to($("#r9"), 1.5, {left: matrizes[3].presetPositions.matrixGoTeamB[8][0], top: matrizes[3].presetPositions.matrixGoTeamB[8][1]}, "-=1.5")
        .to($("#r10"), 1.5, {left: matrizes[3].presetPositions.matrixGoTeamB[9][0], top: matrizes[3].presetPositions.matrixGoTeamB[9][1]}, "-=1.5")
        .to($("#r11"), 1.5, {left: matrizes[3].presetPositions.matrixGoTeamB[10][0], top: matrizes[3].presetPositions.matrixGoTeamB[10][1]}, "-=1.5")
}

function ReturnPosition5()
{
    returnPositions5.to($("#b1"), 0.5, {left: matrizes[4].presetPositions.matrixBackTeamA[0][0], top: matrizes[4].presetPositions.matrixBackTeamA[0][1]})
        .to($("#b2"), 0.5, {left: matrizes[4].presetPositions.matrixBackTeamA[1][0], top: matrizes[4].presetPositions.matrixBackTeamA[1][1]}, "-=0.5")
        .to($("#b3"), 0.5, {left: matrizes[4].presetPositions.matrixBackTeamA[2][0], top: matrizes[4].presetPositions.matrixBackTeamA[2][1]}, "-=0.5")
        .to($("#b4"), 0.5, {left: matrizes[4].presetPositions.matrixBackTeamA[3][0], top: matrizes[4].presetPositions.matrixBackTeamA[3][1]}, "-=0.5")
        .to($("#b5"), 0.5, {left: matrizes[4].presetPositions.matrixBackTeamA[4][0], top: matrizes[4].presetPositions.matrixBackTeamA[4][1]}, "-=0.5")
        .to($("#b6"), 0.5, {left: matrizes[4].presetPositions.matrixBackTeamA[5][0], top: matrizes[4].presetPositions.matrixBackTeamA[5][1]}, "-=0.5")
        .to($("#b7"), 0.5, {left: matrizes[4].presetPositions.matrixBackTeamA[6][0], top: matrizes[4].presetPositions.matrixBackTeamA[6][1]}, "-=0.5")
        .to($("#b8"), 0.5, {left: matrizes[4].presetPositions.matrixBackTeamA[7][0], top: matrizes[4].presetPositions.matrixBackTeamA[7][1]}, "-=0.5")
        .to($("#b9"), 0.5, {left: matrizes[4].presetPositions.matrixBackTeamA[8][0], top: matrizes[4].presetPositions.matrixBackTeamA[8][1]}, "-=0.5")
        .to($("#b10"), 0.5, {left: matrizes[4].presetPositions.matrixBackTeamA[9][0], top: matrizes[4].presetPositions.matrixBackTeamA[9][1]}, "-=0.5")
        .to($("#b11"), 0.5, {left: matrizes[4].presetPositions.matrixBackTeamA[10][0], top: matrizes[4].presetPositions.matrixBackTeamA[10][1]}, "-=0.5")

        .to($("#r1"), 0.5, {left: matrizes[4].presetPositions.matrixBackTeamB[0][0], top: matrizes[4].presetPositions.matrixBackTeamB[0][1]})
        .to($("#r2"), 0.5, {left: matrizes[4].presetPositions.matrixBackTeamB[1][0], top: matrizes[4].presetPositions.matrixBackTeamB[1][1]}, "-=0.5")
        .to($("#r3"), 0.5, {left: matrizes[4].presetPositions.matrixBackTeamB[2][0], top: matrizes[4].presetPositions.matrixBackTeamB[2][1]}, "-=0.5")
        .to($("#r4"), 0.5, {left: matrizes[4].presetPositions.matrixBackTeamB[3][0], top: matrizes[4].presetPositions.matrixBackTeamB[3][1]}, "-=0.5")
        .to($("#r5"), 0.5, {left: matrizes[4].presetPositions.matrixBackTeamB[4][0], top: matrizes[4].presetPositions.matrixBackTeamB[4][1]}, "-=0.5")
        .to($("#r6"), 0.5, {left: matrizes[4].presetPositions.matrixBackTeamB[5][0], top: matrizes[4].presetPositions.matrixBackTeamB[5][1]}, "-=0.5")
        .to($("#r7"), 0.5, {left: matrizes[4].presetPositions.matrixBackTeamB[6][0], top: matrizes[4].presetPositions.matrixBackTeamB[6][1]}, "-=0.5")
        .to($("#r8"), 0.5, {left: matrizes[4].presetPositions.matrixBackTeamB[7][0], top: matrizes[4].presetPositions.matrixBackTeamA[7][1]}, "-=0.5")
        .to($("#r9"), 0.5, {left: matrizes[4].presetPositions.matrixBackTeamB[8][0], top: matrizes[4].presetPositions.matrixBackTeamB[8][1]}, "-=0.5")
        .to($("#r10"), 0.5, {left: matrizes[4].presetPositions.matrixBackTeamB[9][0], top: matrizes[4].presetPositions.matrixBackTeamB[9][1]}, "-=0.5")
        .to($("#r11"), 0.5, {left: matrizes[4].presetPositions.matrixBackTeamB[10][0], top: matrizes[4].presetPositions.matrixBackTeamB[10][1]}, "-=0.5")
}

function GoPosition5()
{
    goPositions5.to($("#b1"), 1.5, {left: matrizes[4].presetPositions.matrixGoTeamA[0][0], top: matrizes[4].presetPositions.matrixGoTeamA[0][1]})
        .to($("#b2"), 1.5, {left: matrizes[4].presetPositions.matrixGoTeamA[1][0], top: matrizes[4].presetPositions.matrixGoTeamA[1][1]}, "-=1.5")
        .to($("#b3"), 1.5, {left: matrizes[4].presetPositions.matrixGoTeamA[2][0], top: matrizes[4].presetPositions.matrixGoTeamA[2][1]}, "-=1.5")
        .to($("#b4"), 1.5, {left: matrizes[4].presetPositions.matrixGoTeamA[3][0], top: matrizes[4].presetPositions.matrixGoTeamA[3][1]}, "-=1.5")
        .to($("#b5"), 1.5, {left: matrizes[4].presetPositions.matrixGoTeamA[4][0], top: matrizes[4].presetPositions.matrixGoTeamA[4][1]}, "-=1.5")
        .to($("#b6"), 1.5, {left: matrizes[4].presetPositions.matrixGoTeamA[5][0], top: matrizes[4].presetPositions.matrixGoTeamA[5][1]}, "-=1.5")
        .to($("#b7"), 1.5, {left: matrizes[4].presetPositions.matrixGoTeamA[6][0], top: matrizes[4].presetPositions.matrixGoTeamA[6][1]}, "-=1.5")
        .to($("#b8"), 1.5, {left: matrizes[4].presetPositions.matrixGoTeamA[7][0], top: matrizes[4].presetPositions.matrixGoTeamA[7][1]}, "-=1.5")
        .to($("#b9"), 1.5, {left: matrizes[4].presetPositions.matrixGoTeamA[8][0], top: matrizes[4].presetPositions.matrixGoTeamA[8][1]}, "-=1.5")
        .to($("#b10"), 1.5, {left: matrizes[4].presetPositions.matrixGoTeamA[9][0], top: matrizes[4].presetPositions.matrixGoTeamA[9][1]}, "-=1.5")
        .to($("#b11"), 1.5, {left: matrizes[4].presetPositions.matrixGoTeamA[10][0], top: matrizes[4].presetPositions.matrixGoTeamA[10][1]}, "-=1.5")

        .to($("#r1"), 1.5, {left: matrizes[4].presetPositions.matrixGoTeamB[1][0], top: matrizes[4].presetPositions.matrixGoTeamB[1][1]}, "-=1.5")
        .to($("#r2"), 1.5, {left: matrizes[4].presetPositions.matrixGoTeamB[1][0], top: matrizes[4].presetPositions.matrixGoTeamB[1][1]}, "-=1.5")
        .to($("#r3"), 1.5, {left: matrizes[4].presetPositions.matrixGoTeamB[2][0], top: matrizes[4].presetPositions.matrixGoTeamB[2][1]}, "-=1.5")
        .to($("#r4"), 1.5, {left: matrizes[4].presetPositions.matrixGoTeamB[3][0], top: matrizes[4].presetPositions.matrixGoTeamB[3][1]}, "-=1.5")
        .to($("#r5"), 1.5, {left: matrizes[4].presetPositions.matrixGoTeamB[4][0], top: matrizes[4].presetPositions.matrixGoTeamB[4][1]}, "-=1.5")
        .to($("#r6"), 1.5, {left: matrizes[4].presetPositions.matrixGoTeamB[5][0], top: matrizes[4].presetPositions.matrixGoTeamB[5][1]}, "-=1.5")
        .to($("#r7"), 1.5, {left: matrizes[4].presetPositions.matrixGoTeamB[6][0], top: matrizes[4].presetPositions.matrixGoTeamB[6][1]}, "-=1.5")
        .to($("#r8"), 1.5, {left: matrizes[4].presetPositions.matrixGoTeamB[7][0], top: matrizes[4].presetPositions.matrixGoTeamB[7][1]}, "-=1.5")
        .to($("#r9"), 1.5, {left: matrizes[4].presetPositions.matrixGoTeamB[8][0], top: matrizes[4].presetPositions.matrixGoTeamB[8][1]}, "-=1.5")
        .to($("#r10"), 1.5, {left: matrizes[4].presetPositions.matrixGoTeamB[9][0], top: matrizes[4].presetPositions.matrixGoTeamB[9][1]}, "-=1.5")
        .to($("#r11"), 1.5, {left: matrizes[4].presetPositions.matrixGoTeamB[10][0], top: matrizes[4].presetPositions.matrixGoTeamB[10][1]}, "-=1.5")
}

function ReturnPosition6()
{
    returnPositions6.to($("#b1"), 0.5, {left: matrizes[5].presetPositions.matrixBackTeamA[0][0], top: matrizes[5].presetPositions.matrixBackTeamA[0][1]})
        .to($("#b2"), 0.5, {left: matrizes[5].presetPositions.matrixBackTeamA[1][0], top: matrizes[5].presetPositions.matrixBackTeamA[1][1]}, "-=0.5")
        .to($("#b3"), 0.5, {left: matrizes[5].presetPositions.matrixBackTeamA[2][0], top: matrizes[5].presetPositions.matrixBackTeamA[2][1]}, "-=0.5")
        .to($("#b4"), 0.5, {left: matrizes[5].presetPositions.matrixBackTeamA[3][0], top: matrizes[5].presetPositions.matrixBackTeamA[3][1]}, "-=0.5")
        .to($("#b5"), 0.5, {left: matrizes[5].presetPositions.matrixBackTeamA[4][0], top: matrizes[5].presetPositions.matrixBackTeamA[4][1]}, "-=0.5")
        .to($("#b6"), 0.5, {left: matrizes[5].presetPositions.matrixBackTeamA[5][0], top: matrizes[5].presetPositions.matrixBackTeamA[5][1]}, "-=0.5")
        .to($("#b7"), 0.5, {left: matrizes[5].presetPositions.matrixBackTeamA[6][0], top: matrizes[5].presetPositions.matrixBackTeamA[6][1]}, "-=0.5")
        .to($("#b8"), 0.5, {left: matrizes[5].presetPositions.matrixBackTeamA[7][0], top: matrizes[5].presetPositions.matrixBackTeamA[7][1]}, "-=0.5")
        .to($("#b9"), 0.5, {left: matrizes[5].presetPositions.matrixBackTeamA[8][0], top: matrizes[5].presetPositions.matrixBackTeamA[8][1]}, "-=0.5")
        .to($("#b10"), 0.5, {left: matrizes[5].presetPositions.matrixBackTeamA[9][0], top: matrizes[5].presetPositions.matrixBackTeamA[9][1]}, "-=0.5")
        .to($("#b11"), 0.5, {left: matrizes[5].presetPositions.matrixBackTeamA[10][0], top: matrizes[5].presetPositions.matrixBackTeamA[10][1]}, "-=0.5")

        .to($("#r1"), 0.5, {left: matrizes[5].presetPositions.matrixBackTeamB[0][0], top: matrizes[5].presetPositions.matrixBackTeamB[0][1]})
        .to($("#r2"), 0.5, {left: matrizes[5].presetPositions.matrixBackTeamB[1][0], top: matrizes[5].presetPositions.matrixBackTeamB[1][1]}, "-=0.5")
        .to($("#r3"), 0.5, {left: matrizes[5].presetPositions.matrixBackTeamB[2][0], top: matrizes[5].presetPositions.matrixBackTeamB[2][1]}, "-=0.5")
        .to($("#r4"), 0.5, {left: matrizes[5].presetPositions.matrixBackTeamB[3][0], top: matrizes[5].presetPositions.matrixBackTeamB[3][1]}, "-=0.5")
        .to($("#r5"), 0.5, {left: matrizes[5].presetPositions.matrixBackTeamB[4][0], top: matrizes[5].presetPositions.matrixBackTeamB[4][1]}, "-=0.5")
        .to($("#r6"), 0.5, {left: matrizes[5].presetPositions.matrixBackTeamB[5][0], top: matrizes[5].presetPositions.matrixBackTeamB[5][1]}, "-=0.5")
        .to($("#r7"), 0.5, {left: matrizes[5].presetPositions.matrixBackTeamB[6][0], top: matrizes[5].presetPositions.matrixBackTeamB[6][1]}, "-=0.5")
        .to($("#r8"), 0.5, {left: matrizes[5].presetPositions.matrixBackTeamB[7][0], top: matrizes[5].presetPositions.matrixBackTeamA[7][1]}, "-=0.5")
        .to($("#r9"), 0.5, {left: matrizes[5].presetPositions.matrixBackTeamB[8][0], top: matrizes[5].presetPositions.matrixBackTeamB[8][1]}, "-=0.5")
        .to($("#r10"), 0.5, {left: matrizes[5].presetPositions.matrixBackTeamB[9][0], top: matrizes[5].presetPositions.matrixBackTeamB[9][1]}, "-=0.5")
        .to($("#r11"), 0.5, {left: matrizes[5].presetPositions.matrixBackTeamB[10][0], top: matrizes[5].presetPositions.matrixBackTeamB[10][1]}, "-=0.5")
}

function GoPosition6()
{
    goPositions6.to($("#b1"), 1.5, {left: matrizes[5].presetPositions.matrixGoTeamA[0][0], top: matrizes[5].presetPositions.matrixGoTeamA[0][1]})
        .to($("#b2"), 1.5, {left: matrizes[5].presetPositions.matrixGoTeamA[1][0], top: matrizes[5].presetPositions.matrixGoTeamA[1][1]}, "-=1.5")
        .to($("#b3"), 1.5, {left: matrizes[5].presetPositions.matrixGoTeamA[2][0], top: matrizes[5].presetPositions.matrixGoTeamA[2][1]}, "-=1.5")
        .to($("#b4"), 1.5, {left: matrizes[5].presetPositions.matrixGoTeamA[3][0], top: matrizes[5].presetPositions.matrixGoTeamA[3][1]}, "-=1.5")
        .to($("#b5"), 1.5, {left: matrizes[5].presetPositions.matrixGoTeamA[4][0], top: matrizes[5].presetPositions.matrixGoTeamA[4][1]}, "-=1.5")
        .to($("#b6"), 1.5, {left: matrizes[5].presetPositions.matrixGoTeamA[5][0], top: matrizes[5].presetPositions.matrixGoTeamA[5][1]}, "-=1.5")
        .to($("#b7"), 1.5, {left: matrizes[5].presetPositions.matrixGoTeamA[6][0], top: matrizes[5].presetPositions.matrixGoTeamA[6][1]}, "-=1.5")
        .to($("#b8"), 1.5, {left: matrizes[5].presetPositions.matrixGoTeamA[7][0], top: matrizes[5].presetPositions.matrixGoTeamA[7][1]}, "-=1.5")
        .to($("#b9"), 1.5, {left: matrizes[5].presetPositions.matrixGoTeamA[8][0], top: matrizes[5].presetPositions.matrixGoTeamA[8][1]}, "-=1.5")
        .to($("#b10"), 1.5, {left: matrizes[5].presetPositions.matrixGoTeamA[9][0], top: matrizes[5].presetPositions.matrixGoTeamA[9][1]}, "-=1.5")
        .to($("#b11"), 1.5, {left: matrizes[5].presetPositions.matrixGoTeamA[10][0], top: matrizes[5].presetPositions.matrixGoTeamA[10][1]}, "-=1.5")

        .to($("#r1"), 1.5, {left: matrizes[5].presetPositions.matrixGoTeamB[1][0], top: matrizes[5].presetPositions.matrixGoTeamB[1][1]}, "-=1.5")
        .to($("#r2"), 1.5, {left: matrizes[5].presetPositions.matrixGoTeamB[1][0], top: matrizes[5].presetPositions.matrixGoTeamB[1][1]}, "-=1.5")
        .to($("#r3"), 1.5, {left: matrizes[5].presetPositions.matrixGoTeamB[2][0], top: matrizes[5].presetPositions.matrixGoTeamB[2][1]}, "-=1.5")
        .to($("#r4"), 1.5, {left: matrizes[5].presetPositions.matrixGoTeamB[3][0], top: matrizes[5].presetPositions.matrixGoTeamB[3][1]}, "-=1.5")
        .to($("#r5"), 1.5, {left: matrizes[5].presetPositions.matrixGoTeamB[4][0], top: matrizes[5].presetPositions.matrixGoTeamB[4][1]}, "-=1.5")
        .to($("#r6"), 1.5, {left: matrizes[5].presetPositions.matrixGoTeamB[5][0], top: matrizes[5].presetPositions.matrixGoTeamB[5][1]}, "-=1.5")
        .to($("#r7"), 1.5, {left: matrizes[5].presetPositions.matrixGoTeamB[6][0], top: matrizes[5].presetPositions.matrixGoTeamB[6][1]}, "-=1.5")
        .to($("#r8"), 1.5, {left: matrizes[5].presetPositions.matrixGoTeamB[7][0], top: matrizes[5].presetPositions.matrixGoTeamB[7][1]}, "-=1.5")
        .to($("#r9"), 1.5, {left: matrizes[5].presetPositions.matrixGoTeamB[8][0], top: matrizes[5].presetPositions.matrixGoTeamB[8][1]}, "-=1.5")
        .to($("#r10"), 1.5, {left: matrizes[5].presetPositions.matrixGoTeamB[9][0], top: matrizes[5].presetPositions.matrixGoTeamB[9][1]}, "-=1.5")
        .to($("#r11"), 1.5, {left: matrizes[5].presetPositions.matrixGoTeamB[10][0], top: matrizes[5].presetPositions.matrixGoTeamB[10][1]}, "-=1.5")
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