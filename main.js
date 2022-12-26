var mouseEvent = "empty";
var last_position_of_x,last_position_of_y;
canvas = document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="black";
width_of_line=1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
mouseEvent= "mouseDown";
}
canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseup";
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{
current_position_of_mouse_X =e.clientX- canvas.offsetLeft;
current_position_of_mouse_Y =e.clientY - canvas.offsetTop;

if(mouseEvent =="mouseDown")  {
ctx.beginPath();
ctx.strokrStyle = color;
ctx.lineWidth = width_of_line;

console.log("Last position of x and y coordinates = ");
console.log("x =" + last_position_of_x+"y =" +last_position_of_y);
ctx.moveTo(last_position_of_x,last_position_of_y);

console.log("current position of x and y coordinates=");
console.log("x ="+current_position_of_mouse_X +"y =" +current_position_of_mouse_Y);
ctx.lineTo(current_position_of_mouse_X,current_position_of_mouse_Y);
ctx.stroke();       
}

last_position_of_x =current_position_of_mouse_X;
last_position_of_y= current_position_of_mouse_Y;
}
