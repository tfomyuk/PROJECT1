
export function Arrow (side, x, y){
    this.domArrow = document.createElement("div")
    this.side = side
    this.x = x
    this.y = y 
    this.step = Math.random() * 10 + 10
    this.domArrow.setAttribute("class", "snowball")
    map.appendChild(this.domArrow)
}

Arrow.prototype.candyFly = function(){

    if (this.side == "top"){
        this.y += this.step
        
    } else if (this.side == "down"){ 
        this.y -= this.step
    } else if (this.side == "right"){
        this.x -= this.step
    }else if (this.side == "left"){
        this.x += this.step 
    }
    
}

Arrow.prototype.draw = function(map){
    if (this.y >= 800 || this.y <= 0 || this.x <= 0 || this.x >= 800) {
        this.domArrow.style.display = "none"
    }

    this.domArrow.style.left = this.x + "px"
    this.domArrow.style.top = this.y + "px"
}
