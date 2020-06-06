class Movements {
  constructor(gameElement) {
    this._el = gameElement
  }

  init() {
    document.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case TOP_KEY:
          this._el.y -= 10
          break;
        case DOWN_KEY:
          this._el.y += 10
          break;
      }
    })
  }
}