// -
// Sound Classification 0.2 by Angelica Gasperoni [sound, draw]
// 2020 © Angelica @Angelica147, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// The Coding Train / Daniel Shiffman for https://thecodingtrain.com/TeachableMachine/3-teachable-audio
// https://editor.p5js.org/codingtrain/sketches/e3nrNMG7A
// 
// Copyright (c) 2019 ml5 for https://opensource.org/licenses/MIT
// original license: MIT License
// —
//
//
//

// The SketchRNN model
let model;
// Start by drawing
let previous_pen = 'down';
// Current location of drawing
let x, y;
// The current "stroke" of the drawing
let strokePath;




// Storing the label
let label = "waiting...";

// Classifier and model url
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/i-OVB_GIc/';

//////
let riconosciuto = false
let cosae = ""
let modalitaDisegno = false

//////

// STEP 1: Load the model!
function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
}

function setup() {
  createCanvas(640, 520);

  // STEP 2: Start classifying (will listen to mic by default)
  classifyAudio();
}

// STEP 2 classify!
function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(0);

  // STEP 4: Draw the label
  // textSize(32);
  textAlign(CENTER, CENTER);
  // fill(255);
  // text(label, width/2, height - 16);

  // Background noise is headphones
  let emoji = "🎧";
  // Pick an emoji based on label
  if (!riconosciuto) {
    if (label == "Dog") {
      riconosciuto = true
      cosae = label
      caricaModello(cosae)
      emoji = "🐶";
    } else if (label == "Cat") {
      riconosciuto = true
      cosae = label
      caricaModello(cosae)
      emoji = "🐱";
    }
  }

  if (modalitaDisegno) {
    //....
  }

  // Draw the emoji
  textSize(256);
  text(emoji, width / 2, height / 2);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // Store the label
  label = results[0].label;
}

function caricaModello(cosa) { //parola che gli passa
 // caricare il modello sketch rnn di cosa
  //...
  console.log(cosa)
  
  // chiamare funzione disegna quando ha caricato
  disegna()
}

function disegna() {
  modalitaDisegno = true
  //...
}