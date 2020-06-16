// -
// generatori mondi vettori, bolle by Ilenia Balella 
// 2020 © Ilenia Balella @ileniab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/ileniab
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// @aparrish (twitter.com/aparrish) for https://creative-coding.decontextualize.com/changes-over-time/
// original license: Creative Commons Attribution-NonCommercial 4.0 International License
//
// @fupete (https://github.com/fupete) for https://editor.p5js.org/fupete/sketches/JNiVWhfJof
// -
//

let camminatore = [];
let n= 20;
function setup() {
  createCanvas(640,360);
  background(250,235,215);
  frameRate(5);
  for (var i = 0; i < n; i++) {
     camminatore[i] = new Mover();
  }
}

function draw() {
  
  for (let i = 0; i < camminatore.length; i++) {
camminatore[i].update();
camminatore[i].display();
  }
}

class Mover{
  constructor() {
    this.position = createVector(random(width),random(height));
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topspeed = 5;
  }

  update() {
    // Compute a vector that points from position to mouse
    var mouse = createVector(width/2,height/2);
    this.acceleration = p5.Vector.sub(mouse,this.position);
    // Set magnitude of acceleration
    this.acceleration.setMag(0.1);

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  }

  display() {
   noStroke();
    
    fill(95,158,160,10);
    ellipse(this.position.x, this.position.y, 48, 48);
  }
}
