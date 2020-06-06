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

  move() {
    if (this.x === -30) {
      console.log('DONT GO OUT OF THE ROAD!!!!')
      this.x = -20
    }
    if (this.x === 770) {
      console.log('DONT GO OUT OF THE ROAD')
      this.x = 760
    }
    if (this.y === -30) {
      console.log('WOON')
      this.y = 400
    }
    if (this.y === 410) {
      console.log('DONT GO OUT OF THE ROAD!!!!')
      this.y = 400
    }
  }
}