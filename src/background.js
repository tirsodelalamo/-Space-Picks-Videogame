class Background {

    constructor(ctx, canvasSize, groundHeight){

        this.ctx = ctx,
        this.canvasSize = canvasSize

        this.image = new Image(),
        this.image.src = 'images/hand-drawn-penguin-doodle-pattern_23-2148184077.jpg'

        // this.groundImage = new Image(),
        // this.groundImage.src = ''


        this.vel = {
            ground : 0,
            background: 0.3,
        },
        
        this.groundHeight = groundHeight,

        this.backgroundPosition = {
            x : 0,
            y : 0
        },

        this.groundPosition = {
            x : 0,
            y : 0
        }


    }

    drawBackground() {

        this.ctx.drawImage(this.image, this.backgroundPosition.x , this.backgroundPosition.y , this.canvasSize.w/12, this.canvasSize.h)
        this.ctx.drawImage(this.image, this.backgroundPosition.x + this.canvasSize.w/12,this.backgroundPosition.y, this.canvasSize.w/12 , this.canvasSize.h)
        this.moveBackground()

    }

    moveBackground() {
        if(this.backgroundPosition.x <= -this.canvasSize.w / 6){
            this.backgroundPosition.x = 0;
        }
        this.backgroundPosition.x -= this.vel.background
    }

    drawGround(){


        this.ctx.drawImage(this.image, this.groundPosition.x , this.canvasSize.h - this.groundHeight , this.canvasSize.w/12, this.groundHeight )
        //this.ctx.drawImage(this.image, this.groundPosition.x + this.canvasSize.h,  this.canvasSize.w/12 , this.groundHeight)
        // this.ctx.fillStyle = 'black'
        // this.ctx.fillRect(0, this.canvasSize.h - this.groundHeight, this.canvasSize.w, this.groundHeight)
        
    }

    // moveGround(){
    //     if(this.groundPosition.x <= -this.canvasSize.w / 6){
    //         this.groundPosition.x = 0;
    //     }
    //     this.groundPosition.x -= this.vel.ground
    // }


}