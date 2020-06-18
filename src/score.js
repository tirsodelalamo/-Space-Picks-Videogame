class Score {

    constructor(ctx, canvasSize, refDimensions, velX){
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.refDimensions = refDimensions
        this.velX = velX

        this.scorePosition = {
            x: 2*this.refDimensions,
            y: this.refDimensions
        }

        this.maxwidthScore = this.canvasSize.w - this.scorePosition.x - this.refDimensions,
        this.scoreSize = {
            w: 0,
            h: this.refDimensions/2,
        }

        this.percentage = 0
        this.onePercent = 68.25


        this.image = new Image()
        this.image.src = 'images/starCounter.png'
    }


    drawScore (){
        
        this.scoreSize.w += this.velX * ((((this.maxwidthScore)/ 100) / 68.25)) // 68.25 = 1%
        this.ctx.fillStyle = 'orange'
        this.ctx.fillRect(this.scorePosition.x, this.scorePosition.y, this.scoreSize.w, this.scoreSize.h)
        this.writePercentage()

    }

    writePercentage(){
        this.ctx.drawImage(this.image, 7 , 2, 2* this.refDimensions, 2* this.refDimensions)
        this.percentage = parseInt((this.scoreSize.w /this.maxwidthScore)*100)
        this.ctx.font = '30px Amatic SC' 
        this.ctx.fillStyle = 'black'
        this.ctx.fillText(this.percentage, this.refDimensions, 1.6*this.refDimensions)

    }


}