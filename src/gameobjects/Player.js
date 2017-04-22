import Phaser from 'phaser'

export default class extends Phaser.Sprite {

    constructor( game, x, y, key, frame ){

        super( game, x, y, key, frame )

        // Enable player physics
        this.game.physics.enable(this, Phaser.Physics.ARCADE)

        // Player specifics
        this.body.collideWorldBounds = true
        this.body.setSize(64, 64)


    }

}
