let backgroundColor;
let stars = [];
let center;
let newColor;

let instrumentToColor;

function setup() {
  createCanvas(2800, 2800);
  newColor = color;
  backgroundColor = color(14, 31, 50);
  background(backgroundColor);
  blendMode(BLEND);
  frameRate(60);

  // violin = color(255, 175, 102, 0.5);
  // woodwind = color(242, 239, 143, 0.5);
  // piano = color(115, 194, 224, 0.5);
  instrumentToColor = {
    brass: color(255, 128, 170, 1), //pink
    wood: color(242, 239, 143, 1), //yellow
    piano: color(147, 207, 217, 1), //blue
    bowed: color(255, 175, 100, 1), //orange
    plucked: color(247, 128, 119, 1), //brown
  };

  songs.forEach(({ center, emotion, impact, instruments, beats }) => {
    let star = new Star(
      {
        centerX: center?.centerX ?? random(1200, 3200),
        centerY: center?.centerY ?? random(1200, 2400),
      },
      impact * 10,
      emotion,
      instruments,
      beats,
      0
    );
    stars.push(star);
  });
}

function draw() {
  noLoop();
  noStroke();
  background(backgroundColor);
  console.log(stars);
  stars.forEach((star) => {
    star.render();
  });
}

function drawRadialGradient(center, colorStops, size) {
  let { centerX, centerY } = center;
  push();
  ellipseMode(CENTER);
  blendMode(SCREEN);

  colorStops.forEach(({ color, opacity, position }, index, array) => {
    if (index == array.length - 1) return;
    else {
      let nextColor = array[index + 1].color;
      let nextPosition = array[index + 1].position;
      let nextOpacity = array[index + 1].opacity;
      for (i = size * position; i < size * nextPosition; i++) {
        let currentColor = lerpColor(
          color,
          nextColor,
          i / (size * (nextPosition - position))
        );
        let currentOpacity = map(
          i,
          size * position,
          size * nextPosition,
          opacity,
          nextOpacity
        );
        noFill();
        // noStroke();
        strokeWeight(1.2);
        let transparent = currentColor;
        transparent.setAlpha(255 * currentOpacity);
        stroke(transparent);
        // fill(transparent);
        ellipse(centerX, centerY, i, i);
      }
    }
  });
  pop();
}

function mouseReleased() {
  save();
}
