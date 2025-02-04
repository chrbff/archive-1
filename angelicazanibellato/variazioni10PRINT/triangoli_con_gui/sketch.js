// -
// variazione10Print_GUI 0.2 by Angelica [10Print, commodore64]
// 2020 © Angelica, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// https://editor.p5js.org/fupete/sketches/Mw0ugXFno for original code
//
// —


//OGGETTO PARAMETRI
// Inserire i parametri da modificare

let parametri = {

  coloreSfondo: [50, 50, 50],

  dimTriangolo: 30,

  coloreTriangolo: [255, 255, 255, 80]
};

// FUNZIONE GUI
//valori all'avvio dello sketch

window.onload = function() {
  var gui = new dat.GUI();

  //colore sfondo
  gui.addColor(parametri, 'coloreSfondo');

  //crea una tendina che nasconde i parametri 
  var f1 = gui.addFolder('Triangolo');

  //colore triangolo
  f1.addColor(parametri, 'coloreTriangolo');

  //slider dimensione triangolo
  f1.add(parametri, 'dimTriangolo', 1, 50);


};


//variazione 10PRINT

let w = 0;
let h = 0;
let size = 25;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(parametri.coloreSfondo);

}

function draw() {

  noSmooth();
  fill(parametri.coloreTriangolo);
  noStroke();


  //dimensioni triangolo = triangle(x1, y1, x2, y2, x3, y3)

  let verso = int(random(4))

  if (verso == 0) {
    triangle(w, h, w + (parametri.dimTriangolo), h, w + ((parametri.dimTriangolo) / 2), h + (parametri.dimTriangolo));

  } else if (verso == 1) {
    triangle(w + (parametri.dimTriangolo), h, w + (parametri.dimTriangolo), h + (parametri.dimTriangolo), w, h + ((parametri.dimTriangolo) / 2));

  } else if (verso == 2) {
    triangle(w + (parametri.dimTriangolo), h + (parametri.dimTriangolo), w, h + (parametri.dimTriangolo), w + ((parametri.dimTriangolo) / 2), h);
  } else {
    triangle(w, h + (parametri.dimTriangolo), w, h, w + (parametri.dimTriangolo), h + ((parametri.dimTriangolo) / 2));
  }

  w = w + (parametri.dimTriangolo);
  if (w > width) {
    w = 0;
    h += (parametri.dimTriangolo);
  }

  if (h > height) {
    background(parametri.coloreSfondo);
    w = 0;
    h = 0;
  }
}

/*//cambiare lo sfondo al click
function mousePressed() {
  background(parametri.coloreSfondo)
 }*/
