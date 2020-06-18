
const Game = {

    title: 'Space-Picks',
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
    groundHeight: 50,
    refDimensions: 25,
    velX: 2,
    fps: 60,
    interval: undefined,
    music: {
        levelSound: new Audio('sound/levelSoundComplete50sec.mp3'),
        crashSound: new Audio('sound/explode_11.mp3'),
        jumpSound: new Audio('sound/350906__cabled-mess__jump-c-04.wav'),
        victorySound: new Audio('sound/Final Fantasy VI - Victory Fanfare (mp3cut.net)(1).mp3')
    },


    background : undefined,
    player: undefined,
    obstacles: {
        squares: [],
        triangles: [],
        picks: []
    },
    score: undefined,

    explotionFrame : 0,



    init(id){
        this.canvasDom = document.getElementById(id)
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
        this.createBackground()
        this.createPlayer()
        this.createObstacles()
        this.createScore()
        this.start()
   
    },

    start() {
        this.music.levelSound.play()
        this.music.levelSound.volume = 0.1
        this.interval = setInterval(() =>{
            this.clearScreen()
            this.draw()
            this.detectCollisions()
            this.removeObstacles()
            this.victory()

        },1000 / this.fps)
    },
    
    setDimensions(){
        
        this.canvasSize.w = 500
        this.canvasSize.h = 350
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
    },
    
    createBackground() {
        this.background = new Background(this.ctx, this.canvasSize, this.groundHeight)

    },
    
    createPlayer(){
        
        this.player = new Player(this.ctx, this.canvasSize, this.groundHeight, this.refDimensions, this.keySPACE)

    },

    createObstacles(){

        arrSquareObstacles.forEach(elem => {
            this.obstacles.squares.push(new Square (this.ctx, this.canvasSize, this.groundHeight, this.refDimensions, elem.posX , elem.posY, this.velX))
        })
        arrTriangleObstacles.forEach(elem => {
            this.obstacles.triangles.push(new Triangle (this.ctx, this.canvasSize, this.groundHeight, this.refDimensions, elem.posX, elem.posY, this.velX))
        })
        arrPicksObstacles.forEach(elem => {
            this.obstacles.picks.push(new Picks (this.ctx, this.canvasSize, this.groundHeight, this.refDimensions, elem.posX, elem.posY, this.velX))
        })

    },

    createScore() {
        this.score = new Score(this.ctx, this.canvasSize, this.refDimensions, this.velX)
    },

    draw(){

        this.background.drawBackground()
        this.background.drawGround()
        this.player.drawPlayer()
        this.obstacles.squares.forEach(elem => elem.drawSquares())
        this.obstacles.triangles.forEach(elem => elem.drawTriangles()) 
        this.obstacles.picks.forEach(elem => elem.drawPicks()) 
        this.score.drawScore ()

    },

    clearScreen() {
        this.ctx.clearRect(0 ,0 , this.canvasSize.w, this.canvasSize.h)
    },

    removeObstacles(){
        this.obstacles.squares = this.obstacles.squares.filter(elem => elem.obstaclesPosition.posX >= -this.refDimensions * 2)

        this.obstacles.triangles = this.obstacles.triangles.filter(elem => elem.obstaclesPosition.posX >= -this.refDimensions * 2)

        this.obstacles.picks = this.obstacles.picks.filter(elem => elem.obstaclesPosition.posX >= -this.refDimensions * 2)
      
    },


//---------------------------------------COLLISIONS---------------------------------------------------------------------------------


    detectCollisions(){


        //VAMOS A COMPROBAR SI ALGUN ELEMENTO ESTA COLISIONANDO
        //PARA ELLO VAMOS A USAR EN VEZ DE FOREACH, SOME
        //NUESTRO detectModifyColisionSquares DEVOLVERA AHORA TRUE/FALSE
        //SI ALGUNO DEVUELVE, SOME DEVOLVERA TRUE

    //----------------------------ground collisions---------------------------------
        if(this.isGroundColliding()){
            this.player.currentBasePosition = this.canvasSize.h - this.groundHeight
            this.player.playerPosition.y = this.player.currentBasePosition
            this.player.isJumping = false
        }

    //----------------------------upColliding (picks and triangles)----------------------------------


        if(this.obstacles.triangles.some(triangles => this.isUpColliding(triangles))){
            this.endGame()
        }

        if(this.obstacles.picks.some(picks => this.isUpColliding(picks))){
            this.endGame()
        }


    //----------------------------Lateral Collisions(square and triangles)-----------------

        if(this.obstacles.triangles.some(triangles => this.isLateralColliding(triangles))){
            this.endGame()
        }

        if(this.obstacles.squares.some(square => this.isLateralColliding(square))){
            this.endGame()
        }


    //---------------------------------------ONLY SQUARE (change posY player top // and // gameOver bottom) ----------------------------------------


            //----------------------------positive square collisions (modifica posY player) -----------------
                if(this.obstacles.squares.some(square => this.isSquarePositiveColliding(square))){
                    this.player.isColliding = true
                    this.player.isJumping = false
                } else {
                    this.player.isColliding = false
                }


            //----------------------------negative square down collisions-----------------

            if(this.obstacles.squares.some(square => this.isSquareDownNegativeColliding(square))){
                this.endGame()
            }


  },


    //--------------------Square collisions, modifying the posY of player----------------------

    isSquarePositiveColliding(square) {
       // ESTOY EN EL EJE Y CORRECTO
        if (this.player.playerPosition.y <= square.obstaclesPosition.posY - this.refDimensions + 5 &&
            this.player.playerPosition.y >= square.obstaclesPosition.posY - this.refDimensions - 5 &&
            
            //MI VERTICE ABAJO/IZQ ESTA TOCANDO EL CUADRADO
            ((this.player.playerPosition.x >= square.obstaclesPosition.posX &&
                this.player.playerPosition.x <= square.obstaclesPosition.posX + this.refDimensions)
            ||
            //MI VERTICE ABAJO/DER ESTA TOCANDO EL CUADRADO
            (this.player.playerPosition.x + this.refDimensions >= square.obstaclesPosition.posX &&
            this.player.playerPosition.x + this.refDimensions <= square.obstaclesPosition.posX + this.refDimensions)
            )) {

            this.player.playerPosition.y =  square.obstaclesPosition.posY - this.refDimensions
            this.player.currentBasePosition = square.obstaclesPosition.posY - this.refDimensions
            return true

        } else {
            return false
        }

    },

   //-----------------Colision del cuadrado por debajo----------------------------------

    isSquareDownNegativeColliding(square){

        if (this.player.playerPosition.y - this.refDimensions<= square.obstaclesPosition.posY  + 3 &&
            this.player.playerPosition.y - this.refDimensions>= square.obstaclesPosition.posY  - 3 &&
            
            //MI VERTICE ABAJO/IZQ ESTA TOCANDO EL CUADRADO
            ((this.player.playerPosition.x >= square.obstaclesPosition.posX &&
                this.player.playerPosition.x <= square.obstaclesPosition.posX + this.refDimensions)
            ||
            //MI VERTICE ABAJO/DER ESTA TOCANDO EL CUADRADO
            (this.player.playerPosition.x + this.refDimensions >= square.obstaclesPosition.posX &&
            this.player.playerPosition.x + this.refDimensions <= square.obstaclesPosition.posX + this.refDimensions)
            )) {

            return true

        } else {
            return false
        }

    },


    //---------------------------------------------------------------------------------------------


    isUpColliding(obstacles){

        if(obstacles instanceof Picks|| obstacles instanceof Triangle){

            if (this.player.playerPosition.y <= obstacles.obstaclesPosition.posY - obstacles.obstacleDimensions.h + 3 && 
                this.player.playerPosition.y >= obstacles.obstaclesPosition.posY - obstacles.obstacleDimensions.h - 3 &&
                
                //MI VERTICE ABAJO/IZQ ESTA TOCANDO EL CUADRADO
                ((this.player.playerPosition.x >= obstacles.obstaclesPosition.posX &&
                    this.player.playerPosition.x <= obstacles.obstaclesPosition.posX + obstacles.obstacleDimensions.w)
                ||
                //MI VERTICE ABAJO/DER ESTA TOCANDO EL CUADRADO
                (this.player.playerPosition.x + this.refDimensions >= obstacles.obstaclesPosition.posX + obstacles.obstacleDimensions.w &&
                this.player.playerPosition.x + this.refDimensions <= obstacles.obstaclesPosition.posX + obstacles.obstacleDimensions.w) 
                )) {
                

                return true
    
            } else {
                return false
            }

        }
 
    },

    isLateralColliding(obstacles){
        if(obstacles instanceof Triangle|| (obstacles instanceof Square && !this.player.isColliding) ){
            
            if (this.player.playerPosition.x + this.refDimensions >= obstacles.obstaclesPosition.posX -1 &&
                this.player.playerPosition.x + this.refDimensions <= obstacles.obstaclesPosition.posX + 1 && //los cuadrados tocan por los vertices de abajo)
                
                ((this.player.playerPosition.y >= obstacles.obstaclesPosition.posY - obstacles.obstacleDimensions.h &&
                this.player.playerPosition.y  <= obstacles.obstaclesPosition.posY)
                ||
                (this.player.playerPosition.y - this.refDimensions >= obstacles.obstaclesPosition.posY &&
                this.player.playerPosition.y - this.refDimensions <= obstacles.obstaclesPosition.posY - obstacles.obstacleDimensions.h)
                    ))
                 {

                return true
    
            } else {
                return false 
            }
        }
    },


    isGroundColliding(){
        if (this.player.playerPosition.y >= this.canvasSize.h - this.groundHeight){
            return true

        } else {
            return false
        }
    },


//------------------------------------------------------------End of Collisions-------------------------------------------
    victory() {

        if (this.obstacles.squares.length == 3){
            this.music.levelSound.pause()
            this.music.victorySound.play()
            this.music.victorySound.volume = 0.1
            const canvas = document.querySelector('canvas')
            canvas.style.display = 'none'
            const victoryScreen = document.querySelector('.victory')
            victoryScreen.style.display = 'block'
            document.addEventListener('keydown', e =>{
                if (e.keyCode == 82){
                    location.reload()  
                }
            })
        }
    },


    gameOver() {

        this.music.levelSound.pause()
        const canvas = document.querySelector('canvas')
        canvas.style.display = 'none'
        const gameOverScreen = document.querySelector('.gameOver')
        gameOverScreen.style.display = 'block'
        let percentage = document.querySelector('.percentage')
        percentage.innerText = this.score.percentage + '%'
        document.addEventListener('keydown', e =>{
            if (e.keyCode == 82){
                location.reload()  
            }
        })
        return true
    },



    endGame (){
        clearInterval(this.interval)
        setTimeout(() => {
            this.gameOver()
            clearInterval(this.interval)
        }, 800)
        this.explotionAnimation()
    },

    explotionAnimation (){ 
        this.music.levelSound.pause()
        this.music.crashSound.play()
        this.interval = setInterval(() => {
            this.clearScreen()
            this.background.drawBackground()
            this.background.drawGround()
            this.obstacles.squares.forEach(elem => elem.drawSquares())
            this.obstacles.triangles.forEach(elem => elem.drawTriangles()) 
            this.obstacles.picks.forEach(elem => elem.drawPicks())             
            let explotionImage = new Image()
            explotionImage.src = explotion[this.explotionFrame]
            explotionImage.onload = () => {
                this.ctx.drawImage( explotionImage, this.player.playerPosition.x - this.refDimensions, this.player.playerPosition.y - this.groundHeight - this.refDimensions/2, this.refDimensions*4, this.refDimensions*4)
            }
            this.explotionFrame++           
        }, 50)
    }

}




