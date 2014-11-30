exports.spawn = {
	spawn: function( self, type, drone ) {
		var world = self.getWorld();
		var entity = org.bukkit.entity.EntityType[ type ];
		if( drone ) {
			world.spawnCreature( drone.getLocation(), entity );
		} else {
			world.spawnCreature( self.getLocation().add( 3, 0, 3 ), entity )
		}
	},
	zombie: function( self, drone ) {
		this.spawn( self, 'ZOMBIE', drone );
	}
}
