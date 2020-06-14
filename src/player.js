class Player {

    constructor(ctx, canvasSize, basePosition, refDimensions, keySPACE, velX){
        this.ctx = ctx,
        this.canvasSize = canvasSize,
        this.basePosition = basePosition,
        this.refDimensions = refDimensions,
        this.velX = velX
        this.keySPACE = keySPACE,
        this.isColliding = false,

        this.playerPosition = { x : this.refDimensions*4 , y : this.canvasSize.h - this.basePosition},
        this.velY = 0,
        this.jumpVel = -6,
        this.gravity = 0.31,
        this.absolutePlayerPosition = canvasSize.h - basePosition 

    }

    drawPlayer(){
        this.move()
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.playerPosition.x, this.playerPosition.y - this.refDimensions , this.refDimensions, this.refDimensions)
        this.setListeners()
    }

    setListeners(){
        document.addEventListener("keydown", e =>{

            if(e.keyCode === this.keySPACE){
                if ( this.absolutePlayerPosition == this.playerPosition.y){
                this.jump()
                // console.log(`X: ${this.playerPosition.x} -- y: ${this.playerPosition.y}`) // ----------------------------------
                }
            }
        })
    }

    move(){

        this.playerPosition.x += this.velX
        this.velY+=this.gravity
        if (this.playerPosition.y >= this.canvasSize.h - this.basePosition){
            this.absolutePlayerPosition = this.canvasSize.h - this.basePosition
            this.playerPosition.y = this.absolutePlayerPosition
        }
        if (this.playerPosition.y >= this.canvasSize.h - this.basePosition || this.isColliding){
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