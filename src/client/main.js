let playSwitch = 0;
let recFlag = null;
let flagBackRecord = 1;
let recording = false;

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
	$("#r"+i).draggable();    
}

$("#deleteButton").click(() =>
{
	postData = del;
	postDeletePresets();
})

// Aqui deverá haver uma const que receberá uma response
// do server com seu sinalizador de praça
// e apartir dele puxará os presets do server
// do seu respectivo banco de dados

const dbInformation = getData();
let matrizes;

Promise.resolve(dbInformation).then(dataReceived =>
{
	matrizes = dataReceived;
})

function Gravador()
{
	if(recFlag == false) // BOTAO STOP
	{
		recFlag = true;
		matrizGoPositions();
		switch(flagGoRecord)
		{
			case 1:
				data.positions = matrizes[0].presetPositions;
				data.presetNumber = 1;
				break;
			case 2:
				data.positions = matrizes[1].presetPositions;
				data.presetNumber = 2;
				break;
			case 3:
				data.positions = matrizes[2].presetPositions;
				data.presetNumber = 3;
				break;
			case 4:
				data.positions = matrizes[3].presetPositions;
				data.presetNumber = 4;
				break;
			case 5:
				data.positions = matrizes[4].presetPositions;
				data.presetNumber = 5;
				break;
			case 6:
				data.positions = matrizes[5].presetPositions;
				data.presetNumber = 6;
				break;
		}
		console.log(data);
		postData = data;
		postPreset();
		alert('PRESET SALVO')
	}
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

function handlePresetClick(n)
{
	alert('Você está gravando no preset ' + n)
	flagGoRecord = n;
	flagBackRecord = n;
	matrizBackPositions();
	recording = false;
}

$("#presetButton1").click(function()
{
	if(recording)
	{
		handlePresetClick(1);
		return;
	}
	ReturnPosition();
	playSwitch = 1;
});

$("#presetButton2").click(function()
{
	if(recording)
	{
		handlePresetClick(2);
		return;
	}
	ReturnPosition2();	
	playSwitch = 2;
});
$("#presetButton3").click(()=>
{
	if(recording)
	{
		handlePresetClick(3);
		return;
	}
	ReturnPosition3();
	playSwitch = 3;
})
$("#presetButton4").click(()=>
{
	if(recording)
	{
		handlePresetClick(4);
		return;
	}
	ReturnPosition4();
	playSwitch = 4;
})
$("#presetButton5").click(()=>
{
	if(recording)
	{
		handlePresetClick(5);
		return;
	}
	ReturnPosition5();
	playSwitch = 5;
})
$("#presetButton6").click(()=>
{
	if(recording)
	{
		handlePresetClick(6);
		return;
	}
	ReturnPosition6();
	playSwitch = 6;
})

$("#rec").click(() =>
{
	Gravador();
});