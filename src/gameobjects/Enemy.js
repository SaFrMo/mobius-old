import Actor from './Actor'

export default class extends Actor{

    constructor( game, x, y, key, frame, pickupGroup ){
        super( game, x, y, key, frame, pickupGroup )

        // Remove health regen
        this.health.stasis = true

        // Change health bar
        this.health.healthBar.tint = 0xcc0000
    }

}
