import Phaser from 'phaser'
import Health from './components/health'
import Pickup from './Pickup'

export default class extends Phaser.Sprite{
    constructor( game, x, y, key, frame, opts = {} ){
        super( game, x, y, key, frame )

        // Enable player physics
        this.game.physics.enable( this, Phaser.Physics.ARCADE )

        // Player specifics
        this.body.collideWorldBounds = true
        this.body.setSize( 64, 64 )

        // Set health and supplies
        this.health = new Health( this )
        this.supplies = 0

        // Shortcut to current state object
        this.state = this.game.state.states[this.game.state.current]
    }

    die(){
        this.kill()
    }

    update(){
        if( !this.alive ) return
        this.health.update()
        if( this.health.current <= 0 ){
            this.die()
        }
    }
}
