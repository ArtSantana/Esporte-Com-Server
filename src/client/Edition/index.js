let playSwitch = 0;
let recFlag = null;
let recording = false;
let gravadorPost = 0
let del = false;
// Removendo o clique direito da aplicação
document.addEventListener('contextmenu', event => event.preventDefault());
// Deixando os jogadores draggable
for(i=1; i<12; i++){	
	$("#b"+i).draggable();
	$("#r"+i).draggable();    
}

$("#deleteButton").click(() =>{
	del = true;
	alert('Selecione um preset a ser EXCLUÍDO');
})

const dbInformation = getData();
let matrizes = new Array();

Promise.resolve(dbInformation).then(dataReceived => {
	matrizes = dataReceived;
})
// O gravadorPost é diminuido em 1 para acertar o index do objeto.
function Gravador(){ 
	if(recFlag == false){
		recFlag = true;
		matrizGoPositions(gravadorPost - 1);
		data.positions = matrizes[gravadorPost-1].presetPositions;
		data.presetNumber = gravadorPost;
		$("#rec").attr('src', '../assets/ArteButtons/REC.png');
		postPreset();
		alert('PRESET SALVO')
	}
	else{ // Always enter here first
		$("#rec").attr('src', '../assets/ArteButtons/stop.png');
		alert("Selecione o preset a ser gravado");
		recording = true;
		recFlag = false;
	}
}

$("#play").click(function(){
	GoPosition(playSwitch);
});

function handleRecordPresetClick(n){
	alert('Você está gravando no preset ' + n)
	matrizBackPositions(n-1);
	gravadorPost = n;
	recording = false;
}

function HandleDelete(n) {
	del = false;
	postDeletePresets(n);
	alert(`Deletado preset ${n}`);
}

function handlePresetClick(n) {
	if(del) {
		HandleDelete(n);
		return
	}
	if(recording) {
		handleRecordPresetClick(n);
		return;
	}
	playSwitch = n-1;
	ReturnPosition(playSwitch);
}

$("#presetButton1").click(() => {
	handlePresetClick(1);
});

$("#presetButton2").click(() => {
	handlePresetClick(2);
});

$("#presetButton3").click(() => {
	handlePresetClick(3);
})

$("#presetButton4").click(() => {
	handlePresetClick(4);
})

$("#presetButton5").click(() => {
	handlePresetClick(5);
})

$("#presetButton6").click(() => {
	handlePresetClick(6);
})

$("#rec").click(() => {
	Gravador();
});