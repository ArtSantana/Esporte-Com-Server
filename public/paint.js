$(document).ready(function()
{
    var bntStartPaint = $("#startPaint");
    var canvas = $("#cv")[0];
    var ctx = canvas.getContext("2d");
    var paint = false, enablePaintFunction = false, arrowFlag = false;
    var startX, startY, endX, endY;
    ctx.strokeStyle = "red";

    function startPaint()
    {
        paint = true;   
        ctx.beginPath();

    }

    function stopPaint()
    {
        paint = false;
        ctx.beginPath();
    }

    function draw(e)
    {
        if(!paint) return ;
        if(!enablePaintFunction) return ;

        arrowFlag = false;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";

        ctx.lineTo(e.touches[0].pageX - 33, e.touches[0].pageY - 25);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.touches[0].pageX - 33, e.touches[0].pageY - 25);
    }
	
	function drawMouse(e)
    {
        if(!paint) return ;
        if(!enablePaintFunction) return ;

        arrowFlag = false;

        ctx.lineWidth = 7;
        ctx.lineCap = "round";
        ctx.lineTo(e.pageX - 33, e.pageY - 25);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.pageX - 33, e.pageY - 25);
    }

    $("#clearCanvas").click(function()
    {
        ctx.clearRect(0, 0, 1920, 1080);
        enablePaintFunction = false;
        arrowFlag = false;
    })

    bntStartPaint.click(function()
    {
        enablePaintFunction = true;
        arrowFlag = false;
    });

    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchstart', startPaint); 
    canvas.addEventListener('touchend', stopPaint);    
	
	canvas.addEventListener('mousemove', drawMouse);
	canvas.addEventListener('mousedown', startPaint);
    canvas.addEventListener('mouseup', stopPaint);
    
    canvas.addEventListener('touchstart', startArrowTouch);
    canvas.addEventListener('touchend', endArrowTouch);    
	
    canvas.addEventListener('mousedown', startArrow);
    canvas.addEventListener('mouseup', endArrow);

    $("#arrow").click(() => arrowFlag = true);


    function startArrowTouch(e)
    {
        if(!arrowFlag) return; 

        enablePaintFunction = false;
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
    }

    function endArrowTouch(e)
    {
        if(!arrowFlag) return; 

        endX = e.touches[0].pageX;
        endY = e.touches[0].pageY;

        ctx.beginPath()
        drawArrow(startX, startY, endX, endY);
        ctx.stroke();
    }

    function startArrow(e)
    {
        if(!arrowFlag) return; 

        enablePaintFunction = false;
        startX = e.pageX;
        startY = e.pageY;
    }

    function endArrow(e)
    {
        if(!arrowFlag) return; 

        endX = e.pageX;
        endY = e.pageY;

        ctx.beginPath()
        drawArrow(startX, startY, endX, endY);
        ctx.stroke();
    }


    function drawArrow(fromx, fromy, tox, toy){
        //variables to be used when creating the arrow
        var headlen = 10;

        var angle = Math.atan2(toy-fromy,tox-fromx);

        //starting path of the arrow from the start square to the end square and drawing the stroke
        ctx.beginPath();
        ctx.moveTo(fromx, fromy);
        ctx.lineTo(tox, toy);
        ctx.strokeStyle = "red";
        ctx.lineWidth = 12;
        ctx.stroke();

        //starting a new path from the head of the arrow to one of the sides of the point
        ctx.beginPath();
        ctx.moveTo(tox, toy);
        ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),toy-headlen*Math.sin(angle-Math.PI/7));

        //path from the side point of the arrow, to the other side point
        ctx.lineTo(tox-headlen*Math.cos(angle+Math.PI/7),toy-headlen*Math.sin(angle+Math.PI/7));

        //path from the side point back to the tip of the arrow, and then again to the opposite side point
        ctx.lineTo(tox, toy);
        ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),toy-headlen*Math.sin(angle-Math.PI/7));

        //draws the paths created above
        ctx.strokeStyle = "red";
        ctx.lineWidth = 12;
        ctx.stroke();
        ctx.fillStyle = "red";
        ctx.fill();
    }
})