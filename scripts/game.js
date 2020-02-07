var config = {
    type: Phaser.AUTO,
    width: 700,
    height: 900,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('arrow', '../assets/pepega_arrow.png', 
    {
        frameWidth: 32, frameHeight: 32
    });

}

function create() {
}

function update() {

}