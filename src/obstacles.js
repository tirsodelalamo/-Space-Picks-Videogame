class Obstacles {

    constructor (ctx, canvasSize, basePosition, refDimensions){

        this.ctx = ctx,
        this.canvasSize = canvasSize,
        this.basePosition = basePosition,
        this.refDimensions = refDimensions


    }

    // drawObstacles (){

    //     this.drawSquares()
    //     this.drawTriangles()
    //     // drawTriangles()
    //     // drawPicks()
    // }


}



class Square extends Obstacles {

    constructor(ctx, canvasSize, basePosition, refDimensions){

        super(ctx, canvasSize, basePosition, refDimensions)

    }

    drawSquares(){
 
        this.ctx.fillStyle = 'blue'
        arrSquareObstacles.forEach(elem => 

            this.ctx.fillRect(elem.posX, elem.posY, this.refDimensions, this.refDimensions)

            )
        
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
            this.ctx.lineTo(elem.posX + this.refDimensions/2, elem.posY + 21,65);
            this.ctx.lineTo(elem.posX + this.refDimensions, elem.posY + this.refDimensions);
        

            this.ctx.closePath();

        });

    }



}






// detectColision(obs) {
//     if(this.car.posX < obs.posX + obs.obsW && this.car.posX + this.car.carW > obs.posX && this.car.posY < obs.posY + obs.obsH && this.car.carH + this.car.posY > obs.posY) {
//       return true
//     } else {
//       return false
//     }
//   }