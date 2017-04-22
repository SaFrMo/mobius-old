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

        // Set initial state
        this.state = 'idle'
    }

    update(){
        super.update()

        switch( this.state ){

        case 'idle':

            // Look for player

            break

        }

    }

}
