document.addEventListener('deviceready', onDeviceReady, false);

class Ball {
    img = new Image();
    vx =3;
    vy =4;

    constructor(canvas, x, y){
        this.img.src = "img/ball.png";
        this.canvas = canvas;
        this.x = x;
        this.y = y;
    };

    move(){
        this.x += this.vx;
        this.y += this.vy;
    };

    drawOnCanvas(){
        let ctx = this.canvas.getContext("2d");
        //ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        ctx.drawImage(this.img, this.x, this.y, 50, 50);
    };

    colisionsWithBorders(){
        if (this.y+50>this.canvas.height || this.y<0){
            this.vy=-this.vy;
        } 
        if (this.x+50>this.canvas.width || this.x<0){
            this.vx=-this.vx;
        }
    };
}
let canvas = document.getElementById("paintCanvas");
var ball, ball2;

function updateState(){
    ball.move();
    ball2.move();
}

function colisionCheck(){
    ball.colisionsWithBorders();
    ball2.colisionsWithBorders();
}

function draw(){
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ball.drawOnCanvas();
    ball2.drawOnCanvas();
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
    ball = new Ball(canvas ,30,40);
    ball2 = new Ball(canvas, 80,100);
    ball2.vx=-ball2.vx;
    animationLoop();
}

function onDeviceReady() {
    startAnimation();
}