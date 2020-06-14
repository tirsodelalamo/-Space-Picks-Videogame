
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
    velX: 2,
    fps: 60,

    music: new Audio('sound/levelSoundCutted.mp3'),


    background : undefined,
    player: undefined,
    obstacles: {
        squares: [],
        triangles: [],
        picks: []
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
        this.music.volume = 0.1
        setInterval(() =>{
            this.clearScreen()
            this.draw()
            this.detectColisions()

        },1000 / this.fps)
    },
    
    setDimensions(){
        
        this.canvasSize.w = window.innerWidth * 4
        this.canvasSize.h = 300
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
    },
    
    createBackground() {
        this.background = new Background(this.ctx, this.canvasSize, this.basePosition)

    },
    
    createPlayer(){
        
        this.player = new Player(this.ctx, this.canvasSize, this.basePosition, this.refDimensions, this.keySPACE, this.velX)

       console.log(`pos x ${this.player.playerPosition.x} pos y ${this.player.playerPosition.y}`)

    },

    createObstacles(){

        arrSquareObstacles.forEach(elem => {
            this.obstacles.squares.push(new Square (this.ctx, this.canvasSize, this.basePosition, this.refDimensions, elem.posX , elem.posY))
        })
        arrTriangleObstacles.forEach(elem => {
            this.obstacles.triangles.push(new Triangle (this.ctx, this.canvasSize, this.basePosition, this.refDimensions, elem.posX, elem.posY))
        })
        arrPicksObstacles.forEach(elem => {
            this.obstacles.picks.push(new Picks (this.ctx, this.canvasSize, this.basePosition, this.refDimensions, elem.posX, elem.posY))
        })

    },

    draw(){

        this.background.drawBackground()
        this.background.drawGround()
        this.player.drawPlayer()
        this.obstacles.squares.forEach(elem => elem.drawSquares())
        this.obstacles.triangles.forEach(elem => elem.drawTriangles()) 
        this.obstacles.picks.forEach(elem => elem.drawPicks()) 

    },

    clearScreen() {
        this.ctx.clearRect(0 ,0 , this.canvasSize.w, this.canvasSize.h)
    },

    playSound(){
        const audio = new Audio(src="/sound/levelSoundCutted.mp3")
        audio.loop = false
        audio.play()
    },

    detectColisions(){
        //VAMOS A COMPROBAR SI ALGUN ELEMENTO ESTA COLISIONANDO
        //PARA ELLO VAMOS A USAR EN VEZ DE FOREACH, SOME
        //NUESTRO detectModifyColisionSquares DEVOLVERA AHORA TRUE/FALSE
        //SI ALGUNO DEVUELVE, SOME DEVOLVERA TRUE
        if(this.isGroundColliding()){
            this.player.absolutePlayerPosition = this.canvasSize.h - this.basePosition
            this.player.playerPosition.y = this.player.absolutePlayerPosition
            this.player.isJumping = false
        }

        if(this.obstacles.squares.some(square => this.isSquareColliding(square))){
            this.player.isColliding = true
            this.player.isJumping = false
        } else {
            this.player.isColliding = false
        }
        // this.detectColisionSquares()
        // this.detectModifyColisionSquares()
    },

    // detectDestroyColisionSquares(square) {

    //     if(this.player.posX < obs.posX + obs.obsW && 
    //         this.car.posX + this.car.carW > obs.posX 
    //         && this.car.posY < obs.posY + obs.obsH 
    //         && this.car.carH + this.car.posY > obs.posY) {
    //       return true
    //     } 
    //     else {
    //       return false
    //     }
    //   }

    isGroundColliding(){
        if (this.player.playerPosition.y >= this.canvasSize.h - this.basePosition){
            return true
        }
    },

    isSquareColliding(square) {
       //console.log(`square ${ square.obstaclesPosition.posY} --- player ${this.player.playerPosition.y}`)
        if(this.player.playerPosition.x >= square.obstaclesPosition.posX &&
            this.player.playerPosition.x <= square.obstaclesPosition.posX + this.refDimensions){   
            // console.log(`pos y player  ${this.player.playerPosition.y} pos y ${square.obstaclesPosition.posY - this.refDimensions}`)
        }
       // ESTOY EN EL EJE Y CORRECTO
        if (this.player.playerPosition.y <= square.obstaclesPosition.posY - this.refDimensions + 7 &&
            this.player.playerPosition.y >= square.obstaclesPosition.posY - this.refDimensions -7  &&
            
            //MI VERTICE ABAJO/IZQ ESTA TOCANDO EL CUADRADO
            ((this.player.playerPosition.x >= square.obstaclesPosition.posX &&
                this.player.playerPosition.x <= square.obstaclesPosition.posX + this.refDimensions)
            ||
            //MI VERTICE ABAJO/DER ESTA TOCANDO EL CUADRADO
            (this.player.playerPosition.x + this.refDimensions >= square.obstaclesPosition.posX &&
            this.player.playerPosition.x + this.refDimensions <= square.obstaclesPosition.posX + this.refDimensions)
            )) {
            // console.log('entro')
            // console.log(`new player position ${square.obstaclesPosition.posY - this.refDimensions}`)
            this.player.playerPosition.y =  square.obstaclesPosition.posY - this.refDimensions
            this.player.absolutePlayerPosition = square.obstaclesPosition.posY - this.refDimensions
            return true
        } else {
            return false
        }
    },

    gameOver() {

    }

}