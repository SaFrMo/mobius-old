export default class {
    constructor( host, starting, regen, pause ){
        this.host = host
        this.starting = starting || 100
        this.regen = regen || 25
        this.pause = pause || 1000
        this.current = this.starting
        this.stasis = false
        this.switchTime = 1000
        this.switchCountdown = 0

        // Health UI
        this.healthBg = this.host.addChild( this.host.game.make.sprite( 0, -25, 'white' ) )
        this.healthBg.width = this.host.width
        this.healthBg.height = 10
        this.healthBg.tint = 0x333333
        this.healthBar = this.host.addChild( this.host.game.make.sprite( 0, -25, 'white' ) )
        this.healthBar.width = this.host.width
        this.healthBar.height = 10
        this.healthBar.tint = 0x00cc00

    }

    getPercent(){ return this.current / this.starting }

    change( amount ){
        this.current += amount
        this.current = Math.min( this.starting, this.current )

        // update health bar
        this.healthBar.width = this.host.width * this.getPercent()
    }

    toggle(){
        const targetState = !this.stasis
        if( targetState ){
            // Transitioning to stasis has no delay
            this.stasis = !this.stasis
            this.switchCountdown = -1
        } else {
            // Start countdown to regen state
            this.switchCountdown = this.switchCountdown > 0 ? -1 : this.switchTime
        }
    }

    update(){
        if( !this.stasis ){
            this.change( this.regen * ( this.host.game.time.elapsed / 1000 ) )
        }

        if( this.switchCountdown > 0 ){
            this.switchCountdown -= this.host.game.time.elapsed
            if( this.switchCountdown <= 0 ){
                this.stasis = !this.stasis
            }
        }
    }
}
