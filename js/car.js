class Car {
  constructor(ctx, img, imgSrc, width, height, positionX, positionY, vx) {
    this._ctx = ctx

    this.w = width
    this.h = height
    this.x0 = positionX
    this.x = positionX
    this.y = this._ctx.canvas.height - positionY

    this._img = img
    this._img.src = imgSrc
    this._ticks = 0
    this.vx = vx
  }

  draw() {
    this._ctx.drawImage(
      this._img,
      this.x,
      this.y,
      this.w,
      this.h
    )
  }

  move() {
    this.x += this.vx
    this.goBack()
  }

  goBack() {
    // IMPROVE, TOO BASIC
    if (this.x !== this.xo) {
      if (this.x <= 50 || this.x >= 1000) {
        this.x = this.x0
      }
    }
  }
}