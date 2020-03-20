import { CST } from "../CST.js";
import { PlayScene } from "./PlayScene.js";
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
        this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 300, "creators").setDepth(1);
        let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 100, "play_button").setDepth(1);

        //create sprites (if using pixel art, remove sharpen)

        let hovering = this.add.image(50, 50, "potion").setDepth(1);
        hovering.setScale(1 / 15);
        hovering.setVisible(false);

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
            playButton.setTint(0xff0000); // Turns red when mouse hovers over
        })

        playButton.on("pointerout", () => {
            hovering.setVisible(false);
            playButton.clearTint(); // Changes text back to white
        })

        // Once 'play' is clicked, begin PlayScene
        playButton.on("pointerup", () => {
            this.scene.start(CST.SCENES.PLAY, "hi from MenuScreen");
        })
    }
}