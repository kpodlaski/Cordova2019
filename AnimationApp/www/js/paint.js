document.addEventListener('deviceready', onDeviceReady, false);

class Ball {
    img = new Image();
    vx =3;
    vy =4;
    size = 50;

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
        ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
    };

    colisionsWithBorders(){
        if (this.y+50>this.canvas.height || this.y<0){
            this.vy=-this.vy;
        } 
        if (this.x+50>this.canvas.width || this.x<0){
            this.vx=-this.vx;
        }
    };

    colideWithBall(ball_2){
        let r2 = Math.pow(this.x-ball_2.x,2);
        r2 += Math.pow(this.y-ball_2.y,2);
        let size2 = Math.pow(
            this.size,2);
        if (size2>r2) {
            this.vx = -this.vx;
            this.vy=-this.vy;
            ball_2.vx = - ball_2.vx;
            ball_2.vy= - ball_2.vy;
            console.log( r2 +" :: "+ size2);
        }
        //
    }
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
    ball.colideWithBall(ball2);
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