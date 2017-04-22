import Phaser from 'phaser'
import Health from './components/health'

export default class extends Phaser.Sprite{

    constructor( game, x, y, key, frame ){

        super( game, x, y, key, frame )

        // Enable player physics
        this.game.physics.enable( this, Phaser.Physics.ARCADE )

        // Player specifics
        this.body.collideWorldBounds = true
        this.body.setSize( 64, 64 )

        // Add controls
        this.cursors = this.game.input.keyboard.createCursorKeys()
        this.jumpButton = this.game.input.keyboard.addKey( Phaser.Keyboard.SPACEBAR )

        // Set movement params
        this.xSpeed = 350
        this.jump = -250

        // Set health
        this.health = new Health( this )
        this.health.change(-50)

    }

    update(){

        // horizontal movement
        if( this.cursors.left.isDown ){
            this.body.velocity.x = -this.xSpeed
        } else if ( this.cursors.right.isDown ){
            this.body.velocity.x = this.xSpeed
        } else {
            this.body.velocity.x = 0
        }

        // jump
        if( this.jumpButton.isDown &&
            this.body.onFloor() ){
            this.body.velocity.y = this.jump
        }

        // update health
        this.health.update()

    }

}
