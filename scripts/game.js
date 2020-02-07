var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('arrow', 'https://media.discordapp.net/attachments/675425089835237397/675456900762173450/pepga_arrow.png?width=1194&height=672');
}

function create() {
    this.add.image(32, 32, 'arrow');
}

function update() {
    
}