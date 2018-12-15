// Enemies our player must avoid
var Enemy = function (x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    this.x = this.x <= 400 ? this.x + 1 : 0;
    this.checkCollisions();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.checkCollisions = function () {
    if (player.x < this.x + 60 &&
        player.x + 37 > this.x &&
        player.y < this.y + 25 &&
        30 + player.y > this.y) {
        resetgame();
    }
};

function resetgame() {
    player.x = 200;
    player.y = 320;
}
// Now write your own player class
var Player = function (x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};

Player.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};


Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.handleInput = function (key) {
    switch (key) {
        case 'left':
            this.x = this.x === 0 ? 0 : this.x - 100;
            break;
        case 'right':
            this.x = this.x === 400 ? 400 : this.x + 100;
            break;
        case 'up':
            this.y = this.y <= 80 ? 320 : this.y - 80;
            break;
        case 'down':
            this.y = this.y === 320 ? 320 : this.y + 80;
            break;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let e1 = new Enemy(0, 70,  Math.floor(Math.random() * 500));
let e2 = new Enemy(20, 150,  Math.floor(Math.random() * 300));
let e3 = new Enemy(60, 230,  Math.floor(Math.random() * 400));
let allEnemies = [e1, e2, e3];
let player = new Player(200, 320);




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {

    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput.call(player, allowedKeys[e.keyCode]);
});
