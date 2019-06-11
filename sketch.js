var main_fade=0;
var back_fade=0;
var dist_center = 0;
var xoff = 0.0;
var yoff = 0.0;
var poff = 0.0;
var y = 0;
var p = 0;
var x = 0;

function setup()
{
createCanvas(windowWidth,windowHeight);
}

function draw()
{ 
	background(18,23,56);
	//background(0);
	back_fade+=0.11;
	if(back_fade > 50){
		back_fade = 0;
	}
// 	xoff = xoff+0.01;
// 	yoff = yoff+0.01;
// 	poff = poff+0.01;
	
// 	noFill();
// 	stroke(255);
// 	// var y = noise(xoff)* 100;
// 	// var x = noise(yoff)* 10;
// 	// var p = noise(poff)*10;
//  strokeWeight(2);
	
// 	y+=1;
// 	if(y>windowWidth)
// 	{
// 		y=0;
// 	}


// 	p+=0.01;
// 	if(p>10)
// 	{
// 		p=1;
// 	}

// 	x+=0.01;
// 	if(x>windowWidth)
// 	{
// 		x=1;
// 	}


// 	translate(windowWidth/2,windowHeight/2);

// 	for(var i=0; i < 50; i+=1){
// 		//fill(i);

// 		ellipse(0,30,10,10);
// 		ellipse(30,80,20,10);
// 		ellipse(130,180,y,x);
		
// 	rotate(PI/p);

// 	}
// //noLoop();	
// fill(0,110,255,100);
// stroke(200,80,0,150);

// translate(windowWidth/2,windowHeight/2);

// for(var i=0; i < 10; i+=1){

// ellipse(0,0, breath,breath);
// ellipse(10,0, breath,breath);
// rotate(PI/3);
// }

// breath+=0.1;
// var breath_size = 50;
// if(breath>breath_size)
// {
// 	breath=-breath_size;
// }

//fill(0,100,255,25);
fill(random(204,209),124,120,120);

//noStroke();
stroke(234,212,162);
//stroke(0,15);
strokeWeight(3);
translate(windowWidth/2,windowHeight/2);
var scale = 5;
var m_a = 50*scale;
var m_b = 50*scale;
//var dist_center =35; //1 to 35
dist_center+=0.175;
var center_meet = 90;
if(dist_center >center_meet)
{
	dist_center =-center_meet;
}

for(var i=0; i<10;i++){
	ellipse(dist_center,dist_center,m_a,m_b);
	rotate(PI/3);
}


// ellipse(dist_center,dist_center,m_a,m_b);
// rotate(PI/3);
// ellipse(dist_center,dist_center,m_a,m_b);
// rotate(PI/3);
// ellipse(dist_center,dist_center,m_a,m_b);
// rotate(PI/3);
// ellipse(dist_center,dist_center,m_a,m_b);
// rotate(PI/3);
// ellipse(dist_center,dist_center,m_a,m_b);
// rotate(PI/3);
// ellipse(dist_center,dist_center,m_a,m_b);


}

