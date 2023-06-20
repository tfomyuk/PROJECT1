export function Trap (side, x, y){
    this.domTrap = document.createElement("div")
    this.side = side
    this.x = x
    this.y = y 
}


Trap.prototype.draw = function(map){
    this.domTrap.style.left = this.x + "px"
    this.domTrap.style.top = this.y + "px"
    map.appendChild(this.domTrap)
}

