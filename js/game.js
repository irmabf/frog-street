class Game {

  constructor(ctx) {
    this._ctx = ctx
    this._intervalId = null

    this._bg = new Background(this._ctx)

    this._frog = new Frog(this._ctx)
    this._tick = 0

    this.cars = []
  }

  start() {
    this._addCar()

    this._intervalId = setInterval(() => {
      this._clear()

      this._draw()
      this._move()
      this.checkCollisions()
    }, 1000 / 60)
  }

  _draw() {
    if (this._tick++ > 10000) {
      this._tick = 0
    }

    this._bg.draw()
    this.cars.forEach(car => car.draw())
    this.cars.forEach(car => car.move())

    this._frog.draw()
  }
  _clear() {
    this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height)
  }

  // fix frog out of canvas movements
  _move() {
    this._frog.move()
  }

  _resetFrog() {
    this._frog.reset()
  }

  _addCar() {
    const blueCar = new Car(this._ctx, new Image(), './img/car.png', 150, 75, this._ctx.canvas.width - 150, 200, -3)
    const yellowCar = new Car(this._ctx, new Image(), './img/yellow-car.png', 150, 75, 51, 400, 3)
    this.cars.push(blueCar, yellowCar)
  }

  checkCollisions() {
    this.cars.forEach(car => {
      if (this._frog.y - car.y <= 40 && car.y - this._frog.y <= 60) {
        if (this._frog.x - car.x >= -30 && this._frog.x - car.x <= 131) {

          this.updateDom()
          setTimeout(this.resetDom, 3000)
          this._resetFrog()
          // document.getElementById("game").classList.add('hide')
        }
      }
    })
  }

  updateDom() {
    document.getElementById("bloody-title").classList.add('show')
    document.getElementById("bloody-title").classList.remove('hide')
    document.getElementById("title").classList.add('hide')
    document.getElementById("title").classList.remove('show')
  }

  resetDom() {
    document.getElementById("bloody-title").classList.add('hide')
    document.getElementById("bloody-title").classList.remove('show')
    document.getElementById("title").classList.add('show')
    document.getElementById("title").classList.remove('hide')
  }
}