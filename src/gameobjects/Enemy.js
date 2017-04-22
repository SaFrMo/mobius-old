import Actor from './Actor'

export default class extends Actor{

    constructor( game, x, y, key, frame, opts = false ){
        super( game, x, y, key, frame, opts )

        this.AGGRESSIVE = 'aggro'

        // Remove health regen
        this.health.stasis = true

        // Change health bar
        this.health.healthBar.tint = 0xcc0000

        // Set personality
        this.personality = opts.hasOwnProperty( 'personality' ) ? opts.personality : this.AGGRESSIVE

        // Set stats
        this.scanRange = opts.scanRange || 200
        this.fleeThreshold = opts.fleeThreshold || 0.5 // Below this percentage of health, the enemy will flee

        // Set initial state
        this.state = 'idle'

        // Save reference to player
        this.player = this.game.state.states[this.game.state.current].player
    }

    update(){
        super.update()

        switch( this.state ){

        case 'idle':
            // Look for player
            if( Math.abs( this.player.x - this.x ) < this.scanRange ){
                if( this.health.getPercent() >= this.fleeThreshold ){
                    return 'pursuing'
                } else {
                    return 'fleeing'
                }
            }
            break

        case 'pursuing':
            console.log('pursuing!')
            break

        case 'fleeing':
            console.log('fleeing!')
            break

        }

    }

}
