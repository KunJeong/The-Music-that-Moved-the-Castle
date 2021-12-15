let innerFlameRatio = { w: 0.4, c: 0.8, inner: 0.05, outer: 0.4 };

class Flame {
  constructor(center, innerColor, maxWidth, maxLength, type, radius, angle, w) {
    this.reset(center, innerColor, maxWidth, maxLength, type, radius, angle, w);
  }

  reset(center, innerColor, maxWidth, maxLength, type, radius, angle, w) {
    //constants
    this.centerX = center.centerX;
    this.centerY = center.centerY;
    this.innerColor = innerColor;
    this.maxWidth = maxWidth;
    this.maxLength = maxLength;
    this.type = type;
    this.radius = radius;
    this.w = w;
    this.edgeColor = lerpColor(
      this.innerColor,
      backgroundColor,
      innerFlameRatio.c
    );
    this.initialAngle = angle + random(-PI / 40, PI / 40);
    //animated values
    this.angle = angle + random(-PI / 40, PI / 40);

    // this.angularDisplacement = angle + random(-PI / 40, PI / 40);

    this.offset = random(3, 10);
    this.outward = true;
  }

  update() {
    this.angle = this.angle - PI / this.w;
    this.outward =
      this.offset < 3 ? true : this.offset > 10 ? false : this.outward;
    this.offset = this.outward
      ? this.offset + 40 / this.w
      : this.offset - 40 / this.w;
    return this;
  }

  display() {
    push();
    // console.log(backgroundColor);
    noStroke();
    let steps =
      this.maxLength * (1 - innerFlameRatio.inner - innerFlameRatio.outer);
    ellipseMode(CORNER);
    translate(this.centerX, this.centerY);
    rotate(this.angle);
    translate(-this.centerX, -this.centerY);

    for (let i = 0; i < steps; i++) {
      let width = map(
        i,
        0,
        steps,
        this.maxWidth,
        this.maxWidth * innerFlameRatio.w
      );
      let length = map(
        i,
        0,
        steps,
        this.maxLength,
        this.maxLength * (1 - innerFlameRatio.inner - innerFlameRatio.outer)
      );
      let offset = map(i, 0, steps, 0, this.maxLength * innerFlameRatio.inner);
      let color = lerpColor(this.edgeColor, this.innerColor, i / (steps - 1));
      fill(color);
      ellipse(
        this.centerX - width / 2,
        this.centerY + this.radius + offset + this.offset,
        width,
        length
      );
    }

    stroke(255, 128);
    strokeWeight(2);
    if (this.type == "main") {
      curve(
        this.centerX - 20,
        this.centerY + this.radius + this.maxLength + 40,
        this.centerX - 5,
        this.centerY + this.radius + this.maxLength + 30,
        this.centerX - 10,
        this.centerY + this.radius + this.maxLength + 60,
        this.centerX - 20,
        this.centerY + this.radius + this.maxLength + 60
      );
    }
    pop();

    return this;
  }

  render() {
    return this.display();
  }
}
