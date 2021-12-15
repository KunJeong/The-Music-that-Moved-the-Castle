let violin, piano, yellow;
let backgroundColor;
let star1, star2;
let center;
let newColor;

function setup() {
  newColor = color;
  createCanvas(800, 800);
  backgroundColor = color(19, 44, 83);
  background(backgroundColor);
  blendMode(BLEND);
  frameRate(60);

  // violin = color(255, 175, 102, 0.5);
  // woodwind = color(242, 239, 143, 0.5);
  // piano = color(115, 194, 224, 0.5);

  violin = color(230, 162, 170, 1);
  woodwind = color(242, 220, 141, 1);
  piano = color(147, 207, 217, 1);

  const flame1 = [
    {
      color: piano,
      maxWidth: 18,
      maxLength: 120,
      type: "main",
    },
    {
      color: piano,
      maxWidth: 18,
      maxLength: 90,
    },
    {
      color: piano,
      maxWidth: 18,
      maxLength: 120,

      type: "main",
    },
    {
      color: piano,
      maxWidth: 18,
      maxLength: 90,
    },
    {
      color: piano,
      maxWidth: 18,
      maxLength: 120,
      type: "main",
    },
    {
      color: piano,
      maxWidth: 18,
      maxLength: 90,
    },
  ];

  const flame2 = [
    {
      color: violin,
      maxWidth: 18,
      maxLength: 160,
    },
    {
      color: piano,
      maxWidth: 18,
      maxLength: 120,
    },
    {
      color: woodwind,
      maxWidth: 18,
      maxLength: 110,
    },
    {
      color: violin,
      maxWidth: 18,
      maxLength: 80,
    },
    {
      color: piano,
      maxWidth: 18,
      maxLength: 160,
    },
    {
      color: violin,
      maxWidth: 18,
      maxLength: 130,
    },
    {
      color: woodwind,
      maxWidth: 18,
      maxLength: 140,
    },
    {
      color: piano,
      maxWidth: 18,
      maxLength: 90,
    },
    {
      color: violin,
      maxWidth: 18,
      maxLength: 120,
    },
    {
      color: woodwind,
      maxWidth: 18,
      maxLength: 140,
    },
  ];
  center = { centerX: 200, centerY: 200 };
  star1 = createStar(center, 13.75, 720, flame1);
  star2 = createStar({ centerX: 500, centerY: 500 }, 18, 540, flame2);
}

function draw() {
  noStroke();
  background(backgroundColor);
  // for (i = 0; i < flameCount; i++) {
  //   flames.push()
  // }
  // console.log(flames);
  star1.forEach((flame) => {
    flame.render();
  });
  star2.forEach((flame) => {
    flame.render();
  });

  // let flame = new Flame(center, orange, 18, 160, 20, 0, 20);
  // print(flame);
  // flame.display();
  drawRadialGradient(
    center,
    [
      { color: color(255), opacity: 1, position: 0 },
      { color: color(255, 255, 255), opacity: 0.7, position: 0.2 },
      { color: color(255, 255, 255), opacity: 0.5, position: 0.25 },
      { color: color(25, 21, 255), opacity: 0.1, position: 0.85 },
      // { color: color(255, 21, 255), position: 75 },
      { color: color(25, 21, 255), opacity: 0, position: 1 },
    ],
    120
  );
  drawRadialGradient(
    { centerX: 500, centerY: 500 },
    [
      { color: color(255), opacity: 1, position: 0 },
      { color: color(255, 255, 255), opacity: 0.7, position: 0.2 },
      { color: color(255, 255, 255), opacity: 0.4, position: 0.25 },
      { color: color(255, 21, 2), opacity: 0.1, position: 0.85 },
      // { color: color(255, 21, 255), position: 75 },
      { color: color(255, 21, 2), opacity: 0, position: 1 },
    ],
    150
  );
}

function createStar(center, avgRadius, w, flameProperties) {
  let angle = (2 * PI) / flameProperties.length;
  let flames = [];
  flameProperties.forEach(({ color, maxWidth, maxLength, type }, index) => {
    // print(index);
    flames.push(
      new Flame(
        center,
        color,
        maxWidth,
        maxLength,
        type,
        avgRadius + random(-5, 5),
        angle * index,
        w
      )
    );
  });
  return flames;
}

function drawTail() {}

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
