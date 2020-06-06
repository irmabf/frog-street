class Game {

  constructor(ctx) {
    this._ctx = ctx
    this._intervalId = null

    this._bg = new Background(this._ctx)
    this._car = new Car(this._ctx)
    this._frog = new Frog(this._ctx)
    this._tick = 0
  }

  start() {
    this._intervalId = setInterval(() => {
      this._clear()
      this._draw()
      this._move()
    }, 1000 / 60)
  }

  _draw() {
    if (this._tick++ > 10000) {
      this._tick = 0
    }

    this._bg.draw()
    this._car.draw()
    this._car.move()
    this._frog.draw()
  }
  _clear() {
    this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height)
  }

  // fix frog out of canvas movements
  _move() {
    this._frog.move()
  }
}