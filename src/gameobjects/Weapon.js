import Bullet from './Bullet'

export default class {

    constructor( bulletGroup, weaponType = false ){

        // Weapon types
        this.STANDARD = { damage: 10, time: 750, speed: 250 } // speed = projectile speed

        this.stats = weaponType || this.STANDARD
        this.bulletGroup = bulletGroup
        this.game = this.bulletGroup.game

    }

    fire(){

        this.bulletGroup.add(
            new Bullet(
                this.game,
                this.stats,
                this.owner,
                this.owner.x + this.owner.width / 2,
                this.owner.y,
                'bullet'
            )
        )

    }

}
