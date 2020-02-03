$("#presetButton1").click(() => {
  if(!recording){
    for(let i=1; i<12; i++){
      $("#b"+i).attr('src', '../assets/Presets/preset1/Time A/'+i+'.png');
      $("#r"+i).attr('src', '../assets/Presets/preset1/Time B/'+i+'.png');
    }
  }
})
$("#presetButton2").click(() => {
  if(!recording){
    for(let i=1; i<12; i++){
      $("#b"+i).attr('src', '../assets/Presets/preset2/Time A/'+i+'.png');
      $("#r"+i).attr('src', '../assets/Presets/preset2/Time B/'+i+'.png');
    }
  }
})
$("#presetButton3").click(() => {
  if(!recording){
    for(let i=1; i<12; i++){
      $("#b"+i).attr('src', '../assets/Presets/preset3/Time A/'+i+'.png');
      $("#r"+i).attr('src', '../assets/Presets/preset3/Time B/'+i+'.png');
    }
  }
})
$("#presetButton4").click(() => {
  if(!recording){
    for(let i=1; i<12; i++){
      $("#b"+i).attr('src', '../assets/Presets/preset4/Time A/'+i+'.png');
      $("#r"+i).attr('src', '../assets/Presets/preset4/Time B/'+i+'.png');
    }
  }
})
$("#presetButton5").click(() => {
  if(!recording){
    for(let i=1; i<12; i++){
      $("#b"+i).attr('src', '../assets/Presets/preset5/Time A/'+i+'.png');
      $("#r"+i).attr('src', '../assets/Presets/preset5/Time B/'+i+'.png');
    }
  }
})
$("#presetButton6").click(() => {
  if(!recording){
    for(let i=1; i<12; i++){
      $("#b"+i).attr('src', '../assets/Presets/preset6/Time A/'+i+'.png');
      $("#r"+i).attr('src', '../assets/Presets/preset6/Time B/'+i+'.png');
    }
  }
})