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
                        matrizBBack1[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizRBack1[i][j] = $("#r"+(i+1))[0].style.left;
                    } 
                    else if(j == 1)
                    {
                        matrizBBack1[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizRBack1[i][j] = $("#r"+(i+1))[0].style.top;
                    }    
                    break;
                case 2:
                    if(j == 0)
                    {
                        matrizBBack2[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizRBack2[i][j] = $("#r"+(i+1))[0].style.left;
    
                    } 
                    else if(j == 1)
                    {
                        matrizBBack2[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizRBack2[i][j] = $("#r"+(i+1))[0].style.top;
                    }
                    break;
                case 3:
                    if(j == 0)
                    {
                        matrizBBack3[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizRBack3[i][j] = $("#r"+(i+1))[0].style.left;
    
                    } 
                    else if(j == 1)
                    {
                        matrizBBack3[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizRBack3[i][j] = $("#r"+(i+1))[0].style.top;
                    }
                    break;
                case 4:
                    if(j == 0)
                    {
                        matrizBBack4[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizRBack4[i][j] = $("#r"+(i+1))[0].style.left;
    
                    } 
                    else if(j == 1)
                    {
                        matrizBBack4[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizRBack4[i][j] = $("#r"+(i+1))[0].style.top;
                    }
                    break;
                case 5:
                    if(j == 0)
                    {
                        matrizBBack5[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizRBack5[i][j] = $("#r"+(i+1))[0].style.left;
    
                    } 
                    else if(j == 1)
                    {
                        matrizBBack5[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizRBack5[i][j] = $("#r"+(i+1))[0].style.top;
                    }
                    break;
                case 6:
                    if(j == 0)
                    {
                        matrizBBack6[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizRBack6[i][j] = $("#r"+(i+1))[0].style.left;
    
                    } 
                    else if(j == 1)
                    {
                        matrizBBack6[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizRBack6[i][j] = $("#r"+(i+1))[0].style.top;
                    }
                    break;
            }
        }
    }
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
                        matrizBGo1[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizRGo1[i][j] = $("#r"+(i+1))[0].style.left;
                    } 
                    else if(j == 1)
                    {
                        matrizBGo1[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizRGo1[i][j] = $("#r"+(i+1))[0].style.top;
                    }    
                    break;
                case 2:
                    if(j == 0)
                    {
                        matrizBGo2[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizRGo2[i][j] = $("#r"+(i+1))[0].style.left;
    
                    } 
                    else if(j == 1)
                    {
                        matrizBGo2[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizRGo2[i][j] = $("#r"+(i+1))[0].style.top;
                    }
                    break;
                case 3:
                    if(j == 0)
                    {
                        matrizBGo3[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizRGo3[i][j] = $("#r"+(i+1))[0].style.left;
    
                    } 
                    else if(j == 1)
                    {
                        matrizBGo3[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizRGo3[i][j] = $("#r"+(i+1))[0].style.top;
                    }
                    break;
                case 4:
                    if(j == 0)
                    {
                        matrizBGo4[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizRGo4[i][j] = $("#r"+(i+1))[0].style.left;
    
                    } 
                    else if(j == 1)
                    {
                        matrizBGo4[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizRGo4[i][j] = $("#r"+(i+1))[0].style.top;
                    }
                    break;
                case 5:
                    if(j == 0)
                    {
                        matrizBGo5[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizRGo5[i][j] = $("#r"+(i+1))[0].style.left;
    
                    } 
                    else if(j == 1)
                    {
                        matrizBGo5[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizRGo5[i][j] = $("#r"+(i+1))[0].style.top;
                    }
                    break;
                case 6:
                    if(j == 0)
                    {
                        matrizBGo6[i][j] = $("#b"+(i+1))[0].style.left;
                        matrizRGo6[i][j] = $("#r"+(i+1))[0].style.left;
    
                    } 
                    else if(j == 1)
                    {
                        matrizBGo6[i][j] = $("#b"+(i+1))[0].style.top;
                        matrizRGo6[i][j] = $("#r"+(i+1))[0].style.top;
                    }
                    break;
            }
        }
    }
}