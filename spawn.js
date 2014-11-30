exports.spawn = {
	spawn: function( self, type, drone ) {
		var world = self.getWorld();
		var entity = org.bukkit.entity.EntityType[ type ];
		if( drone ) {
			world.spawnCreature( drone, entity );
		} else {
			world.spawnCreature( self.getLocation().add( 3, 0, 3 ), entity )
		}
	},
	zombie: function( self, drone ) {
		this.spawn( self, 'ZOMBIE', drone );
	},
	skeleton: function( self, drone ) {
		this.spawn( self, 'SKELETON', drone );
	},
	skeletons: function( self, number, drone ){
		if( number ){
			while( number > 0){
				this.skeleton( self, drone )
			 
				echo( number );
				number = number - 1;
			}
			
		}
	}
	
}
