const Game = {
    title: 'Geometry Dash',
    description: 'Imposible game!',
    authors: 'Tirso del Álamo y Elena Sánchez',
    license: null,
    version: '1',
    canvasDom: undefined,
    ctx: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    keySPACE: 32,
    basePosition: 50,
    refDimensions: 25,


    background : undefined,
    player: undefined,


    init(id){
        this.canvasDom = document.getElementById(id)
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
        this.createBackground()
        this.createPlayer()
    },
    
    setDimensions(){
        
        this.canvasSize.w = window.innerWidth * 4
        this.canvasSize.h = window.innerHeight / 1.3
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
    },
    
    createBackground() {
        this.background = new Background(this.ctx, this.canvasSize, this.basePosition)
        this.background.drawGround()
    },
    
    createPlayer(){
        this.player = new Player(this.ctx, this.canvasSize, this.basePosition, this.refDimensions, this.keySPACE)
        this.player.drawPlayer()
        this.player.setListeners()
    }
}