var returnPositions = new TimelineLite(), returnPositions2 = new TimelineLite();
var goPositions = new TimelineLite(), goPositions2 = new TimelineLite();
var recPreset = 1, playSwitch = 0;
var matrizBBack1 = [], matrizBBack2 = [], matrizBGo1 = [], matrizBGo2 = []
	, matrizRBack1 = [], matrizRBack2 = [], matrizRGo1 = [], matrizRGo2 = [];
//////////////
var recFlag = null, flagBackRecord = 1;


for(i = 0; i<11; i++)
{
	matrizBBack1[i] = [];
	matrizBBack2[i] = [];
	matrizBGo1[i] = [];
	matrizBGo2[i] = [];

	matrizRBack1[i] = [];
	matrizRBack2[i] = [];
	matrizRGo1[i] = [];
	matrizRGo2[i] = [];

}


/*
As variáveis back são responsáveis por fazer animação dos jogadores voltando a suas posições inicias,
que precedem a animação. Portanto, as variáveis go determinam a posição final da animação.
*/

// Removendo o clique direito da aplicação
document.addEventListener('contextmenu', event => event.preventDefault());
// Deixando os jogadores draggable
for(i=1; i<12; i++)
{	
	$("#b"+i).draggable();
}

for(i=1; i<12; i++)
{
	$("#r"+i).draggable();    
}

function Gravador()
{
	if(recFlag == false) // BOTAO STOP
	{
		recFlag = true;
		// ESCOLHA DO PRESET
		switch(recPreset)
		{
			case 1:
				flagGoRecord = 1;
				matrizGoPositions();
				ReturnPosition();
				post();
				break;
			case 2:
				flagGoRecord = 2;
				matrizGoPositions();
				ReturnPosition2();
				break;
			case 3:
				break;
			case 4:
				break;
			case 5:
				break;
			case 6:
				break;
		}
	}
	// No REC entra sempre primeiro aqui.
	else
	{
		alert("Selecione o preset a ser gravado");
		matrizBackPositions();

		recFlag = false;
	}
}

// VISIBILIDADE DOS TIMES
$("#black").click(toggleTeamA);

$("#red").click(toggleTeamB);


$("#play").click(function()
{
	// Troca de preset ----------
	switch(playSwitch)
	{
		case 1:
			GoPosition();
			break;
		case 2:
			GoPosition2();
			break;
	}
});

$("#presetButton1").click(function()
{
	ReturnPosition();	
	playSwitch = 1;
	recPreset = 1;
});

$("#presetButton2").click(function()
{
	ReturnPosition2();	
	playSwitch = 2;
	recPreset = 2;
});
$("#presetBUtton3").click(()=>
{
	playSwitch = 3;
	recPreset = 3;
})
$("#presetBUtton4").click(()=>
{
	playSwitch = 4;
	recPreset = 4;
})
$("#presetBUtton5").click(()=>
{
	playSwitch = 5;
	recPreset = 5;
})
$("#presetBUtton6").click(()=>
{
	playSwitch = 6;
	recPreset = 6;
})

$("#rec").click(() =>
{

	Gravador();
});