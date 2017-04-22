/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../gameobjects/Player'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {

      this.objects = {}

      // Set up platformer physics
      this.game.physics.startSystem(Phaser.Physics.ARCADE)
      this.game.physics.arcade.gravity.y = 500

      // Set up player sprite
      this.objects.player = this.game.add.existing(
          new Player( this.game, 0, 0, 'player' ) )


  }

  render () {

  }
}
