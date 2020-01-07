$(document).ready(function()
{
	const fixerHorizontalTouch = screen.width * 100 / 1920;
	const fixerVerticalTouch = screen.height * 905 / 1080;
    var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, 
    r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11;
    
    b1 = $("#b1")[0];
    b2 = $("#b2")[0];
    b3 = $("#b3")[0];
    b4 = $("#b4")[0];
    b5 = $("#b5")[0];
    b6 = $("#b6")[0];
    b7 = $("#b7")[0];
    b8 = $("#b8")[0];
    b9 = $("#b9")[0];
    b10 = $("#b10")[0];
    b11 = $("#b11")[0];
    // ------------------- //
    r1 = $("#r1")[0];
    r2 = $("#r2")[0];
    r3 = $("#r3")[0];
    r4 = $("#r4")[0];
    r5 = $("#r5")[0];
    r6 = $("#r6")[0];
    r7 = $("#r7")[0];
    r8 = $("#r8")[0];
    r9 = $("#r9")[0];
    r10 = $("#r10")[0];
    r11 = $("#r11")[0];

    b1.addEventListener('touchmove', function(e)
    {
        $("#b1")[0].style.top = e.touches[0].pageY - 905 + "px";
        $("#b1")[0].style.left = e.touches[0].pageX - 75 + "px";
    })
    b2.addEventListener('touchmove', function(e)
    {
        $("#b2")[0].style.top = e.touches[0].pageY - 905 + "px";
        $("#b2")[0].style.left = e.touches[0].pageX - 150 + "px";
    })
    b3.addEventListener('touchmove', function(e)
    {
        $("#b3")[0].style.top = e.touches[0].pageY - 905 + "px";
        $("#b3")[0].style.left = e.touches[0].pageX - 240 + "px";
    })
    b4.addEventListener('touchmove', function(e)
    {
        $("#b4")[0].style.top = e.touches[0].pageY - 905 + "px";
        $("#b4")[0].style.left = e.touches[0].pageX - 355 + "px";
    })
    b5.addEventListener('touchmove', function(e)
    {
        $("#b5")[0].style.top = e.touches[0].pageY - 905 + "px";
        $("#b5")[0].style.left = e.touches[0].pageX - 475 + "px";
    })
    b6.addEventListener('touchmove', function(e)
    {
        $("#b6")[0].style.top = e.touches[0].pageY - 905 + "px";
        $("#b6")[0].style.left = e.touches[0].pageX - 515 - "px";
    })
    b7.addEventListener('touchmove', function(e)
    {
        $("#b7")[0].style.top = e.touches[0].pageY - 905 + "px";
        $("#b7")[0].style.left = e.touches[0].pageX - 650 + "px";
    })
    b8.addEventListener('touchmove', function(e)
    {
        $("#b8")[0].style.top = e.touches[0].pageY - 905 + "px";
        $("#b8")[0].style.left = e.touches[0].pageX - 745 + "px";
    })
    b9.addEventListener('touchmove', function(e)
    {
        $("#b9")[0].style.top = e.touches[0].pageY - 905 + "px";
        $("#b9")[0].style.left = e.touches[0].pageX - 870 + "px";
    })
    b10.addEventListener('touchmove', function(e)
    {
        $("#b10")[0].style.top = e.touches[0].pageY - 905 + "px";
        $("#b10")[0].style.left = e.touches[0].pageX - 960+ "px";
    })
    b11.addEventListener('touchmove', function(e)
    {
        $("#b11")[0].style.top = e.touches[0].pageY - 905 + "px";
        $("#b11")[0].style.left = e.touches[0].pageX - 1060 + "px";
    })
    //
    //
    //
    r1.addEventListener('touchmove', function(e)
    {
        $("#r1")[0].style.top = e.touches[0].pageY - 985 + "px";
        $("#r1")[0].style.left = e.touches[0].pageX - 50 + "px";
    })
    r2.addEventListener('touchmove', function(e)
    {
        $("#r2")[0].style.top = e.touches[0].pageY - 985 + "px";
        $("#r2")[0].style.left = e.touches[0].pageX - 135 + "px";
    })
    r3.addEventListener('touchmove', function(e)
    {
        $("#r3")[0].style.top = e.touches[0].pageY - 985 + "px";
        $("#r3")[0].style.left = e.touches[0].pageX - 220 + "px";
    })
    r4.addEventListener('touchmove', function(e)
    {
        $("#r4")[0].style.top = e.touches[0].pageY - 985 + "px";
        $("#r4")[0].style.left = e.touches[0].pageX - 305 + "px";
    })
    r5.addEventListener('touchmove', function(e)
    {
        $("#r5")[0].style.top = e.touches[0].pageY - 985 + "px";
        $("#r5")[0].style.left = e.touches[0].pageX - 390 + "px";
    })
    r6.addEventListener('touchmove', function(e)
    {
        $("#r6")[0].style.top = e.touches[0].pageY - 985 + "px";
        $("#r6")[0].style.left = e.touches[0].pageX - 475 + "px";
    })
    r7.addEventListener('touchmove', function(e)
    {
        $("#r7")[0].style.top = e.touches[0].pageY - 985 + "px";
        $("#r7")[0].style.left = e.touches[0].pageX - 560 + "px";
    })
    r8.addEventListener('touchmove', function(e)
    {
        $("#r8")[0].style.top = e.touches[0].pageY - 985 + "px";
        $("#r8")[0].style.left = e.touches[0].pageX - 645 + "px";
    })
    r9.addEventListener('touchmove', function(e)
    {
        $("#r9")[0].style.top = e.touches[0].pageY - 985 + "px";
        $("#r9")[0].style.left = e.touches[0].pageX - 725 + "px";
    })
    r10.addEventListener('touchmove', function(e)
    {
        $("#r10")[0].style.top = e.touches[0].pageY - 985 + "px";
        $("#r10")[0].style.left = e.touches[0].pageX - 810 + "px";
    })
    r11.addEventListener('touchmove', function(e)
    {
        $("#r11")[0].style.top = e.touches[0].pageY - 985 + "px";
        $("#r11")[0].style.left = e.touches[0].pageX - 895 + "px";
    })

})