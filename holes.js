export function Hole(){
    this.sprite = document.createElement("div")
    this.sprite.setAttribute("class", "holes")
    this.position = {hori: undefined, vert: undefined}
}

Hole.prototype.draw = function(map){
    this.sprite.style.left = this.position.hori + "px"
    this.sprite.style.top = this.position.vert + "px"
    map.appendChild(this.sprite)
}