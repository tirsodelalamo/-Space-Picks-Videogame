class Background {

    constructor(ctx, canvasSize, basePosition){

        this.ctx = ctx,
        this.canvasSize = canvasSize

        this.backgroundImage = new Image(),
        this.backgroundImage.src = 'images/seamless-2033661_1280.jpg'

        // this.groundImage = new Image(),
        // this.groundImage.src = ''


        this.vel = {
            ground : 5,
            background: 0.3,
        },
        
        this.basePosition = basePosition,

        this.position = {
            x : 0,
            y : 0
        }


    }

    drawBackground() {

        this.ctx.drawImage(this.backgroundImage, this.position.x , this.position.y , this.canvasSize.w/12, this.canvasSize.h)
        this.ctx.drawImage(this.backgroundImage, this.position.x + this.canvasSize.w/12,this.position.y, this.canvasSize.w/12 , this.canvasSize.h)
        this.moveBackground()

    }

    moveBackground() {
        if(this.position.x <= -this.canvasSize.w / 6){
            this.position.x = 0;
        }
        this.position.x -= this.vel.background
    }

    drawGround(){
        
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0, this.canvasSize.h - this.basePosition, this.canvasSize.w, this.basePosition)
        
    }


}