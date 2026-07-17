var x=0;
var y=0;

function moveRight(){
    x+=10;
    document.getElementById("box").style.left=x+"px";
}
function moveLeft(){
    x-=10;
    document.getElementById("box").style.left=x+"px";
}
function moveUp(){
    y-=10;
    document.getElementById("box").style.top=y+"px";
}
function moveDown(){
    y+=10;
    document.getElementById("box").style.top=y+"px";
}