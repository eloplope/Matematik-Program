function setup() {
  createCanvas(innerWidth - 1, innerHeight - 1).position(0, 0);
  //lignings-felt
  ligning = new InputBox(width * 0.71, height * 0.22, 425);
  //akatete.inp.input(beregnfraa);
  //menukanp
  let menuknappen = new Menuknap();
  //sliders
  nulslider = new Sliderfelt(width * 0.71, height * 0.4, 400, 55, 100, 0);
  yslider = new Sliderfelt(width * 0.71, height * 0.55, 400, 50, 250, 0);
  xslider = new Sliderfelt(width * 0.71, height * 0.7, 400, 200, 500, 0);
  xskyd = new Sliderfelt(width * 0.71, height * 0.9, 400, -10, 40, -40);
  yskyd = new Sliderfelt(width * 0.71, height * 0.8, 400, -5, 40, -40);

}

// sidehoved
let sidehoved = new Sidehoved("Den matematiske funktion");

function draw() {
  //lidt tal
  starten = width * 0.6;
  starttekst = starten+15;
  højde = height * 0.35;

  
  // layout informationer
  background('grey');
  strokeWeight(0);
  stroke("black");
  fill(110, 70, 70);
  rect(width * 0.7, 0, width * 0.3, height)
  fill("black");
  textSize(50);
  textAlign(CENTER);
  //forklaring
  text("Ligning: ", 0.85 * width, 0.2 * height);
  text("Forskydning: ", 0.85 * width, 0.35 * height);
  text("y-akse skalering: ", 0.85 * width, 0.50 * height);
  text("x-akse skalering: ", 0.85 * width, 0.65 * height);
  // graf math
  nulpunkt = ((nulslider.sli.value() / 100) * height);
  xflyt = xskyd.sli.value();
  yflyt = yskyd.sli.value();
  yslide = yslider.sli.value();
  xslide = xslider.sli.value();

  // graf tilbehør xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  stroke(90, 90, 90);
  strokeWeight(5);
  // linjer til de vigtige tal med decimaler xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  line(0, nulpunkt + højde, starten, nulpunkt + højde);
  line(0, nulpunkt - højde, starten, nulpunkt - højde);
  line(starten, nulpunkt + højde, starten, nulpunkt - højde);
  //de vigtige tal med decimalerxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  push();
  textSize(Math.min(20, sqrt(højde / (xslide / 10)) * 6))
  strokeWeight(0);
  textAlign(CENTER);
  //xaksetext xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  text(round((xflyt + (xslide / 10)), 1), starten, nulpunkt - (højde+10))
  text(round((xflyt + (xslide / 10)), 1), starten, nulpunkt + (højde+25))
  //yaksetext xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  textSize(Math.min(20, sqrt(højde / (yslide / 10)) * 3))
  text(round(-yflyt, 1), starttekst, nulpunkt - (højde-5))
  text(round(-yflyt - 10 - ((yslide / 5) - 10), 1), starttekst, nulpunkt + (højde+5))
  pop();

  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


  //  YYYYY    YYYYY    //
  //    YYYY  YYYY      //
  //      YYYYYY        //
  //        YY          //
  //        YY          //
  //        YY          //
  //        YY          //
  //ylinjer og tal
  mellemy = højde / (yslide / 10);
  for (let index = 1; index < floor((yslide / 5)); index++) {
    y1 = (nulpunkt - højde) + (mellemy * index)
    line(0, y1, starten, y1);
    push();
    textSize(Math.min(20, sqrt(mellemy) * 3))
    strokeWeight(0);
    text(-index - yflyt, starttekst, y1 + 5);
    pop();
    detnyenulpunkt = (nulpunkt - højde) + (mellemy)
  }
  linje("lightgrey", 10, 0, detnyenulpunkt + (-1 - yflyt) * mellemy, starten, detnyenulpunkt + (-1 - yflyt) * mellemy)

  //  XXXXX    XXXXX    //
  //    XXXX  XXXX      //
  //      XXXXXX        //
  //        XX          //
  //      XXXXXX        //
  //    XXXX  XXXX      //
  //  XXXXX    XXXXX    //
  //xlinjer og tal
  mellem = starten / (xslide / 10);
  for (let index = 0; index < floor((xslide / 10)); index++) {
    push();
    textSize(Math.min(20, sqrt(højde / (xslide / 10)) * 6))
    strokeWeight(0);
    text(round(xflyt + index, 1), index * mellem, nulpunkt + (højde+25));
    text(round(xflyt + index, 1), index * mellem, nulpunkt - (højde+10));
    if (round(xflyt + index, 1) == 0) {
      linje("lightgrey", 10, index * mellem, nulpunkt + højde, index * mellem, nulpunkt - højde)
    }
    pop();
    line(mellem + index * mellem, nulpunkt - højde, mellem + index * mellem, nulpunkt + højde);
  }

  // FFFFFFFFFFFF      //
  // FFF               //
  // FFFFFFFFFFFF      //
  // FFF               //
  // FFF               //
  // FFF               //
  // FFF               //
  // graf af den matematiske funktion
  try {
    stroke("black")
    noFill();
    beginShape()
    for (let index = 0; index < starten; index++) {
      lig = ligning.inp.value();
      res = lig.replaceAll("Sin(", "Math.sin(");
      res = res.replaceAll("Cos(", "Math.cos(");
      res = res.replaceAll("x", (xflyt + (index * 0.01 * (xslide / 100))));
      vertex(index, (detnyenulpunkt - (eval(res) / (yslide * 1 / (højde * 10)))) - (mellemy * yflyt) - mellemy);
    }
    endShape()
  } catch (error) {
    endShape()
  }

  //side hoved 
  sidehoved.draw();
}


function linje(color, wdth, x1, y1, x2, y2) {
  push();
  strokeWeight(wdth);
  stroke(color);
  line(x1, y1, x2, y2)
  pop();
}

function myInputEvent() {
  console.log("Yo ma homie! dis what yo typin': ", this.value());
}
