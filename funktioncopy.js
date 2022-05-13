
function setup() {
  createCanvas(innerWidth-1, innerHeight-1).position(0,0); 
  //lignings-felt
  ligning = new InputBox(width * 0.7, height * 0.22, 430);
  //akatete.inp.input(beregnfraa);
  //menukanp
  let menuknappen = new Menuknap();
  //sliders
  nulslider = new Sliderfelt(width*0.71,height*0.4,400,55,100,0);
  yslider = new Sliderfelt(width*0.71,height*0.55,400,50,250,);
  xslider = new Sliderfelt(width*0.71,height*0.7,400,50,500,0);
  xskyd = new Sliderfelt(width*0.71,height*0.9,400,0,250,-250);
}


// sidehoved
let sidehoved = new Sidehoved("Den matematiske funktion");

function draw() {
  // layout informationer
  background('grey');
  strokeWeight(10);
  fill("black");
  stroke("black");
  strokeWeight(0);
  textSize(50);
  textAlign(CENTER);
  //forklaring
  text("ligning: ", 0.85 * width, 0.2 * height);
  text("forskydning: ", 0.85 * width, 0.35 * height);
  text("y-akse skalering: ", 0.85 * width, 0.50 * height);
  text("x-akse skalering: ", 0.85 * width, 0.65 * height);
  // graf math
  nulpunkt=((nulslider.sli.value()/100)*height);
  xflyt=xskyd.sli.value()*0.1
  // graf tilbehør
  stroke(90,90,90);
  strokeWeight(5);
  // linjer til de vigtige tal med decimaler
  line(0,nulpunkt+250,1000,nulpunkt+250);
  line(0,nulpunkt-250,1000,nulpunkt-250);
  line(1000,nulpunkt+250,1000,nulpunkt-250);
  //de vigtige tal med decimaler
  push();
  textSize(Math.min(20,sqrt(250/(xslider.sli.value()/10))*6))
  strokeWeight(0);
  textAlign(CENTER);
  //xaksetext
  text(((xslider.sli.value()/10)),1000,nulpunkt-260)
  text(((xslider.sli.value()/10)),1000,nulpunkt+275)
  //yaksetext
  textSize(Math.min(20,sqrt(250/(yslider.sli.value()/10))*3))
  text(((yslider.sli.value()/10)),1015,nulpunkt-245)
  text(((-yslider.sli.value()/10)),1015,nulpunkt+255)
  pop();

  //ylinjer og tal
  for (let index = 0; index < floor((yslider.sli.value()/10)); index++) {
    mellem = 250/(yslider.sli.value()/10);
    y1 = nulpunkt+(mellem*index);
    y2 = nulpunkt-(mellem*index);
    line(0,y1+mellem,1000,y1+mellem);
    push();
    textSize(Math.min(20,sqrt(mellem)*3))
    strokeWeight(0);
    text(-index,1015,y1+5);
    text(index,1015,y2+5);
    pop();
    line(0,y2-mellem,1000,y2-mellem);
  }
  //xlinjer og tal
  for (let index = 0; index < floor((xslider.sli.value()/10)); index++) {
    mellem = 1000/(xslider.sli.value()/10);
    push();
    textSize(Math.min(20,sqrt(250/(xslider.sli.value()/10))*6))
    strokeWeight(0);
    text(index,index*mellem,nulpunkt+275);
    text(index,index*mellem,nulpunkt-260);
    pop();
    line(mellem+index*mellem,nulpunkt-250,mellem+index*mellem,nulpunkt+250);
  }
 
  //Xaksen og Yaksen
  strokeWeight(10);
  stroke("lightgrey");
  line(0,nulpunkt,1000,nulpunkt)
  line(5,nulpunkt+250,5,nulpunkt-250)

  // graf af den matematiske funktion
  try {
    stroke("black")
    noFill();
    beginShape()
    for (let index = 0; index < 1000; index++) {
    lig = ligning.inp.value();
    res = lig.replaceAll("Sin(","Math.sin(");
    res = res.replaceAll("Cos(","Math.cos(");
    res = res.replaceAll("x",(xflyt+(index*0.01*(xslider.sli.value()/100))));
    vertex(index,(nulpunkt-((eval(res)/(yslider.sli.value()*1/2500))))); 
  }
  endShape()
  } catch (error) {
  endShape()
  }


  //side hoved
  sidehoved.draw();
}

function myInputEvent() {
  console.log("Yo ma homie! dis what yo typin': ", this.value());
}
