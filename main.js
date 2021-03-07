var mouseEvent = "";
canvas = document.getElementById("theCanvas");
ctx = canvas.getContext('2d');
color = "black";
width = 5;
radius = 40;
var last_position_of_x, last_position_of_y = "";

canvas.addEventListener("mousedown", mouse_down);

function mouse_down(e){
    color = document.getElementById("Color").value;
width = document.getElementById("Width").value;
radius = document.getElementById("Radius").value;
mouseEvent="mousedown";
}

canvas.addEventListener("mouseup", mouseup);
function mouseup(e){
mouseEvent="mouseup"


}


canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}


canvas.addEventListener("mousemove", mousemove);
function mousemove(){

if (mouseEvent="mousedown"){
        

var current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
   var  current_position_of_mouse_y = e.clientY - canvas.offsetTop;
   console.log("Last position of x and y coordinates = ");
   console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
   ctx.moveTo(last_position_of_x, last_position_of_y);

   console.log("Current position of x and y coordinates = ");
   console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
   
   ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.radius=radius;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,5,5,2 * Math.PI);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);

   ctx.stroke();
}
last_position_of_x = current_position_of_mouse_x; 
   last_position_of_y = current_position_of_mouse_y;
}

