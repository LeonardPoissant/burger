
class Health {
    constructor(root, xPos, yPos) {

        //this.totalHealth = [];
        //this.domElement = document.createElement('img');
       // this.domeElement.src = './images/livecricles.png';
        //this.domElement.style.position = 'absolute';
        //this.domElement.style.left = x;
        //this.domElement.style.top = y;
        //this.domElement.style.zIndex = 2000;
        //root.appendChild(this.domElement);

        this.health <= 10;
        const div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.left = xPos;
        div.style.top = yPos;
        div.style.color = 'black';
        div.style.font = 'bold 30px Impact';
        div.style.zIndex = 2000;
        div.innerText = "HEALTH" + this.health;
        root.appendChild(div);
        this.domElement = div;
    }
    healthier = () =>{
        this.health += 1;
    }

    lessHealthy = () =>{
        this.health -=1;
    }



    
}





