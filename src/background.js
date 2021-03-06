class Background {

    constructor(ctx, canvasSize, groundHeight){

        this.ctx = ctx,
        this.canvasSize = canvasSize

        this.image = new Image(),
        this.imagesArr = ['images/122-seamless-space.jpg', 'images/penguin.jpg', 'images/spaceLight.jpg']
        this.image.src = this.imagesArr[parseInt(Math.random()*this.imagesArr.length)]



        this.vel = {
            ground : 2,
            background: 0.4,
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

    //-----------------------------------Background Methods-----------------------------

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

    //-----------------------------------Ground Methods-----------------------------

    drawGround(){

        this.moveGround()


        this.ctx.drawImage(this.image, this.groundPosition.x ,  this.canvasSize.h - this.groundHeight , this.canvasSize.w, this.canvasSize.h)
        this.ctx.drawImage(this.image, this.groundPosition.x + this.canvasSize.w, this.canvasSize.h - this.groundHeight ,  this.canvasSize.w, this.canvasSize.h)
        this.ctx.drawImage(this.image, this.groundPosition.x + this.canvasSize.w + this.canvasSize.w, this.canvasSize.h - this.groundHeight , this.canvasSize.w ,   this.canvasSize.h)

        this.ctx.fillStyle = '#DCD0EA'
        this.ctx.fillRect(0, this.canvasSize.h - this.groundHeight, this.canvasSize.w, 2)
        
    }

    moveGround(){
        if(this.groundPosition.x <= -this.canvasSize.w ){
            this.groundPosition.x = 0;
        }
        this.groundPosition.x -= this.vel.ground
    }


}