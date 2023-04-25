// priority: 0

StartupEvents.registry('block', event => {    

	function capfirst(string) {
		return string[0].toUpperCase() + string.slice(1);
	  }

	const  materials = ['andesite', 'basalt', 'chalk', 'chert', 'claystone', 'conglomerate', 'dacite', 'diorite', 'gabbro', 'gneiss', 'granite', 'limestone', 'marble', 'phyllite', 'quartzite', 'rhyolite', 'schist', 'shale', 'slate']
		   materials.forEach(material => {

			let displayMaterial = capfirst(`${material}`)

	//Gold	
		event.create(`${material}_gold_ore_tfc`).displayName(`${displayMaterial} Gold Ore`).material("stone").model(`kubejs:block/material_sets/gold/${material}`).color(0, 0xD1BC41).defaultCutout()

	//Amethyst
		event.create(`${material}_amethyst_ore_tfc`).displayName(`${displayMaterial} Amethyst Ore`).material("stone").model(`kubejs:block/material_sets/amethyst/${material}`).color(0, 0x7B5DAF).defaultCutout()

	//Opal 
		event.create(`${material}_opal_ore_tfc`).displayName(`${displayMaterial} Opal Ore`).material("stone").model(`kubejs:block/material_sets/opal/${material}`).defaultCutout()

    //Almandine 
		event.create(`${material}_almandine_ore_tfc`).displayName(`${displayMaterial} Almandine Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0xED0000).defaultCutout()

	// Certus Quartz
		event.create(`${material}_certus_quartz_ore_tfc`).displayName(`${displayMaterial} Certus Quartz Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0x797999).defaultCutout()

	// Cinnabar
		event.create(`${material}_cinnabar_ore_tfc`).displayName(`${displayMaterial} Cinnabar Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0x8C0000).defaultCutout()

	// lazurite
		event.create(`${material}_lazurite_ore_tfc`).displayName(`${displayMaterial} Lazurite Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0x4957C0).defaultCutout()

	// malachite
		event.create(`${material}_malachite_ore_tfc`).displayName(`${displayMaterial} Malachite Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0x678F30).defaultCutout()

	// olivine
		event.create(`${material}_olivine_ore_tfc`).displayName(`${displayMaterial} Olivine Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0x8CED8C).defaultCutout()

	// quartzite
		event.create(`${material}_quartzite_ore_tfc`).displayName(`${displayMaterial} Quartzite Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0xA3B3A3).defaultCutout()
 
	// realgar
		event.create(`${material}_realgar_ore_tfc`).displayName(`${displayMaterial} Realgar Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0x921F21).defaultCutout()

	// rock_salt
		event.create(`${material}_rock_salt_ore_tfc`).displayName(`${displayMaterial} Rock Salt Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0xBF9F9F).defaultCutout()

	// salt
		event.create(`${material}_salt_ore_tfc`).displayName(`${displayMaterial} Salt Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0xCCCCCC).defaultCutout()

	// sodalite
		event.create(`${material}_sodalite_ore_tfc`).displayName(`${displayMaterial} Sodalite Ore`).material("stone").model(`kubejs:block/material_sets/gem/${material}`).color(0, 0x1010CC).defaultCutout()

	// blue_topaz
		event.create(`${material}_blue_topaz_ore_tfc`).displayName(`${displayMaterial} Blue Topaz Ore`).material("stone").model(`kubejs:block/material_sets/topaz/${material}`).color(0, 0x3B4869).defaultCutout()

	// topaz
		event.create(`${material}_topaz_ore_tfc`).displayName(`${displayMaterial} Topaz Ore`).material("stone").model(`kubejs:block/material_sets/topaz/${material}`).color(0, 0x7A3D00).defaultCutout() 

	// apatite
		event.create(`${material}_apatite_ore_tfc`).displayName(`${displayMaterial} Apatite Ore`).material("stone").model(`kubejs:block/material_sets/diamond/${material}`).color(0, 0xBABAED).defaultCutout() 
	
	// diamond
		event.create(`${material}_diamond_ore_tfc`).displayName(`${displayMaterial} Diamond Ore`).material("stone").model(`kubejs:block/material_sets/diamond/${material}`).color(0, 0x80F5F5).defaultCutout() 
	
	// emerald
		event.create(`${material}_emerald_ore_tfc`).displayName(`${displayMaterial} Emerald Ore`).material("stone").model(`kubejs:block/material_sets/diamond/${material}`).color(0, 0x4AED4A).defaultCutout() 

	// garnet
		event.create(`${material}_garnet_ore_tfc`).displayName(`${displayMaterial} Garnet Ore`).material("stone").model(`kubejs:block/material_sets/diamond/${material}`).color(0, 0x9F4F00).defaultCutout() 
	
	// garnet_red
		event.create(`${material}_garnet_red_ore_tfc`).displayName(`${displayMaterial} Red Garnet Ore`).material("stone").model(`kubejs:block/material_sets/diamond/${material}`).color(0, 0x602626).defaultCutout() 
	
	// garnet_yellow
		event.create(`${material}_garnet_yellow_ore_tfc`).displayName(`${displayMaterial} Yellow Garnet Ore`).material("stone").model(`kubejs:block/material_sets/diamond/${material}`).color(0, 0x838334).defaultCutout() 
	
	// grossular
		event.create(`${material}_grossular_ore_tfc`).displayName(`${displayMaterial} Grossular Ore`).material("stone").model(`kubejs:block/material_sets/diamond/${material}`).color(0, 0xBA5D00).defaultCutout() 
	
	// monazite
		event.create(`${material}_monazite_ore_tfc`).displayName(`${displayMaterial} Monazite Ore`).material("stone").model(`kubejs:block/material_sets/diamond/${material}`).color(0, 0x314531).defaultCutout() 
	
	// pyrope
		event.create(`${material}_pyrope_ore_tfc`).displayName(`${displayMaterial} Pyrope Ore`).material("stone").model(`kubejs:block/material_sets/diamond/${material}`).color(0, 0x4E2141).defaultCutout() 

	// spessartine
		event.create(`${material}_spessartine_ore_tfc`).displayName(`${displayMaterial} Spessartine Ore`).material("stone").model(`kubejs:block/material_sets/diamond/${material}`).color(0, 0x7A3030).defaultCutout() 

	// green_sapphire
		event.create(`${material}_green_sapphire_ore_tfc`).displayName(`${displayMaterial} Green Sapphire Ore`).material("stone").model(`kubejs:block/material_sets/ruby_sapphire/${material}`).color(0, 0x5DBA79).defaultCutout() 

	// sapphire
		event.create(`${material}_sapphire_ore_tfc`).displayName(`${displayMaterial} Sapphire Ore`).material("stone").model(`kubejs:block/material_sets/ruby_sapphire/${material}`).color(0, 0x5D5DBA).defaultCutout() 

	// ruby
		event.create(`${material}_ruby_ore_tfc`).displayName(`${displayMaterial} Ruby Ore`).material("stone").model(`kubejs:block/material_sets/ruby_sapphire/${material}`).color(0, 0x5B2424).defaultCutout() 

	// lapis
		event.create(`${material}_lapis_ore_tfc`).displayName(`${displayMaterial} Lapis Ore`).material("stone").model(`kubejs:block/material_sets/lapis/${material}`).color(0, 0x3838B0).defaultCutout() 

	// magnetite
		event.create(`${material}_magnetite_ore_tfc`).displayName(`${displayMaterial} Magnetite Ore`).material("stone").model(`kubejs:block/material_sets/magnetite/${material}`).color(0, 0x191919).defaultCutout() 

	// vanadium_magnetite
		event.create(`${material}_vanadium_magnetite_ore_tfc`).displayName(`${displayMaterial} Vanadium Magnetite Ore`).material("stone").model(`kubejs:block/material_sets/magnetite/${material}`).color(0, 0x1E1E34).defaultCutout() 

	// magnesite
		event.create(`${material}_magnesite_ore_tfc`).displayName(`${displayMaterial} Magnesite Ore`).material("stone").model(`kubejs:block/material_sets/magnetite/${material}`).color(0, 0xACAC88).defaultCutout() 

	// coal
		event.create(`${material}_coal_ore_tfc`).displayName(`${displayMaterial} Coal Ore`).material("stone").model(`kubejs:block/material_sets/lignite/${material}`).color(0, 0x414141).defaultCutout() 

	// oilsands
		event.create(`${material}_oilsands_ore_tfc`).displayName(`${displayMaterial} Oilsands Ore`).material("stone").model(`kubejs:block/material_sets/lignite/${material}`).color(0, 0x080808).defaultCutout() 

	// banded_iron
		event.create(`${material}_banded_iron_ore_tfc`).displayName(`${displayMaterial} Banded Iron Ore`).material("stone").model(`kubejs:block/material_sets/iron/${material}`).color(0, 0x845252).defaultCutout() 

	// brown_limonite
		event.create(`${material}_brown_limonite_ore_tfc`).displayName(`${displayMaterial} Brown Limonite Ore`).material("stone").model(`kubejs:block/material_sets/iron/${material}`).color(0, 0xAE5700).defaultCutout() 

	// iron
		event.create(`${material}_iron_ore_tfc`).displayName(`${displayMaterial} Iron Ore`).material("stone").model(`kubejs:block/material_sets/iron/${material}`).color(0, 0xB4B4B4).defaultCutout() 

	// pyrite
		event.create(`${material}_pyrite_ore_tfc`).displayName(`${displayMaterial} Pyrite Ore`).material("stone").model(`kubejs:block/material_sets/iron/${material}`).color(0, 0x735C1F).defaultCutout() 

	// yellow_limonite
		event.create(`${material}_yellow_limonite_ore_tfc`).displayName(`${displayMaterial} Yellow Limonite Ore`).material("stone").model(`kubejs:block/material_sets/iron/${material}`).color(0, 0x818100).defaultCutout() 

	// basaltic
		event.create(`${material}_basaltic_ore_tfc`).displayName(`${displayMaterial} Basaltic Ore`).material("stone").model(`kubejs:block/material_sets/iron/${material}`).color(0, 0x212921).defaultCutout() 

	// granitic
		event.create(`${material}_granitic_ore_tfc`).displayName(`${displayMaterial} Granitic Ore`).material("stone").model(`kubejs:block/material_sets/iron/${material}`).color(0, 0x1E2D2D).defaultCutout() 

	// bornite
		event.create(`${material}_bornite_ore_tfc`).displayName(`${displayMaterial} Bornite Ore`).material("stone").model(`kubejs:block/material_sets/copper/${material}`).color(0, 0x65441D).defaultCutout() 

	// chalcocite
		event.create(`${material}_chalcocite_ore_tfc`).displayName(`${displayMaterial} Chalcocite Ore`).material("stone").model(`kubejs:block/material_sets/copper/${material}`).color(0, 0x313131).defaultCutout() 

	// chalcopyrite
		event.create(`${material}_chalcopyrite_ore_tfc`).displayName(`${displayMaterial} Chalcopyrite Ore`).material("stone").model(`kubejs:block/material_sets/copper/${material}`).color(0, 0x836221).defaultCutout() 

	// copper
		event.create(`${material}_copper_ore_tfc`).displayName(`${displayMaterial} Copper Ore`).material("stone").model(`kubejs:block/material_sets/copper/${material}`).color(0, 0x8F3800).defaultCutout() 

	// tetrahedrite
		event.create(`${material}_tetrahedrite_ore_tfc`).displayName(`${displayMaterial} Tetrahedrite Ore`).material("stone").model(`kubejs:block/material_sets/copper/${material}`).color(0, 0xBA1E00).defaultCutout() 

	// cobaltite
		event.create(`${material}_cobaltite_ore_tfc`).displayName(`${displayMaterial} Cobaltite Ore`).material("stone").model(`kubejs:block/material_sets/cobalt/${material}`).color(0, 0x4545D8).defaultCutout() 

	// cobalt
		event.create(`${material}_cobalt_ore_tfc`).displayName(`${displayMaterial} Cobalt Ore`).material("stone").model(`kubejs:block/material_sets/cobalt/${material}`).color(0, 0x313199).defaultCutout() 

	// galena
		event.create(`${material}_galena_ore_tfc`).displayName(`${displayMaterial} Galena Ore`).material("stone").model(`kubejs:block/material_sets/lead/${material}`).color(0, 0x573457).defaultCutout() 

	// lead
		event.create(`${material}_lead_ore_tfc`).displayName(`${displayMaterial} Lead Ore`).material("stone").model(`kubejs:block/material_sets/lead/${material}`).color(0, 0x4F384F).defaultCutout() 

	// aluminium
		event.create(`${material}_aluminium_ore_tfc`).displayName(`${displayMaterial} Aluminium Ore`).material("stone").model(`kubejs:block/material_sets/metal/${material}`).color(0, 0x69A4C4).defaultCutout() 

	// palladium
		event.create(`${material}_palladium_ore_tfc`).displayName(`${displayMaterial} Palladium Ore`).material("stone").model(`kubejs:block/material_sets/metal/${material}`).color(0, 0x4B4B4B).defaultCutout() 

	// platinum
		event.create(`${material}_platinum_ore_tfc`).displayName(`${displayMaterial} Platinum Ore`).material("stone").model(`kubejs:block/material_sets/metal/${material}`).color(0, 0xE8E8B6).defaultCutout() 

	// silver
		event.create(`${material}_silver_ore_tfc`).displayName(`${displayMaterial} Silver Ore`).material("stone").model(`kubejs:block/material_sets/metal/${material}`).color(0, 0xA7A7C2).defaultCutout() 

	// beryllium
		event.create(`${material}_beryllium_ore_tfc`).displayName(`${displayMaterial} Beryllium Ore`).material("stone").model(`kubejs:block/material_sets/gregtech/${material}`).color(0, 0x5BA45B).defaultCutout() 

	// molybdenite
		event.create(`${material}_molybdenite_ore_tfc`).displayName(`${displayMaterial} Molybdenite Ore`).material("stone").model(`kubejs:block/material_sets/gregtech/${material}`).color(0, 0x191919).defaultCutout() 

	// molybdenum
		event.create(`${material}_molybdenum_ore_tfc`).displayName(`${displayMaterial} Molybdenum Ore`).material("stone").model(`kubejs:block/material_sets/gregtech/${material}`).color(0, 0x65657C).defaultCutout() 

	// naquadah
		event.create(`${material}_naquadah_ore_tfc`).displayName(`${displayMaterial} Naquadah Ore`).material("stone").model(`kubejs:block/material_sets/gregtech/${material}`).color(0, 0x2B2B2B).defaultCutout() 

	// neodymium
		event.create(`${material}_neodymium_ore_tfc`).displayName(`${displayMaterial} Neodymium Ore`).material("stone").model(`kubejs:block/material_sets/gregtech/${material}`).color(0, 0x383838).defaultCutout() 

	// plutonium
		event.create(`${material}_plutonium_ore_tfc`).displayName(`${displayMaterial} Plutonium Ore`).material("stone").model(`kubejs:block/material_sets/gregtech/${material}`).color(0, 0xDD2E2E).defaultCutout() 

	// pyrolusite
		event.create(`${material}_pyrolusite_ore_tfc`).displayName(`${displayMaterial} Pyrolusite Ore`).material("stone").model(`kubejs:block/material_sets/gregtech/${material}`).color(0, 0x7B7B8B).defaultCutout() 

	// stibnite
		event.create(`${material}_stibnite_ore_tfc`).displayName(`${displayMaterial} Stibnite Ore`).material("stone").model(`kubejs:block/material_sets/gregtech/${material}`).color(0, 0x3B3B3B).defaultCutout() 

	// thorium
		event.create(`${material}_thorium_ore_tfc`).displayName(`${displayMaterial} Thorium Ore`).material("stone").model(`kubejs:block/material_sets/gregtech/${material}`).color(0, 0x001900).defaultCutout() 

	// tungstate
		event.create(`${material}_tungstate_ore_tfc`).displayName(`${displayMaterial} Tungstate Ore`).material("stone").model(`kubejs:block/material_sets/gregtech/${material}`).color(0, 0x2E2A1D).defaultCutout() 

	// bentonite
		event.create(`${material}_bentonite_ore_tfc`).displayName(`${displayMaterial} Bentonite Ore`).material("stone").model(`kubejs:block/material_sets/sulfur/${material}`).color(0, 0x9C8985).defaultCutout() 

	// fullers_earth
		event.create(`${material}_fullers_earth_ore_tfc`).displayName(`${displayMaterial} Fullers Earth Ore`).material("stone").model(`kubejs:block/material_sets/sulfur/${material}`).color(0, 0x848463).defaultCutout() 

	// kyanite
		event.create(`${material}_kyanite_ore_tfc`).displayName(`${displayMaterial} Kyanite Ore`).material("stone").model(`kubejs:block/material_sets/sulfur/${material}`).color(0, 0x5858C8).defaultCutout() 

	// pitchblende
		event.create(`${material}_pitchblende_ore_tfc`).displayName(`${displayMaterial} Pitchblende Ore`).material("stone").model(`kubejs:block/material_sets/sulfur/${material}`).color(0, 0xC1CB00).defaultCutout() 

	// pollucite
		event.create(`${material}_pollucite_ore_tfc`).displayName(`${displayMaterial} Pollucite Ore`).material("stone").model(`kubejs:block/material_sets/sulfur/${material}`).color(0, 0x857575).defaultCutout() 

	// sulfur
		event.create(`${material}_sulfur_ore_tfc`).displayName(`${displayMaterial} Sulfur Ore`).material("stone").model(`kubejs:block/material_sets/sulfur/${material}`).color(0, 0xA4A400).defaultCutout() 

	// pyrochlore
		event.create(`${material}_pyrochlore_ore_tfc`).displayName(`${displayMaterial} Pyrochlore Ore`).material("stone").model(`kubejs:block/material_sets/salt/${material}`).color(0, 0x270F00).defaultCutout() 

	// soapstone
		event.create(`${material}_soapstone_ore_tfc`).displayName(`${displayMaterial} Soapstone Ore`).material("stone").model(`kubejs:block/material_sets/salt/${material}`).color(0, 0x4E774E).defaultCutout() 

	// talc
		event.create(`${material}_talc_ore_tfc`).displayName(`${displayMaterial} Talc Ore`).material("stone").model(`kubejs:block/material_sets/salt/${material}`).color(0, 0x428442).defaultCutout() 

	// tricalcium_phosphate
		event.create(`${material}_tricalcium_phosphate_ore_tfc`).displayName(`${displayMaterial} Tricalcium Phosphate Ore`).material("stone").model(`kubejs:block/material_sets/salt/${material}`).color(0, 0xDCDC00).defaultCutout() 

	// trona
		event.create(`${material}_trona_ore_tfc`).displayName(`${displayMaterial} Trona Ore`).material("stone").model(`kubejs:block/material_sets/salt/${material}`).color(0, 0x7E7E58).defaultCutout() 

	// alunite
		event.create(`${material}_alunite_ore_tfc`).displayName(`${displayMaterial} Alunite Ore`).material("stone").model(`kubejs:block/material_sets/powder/${material}`).color(0, 0xB89335).defaultCutout() 

	// asbestos
		event.create(`${material}_asbestos_ore_tfc`).displayName(`${displayMaterial} Asbestos Ore`).material("stone").model(`kubejs:block/material_sets/powder/${material}`).color(0, 0xACAC88).defaultCutout() 

	// barite
		event.create(`${material}_barite_ore_tfc`).displayName(`${displayMaterial} Barite Ore`).material("stone").model(`kubejs:block/material_sets/powder/${material}`).color(0, 0xBCC0C0).defaultCutout() 

	// bastnasite
		event.create(`${material}_bastnasite_ore_tfc`).displayName(`${displayMaterial} Bastnasite Ore`).material("stone").model(`kubejs:block/material_sets/powder/${material}`).color(0, 0x683917).defaultCutout() 

	// bauxite
		event.create(`${material}_bauxite_ore_tfc`).displayName(`${displayMaterial} Bauxite Ore`).material("stone").model(`kubejs:block/material_sets/powder/${material}`).color(0, 0xAC5600).defaultCutout() 

	// calcite
		event.create(`${material}_calcite_ore_tfc`).displayName(`${displayMaterial} Calcite Ore`).material("stone").model(`kubejs:block/material_sets/powder/${material}`).color(0, 0xCDBCB4).defaultCutout() 

	// chromite
		event.create(`${material}_chromite_ore_tfc`).displayName(`${displayMaterial} Chromite Ore`).material("stone").model(`kubejs:block/material_sets/powder/${material}`).color(0, 0x1E110D).defaultCutout() 

	// cooperite
		event.create(`${material}_cooperite_ore_tfc`).displayName(`${displayMaterial} Cooperite Ore`).material("stone").model(`kubejs:block/material_sets/powder/${material}`).color(0, 0xDEDEAE).defaultCutout() 

	// glauconite
		event.create(`${material}_glauconite_ore_tfc`).displayName(`${displayMaterial} Glauconite Ore`).material("stone").model(`kubejs:block/material_sets/powder/${material}`).color(0, 0x678F30).defaultCutout() 

	// graphite
		event.create(`${material}_graphite_ore_tfc`).displayName(`${displayMaterial} Graphite Ore`).material("stone").model(`kubejs:block/material_sets/graphite/${material}`).color(0, 0x676767).defaultCutout() 

	// ilmenite
		event.create(`${material}_ilmenite_ore_tfc`).displayName(`${displayMaterial} Ilmenite Ore`).material("stone").model(`kubejs:block/material_sets/graphite/${material}`).color(0, 0x3C2F2B).defaultCutout() 

	// lepidolite
		event.create(`${material}_lepidolite_ore_tfc`).displayName(`${displayMaterial} Lepidolite Ore`).material("stone").model(`kubejs:block/material_sets/graphite/${material}`).color(0, 0xB02567).defaultCutout() 

	// lithium
		event.create(`${material}_lithium_ore_tfc`).displayName(`${displayMaterial} Lithium Ore`).material("stone").model(`kubejs:block/material_sets/graphite/${material}`).color(0, 0xA1AABB).defaultCutout() 

	// mica
		event.create(`${material}_mica_ore_tfc`).displayName(`${displayMaterial} Mica Ore`).material("stone").model(`kubejs:block/material_sets/graphite/${material}`).color(0, 0xA2A2AA).defaultCutout() 

	// spodumene
		event.create(`${material}_spodumene_ore_tfc`).displayName(`${displayMaterial} Spodumene Ore`).material("stone").model(`kubejs:block/material_sets/graphite/${material}`).color(0, 0xB19E9E).defaultCutout() 

	// diatomite
		event.create(`${material}_diatomite_ore_tfc`).displayName(`${displayMaterial} Diatomite Ore`).material("stone").model(`kubejs:block/material_sets/graphite/${material}`).color(0, 0x86869C).defaultCutout() 

	// electrotine
		event.create(`${material}_electrotine_ore_tfc`).displayName(`${displayMaterial} Electrotine Ore`).material("stone").model(`kubejs:block/material_sets/electric_powder/${material}`).color(0, 0x37A6B8).defaultCutout() 

	// redstone
		event.create(`${material}_redstone_ore_tfc`).displayName(`${displayMaterial} Redstone Ore`).material("stone").model(`kubejs:block/material_sets/electric_powder/${material}`).color(0, 0x500000).defaultCutout() 

	// cassiterite
		event.create(`${material}_cassiterite_ore_tfc`).displayName(`${displayMaterial} Cassiterite Ore`).material("stone").model(`kubejs:block/material_sets/tin/${material}`).color(0, 0xBFBFBF).defaultCutout() 

	// tin
		event.create(`${material}_tin_ore_tfc`).displayName(`${displayMaterial} Tin Ore`).material("stone").model(`kubejs:block/material_sets/tin/${material}`).color(0, 0xBFBFBF).defaultCutout() 

	// garnierite
		event.create(`${material}_garnierite_ore_tfc`).displayName(`${displayMaterial} Garnierite Ore`).material("stone").model(`kubejs:block/material_sets/metal/${material}`).color(0, 0x2DB640).defaultCutout() 

	// pentlandite
		event.create(`${material}_pentlandite_ore_tfc`).displayName(`${displayMaterial} Pentlandite Ore`).material("stone").model(`kubejs:block/material_sets/metal/${material}`).color(0, 0x7C7104).defaultCutout() 

	// nickel
		event.create(`${material}_nickel_ore_tfc`).displayName(`${displayMaterial} Nickel Ore`).material("stone").model(`kubejs:block/material_sets/metal/${material}`).color(0, 0xA4A4CD).defaultCutout() 

	// sphalerite
		event.create(`${material}_sphalerite_ore_tfc`).displayName(`${displayMaterial} Sphalerite Ore`).material("stone").model(`kubejs:block/material_sets/zinc/${material}`).color(0, 0xD1D1D1).defaultCutout() 

	// gypsum
		event.create(`${material}_gypsum_ore_tfc`).displayName(`${displayMaterial} Gypsum Ore`).material("stone").model(`kubejs:block/material_sets/gypsum/${material}`).color(0, 0xBCBCCD).defaultCutout() 

	// powellite
		event.create(`${material}_powellite_ore_tfc`).displayName(`${displayMaterial} Powellite Ore`).material("stone").model(`kubejs:block/material_sets/gypsum/${material}`).color(0, 0xDEDE00).defaultCutout() 

	// saltpeter
		event.create(`${material}_saltpeter_ore_tfc`).displayName(`${displayMaterial} Saltpeter Ore`).material("stone").model(`kubejs:block/material_sets/gypsum/${material}`).color(0, 0xB7B7B7).defaultCutout() 

	// scheelite
		event.create(`${material}_scheelite_ore_tfc`).displayName(`${displayMaterial} Scheelite Ore`).material("stone").model(`kubejs:block/material_sets/gypsum/${material}`).color(0, 0xAE7A11).defaultCutout() 

	// tantalite
		event.create(`${material}_tantalite_ore_tfc`).displayName(`${displayMaterial} Tantalite Ore`).material("stone").model(`kubejs:block/material_sets/gypsum/${material}`).color(0, 0x7E4623).defaultCutout() 

	// uraninite
		event.create(`${material}_uraninite_ore_tfc`).displayName(`${displayMaterial} Uraninite Ore`).material("stone").model(`kubejs:block/material_sets/gypsum/${material}`).color(0, 0x191919).defaultCutout() 

	// wulfenite
		event.create(`${material}_wulfenite_ore_tfc`).displayName(`${displayMaterial} Wulfenite Ore`).material("stone").model(`kubejs:block/material_sets/gypsum/${material}`).color(0, 0xC46200).defaultCutout()

	// zeolite
		event.create(`${material}_zeolite_ore_tfc`).displayName(`${displayMaterial} Zeolite Ore`).material("stone").model(`kubejs:block/material_sets/gypsum/${material}`).color(0, 0xC4BCBC).defaultCutout()

	// nether_quartz
		event.create(`${material}_nether_quartz_ore_tfc`).displayName(`${displayMaterial} Nether Quartz Ore`).material("stone").model(`kubejs:block/material_sets/nether_quartz/${material}`).color(0, 0x807584).defaultCutout()
	

    
})})
	

