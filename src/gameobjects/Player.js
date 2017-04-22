import Actor from './Actor'
import Phaser from 'phaser'

export default class extends Actor{

    constructor( game, x, y, key, frame, weapon, pickupGroup ){

        super( game, x, y, key, null, pickupGroup )

        this.currentWeapon = weapon

        // Add controls
        this.cursors = this.game.input.keyboard.createCursorKeys()
        this.jumpButton = this.game.input.keyboard.addKey( Phaser.Keyboard.SPACEBAR )
        this.toggleButton = this.game.input.keyboard.addKey( Phaser.Keyboard.TAB )
        this.fireButton = this.game.input.keyboard.addKey( Phaser.Keyboard.SHIFT )

        // Set movement params
        this.xSpeed = 350
        this.jump = -250

        // Toggle health state
        this.toggleButton.onUp.add( function(){ this.health.toggle() }, this )

        // Fire weapon
        this.fireButton.onUp.add( function(){ this.currentWeapon.fire() }, this )

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
