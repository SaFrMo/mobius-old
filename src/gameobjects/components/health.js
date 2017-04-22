export default class {
    constructor( starting, regen, pause ){
        this.starting = starting || 100
        this.regen = regen || 25
        this.pause = pause || 1000
        this.current = this.starting
        this.stasis = false
    }

    getPercent(){ return this.current / this.starting }

    change( amount ){
        this.current += amount
        this.current = Math.min( this.starting, this.current )
    }

    update( delta ){
        if( !this.stasis ){
            this.current += this.regen * delta
            this.current = Math.min( this.starting, this.current )
        }
    }
}
