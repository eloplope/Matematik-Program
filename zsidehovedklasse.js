// klasse for sidehoved
class Sidehoved {
  constructor(tekst) {
    this.tekst = tekst;
  }
  draw() {
    // side hoved
    push();
    textAlign(CENTER, CENTER);
    fill("lightgrey");
    strokeWeight(0);
    rect(0, 0, width, 0.12 * height);
    fill("black");
    textSize((7 / 108) * height);
    text(this.tekst, width / 2, 0.06 * height);
    pop();
  }
}

// klasse for menuknappen
class Menuknap {
  constructor() {
    let button = createButton("Menu");
    button.mousePressed(() => {
      document.location = "index.html";
    });
    button.position(0, 0);
    button.size(0.12 * height, 0.12 * height);
    button.style("background-color", color(70, 70, 70, 255));
    button.style("color", color("white"));
    button.style("font-size", "25px");
  }
}


