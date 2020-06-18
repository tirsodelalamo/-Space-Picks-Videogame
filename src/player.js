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
        this.currentBasePosition = canvasSize.h - groundHeight,

        this.imageRandom = new Image(),
        this.imagesPlayer = ['images/playerImages/batmanPurple.png', 'images/playerImages/creeperGreen.png', 'images/playerImages/pervertFacePink.png', 'images/playerImages/skullGrey.png', 'images/playerImages/spidermanRed.png', 'images/playerImages/tongueFaceYellow.png'],
        this.imageRandom.src = this.imagesPlayer[parseInt(Math.random()*this.imagesPlayer.length)]
    }

    drawPlayer(){
        this.move()
        this.ctx.drawImage(this.imageRandom, this.playerPosition.x, this.playerPosition.y - this.refDimensions , this.refDimensions, this.refDimensions)
        this.setListeners() 
    }


    setListeners(){
        document.addEventListener("keydown", e =>{
            if(e.keyCode === this.keySPACE){

                if ( this.currentBasePosition == this.playerPosition.y){
                    this.jump()
                    
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