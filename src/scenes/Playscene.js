import { CST } from "../CST";
import { CharacterSprite } from "../CharacterSprite";
import { Sprite } from "../Sprite";

var Player1;
export class PlayScene extends Phaser.Scene {

    constructor() {
        super({
            key: CST.SCENES.PLAY,
        });
    }
    init(data) {
        console.log(data);
        console.log("THANX");
    }
    preload() {
        this.load.image("wiz1", "./assets.firewiz.png")
        this.load.image("wiz2", "./assets.iceopponent.png")
        this.load.image("terrain", "./assets/forestday.png");
        this.load.multiatlas('players', "./assets/players.json", "players");
        this.load.image("earth", "./assets/earth_card.png")
        this.load.image("air", "./assets/air_card.png")
        this.load.image("fire", "./assets/fire_card.png")
        this.load.image("water", "./assets/water_card.png")
        this.load.image('block', 'assets/tiny2.png');

        this.load.once("loaderror", function(file) {
            console.log(file)
        })
        console.log("You've made it to preload")
    }
    create() {
        this.add.image(0, 0, "terrain").setOrigin(0).setDepth(0);
        let Player1 = this.add.sprite(225, 300, "wiz1").setDepth(1);
        Player1.setScale(0.75);
        let Player2 = this.add.sprite(750, 290, "wiz2").setDepth(1);
        Player2.setScale(0.75);
        //this.wiz2 = this.add.sprite(750, 290, "wiz2")
        //this.wiz2.setScale(0.75);
        //this.wiz2.anchor.setTo(0.5);
        //this.wiz2.scale.setTo(-1, 1);

        //Load cards
        let Earth = this.add.sprite(90, 575, "earth").setDepth(1);
        Earth.setScale(0.70);
        let Air = this.add.sprite(300, 575, "air").setDepth(1);
        Air.setScale(0.70);
        let Fire = this.add.sprite(510, 575, "fire").setDepth(1);
        Fire.setScale(0.70);
        let Water = this.add.sprite(720, 575, "water").setDepth(1);
        Water.setScale(0.70);
        let Earth2 = this.add.sprite(910, 575, "earth").setDepth(1);
        Earth2.setScale(0.70);

        //Checkerboard transition
        var blocks = this.add.group({ key: 'block', repeat: 300 }).setDepth(1);
        //blocks.setScale(1 / 15);

        Phaser.Actions.GridAlign(blocks.getChildren(), {
            width: 21,
            cellWidth: 60,
            cellHeight: 60,
            x: 0,
            y: 0
        });

        var _this = this;

        var i = 0;

        blocks.children.iterate(function(child) {

            _this.tweens.add({
                targets: child,
                scaleX: 0,
                scaleY: 0,
                alpha: 0,
                y: '+=64',
                angle: 180,
                ease: 'Power3',
                duration: 1000,
                delay: 1000 + (i * 100)
            });

            i++;

            //  Change the value 32 for different results
            if (i % 16 === 0) {
                i = 0;
            }

            // sprite
            /*        capguy = this.add.sprite(0, 400, 'Wizard1', "PNG/wizard/5_ATTACK_004.png");
                    capguy.setScale(0.5, 0.5);

                    // animation
                    var frameNames = this.anims.generateFrameNames('Wizard1', { start: 1, end: 8, zeroPad: 4, prefix: 'PNG/wizard/', suffix: '.png' });
                    this.anims.create({ key: 'attack', frames: frameNames, frameRate: 10, repeat: -1 });
                    Player1.anims.play('attack');
            */
        });
    }
}