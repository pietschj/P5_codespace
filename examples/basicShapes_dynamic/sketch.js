/// <reference path="..\..\..\assets\global.d.ts" />

let xpos;  //defining variables for position
let ypos; 
let xpos2, ypos2;
let sC, sR;

function setup() {
	//change the dimension of your screen
	//arguments: w, h
  
	createCanvas(400, 400);
	//this is a comment
	noStroke();

	//initialising values
	xpos = 250;
	ypos = 280;
	xpos2 = 300, ypos2 = 250; //position vals for rect
	sC = 0.2, sR = 2
	
}

function draw() {
	background(255);
	fill(55, 204, 55);


	//section where variable change
	xpos2 = xpos2 - 0.3;
	xpos = xpos + 0.1;
	sC = sC + 0.0005;
	sR = sR - 0.005;
	
	//console.log(xpos);

	//draws a rectangle 
	//arguments: x, y, w, h
	rectMode(CENTER);
	rect(xpos2, ypos2,150 * sR,50);

	fill(255,0,255,55);
	//draws a circle
	//arguments: x,y,w,h
	
	ellipse(xpos, ypos, 140 * sC);
	fill(255,0,255,55);
	//draws a circle
	//arguments: x,y,w,h
	
	ellipse(xpos, ypos, 160 * sC);
	fill(255,0,255,55);
	//draws a circle
	//arguments: x,y,w,h
	
	ellipse(xpos, ypos, 180 * sC);
}
