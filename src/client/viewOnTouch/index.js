let recFlag = null;
let recording = false;
let gravadorPost = 0
const dbInformation = getData();
let matrizes = new Array();
let playSwitch = 0;
// Removendo o clique direito da aplicação
document.addEventListener('contextmenu', event => event.preventDefault());
for(i=1; i<12; i++){	
	$("#b"+i).draggable();
	$("#r"+i).draggable();    
}

Promise.resolve(dbInformation).then(dataReceived => {
	matrizes = dataReceived;
})

$("#play").click(function() {
	GoPosition(playSwitch);
});
$("#presetButton1").click(function() {
	playSwitch = 0;
	ReturnPosition(playSwitch);
});

$("#presetButton2").click(function() {
	playSwitch = 1;
	ReturnPosition(playSwitch);	
});
$("#presetButton3").click(()=> {
	playSwitch = 2;
	ReturnPosition(playSwitch);
})
$("#presetButton4").click(()=> {
	playSwitch = 3;
	ReturnPosition(playSwitch);
})
$("#presetButton5").click(()=> {
	playSwitch = 4;
	ReturnPosition(playSwitch);
})
$("#presetButton6").click(()=> {
	playSwitch = 5;
	ReturnPosition(playSwitch);
})