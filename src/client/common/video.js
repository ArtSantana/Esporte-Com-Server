$("#btnVideo").click(() => {
    $("#video").css('visibility', 'visible');
    $("#TimeA").css('visibility', 'hidden');
    $("#TimeB").css('visibility', 'hidden');
    $("#presetButtons").css('visibility', 'hidden');
    $("#bnt").css('visibility', 'hidden');
    $("#paletteColor").css('visibility', 'hidden');
    $("#menuVideo").css('visibility', 'visible');
})

$("#backButton").click(() => {
  $("#presetButtons").css('visibility', 'visible');
  $("#bnt").css('visibility', 'visible');
  $("#TimeA").css('visibility', 'visible');
  $("#menuVideo").css('visibility', 'hidden');
  $("#video").css('visibility', 'hidden');
})

$("#playVideo").click(() => $("#video").trigger('play'));
$("#pauseVideo").click(() => $("#video").trigger('pause'));