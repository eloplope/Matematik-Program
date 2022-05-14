let RadiusBox;

let sidehoved = new Sidehoved("Cirklen");

function setup() {
  createCanvas(innerWidth - 1, innerHeight - 1).position(0, 0);
  //Input Brede
  inpwidth = 0.25 * width;
  //tekst boxe
  OmkredsBox = new InputBox(width * 0.71, height * 0.25, inpwidth);
  OmkredsBox.inp.input(beregnfraomkreds);
  ArealBox = new InputBox(width * 0.71, height * 0.4, inpwidth);
  ArealBox.inp.input(beregnfraareal);
  DiameterBox = new InputBox(width * 0.71, height * 0.55, inpwidth);
  DiameterBox.inp.input(beregnfradiameter);
  RadiusBox = new InputBox(width * 0.71, height * 0.7, inpwidth);
  RadiusBox.inp.input(beregnfraradius);

  //knap til forside
  let menuknappen = new Menuknap();
}

function draw() {
  // layout informationer
  background("grey");
  fill(110, 70, 70);
  rect(width * 0.7, 0, width * 0.3, height);
  textAlign(CENTER);
  let FyldFarve = "red";
  let KantFarve = "black";
  let KantStørrelse = 10;
  strokeWeight(KantStørrelse);
  fill(FyldFarve);
  stroke(KantFarve);
  // Indtegning af cirkel
  let cirkel = new Cirkel(width * 0.28, height * 0.5, 0.6 * height);
  cirkel.draw();
  // teksten for beregninger
  strokeWeight(0);
  fill("black");
  textSize(0.03 * width);
  text("Omkreds: ", 0.85 * width, 0.23 * height);
  text("Areal:", 0.85 * width, 0.38 * height);
  text("Diameter:", 0.85 * width, 0.53 * height);
  text("Radius: ", 0.85 * width, 0.68 * height);
  // Overskrifter
  textSize(40);
  text("Radius", width * 0.3, height * 0.46);
  //sidehoved
  sidehoved.draw();
}

// Areal og omkreds samt diameter indskrivning
function beregnfraradius() {
  if (!isNaN(RadiusBox.inp.value()) && RadiusBox.inp.value() != "") {
    OmkredsBox.inp.value(
      Math.round(100 * parseFloat(RadiusBox.inp.value() * 2 * Math.PI)) / 100
    );
    ArealBox.inp.value(
      Math.round(100 * parseFloat(RadiusBox.inp.value() ** 2 * Math.PI)) / 100
    );
    DiameterBox.inp.value(RadiusBox.inp.value() * 2);
  }
}

function beregnfraomkreds() {
  if (!isNaN(OmkredsBox.inp.value()) && OmkredsBox.inp.value() != "") {
    RadiusBox.inp.value(
      Math.round(100 * (OmkredsBox.inp.value() / (2 * Math.PI))) / 100
    );
    ArealBox.inp.value(
      Math.round(100 * parseFloat(RadiusBox.inp.value() ** 2 * Math.PI)) / 100
    );
    DiameterBox.inp.value(RadiusBox.inp.value() * 2);
  }
}

function beregnfraareal() {
  if (!isNaN(ArealBox.inp.value()) && ArealBox.inp.value() != "") {
    RadiusBox.inp.value(
      Math.round(100 * sqrt(ArealBox.inp.value() / Math.PI)) / 100
    );
    DiameterBox.inp.value(RadiusBox.inp.value() * 2);
    OmkredsBox.inp.value(
      Math.round(100 * parseFloat(RadiusBox.inp.value() * 2 * Math.PI)) / 100
    );
  }
}

function beregnfradiameter() {
  if (!isNaN(DiameterBox.inp.value()) && DiameterBox.inp.value() != "") {
    RadiusBox.inp.value(Math.round(100 * (DiameterBox.inp.value() / 2)) / 100);
    OmkredsBox.inp.value(
      Math.round(100 * parseFloat(RadiusBox.inp.value() * 2 * Math.PI)) / 100
    );
    ArealBox.inp.value(
      Math.round(100 * parseFloat(RadiusBox.inp.value() ** 2 * Math.PI)) / 100
    );
  }
}

function myInputEvent() {
  console.log("Yo ma homie! dis what yo typin': ", this.value());
}

