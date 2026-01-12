// Basic p5.js sketch
function setup() {
    // Create a canvas 600x400 pixels
    createCanvas(600, 400);
    // Set the frame rate
    frameRate(30);
}

function draw() {
    // Set background color
    background(220, 220, 255);
    
    // Draw a moving circle that follows the mouse
    fill(255, 100, 100);
    noStroke();
    ellipse(mouseX, mouseY, 50, 50);
    
    // Draw a rectangle that changes color based on mouse position
    fill(map(mouseX, 0, width, 0, 255), map(mouseY, 0, height, 100, 200), 150);
    rect(100, 100, 150, 100);
    
    // Display instructions
    fill(0);
    textSize(16);
    textAlign(CENTER);
    text("Move your mouse around to interact with the sketch!", width/2, 30);
}

