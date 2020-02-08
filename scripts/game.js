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
var pepe_o_meter;
var keys;
var toplay;
var track = 0;
var text;
var d;
var t;
var t_last;
var points = 0;
var late;

var timer;

function preload() {
    this.load.image('back', '/assets/pepemeteor.png');
    this.load.audio('bonk', '/assets/bonk.ogg', {
        instances: 1
    });
    this.load.audio('bgms', '/assets/140bpm.ogg', {
        instances: 1
    });
    this.load.audio('miss', '/assets/missed_note.ogg', {
        instances: 1
    });
    this.load.image('pepe', '/assets/pepe-man.png');
    this.load.image('baonk', '/assets/bonkey.png');
}



function create() {
    d = new Date();
    t_last = d.getTime();

    this.add.image(800, 500, 'back');
    this.sound.add('bonk');
    this.sound.add('miss');
    this.sound.add('bgms');
    pepe_o_meter = this.add.sprite(640, 360, 'pepe');
    keys = this.input.keyboard.addKeys('SPACE');
    text = this.add.text(20, 20, 'Score: ' + points);
    late = this.add.text(20, 40, '');
    this.sound.play('bgms');
}

function update() {
    
    if(keys.SPACE.isDown){
        d = new Date();
        t = d.getTime();
        pepe_o_meter.setScale(1.2);
        pepe_o_meter.setTexture('baonk');
        if(toplay){
            console.log('t' + t)
            console.log('t - t_last: ' + (t - t_last));
            if(t - t_last > 480){
                // LATE
                pepe_o_meter.setTint(0xfc3003);
                late.setText('Too late nibba');
                this.sound.play('miss');
            }else if(t - t_last < 380){
                // EARLY
                pepe_o_meter.setTint(0xfc3003);
                late.setText('Someone is an early comer');
                this.sound.play('miss');
            } else {
                pepe_o_meter.setTint(0xffffff);
                late.setText('Very impressive');
                this.sound.play('bonk');
                points++;
            }
        }
        t_last = t;
        toplay = false;
        text.setText('Score: ' + points);
    }else{
        pepe_o_meter.setScale(0.8); 
        pepe_o_meter.setTexture('pepe');
        toplay = true;
    }
}