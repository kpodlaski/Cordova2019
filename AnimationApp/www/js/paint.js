document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    var canvas = document.getElementById("paintCanvas");
    drawOnCanvas(canvas);
}

let img = new Image(); // note that the offscreen image must be declared OUTSIDE of the window.onload() function 
img.src = "img/ball.png";

function drawOnCanvas(canvas){
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    let ctx = canvas.getContext("2d");


    // draw an image on the canvas
    ctx.drawImage(img, 10, 10, 50, 50);
}