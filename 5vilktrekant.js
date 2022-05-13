let aside;
let bside;

function setup() {
    createCanvas(innerWidth - 1, innerHeight - 1).position(0, 0);
    aside = new InputBox(0.05 * width, 0.275 * height, 0.06 * width);
    bside = new InputBox(0.05 * width, 0.375 * height, 0.06 * width);
    cside = new InputBox(0.05 * width, 0.475 * height, 0.06 * width);
    Avinkel = new InputBox(0.05 * width, 0.575 * height, 0.06 * width);
    Bvinkel = new InputBox(0.05 * width, 0.675 * height, 0.06 * width);
    Cvinkel = new InputBox(0.05 * width, 0.775 * height, 0.06 * width);
    //menukanp
    let menuknappen = new Menuknap();
    side_a = 1
    side_b = 1
    side_c = 2
}

// sidehoved
let sidehoved = new Sidehoved("Vilkårlig Trekant");

function draw() {
    // layout informationer
    background('grey');
    let FyldFarve = "red";
    let KantFarve = "black";
    let KantStørrelse = 10;
    strokeWeight(KantStørrelse);
    fill(FyldFarve);
    stroke(KantFarve);
    //trekanten
    let trekant = new Trekant(0.4375 * width, 0.2 * height, 0.175 * width, 0.7 * height, 0.7 * width, 0.7 * height,true);
    trekant.draw();
    //Trekant side navne(a,b,c)
    // Textfarve etc
    strokeWeight(0);
    fill("black");
    //vinkler
    textSize(50);
    text()
    // Areal og omkreds
    //side hoved
    sidehoved.draw();
    console.log()
    //Sider og vinkel text
    textSize(50);
    text("a", 0.02 * width, 0.325 * height);
    textSize(50);
    text("b", 0.02 * width, 0.425 * height);
    textSize(50);
    text("c", 0.02 * width, 0.525 * height);
    textSize(50);
    text("A", 0.02 * width, 0.625 * height);
    textSize(50);
    text("B", 0.02 * width, 0.725 * height);
    textSize(50);
    text("C", 0.02 * width, 0.825 * height);






    // Work in progress
    //Beregning af siden a
    if (!isNaN(bside.inp.value()) && bside.inp.value() != "" && bside.inp.value() != "0" && !isNaN(cside.inp.value()) && cside.inp.value() != "" && cside.inp.value() != "0" && !isNaN(Avinkel.inp.value()) && Avinkel.inp.value() != "" && Avinkel.inp.value() != "0") {
        side_a = (Math.round(100 * (sqrt((bside.inp.value()) ** 2 + (cside.inp.value()) ** 2 + (-2) * (bside.inp.value()) * (cside.inp.value()) * Math.cos(Avinkel.inp.value() / (180 / Math.PI)))))) / 100;
        text(isNaN(side_a) ? "" : "a: " + side_a, 0.775 * width, 0.8 * height);
    }
    //Beregning af siden b
    if (!isNaN(aside.inp.value()) && aside.inp.value() != "" && aside.inp.value() != "0" && !isNaN(cside.inp.value()) && cside.inp.value() != "" && cside.inp.value() != "0" && !isNaN(Bvinkel.inp.value()) && Bvinkel.inp.value() != "" && Bvinkel.inp.value() != "0") {
        side_b = (Math.round(100 * (sqrt((aside.inp.value()) ** 2 + (cside.inp.value()) ** 2 + (-2) * (aside.inp.value()) * (cside.inp.value()) * Math.cos(Bvinkel.inp.value() / (180 / Math.PI)))))) / 100;
        text(isNaN(side_b) ? "" : "b: " + side_b, 0.775 * width, 0.7 * height);
    }

    //Beregning af siden c
    if (!isNaN(aside.inp.value()) && aside.inp.value() != "" && aside.inp.value() != "0" && !isNaN(bside.inp.value()) && bside.inp.value() != "" && bside.inp.value() != "0" && !isNaN(Cvinkel.inp.value()) && Cvinkel.inp.value() != "" && Cvinkel.inp.value() != "0") {
        side_c = (Math.round(100 * (sqrt((aside.inp.value()) ** 2 + (bside.inp.value()) ** 2 + (-2) * (aside.inp.value()) * (bside.inp.value()) * Math.cos(Cvinkel.inp.value() / (180 / Math.PI)))))) / 100;
        text(isNaN(side_c) ? "" : "c: " + side_c, 0.775 * width, 0.6 * height);
    }
    //Beregning af omkreds
    if (!isNaN(aside.inp.value()) && aside.inp.value() != "" && aside.inp.value() != "0" && !isNaN(bside.inp.value()) && bside.inp.value() != "" && bside.inp.value() != "0" && !isNaN(cside.inp.value()) && cside.inp.value() != "" && cside.inp.value() != "0") {
        Omkreds = (Math.round(100 * (parseFloat(aside.inp.value()) + parseFloat(bside.inp.value()) + parseFloat((cside.inp.value()))))) / 100;
        text(isNaN(Omkreds) ? "" : "Omkreds: " + Omkreds, 0.775 * width, 0.5 * height);
    }

    //Beregning af vinkelerne A,B og C
    if (!isNaN(aside.inp.value()) && aside.inp.value() != "" && aside.inp.value() != "0" && !isNaN(bside.inp.value()) && bside.inp.value() != "" && bside.inp.value() != "0" && !isNaN(cside.inp.value()) && cside.inp.value() != "" && cside.inp.value() != "0") {
        Vinkel_A = (Math.round(100 * (Math.acos((parseFloat(bside.inp.value()) ** 2 + parseFloat(cside.inp.value()) ** 2 - parseFloat(aside.inp.value()) ** 2) / (2 * (parseFloat(bside.inp.value())) * (parseFloat(cside.inp.value()))))) * 180 / Math.PI)) / 100;
        text(isNaN(Omkreds) ? "" : "A: " + Vinkel_A, 0.775 * width, 0.2 * height);
        Vinkel_B = (Math.round(100 * (Math.acos((parseFloat(aside.inp.value()) ** 2 + parseFloat(cside.inp.value()) ** 2 - parseFloat(bside.inp.value()) ** 2) / (2 * (parseFloat(aside.inp.value())) * (parseFloat(cside.inp.value()))))) * 180 / Math.PI)) / 100;
        text(isNaN(Omkreds) ? "" : "B: " + Vinkel_B, 0.775 * width, 0.3 * height)
        Vinkel_C = (Math.round(100 * (Math.acos((parseFloat(aside.inp.value()) ** 2 + parseFloat(bside.inp.value()) ** 2 - parseFloat(cside.inp.value()) ** 2) / (2 * (parseFloat(aside.inp.value())) * (parseFloat(bside.inp.value()))))) * 180 / Math.PI)) / 100;
        text(isNaN(Omkreds) ? "" : "C: " + Vinkel_C, 0.775 * width, 0.4 * height)
    }



}




//side_a = Math.round(100*sqrt((bside.inp.value)**2+(cside.inp.value)**2+(-2)*(bside.inp.value)*(cside.inp.value)*Math.cos(Avinkel*180/Math.PI)))/100;
//side_b = Math.round(100*sqrt((aside.inp.value)**2+(cside.inp.value)**2+(-2)*(aside.inp.value)*(cside.inp.value)*Math.cos(Bvinkel*180/Math.PI)))/100;
//side_c = Math.round(100*sqrt((aside.inp.value)**2+(bside.inp.value)**2+(-2)*(aside.inp.value)*(bside.inp.value)*Math.cos(Bvinkel*180/Math.PI)))/100;

//Bvinkel = (Math.round(100*(Math.acos((parseFloat(bside.inp.value())**2+parseFloat(cside.inp.value())**2-parseFloat(aside.inp.value())**2)/(2*(parseFloat(bside.inp.value()))*(parseFloat(cside.inp.value())))))*180/Math.PI))/100;
//Avinkel = Math.round(10*(Math.acos(bside.inp.value()/hypo))*180/Math.PI)/10;
//Areal = Math.round(10*(bkatete.inp.value()*akatete.inp.value()*0.5))/10;



function myInputEvent() {
    console.log("Yo ma homie! dis what yo typin': ", this.value());

}







