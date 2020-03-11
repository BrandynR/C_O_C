import { CST } from "../CST";
import { CharacterSprite } from "../CharacterSprite";
import { Sprite } from "../Sprite";

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
        this.load.once("loaderror", function(file) {
            console.log(file)
        })
        console.log("You've made it to preload")
    }
    create() {
        //this.add.image(this.game.renderer.width / 5, this.game.renderer.height / 4, "wiz2").setDepth(1);
        //this.add.image(this.game.renderer.width / 4, this.game.renderer.height / 4, "wiz1").setDepth(1);
        this.add.image(0, 0, "terrain").setOrigin(0).setDepth(0);
        //this.physics.add.sprite.flipX(100, 100, "goblin", null);
        let Player1 = this.add.sprite(225, 300, "wiz1").setDepth(1);
        Player1.setScale(0.75);
        //let Player2 = this.add.image(850, 300, "wiz2").setDepth(1);
        //Player2.setScale(0.75);
        this.wiz2 = this.add.sprite(750, 290, "wiz2")
        this.wiz2.setScale(0.75);
        this.wiz2.anchor.setTo(0.5);
        this.wiz2.scale.setTo(-1, 1);
    }
}