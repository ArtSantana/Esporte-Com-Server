function matrizBackPositions()
{
    $("#rec").text("Stop");
    for(i=0; i<11; i++)
    {
        for(j=0; j<2; j++)
        {
            if(flagBackRecord == 1)
            {
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
            }
            else if(flagBackRecord == 2)
            {
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

            }
        }
    }
}

function matrizGoPositions()
{
    $("#rec").text("REC");
    for(i=0; i<11; i++)
    {
        for(j=0; j<2; j++)
        {
            if(flagGoRecord == 1)
            {
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
            }
            else if(flagGoRecord == 2)
            {
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

            }
        }
    }
}