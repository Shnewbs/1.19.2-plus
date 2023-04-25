// Listen to server recipe event
ServerEvents.recipes(event => {
	// Remove broken recipes from vanilla and other mods
	// This is on by default, so you don't need this line
	//event.removeBrokenRecipes = true

	//Haunting
	event.remove({id: 'gtceu:shapeless/block_compress_copper'})
	event.remove({id: 'minecraft:coal_block'})

})