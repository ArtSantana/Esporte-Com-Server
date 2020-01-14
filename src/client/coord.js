function matrizBackPositions()
{
    for(i=0; i<11; i++)
    {
        for(j=0; j<2; j++)
        {
            switch(flagBackRecord)
            {
                case 1:
                    if(j == 0)
                    {
                        matrizes[0].presetPositions.matrixBackTeamA[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizes[0].presetPositions.matrixBackTeamB[i][j] = $("#r"+(i+1))[0].style.left;
                    } 
                    else if(j == 1)
                    {
                        matrizes[0].presetPositions.matrixBackTeamA[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizes[0].presetPositions.matrixBackTeamB[i][j] = $("#r"+(i+1))[0].style.top;
                    }    
                    break;
                case 2:
                    if(j == 0)
                    {
                        matrizes[1].presetPositions.matrixBackTeamA[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizes[1].presetPositions.matrixBackTeamB[i][j] = $("#r"+(i+1))[0].style.left;
                    } 
                    else if(j == 1)
                    {
                        matrizes[1].presetPositions.matrixBackTeamA[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizes[1].presetPositions.matrixBackTeamB[i][j] = $("#r"+(i+1))[0].style.top;
                    }
                    break;
                case 3:
                    if(j == 0)
                    {0
                        matrizes[2].presetPositions.matrixBackTeamA[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizes[2].presetPositions.matrixBackTeamB[i][j] = $("#r"+(i+1))[0].style.left;
                    } 
                    else if(j == 1)
                    {
                        matrizes[2].presetPositions.matrixBackTeamA[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizes[2].presetPositions.matrixBackTeamB[i][j] = $("#r"+(i+1))[0].style.top;
                    }
                    break;
                case 4:
                    if(j == 0)
                    {
                        matrizes[3].presetPositions.matrixBackTeamA[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizes[3].presetPositions.matrixBackTeamB[i][j] = $("#r"+(i+1))[0].style.left;
                    } 
                    else if(j == 1)
                    {
                        matrizes[3].presetPositions.matrixBackTeamA[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizes[3].presetPositions.matrixBackTeamB[i][j] = $("#r"+(i+1))[0].style.top;
                    }
                    break;
                case 5:
                    if(j == 0)
                    {
                        matrizes[4].presetPositions.matrixBackTeamA[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizes[4].presetPositions.matrixBackTeamB[i][j] = $("#r"+(i+1))[0].style.left;
                    } 
                    else if(j == 1)
                    {
                        matrizes[4].presetPositions.matrixBackTeamA[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizes[4].presetPositions.matrixBackTeamB[i][j] = $("#r"+(i+1))[0].style.top;
                    }
                    break;
                case 6:
                    if(j == 0)
                    {
                        matrizes[5].presetPositions.matrixBackTeamA[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizes[5].presetPositions.matrixBackTeamB[i][j] = $("#r"+(i+1))[0].style.left;
                    } 
                    else if(j == 1)
                    {
                        matrizes[5].presetPositions.matrixBackTeamA[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizes[5].presetPositions.matrixBackTeamB[i][j] = $("#r"+(i+1))[0].style.top;
                    }
                    break;
            }
        }
    }
    console.log(matrizes[flagBackRecord].presetPositions.matrixBackTeamA);
}

function matrizGoPositions()
{
    for(i=0; i<11; i++)
    {
        for(j=0; j<2; j++)
        {
            switch(flagBackRecord)
            {
                case 1:
                    if(j == 0)
                    {
                        matrizes[0].presetPositions.matrixGoTeamA[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizes[0].presetPositions.matrixGoTeamB[i][j] = $("#r"+(i+1))[0].style.left;
                    } 
                    else if(j == 1)
                    {
                        matrizes[0].presetPositions.matrixGoTeamA[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizes[0].presetPositions.matrixGoTeamB[i][j] = $("#r"+(i+1))[0].style.top;
                    }    
                    break;
                case 2:
                    if(j == 0)
                    {
                        matrizes[1].presetPositions.matrixGoTeamA[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizes[1].presetPositions.matrixGoTeamB[i][j] = $("#r"+(i+1))[0].style.left;
    
                    } 
                    else if(j == 1)
                    {
                        matrizes[1].presetPositions.matrixGoTeamA[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizes[1].presetPositions.matrixGoTeamB[i][j] = $("#r"+(i+1))[0].style.top;
                    }
                    break;
                case 3:
                    if(j == 0)
                    {
                        matrizes[2].presetPositions.matrixGoTeamA[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizes[2].presetPositions.matrixGoTeamB[i][j] = $("#r"+(i+1))[0].style.left;
    
                    } 
                    else if(j == 1)
                    {
                        matrizes[2].presetPositions.matrixGoTeamA[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizes[2].presetPositions.matrixGoTeamB[i][j] = $("#r"+(i+1))[0].style.top;
                    }
                    break;
                case 4:
                    if(j == 0)
                    {
                        matrizes[3].presetPositions.matrixGoTeamA[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizes[3].presetPositions.matrixGoTeamB[i][j] = $("#r"+(i+1))[0].style.left;
                    } 
                    else if(j == 1)
                    {
                        matrizes[3].presetPositions.matrixGoTeamA[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizes[3].presetPositions.matrixGoTeamB[i][j] = $("#r"+(i+1))[0].style.top;
                    }
                    break;
                case 5:
                    if(j == 0)
                    {
                        matrizes[4].presetPositions.matrixGoTeamA[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizes[4].presetPositions.matrixGoTeamB[i][j] = $("#r"+(i+1))[0].style.left;    
                    } 
                    else if(j == 1)
                    {
                        matrizes[4].presetPositions.matrixGoTeamA[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizes[4].presetPositions.matrixGoTeamB[i][j] = $("#r"+(i+1))[0].style.top;
                    }
                    break;
                case 6:
                    if(j == 0)
                    {
                        matrizes[5].presetPositions.matrixGoTeamA[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizes[5].presetPositions.matrixGoTeamB[i][j] = $("#r"+(i+1))[0].style.left;    
                    } 
                    else if(j == 1)
                    {
                        matrizes[5].presetPositions.matrixGoTeamA[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizes[5].presetPositions.matrixGoTeamB[i][j] = $("#r"+(i+1))[0].style.top;
                    }
                    break;
            }
        }
    }
}