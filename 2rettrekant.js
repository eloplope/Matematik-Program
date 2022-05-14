

function setup() {
  createCanvas(innerWidth - 1, innerHeight - 1).position(0, 0);
  akatete = new InputBox(width * 0.85, height * 0.35, 100);
  //akatete.inp.input(beregnfraa);
  bkatete = new InputBox(width * 0.85, height * 0.45, 100);
  //bkatete.inp.input(beregnfrab);
  chypo = new InputBox(width * 0.85, height * 0.55, 100);
  //chypo.inp.input(beregnfrac);
  //menukanp
  let menuknappen = new Menuknap();
  let clearknappen = new clearknap();
  let beregnknappen = new beregnknap();
}

// sidehoved
let sidehoved = new Sidehoved("Den Retvinklede Trekant");

function draw() {
  a = akatete.inp.value();
  b = bkatete.inp.value();
  c = chypo.inp.value();
  // layout informationer
  background("grey");
  fill(110, 70, 70);
  rect(width * 0.7, 0, width * 0.3, height);
  let FyldFarve = "red";
  let KantFarve = "black";
  let KantStørrelse = 10;
  strokeWeight(KantStørrelse);
  fill(FyldFarve);
  stroke(KantFarve);
  //trekanten bliver defineret
  let trekant = new Trekant(
    0.13 * width,
    0.22 * height,
    0.13 * width,
    0.7 * height,
    0.58 * width,
    0.7 * height
  );
  trekant.draw();
  //beregninger af hypotenuse og vinkler og mere
  hypo =
    Math.round(
      100 * sqrt(akatete.inp.value() ** 2 + bkatete.inp.value() ** 2)
    ) / 100;
  Bvinkel = Math.round((10 * Math.acos(a / c) * 180) / Math.PI) / 10;
  Avinkel = Math.round((10 * Math.acos(b / c) * 180) / Math.PI) / 10;
  Areal = Math.round(10 * (b * a * 0.5)) / 10;
  Omkreds =
    Math.round(10 * (parseFloat(b) + parseFloat(a) + parseFloat(c))) / 10;
  // indtegning af hyputenuse
  strokeWeight(0);
  fill("black");
  textSize(100);
  //vinkler
  textSize(50);
  text(isNaN(Bvinkel) ? "0°" : Bvinkel + "°", 0.13 * width, 0.2 * height);
  text(isNaN(Avinkel) ? "0°" : Avinkel + "°", 0.6 * width, 0.7 * height);
  // Areal og omkreds
  text(isNaN(Areal) ? "" : "Areal: " + Areal, 0.8 * width, 0.2 * height);
  text(
    isNaN(Omkreds) ? "Omkreds: 0" : "Omkreds: " + Omkreds,
    0.8 * width,
    0.3 * height
  );
  //navne på ting
  strokeWeight(0);
  fill("black");
  textSize(50);
  text("a: ", 0.8 * width, 0.4 * height);
  text("b:", 0.8 * width, 0.5 * height);
  text("c:", 0.8 * width, 0.6 * height);
  text("c ", 0.35 * width, 0.4 * height);
  text("a", 0.1 * width, 0.5 * height);
  text("b", 0.3 * width, 0.77 * height);

  //side hoved
  sidehoved.draw();
}

function myInputEvent() {
  console.log("Yo ma homie! dis what yo typin': ", this.value());
}

function beregn() {
  if (!isNaN(b) && b != "" && !isNaN(a) && a != "") {
    chypo.inp.value(Math.round(100 * sqrt(a ** 2 + b ** 2)) / 100);
    console.log("b-a");
  } else if (!isNaN(b) && b != "" && !isNaN(c) && c != "") {
    akatete.inp.value(sqrt(c ** 2 - b ** 2));
    console.log("b-c");
  } else if (!isNaN(a) && a != "" && !isNaN(c) && c != "") {
    console.log("a-c");
    bkatete.inp.value(sqrt(c ** 2 - a ** 2));
  }
}



/* bkatete.inp.value(sqrt(chypo.inp.value()**2-akatete.inp.value()**2))
    print("ost2");
  } else if (!isNaN(bkatete.inp.value()) && bkatete.inp.value() != ""){
    chypo.inp.value(Math.round(100*sqrt((akatete.inp.value())**2+(bkatete.inp.value())**2))/100);
    print("ost3");

/*function beregnfrab() {
  if (!isNaN(bkatet.inp.value()) && bkatet.inp.value() != "") {
    RadiusBox.inp.value(Math.round(100 * (OmkredsBox.inp.value() / (2 * Math.PI))) / 100);
    ArealBox.inp.value(Math.round(100 * (parseFloat(RadiusBox.inp.value() ** 2 * Math.PI))) / 100);
    DiameterBox.inp.value(RadiusBox.inp.value() * 2);
  }
}

function beregnfrac() {
  if (!isNaN(chypo.inp.value()) && chypo.inp.value() != "") {
    RadiusBox.inp.value(Math.round(100 * (sqrt(ArealBox.inp.value()/Math.PI))) / 100);
    DiameterBox.inp.value(RadiusBox.inp.value() * 2);
    OmkredsBox.inp.value(Math.round(100 * (parseFloat(RadiusBox.inp.value() * 2 * Math.PI))) / 100);
  }
}*/
