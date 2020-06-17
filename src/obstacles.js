class Obstacles {

    constructor (ctx, canvasSize, groundHeight, refDimensions, posX, posY, velX){

        this.ctx = ctx,
        this.velX = velX,
        this.canvasSize = canvasSize,
        this.groundHeight = groundHeight,
        this.refDimensions = refDimensions,
        this.obstaclesPosition = {
            posX: posX,
            posY: posY
        }
    }


}



class Square extends Obstacles {

    constructor(ctx, canvasSize, groundHeight, refDimensions, posX, posY, velX){

        super(ctx, canvasSize, groundHeight, refDimensions, posX, posY, velX)

    }

    drawSquares(){
        this.moveSquare()

        this.ctx.beginPath()
        this.ctx.lineWidth = "1"
        this.ctx.strokeStyle = "black"
        this.ctx.rect(this.obstaclesPosition.posX, this.obstaclesPosition.posY - this.refDimensions, this.refDimensions, this.refDimensions)
        this.ctx.stroke() //FIN BORDE CUADRADOS

        this.ctx.fillStyle = '#666666'
        this.ctx.lineWidth = 1
        this.ctx.strokeStyle = 'black'
        this.ctx.stroke()
        this.ctx.fillRect(this.obstaclesPosition.posX, this.obstaclesPosition.posY - this.refDimensions, this.refDimensions, this.refDimensions)
        
    }

    moveSquare(){
        this.obstaclesPosition.posX -= this.velX
    }



}

class Triangle extends Obstacles {

    constructor (ctx, canvasSize, groundHeight, refDimensions, posX, posY, velX){

        super(ctx, canvasSize, groundHeight, refDimensions, posX, posY, velX)

    }

    drawTriangles(){

        this.moveTriangle()

            this.ctx.fillStyle = '#666666' 


            this.ctx.beginPath();
            this.ctx.moveTo(this.obstaclesPosition.posX, this.obstaclesPosition.posY);
            this.ctx.lineTo(this.obstaclesPosition.posX + this.refDimensions, this.obstaclesPosition.posY);
            this.ctx.lineTo(this.obstaclesPosition.posX + this.refDimensions/2 , this.obstaclesPosition.posY - this.refDimensions);
            this.ctx.fill()

            this.ctx.closePath();

            this.ctx.lineWidth = 1
            this.ctx.strokeStyle = 'black'
            this.ctx.stroke()


    }

    moveTriangle(){
        this.obstaclesPosition.posX -= this.velX
    }


}



class Picks extends Obstacles {

    constructor(ctx, canvasSize, groundHeight, refDimensions, posX, posY, velX){

        super(ctx, canvasSize, groundHeight, refDimensions, posX, posY, velX)

    }

    drawPicks(){
        this.movePicks()
 
        this.ctx.fillStyle = '#00c5f0'

            this.ctx.fillRect(this.obstaclesPosition.posX, this.obstaclesPosition.posY, this.refDimensions * 2, this.refDimensions / 2 - this.refDimensions)

        
    }

    movePicks () {
        this.obstaclesPosition.posX -= this.velX
    }



}


