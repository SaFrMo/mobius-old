export default ( bullet, hit ) => {

    if( bullet.owner !== hit ){

        if( hit.hasOwnProperty( 'health' ) ){
            hit.health.change( -bullet.stats.damage )
            bullet.kill()
        }

    }

}
