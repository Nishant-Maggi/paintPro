var paintBrush;

var positions =[];

function setup() {

  createCanvas(displayWidth-50,displayHeight-150); 

  stroke ("orange");
  strokeWeight (6);
  
}

function draw() {

  //console.log(positions);

  background("black");  

  for(var index = 1 ; index < positions.length; index ++){
    var point1 = positions[index - 1];
    var point2 = positions[index]; 

    line (point1.x,point1.y,point2.x,point2.y);
  }

  drawSprites();
}

function mouseDragged(){

  var point = {
    'x': mouseX,
    'y': mouseY
  }

  //console.log(point);

  positions.push(point);

 // console.log(positions);
  
}