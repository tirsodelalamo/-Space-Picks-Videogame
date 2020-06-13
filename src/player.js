class Player {

    constructor(ctx, canvasSize, basePosition, refDimensions, keySPACE, velX){
        this.ctx = ctx,
        this.canvasSize = canvasSize,
        this.basePosition = basePosition,
        this.refDimensions = refDimensions,
        this.velX = velX
        this.keySPACE = keySPACE,

        this.playerPosition = { x : this.refDimensions*4 , y : this.canvasSize.h - this.basePosition - this.refDimensions},
        this.velY = 0,
        this.jumpVel = -6,
        this.gravity = 0.3

    }

    drawPlayer(){
        this.move()
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.playerPosition.x, this.playerPosition.y, this.refDimensions, this.refDimensions)
        this.setListeners()
    }

    setListeners(){
    document.addEventListener("keydown", e =>{
        // if (e.keyCode === this.keySPACE){
        //     jump()
        // }
        if(e.keyCode === this.keySPACE){
            if (this.canvasSize.h - this.basePosition - this.refDimensions == this.playerPosition.y){
            this.jump()
            }
        }
    })
    }

    move(){

        this.playerPosition.x += this.velX
        this.velY+=this.gravity
        if (this.playerPosition.y >= this.canvasSize.h - this.basePosition - this.refDimensions){
            this.velY = 0

        }
        else{
            this.playerPosition.y += this.velY
        }

    }

    jump(){

        this.velY = this.jumpVel
        this.playerPosition.y += this.velY

    }


}