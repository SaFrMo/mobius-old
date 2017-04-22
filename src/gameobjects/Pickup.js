import Phaser from 'phaser'

export default class extends Phaser.Sprite{

    constructor( spawner ){
        super( spawner.game, spawner.x, spawner.y, 'bullet' )

        this.spawner = spawner
        this.supplies = spawner.health.starting

        // Enable physics
        this.game.physics.enable( this, Phaser.Physics.ARCADE )
        this.body.collideWorldBounds = true
        this.body.setSize( 32, 32 )

        // Pop up
        this.body.velocity.y = -300

    }

}
