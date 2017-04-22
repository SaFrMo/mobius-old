import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State{
    init(){}

    preload(){
        this.loaderBg = this.add.sprite( this.game.world.centerX, this.game.world.centerY, 'loaderBg' )
        this.loaderBar = this.add.sprite( this.game.world.centerX, this.game.world.centerY, 'loaderBar' )
        centerGameObjects( [this.loaderBg, this.loaderBar] )

        this.load.setPreloadSprite( this.loaderBar )
        //
        // load your assets
        //
        this.load.image( 'player', 'assets/images/player.png' )
        this.load.image( 'enemy', 'assets/images/player.png' )
        this.load.image( 'ground_1x1', 'assets/images/ground_1x1.png' )
        this.load.image( 'white', 'assets/images/white_1x1.png' )
        this.load.image( 'bullet', 'assets/images/bullet.png' )
        this.load.tilemap( 'map', 'assets/tilemaps/map.json', null, Phaser.Tilemap.TILED_JSON )
    }

    create(){
        this.state.start( 'Game' )
    }
}
