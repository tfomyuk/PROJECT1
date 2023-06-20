export function Player(map) {
  this.sprite = document.createElement("div")
  this.position = { hori: 400, vert: 400 }
  this.sprite.setAttribute("id", "player")
  this.sprite.setAttribute("class", "front")
  map.appendChild(this.sprite)
  this.direction = { x: 0, y: 0 }
  this.stepx = 20
  this.stepy = 20
  this.width = 40
  this.height = 40
  this.itsalive = true
  this.isInmortal = false
}

Player.prototype.update = function () {
  this.movex()
  this.movey()
}

Player.prototype.draw = function () {
  this.sprite.style.left = this.position.hori + "px"
  this.sprite.style.top = this.position.vert + "px"
}

Player.prototype.movex = function () {

  if (this.position.hori + this.stepx * this.direction.x <= 800 - this.width && this.position.hori + this.stepx * this.direction.x >= 0) {
    this.position.hori += this.stepx * this.direction.x
  } 

  if (this.direction.x == 1 ){
    this.cleanMovement()
    this.sprite.classList.add("right")
  } else if (this.direction.x == -1){
    this.cleanMovement()
    this.sprite.classList.add("left")
    }
  }


Player.prototype.movey = function () {
  if (this.position.vert <= 780 - this.stepy * this.direction.y - this.height && this.position.vert + this.stepy * this.direction.y >= 0) {
    this.position.vert += this.stepy * this.direction.y
    }

    if (this.direction.y == 1 ){
      this.cleanMovement()
      this.sprite.classList.add("front")
    } else if (this.direction.y == -1){
      this.cleanMovement()
      this.sprite.classList.add("back")
      }
  }

  Player.prototype.cleanMovement = function () {
    this.sprite.classList.remove("left", "front", "back","right")
  }






