window.onload = () => {
    document.addEventListener('keydown', e =>{
        if (e.keyCode == 13){
            if(Game.gameOn){
                const canvas = document.querySelector('canvas')
                const div = document.querySelector('.initialScreen')
                div.style.display = 'none'
                canvas.style.display = 'block'
                Game.init('geometrydash')
            }
        }
    })
}