/// <reference path="..\..\..\assets\global.d.ts" />

function setup() {
	//change the dimension of your screen
	//arguments: w, h
  
	createCanvas(400, 400);
	//this is a comment

	fill(204, 102, 0);
	//draws a rectangle 
	//arguments: x, y, w, h
	rect(50,50,100,50);
	fill('#ff0000');
	//draws a circle
	//arguments: x,y,w,h
	ellipse(200, 200, 100, 100);

	// a quad
	fill('#ff00ff');
	quad(38, 31, 86, 20, 69, 63, 30, 76);

	//begin Shape with verticis
	fill('#ffff00');
	beginShape();
		vertex(130, 120);
		//the nex apex of the roof
		vertex(157, 90);
		vertex(185, 120);
		vertex(185, 175);
		vertex(130, 175);
	endShape(CLOSE);

		//begin Shape with beziers
		fill('#ffff00');
		beginShape();
			vertex(130, 120);
			//the nex apex of the roof
			vertex(157, 90);
			vertex(185, 120);
			vertex(185, 175);
			vertex(130, 175);
		endShape(CLOSE);


		fill('#45ff33');
		beginShape();
			vertex(30, 20);
			bezierVertex(80, 0, 80, 75, 30, 75);
			bezierVertex(100, 30, 100, 75, 25, 95);
			bezierVertex(50, 80, 60, 25, 30, 20);
		endShape(CLOSE);
}

