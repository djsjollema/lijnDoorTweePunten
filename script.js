window.addEventListener("load",function(){ 
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var grid = new Grid(800,800,20,20,100,100);
    grid.draw(context);
    
    
    
    var lijn = Object.create(Line);
    lijn.a = 1;
    lijn.b = -4;
    lijn.c = -3;

    for(x = -400; x<=400; x+=20){
        var ball = new Ball(x,lijn.y(x),3,"yellow");
        ball.draw(context);
    }
});