let volumeToSize = {
  ff: 150,
  f: 135,
  mf: 120,
  mp: 105,
  p: 90,
  pp: 75,
  ppp: 60,
};

class Star {
  constructor(center, radius, emotion, instruments, repeat, w) {
    this.reset(center, radius, emotion, instruments, repeat, w);
  }

  reset(center, radius, emotion, instruments, repeat, w) {
    this.centerX = center.centerX;
    this.centerY = center.centerY;
    this.emotion = emotion;
    // this.instruments = instruments;
    this.flames = [];
    this.w = w;
    // this.angle = random(0,)
    this.radius = radius;
    this.repeat = repeat;
    let angle = (2 * PI) / (instruments.length * repeat);
    console.log(angle);
    let initialAngle = random(0, 2 * PI);
    for (let index = 0; index < instruments.length * repeat; ) {
      instruments.forEach(({ type, role, volume }) => {
        // console.log(instrumentToColor[type]);
        this.flames.push(
          new Flame(
            center,
            instrumentToColor[type],
            volumeToSize[volume],
            role,
            radius + random(2, 8),
            initialAngle + angle * index + random(-angle / 6, angle / 6),
            w
          )
        );
        index++;
      });
    }
  }

  getColorForEmotion(emotion) {
    switch (emotion) {
      case "magical":
        return newColor(25, 50, 255);
      case "sad":
        return newColor(36, 245, 255);
      case "scared":
        return newColor(255, 23, 23); //red
      case "funny":
        return newColor(255, 255, 26); //yellow
      case "love":
        return newColor(255, 51, 153); //pink
      case "peaceful":
        return newColor(44, 255, 129);
    }
  }

  update() {}

  display() {
    this.flames.forEach((flame) => {
      flame.render();
    });
    this.drawShine();
    this.drawTail();
  }

  drawShine() {
    let shineColor = this.getColorForEmotion(this.emotion);
    drawRadialGradient(
      { centerX: this.centerX, centerY: this.centerY },
      [
        { color: color(255), opacity: 1, position: 0 },
        {
          color: color(255, 255, 255),
          opacity: 0.7,
          position: 0.2,
        },
        { color: color(255, 255, 255), opacity: 0.3, position: 0.25 },
        { color: shineColor, opacity: 0.1, position: 0.85 },
        // { color: color(255, 21, 255), position: 75 },
        { color: shineColor, opacity: 0, position: 1 },
      ],
      this.radius * 8
    );
  }

  drawTail() {
    push();
    translate(this.centerX, this.centerY);
    rotate(-(3 / 4) * PI);
    translate(-this.centerX, -this.centerY);
    fill(200);
    // beginShape();
    // stroke(255);
    // strokeWeight(4);
    blendMode(OVERLAY);
    let p1 = { x: this.centerX + 6, y: this.centerY };
    let p2 = { x: this.centerX + 20, y: this.centerY + this.radius + 3200 };
    let p3 = { x: this.centerX - 20, y: this.centerY + this.radius + 3200 };
    let p4 = { x: this.centerX - 6, y: this.centerY };

    let q1 = { x: this.centerX + 20, y: this.centerY };
    let q2 = { x: this.centerX + 60, y: this.centerY + this.radius + 3200 };
    let q3 = { x: this.centerX - 60, y: this.centerY + this.radius + 3200 };
    let q4 = { x: this.centerX - 20, y: this.centerY };

    beginShape();
    vertex(p1.x, p1.y);
    bezierVertex(p1.x + 50, p1.y, p2.x + 200, p2.y, p2.x, p2.y);
    bezierVertex(p2.x, p2.y, p3.x, p3.y, p3.x, p3.y);
    bezierVertex(p3.x - 200, p3.y, p3.x + 200, p3.y, p4.x, p4.y);
    bezierVertex(p4.x, p4.y + 1, p1.x, p1.y + 2, p1.x, p1.y);
    endShape();
    fill(145);

    // beginShape();
    // vertex(q1.x, q1.y);
    // bezierVertex(q1.x, q1.y, q2.x + 400, q2.y, q2.x, q2.y);
    // bezierVertex(q2.x, q2.y, q3.x, q3.y, q3.x, q3.y);
    // bezierVertex(q3.x, q3.y, q3.x + 300, q3.y, q4.x, q4.y);
    // bezierVertex(q4.x, q4.y + 3, q1.x, q1.y + 4, q1.x, q1.y);
    // endShape();
    pop();
  }

  render() {
    return this.display();
  }
}
