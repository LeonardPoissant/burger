const gameEngine = new Engine(document.getElementById("app"));

const music = document.querySelector(".music");
music.loop = true 

const keydownHandler = event => {
    if (event.code === "ArrowLeft") {
        gameEngine.player.moveLeft();
        
    }

    if (event.code === "ArrowRight") {
        gameEngine.player.moveRight();
        
    }

    if(event.code === "ArrowUp"){
        gameEngine.player.moveUp();
       
    }

    if(event.code === "ArrowDown"){
        gameEngine.player.moveDown();
        
    }
    if(event.code === "Enter"){
        gameEngine.gameLoop();
        music.play();
    
    }
}
document.addEventListener("keydown", keydownHandler);

