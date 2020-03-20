import { CST } from "../CST.js";
import { MenuScene } from "./MenuScene.js";
export class LoadScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.LOAD
        })
    }
    init() {

    }
    preload() {
        // Load images, spritesheet, and sound
        this.load.image("terrain", "./assets/forestday.png");
        this.load.image("title_bg", "./assets/forestnight.png");
        this.load.image("play_button", "./assets/play_button.png");
        this.load.image("logo", "./assets/text_logo.png");
        this.load.image("potion", "./assets/potionred04.png");
        // this.load.image("wiz1", "./assets/wizard1.png");
        // this.load.image("wiz2", "./assets/wizard2.png");
        // this.load.image("otherPlayer", "./assets/wizard2.png");
        // this.load.image('wiz1', 'assets/spaceShips_001.png');
        // this.load.image('otherPlayer', 'assets/enemyBlack5.png');

        //   this.load.image("earth", "./assets/earth_card.png")
        //   this.load.image("air", "./assets/air_card.png")
        //   this.load.image("fire", "./assets/fire_card.png")
        //   this.load.image("water", "./assets/water_card.png")

        // Create Loading Bar
        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff //white
            }
        })

        /*
        Loader events:
            complete - when done loading everything
            progress - loader number progress in decimal
        */
        this.load.on("progress", (percent) => {
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
            console.log(percent);
        })

        this.load.on("complete", () => {
            //      console.log("done")
        })
    }
    create() {
        // this.scene.add(CST.SCENES.MENU, MenuScene, false)
        this.scene.start(CST.SCENES.MENU, "hello from LoadScene");
    }
}