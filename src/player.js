class Player {

    constructor(ctx, canvasSize, basePosition, refDimensions, keySPACE){
        this.ctx = ctx,
        this.canvasSize = canvasSize,
        this.basePosition = basePosition,
        this.refDimensions = refDimensions,
        this.keySPACE = keySPACE

    }

    drawPlayer(){
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.refDimensions*4, this.canvasSize.h - this.basePosition - this.refDimensions, this.refDimensions, this.refDimensions)
    }

    setListeners(){
    document.addEventListener("keydown", e =>{
        if (e.keyCode === this.keySPACE){
            console.log("Mira como salto")
        }
    })   
    }


}