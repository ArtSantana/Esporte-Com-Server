let toggleVideo = false;
$("#btnVideo").click(() => {
  if(toggleVideo){
    $("#video").css('visibility', 'hidden');
    toggleVideo = false;
  }
  else {
    $("#video").css('visibility', 'visible');
    toggleVideo = true;
  }
})