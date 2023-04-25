	// Iron Block
	// ServerEvents.recipes(event => {
	// 	event.shaped('minecraft:iron_block', [
	// 	'SSS',
	// 	'SSS',
	// 	'SSS'
	// 	], {
	// 	S: {tag: 'forge:ingots/wrought_iron'}
	// 	})
	// })
  
  // Copper Block
//   ServerEvents.recipes(event => {
// 	event.shaped('minecraft:copper_block', [
// 	  'SSS',
// 	  'SSS',
// 	  'SSS'
// 	], {
// 	  S: {tag: 'forge:ingots/copper'}
// 	})
//   })
  
  // Diamond Block
  ServerEvents.recipes(event => {
	event.shaped('minecraft:diamond_block', [
	  'SSS',
	  'SSS',
	  'SSS'
	], {
	  S: {tag: 'forge:gem/diamond'}
	})
  })
  
  // Emerald Block
  ServerEvents.recipes(event => {
	event.shaped('minecraft:emerald_block', [
	  'SSS',
	  'SSS',
	  'SSS'
	], {
	  S: {tag: 'forge:gem/emerald'}
	})
  })  
  
  // Amethyst Block
  ServerEvents.recipes(event => {
	event.shaped('minecraft:amethyst_block', [
	  'SSS',
	  'SSS',
	  'SSS'
	], {
	  S: {tag: 'forge:gem/amethyst'}
	})
  })  
  
  // Lapis Block
  ServerEvents.recipes(event => {
	event.shaped('minecraft:lapis_block', [
	  'SSS',
	  'SSS',
	  'SSS'
	], {
	  S: {tag: 'forge:gem/lapis_lazuli'}
	})
  }) 

  // Honey Block
  ServerEvents.recipes(event => {
	event.shaped('minecraft:honeycomb_block', [
	  'SSS',
	  'SSS',
	  'SSS'
	], {
	  S: {tag: 'forge:honeycomb'}
	})
  })

  // Gold Block
//   ServerEvents.recipes(event => {
// 	event.shaped('minecraft:gold_block', [
// 	  'SSS',
// 	  'SSS',
// 	  'SSS'
// 	], {
// 	  S: {tag: 'forge:ingots/gold'}
// 	})
//   })

  // lantern
  ServerEvents.recipes(event => {
	event.shaped('minecraft:lantern', [
	  ' S ',
	  'SAS',
	  ' S '
	], {
		S: {tag: 'forge:sheets/wrought_iron'},
		A: {tag: 'minecraft:candles'}
	})
  })



