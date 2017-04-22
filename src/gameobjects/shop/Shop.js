import Phaser from 'phaser'

export default class extends Phaser.Sprite{

    constructor( game ){

        super( game )

        this.margin = 20

        this.bg = this.game.add.graphics( 0, 0 )
        this.bg.beginFill( 0x333333 )
        this.bg.drawRect(
            this.margin,
            this.margin,
            this.game.width / 2 - this.margin,
            this.game.height - this.margin * 2
        )

    }

}
