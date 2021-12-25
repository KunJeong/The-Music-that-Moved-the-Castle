let innerFlameRatio = { w: 0.4, c: 0.8, inner: 0.05, outer: 0.4 };

class Flame {
  constructor(center, innerColor, maxLength, type, radius, angle, w) {
    this.reset(center, innerColor, maxLength, type, radius, angle, w);
  }

  reset(center, innerColor, maxLength, type, radius, angle, w) {
    // console.log("flame");
    // console.log(radius);
    //constants
    this.centerX = center.centerX;
    this.centerY = center.centerY;
    this.innerColor = innerColor;
    this.maxWidth = 18 + random(-2, 2);
    this.maxLength = maxLength;
    this.type = type;
    this.radius = radius;
    this.w = w;
    this.edgeColor = lerpColor(
      this.innerColor,
      backgroundColor,
      innerFlameRatio.c
    );
    // this.initialAngle = angle + random(-PI / 40, PI / 40);
    //animated values
    this.angle = angle;
    // console.log(angle);

    // this.angularDisplacement = angle + random(-PI / 40, PI / 40);

    this.offset = 0;
    // this.offset = random(3, 10);
    // this.outward = true;
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
    // console.log("render");
    push();
    // console.log(backgroundColor);
    noStroke();
    let steps =
      this.maxLength * (1 - innerFlameRatio.inner - innerFlameRatio.outer);
    ellipseMode(CORNER);
    translate(this.centerX, this.centerY);
    // console.log(this.angle);
    rotate(this.angle);
    translate(-this.centerX, -this.centerY);
    blendMode(BLEND);

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
      // console.log(width, length, "offset", offset, color);
      fill(color);
      ellipse(
        this.centerX - width / 2,
        this.centerY + this.radius + offset,
        width,
        length
      );
    }

    stroke(255, 128);
    strokeWeight(2);
    this.drawOrnaments();
    pop();

    return this;
  }

  drawOrnaments() {
    if (this.type == "rhythm") {
      curve(
        this.centerX - 10,
        this.centerY + this.radius + this.maxLength + 30,
        this.centerX - 5,
        this.centerY + this.radius + this.maxLength + 20,
        this.centerX - 10,
        this.centerY + this.radius + this.maxLength + 50,
        this.centerX - 30,
        this.centerY + this.radius + this.maxLength + 50
      );
      // curve(
      //   this.centerX - 20,
      //   this.centerY + this.radius + this.maxLength + 40,
      //   this.centerX - 15,
      //   this.centerY + this.radius + this.maxLength + 45,
      //   this.centerX - 30,
      //   this.centerY + this.radius + this.maxLength + 70,
      //   this.centerX - 40,
      //   this.centerY + this.radius + this.maxLength + 60
      // );
    } else if (this.type == "atmosphere") {
      let offset1 = random(10, 40);
      curve(
        this.centerX - 20,
        this.centerY + this.radius + this.maxLength + 30,
        this.centerX - 5,
        this.centerY + this.radius + this.maxLength + 20,
        this.centerX - 10,
        this.centerY + this.radius + this.maxLength + 50,
        this.centerX - 20,
        this.centerY + this.radius + this.maxLength + 50
      );
      curve(
        this.centerX - 20,
        this.centerY + this.radius + this.maxLength + 30,
        this.centerX - 15,
        this.centerY + this.radius + this.maxLength + 35,
        this.centerX - 30,
        this.centerY + this.radius + this.maxLength + 60,
        this.centerX - 40,
        this.centerY + this.radius + this.maxLength + 50
      );
    } else if (this.type == "main") {
      ellipseMode(CENTER);
      circle(
        this.centerX,
        this.centerY + this.radius + this.maxLength + random(10, 20),
        random(8, 15)
      );
    } else if (this.type == "ornaments") {
      ellipseMode(CENTER);
      circle(
        this.centerX - 6,
        this.centerY + this.radius + this.maxLength + random(5, 15),
        random(3, 8)
      );
      circle(
        this.centerX + 6,
        this.centerY + this.radius + this.maxLength + random(5, 15),
        random(3, 8)
      );
    }
  }
  render() {
    return this.display();
  }
}
