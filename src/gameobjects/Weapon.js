import Bullet from './Bullet'

export default class {

    constructor( bulletGroup, weaponType = false ){

        // Weapon types
        this.STANDARD = { damage: 10, time: 750, speed: 250 } // speed = projectile speed

        this.stats = weaponType || this.STANDARD
        this.bulletGroup = bulletGroup
        this.game = this.bulletGroup.game
        this.lastFire = 0

    }

    fire( dir = 1 ){
        if( this.game.time.now - this.lastFire < this.stats.time ) return

        this.bulletGroup.add(
            new Bullet(
                this.game,
                this.owner.x + this.owner.width / 2,
                this.owner.y,
                'bullet',
                null,
                {
                    stats: this.stats,
                    owner: this.owner,
                    dir: dir
                }
            )
        )

        this.lastFire = this.game.time.now
    }

}
