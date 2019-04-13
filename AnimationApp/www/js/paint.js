document.addEventListener('deviceready', onDeviceReady, false);

var ball ={
    img : new Image(), // note that the offscreen image must be declared OUTSIDE of the window.onload() function 
    x: 10, 
    y: 10,
    vx :3,
    vy :4,

    init : function(canvas){
        this.img.src = "img/ball.png";
        this.canvas = canvas;
    },

    move : function(){
        this.x += this.vx;
        this.y += this.vy;
    },

    drawOnCanvas : function(){
        let ctx = this.canvas.getContext("2d");
        ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
        ctx.drawImage(this.img, this.x, this.y, 50, 50);
    },

    colisionsWithBorders : function(){
        if (this.y+50>this.canvas.height || this.y<0){
            this.vy=-this.vy;
        } 
        if (this.x+50>this.canvas.width || this.x<0){
            this.vx=-this.vx;
        }
    },
}


let canvas = document.getElementById("paintCanvas");

function updateState(){
    ball.move();
}

function colisionCheck(){
    ball.colisionsWithBorders();
}

function draw(){
    ball.drawOnCanvas();
}

function animationLoop(){
    updateState();
    colisionCheck();
    draw();
    setTimeout(animationLoop,20);
}

function startAnimation(){
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    ball.init(canvas);
    animationLoop();
}

function onDeviceReady() {
    startAnimation();
}