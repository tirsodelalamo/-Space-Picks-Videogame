class Player {

    constructor(ctx, canvasSize, groundHeight, refDimensions, keySPACE){
        this.ctx = ctx,
        this.canvasSize = canvasSize,
        this.groundHeight = groundHeight,
        this.refDimensions = refDimensions,

        this.keySPACE = keySPACE,
        this.isColliding = false,
        this.isJumping = false,

        this.playerPosition = { x : this.refDimensions*4 , y : this.canvasSize.h - this.groundHeight},
        this.velY = 0,
        this.jumpVel = -6,
        this.gravity = 0.31,
        this.currentBasePosition = canvasSize.h - groundHeight 

    }

    drawPlayer(){
        this.move()
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.playerPosition.x, this.playerPosition.y - this.refDimensions , this.refDimensions, this.refDimensions)
        this.setListeners()
    }

    setListeners(){
        document.addEventListener("keydown", e =>{
            if(e.keyCode === this.keySPACE){

                if ( this.currentBasePosition == this.playerPosition.y){
                    this.jump()
                    
                    // console.log(`X: ${this.playerPosition.x} -- y: ${this.playerPosition.y}`) // ----------------------------------
                }
            }
        })
    }

    move(){

        this.velY+=this.gravity

        if (!this.isJumping && (this.playerPosition.y >= this.canvasSize.h - this.groundHeight || this.isColliding)){
            this.velY = 0
        }
        else{
            this.playerPosition.y += this.velY
        }

    }

    jump(){

        this.isJumping = true
        this.velY = this.jumpVel
        this.playerPosition.y += this.velY
    }


}