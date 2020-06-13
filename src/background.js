class Background {

    constructor(ctx, canvasSize, basePosition){
        this.ctx = ctx,
        this.canvasSize = canvasSize
        this.backgroundImage = new Image,
        this.groundImage = new Image(),
        this.backgroundVel = {
            groundVel : 5,
            backgroundvel: 2,
        }
        this.basePosition = basePosition


    }

    drawGround(){
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0, this.canvasSize.h - this.basePosition, this.canvasSize.w, this.basePosition)
        
    }


}