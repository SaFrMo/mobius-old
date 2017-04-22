import Phaser from 'phaser'

export default class extends Phaser.Sprite{

    constructor( game, content ){
        super( game )

        // Box dimensions
        this.padding = 20
        this.margin = 10
        this.boxHeight = 100

        // Background
        this.bg = this.game.add.graphics( 0, 0 )
        this.bg.beginFill( 0x222222 )
        this.bg.drawRect( this.margin, this.margin, this.game.width - this.margin * 2, this.boxHeight )

        // Text style
        this.style = {
            font: 'bold 12pt Arial',
            fill: 'white',
            align: 'left',
            wordWrap: true,
            wordWrapWidth: this.game.width - this.margin * 2 - this.padding * 2
        }
        this.content = content
        // Text
        this.text = this.game.add.text( this.margin + this.padding, this.margin + this.padding, this.content, this.style )
    }

}
