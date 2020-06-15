class Background {

    constructor(ctx, canvasSize, groundHeight){

        this.ctx = ctx,
        this.canvasSize = canvasSize

        this.image = new Image(),
        this.imagesArr = ['images/hand-drawn-penguin-doodle-pattern_23-2148184077.jpg', 'images/85418.jpg','images/4581.jpg',  'images/OMEGGK0.jpg']
        this.image.src = this.imagesArr[parseInt(Math.random()*this.imagesArr.length)]

        // this.groundImage = new Image(),
        // this.groundImage.src = ''


        this.vel = {
            ground : 2,
            background: 0.15,
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

        this.moveBackground()

        this.ctx.drawImage(this.image, this.backgroundPosition.x , this.backgroundPosition.y , this.canvasSize.w/1.5, this.canvasSize.h)
        this.ctx.drawImage(this.image, this.backgroundPosition.x + this.canvasSize.w/1.5, this.backgroundPosition.y, this.canvasSize.w/1.5 , this.canvasSize.h)
        this.ctx.drawImage(this.image, this.backgroundPosition.x + this.canvasSize.w/1.5+ this.canvasSize.w/1.5,this.backgroundPosition.y, this.canvasSize.w/1.5 , this.canvasSize.h)


    }

    moveBackground() {
        if(this.backgroundPosition.x <= -this.canvasSize.w / 1.5){
            this.backgroundPosition.x = 0;
        }
        this.backgroundPosition.x -= this.vel.background
    }

    drawGround(){

        this.moveGround()


        this.ctx.drawImage(this.image, this.groundPosition.x ,  this.canvasSize.h - this.groundHeight , this.canvasSize.w/1.5, this.canvasSize.h)
        this.ctx.drawImage(this.image, this.groundPosition.x + this.canvasSize.w/1.5, this.canvasSize.h - this.groundHeight ,  this.canvasSize.w/1.5 , this.canvasSize.h)
        this.ctx.drawImage(this.image, this.groundPosition.x + this.canvasSize.w /1.5+ this.canvasSize.w/1.5, this.canvasSize.h - this.groundHeight , this.canvasSize.w/1.5 ,   this.canvasSize.h)

        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0, this.canvasSize.h - this.groundHeight, this.canvasSize.w, 2)
        
    }

    moveGround(){
        if(this.groundPosition.x <= -this.canvasSize.w ){
            this.groundPosition.x = 0;
        }
        this.groundPosition.x -= this.vel.ground
    }


}