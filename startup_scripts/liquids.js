StartupEvents.registry('fluid', event => {
  function capfirst(string) {
		return string[0].toUpperCase() + string.slice(1);
	  }
  var KubeJSChunkOres = ["almandine","aluminium","alunite","amethyst","apatite","asbestos","banded_iron","barite","bastnasite","bauxite","bentonite","beryllium","blue_topaz","bornite","brown_limonite","calcite","cassiterite","certus_quartz","chalcocite","chalcopyrite","chromite","cinnabar","coal","cobalt","cobaltite","cooperite","copper","diamond","diatomite","electrotine","emerald","fullers_earth","galena","garnet_red","garnet_yellow","garnierite","gold","graphite","green_sapphire","grossular","gypsum","ilmenite","iron","kyanite","lapis","lazurite","lead","lepidolite","lithium","magnesite","magnetite","malachite","mica","molybdenite","molybdenum","monazite","naquadah","neodymium","nether_quartz","nickel","oilsands","olivine","opal","palladium","pentlandite","pitchblende","platinum","plutonium","pollucite","powellite","pyrite","pyrochlore","pyrolusite","pyrope","quartzite","realgar","redstone","rock_salt","ruby","salt","saltpeter","sapphire","scheelite","silver","soapstone","sodalite","spessartine","sphalerite","spodumene","stibnite","sulfur","talc","tantalite","tetrahedrite","thorium","tin","topaz","tricalcium_phosphate","trona","tungstate","uraninite","vanadium_magnetite","wulfenite","yellow_limonite","zeolite"]
	
event.create('resin').thickTexture(0xDEB264).bucketColor(0xDEB264).displayName('Liquid Resin').luminosity(8)
event.create('andesite_alloy').thickTexture(0xD3D6CF).bucketColor(0xD3D6CF).displayName('Andesite Alloy').luminosity(8)
event.create('andesite').thickTexture(0xD3D6CF).bucketColor(0xD3D6CF).displayName('Andesite').luminosity(8)



//====================================================================================================================================================================\\
//                                                                          Dirty Slurry                                                                              \\
//====================================================================================================================================================================\\
KubeJSChunkOres.forEach(material => {
  let displayMaterial = capfirst(`${material}`)
              event.create(`dirty_${material}`).thickTexture(0x858159).bucketColor(0x858159).displayName(`Dirty ${displayMaterial} Slurry`).luminosity(8)
            })
//====================================================================================================================================================================\\
//                                                                          Clean Slurry                                                                              \\
//====================================================================================================================================================================\\

              event.create(`clean_almandine`).thickTexture(0xD78080).bucketColor(0xD78080).displayName(`Clean Almandine Slurry`).luminosity(8)
              event.create(`clean_aluminium`).thickTexture(0xB5D3E3).bucketColor(0xB5D3E3).displayName(`Clean Aluminium Slurry`).luminosity(8)
              event.create(`clean_alunite`).thickTexture(0xD9C799).bucketColor(0xD9C799).displayName(`Clean Alunite Slurry`).luminosity(8)
              event.create(`clean_amethyst`).thickTexture(0xB1A5C6).bucketColor(0xB1A5C6).displayName(`Clean Amethyst Slurry`).luminosity(8)
              event.create(`clean_apatite`).thickTexture(0xC7C7DA).bucketColor(0xC7C7DA).displayName(`Clean Apatite Slurry`).luminosity(8)
              event.create(`clean_asbestos`).thickTexture(0xC2BFBD).bucketColor(0xC2BFBD).displayName(`Clean Asbestos Slurry`).luminosity(8)
              event.create(`clean_banded_iron`).thickTexture(0xA09494).bucketColor(0xA09494).displayName(`Clean Banded Iron Slurry`).luminosity(8)
              event.create(`clean_barite`).thickTexture(0xC4C2C1).bucketColor(0xC4C2C1).displayName(`Clean Barite Slurry`).luminosity(8)
              event.create(`clean_bastnasite`).thickTexture(0xD0B39D).bucketColor(0xD0B39D).displayName(`Clean Bastnasite Slurry`).luminosity(8)
              event.create(`clean_bauxite`).thickTexture(0xC9A580).bucketColor(0xC9A580).displayName(`Clean Bauxite Slurry`).luminosity(8)
              //event.create(`clean_`).thickTexture(0xD9C799).bucketColor(0xD9C799).displayName(`Clean  Slurry`).luminosity(8)




    
    
})