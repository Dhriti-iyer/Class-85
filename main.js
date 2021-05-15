canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var nasaimages=["mars1.jpeg","mars2.jpeg", "mars3.jpeg", "mars4.jpeg"];
var randomnumber=Math.floor(Math.random()*4);
console.log(randomnumber);
rover_x = 10;
rover_y = 10;
rover_width = 100;
rover_height = 90;

background_img = nasaimages[randomnumber];
rover_img = "rover.png";

function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadbackground();
    background_imgtag.src = background_img;

    rover_imgtag = new Image();
    rover_imgtag.onload = uploadrover();
    rover_imgtag.src = rover_img;

}

function uploadbackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}
function uploadrover() {    
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed =='37')
    {
        console.log("left arrow key is pressed");
        left();
    }

    if(keyPressed =='38')
    {
        console.log("up arrow key is pressed");
        up();
    }

    if(keyPressed =='39')
    {
        console.log("right arrow key is pressed");
        right();
    }

    if(keyPressed =='40')
    {
        console.log("down arrow key is pressed");
        down();
    }
}
function left()
{
    if(rover_x>=0)
    {
        rover_x = rover_x - 10;
        console.log("when left is pressed, x = " + rover_x + ",y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}
function right()
{
    if(rover_x<=700)
    {
        rover_x = rover_x + 10;
        console.log("when right is pressed, x = " + rover_x + ",y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}
function up()
{
    if(rover_y>=0)
    {
        rover_y = rover_y - 10;
        console.log("when up is pressed, x = " + rover_x + ",y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}
function down()
{
    if(rover_y<=500)
    {
        rover_y = rover_y + 10;
        console.log("when down is pressed, x = " + rover_x + ",y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}