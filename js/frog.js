class Frog {
  constructor(ctx) {
    this._ctx = ctx

    this.w = 60
    this.h = 100

    this.h0 = this.h

    this.x = 400
    this.y = this._ctx.canvas.height - this.h
    this.vy = 0
    this.y0 = this.y

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

  // TODO: FIX
  move() {
    // console.log('moving')
    // this.y -= 10

    // if (this.y >= this.y0) {
    //   this.vy = 0
    //   this.y = this.y0
    // }
  }
}