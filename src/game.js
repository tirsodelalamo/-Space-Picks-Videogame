

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
    velX: 2.5,
    fps: 60,

    music: new Audio('sound/levelSoundCutted.mp3'),


    background : undefined,
    player: undefined,
    obstacles: {
        squares: undefined,
        triangles: undefined,
        picks: undefined
    },



    init(id){
        this.canvasDom = document.getElementById(id)
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
        this.createBackground()
        this.createPlayer()
        this.createObstacles()
        this.start()
   
    },

    start() {
        this.music.play()
        setInterval(() =>{
            this.clearScreen()
            this.draw()

        },1000 / this.fps)
    },
    
    setDimensions(){
        
        this.canvasSize.w = window.innerWidth * 4
        this.canvasSize.h = window.innerHeight / 1.3
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
    },
    
    createBackground() {
        this.background = new Background(this.ctx, this.canvasSize, this.basePosition)

    },
    
    createPlayer(){
        
        this.player = new Player(this.ctx, this.canvasSize, this.basePosition, this.refDimensions, this.keySPACE, this.velX)

    },

    createObstacles(){

        this.obstacles.squares = new Square (this.ctx, this.canvasSize, this.basePosition, this.refDimensions)
        this.obstacles.triangles = new Triangle (this.ctx, this.canvasSize, this.basePosition, this.refDimensions)
        this.obstacles.picks = new Picks (this.ctx, this.canvasSize, this.basePosition, this.refDimensions)

    },

    draw(){
        this.player.drawPlayer()
        this.background.drawGround()
        this.obstacles.squares.drawSquares()
        this.obstacles.triangles.drawTriangles()
        this.obstacles.picks.drawPicks()
    },

    clearScreen() {
        this.ctx.clearRect(0 ,0 , this.canvasSize.w, this.canvasSize.h)
    }

    // playSound(){
    //     const audio = new Audio(src="/sound/levelSoundCutted.mp3")
    //     audio.loop = false
    //     audio.play()
    // }
}