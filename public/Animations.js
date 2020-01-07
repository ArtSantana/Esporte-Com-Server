let toggleA = true, toggleB = false;
// VISIBILIDADE DOS TIMES
var returnPositions = new TimelineLite(), returnPositions2 = new TimelineLite(),
    returnPositions3 = new TimelineLite(), returnPositions4 = new TimelineLite(),
    returnPositions5 = new TimelineLite(), returnPositions6 = new TimelineLite();
var goPositions = new TimelineLite(), goPositions2 = new TimelineLite(),
    goPositions3 = new TimelineLite(), goPositions4 = new TimelineLite(),
    goPositions5 = new TimelineLite(), goPositions6 = new TimelineLite();
$("#black").click(toggleTeamA);

$("#red").click(toggleTeamB);

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

function ReturnPosition3()
{
    returnPositions3.to($("#b1"), 0.5, {left: matrizBBack3[0][0], top: matrizBBack3[0][1]})
        .to($("#b2"), 0.5, {left: matrizBBack3[1][0], top: matrizBBack3[1][1]}, "-=0.5")
        .to($("#b3"), 0.5, {left: matrizBBack3[2][0], top: matrizBBack3[2][1]}, "-=0.5")
        .to($("#b4"), 0.5, {left: matrizBBack3[3][0], top: matrizBBack3[3][1]}, "-=0.5")
        .to($("#b5"), 0.5, {left: matrizBBack3[4][0], top: matrizBBack3[4][1]}, "-=0.5")
        .to($("#b6"), 0.5, {left: matrizBBack3[5][0], top: matrizBBack3[5][1]}, "-=0.5")
        .to($("#b7"), 0.5, {left: matrizBBack3[6][0], top: matrizBBack3[6][1]}, "-=0.5")
        .to($("#b8"), 0.5, {left: matrizBBack3[7][0], top: matrizBBack3[7][1]}, "-=0.5")
        .to($("#b9"), 0.5, {left: matrizBBack3[8][0], top: matrizBBack3[8][1]}, "-=0.5")
        .to($("#b10"), 0.5, {left: matrizBBack3[9][0], top: matrizBBack3[9][1]}, "-=0.5")
        .to($("#b11"), 0.5, {left: matrizBBack3[10][0], top: matrizBBack3[10][1]}, "-=0.5")
// -------------------------------------------------------------------------------------------- //
        .to($("#r1"), 0.5, {left: matrizRBack3[0][0], top: matrizRBack3[0][1]}, "-=0.5")
        .to($("#r2"), 0.5, {left: matrizRBack3[1][0], top: matrizRBack3[1][1]}, "-=0.5")
        .to($("#r3"), 0.5, {left: matrizRBack3[2][0], top: matrizRBack3[2][1]}, "-=0.5")
        .to($("#r4"), 0.5, {left: matrizRBack3[3][0], top: matrizRBack3[3][1]}, "-=0.5")
        .to($("#r5"), 0.5, {left: matrizRBack3[4][0], top: matrizRBack3[4][1]}, "-=0.5")
        .to($("#r6"), 0.5, {left: matrizRBack3[5][0], top: matrizRBack3[5][1]}, "-=0.5")
        .to($("#r7"), 0.5, {left: matrizRBack3[6][0], top: matrizRBack3[6][1]}, "-=0.5")
        .to($("#r8"), 0.5, {left: matrizRBack3[7][0], top: matrizRBack3[7][1]}, "-=0.5")
        .to($("#r9"), 0.5, {left: matrizRBack3[8][0], top: matrizRBack3[8][1]}, "-=0.5")
        .to($("#r10"), 0.5, {left: matrizRBack3[9][0], top: matrizRBack3[9][1]}, "-=0.5")
        .to($("#r11"), 0.5, {left: matrizRBack3[10][0], top: matrizRBack3[10][1]}, "-=0.5");
}

function GoPosition3()
{
    goPositions3.to($("#b1"), 1.5, {left: matrizBGo3[0][0], top: matrizBGo3[0][1]})
        .to($("#b2"), 1.5, {left: matrizBGo3[1][0], top: matrizBGo3[1][1]}, "-=1.5")
        .to($("#b3"), 1.5, {left: matrizBGo3[2][0], top: matrizBGo3[2][1]}, "-=1.5")
        .to($("#b4"), 1.5, {left: matrizBGo3[3][0], top: matrizBGo3[3][1]}, "-=1.5")
        .to($("#b5"), 1.5, {left: matrizBGo3[4][0], top: matrizBGo3[4][1]}, "-=1.5")
        .to($("#b6"), 1.5, {left: matrizBGo3[5][0], top: matrizBGo3[5][1]}, "-=1.5")
        .to($("#b7"), 1.5, {left: matrizBGo3[6][0], top: matrizBGo3[6][1]}, "-=1.5")
        .to($("#b8"), 1.5, {left: matrizBGo3[7][0], top: matrizBGo3[7][1]}, "-=1.5")
        .to($("#b9"), 1.5, {left: matrizBGo3[8][0], top: matrizBGo3[8][1]}, "-=1.5")
        .to($("#b10"), 1.5, {left: matrizBGo3[9][0], top: matrizBGo3[9][1]}, "-=1.5")
        .to($("#b11"), 1.5, {left: matrizBGo3[10][0], top: matrizBGo3[10][1]}, "-=1.5")
// -------------------------------------------------------------------------------------------- //
        .to($("#r1"), 1.5, {left: matrizRGo3[0][0], top: matrizRGo3[0][1]}, "-=1.5")
        .to($("#r2"), 1.5, {left: matrizRGo3[1][0], top: matrizRGo3[1][1]}, "-=1.5")
        .to($("#r3"), 1.5, {left: matrizRGo3[2][0], top: matrizRGo3[2][1]}, "-=1.5")
        .to($("#r4"), 1.5, {left: matrizRGo3[3][0], top: matrizRGo3[3][1]}, "-=1.5")
        .to($("#r5"), 1.5, {left: matrizRGo3[4][0], top: matrizRGo3[4][1]}, "-=1.5")
        .to($("#r6"), 1.5, {left: matrizRGo3[5][0], top: matrizRGo3[5][1]}, "-=1.5")
        .to($("#r7"), 1.5, {left: matrizRGo3[6][0], top: matrizRGo3[6][1]}, "-=1.5")
        .to($("#r8"), 1.5, {left: matrizRGo3[7][0], top: matrizRGo3[7][1]}, "-=1.5")
        .to($("#r9"), 1.5, {left: matrizRGo3[8][0], top: matrizRGo3[8][1]}, "-=1.5")
        .to($("#r10"), 1.5, {left: matrizRGo3[9][0], top: matrizRGo3[9][1]}, "-=1.5")
        .to($("#r11"), 1.5, {left: matrizRGo3[10][0], top: matrizRGo3[10][1]}, "-=1.5");
}

function ReturnPosition4()
{
    returnPositions4.to($("#b1"), 0.5, {left: matrizBBack4[0][0], top: matrizBBack4[0][1]})
        .to($("#b2"), 0.5, {left: matrizBBack4[1][0], top: matrizBBack4[1][1]}, "-=0.5")
        .to($("#b3"), 0.5, {left: matrizBBack4[2][0], top: matrizBBack4[2][1]}, "-=0.5")
        .to($("#b4"), 0.5, {left: matrizBBack4[3][0], top: matrizBBack4[3][1]}, "-=0.5")
        .to($("#b5"), 0.5, {left: matrizBBack4[4][0], top: matrizBBack4[4][1]}, "-=0.5")
        .to($("#b6"), 0.5, {left: matrizBBack4[5][0], top: matrizBBack4[5][1]}, "-=0.5")
        .to($("#b7"), 0.5, {left: matrizBBack4[6][0], top: matrizBBack4[6][1]}, "-=0.5")
        .to($("#b8"), 0.5, {left: matrizBBack4[7][0], top: matrizBBack4[7][1]}, "-=0.5")
        .to($("#b9"), 0.5, {left: matrizBBack4[8][0], top: matrizBBack4[8][1]}, "-=0.5")
        .to($("#b10"), 0.5, {left: matrizBBack4[9][0], top: matrizBBack4[9][1]}, "-=0.5")
        .to($("#b11"), 0.5, {left: matrizBBack4[10][0], top: matrizBBack4[10][1]}, "-=0.5")
// -------------------------------------------------------------------------------------------- //
        .to($("#r1"), 0.5, {left: matrizRBack4[0][0], top: matrizRBack4[0][1]}, "-=0.5")
        .to($("#r2"), 0.5, {left: matrizRBack4[1][0], top: matrizRBack4[1][1]}, "-=0.5")
        .to($("#r3"), 0.5, {left: matrizRBack4[2][0], top: matrizRBack4[2][1]}, "-=0.5")
        .to($("#r4"), 0.5, {left: matrizRBack4[3][0], top: matrizRBack4[3][1]}, "-=0.5")
        .to($("#r5"), 0.5, {left: matrizRBack4[4][0], top: matrizRBack4[4][1]}, "-=0.5")
        .to($("#r6"), 0.5, {left: matrizRBack4[5][0], top: matrizRBack4[5][1]}, "-=0.5")
        .to($("#r7"), 0.5, {left: matrizRBack4[6][0], top: matrizRBack4[6][1]}, "-=0.5")
        .to($("#r8"), 0.5, {left: matrizRBack4[7][0], top: matrizRBack4[7][1]}, "-=0.5")
        .to($("#r9"), 0.5, {left: matrizRBack4[8][0], top: matrizRBack4[8][1]}, "-=0.5")
        .to($("#r10"), 0.5, {left: matrizRBack4[9][0], top: matrizRBack4[9][1]}, "-=0.5")
        .to($("#r11"), 0.5, {left: matrizRBack4[10][0], top: matrizRBack4[10][1]}, "-=0.5");
}

function GoPosition4()
{
    goPositions4.to($("#b1"), 1.5, {left: matrizBGo4[0][0], top: matrizBGo4[0][1]})
        .to($("#b2"), 1.5, {left: matrizBGo4[1][0], top: matrizBGo4[1][1]}, "-=1.5")
        .to($("#b3"), 1.5, {left: matrizBGo4[2][0], top: matrizBGo4[2][1]}, "-=1.5")
        .to($("#b4"), 1.5, {left: matrizBGo4[3][0], top: matrizBGo4[3][1]}, "-=1.5")
        .to($("#b5"), 1.5, {left: matrizBGo4[4][0], top: matrizBGo4[4][1]}, "-=1.5")
        .to($("#b6"), 1.5, {left: matrizBGo4[5][0], top: matrizBGo4[5][1]}, "-=1.5")
        .to($("#b7"), 1.5, {left: matrizBGo4[6][0], top: matrizBGo4[6][1]}, "-=1.5")
        .to($("#b8"), 1.5, {left: matrizBGo4[7][0], top: matrizBGo4[7][1]}, "-=1.5")
        .to($("#b9"), 1.5, {left: matrizBGo4[8][0], top: matrizBGo4[8][1]}, "-=1.5")
        .to($("#b10"), 1.5, {left: matrizBGo4[9][0], top: matrizBGo4[9][1]}, "-=1.5")
        .to($("#b11"), 1.5, {left: matrizBGo4[10][0], top: matrizBGo4[10][1]}, "-=1.5")
// -------------------------------------------------------------------------------------------- //
        .to($("#r1"), 1.5, {left: matrizRGo4[0][0], top: matrizRGo4[0][1]}, "-=1.5")
        .to($("#r2"), 1.5, {left: matrizRGo4[1][0], top: matrizRGo4[1][1]}, "-=1.5")
        .to($("#r3"), 1.5, {left: matrizRGo4[2][0], top: matrizRGo4[2][1]}, "-=1.5")
        .to($("#r4"), 1.5, {left: matrizRGo4[3][0], top: matrizRGo4[3][1]}, "-=1.5")
        .to($("#r5"), 1.5, {left: matrizRGo4[4][0], top: matrizRGo4[4][1]}, "-=1.5")
        .to($("#r6"), 1.5, {left: matrizRGo4[5][0], top: matrizRGo4[5][1]}, "-=1.5")
        .to($("#r7"), 1.5, {left: matrizRGo4[6][0], top: matrizRGo4[6][1]}, "-=1.5")
        .to($("#r8"), 1.5, {left: matrizRGo4[7][0], top: matrizRGo4[7][1]}, "-=1.5")
        .to($("#r9"), 1.5, {left: matrizRGo4[8][0], top: matrizRGo4[8][1]}, "-=1.5")
        .to($("#r10"), 1.5, {left: matrizRGo4[9][0], top: matrizRGo4[9][1]}, "-=1.5")
        .to($("#r11"), 1.5, {left: matrizRGo4[10][0], top: matrizRGo4[10][1]}, "-=1.5");
}

function ReturnPosition5()
{
    returnPositions5.to($("#b1"), 0.5, {left: matrizBBack5[0][0], top: matrizBBack5[0][1]})
        .to($("#b2"), 0.5, {left: matrizBBack5[1][0], top: matrizBBack5[1][1]}, "-=0.5")
        .to($("#b3"), 0.5, {left: matrizBBack5[2][0], top: matrizBBack5[2][1]}, "-=0.5")
        .to($("#b4"), 0.5, {left: matrizBBack5[3][0], top: matrizBBack5[3][1]}, "-=0.5")
        .to($("#b5"), 0.5, {left: matrizBBack5[4][0], top: matrizBBack5[4][1]}, "-=0.5")
        .to($("#b6"), 0.5, {left: matrizBBack5[5][0], top: matrizBBack5[5][1]}, "-=0.5")
        .to($("#b7"), 0.5, {left: matrizBBack5[6][0], top: matrizBBack5[6][1]}, "-=0.5")
        .to($("#b8"), 0.5, {left: matrizBBack5[7][0], top: matrizBBack5[7][1]}, "-=0.5")
        .to($("#b9"), 0.5, {left: matrizBBack5[8][0], top: matrizBBack5[8][1]}, "-=0.5")
        .to($("#b10"), 0.5, {left: matrizBBack5[9][0], top: matrizBBack5[9][1]}, "-=0.5")
        .to($("#b11"), 0.5, {left: matrizBBack5[10][0], top: matrizBBack5[10][1]}, "-=0.5")
// -------------------------------------------------------------------------------------------- //
        .to($("#r1"), 0.5, {left: matrizRBack5[0][0], top: matrizRBack5[0][1]}, "-=0.5")
        .to($("#r2"), 0.5, {left: matrizRBack5[1][0], top: matrizRBack5[1][1]}, "-=0.5")
        .to($("#r3"), 0.5, {left: matrizRBack5[2][0], top: matrizRBack5[2][1]}, "-=0.5")
        .to($("#r4"), 0.5, {left: matrizRBack5[3][0], top: matrizRBack5[3][1]}, "-=0.5")
        .to($("#r5"), 0.5, {left: matrizRBack5[4][0], top: matrizRBack5[4][1]}, "-=0.5")
        .to($("#r6"), 0.5, {left: matrizRBack5[5][0], top: matrizRBack5[5][1]}, "-=0.5")
        .to($("#r7"), 0.5, {left: matrizRBack5[6][0], top: matrizRBack5[6][1]}, "-=0.5")
        .to($("#r8"), 0.5, {left: matrizRBack5[7][0], top: matrizRBack5[7][1]}, "-=0.5")
        .to($("#r9"), 0.5, {left: matrizRBack5[8][0], top: matrizRBack5[8][1]}, "-=0.5")
        .to($("#r10"), 0.5, {left: matrizRBack5[9][0], top: matrizRBack5[9][1]}, "-=0.5")
        .to($("#r11"), 0.5, {left: matrizRBack5[10][0], top: matrizRBack5[10][1]}, "-=0.5");
}

function GoPosition5()
{
    goPositions5.to($("#b1"), 1.5, {left: matrizBGo5[0][0], top: matrizBGo5[0][1]})
        .to($("#b2"), 1.5, {left: matrizBGo5[1][0], top: matrizBGo5[1][1]}, "-=1.5")
        .to($("#b3"), 1.5, {left: matrizBGo5[2][0], top: matrizBGo5[2][1]}, "-=1.5")
        .to($("#b4"), 1.5, {left: matrizBGo5[3][0], top: matrizBGo5[3][1]}, "-=1.5")
        .to($("#b5"), 1.5, {left: matrizBGo5[4][0], top: matrizBGo5[4][1]}, "-=1.5")
        .to($("#b6"), 1.5, {left: matrizBGo5[5][0], top: matrizBGo5[5][1]}, "-=1.5")
        .to($("#b7"), 1.5, {left: matrizBGo5[6][0], top: matrizBGo5[6][1]}, "-=1.5")
        .to($("#b8"), 1.5, {left: matrizBGo5[7][0], top: matrizBGo5[7][1]}, "-=1.5")
        .to($("#b9"), 1.5, {left: matrizBGo5[8][0], top: matrizBGo5[8][1]}, "-=1.5")
        .to($("#b10"), 1.5, {left: matrizBGo5[9][0], top: matrizBGo5[9][1]}, "-=1.5")
        .to($("#b11"), 1.5, {left: matrizBGo5[10][0], top: matrizBGo5[10][1]}, "-=1.5")
// -------------------------------------------------------------------------------------------- //
        .to($("#r1"), 1.5, {left: matrizRGo5[0][0], top: matrizRGo5[0][1]}, "-=1.5")
        .to($("#r2"), 1.5, {left: matrizRGo5[1][0], top: matrizRGo5[1][1]}, "-=1.5")
        .to($("#r3"), 1.5, {left: matrizRGo5[2][0], top: matrizRGo5[2][1]}, "-=1.5")
        .to($("#r4"), 1.5, {left: matrizRGo5[3][0], top: matrizRGo5[3][1]}, "-=1.5")
        .to($("#r5"), 1.5, {left: matrizRGo5[4][0], top: matrizRGo5[4][1]}, "-=1.5")
        .to($("#r6"), 1.5, {left: matrizRGo5[5][0], top: matrizRGo5[5][1]}, "-=1.5")
        .to($("#r7"), 1.5, {left: matrizRGo5[6][0], top: matrizRGo5[6][1]}, "-=1.5")
        .to($("#r8"), 1.5, {left: matrizRGo5[7][0], top: matrizRGo5[7][1]}, "-=1.5")
        .to($("#r9"), 1.5, {left: matrizRGo5[8][0], top: matrizRGo5[8][1]}, "-=1.5")
        .to($("#r10"), 1.5, {left: matrizRGo5[9][0], top: matrizRGo5[9][1]}, "-=1.5")
        .to($("#r11"), 1.5, {left: matrizRGo5[10][0], top: matrizRGo5[10][1]}, "-=1.5");
}

function ReturnPosition6()
{
    returnPositions6.to($("#b1"), 0.5, {left: matrizBBack6[0][0], top: matrizBBack6[0][1]})
        .to($("#b2"), 0.5, {left: matrizBBack6[1][0], top: matrizBBack6[1][1]}, "-=0.5")
        .to($("#b3"), 0.5, {left: matrizBBack6[2][0], top: matrizBBack6[2][1]}, "-=0.5")
        .to($("#b4"), 0.5, {left: matrizBBack6[3][0], top: matrizBBack6[3][1]}, "-=0.5")
        .to($("#b5"), 0.5, {left: matrizBBack6[4][0], top: matrizBBack6[4][1]}, "-=0.5")
        .to($("#b6"), 0.5, {left: matrizBBack6[5][0], top: matrizBBack6[5][1]}, "-=0.5")
        .to($("#b7"), 0.5, {left: matrizBBack6[6][0], top: matrizBBack6[6][1]}, "-=0.5")
        .to($("#b8"), 0.5, {left: matrizBBack6[7][0], top: matrizBBack6[7][1]}, "-=0.5")
        .to($("#b9"), 0.5, {left: matrizBBack6[8][0], top: matrizBBack6[8][1]}, "-=0.5")
        .to($("#b10"), 0.5, {left: matrizBBack6[9][0], top: matrizBBack6[9][1]}, "-=0.5")
        .to($("#b11"), 0.5, {left: matrizBBack6[10][0], top: matrizBBack6[10][1]}, "-=0.5")
// -------------------------------------------------------------------------------------------- //
        .to($("#r1"), 0.5, {left: matrizRBack6[0][0], top: matrizRBack6[0][1]}, "-=0.5")
        .to($("#r2"), 0.5, {left: matrizRBack6[1][0], top: matrizRBack6[1][1]}, "-=0.5")
        .to($("#r3"), 0.5, {left: matrizRBack6[2][0], top: matrizRBack6[2][1]}, "-=0.5")
        .to($("#r4"), 0.5, {left: matrizRBack6[3][0], top: matrizRBack6[3][1]}, "-=0.5")
        .to($("#r5"), 0.5, {left: matrizRBack6[4][0], top: matrizRBack6[4][1]}, "-=0.5")
        .to($("#r6"), 0.5, {left: matrizRBack6[5][0], top: matrizRBack6[5][1]}, "-=0.5")
        .to($("#r7"), 0.5, {left: matrizRBack6[6][0], top: matrizRBack6[6][1]}, "-=0.5")
        .to($("#r8"), 0.5, {left: matrizRBack6[7][0], top: matrizRBack6[7][1]}, "-=0.5")
        .to($("#r9"), 0.5, {left: matrizRBack6[8][0], top: matrizRBack6[8][1]}, "-=0.5")
        .to($("#r10"), 0.5, {left: matrizRBack6[9][0], top: matrizRBack6[9][1]}, "-=0.5")
        .to($("#r11"), 0.5, {left: matrizRBack6[10][0], top: matrizRBack6[10][1]}, "-=0.5");
}

function GoPosition6()
{
    goPositions6.to($("#b1"), 1.5, {left: matrizBGo6[0][0], top: matrizBGo6[0][1]})
        .to($("#b2"), 1.5, {left: matrizBGo6[1][0], top: matrizBGo6[1][1]}, "-=1.5")
        .to($("#b3"), 1.5, {left: matrizBGo6[2][0], top: matrizBGo6[2][1]}, "-=1.5")
        .to($("#b4"), 1.5, {left: matrizBGo6[3][0], top: matrizBGo6[3][1]}, "-=1.5")
        .to($("#b5"), 1.5, {left: matrizBGo6[4][0], top: matrizBGo6[4][1]}, "-=1.5")
        .to($("#b6"), 1.5, {left: matrizBGo6[5][0], top: matrizBGo6[5][1]}, "-=1.5")
        .to($("#b7"), 1.5, {left: matrizBGo6[6][0], top: matrizBGo6[6][1]}, "-=1.5")
        .to($("#b8"), 1.5, {left: matrizBGo6[7][0], top: matrizBGo6[7][1]}, "-=1.5")
        .to($("#b9"), 1.5, {left: matrizBGo6[8][0], top: matrizBGo6[8][1]}, "-=1.5")
        .to($("#b10"), 1.5, {left: matrizBGo6[9][0], top: matrizBGo6[9][1]}, "-=1.5")
        .to($("#b11"), 1.5, {left: matrizBGo6[10][0], top: matrizBGo6[10][1]}, "-=1.5")
// -------------------------------------------------------------------------------------------- //
        .to($("#r1"), 1.5, {left: matrizRGo6[0][0], top: matrizRGo6[0][1]}, "-=1.5")
        .to($("#r2"), 1.5, {left: matrizRGo6[1][0], top: matrizRGo6[1][1]}, "-=1.5")
        .to($("#r3"), 1.5, {left: matrizRGo6[2][0], top: matrizRGo6[2][1]}, "-=1.5")
        .to($("#r4"), 1.5, {left: matrizRGo6[3][0], top: matrizRGo6[3][1]}, "-=1.5")
        .to($("#r5"), 1.5, {left: matrizRGo6[4][0], top: matrizRGo6[4][1]}, "-=1.5")
        .to($("#r6"), 1.5, {left: matrizRGo6[5][0], top: matrizRGo6[5][1]}, "-=1.5")
        .to($("#r7"), 1.5, {left: matrizRGo6[6][0], top: matrizRGo6[6][1]}, "-=1.5")
        .to($("#r8"), 1.5, {left: matrizRGo6[7][0], top: matrizRGo6[7][1]}, "-=1.5")
        .to($("#r9"), 1.5, {left: matrizRGo6[8][0], top: matrizRGo6[8][1]}, "-=1.5")
        .to($("#r10"), 1.5, {left: matrizRGo6[9][0], top: matrizRGo6[9][1]}, "-=1.5")
        .to($("#r11"), 1.5, {left: matrizRGo6[10][0], top: matrizRGo6[10][1]}, "-=1.5");
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