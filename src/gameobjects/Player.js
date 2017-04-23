import Actor from './Actor'
import Phaser from 'phaser'

export default class extends Actor{

    constructor( game, x, y, key, frame, opts ){

        super( game, x, y, key, null, opts )

        // Add controls
        this.cursors = this.game.input.keyboard.createCursorKeys()
        this.jumpButton = this.game.input.keyboard.addKey( Phaser.Keyboard.SPACEBAR )
        this.toggleButton = this.game.input.keyboard.addKey( Phaser.Keyboard.TAB )
        // this.fireButton = this.game.input.keyboard.addKey( Phaser.Keyboard.SHIFT )

        // Set movement params
        this.xSpeed = 350
        this.jumpForce = -250

        // Toggle health state
        this.toggleButton.onUp.add( function(){ this.health.toggle() }, this )

        // Jump
        this.jumpButton.onDown.add( function(){ this.jump() }, this )
        this.totalJumps = 2
        this.currentJump = 0

        // Add supplies readout
        this.suppliesBg = this.game.add.graphics( 0, 0 )
        this.suppliesBg.beginFill( 0x00cc00, 0.4 )
        this.suppliesBg.drawRect( 0, 0, 100, 45 )
        this.suppliesStyle = {
            font: 'bold 12pt Arial',
            fill: 'black'
        }
        this.suppliesText = this.game.add.text( 10, 10, '$0', this.suppliesStyle )

        this.direction = 1

    }

    jump(){
        if( this.currentJump < this.totalJumps ){
            this.body.velocity.y = this.jumpForce
            this.currentJump++
        }
    }

    update(){

        super.update()

        if( this.body.onFloor() ){
            this.currentJump = 0
        }

        // horizontal movement
        if( this.cursors.left.isDown ){
            this.body.velocity.x = -this.xSpeed
            this.direction = -1
        } else if ( this.cursors.right.isDown ){
            this.body.velocity.x = this.xSpeed
            this.direction = 1
        } else {
            this.body.velocity.x = 0
        }

    }

}
