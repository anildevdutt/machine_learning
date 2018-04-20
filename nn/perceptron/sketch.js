var brain = new Perceptron(2);

var points = [];
var labels = [];

function createRandomPoints(n) {
  for(let i = 0; i < n; i++) {
    let x = Math.floor(Math.random() * 1000) % 550 + 1;
    let y = Math.floor(Math.random() * 1000) % 550 + 1
    let point = [x, y];
    points.push(point);
    if(x >= y) {
      labels.push(1);
    } else {
      labels.push(0);
    }
  }
}

function setup() {
  createCanvas(610, 610);
  background(255);
  createRandomPoints(100);


  strokeWeight(2);
  stroke(0);
  rect(0,0, 600, 600);
  for(let i = 0; i < points.length; i++) {
    let point = points[i];
    ellipse(point[0], point[1], 8, 8);
  }
  stroke(255, 100, 40);
  line(0, 0, 600, 600);

  stroke(0);
  for(let i = 0; i < points.length; i++) {
    let point = points[i];
    if(brain.process(point) == labels[i]) {
      fill(0, 200, 0);
      ellipse(point[0], point[1], 8, 8);
    } else {
      fill(255, 0, 0);
      ellipse(point[0], point[1], 8, 8);
    }
  }
}

function keyPressed() {
  brain.batchTrain(points, labels, 1);
  stroke(0);
  for(let i = 0; i < 100; i++) {
    let point = points[i];
    if(brain.process(point) == labels[i]) {
      fill(0, 200, 0);
      ellipse(point[0], point[1], 8, 8);
    } else {
      fill(255, 0, 0);
      ellipse(point[0], point[1], 8, 8);
    }
  }
}

function mouseClicked() {
  let point = [mouseX, mouseY];

  if(brain.process(point) == 1) {
    fill(40, 100, 255);
    ellipse(point[0], point[1], 8, 8);
  } else {
    fill(255, 40, 255);
    ellipse(point[0], point[1], 8, 8);
  }
}
