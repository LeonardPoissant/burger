class Bonus {
    constructor(theRoot, bonusSpot) {
        this.root = theRoot;
        this.spot = bonusSpot;
        this.x = bonusSpot * BONUS_WIDTH;
        this.y = -BONUS_HEIGHT;
        this.destroyed = false;
        this.domElement = document.createElement('img');
        this.domElement.src = './images/bonus.png';
        this.domElement.style.position = 'absolute';
        this.domElement.style.left = `${this.x}px`;
        this.domElement.style.top = `${this.y}px`;
        this.domElement.style.zIndex = 5;
        theRoot.appendChild(this.domElement);
        this.speed = Math.random() / 0.50 + 0.25;
    }
    update(timeDiff) {
        this.y = this.y + timeDiff * this.speed;
        this.domElement.style.top = `${this.y}px`;
        if (this.y > GAME_HEIGHT) {
                this.root.removeChild(this.domElement);
                this.destroyed = true;
        }
    }
}
