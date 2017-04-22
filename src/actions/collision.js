export default {
    bulletHit: ( bullet, hit ) => {

        if( bullet.owner !== hit ){

            if( hit.hasOwnProperty( 'health' ) ){
                hit.health.change( -bullet.stats.damage )
                bullet.kill()
            }

        }
    },

    pickup: ( picked, picker ) => {

        if( picked.spawner !== picker ){
            picker.changeSupplies( picked.supplies )
            picked.kill()
        }

    }
}
