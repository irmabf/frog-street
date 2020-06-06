class Movements {
  constructor(gameElement) {
    this._el = gameElement
  }

  init() {
    document.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case TOP_KEY:
          console.log('up')
          this._el.vx = 5
          break;
        case DOWN_KEY:
          console.log('down')
          this._el.vx = -5
          break;
      }
    })

    document.addEventListener('keyup', (event) => {
      switch (event.keyCode) {
        case TOP_KEY:
          this._el.vx = 0
          break;
        case DOWN_KEY:
          this._el.vx = 0
          break;
      }
    })
  }
}