// klasse for trekant
class Trekant {
  constructor(x1, y1, x2, y2, x3, y3, vilkårlig) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.vilk = vilkårlig;
  }
  draw() {
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    // Indtegning af vinkler og mere layout
    if (this.vilk == undefined) {
      rect(this.x2, this.y2, 30, -30)
      push();
      strokeWeight(0);
      fill("black");
      textSize((this.x3 / this.x1) * 11);
      text("90°", this.x2 + 35, this.y2 - 35);
      pop();
    }
  }
}

// Klasse for cirkel
class Cirkel {
  constructor(x3, y3, x4) {
    this.x3 = x3;
    this.y3 = y3;
    this.x4 = x4;
  }
  draw() {
    circle(this.x3, this.y3, this.x4);
    line(this.x3, this.y3, this.x3 + this.x4 / 2, this.y3)

  }
}



// klasse for firkant
class Firkant {
  constructor(x1, y1, b, h) {
    this.x1 = x1;
    this.y1 = y1;
    this.b = b;
    this.h = h;
  }
  draw() {
    rect(this.x1, this.y1, this.b, this.h);
    rect(this.x1, this.y1, 30, 30)
    rect(this.x1 + this.b, this.y1, -30, 30)
    rect(this.x1, this.y1 + this.h, 30, -30)
    rect(this.x1 + this.b, this.y1 + this.h, -30, -30)
    // Indtegning af vinkler og mere layout
    push();
    strokeWeight(0);
    fill("black");
    textSize(((this.h * 0.15)));
    text("90°", this.x1 * 1.11, this.h + 0.8 * this.y1);
    pop();
  }
}
// klasse for funktionen på forsiden
class Funkpynt {
  constructor(x,y,bredde) {
    this.x = x;
    this.y = y;
    this.w = bredde;
  }
  draw() {
  pop();
  push();
  noFill();
  stroke("red");
  beginShape();
  for (let index = 0; index < this.w; index++) {
    vertex(this.x + index, this.y + (0.01 * width * Math.cos(index / 15) - 0.5 * index)+10);
  }
  endShape()
  pop();
  push();
  noFill();
  beginShape();
  for (let index = 0; index < this.w; index++) {
    vertex(this.x + index, this.y + (0.01 * width * Math.cos(index / 15) - 0.5 * index));
  }
  endShape()
  }
}

