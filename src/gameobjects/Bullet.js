import Phaser from 'phaser'

export default class extends Phaser.Sprite{

    constructor( game, stats, owner, x, y, key, frame ){

        super( game, x, y, key, frame )

        // Save stats
        this.stats = stats

        // Save owner
        this.owner = owner

        // Enable bullet physics
        this.game.physics.enable( this, Phaser.Physics.ARCADE )

        // Kill out of frame
        this.checkWorldBounds = true
        this.outOfBoundsKill = true

        // Bullet specifics
        this.body.setSize( 32, 32 )
        if( !this.stats.hasOwnProperty( 'gravity' ) ){
            this.body.allowGravity = false
        } else {
            this.body.gravity.y = this.stats.gravity
        }

        this.body.velocity.x = this.stats.speed

    }

}
