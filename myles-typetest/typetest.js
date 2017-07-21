var myWords;
function keyTyped(){
myWords = myWords + key;
}

function draw(){
    fill(0, 102, 153);
    text(myWords);
    textFont('Times New Roman')
    textSize(40)
    text(myWords, 400, 500 )
}

function setup(){

    createCanvas(2000, 2000);
    background("green");

textSize(50);
text("Type the lyrics below", 400, 100);
fill(0, 102, 153);

textSize(45)
text("Everyday we litt!", 400, 300)
fill(100, 250, 300 )


}
