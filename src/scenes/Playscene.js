import { CST } from "../CST.js";
import { CharacterSprite } from "../CharacterSprite.js";
import { Sprite } from "../Sprite.js";

var Player1;
var healthBar;
var Player2;
var healthBar2;

function damagePlayer(player) {
    player.health -= 20;
}
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
            this.load.image("earth", "./assets/earth_card.png")
            this.load.image("air", "./assets/air_card.png")
            this.load.image("fire", "./assets/fire_card.png")
            this.load.image("water", "./assets/water_card.png")
            this.load.image('block', './assets/tiny2.png');
            this.load.image('green-bar', './assets/healthbar-green.png');
            this.load.image('red-bar', './assets/healthbar-red.png');
            this.load.image("text", "./assets/Choose-Your-Attack.png");
            this.load.image("dead0", "./assets/dead0.png");
            this.load.image("dead1", "./assets/dead1.png");
            this.load.image("dead2", "./assets/dead2.png");
            this.load.image("win", "./assets/Winner.png")

            this.load.once("loaderror", function(file) {
                console.log(file)
            })
            console.log("You've made it to preload")
        }
        create() {
            this.add.image(0, 0, "terrain").setOrigin(0).setDepth(0);
            this.add.image(500, 740, "text").setDepth(1);

            let Player1 = this.add.sprite(225, 300, "wiz1").setDepth(1);
            Player1.setScale(0.75);
            Player1.health = 100;
            Player1.maxHealth = 100;

            let Player2 = this.add.sprite(750, 290, "wiz2").setDepth(1);
            Player2.setScale(0.75);
            Player2.health = 100;
            Player2.maxHealth = 100;

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
            });

            // Create health bar
            var backgroundBar = this.add.image(110, 20, 'red-bar');
            backgroundBar.fixedToCamera = true;

            healthBar = this.add.sprite(110, 20, 'green-bar');
            healthBar.fixedToCamera = true;

            // add text label to right of bar
            var healthLabel = this.add.text(215, 20, 'Player 1', { fontSize: '20px', fill: '#ffffff' });
            var healthStatus = this.add.text(85, 40, Player1.health, { fontSize: '20px', fill: '#ffffff' });
            healthLabel.fixedToCamera = true;

            // Create opponenet health bar
            var backgroundBar2 = this.add.image(890, 20, 'red-bar');
            backgroundBar2.fixedToCamera = true;

            healthBar2 = this.add.sprite(890, 20, 'green-bar');
            healthBar2.fixedToCamera = true;

            // add text label to left of bar
            var healthLabel2 = this.add.text(690, 20, 'Player 2', { fontSize: '20px', fill: '#ffffff' });
            var healthStatus2 = this.add.text(870, 40, Player2.health, { fontSize: '20px', fill: '#ffffff' });
            healthLabel2.fixedToCamera = true;

            /*
            Create the tint effect over each of the cards in a players hand.
            Also set cards to be interactive to be able to select them.
            */
            Earth.setInteractive();
            Air.setInteractive();
            Fire.setInteractive();
            Water.setInteractive();
            Earth2.setInteractive();

            Earth.on("pointerover", () => {
                Earth.setTint(0xff0000); // Turns red when mouse hovers over
            })

            Earth.on("pointerout", () => {
                Earth.clearTint(); // Changes text back to normal tint
            })

            // Once card is clicked, deal damage
            Earth.on("pointerdown", () => {
                if (Player2.health > 0) {
                    damagePlayer(Player2);
                    healthBar2.scaleX = (Player2.health / Player2.maxHealth);
                    healthStatus2.setText(`${Player2.health}`);
                };
            })

            Earth.on('pointerup', () => {
                if (Player2.health <= 0) {
                    Player2.destroy();
                    let Dead = this.add.sprite(800, 290, "dead0").setDepth(1);
                    Dead.setScale(0.75);
                    this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 3, "win").setDepth(1);
                }
            })

            Air.on("pointerover", () => {
                Air.setTint(0xff0000); // Turns red when mouse hovers over
            })

            Air.on("pointerout", () => {
                Air.clearTint(); // Changes text back to normal tint
            })

            // Once card is clicked, deal damage
            Air.on("pointerdown", () => {
                if (Player2.health > 0) {
                    damagePlayer(Player2);
                    healthBar2.scaleX = (Player2.health / Player2.maxHealth);
                    healthStatus2.setText(`${Player2.health}`);
                };
            })

            Air.on('pointerup', () => {
                if (Player2.health <= 0) {
                    Player2.destroy();
                    let Dead = this.add.sprite(800, 290, "dead0").setDepth(1);
                    Dead.setScale(0.75);
                    this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 3, "win").setDepth(1);
                }
            })

            Fire.on("pointerover", () => {
                Fire.setTint(0xff0000); // Turns red when mouse hovers over
            })

            Fire.on("pointerout", () => {
                Fire.clearTint(); // Changes text back to normal tint
            })

            // Once card is clicked, deal damage
            Fire.on("pointerdown", () => {
                if (Player2.health > 0) {
                    damagePlayer(Player2);
                    healthBar2.scaleX = (Player2.health / Player2.maxHealth);
                    healthStatus2.setText(`${Player2.health}`);
                };
            })

            Fire.on('pointerup', () => {
                if (Player2.health <= 0) {
                    Player2.destroy();
                    let Dead = this.add.sprite(800, 290, "dead0").setDepth(1);
                    Dead.setScale(0.75);
                    this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 3, "win").setDepth(1);
                }
            })

            Water.on("pointerover", () => {
                Water.setTint(0xff0000); // Turns red when mouse hovers over
            })

            Water.on("pointerout", () => {
                Water.clearTint(); // Changes text back to normal tint
            })

            // Once card is clicked, deal damage
            Water.on("pointerdown", () => {
                if (Player2.health > 0) {
                    damagePlayer(Player2);
                    healthBar2.scaleX = (Player2.health / Player2.maxHealth);
                    healthStatus2.setText(`${Player2.health}`);
                };
            })

            Water.on('pointerup', () => {
                if (Player2.health <= 0) {
                    Player2.destroy();
                    let Dead = this.add.sprite(800, 290, "dead0").setDepth(1);
                    Dead.setScale(0.75);
                    this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 3, "win").setDepth(1);
                }
            })

            Earth2.on("pointerover", () => {
                Earth2.setTint(0xff0000); // Turns red when mouse hovers over
            })

            Earth2.on("pointerout", () => {
                Earth2.clearTint(); // Changes text back to normal tint
            })

            // Once card is clicked, deal damage
            Earth2.on("pointerdown", () => {
                if (Player2.health > 0) {
                    damagePlayer(Player2);
                    healthBar2.scaleX = (Player2.health / Player2.maxHealth);
                    healthStatus2.setText(`${Player2.health}`);
                };
            })

            Earth2.on('pointerup', () => {
                if (Player2.health <= 0) {
                    Player2.destroy();
                    let Dead = this.add.sprite(750, 290, "dead0").setDepth(1);
                    Dead.setScale(0.75);
                    this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 3, "win").setDepth(1);

                    //let Dead1 = this.add.sprite(750, 290, "dead1").setDepth(1);
                    //Dead1.setScale(0.75);
                    //let Dead2 = this.add.sprite(750, 290, "dead2").setDepth(1);
                    //Dead2.setScale(0.75);
                }
            })
        };

    }
    /*update() {

    }
    */