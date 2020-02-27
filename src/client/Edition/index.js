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

function handlePresetClick(n){
	alert('Você está gravando no preset ' + n)
	matrizBackPositions(n-1);
	gravadorPost = n;
	recording = false;
}

$("#presetButton1").click(function(){
	if(del) {
		del = false;
		postDeletePresets(1);
		alert('Deletado preset 1');
		return;
	}
	if(recording){
		handlePresetClick(1);
		return;
	}
	playSwitch = 0;
	ReturnPosition(playSwitch);
});

$("#presetButton2").click(function(){
	if(del) {
		del = false;
		postDeletePresets(2);
		alert('Deletado preset 2');
		return;
	}
	if(recording){
		handlePresetClick(2);
		return;
	}
	playSwitch = 1;
	ReturnPosition(playSwitch);	
});
$("#presetButton3").click(()=>{
	if(del) {
		del = false;
		postDeletePresets(3);
		alert('Deletado preset 3');
		return;
	}
	if(recording){
		handlePresetClick(3);
		return;
	}
	playSwitch = 2;
	ReturnPosition(playSwitch);
})
$("#presetButton4").click(()=>{
	if(del) {
		del = false;
		postDeletePresets(4);
		alert('Deletado preset 4');
		return;
	}
	if(recording){
		handlePresetClick(4);
		return;
	}
	playSwitch = 3;
	ReturnPosition(playSwitch);
})
$("#presetButton5").click(()=>{
	if(del) {
		del = false;
		postDeletePresets(5);
		alert('Deletado preset 5');
		return;
	}
	if(recording){
		handlePresetClick(5);
		return;
	}
	playSwitch = 4;
	ReturnPosition(playSwitch);
})
$("#presetButton6").click(()=>{
	if(del) {
		del = false;
		postDeletePresets(6);
		alert('Deletado preset 6');
		return;
	}
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