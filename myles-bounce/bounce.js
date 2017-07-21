var x = 300;
var y = 150;
var vx = 10;
var vy = 10;
var xpaddle = 300;
var ypaddle = 580;
function setup(){
    createCanvas(600, 600);
    background("pink");
}
function draw(){
    background("pink")
    fill("#4286f4")
    ellipse(x, y, 50, 50)
    rect(xpaddle, ypaddle , 150, 10)
   if(y>620){
    fill('blue')
    textSize(35)
text("Game Over",150,300)
noLoop()
}
    if(x > 575 && x < 625){
        vx = random(-10,0);
    }else if(x>-25 && x< 25){
        vx = random(10)
    } 
    if(y>-25 && y<25){
        vy = random(10)
    }
    if((xpaddle+150)>x&&(xpaddle-150)<x){
        if((ypaddle+10)>y&&(ypaddle-10)<y){
            vy = vy + random(-10,0)
        }
    }
    x = x + vx
    y = y + vy
    if(keyIsDown(LEFT_ARROW)){
        xpaddle -= 10;
    }
    if(keyIsDown(RIGHT_ARROW)){
        xpaddle += 10;
    }
    ellipse(x, y, 50, 50)
    rect(xpaddle, ypaddle , 150, 10)




}

