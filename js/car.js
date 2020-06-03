class Car {
  constructor(ctx) {
    this._ctx = ctx

    this.w = 150
    this.h = 75

    this.x = this._ctx.canvas.width - this.w
    this.y = this._ctx.canvas.height - this.h - 100

    this._img = new Image()
    this._img.src = '../img/car.png'

    this._ticks = 0
    this.vx = -3
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

  isVisible() {
    return (
      this.x < this.ctx.canvas.width * 2 &&
      this.x > 0 - this.ctx.canvas.width
    )
  }

  goBack() {
    // IMPROVE, TOO BASIC
    if (this.x === 50) {
      this.x = this._ctx.canvas.width - this.w
    }
  }
}