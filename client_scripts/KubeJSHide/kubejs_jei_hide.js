
JEIEvents.hideItems(event => {	 

    var GTCEUToolFluids = ["aluminium","iron","titanium","neutronium","duranium","bronze", /*"diamond",*/ "invar","sterling_silver","rose_gold","stainless_steel","steel","ultimet","wrought_iron","tungsten_carbide","damascus_steel","tungsten_steel","cobalt_brass","vanadium_steel","naquadah_alloy","red_steel","blue_steel","hsse"]

        
    var metalMoldFrameBox = ["aluminium","europium","titanium","neutronium","tritanium","bronze","invar","stainless_steel","steel","polytetrafluoroethylene","black_steel","tungsten_steel","naquadah_alloy","blue_steel","hssg","hsse","hsss"]
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
    var metalMoldBlock = ["aluminium","americium","annealed_copper","antimony","battery_alloy","beryllium","bismuth_bronze","bismuth","black_bronze","black_steel","blue_alloy","blue_steel","borosilicate_glass","brass","bronze","chrome","cobalt_brass","cobalt","copper","gold","iron","cupronickel","damascus_steel","darmstadtium","duranium","electrum","enriched_naquadah_trinium_europium_duranide","epoxy","europium","gallium_arsenide","gallium","hsse","hssg","hsss","indium_gallium_phosphide","indium_tin_barium_titanium_cuprate","indium","invar","iridium","kanthal","lead","magnalium","magnesium_diboride","manganese_phosphide","manganese","mercury_barium_calcium_cuprate","molybdenum","naquadah_alloy","naquadah_enriched","naquadah","naquadria","neodymium","neutronium","nichrome","nickel_zinc_ferrite","nickel","niobium_nitride","niobium_titanium","niobium","osmiridium","osmium","palladium","plastic","platinum","plutonium_241","plutonium","polybenzimidazole","polycaprolactam","polyphenylene_sulfide","polytetrafluoroethylene","polyvinyl_butyral","polyvinyl_chloride","potin","red_alloy","red_steel","reinforced_epoxy_resin","rhodium_plated_palladium","rhodium","rose_gold","rubber","ruthenium_trinium_americium_neutronate","ruthenium","samarium_iron_arsenic_oxide","samarium","silicon","silicone_rubber","silver","soldering_alloy","stainless_steel","steel","sterling_silver","styrene_butadiene_rubber","tantalum","thorium","tin_alloy","tin","titanium","trinium","tritanium","tungsten_carbide","tungsten_steel","tungsten","ultimet","uranium_235","uranium_rhodium_dinaquadide","uranium_triplatinum","uranium","vanadium_gallium","vanadium_steel","vanadium","wrought_iron","yttrium_barium_cuprate","yttrium","zinc"]
	var metalMoldGear = ["aluminium","black_bronze","black_steel","blue_steel","bronze","cobalt_brass","duranium","hssg","hsss","invar","iridium","iron","naquadah_alloy","naquadria","osmiridium","potin","red_steel","rhodium","rubber","ruridit","ruthenium","silicone_rubber","stainless_steel","steel",/*"stone",*/"titanium","trinium","tritanium","tungsten_carbide","tungsten_steel","tungsten","ultimet","vanadium_steel",/*"wood",*/"wrought_iron"]
	var metalMoldGearSmall = []
    var metalMoldCable = ["aluminium","annealed_copper","black_steel","blue_alloy","cobalt","copper","cupronickel","electrum","enriched_naquadah_trinium_europium_duranide","europium","gold","hssg","indium_tin_barium_titanium_cuprate","iron","kanthal","lead","magnesium_diboride","manganese_phosphide","mercury_barium_calcium_cuprate","naquadah_alloy","naquadah","nichrome","nickel","niobium_nitride","niobium_titanium","osmium","platinum","red_alloy","ruthenium_trinium_americium_neutronate","samarium_iron_arsenic_oxide","silver","steel","tin","trinium","tritanium","tungsten_steel","tungsten","uranium_rhodium_dinaquadide","uranium_triplatinum","vanadium_gallium","yttrium_barium_cuprate"]
	var metalMoldFluidPipe = ["aluminium","bronze","chrome","copper","duranium","europium","gold","iridium","lead","naquadah","neutronium","niobium_titanium","plastic","polybenzimidazole","polytetrafluoroethylene","potin","stainless_steel","steel","tin_alloy","titanium","tungsten_carbide","tungsten_steel","tungsten","vanadium_steel"]
    
    GTCEUToolFluids.forEach(tool => {
        event.hide(`kubejs:fired.clay.metal.hammer.${tool}.hot`)
        event.hide(`gtceu:hammer_diamond`)
    })

    metalMoldFrameBox.forEach(frame => {
        event.hide(`kubejs:fired.clay.metal.frame.box.${frame}.hot`)})

    metalMoldGear.forEach(gear => {
        event.hide(`kubejs:fired.clay.metal.gear.${gear}.hot`)})

    metalMoldPlate.forEach(plate => {
        event.hide(`kubejs:fired.clay.metal.plate.${plate}.hot`)})

    metalMoldBlock.forEach(block => {
        event.hide(`kubejs:fired.clay.metal.block.${block}.hot`)})

    metalMoldPlateDouble.forEach(doubleplate => {
        event.hide(`kubejs:fired.clay.metal.plate.double.${doubleplate}.hot`)})

    metalMoldFluidPipe.forEach(pipetiny => {
        event.hide(`kubejs:fired.clay.metal.pipe.tiny.${pipetiny}.hot`)})
        
    metalMoldFluidPipe.forEach(pipetiny => {
        event.hide(`kubejs:fired.clay.metal.pipe.small.${pipetiny}.hot`)})
        
    metalMoldFluidPipe.forEach(pipetiny => {
        event.hide(`kubejs:fired.clay.metal.pipe.normal.${pipetiny}.hot`)})

    metalMoldWire.forEach(wire => {
        event.hide(`kubejs:fired.clay.metal.wire.${wire}.hot`)})

    metalMoldIngot.forEach(ingot => {
        event.hide(`kubejs:fired.clay.metal.ingot.${ingot}.hot`)})

    metalMoldRodSmall.forEach(rodsmall => {
        event.hide(`kubejs:fired.clay.metal.rod.small.${rodsmall}.hot`)})
        
    metalMoldRodSmall.forEach(rodsmall => {
        event.hide(`kubejs:fired.clay.metal.rod.${rodsmall}.hot`)})
        event.hide(`kubejs:fired.clay.metal.block.redstone.hot`)
        
        })