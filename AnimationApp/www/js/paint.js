document.addEventListener('deviceready', onDeviceReady, false);

class Ball {
    img = new Image();
    vx =3;
    vy =4;
    size = 50;

    constructor(canvas, imgPath, x, y){
        this.img.src = imgPath;
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
        /*if (size2>r2) {
            this.vx = -this.vx;
            this.vy=-this.vy;
            ball_2.vx = - ball_2.vx;
            ball_2.vy= - ball_2.vy;
            console.log( r2 +" :: "+ size2);
        }
        */
       if (25>r2){
           alert("Koniec gry");
           ball_2.x = Math.floor(Math.random()*(this.canvas.width-ball_2.size));
           ball_2.y = Math.floor(Math.random()*(this.canvas.height-ball_2.size));
       }
        //
    }
}
let canvas = document.getElementById("paintCanvas");
var ball, hole;

function updateState(){
    ball.move();
    hole.move();
}

function colisionCheck(){
    ball.colisionsWithBorders();
    hole.colisionsWithBorders();
    ball.colideWithBall(hole);
}

function draw(){
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0,0, canvas.width, canvas.height);
    hole.drawOnCanvas();
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
    ball = new Ball(canvas, "img/ball.png", 30,40);
    hole = new Ball(canvas, "img/hole.jpg", 80,100);
    //ball2.vx= -ball2.vx;
    hole.vx=0;
    hole.vy=0;
    window.addEventListener("deviceorientation",processEvent, true);
    window.addEventListener("devicemotion", handleMotion, true);
    animationLoop();
}

function processEvent(event) {
    console.log('alpha: ' + event.alpha + '\n' +
          'beta: ' + event.beta + '\n' +
          'gamma: ' + event.gamma + '\n' +
          'abs: '      + event.absolute + '\n');
    ball.vx = event.alpha/5+1;
    ball.vy = event.gamma/5;
    console.log("ball.x= "+ball.x);
    console.log("ball.vx= "+ball.vx);
    console.log("ball.y= "+ball.y);
    console.log("ball.vy= "+ball.vy);
}

function handleMotion(event) {
    console.log("Interval :"+ event.interval);
    console.log("Rotation Rate: "+event.rotationRate);
    console.log("Acceleration:"+event.acceleration);
    console.log("Acceleration with G:"+event.accelerationIncludingGravity);
}

function onDeviceReady() {  
    startAnimation();
}