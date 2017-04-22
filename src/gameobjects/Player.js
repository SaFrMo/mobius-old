import Actor from './Actor'
import Phaser from 'phaser'

export default class extends Actor{

    constructor( game, x, y, key, frame ){

        super( game, x, y, key, frame )

        // Add controls
        this.cursors = this.game.input.keyboard.createCursorKeys()
        this.jumpButton = this.game.input.keyboard.addKey( Phaser.Keyboard.SPACEBAR )
        this.toggleButton = this.game.input.keyboard.addKey( Phaser.Keyboard.TAB )

        // Set movement params
        this.xSpeed = 350
        this.jump = -250

        this.health.change( -90 )

        this.toggleButton.onUp.add( function(){ this.health.toggle() }, this )

    }

    update(){

        super.update()

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

    }

}
