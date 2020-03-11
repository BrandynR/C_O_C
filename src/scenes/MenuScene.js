import { CST } from "../CST";
import { PlayScene } from "./PlayScene";
export class MenuScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.MENU
        })
    }
    init(data) {
        console.log(data);
        console.log("I GOT IT");
    }
    create() {

        //Creating the menu screen, create images
        this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 3, "logo").setDepth(1);
        this.add.image(0, 0, "title_bg").setOrigin(0).setDepth(0);
        let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 100, "play_button").setDepth(1);
        //this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 100, "options_button").setDepth(1);

        //create sprites (if using pixel art, remove sharpen)

        let hovering = this.add.image(50, 50, "potion").setDepth(1);
        hovering.setScale(1 / 20);
        hovering.setVisible(false);

        //create audio, disable pauseonblur

        //      this.sound.pauseOnBlur = false;
        //        this.sound.play(CST.AUDIO.TITLE, { loop: true })


        /* 
            PointerEvents:
                pointerover - hovering
                pointerout - not hovering
                pointerup - click and release
                pointerdown - just click
        */
        playButton.setInteractive();

        playButton.on("pointerover", () => {
            hovering.setVisible(true);
            hovering.x = playButton.x - playButton.width;
            hovering.y = playButton.y;

        })

        playButton.on("pointerout", () => {
            hovering.setVisible(false);
        })

        playButton.on("pointerup", () => {
            this.scene.start(CST.SCENES.PLAY, "hi from MenuScreen");
        })
    }
}