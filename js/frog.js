class Frog {
  constructor(ctx) {
    this._ctx = ctx

    this.w = 60
    this.h = 100

    this.x = this._ctx.canvas.width / 2
    this.y0 = this._ctx.canvas.height - 80
    this.y = this._ctx.canvas.height - 80

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

  reset() {
    this.x = this._ctx.canvas.width / 2
    this.y = this._ctx.canvas.height - 80


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
      this.handleDomOnFrogWon()
    }
    if (this.y > this.y0) {
      console.log('DONT GO OUT OF THE ROAD!!!!')
      this.y = this.y0
    }
  }

  handleDomOnFrogWon() {
    const playerName = localStorage.getItem('PLAYER_NAME')
    document.getElementById("player-name").innerText = playerName
    document.getElementById("game").classList.remove('show')
    document.getElementById("game").classList.add('hide')
    document.getElementById("won").classList.remove('hide')
    document.getElementById("won").classList.remove('show')
  }
}