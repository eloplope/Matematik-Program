let akatete;
let bkatete;

function setup() {
  createCanvas(innerWidth-1, innerHeight-1).position(0,0); 
  akatete = new InputBox(0.025*width,0.5*height,0.06*width);
  bkatete = new InputBox(0.20*width,0.75*height,0.06*width);
  //menukanp
  let menuknappen = new Menuknap();

  
}

// sidehoved
let sidehoved = new Sidehoved("Den Retvinklede Trekant");

function draw() {
  // layout informationer
  background('grey');
  let FyldFarve = "red";
  let KantFarve = "black";
  let KantStørrelse = 10;
  strokeWeight(KantStørrelse);
  fill(FyldFarve);
  stroke(KantFarve);
  //trekanten bliver defineret
  let trekant = new Trekant(0.13*width,0.22*height,0.13*width,0.7*height,0.58*width,0.7*height);
  trekant.draw();
  //beregninger af hypotenuse og vinkler og mere
  hypo = Math.round(100*sqrt((akatete.inp.value())**2+(bkatete.inp.value())**2))/100;
  Bvinkel = Math.round(10*(Math.acos(akatete.inp.value()/hypo))*180/Math.PI)/10;
  Avinkel = Math.round(10*(Math.acos(bkatete.inp.value()/hypo))*180/Math.PI)/10;
  Areal = Math.round(10*(bkatete.inp.value()*akatete.inp.value()*0.5))/10;
  Omkreds = Math.round(10*(parseFloat(bkatete.inp.value())+parseFloat(akatete.inp.value())+parseFloat(hypo)))/10;
  // indtegning af hyputenuse
  strokeWeight(0);
  fill("black");
  textSize(100);
  text(hypo, 0.35*width, 0.4*height);
  //vinkler
  textSize(50);
  text(isNaN(Bvinkel) ? "0°": Bvinkel+"°", 0.13*width, 0.2*height);
  text(isNaN(Avinkel) ? "0°": Avinkel+"°", 0.6*width, 0.7*height);
  // Areal og omkreds
  text(isNaN(Areal) ? "": "Areal: "+ Areal, 0.7*width, 0.4*height);
  text(isNaN(Omkreds) ? "Omkreds: 0": "Omkreds: "+ Omkreds, 0.7*width, 0.5*height);
  //side hoved
  sidehoved.draw();
  
}

function myInputEvent() {
  console.log("Yo ma homie! dis what yo typin': ", this.value());

}




