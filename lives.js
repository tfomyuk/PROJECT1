export function Lives(map) {
    this.sprite = document.createElement("div")
    this.sprite.setAttribute("class", "lives")
    this.position = { hori: 0, vert: 0 }
    this.damage = false
    this.numberLive = 3
    map.appendChild(this.sprite)
}

Lives.prototype.draw = function () {
        this.sprite.style.left = this.position.hori + "px"
        this.sprite.style.top = this.position.vert + "px"
}