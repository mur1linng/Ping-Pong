//var bola
let xbola = 100;
let ybola = 200;
let diametro = 22;
let raio = diametro / 2;

//vel bola 
let velxbola = 6;
let velybola = 6;

//var raquete
let xraquete = 5;
let yraquete = 150;
let raquetecomprimento = 10;
let raquetealtura = 90;

//var inimiga
let xraqueteinimiga = 585;
let yraqueteinimiga = 150;
let velocidadeyinimiga;

let colidiu = false;

//placar do jogo
let pointsP = 0;
let pointsB = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0, 0, 0);
  showbola();
  movebola();
  verColBorda();
  showraquete(xraquete, yraquete);
  showraquete(xraqueteinimiga, yraqueteinimiga);
  movePraq();
  
  // verificaColisaoRaquete();
  verColraq(xraquete, yraquete);
  verColraq(xraqueteinimiga, yraqueteinimiga);
  moveBraq();
  includeBoard();
  scorePoint();
}

function showbola() {
  circle(xbola, ybola, diametro);
}

function movebola() {
  xbola += velxbola;
  ybola += velybola;
}

function verColBorda() {
  if (xbola + raio > width || xbola - raio < 0) {
    velxbola *= -1;
  }
  if (ybola + raio > height || ybola - raio < 0) {
    velybola *= -1;
  }
}

function showraquete(x,y) {
  rect(x, y, raquetecomprimento, raquetealtura);
}

function movePraq() {
  if(keyIsDown(UP_ARROW)) {
    yraquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yraquete += 10;
  }
}

function verColraq() {
  if (xbola - raio < xraq + racC && ybola - raio < yraq + raqA && ybola + raio > yraq) {
    velxbola *= -1;
  }
}

function verColraq(x,y) {
  colidiu = collideRectCircle(x, y, raquetecomprimento, raquetealtura, xbola, ybola, raio);
  if(colidiu) {
    velxbola *= -1;
  }
}

function moveBraq() {
  velocidadeyinimiga = ybola - yraqueteinimiga - raquetecomprimento / 2 - 30;
  yraqueteinimiga += velocidadeyinimiga;
}

function includeBoard() {
  fill(255);
  text(pointsP, 278, 26);
  text(pointsB, 321, 26);
}

function scorePoint() {
  if (xbola > 590) {
    pointsP += 1;
  }
  if (xbola < 10) {
    pointsB += 1;
  }
}
