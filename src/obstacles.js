class Obstacles {

    constructor (ctx, canvasSize, basePosition, refDimensions, posX, posY){

        this.ctx = ctx,
        this.canvasSize = canvasSize,
        this.basePosition = basePosition,
        this.refDimensions = refDimensions,
        this.obstaclesPosition = {
            posX: posX,
            posY: posY
        }
    }



}



class Square extends Obstacles {

    constructor(ctx, canvasSize, basePosition, refDimensions, posX, posY){

        super(ctx, canvasSize, basePosition, refDimensions, posX, posY)

    }

    drawSquares(){
 
        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(this.obstaclesPosition.posX, this.obstaclesPosition.posY, this.refDimensions, this.refDimensions)
        
    }



}

class Triangle extends Obstacles {

    constructor (ctx, canvasSize, basePosition, refDimensions){

        super(ctx, canvasSize, basePosition, refDimensions)

    }

    drawTriangles(){

        arrTriangleObstacles.forEach(elem => {
            this.ctx.fillStyle = 'yellow' 

            this.ctx.beginPath();

            this.ctx.moveTo(elem.posX, elem.posY);
            this.ctx.lineTo(elem.posX + this.refDimensions, elem.posY);
            this.ctx.lineTo(elem.posX + this.refDimensions/2 , elem.posY - this.refDimensions);
            this.ctx.fill()

            this.ctx.closePath();

        });

    }


}



class Picks extends Obstacles {

    constructor(ctx, canvasSize, basePosition, refDimensions){

        super(ctx, canvasSize, basePosition, refDimensions)

    }

    drawPicks(){
 
        this.ctx.fillStyle = 'pink'
        arrPicksObstacles.forEach(elem => 

            this.ctx.fillRect(elem.posX, elem.posY, this.refDimensions * 2, this.refDimensions / 2)

            )
        
    }



}





// detectColision(obs) {
//     if(this.car.posX < obs.posX + obs.obsW && this.car.posX + this.car.carW > obs.posX && this.car.posY < obs.posY + obs.obsH && this.car.carH + this.car.posY > obs.posY) {
//       return true
//     } else {
//       return false
//     }
//   }