var playSwitch = 0;
var matrizBBack1 = [], matrizBBack2 = [], matrizBGo1 = [], matrizBGo2 = []
	, matrizBBack3 = [], matrizBBack4 = [], matrizBBack5 = [], matrizBBack6 = []
	, matrizBGo3 = [], matrizBGo4 = [], matrizBGo5 = [], matrizBGo6 = []
	, matrizRBack3 = [], matrizRBack4 = [], matrizRBack5 = [], matrizRBack6 = []
	, matrizRGo3 = [], matrizRGo4 = [], matrizRGo5 = [], matrizRGo6 = []
	, matrizRBack1 = [], matrizRBack2 = [], matrizRGo1 = [], matrizRGo2 = [];

//////////////
var recFlag = null, flagBackRecord = 1, recording = false;


for(i = 0; i<11; i++)
{
	matrizBBack1[i] = [];
	matrizBBack2[i] = [];
	matrizBBack3[i] = [];
	matrizBBack4[i] = [];
	matrizBBack5[i] = [];
	matrizBBack6[i] = [];
	matrizBGo1[i] = [];
	matrizBGo2[i] = [];
	matrizBGo3[i] = [];
	matrizBGo4[i] = [];
	matrizBGo5[i] = [];
	matrizBGo6[i] = [];

	matrizRBack1[i] = [];
	matrizRBack2[i] = [];
	matrizRBack3[i] = [];
	matrizRBack4[i] = [];
	matrizRBack5[i] = [];
	matrizRBack6[i] = [];
	matrizRGo1[i] = [];
	matrizRGo2[i] = [];
	matrizRGo3[i] = [];
	matrizRGo4[i] = [];
	matrizRGo5[i] = [];
	matrizRGo6[i] = [];

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

$("#deleteButton").click(() =>
{
	postData = del;
	post()
})

// Aqui deverá haver uma const que receberá uma response
// do server com seu sinalizador de praça
// e apartir dele puxará os presets do server
// do seu respectivo banco de dados

const dbInformation = getData();
let matrizes = [];

Promise.resolve(dbInformation).then(data =>
{
	for(i=0; i<6; i++)
	{
		matrizes[i] = data[i];
	}
	matrizRGo1 = matrizes[0].matrizGo;
	matrizRGo2 = matrizes[1].matrizGo;
	matrizRGo3 = matrizes[2].matrizGo;
	matrizRGo4 = matrizes[3].matrizGo;
	matrizRGo5 = matrizes[4].matrizGo;
	matrizRGo6 = matrizes[5].matrizGo;
	matrizRBack1 = matrizes[0].matrizBack;
	matrizRBack2 = matrizes[1].matrizBack;
	matrizRBack3 = matrizes[2].matrizBack;
	matrizRBack4 = matrizes[3].matrizBack;
	matrizRBack5 = matrizes[4].matrizBack;
	matrizRBack6 = matrizes[5].matrizBack;
	matrizBGo1 = matrizes[0].matrizGo;
	matrizBGo2 = matrizes[1].matrizGo;
	matrizBGo3 = matrizes[2].matrizGo;
	matrizBGo4 = matrizes[3].matrizGo;
	matrizBGo5 = matrizes[4].matrizGo;
	matrizBGo6 = matrizes[5].matrizGo;
	matrizBBack1 = matrizes[0].matrizBack;
	matrizBBack2 = matrizes[1].matrizBack;
	matrizBBack3 = matrizes[2].matrizBack;
	matrizBBack4 = matrizes[3].matrizBack;
	matrizBBack5 = matrizes[4].matrizBack;
	matrizBBack6 = matrizes[5].matrizBack;
})

function Gravador()
{
	if(recFlag == false) // BOTAO STOP
	{
		recFlag = true;
		matrizGoPositions();
		// PARA FAZER O POST NO SERVER	
		switch(flagGoRecord)
		{
			case 1:
				data.dataGO = matrizBGo1;
				data.dataBack = matrizBBack1;
				data.presetNumber = 1;
				break;
			case 2:
				data.dataGO = matrizBGo2;
				data.dataBack = matrizBBack2;
				data.presetNumber = 2;
				break;
			case 3:
				data.dataGO = matrizBGo3;
				data.dataBack = matrizBBack3;
				data.presetNumber = 3;
				break;
			case 4:
				data.dataGO = matrizBGo4;
				data.dataBack = matrizBBack4;
				data.presetNumber = 4;
				break;
			case 5:
				data.dataGO = matrizBGo5;
				data.dataBack = matrizBBack5;
				data.presetNumber = 5;
				break;
			case 6:
				data.dataGO = matrizBGo6;
				data.dataBack = matrizBBack6;
				data.presetNumber = 6;
				break;
		}
		postData = data;
		post();
	}
	// No REC entra sempre primeiro aqui.
	else
	{
		alert("Selecione o preset a ser gravado");
		recording = true;
		recFlag = false;
	}
}

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
		case 3:
			GoPosition3();
			break;
		case 4:
			GoPosition4();
			break;
		case 5:
			GoPosition5();
			break;
		case 6:
			GoPosition6();
			break;
	}
});

$("#presetButton1").click(function()
{
	if(recording)
	{
		flagGoRecord = 1;
		flagBackRecord = 1;
		matrizBackPositions();
		recording = false;
		return;
	}
	ReturnPosition();
	playSwitch = 1;
});

$("#presetButton2").click(function()
{
	if(recording)
	{
		flagGoRecord = 2;
		flagBackRecord = 2;
		matrizBackPositions();
		recording = false;
		return;
	}
	ReturnPosition2();	
	playSwitch = 2;
});
$("#presetButton3").click(()=>
{
	if(recording)
	{
		flagGoRecord = 3;
		flagBackRecord = 3;
		matrizBackPositions();
		recording = false;
		return;
	}
	ReturnPosition3();
	playSwitch = 3;
})
$("#presetButton4").click(()=>
{
	if(recording)
	{
		flagGoRecord = 4;
		flagBackRecord = 4;
		matrizBackPositions();
		recording = false;
		return;
	}
	ReturnPosition4();
	playSwitch = 4;
})
$("#presetButton5").click(()=>
{
	if(recording)
	{
		flagGoRecord = 5;
		flagBackRecord = 5;
		matrizBackPositions();
		recording = false;
		return;
	}
	ReturnPosition5();
	playSwitch = 5;
})
$("#presetButton6").click(()=>
{
	if(recording)
	{
		flagGoRecord = 6;
		flagBackRecord = 6;
		matrizBackPositions();
		recording = false;
		return;
	}
	ReturnPosition6();
	playSwitch = 6;
})

$("#rec").click(() =>
{
	Gravador();
});