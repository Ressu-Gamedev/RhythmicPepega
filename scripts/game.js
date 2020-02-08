var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('arrow', 'https://media.discordapp.net/attachments/675425089835237397/675456900762173450/pepga_arrow.png?width=1194&height=672');
    this.load.image('back', '/assets/pepemeteor.png');
    this.load.image('ground', '/assets/platform.png');
    this.load.image('pepe', 'pepe-man.png', 
    {frameWidth: 64, frameHeight: 64});
}

var platforms;

function create() {
    this.add.image(32, 32, 'arrow');
    this.add.image(800, 500, 'back');
    platforms = this.physics.add.staticGroup();
    platforms.create(800, 975, 'ground').setScale(7).refreshBody();
    platforms.create(100, 500, 'ground');
    platforms.create(800, 800, 'ground');
    platforms.create(1200, 600, 'ground');
    platforms.create(700, 400, 'ground');
}
    
function update() {
    
}