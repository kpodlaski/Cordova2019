var ball ={
    img : new Image(),
    size : 30,
    x : 10,
    y : 10,
    vx : 2,
    vy : 2,

    init : function(){
        this.img.src = "img/ball.png";
    },

    move: function(){
        this.x+=this.vx;
        this.y+=this.vy;
    },

    colideCheck: function (){
        if (this.x+this.size > this.canvas.width || this.x<0)
        {
            this.vx = -this.vx;
        }

        if (this.y+this.size>this.canvas.height || this.y<0)
        {
            this.vy = -this.vy;
        }
    },

    update: function(){
        this.move();
        this.colideCheck();
        this.drawOnCanvas();
    },

    drawOnCanvas: function(){
        let ctx = this.canvas.getContext("2d");
        ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
    }
}

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    var canvas = document.getElementById("paintCanvas");
    startAnimation(canvas);
}

function startAnimation(canvas){
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    ball.init();
    ball.canvas = canvas;
    gameLoop();
}

function gameLoop(){
    ball.update();
    setTimeout(gameLoop, 50);
}