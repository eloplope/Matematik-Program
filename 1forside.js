let akatete;
let bkatete;

function setup() {
  createCanvas(innerWidth - 1, innerHeight - 1).position(0, 0);
  //knap til rettrekant
  let knappentrekant = new Knapper("Ret trekant", "2rettrekant.html", 0.09 * width, 0.13 * height, 0.175 * width, 0.34 * height);
  //knap til cirkel
  let knappencirkel = new Knapper("Cirklen", "3cirkel.html", 0.4125 * width, 0.13 * height, 0.175 * width, 0.34 * height);
  //knap til firkant
  let knappensketch = new Knapper("Firkant", "4firkant.html", 0.74 * width, 0.13 * height, 0.175 * width, 0.34 * height);
  //funktion
  let knappenfunktion = new Knapper("Funktion", "funktion.html", 0.09 * width, 0.5 * height, 0.175 * width, 0.34 * height);
  //knappen til den vilkårlige trekant
  let knappenvilkårligtrekant = new Knapper("Vilkårlig trekant", "5vilktrekant.html", 0.4125 * width, 0.5 * height, 0.175 * width, 0.34 * height);
}

let sidehoved = new Sidehoved("Hvad vil du beregne?");

function draw() {
  // layout informationer
  background('grey');
  let FyldFarve = "red";
  let KantFarve = "black";
  let KantStørrelse = 10;
  strokeWeight(KantStørrelse);
  fill(FyldFarve);
  stroke(KantFarve);
  // trekant knap pynt
  let trekant = new Trekant(0.1 * width, 0.15 * height, 0.1 * width, 0.45 * height, 0.25 * width, 0.45 * height);
  trekant.draw();
  // cirkel knap pynt
  let cirkel = new Cirkel(0.5 * width, 0.3 * height, 0.3 * height);
  cirkel.draw();
  // firkant knap pynt
  rect(0.75 * width, 0.15 * height, 0.15 * width, 0.3 * height)
  sidehoved.draw();
  // vilk trekant knap pynt
  let trekantV = new Trekant(0.53 * width, 0.52 * height, 0.43 * width, 0.82 * height, 0.58 * width, 0.82 * height, true);
  trekantV.draw();
  // funktion knap pynt
  let funktion= new Funkpynt(0.1*width,0.75*height,0.159 * width);
  funktion.draw();



}




