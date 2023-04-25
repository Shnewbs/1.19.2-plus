// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')
function capfirst(string) {
	return string[0].toUpperCase() + string.slice(1);
  }

    
    var toolHeads = ["axe","pickaxe","hammer","hoe","saw","shovel","sword","file"]
    var molds = ["plate","plate.double","name","rotor","wire","credit","bottle","ingot","ball","block","gear","gear.small","frame.box","bolt","screw","spring","spring.small"]
    var fluidPipes = ["pipe.huge","pipe.large","pipe.normal","pipe.small","pipe.tiny"]
    var extruderMolds = ["casing","cell","foil","ring","rod","rod_long",]
    
    var GTCEUToolFluids = ["aluminium","iron","titanium","neutronium","duranium","bronze", /*"diamond",*/ "invar","sterling_silver","rose_gold","stainless_steel","steel","ultimet","wrought_iron","tungsten_carbide","damascus_steel","tungsten_steel","cobalt_brass","vanadium_steel","naquadah_alloy","red_steel","blue_steel","hsse"]

    var metalMoldFrameBox = ["aluminium","europium","titanium","neutronium","tritanium","bronze","invar","stainless_steel","steel","polytetrafluoroethylene","black_steel","tungsten_steel","naquadah_alloy","blue_steel","hssg","hsse","hsss"]
    var metalMoldRodLong = ["aluminium","annealed_copper","bismuth_bronze","black_bronze","brass","bronze","cobalt_brass","copper","cupronickel","darmstadtium","electrum","europium","gold","hsse","hssg","hsss","invar","iridium","iron","kanthal","lead","magnalium","naquadah_alloy","naquadah","nichrome","niobium_titanium","osmiridium","osmium","platinum","potin","rhodium_plated_palladium","rhodium","rose_gold",/*"ruridit",*//*"samarium_magnetic",*/"samarium","silver","stainless_steel","steel","sterling_silver","tin_alloy","tin","titanium","tritanium","tungsten_carbide","tungsten_steel","tungsten","ultimet","vanadium_gallium","vanadium_steel",/*"wood",*/"wrought_iron","yttrium_barium_cuprate"]
    var metalMoldRodSmall = ["aluminium","americium",/*"amethyst",*/"annealed_copper",/*"apatite",*/"battery_alloy","bismuth_bronze","black_bronze","black_steel","blue_alloy","blue_steel",/*"blue_topaz",*/"brass","bronze","chrome","cobalt_brass","cobalt","copper","cupronickel","damascus_steel","darmstadtium",/*"diamond",*/"duranium","electrum",/*"emerald",*/"europium",/*"garnet_red","garnet_yellow",*/"gold",/*"green_sapphire",*/"hsse","hssg","hsss","invar","iridium",/*"iron_magnetic",*/"iron","kanthal",/*"lapis","lazurite",*/"lead","magnalium","manganese","molybdenum","naquadah_alloy","naquadah_enriched","naquadah","naquadria",/*"neodymium_magnetic",*/"neodymium","neutronium","nichrome","nickel_zinc_ferrite","niobium_nitride","niobium_titanium",/*"olivine","opal",*/"osmiridium","osmium","palladium","platinum","plutonium_241","polyphenylene_sulfide","polytetrafluoroethylene","polyvinyl_chloride","potin","red_alloy","red_steel","rhodium_plated_palladium","rhodium","rose_gold","rubber",/*"ruby","ruridit",*/"ruthenium",/*"samarium_magnetic",*/"samarium",/*"sapphire",*/"silicone_rubber","silver",/*"sodalite",*/"stainless_steel",/*"steel_magnetic",*/"steel","sterling_silver",/*"stone",*/"styrene_butadiene_rubber","thorium","tin_alloy","tin","titanium",/*"topaz","treated_wood",*/"trinium","tritanium","tungsten_carbide","tungsten_steel","tungsten","ultimet","uranium_235","uranium","vanadium_gallium","vanadium_steel","wrought_iron","yttrium_barium_cuprate","zinc"]
    var metalMoldPlate = ["aluminium","americium","annealed_copper","battery_alloy","beryllium","bismuth_bronze","black_bronze","black_steel","blue_alloy","blue_steel","brass","bronze","chrome","cobalt_brass","cobalt","copper","cupronickel","damascus_steel","darmstadtium","duranium","electrum","enriched_naquadah_trinium_europium_duranide","epoxy","europium","gallium_arsenide","gallium","glass","glowstone","gold","hsse","hssg","hsss","indium_gallium_phosphide","indium_tin_barium_titanium_cuprate","invar","iridium","iron","kanthal","lead","magnalium","manganese","molybdenum","naquadah_alloy","naquadah_enriched","naquadah","naquadria","neodymium","neutronium","nichrome","nickel","niobium_nitride","niobium_titanium","osmiridium","osmium","palladium","plastic","platinum","plutonium_241","polybenzimidazole","polycaprolactam","polyphenylene_sulfide","polytetrafluoroethylene","polyvinyl_butyral","polyvinyl_chloride","potin","red_alloy","red_steel","redstone","reinforced_epoxy_resin","rhodium_plated_palladium","rhodium","rose_gold","rubber","ruthenium","silicon","silicone_rubber","silver","stainless_steel","steel","sterling_silver",/*"stone",*/"styrene_butadiene_rubber","tantalum","thorium","tin_alloy","tin","titanium","trinium","tritanium","tungsten_carbide","tungsten_steel","tungsten","ultimet","uranium_235","uranium_rhodium_dinaquadide","uranium","vanadium_gallium","vanadium_steel","wrought_iron","yttrium_barium_cuprate","zinc"]
    var metalMoldPlateDouble = ["aluminium","americium","annealed_copper","battery_alloy","beryllium","bismuth_bronze","black_bronze","black_steel","blue_alloy","blue_steel","brass","bronze","chrome","cobalt_brass","cobalt","copper","cupronickel","damascus_steel","darmstadtium","duranium","electrum","enriched_naquadah_trinium_europium_duranide","europium","gallium_arsenide","gallium","glass","gold","hsse","hssg","hsss","indium_gallium_phosphide","indium_tin_barium_titanium_cuprate","invar","iridium","iron","kanthal","lead","magnalium","manganese","molybdenum","naquadah_alloy","naquadah_enriched","naquadah","naquadria","neodymium","neutronium","nichrome","nickel","niobium_nitride","niobium_titanium","osmiridium","osmium","palladium","platinum","plutonium_241","polybenzimidazole","potin","red_alloy","red_steel","rhodium_plated_palladium","rhodium","rose_gold","ruthenium","silicon","silver","stainless_steel","steel","sterling_silver",/*"stone",*//*"styrene_butadiene_rubber",*/"tantalum","thorium","tin_alloy","tin","titanium","trinium","tritanium","tungsten_carbide","tungsten_steel","tungsten","ultimet","uranium_235","uranium_rhodium_dinaquadide","uranium","vanadium_gallium","vanadium_steel","wrought_iron","yttrium_barium_cuprate","zinc"]
    var metalMoldName = []
    var metalMoldRotor = []
    var metalMoldWire = ["aluminium","annealed_copper","black_steel","blue_alloy","cobalt","copper","cupronickel","electrum","enriched_naquadah_trinium_europium_duranide","europium","gold","hssg","indium_tin_barium_titanium_cuprate","iron","kanthal","lead","magnesium_diboride","manganese_phosphide","mercury_barium_calcium_cuprate","naquadah_alloy","naquadah","nichrome","nickel","niobium_nitride","niobium_titanium","osmium","platinum","red_alloy","ruthenium_trinium_americium_neutronate","samarium_iron_arsenic_oxide","silver","steel","tin","trinium","tritanium","tungsten_steel","tungsten","uranium_rhodium_dinaquadide","uranium_triplatinum","vanadium_gallium","yttrium_barium_cuprate"]
    var metalMoldCredit = []
    var metalMoldBottle = []
    var metalMoldIngot = ["aluminium","americium","annealed_copper","antimony","battery_alloy","beryllium","bismuth_bronze","bismuth","black_bronze","black_steel","blue_alloy","blue_steel","borosilicate_glass","brass","bronze","chrome","cobalt_brass","cobalt","cupronickel","damascus_steel","darmstadtium","duranium","electrum","enriched_naquadah_trinium_europium_duranide","epoxy","europium","gallium_arsenide","gallium","hsse","hssg","hsss","indium_gallium_phosphide","indium_tin_barium_titanium_cuprate","indium","invar","iridium","kanthal","lead","magnalium","magnesium_diboride","manganese_phosphide","manganese","mercury_barium_calcium_cuprate","molybdenum","naquadah_alloy","naquadah_enriched","naquadah","naquadria","neodymium","neutronium","nichrome","nickel_zinc_ferrite","nickel","niobium_nitride","niobium_titanium","niobium","osmiridium","osmium","palladium","plastic","platinum","plutonium_241","plutonium","polybenzimidazole","polycaprolactam","polyphenylene_sulfide","polytetrafluoroethylene","polyvinyl_butyral","polyvinyl_chloride","potin","raw_rubber","red_alloy","red_steel","reinforced_epoxy_resin","rhodium_plated_palladium","rhodium","rose_gold","rubber","ruthenium_trinium_americium_neutronate","ruthenium","samarium_iron_arsenic_oxide","samarium","silicon","silicone_rubber","silver","soldering_alloy","stainless_steel","steel","sterling_silver","styrene_butadiene_rubber","tantalum","thorium","tin_alloy","tin","titanium","trinium","tritanium","tungsten_carbide","tungsten_steel","tungsten","ultimet","uranium_235","uranium_rhodium_dinaquadide","uranium_triplatinum","uranium","vanadium_gallium","vanadium_steel","vanadium","wrought_iron","yttrium_barium_cuprate","yttrium","zinc"]
    var metalMoldBall = []
    var metalMoldBlock = ["redstone", "aluminium","americium","annealed_copper","antimony","battery_alloy","beryllium","bismuth_bronze","bismuth","black_bronze","black_steel","blue_alloy","blue_steel","borosilicate_glass","brass","bronze","chrome","cobalt_brass","cobalt","copper","gold","iron","cupronickel","damascus_steel","darmstadtium","duranium","electrum","enriched_naquadah_trinium_europium_duranide","epoxy","europium","gallium_arsenide","gallium","hsse","hssg","hsss","indium_gallium_phosphide","indium_tin_barium_titanium_cuprate","indium","invar","iridium","kanthal","lead","magnalium","magnesium_diboride","manganese_phosphide","manganese","mercury_barium_calcium_cuprate","molybdenum","naquadah_alloy","naquadah_enriched","naquadah","naquadria","neodymium","neutronium","nichrome","nickel_zinc_ferrite","nickel","niobium_nitride","niobium_titanium","niobium","osmiridium","osmium","palladium","plastic","platinum","plutonium_241","plutonium","polybenzimidazole","polycaprolactam","polyphenylene_sulfide","polytetrafluoroethylene","polyvinyl_butyral","polyvinyl_chloride","potin","red_alloy","red_steel","reinforced_epoxy_resin","rhodium_plated_palladium","rhodium","rose_gold","rubber","ruthenium_trinium_americium_neutronate","ruthenium","samarium_iron_arsenic_oxide","samarium","silicon","silicone_rubber","silver","soldering_alloy","stainless_steel","steel","sterling_silver","styrene_butadiene_rubber","tantalum","thorium","tin_alloy","tin","titanium","trinium","tritanium","tungsten_carbide","tungsten_steel","tungsten","ultimet","uranium_235","uranium_rhodium_dinaquadide","uranium_triplatinum","uranium","vanadium_gallium","vanadium_steel","vanadium","wrought_iron","yttrium_barium_cuprate","yttrium","zinc"]
	var metalMoldGear = ["aluminium","black_bronze","black_steel","blue_steel","bronze","cobalt_brass","duranium","hssg","hsss","invar","iridium","iron","naquadah_alloy","naquadria","osmiridium","potin","red_steel","rhodium","rubber","ruridit","ruthenium","silicone_rubber","stainless_steel","steel",/*"stone",*/"titanium","trinium","tritanium","tungsten_carbide","tungsten_steel","tungsten","ultimet","vanadium_steel",/*"wood",*/"wrought_iron"]
	var metalMoldGearSmall = []
    var metalMoldCable = ["aluminium","annealed_copper","black_steel","blue_alloy","cobalt","copper","cupronickel","electrum","enriched_naquadah_trinium_europium_duranide","europium","gold","hssg","indium_tin_barium_titanium_cuprate","iron","kanthal","lead","magnesium_diboride","manganese_phosphide","mercury_barium_calcium_cuprate","naquadah_alloy","naquadah","nichrome","nickel","niobium_nitride","niobium_titanium","osmium","platinum","red_alloy","ruthenium_trinium_americium_neutronate","samarium_iron_arsenic_oxide","silver","steel","tin","trinium","tritanium","tungsten_steel","tungsten","uranium_rhodium_dinaquadide","uranium_triplatinum","vanadium_gallium","yttrium_barium_cuprate"]
	var metalMoldFluidPipe = ["aluminium","bronze","chrome","copper","duranium","europium","gold","iridium","lead","naquadah","neutronium","niobium_titanium","plastic","polybenzimidazole","polytetrafluoroethylene","potin","stainless_steel","steel","tin_alloy","titanium","tungsten_carbide","tungsten_steel","tungsten","vanadium_steel"]


StartupEvents.registry('item', event => {
	event.create('unfired.clay.empty.casting.plate').displayName('Unfired Clay Casting Plate (Blank)').texture("kubejs:item/molds/shape.empty").color(0, 0xA2A9B4)
	event.create('fired.clay.empty.casting.plate').displayName('Fired Casting Plate (Blank)').texture("kubejs:item/molds/shape.empty").color(0, 0x514137)

    fluidPipes.forEach(pipes => {
        let displayMaterial = capfirst(`${pipes}`)
    
        event.create(`fired.clay.casting.${pipes}`).displayName(`Fired Clay Casting ${displayMaterial}`).texture(`kubejs:item/molds/shape.extruder.${pipes}`).color(0, 0x514137)})
        
    extruderMolds.forEach(extruder => {
        let displayMaterial = capfirst(`${extruder}`)
        event.create(`fired.clay.casting.${extruder}`).displayName(`Fired Clay Casting ${displayMaterial}`).texture(`kubejs:item/molds/shape.extruder.${extruder}`).color(0, 0x514137)})
    
        toolHeads.forEach(tool => {
        let displayMaterial = capfirst(`${tool}`)

        event.create(`fired.clay.casting.${tool}`).displayName(`Fired Clay Casting ${displayMaterial}`).texture(`kubejs:item/molds/shape.extruder.${tool}`).color(0, 0x514137)})

        
    molds.forEach(mold => {
        let displayMaterial = capfirst(`${mold}`)
        event.create(`fired.clay.casting.${mold}`).displayName(`Fired Clay Casting ${displayMaterial}`).texture(`kubejs:item/molds/shape.mold.${mold}`).color(0, 0x514137)})



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CASTING ITEMS [HOT]~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

            metalMoldGear.forEach(gear => {
            let displayMaterial = capfirst(`${gear}`)
            event.create(`fired.clay.metal.gear.${gear}.hot`).displayName(`${displayMaterial} Casted Gear [HOT]`).parentModel("kubejs:item/metal_in_mold/mold.gear").texture("kubejs:item/metal_in_molds/shape.mold.gear").color(0, 0x514137)})
      
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

            metalMoldBlock.forEach(block => {
            let displayMaterial = capfirst(`${block}`)
            event.create(`fired.clay.metal.block.${block}.hot`).displayName(`${displayMaterial} Casted Block [HOT]`).parentModel("kubejs:item/metal_in_mold/mold.block").texture("kubejs:item/metal_in_molds/shape.mold.block").color(0, 0x514137)})
      
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

            metalMoldWire.forEach(wire => {
            let displayMaterial = capfirst(`${wire}`)
            event.create(`fired.clay.metal.wire.${wire}.hot`).displayName(`${displayMaterial} Casted Wire [HOT]`).parentModel("kubejs:item/metal_in_mold/mold.wire").texture("kubejs:item/metal_in_molds/shape.mold.wire").color(0, 0x514137)})
      
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

            metalMoldPlate.forEach(plate => {
            let displayMaterial = capfirst(`${plate}`)
            event.create(`fired.clay.metal.plate.${plate}.hot`).displayName(`${displayMaterial} Casted Plate [HOT]`).parentModel("kubejs:item/metal_in_mold/mold.plate").texture("kubejs:item/metal_in_molds/shape.mold.plate").color(0, 0x514137)})
                  
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

            metalMoldPlateDouble.forEach(doubleplate => {
            let displayMaterial = capfirst(`${doubleplate}`)
            event.create(`fired.clay.metal.plate.double.${doubleplate}.hot`).displayName(`${displayMaterial} Casted Double Plate [HOT]`).parentModel("kubejs:item/metal_in_mold/mold.double.plate").texture("kubejs:item/metal_in_molds/shape.mold.double.plate").color(0, 0x514137)})
             
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
     
            metalMoldName.forEach(name => {
            let displayMaterial = capfirst(`${name}`)
            event.create(`fired.clay.metal.name.${name}.hot`).displayName(`${displayMaterial} Casted Name [HOT]`).parentModel("kubejs:item/metal_in_mold/mold.name").texture("kubejs:item/metal_in_molds/shape.mold.name").color(0, 0x514137)})
          
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
     
            metalMoldRotor.forEach(rotor => {
            let displayMaterial = capfirst(`${rotor}`)
            event.create(`fired.clay.metal.rotor.${rotor}.hot`).displayName(`${displayMaterial} Casted Rotor [HOT]`).parentModel("kubejs:item/metal_in_mold/mold.rotor").texture("kubejs:item/metal_in_molds/shape.mold.rotor").color(0, 0x514137)})
          
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
     
            metalMoldCredit.forEach(greggycredit => {
            let displayMaterial = capfirst(`${greggycredit}`)
            event.create(`fired.clay.metal.credit.${greggycredit}.hot`).displayName(`${displayMaterial} Casted Greg Credit [HOT]`).parentModel("kubejs:item/metal_in_mold/mold.credit").texture("kubejs:item/metal_in_molds/shape.mold.credit").color(0, 0x514137)})
                    
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
 
            metalMoldBottle.forEach(bottle => {
            let displayMaterial = capfirst(`${bottle}`)
            event.create(`fired.clay.metal.bottle.${bottle}.hot`).displayName(`${displayMaterial} Casted Bottle [HOT]`).parentModel("kubejs:item/metal_in_mold/mold.bottle").texture("kubejs:item/metal_in_molds/shape.mold.bottle").color(0, 0x514137)})
          
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

            metalMoldIngot.forEach(ingot => {
            let displayMaterial = capfirst(`${ingot}`)
            event.create(`fired.clay.metal.ingot.${ingot}.hot`).displayName(`${displayMaterial} Casted Ingot [HOT]`).parentModel("kubejs:item/metal_in_mold/mold.ingot").texture("kubejs:item/metal_in_molds/shape.mold.ingot").color(0, 0x514137)})
                 
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

            metalMoldGearSmall.forEach(smallgear => {
            let displayMaterial = capfirst(`${smallgear}`)
            event.create(`fired.clay.metal.small.gear.${smallgear}.hot`).displayName(`${displayMaterial} Casted Small Gear [HOT]`).parentModel("kubejs:item/metal_in_mold/mold.small.gear").texture("kubejs:item/metal_in_molds/shape.mold.small.gear").color(0, 0x514137)})
        
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

            metalMoldFluidPipe.forEach(fluidpipe => {
            let displayMaterial = capfirst(`${fluidpipe}`)
            event.create(`fired.clay.metal.pipe.tiny.${fluidpipe}.hot`).displayName(`${displayMaterial} Casted Tiny Pipe [HOT]`).parentModel("kubejs:item/metal_in_mold/mold.pipe.tiny").texture("kubejs:item/metal_in_molds/shape.mold.pipe.tiny").color(0, 0x514137)})
       
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
   
            metalMoldFluidPipe.forEach(fluidsmallpipe => {
            let displayMaterial = capfirst(`${fluidsmallpipe}`)
            event.create(`fired.clay.metal.pipe.small.${fluidsmallpipe}.hot`).displayName(`${displayMaterial} Casted Small Pipe [HOT]`).parentModel("kubejs:item/metal_in_mold/mold.pipe.small").texture("kubejs:item/metal_in_molds/shape.mold.pipe.small").color(0, 0x514137)})
          
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

            metalMoldFluidPipe.forEach(fluidnormalpipe => {
            let displayMaterial = capfirst(`${fluidnormalpipe}`)
            event.create(`fired.clay.metal.pipe.normal.${fluidnormalpipe}.hot`).displayName(`${displayMaterial} Casted Normal Pipe [HOT]`).parentModel("kubejs:item/metal_in_mold/mold.pipe.normal").texture("kubejs:item/metal_in_molds/shape.mold.pipe.normal").color(0, 0x514137)})

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

            metalMoldRodSmall.forEach(fluidrodsmall => {
            let displayMaterial = capfirst(`${fluidrodsmall}`)
            event.create(`fired.clay.metal.rod.small.${fluidrodsmall}.hot`).displayName(`${displayMaterial} Casted Rod [HOT]`).parentModel("kubejs:item/metal_in_mold/mold.rod.small").texture("kubejs:item/metal_in_molds/shape.mold.rod.small").color(0, 0x514137)})
      
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

            metalMoldRodLong.forEach(fluidrod => {
            let displayMaterial = capfirst(`${fluidrod}`)
            event.create(`fired.clay.metal.rod.${fluidrod}.hot`).displayName(`${displayMaterial} Casted Long Rod [HOT]`).parentModel("kubejs:item/metal_in_mold/mold.rod").texture("kubejs:item/metal_in_molds/shape.mold.rod").color(0, 0x514137)})
                                                 
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

            metalMoldFrameBox.forEach(framebox => {
            let displayMaterial = capfirst(`${framebox}`)
            event.create(`fired.clay.metal.frame.box.${framebox}.hot`).displayName(`${displayMaterial} Casted Frame Box [HOT]`).parentModel("kubejs:item/metal_in_mold/mold.frame.box").texture("kubejs:item/metal_in_molds/shape.mold.frame.box").color(0, 0x514137)})

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

            GTCEUToolFluids.forEach(hammer => {
            let displayMaterial = capfirst(`${hammer}`)
            event.create(`fired.clay.metal.hammer.${hammer}.hot`).displayName(`${displayMaterial} Casted Hammer [HOT]`).parentModel("kubejs:item/metal_in_mold/mold.Hammer").texture("kubejs:item/metal_in_molds/shape.mold.hammer").color(0, 0x514137)})

      
        })