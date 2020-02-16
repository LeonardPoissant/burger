class Score {
    constructor(root, xPos, yPos) {
        // We create a DOM element, set its CSS attributes then append it to the parent DOM element. We also
        // set the \`domElement\` property of the instance to the newly created DOM element so we can update it later
    
        this.score = 0;
        const div = document.createElement("div");
        div.style.position = 'absolute'
        div.style.left = xPos;
        div.style.top = yPos;
        div.style.color = 'black';
        div.style.font = 'bold 30px Impact';
        div.style.zIndex = 2000;
        div.innerText = "SCORE:" + this.score;
        root.appendChild(div);
        this.domElement = div;
    
        console.log(xPos, yPos);
    
    }
    
    update() {
    this.score = this.score +10;
if(this.score >=2000 && this.score <= 5000){
    this.domElement.style.color = "red";

    }
    else if(this.score > 5000){
        this.domElement.style.color = "gold";
        
    }
        this.domElement.innerText = "SCORE:" + this.score;
        
    }
    
}


