ServerEvents.tags('item', event => {
	event.remove('forge:chests/wooden', 'minecraft:trapped_chest')
	event.remove('forge:chests/wooden', 'minecraft:chest')
	event.remove('minecraft:coal', 'minecraft:charcoal')

})