class Frog {
  constructor(ctx) {
    this._ctx = ctx

    this.w = 60
    this.h = 100

    this.x = 400
    this.y = this._ctx.canvas.height - this.h

    this._img = new Image()
    this._img.src = './img/frog.png'
    new Movements(this).init()
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