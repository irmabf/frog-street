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
}