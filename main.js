canvas = document.getElementById(myCanvas);
ctx = cavas.getContext("2d");
var mouseEvent = "empty";
var last_postion_of_x,last_postion_of_y;
color = "black";
width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e);
{
    color = document.getElementById("color").value ;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e);
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clienty - canvas.offsettop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("Last postion of x and y coorditnates=");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveto(last_position_of_x,last_postion_of_y);

        console.log("current postion of x and y coorditnates=");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.moveto(current_position_of_mouse_x,curret_postion_of_mouse_y);
        ctx.stroke();
}
last_postion_of_x=current_position_of_mouse_x;
last_postion_of_y=current_position_of_mouse_y;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent ="mouseUP"
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent ="mouseleave"
}