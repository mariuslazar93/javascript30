(function(){

    var canvas = document.getElementById('draw');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var ctx = canvas.getContext('2d');
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    var lastX,
        lastY,
        hue,
        lineWidth,
        direction,
        isDrawing;

    function draw(e){
        if(!isDrawing) return;

        ctx.strokeStyle = 'hsl('+hue+',100%,50%)';
        ctx.lineWidth = lineWidth;

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

        lastX = e.offsetX;
        lastY = e.offsetY;
        hue = ++hue % 360;

        if(direction){
            lineWidth += 2;
        }
        else{
            lineWidth -= 2;
        }

        if(lineWidth > 100 || lineWidth < 1){
            direction = !direction;
        }
    }

    canvas.addEventListener('mousemove', draw);

    canvas.addEventListener('mousedown', function(e){
        isDrawing = true;
        direction = true;
        hue = Math.floor(Math.random() * 360);
        lineWidth = Math.floor(Math.random() * 100);
        lastX = e.offsetX;
        lastY = e.offsetY;
    });

    canvas.addEventListener('mouseup', function(){
        isDrawing = false;
    });

    canvas.addEventListener('mouseout', function(){
        isDrawing = false;
    });

})();
