$("#btnVideo").click(() => {
    $("#video").css('visibility', 'visible');
    $("#TimeA").css('visibility', 'hidden');
    $("#TimeB").css('visibility', 'hidden');
    $("#presetButtons").css('visibility', 'hidden');
    $("#bnt").css('visibility', 'hidden');
    $("#paletteColor").css('visibility', 'hidden');
    $("#menuVideo").css('visibility', 'visible');
    $("#videoSelect").css('visibility', 'visible');
})

$("#backButton").click(() => {
  $("#presetButtons").css('visibility', 'visible');
  $("#bnt").css('visibility', 'visible');
  $("#TimeA").css('visibility', 'visible');
  $("#menuVideo").css('visibility', 'hidden');
  $("#videoSelect").css('visibility', 'hidden');
  $("#video").css('visibility', 'hidden');
})

$("#v1").click(() => $("#video").attr('src', "../assets/Videos/v1.mp4"));
$("#v2").click(() => $("#video").attr('src', "../assets/Videos/v1.mp4"));
$("#v3").click(() => $("#video").attr('src', "../assets/Videos/v1.mp4"));
$("#v4").click(() => $("#video").attr('src', "../assets/Videos/v1.mp4"));
$("#v5").click(() => $("#video").attr('src', "../assets/Videos/v1.mp4"));
$("#v6").click(() => $("#video").attr('src', "../assets/Videos/v1.mp4"));
$("#playVideo").click(() => $("#video").trigger('play'));
$("#pauseVideo").click(() => $("#video").trigger('pause'));