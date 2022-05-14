let Højde;
let Bredde;

function setup() {
  createCanvas(innerWidth - 1, innerHeight - 1).position(0, 0);
  Højde = new InputBox(width * 0.05, height * 0.45, width * 0.1);
  Bredde = new InputBox(width * 0.3, height * 0.65, width * 0.1);
  //knap til forside
  let menuknappen = new Menuknap();
}

// sidehoved
let sidehoved = new Sidehoved("Firkant");

function draw() {
  // layout informationer
  background("grey");
  let FyldFarve = "red";
  let KantFarve = "black";
  let KantStørrelse = 10;
  strokeWeight(KantStørrelse);
  fill(FyldFarve);
  stroke(KantFarve);
  //Rektangel
  let firkant = new Firkant(
    width * 0.2,
    height * 0.3,
    width * 0.3,
    height * 0.3
  );
  firkant.draw();
  //beregninger af hypotenuse og vinkler
  Areal = parseFloat(Højde.inp.value()) * parseFloat(Bredde.inp.value());
  Omkreds =
    (parseFloat(Højde.inp.value()) + parseFloat(Bredde.inp.value())) * 2;
  strokeWeight(0);
  fill("black");

  //Areal og omkreds
  textSize(50);
  text(
    isNaN(Areal) ? "Areal: 0" : "Areal: " + Areal,
    0.6 * width,
    0.4 * height
  );
  text(
    isNaN(Omkreds) ? "Omkreds: 0" : "Omkreds: " + Omkreds,
    0.6 * width,
    0.5 * height
  );
  sidehoved.draw();
}

function myInputEvent() {
  console.log("Yo ma homie! dis what yo typin': ", this.value());
}
