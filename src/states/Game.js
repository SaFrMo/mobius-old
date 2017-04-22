import Phaser from 'phaser'
import Player from '../gameobjects/Player'
import Enemy from '../gameobjects/Enemy'
// import TextDisplay from '../gameobjects/TextDisplay'
import collideActions from '../actions/collision'
import Weapon from '../gameobjects/Weapon'

export default class extends Phaser.State{
    init(){}
    preload(){}

    create(){

        // Set up environment
        this.map = this.game.add.tilemap( 'map' )
        this.map.addTilesetImage( 'ground_1x1' )
        this.map.setCollisionBetween( 0, 12 )
        this.blocking = this.map.createLayer( 'Blocks' )
        this.blocking.resizeWorld()

        // Set up actors
        this.actors = this.game.add.group()
        this.actors.enableBody = true
        this.actors.physicsBodyType = Phaser.Physics.ARCADE

        // Set up bullets
        this.bullets = this.game.add.group()
        this.bullets.enableBody = true
        this.bullets.physicsBodyType = Phaser.Physics.ARCADE

        // Set up pickups
        this.pickups = this.game.add.group()
        this.pickups.enableBody = true
        this.pickups.physicsBodyType = Phaser.Physics.ARCADE

        // Set up player
        this.player = this.actors.add(
            new Player(
                this.game,
                0, 0,
                'player',
                null,
                {
                    pickupGroup: this.pickups
                }
            )
        )
        this.player.giveWeapon( new Weapon( this.bullets ) )

        // Add enemy
        this.actors.add( new Enemy( this.game, 300, 0, 'enemy', null, {
            pickupGroup: this.pickups
        } ) )

        // Set up text display
        // this.game.add.existing( new TextDisplay( this.game, "test!" ) )

        // Set up platformer physics
        this.game.physics.startSystem( Phaser.Physics.ARCADE )
        this.game.physics.arcade.gravity.y = 500

    }

    update(){
        // Register world collisions
        this.game.physics.arcade.collide( this.player, this.blocking )

        // Register bullet collision
        this.game.physics.arcade.overlap( this.bullets, this.actors, collideActions.bulletHit, null, this )

        // Pickup overlap
        this.game.physics.arcade.overlap( this.pickups, this.actors, collideActions.pickup, null, this )
    }
}
