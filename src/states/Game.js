import Phaser from 'phaser'
import Player from '../gameobjects/Player'
// import TextDisplay from '../gameobjects/TextDisplay'

export default class extends Phaser.State{
    init(){}
    preload(){}

    create(){

        // Set up environment
        this.map = this.game.add.tilemap( 'map' )
        this.map.addTilesetImage( 'ground_1x1' )
        this.map.setCollisionBetween( 1, 2 )
        this.blocking = this.map.createLayer( 'Blocks' )
        this.blocking.resizeWorld()

        // Set up platformer physics
        this.game.physics.startSystem( Phaser.Physics.ARCADE )
        this.game.physics.arcade.gravity.y = 500

        // Set up player sprite
        this.player = this.game.add.existing(
            new Player( this.game, 0, 0, 'player' )
        )

        // Set up text display
        // this.game.add.existing( new TextDisplay( this.game ) )

    }

    update(){
        // Register collisions
        this.game.physics.arcade.collide( this.player, this.blocking )
    }
}
