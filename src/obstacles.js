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

         this.obstacleDimensions = { // PROPIEDADES PARA COLISIONES PROPIOS DE LA CLASE
             w: this.refDimensions,
             h: this.refDimensions
         }
         this.imageSquares = new Image(),
         this.imageSquares.src = 'images/square.png'

    }

    drawSquares(){
        this.moveSquare()

        this.ctx.beginPath()
        this.ctx.lineWidth = "1"
        this.ctx.strokeStyle = "white"
        this.ctx.rect(this.obstaclesPosition.posX, this.obstaclesPosition.posY - this.refDimensions, this.refDimensions, this.refDimensions)
        this.ctx.stroke() //FIN BORDE CUADRADOS

        this.ctx.fillStyle = '#C4D4F3'
        this.ctx.lineWidth = 1
        this.ctx.strokeStyle = 'white'
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

        this.obstacleDimensions = { // PROPIEDADES PARA COLISIONES PROPIOS DE LA CLASE
            w: 8,
            h: 17
        }



    }

    drawTriangles(){

        this.moveTriangle()

            this.ctx.fillStyle = 'grey' 


            this.ctx.beginPath();
            this.ctx.moveTo(this.obstaclesPosition.posX, this.obstaclesPosition.posY);
            this.ctx.lineTo(this.obstaclesPosition.posX + this.refDimensions, this.obstaclesPosition.posY);
            this.ctx.lineTo(this.obstaclesPosition.posX + this.refDimensions/2 , this.obstaclesPosition.posY - this.refDimensions);
            this.ctx.fill()

            this.ctx.closePath();

            this.ctx.lineWidth = 1
            this.ctx.strokeStyle = 'white '
            this.ctx.stroke()

          
    }

    moveTriangle(){
        this.obstaclesPosition.posX -= this.velX
    }

}



class Picks extends Obstacles {

    constructor(ctx, canvasSize, groundHeight, refDimensions, posX, posY, velX){

        super(ctx, canvasSize, groundHeight, refDimensions, posX, posY, velX)

        this.obstacleDimensions = { // PROPIEDADES PARA COLISIONES PROPIOS DE LA CLASE
            w: this.refDimensions * 2,
            h: this.refDimensions / 2
        }
        this.image = new Image(),
        this.image.src = 'images/NicePng_spike-spiegel-png_2287658.png'
    }

    drawPicks(){
        this.movePicks()

        this.ctx.drawImage(this.image, this.obstaclesPosition.posX, this.obstaclesPosition.posY, this.refDimensions * 2, this.refDimensions / 2 - this.refDimensions)

        
    }

    movePicks () {
        this.obstaclesPosition.posX -= this.velX
    }

}


