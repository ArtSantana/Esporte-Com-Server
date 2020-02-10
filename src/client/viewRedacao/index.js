let playSwitch = 0;
let recFlag = null;
let recording = false;
let gravadorPost = 0

// Removendo o clique direito da aplicação
document.addEventListener('contextmenu', event => event.preventDefault());
// Deixando os jogadores draggable
for(i=1; i<12; i++){	
	$("#b"+i).draggable();
	$("#r"+i).draggable();    
}

$("#deleteButton").click(() =>{
	postData = del;
	postDeletePresets();
})

const dbInformation = getData();
let matrizes = new Array();

 Promise.resolve(dbInformation).then(dataReceived =>{
	 matrizes = dataReceived;
	})

function Gravador(){ // O gravadorPost é diminuido em 1 para acertar o index do objeto.
	if(recFlag == false){
		recFlag = true;
		matrizGoPositions(gravadorPost - 1);
		data.positions = matrizes[gravadorPost-1].presetPositions;
		data.presetNumber = gravadorPost;
		
		postPreset();
		alert('PRESET SALVO')
	}
	else{ // Always enter here first
		alert("Selecione o preset a ser gravado");
		recording = true;
		recFlag = false;
	}
}

$("#play").click(function(){
	GoPosition(playSwitch);
});

function handlePresetClick(n){
	alert('Você está gravando no preset ' + n)
	matrizBackPositions(n-1);
	gravadorPost = n;
	recording = false;
}

$("#presetButton1").click(function(){
	if(recording){
		handlePresetClick(1);
		return;
	}
	playSwitch = 0;
	ReturnPosition(playSwitch);
});

$("#presetButton2").click(function(){
	if(recording){
		handlePresetClick(2);
		return;
	}
	playSwitch = 1;
	ReturnPosition(playSwitch);	
});
$("#presetButton3").click(()=>{
	if(recording){
		handlePresetClick(3);
		return;
	}
	playSwitch = 2;
	ReturnPosition(playSwitch);
})
$("#presetButton4").click(()=>{
	if(recording){
		handlePresetClick(4);
		return;
	}
	playSwitch = 3;
	ReturnPosition(playSwitch);
})
$("#presetButton5").click(()=>{
	if(recording){
		handlePresetClick(5);
		return;
	}
	playSwitch = 4;
	ReturnPosition(playSwitch);
})
$("#presetButton6").click(()=>{
	if(recording){
		handlePresetClick(6);
		return;
	}
	playSwitch = 5;
	ReturnPosition(playSwitch);
})

$("#rec").click(() =>{
	Gravador();
});