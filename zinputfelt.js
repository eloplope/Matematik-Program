// klasse for input boks
class InputBox {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.inp = createInput("");
    this.inp.position(this.x, this.y);
    this.inp.size(this.size);
    this.inp.input(myInputEvent);
    this.inp.style("font-size", "30px", "color", "#ffffff");
  }
}

// klasse for input slider
class Sliderfelt {
  constructor(x, y, size, start, max, min) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.start = start;
    this.max = max;
    this.min = min;
    this.sli = createSlider(this.min, this.max, this.start);
    this.sli.position(this.x, this.y);
    this.sli.size(this.size);
    this.sli.input(myInputEvent);
    this.sli.style("color", "#ffffff");
  }
}

// klasse for de genemsigtige knapper i menuen
class Knapper {
  constructor(text, link, x, y, w, h) {
    this.text = text;
    this.link = link;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    let button = createButton(this.text);
    button.mousePressed(() => {
      document.location = this.link;
    });
    button.position(this.x, this.y);
    button.size(this.w, this.h);
    button.style("background-color", color(0, 0, 0, 50));
    button.style("color", color("white"));
    button.style("font-size", "30px");
  }
}

class clearknap {
  constructor() {
    let button = createButton("Clear");
    button.mousePressed(() => {
      akatete.inp.value("");
      bkatete.inp.value("");
      chypo.inp.value("");
      mostrecent = "";
    });
    button.position(width * 0.8, height * 0.63);
    button.size(0.26 * height, 0.06 * height);
    button.style("background-color", color(70, 70, 70, 255));
    button.style("color", color("white"));
    button.style("font-size", "25px");
  }
}

class beregnknap {
  constructor() {
    let button = createButton("Beregn");
    button.mousePressed(() => beregn());
    button.position(width * 0.8, height * 0.7);
    button.size(0.26 * height, 0.06 * height);
    button.style("background-color", color(70, 70, 70, 255));
    button.style("color", color("white"));
    button.style("font-size", "25px");
  }
}

