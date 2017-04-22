import Actor from './Actor'
import Phaser from 'phaser'

export default class extends Actor{

    constructor( game, x, y, key, frame, opts ){

        super( game, x, y, key, null, opts )

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
        this.fireButton.onUp.add( function(){ this.currentWeapon.fire( this.direction ) }, this )

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

    changeSupplies( amount ){
        this.supplies += amount
        this.suppliesText.text = '$' + this.supplies
    }

    update(){

        super.update()

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

        // jump
        if( this.jumpButton.isDown &&
            this.body.onFloor() ){
            this.body.velocity.y = this.jump
        }

    }

}
