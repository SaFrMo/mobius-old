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
        this.speed = opts.speed || 150

        // Set initial state
        this.state = 'idle'

        // Save reference to player
        this.player = this.game.state.states[this.game.state.current].player
    }

    update(){
        super.update()

        // 1 = right, -1 = left
        const playerDir = this.player.x - this.x > 0 ? 1 : -1

        switch( this.state ){

        case 'idle':
            // Look for player
            if( Math.abs( this.player.x - this.x ) < this.scanRange ){
                if( this.health.getPercent() >= this.fleeThreshold ){
                    this.state = 'pursuing'
                } else {
                    this.state = 'fleeing'
                }
            }
            break

        case 'pursuing':
            // Move toward player
            this.body.velocity.x = this.speed * playerDir
            // Check if we should flee
            if( this.health.getPercent() < this.fleeThreshold ){
                this.state = 'fleeing'
            }
            // Try to fire weapon
            this.currentWeapon.fire( playerDir )
            break

        case 'fleeing':
            this.body.velocity.x = this.speed * playerDir * -1
            // Check if we should pursue
            if( this.health.getPercent() > this.fleeThreshold ){
                this.state = 'pursuing'
            }
            // Check if we should stop running
            if( Math.abs( this.player.x - this.x ) >= this.scanRange ){
                this.state = 'idle'
            }
            break

        }

    }

}
