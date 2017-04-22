import Phaser from 'phaser'

export default class extends Phaser.Sprite{

    constructor( game, x, y, key, frame ){
        super( game, x, y, key, frame )

        this.style = {
            font: 'bold 60pt Arial',
            fill: 'white',
            align: 'left',
            wordWrap: true,
            wordWrapWidth: 450
        }

        // Box dimensions
        this.padding = 20
        this.margin = 10
        this.height = 20

        // Background
        this.bg = this.addChild( this.game.make.sprite( 0, 0, 'white' ) )
        this.bg.tint = 0x222222
        this.bg.width = this.game.stage.width - this.margin * 2
        this.bg.height = this.height
        this.bg.x = this.margin
        this.bg.y = this.game.stage.height
    }

}
