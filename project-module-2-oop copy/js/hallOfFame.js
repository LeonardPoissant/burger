class HallOfFame{

    constructor(root, xPos, yPos) {
        const div = document.createElement('p');
        div.style.position = 'absolute'
        div.style.border = "thick solid 800000 ";
        div.style.left = xPos;
        div.style.top = yPos;
        div.style.color = 'black';
        div.style.font = 'bold 30px Impact';
        div.style.innerText = "HALL OF FAME"
        div.style.zIndex = 2000;
        root.appendChild(div);
        this.domElement = div;
    
    } 
    addScore = () =>{
        div.style.innerText = "HALL OF FAME" + this.addScore;
    } 
}