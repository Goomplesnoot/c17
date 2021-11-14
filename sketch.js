var box,box1
function setup() 
{
  createCanvas(400, 400);
  box = new Box(100,200,20,20,0,1)
  box1=new Box(300,200,20,20,0,-1)
}

function draw() 
{
  background(220);
  box.show()
  box.move()
  box1.show()
  box1.move()
}

