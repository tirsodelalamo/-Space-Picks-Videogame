class Obstacles {

    constructor (ctx, canvasSize, groundHeight, refDimensions, posX, posY){

        this.ctx = ctx,
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

    constructor(ctx, canvasSize, groundHeight, refDimensions, posX, posY){

        super(ctx, canvasSize, groundHeight, refDimensions, posX, posY)

    }

    drawSquares(){
 
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(this.obstaclesPosition.posX, this.obstaclesPosition.posY - this.refDimensions, this.refDimensions, this.refDimensions)
        
    }



}

class Triangle extends Obstacles {

    constructor (ctx, canvasSize, groundHeight, refDimensions, posX, posY){

        super(ctx, canvasSize, groundHeight, refDimensions, posX, posY)

    }

    drawTriangles(){

            this.ctx.fillStyle = 'grey' 

            this.ctx.beginPath();
            this.ctx.moveTo(this.obstaclesPosition.posX, this.obstaclesPosition.posY);
            this.ctx.lineTo(this.obstaclesPosition.posX + this.refDimensions, this.obstaclesPosition.posY);
            this.ctx.lineTo(this.obstaclesPosition.posX + this.refDimensions/2 , this.obstaclesPosition.posY - this.refDimensions);
            this.ctx.fill()

            this.ctx.closePath();

    }


}



class Picks extends Obstacles {

    constructor(ctx, canvasSize, groundHeight, refDimensions, posX, posY){

        super(ctx, canvasSize, groundHeight, refDimensions, posX, posY)

    }

    drawPicks(){
 
        this.ctx.fillStyle = 'blue'

            this.ctx.fillRect(this.obstaclesPosition.posX, this.obstaclesPosition.posY, this.refDimensions * 2, this.refDimensions / 2 - this.refDimensions)

        
    }



}





// detectColision(obs) {
//     if(this.car.posX < obs.posX + obs.obsW && this.car.posX + this.car.carW > obs.posX && this.car.posY < obs.posY + obs.obsH && this.car.carH + this.car.posY > obs.posY) {
//       return true
//     } else {
//       return false
//     }
//   }