import Actor from './Actor'

export default class extends Actor{

    constructor( game, x, y, key, frame ){
        super( game, x, y, key, frame )

        // Remove health regen
        this.health.stasis = true
    }

}
