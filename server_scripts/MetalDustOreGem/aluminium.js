ServerEvents.recipes(event => { 


    var TFCStoneTypes = ["andesite","basalt","chalk","chert","claystone","conglomerate","dacite","diorite","dolomite","gabbro","gneiss","granite","limestone","marble","phyllite","quartzite","rhyolite","schist","shale","slate"]

    var QuickMetalChange = ["aluminium"]
    
    TFCStoneTypes.forEach(stonetype => {
        QuickMetalChange.forEach(material => {

            

//====================================================================================================================================================================\\
//                                                              Minecraft - KubeJS Forge Tags                                                                         \\
//====================================================================================================================================================================\\


//====================================================================================================================================================================\\
//                                                               Minecraft - Crafting Table                                                                           \\
//====================================================================================================================================================================\\
                            //========================================RECIPE REMOVAL========================================\\
                            event.remove({id: `gtceu:shaped/stick_${material}`})
                            event.remove({id: `gtceu:shaped/stick_long_stick_${material}`})
                            event.remove({id: `gtceu:shaped/small_dust_disassembling_${material}`})
                            event.remove({id: `gtceu:shaped/tiny_dust_disassembling_${material}`})
                            event.remove({id: `gtceu:shaped/stick_long_${material}`})
                            event.remove({id: `gtceu:shaped/hammer_${material}`})
                            event.remove({id: `gtceu:shaped/plate_double_${material}`})
                            event.remove({id: `gtceu:shaped/plate_${material}`})
                            event.remove({id: `gtceu:shaped/casing_${material}_frostproof`})
                            event.remove({id: `gtceu:shaped/small_dust_assembling_${material}`})
                            event.remove({id: `gtceu:shaped/tiny_dust_assembling_${material}`})
                            event.remove({id: `gtceu:shaped/nugget_assembling_${material}`})
                            event.remove({id: `gtceu:shaped/gear_${material}`})
                            event.remove({id: `gtceu:shaped/gear_small_${material}`})
                            event.remove({id: `gtceu:shaped/frame_${material}`})
                            event.remove({id: `gtceu:shaped/spring_small_${material}`})
                            event.remove({id: `gtceu:shaped/spring_${material}`})
                            event.remove({id: `gtceu:shaped/${material}_wire_single`})
                            event.remove({id: `gtceu:shaped/tiny_${material}_pipe`})
                            event.remove({id: `gtceu:shaped/small_${material}_pipe`})
                            event.remove({id: `gtceu:shaped/normal_${material}_pipe`})
                            event.remove({id: `gtceu:shaped/medium_${material}_pipe`})
                            event.remove({id: `gtceu:shaped/large_${material}_pipe`})
                            event.remove({id: `gtceu:shaped/huge_${material}_pipe`})
                            event.remove({id: `gtceu:shaped/quadruple_${material}_pipe`})
                            event.remove({id: `gtceu:shaped/nonuple_${material}_pipe`})
                            event.remove({id: `gtceu:shaped/${material}_crate`})
                            event.remove({id: `gtceu:shaped/${material}_drum`})
                            event.remove({id: `gtceu:shaped/bolt_saw_${material}`})
                            event.remove({id: `gtceu:shaped/foil_${material}`})
                            event.remove({id: `gtceu:shaped/small_gear_${material}`})
                            event.remove({id: `gtceu:shaped/screw_${material}`})

                            event.remove({id: `gtceu:shapeless/purified_ore_to_dust_${material}`})
                            event.remove({id: `gtceu:shapeless/crushed_ore_to_dust_${material}`})
                            event.remove({id: `gtceu:shapeless/${material}_wire_wiregtsingle_doubling`})
                            event.remove({id: `gtceu:shapeless/${material}_wire_wiregtsingle_quadrupling`})
                            event.remove({id: `gtceu:shapeless/${material}_wire_wiregtdouble_doubling`})
                            event.remove({id: `gtceu:shapeless/${material}_wire_wiregtdouble_quadrupling`})
                            event.remove({id: `gtceu:shapeless/${material}_wire_wiregtoctal_splitting`})
                            event.remove({id: `gtceu:shapeless/${material}_wire_wiregthex_splitting`})
                            event.remove({id: `gtceu:shapeless/${material}_wire_wiregtquadruple_splitting`})
                            event.remove({id: `gtceu:shapeless/${material}_wire_wiregtquadruple_doubling`})
                            event.remove({id: `gtceu:shapeless/${material}_wire_wiregtoctal_doubling`})
                            event.remove({id: `gtceu:shapeless/${material}_wire_wiregtquadruple_quadrupling`})
                            event.remove({id: `gtceu:shapeless/nugget_disassembling_${material}`})
                            event.remove({id: `gtceu:shapeless/block_compress_${material}`})
                            event.remove({id: `gtceu:shapeless/block_decompress_${material}`})
                            event.remove({id: `gtceu:shapeless/fine_wire_${material}`})
                            event.remove({id: `gtceu:shapeless/centrifuged_ore_to_dust_${material}`})
                            event.remove({id: `gtceu:shapeless/${material}_wire_wiregtdouble_splitting`})
                            //======================================RECIPE REMOVAL END======================================\\

                            event.shaped(
                                Item.of(`gtceu:hammer_${material}`), 
                                [
                                    'SA',
                                    'NS'
                                ],
                                {
                                  A: `kubejs:hammer.head.${material}`, 
                                  S: `minecraft:lead`,  
                                  N: `#forge:sticks/wood`   
                                }
                              )

//====================================================================================================================================================================\\
//                                                                 Terrafirmacraft - Quern                                                                            \\
//====================================================================================================================================================================\\

if (Platform.isLoaded('tfc')) {
event.custom({"type": "tfc:quern","ingredient":{"item": `gtceu:dust.${material}`},"result":{"item": `gtceu:dust_small.${material}`,"count": 9}})
event.custom({"type": "tfc:quern","ingredient":{"item": `gtceu:dust_small.${material}`},"result":{"item": `gtceu:dust_tiny.${material}`,"count": 9}})
event.custom({"type": "tfc:quern","ingredient":{"item": `kubejs:chunk_${stone}_${material}`},"result":{"item": `kubejs:raw_${material}`,"count": 1}})
event.custom({"type": "tfc:quern","ingredient":{"item": `kubejs:raw_${material}`},"result":{"item": `gtceu:crushed_${material}`,"count": 1}})
event.custom({"type": "tfc:quern","ingredient":{"item": `gtceu:crushed.${material}`},"result":{"item": `gtceu:dust_impure.${material}`,"count": 1}})
event.custom({"type": "tfc:quern","ingredient":{"item": `gtceu:crushed_purified.${material}`},"result":{"item": `gtceu:dust_pure.${material}`,"count": 1}})
event.custom({"type": "tfc:quern","ingredient":{"item": `gtceu:dust_tiny.${material}`},"result":{"item": `minecraft:cyan_dye`,"count": 1}})
}
//====================================================================================================================================================================\\
//                                                              CreateAdditions Mod - Rolling                                                                         \\
//====================================================================================================================================================================\\
                            //======================================= RECIPE REMOVAL =======================================\\
                            //===================================== RECIPE REMOVAL END =====================================\\
event.custom({type:"createaddition:rolling",input: {item: `kubejs:double_ingot_${material}`,count: 1},result: {item: `gtceu:plate.${material}`,count: 1}}).id(`double.ingot.${material}.single.plate`)	
event.custom({type:"createaddition:rolling",input: {item: `gtceu:stick_long.${material}`,count: 1},result: {item: `gtceu:stick.${material}`,count: 2}}).id(`long.rod.${material}.rod`)	
event.custom({type:"createaddition:rolling",input: {item: `gtceu:normal.${material}`,count: 1},result: {item: `gtceu:small.${material}`,count: 2}}).id(`normal.fluid.pipe.${material}.small.fluid.pipe`)	
event.custom({type:"createaddition:rolling",input: {item: `gtceu:plate_double.${material}`,count: 1},result: {item: `gtceu:plate.${material}`,count: 2}}).id(`double.plate.${material}.plate`)	
event.custom({type:"createaddition:rolling",input: {item: `kubejs:plate_${material}`,count: 1},result: {item: `gtceu:foil.${material}`,count: 2}}).id(`plate.to.${material}.foil`)	
event.custom({type:"createaddition:rolling",input: {item: `kubejs:foil_${material}`,count: 1},result: {item: `gtceu:foil.${material}`,count: 2}}).id(`foil.to.${material}.fine`)	
event.custom({type:"createaddition:rolling",input: {item: `gtceu:spring.${material}`,count: 1},result: {item: `gtceu:spring_small.${material}`,count: 2}}).id(`spring.to.${material}.small.spring`)	

                            //=========================================== WIRES ============================================\\
event.custom({type:"createaddition:rolling",input: {item: `gtceu:stick.${material}`,count: 1},result: {item: `gtceu:wire_single.${material}`,count: 2}}).id(`spring.to.${material}.single.wire`)	
event.custom({type:"createaddition:rolling",input: {item: `gtceu:wire_double.${material}`,count: 1},result: {item: `gtceu:wire_single.${material}`,count: 2}}).id(`double.wire.${material}.single.wire`)	
event.custom({type:"createaddition:rolling",input: {item: `gtceu:wire_quadruple.${material}`,count: 1},result: {item: `gtceu:wire_double.${material}`,count: 2}}).id(`quadruple.wire.${material}double.wire`)	
event.custom({type:"createaddition:rolling",input: {item: `gtceu:wire_octal.${material}`,count: 1},result: {item: `gtceu:wire_quadruple.${material}`,count: 2}}).id(`octal.wire.${material}quadruple.wire`)	
event.custom({type:"createaddition:rolling",input: {item: `gtceu:wire_hex.${material}`,count: 1},result: {item: `gtceu:wire_octal.${material}`,count: 2}}).id(`hex.wire.${material}octal.wire`)	
event.custom({type:"createaddition:rolling",input: {item: `gtceu:wire_hex.${material}`,count: 1},result: {item: `gtceu:wire_octal.${material}`,count: 2}}).id(`hex.wire.${material}octal.wire`)	

                            //======================================== FLUID PIPES =========================================\\
event.custom({type:"createaddition:rolling",input: {item: `gtceu:small.${material}`,count: 1},result: {item: `gtceu:tiny.${material}`,count: 2}}).id(`small.fluid.pipe.${material}.tiny.fluid.pipe`)	
event.custom({type:"createaddition:rolling",input: {item: `gtceu:normal.${material}`,count: 1},result: {item: `gtceu:small.${material}`,count: 2}}).id(`normal.fluid.pipe.${material}.small.fluid.pipe`)	
event.custom({type:"createaddition:rolling",input: {item: `gtceu:large.${material}`,count: 1},result: {item: `gtceu:normal.${material}`,count: 2}}).id(`large.fluid.pipe.${material}.nprmal.fluid.pipe`)	
event.custom({type:"createaddition:rolling",input: {item: `gtceu:huge.${material}`,count: 1},result: {item: `gtceu:large.${material}`,count: 2}}).id(`huge.fluid.pipe.${material}.large.fluid.pipe`)	
event.custom({type:"createaddition:rolling",input: {item: `gtceu:quadruple.${material}`,count: 1},result: {item: `gtceu:huge.${material}`,count: 2}}).id(`quadruple.fluid.pipe.${material}.huge.fluid.pipe`)	
event.custom({type:"createaddition:rolling",input: {item: `gtceu:nonuple.${material}`,count: 1},result: {item: `gtceu:quadruple.${material}`,count: 2}}).id(`nonuple.fluid.pipe.${material}.quadruple.fluid.pipe`)	

//====================================================================================================================================================================\\
//                                                             Create Mod - Mechanical Crafter                                                                        \\
//====================================================================================================================================================================\\
event.custom({"type": "create:mechanical_crafting","pattern": ["xxx","xxx","xxx"],"key": {"x": {"tag": `forge:nuggets/${material}`}},"result": {"item": `gtceu:ingot.${material}`},"acceptMirrored": true}).id(`nugget.to.${material}.bock`)
event.custom({"type": "create:mechanical_crafting","pattern": ["xxx","xxx","xxx"],"key": {"x": {"tag": `forge:ingots/${material}`}},"result": {"item": `gtceu:compressed_block_${material}`},"acceptMirrored": true}).id(`ingot.to.${material}.block`)
event.custom({"type": "create:mechanical_crafting","pattern": ["x"],"key": {"x": {"tag": `forge:ingots/${material}`}},"result": {"item": `9x gtceu:nugget.${material}`}, "acceptMirrored": true}).id(`ingot.${material}.nugget`)
event.custom({"type": "create:mechanical_crafting","pattern": ["x"],"key": {"x": {"tag": `forge:storage_blocks/${material}`}},"result": {"item": `9x gtceu:ingot.${material}`}, "count":9,"acceptMirrored": true}).id(`block.${material}.ingot`)
event.custom({"type": "create:mechanical_crafting","pattern": ["xx"],"key": {"x": {"item": `gtceu:wire_single.${material}`}},"result": {"item": `gtceu:wire_double.${material}`}, "count":1,"acceptMirrored": true}).id(`single.wire.${material}.to.double.wire`)
event.custom({"type": "create:mechanical_crafting","pattern": ["xx","xx"],"key": {"x": {"item": `gtceu:wire_single.${material}`}},"result": {"item": `gtceu:wire_quadruple.${material}`}, "count":1,"acceptMirrored": true}).id(`single.wire.${material}.to.quadruple.wire`)
event.custom({"type": "create:mechanical_crafting","pattern": ["xx","xx"],"key": {"x": {"item": `gtceu:wire_double.${material}`}},"result": {"item": `gtceu:wire_octal.${material}`}, "count":1,"acceptMirrored": true}).id(`double.wire.${material}.to.octal.wire`)
event.custom({"type": "create:mechanical_crafting","pattern": ["xx","xx"],"key": {"x": {"item": `gtceu:wire_quadruple.${material}`}},"result": {"item": `gtceu:wire_hex.${material}`}, "count":1,"acceptMirrored": true}).id(`quadruple.wire.${material}.to.hex.wire`)
event.custom({"type": "create:mechanical_crafting","pattern": ["x"],"key": {"x": {"item": `gtceu:wire_double.${material}`}},"result": {"item": `gtceu:wire_single.${material}`}, "count":2,"acceptMirrored": true}).id(`double.wire.${material}.to.single.wire`)
event.custom({"type": "create:mechanical_crafting","pattern": ["xxxx"],"key": {"x": {"item": `gtceu:small.${material}`}},"result": {"item": `gtceu:quadruple.${material}`}, "count":1,"acceptMirrored": true}).id(`small.${material}.to.quadruple`)
event.custom({"type": "create:mechanical_crafting","pattern": ["xxx","xxx","xxx"],"key": {"x": {"item": `gtceu:small.${material}`}},"result": {"item": `gtceu:nonuple.${material}`}, "count":1,"acceptMirrored": true}).id(`small.${material}.to.nonuple`)
event.custom({"type": "create:mechanical_crafting","pattern": ["xtx","tft","xtx"],"key": {"t": {"item": `gtceu:plate.${material}`},"f": {"item": `gtceu:frame_block_${material}`},"x": {"item": `gtceu:stick_long.${material}`}},"result": {"item": `gtceu:crate.${material}`}, "count":1,"acceptMirrored": true}).id(`${material}.crate`)
event.custom({"type": "create:mechanical_crafting","pattern": ["xtx","xtx","xtx"],"key": {"x": {"item": `gtceu:plate.${material}`},"t": {"item": `gtceu:stick_long.${material}`}},"result": {"item": `gtceu:drum.${material}`}, "count":1,"acceptMirrored": true}).id(`${material}.drum`)
event.custom({"type": "create:mechanical_crafting","pattern": ["xxx","xxx","xxx"],"key": {"x": {"item": `gtceu:dust_tiny.${material}`}},"result": {"item": `gtceu:dust.${material}`}, "count":1,"acceptMirrored": true}).id(`${material}.compress.dust.small`)
event.custom({"type": "create:mechanical_crafting","pattern": ["xx","xx"],"key": {"x": {"item": `gtceu:dust_small.${material}`}},"result": {"item": `gtceu:dust.${material}`}, "count":1,"acceptMirrored": true}).id(`${material}.compress.dust`)
event.custom({"type": "create:mechanical_crafting","pattern": ["xx"],"key": {"x": {"item": `gtceu:bolt.${material}`}},"result": {"item": `gtceu:screw.${material}`}, "count":1,"acceptMirrored": true}).id(`${material}.compress.dust`)

//====================================================================================================================================================================\\
//                                                                  Create Mod - Sequence                                                                             \\
//====================================================================================================================================================================\\


let casing = ["gtceu:casing_aluminium_frostproof"]
casing.forEach(inter => {event.recipes.createSequencedAssembly([Item.of(`2x gtceu:casing_${material}_frostproof`).withChance(100)], `gtceu:frame_block_${material}`, [event.recipes.createDeploying(`${`${inter}`}`, [`${inter}`, `gtceu:plate_double.${material}`]),event.recipes.createFilling(`${inter}`, [`${inter}`, Fluid.of('gtceu:tin', 144)]),event.recipes.createDeploying(`${inter}`, [`${inter}`, `gtceu:plate_double.${material}`]),event.recipes.createDeploying(`${inter}`, [`${inter}`, `#forge:tool/hammer`]).keepHeldItem(true),event.recipes.createDeploying(`${inter}`, [`${inter}`, `gtceu:plate_double.${material}`]),event.recipes.createPressing(`${inter}`, `${inter}`)]).transitionalItem(`${inter}`).loops(1)})

let inter = [`gtceu:cable_single.${material}`]
inter.forEach(inter => {event.recipes.createSequencedAssembly([Item.of(`gtceu:cable_single.${material}`).withChance(100)], `gtceu:wire_single.${material}`,[event.recipes.createDeploying(`${`${inter}`}`, [`${inter}`, `gtceu:foil.polyvinyl_chloride`]),event.recipes.createFilling(`${inter}`, [`${inter}`, Fluid.of('gtceu:rubber', 144)]),event.recipes.createPressing(`${inter}`, `${inter}`)]).transitionalItem(`${inter}`).loops(1).id(`wire.${material}.to.cable`)})

let inter2 = [`gtceu:cable_double.${material}`]
inter2.forEach(inter => {event.recipes.createSequencedAssembly([Item.of(`gtceu:cable_double.${material}`).withChance(100)], `gtceu:wire_double.${material}`, [event.recipes.createDeploying(`${`${inter}`}`, [`${inter}`, `gtceu:foil.polyvinyl_chloride`]),event.recipes.createFilling(`${inter}`, [`${inter}`, Fluid.of('gtceu:rubber', 144)]),event.recipes.createPressing(`${inter}`, `${inter}`)]).transitionalItem(`${inter}`).loops(1).id(`double.wire.${material}.to.double.cable`)})

let inter3 = [`gtceu:cable_quadruple.${material}`]
inter3.forEach(inter => {event.recipes.createSequencedAssembly([Item.of(`gtceu:cable_quadruple.${material}`).withChance(100)],`gtceu:wire_quadruple.${material}`, [event.recipes.createDeploying(`${`${inter}`}`, [`${inter}`, `gtceu:foil.polyvinyl_chloride`]),event.recipes.createDeploying(`${`${inter}`}`, [`${inter}`, `gtceu:foil.polyvinyl_chloride`]),event.recipes.createFilling(`${inter}`, [`${inter}`, Fluid.of('gtceu:rubber', 144)]),event.recipes.createPressing(`${inter}`, `${inter}`)]).transitionalItem(`${inter}`).loops(1).id(`quadruple.wire.${material}.to.quadruple.cable`)})

let inter4 = [`gtceu:cable_octal.${material}`]
inter4.forEach(inter => {event.recipes.createSequencedAssembly([Item.of(`gtceu:cable_octal.${material}`).withChance(100)], `gtceu:wire_octal.${material}`, [event.recipes.createDeploying(`${`${inter}`}`, [`${inter}`, `3x gtceu:foil.polyvinyl_chloride`]),event.recipes.createDeploying(`${`${inter}`}`, [`${inter}`, `3x gtceu:foil.polyvinyl_chloride`]),event.recipes.createDeploying(`${`${inter}`}`, [`${inter}`, `3x gtceu:foil.polyvinyl_chloride`]),event.recipes.createFilling(`${inter}`, [`${inter}`, Fluid.of('gtceu:rubber', 432)]),event.recipes.createPressing(`${inter}`, `${inter}`)]).transitionalItem(`${inter}`).loops(1).id(`octal.wire.${material}.to.octal.cable`)})


let fluidpipetiny = [`gtceu:plate.${material}`]
fluidpipetiny.forEach(inter => {event.recipes.createSequencedAssembly([Item.of(`2x gtceu:tiny.${material}`).withChance(100)], `gtceu:plate.${material}`, [event.recipes.createDeploying(`${inter}`, [`${inter}`, `#forge:tool/hammer`]).keepHeldItem(true),event.recipes.createDeploying(`${inter}`, [`${inter}`, `#forge:tool/saw`]).keepHeldItem(true),event.recipes.createDeploying(`${inter}`, [`${inter}`, `#forge:tool/wrench`]).keepHeldItem(true),event.recipes.createPressing(`${inter}`, `${inter}`)]).transitionalItem(`${inter}`).loops(1)})


let fluidpipesmall = [`gtceu:plate.${material}`]
fluidpipesmall.forEach(inter => {event.recipes.createSequencedAssembly([Item.of(`gtceu:small.${material}`).withChance(100)], `gtceu:plate.${material}`, [event.recipes.createDeploying(`${inter}`, [`${inter}`, `#forge:tool/wrench`]).keepHeldItem(true),event.recipes.createDeploying(`${inter}`, [`${inter}`, `#forge:tool/hammer`]).keepHeldItem(true),event.recipes.createPressing(`${inter}`, `${inter}`)]).transitionalItem(`${inter}`).loops(1)})


let fluidpipenormal = [`gtceu:plate.${material}`]
fluidpipenormal.forEach(inter => {
event.recipes.createSequencedAssembly(
[
Item.of(`gtceu:normal.${material}`).withChance(100)
], `gtceu:plate.${material}`, [
event.recipes.createDeploying(`${`${inter}`}`, [`${inter}`, `gtceu:plate.${material}`]),
event.recipes.createDeploying(`${`${inter}`}`, [`${inter}`, `gtceu:plate.${material}`]),
event.recipes.createDeploying(`${inter}`, [`${inter}`, `#forge:tool/wrench`]).keepHeldItem(true),
event.recipes.createDeploying(`${inter}`, [`${inter}`, `#forge:tool/hammer`]).keepHeldItem(true),
event.recipes.createPressing(`${inter}`, `${inter}`)
]).transitionalItem(`${inter}`).loops(1)})

let fluidpipelarge = [`gtceu:plate_double.${material}`]
fluidpipelarge.forEach(inter => {
event.recipes.createSequencedAssembly(
[
Item.of(`gtceu:large.${material}`).withChance(100)
], `gtceu:plate_double.${material}`, [
event.recipes.createDeploying(`${`${inter}`}`, [`${inter}`, `gtceu:plate_double.${material}`]),
event.recipes.createDeploying(`${`${inter}`}`, [`${inter}`, `gtceu:plate_double.${material}`]),
event.recipes.createDeploying(`${inter}`, [`${inter}`, `#forge:tool/wrench`]).keepHeldItem(true),
event.recipes.createDeploying(`${inter}`, [`${inter}`, `#forge:tool/hammer`]).keepHeldItem(true),
event.recipes.createPressing(`${inter}`, `${inter}`)
]).transitionalItem(`${inter}`).loops(1)})

let fluidpipehuge = [`gtceu:plate_double.${material}`]
fluidpipehuge.forEach(inter => {
event.recipes.createSequencedAssembly(
[
Item.of(`gtceu:huge.${material}`).withChance(100)
], `gtceu:compressed_block_${material}`, [
event.recipes.createDeploying(`${`${inter}`}`, [`${inter}`, `gtceu:compressed_block_${material}`]),
event.recipes.createDeploying(`${`${inter}`}`, [`${inter}`, `gtceu:plate_double.${material}`]),
event.recipes.createDeploying(`${inter}`, [`${inter}`, `#forge:tool/wrench`]).keepHeldItem(true),
event.recipes.createDeploying(`${inter}`, [`${inter}`, `#forge:tool/hammer`]).keepHeldItem(true),
event.recipes.createPressing(`${inter}`, `${inter}`)
]).transitionalItem(`${inter}`).loops(1)})
    
//====================================================================================================================================================================\\
//                                                                  Create Mod - Crushing                                                                             \\
//====================================================================================================================================================================\\
                            //========================================CHUNK CRUSHING========================================\\

event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_andesite_${material}`}],"processingTime":2400,"results":[{"count": 1,"item": `gtceu:dust_tiny.quartzite`},/*{"item": `tfc:rock/loose/andesite`},*/{"count": 2,"item": `kubejs:raw_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_basalt_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `gtceu:dust_tiny.basalt`},/*{"item": `tfc:rock/loose/basalt`},*/{"count": 2,"item": `kubejs:raw_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_chalk_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `gtceu:dust_tiny.calcite`},/*{"item": `tfc:rock/loose/chalk`},*/{"count": 2,"item": `kubejs:raw_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_chert_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `gtceu:dust_tiny.silicon_dioxide`},/*{"item": `tfc:rock/loose/chert`},*/{"count": 2,"item": `kubejs:raw_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_claystone_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `gtceu:dust_tiny.clay`},/*{"item": `tfc:rock/loose/claystone`},*/{"count": 2,"item": `kubejs:raw_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_conglomerate_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `gtceu:dust_tiny.quartz_sand`},/*{"item": `tfc:rock/loose/conglomerate`},*/{"count": 2,"item": `kubejs:raw_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_dacite_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `gtceu:dust_tiny.obsidian`},/*{"item": `tfc:rock/loose/dacite`},*/{"count": 2,"item": `kubejs:raw_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_diorite_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `gtceu:dust_tiny.silicon_dioxide`},/*{"item": `tfc:rock/loose/diorite`},*/{"count": 2,"item": `kubejs:raw_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_dolomite_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `gtceu:dust_tiny.calcium`},/*{"item": `tfc:rock/loose/dolomite`},*/{"count": 2,"item": `kubejs:raw_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_gabbro_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `gtceu:dust_tiny.potassium_feldspar`},/*{"item": `tfc:rock/loose/gabbro`},*/{"count": 2,"item": `kubejs:raw_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_gneiss_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `gtceu:dust_tiny.mica`},/*{"item": `tfc:rock/loose/gneiss`},*/{"count": 2,"item": `kubejs:raw_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_granite_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `gtceu:dust_tiny.sodium`},/*{"item": `tfc:rock/loose/granite`},*/{"count": 2,"item": `kubejs:raw_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_limestone_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `gtceu:dust_tiny.magnesium`},/*{"item": `tfc:rock/loose/limestone`},*/{"count": 2,"item": `kubejs:raw_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_marble_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `gtceu:dust_tiny.calcite`},/*{"item": `tfc:rock/loose/marble`},*/{"count": 2,"item": `kubejs:raw_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_phyllite_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `gtceu:dust_tiny.mica`},/*{"item": `tfc:rock/loose/phyllite`},*/{"count": 2,"item": `kubejs:raw_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_quartzite_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `gtceu:dust_tiny.quartzite`},/*{"item": `tfc:rock/loose/quartzite`},*/{"count": 2,"item": `kubejs:raw_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_rhyolite_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `gtceu:dust_tiny.silicon_dioxide`},/*{"item": `tfc:rock/loose/rhyolite`},*/{"count": 2,"item": `kubejs:raw_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_schist_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `gtceu:dust_tiny.certus_quartz`},/*{"item": `tfc:rock/loose/schist`},*/{"count": 2,"item": `kubejs:raw_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_shale_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `gtceu:dust_tiny.clay`},/*{"item": `tfc:rock/loose/shale`},*/{"count": 2,"item": `kubejs:raw_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:chunk_venus_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `gtceu:dust_tiny.galena`},/*{"item": `tfc:rock/loose/shale`},*/{"count": 2,"item": `kubejs:raw_${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})

                            //======================================= CRUSHED / DUST =======================================\\
event.custom({"type": "create:crushing","ingredients":[{"item": `kubejs:raw_${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `gtceu:crushed.${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})

event.custom({"type": "create:crushing","ingredients":[{"item": `gtceu:crushed.${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `gtceu:dust_impure.${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})

event.custom({"type": "create:crushing","ingredients":[{"item": `gtceu:crushed_purified.${material}`}],"processingTime":2400,"results": [{"count": 1,"item": `gtceu:dust_pure.${material}`},{"chance": 0.25,"item": "create:experience_nugget"}]})


                            
                            //======================================LOOSE ROCK CRUSHING=====================================\\

//====================================================================================================================================================================\\
//                                                                  Create Mod - Filling                                                                              \\
//====================================================================================================================================================================\\
                            //========================================RECIPE REMOVAL========================================\\
                            //======================================RECIPE REMOVAL END======================================\\

                            
                            //====================================METAL CASTING MATERIAL====================================\\
event.recipes.createFilling(`kubejs:fired.clay.metal.hammer.${material}.hot`, [`kubejs:fired.clay.casting.hammer`,Fluid.of(`gtceu:${material}`, 144)]).id(`casting.${material}.hammer`)	
event.recipes.createFilling(`kubejs:fired.clay.metal.frame.box.${material}.hot`, [`kubejs:fired.clay.casting.frame.box`,Fluid.of(`gtceu:${material}`, 864)]).id(`casting.${material}.frame.box`)		
event.recipes.createFilling(`kubejs:fired.clay.metal.rod.${material}.hot`, [`kubejs:fired.clay.casting.rod_long`,Fluid.of(`gtceu:${material}`, 288)]).id(`casting.${material}.rod`)	
event.recipes.createFilling(`kubejs:fired.clay.metal.rod.small.${material}.hot`, [`kubejs:fired.clay.casting.rod`,Fluid.of(`gtceu:${material}`, 144)]).id(`casting.${material}.small.rod`)	

//====================================================================================================================================================================\\
//                                                                  Create Mod - Deployer                                                                             \\
//====================================================================================================================================================================\\
                            //========================================RECIPE REMOVAL========================================\\
                            //======================================RECIPE REMOVAL END======================================\\

event.custom({"type": "create:deploying","ingredients": [{"item": `gtceu:compressed_block_${material}`},{"item": "gtceu:shape.mold.gear"}],"results": [{"item": `gtceu:gear.${material}`,"count": 2}],"keepHeldItem": true}).id(`deploying.${material}.gear`)	
event.custom({"type": "create:deploying","ingredients": [{"item": `gtceu:gear.${material}`},{"item": "gtceu:shape.mold.gear.small"}],"results": [{"item": `gtceu:gear_small.${material}`,"count": 2}],"keepHeldItem": true}).id(`deploying.${material}.small.gear`)	
event.custom({"type": "create:deploying","ingredients": [{"item": `gtceu:foil.${material}`},{"tag": "forge:tool/wire_cutter"}],"results": [{"item": `gtceu:wire_fine.${material}`,"count": 1}],"keepHeldItem": true}).id(`deploying.${material}.fine.wire`)	
event.custom({"type": "create:deploying","ingredients": [{"item": `gtceu:plate.${material}`},{"tag": "forge:tool/hammer"}],"results": [{"item": `gtceu:foil.${material}`,"count": 1}],"keepHeldItem": true}).id(`deploying.${material}.foil`)	
event.custom({"type": "create:deploying","ingredients": [{"item": `gtceu:plate.${material}`},{"tag": "forge:tool/wire_cutter"}],"results": [{"item": `gtceu:wire_single.${material}`,"count": 1}],"keepHeldItem": true}).id(`deploying.${material}.wire_single`)	
event.custom({"type": "create:deploying","ingredients": [{"tag": `forge:ingots/double/${material}`},{"tag": "forge:tool/hammer"}],"results": [{"item": `gtceu:plate.${material}`,"count": 1}],"keepHeldItem": true}).id(`deploying.${material}.plate`)	
event.custom({"type": "create:deploying","ingredients": [{"item": `gtceu:stick.${material}`},{"tag": "forge:tool/saw"}],"results": [{"item": `gtceu:bolt.${material}`,"count": 2}],"keepHeldItem": true}).id(`deploying.${material}.double.bolt`)	

//====================================================================================================================================================================\\
//                                                                  Create Mod - Washing                                                                              \\
//====================================================================================================================================================================\\
                            //========================================RECIPE REMOVAL========================================\\
                            //======================================RECIPE REMOVAL END======================================\\

event.custom({"type": "create:splashing","ingredients": [{ "item": `gtceu:crushed.${material}` }],"results": [{ "item": `gtceu:crushed_purified.${material}`}]}).id(`crushed.${material}.washing`)	
event.custom({"type": "create:splashing","ingredients": [{ "item": `gtceu:dust_impure.${material}` }],"results": [{ "item": `gtceu:dust_pure.${material}`}]}).id(`dust_impure.${material}.washing`)		
event.custom({"type": "create:splashing","ingredients": [{ "item": `kubejs:fired.clay.metal.hammer.${material}.hot` }],"results": [{ "item": `kubejs:fired.clay.casting.hammer`},{ "item": `kubejs:hammer.head.${material}`}]}).id(`washing.${material}.hammer`)		
event.custom({"type": "create:splashing","ingredients": [{ "item": `kubejs:fired.clay.metal.frame.box.${material}.hot` }],"results": [{ "item": `gtceu:frame_block_${material}`},{ "item": 'kubejs:fired.clay.casting.frame.box'}]}).id(`washing.${material}.frame.box`)	
event.custom({"type": "create:splashing","ingredients": [{ "item": `kubejs:fired.clay.metal.rod.${material}.hot` }],"results": [{ "item": `gtceu:stick_long.${material}`},{ "item": 'kubejs:fired.clay.casting.rod_long'}]}).id(`washing.${material}.rod`)	
event.custom({"type": "create:splashing","ingredients": [{ "item": `kubejs:fired.clay.metal.rod.small.${material}.hot` }],"results": [{ "item": `gtceu:stick.${material}`},{ "item": 'kubejs:fired.clay.casting.rod'}]}).id(`washing.${material}.small.rod`)

//====================================================================================================================================================================\\
//                                                                  Create Mod - Mixing                                                                               \\
//====================================================================================================================================================================\\
                            //========================================RECIPE REMOVAL========================================\\
                            //======================================RECIPE REMOVAL END======================================\\

event.custom({"type": "create:mixing","heatRequirement": "heated","ingredients": [{"item": `gtceu:dust_tiny.${material}`}],"results": [{"amount": 16,"fluid": `gtceu:${material}`}]}).id(`dust.tiny.${material}.melted`)		
event.custom({"type": "create:mixing","heatRequirement": "heated","ingredients": [{"item": `gtceu:dust_small.${material}`}],"results": [{"amount": 32,"fluid": `gtceu:${material}`}]}).id(`dust.small.${material}.melted`)
event.custom({"type": "create:mixing","heatRequirement": "heated","ingredients": [{"item": `kubejs:raw_${material}`}],"results": [{"amount": 64,"fluid": `gtceu:${material}`}]}).id(`raw.${material}.melted`)
event.custom({"type": "create:mixing","heatRequirement": "heated","ingredients": [{"item": `gtceu:crushed.${material}`}],"results": [{"amount": 84,"fluid": `gtceu:${material}`}]}).id(`crushed.${material}.melted`)
event.custom({"type": "create:mixing","heatRequirement": "heated","ingredients": [{"item": `gtceu:dust_impure.${material}`}],"results": [{"amount": 104,"fluid": `gtceu:${material}`}]}).id(`dust.impure.${material}.melted`)
event.custom({"type": "create:mixing","heatRequirement": "heated","ingredients": [{"item": `gtceu:crushed_purified.${material}`}],"results": [{"amount": 124,"fluid": `gtceu:${material}`}]}).id(`crushed.purified.${material}.melted`)
event.custom({"type": "create:mixing","heatRequirement": "heated","ingredients": [{"item": `gtceu:dust_pure.${material}`}],"results": [{"amount": 144,"fluid": `gtceu:${material}`}]}).id(`dust.pure.${material}.melted`)

//====================================================================================================================================================================\\
//                                                                  Create Mod - Milling                                                                              \\
//====================================================================================================================================================================\\
                            //========================================RECIPE REMOVAL========================================\\
                            //======================================RECIPE REMOVAL END======================================\\

event.custom({"type": "create:milling","ingredients": [{"item": `kubejs:chunk_${stonetype}_${material}`}],"processingTime": 4800,"results": [{"count": 1,"item": `kubejs:raw_${material}`}]}).id(`chunk.${stonetype}_${material}.milled`)
event.custom({"type": "create:milling","ingredients": [{"item": `gtceu:dust.${material}`}],"processingTime": 4800,"results": [{"count": 4,"item": `gtceu:dust_small.${material}`}]}).id(`dust.${material}.milled`)    
event.custom({"type": "create:milling","ingredients": [{"item": `gtceu:dust.${material}`}],"processingTime": 4800,"results": [{"count": 9,"item": `gtceu:dust_tiny.${material}`}]}).id(`dust.to.small..${material}.milled`)

//====================================================================================================================================================================\\
//                                                                     GTCEU - Mixer                                                                                  \\
//====================================================================================================================================================================\\
                            //========================================RECIPE REMOVAL========================================\\
                            //======================================RECIPE REMOVAL END======================================\\
                            
//====================================================================================================================================================================\\
//                                                                 GTCEU - Forge Hammer                                                                               \\
//====================================================================================================================================================================\\
                            //========================================RECIPE REMOVAL========================================\\
                            event.remove({id: `gtceu:forge_hammer/hammer_${material}_refined_ore_to_dust`})
                            //======================================RECIPE REMOVAL END======================================\\

//====================================================================================================================================================================\\
//                                                                  GTCEU - Ore Washing                                                                               \\
//====================================================================================================================================================================\\
                            //========================================RECIPE REMOVAL========================================\\                    
                            event.remove({id: `gtceu:ore_washer/wash_${material}_dirty_dust_to_dust`})              
                            event.remove({id: `gtceu:ore_washer/wash_${material}_pure_dust_to_dust`})          
                            event.remove({id: `gtceu:ore_washer/wash_${material}_crushed_ore_to_purified_ore_distilled`})          
                            event.remove({id: `gtceu:ore_washer/wash_${material}_crushed_ore_to_purified_ore_fast`})        
                            event.remove({id: `gtceu:ore_washer/wash_${material}_crushed_ore_to_purified_ore`})
                            //======================================RECIPE REMOVAL END======================================\\

event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:ore_washer","duration":200,"inputs":{"item":[{"content":{"item":`gtceu:crushed.${material}`},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":1,"ingredient":{"type":"forge:nbt","item":"gtceu:circuit.integrated","count":1,"nbt":"{Configuration:2}"}},"chance":0.0}],"fluid":[{"content":{"fluid":"minecraft:water","amount":1000},"chance":1.0}]},"outputs":{"item":[{"content":{"item":`gtceu:crushed_purified.${material}`},"chance":1.0},{"content":{"item":`gtceu:dust_tiny.bauxite`},"chance":1.0}]},"tickInputs":{"eu":[{"content":16,"chance":1.0}]}})
event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:ore_washer","duration":200,"inputs":{"item":[{"content":{"item":`gtceu:dust_impure.${material}`},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":1,"ingredient":{"type":"forge:nbt","item":"gtceu:circuit.integrated","count":1,"nbt":"{Configuration:2}"}},"chance":0.0}],"fluid":[{"content":{"fluid":"minecraft:water","amount":1000},"chance":1.0}]},"outputs":{"item":[{"content":{"item":`gtceu:dust_pure.${material}`},"chance":1.0},{"content":{"item":`gtceu:dust_tiny.bauxite`},"chance":1.0}]},"tickInputs":{"eu":[{"content":16,"chance":1.0}]}})

//====================================================================================================================================================================\\
//                                                             GTCEU - Large Chemical Reactor                                                                         \\
//====================================================================================================================================================================\\
                            //========================================RECIPE REMOVAL========================================\\
                            //======================================RECIPE REMOVAL END======================================\\

//====================================================================================================================================================================\\
//                                                                GTCEU - Chemical Reactor                                                                            \\
//====================================================================================================================================================================\\
                            //========================================RECIPE REMOVAL========================================\\
                            //======================================RECIPE REMOVAL END======================================\\

//====================================================================================================================================================================\\
//                                                                    GTCEU - Macerator                                                                               \\
//====================================================================================================================================================================\\
                            //========================================RECIPE REMOVAL========================================\\                            
                            event.remove({id: `gtceu:macerator/macerate_${material}_ore_netherrack_to_crushed_ore`})
                            event.remove({id: `gtceu:macerator/macerate_${material}_ore_endstone_to_crushed_ore`})
                            event.remove({id: `gtceu:macerator/macerate_${material}_ore_to_crushed_ore`})
                            //======================================RECIPE REMOVAL END======================================\\

event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:macerator","duration":400,"inputs":{"item":[{"content":{"item":`kubejs:raw_${material}`},"chance":0.0}]},"outputs":{"item":[{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":"gtceu:crushed.aluminium"}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":1,"ingredient":{"item":"gtceu:dust.bauxite"}},"chance":0.14}]}})

//====================================================================================================================================================================\\
//                                                                  GTCEU - Create Mixer                                                                              \\
//====================================================================================================================================================================\\
                            //========================================RECIPE REMOVAL========================================\\
                            //======================================RECIPE REMOVAL END======================================\\

event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:mixer","duration":28,"inputs":{"fluid":[{"content":{"fluid":`minecraft:water`,"amount":1000},"chance":1.0},{"content":{"fluid":`gtceu:sulfur_dioxide`,"amount":1000},"chance":1.0}],"item":[{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":1,"tag":`forge:crushed_ores/${material}`},"chance":1.0}]},"outputs":{"fluid":[{"content":{"fluid":`kubejs:dirty_${material}`,"amount":2000},"chance":1.0}]},"tickInputs":{"eu":[{"content":32,"chance":1.0}]}})
                       
//====================================================================================================================================================================\\
//                                                                  GTCEU - Centrifuge                                                                                \\
//====================================================================================================================================================================\\
                            //========================================RECIPE REMOVAL========================================\\
                            
                                event.remove({id: `gtceu:centrifuge/centrifuge_${material}_dirty_dust_to_dust`})
                                event.remove({id: `gtceu:centrifuge/centrifuge_${material}_pure_dust_to_dust`})
                            //======================================RECIPE REMOVAL END======================================\\

event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:centrifuge","duration":180,"inputs":{"fluid":[{"content":{"fluid":`kubejs:dirty_${material}`,"amount":1000},"chance":1.0}]},"outputs":{"fluid":[{"content":{"fluid":`kubejs:clean_bauxite`,"amount":1000},"chance":1.0},{"content":{"fluid":`kubejs:clean_${material}`,"amount":1000},"chance":1.0}]},"tickInputs":{"eu":[{"content":16,"chance":1.0}]}})
event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:centrifuge","duration":180,"inputs":{"fluid":[{"content":{"fluid":`kubejs:clean_${material}`,"amount":1000},"chance":1.0}]},"outputs":{"item":[{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":`gtceu:dust.${material}`}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":`gtceu:dust.bauxite`}},"chance":1.0}],"fluid":[{"content":{"fluid":"minecraft:water","amount":1000},"chance":1.0}]},"tickInputs":{"eu":[{"content":16,"chance":1.0}]}})

//====================================================================================================================================================================\\
//                                                                  GTCEU - Forge Hammer                                                                              \\
//====================================================================================================================================================================\\
                            //========================================RECIPE REMOVAL========================================\\
                            
                                event.remove({id: `gtceu:forge_hammer/hammer_${material}_ore_netherrack_to_crushed_ore`})
                                event.remove({id: `gtceu:forge_hammer/hammer_${material}_ore_endstone_to_crushed_ore`})
                                event.remove({id: `gtceu:forge_hammer/hammer_${material}_ore_to_crushed_ore`})                                
                                event.remove({id: `gtceu:forge_hammer/hammer_${material}_crushed_ore_to_impure_dust`})
                                
                            //======================================RECIPE REMOVAL END======================================\\

//====================================================================================================================================================================\\
//                                                                  GTCEU - Rock Breaker                                                                              \\
//====================================================================================================================================================================\\
                            //========================================RECIPE REMOVAL========================================\\
                            
                                event.remove({id: `gtceu:rock_breaker/obsidian`})
                                event.remove({id: `gtceu:rock_breaker/granite`})
                                event.remove({id: `gtceu:rock_breaker/andesite`})
                                event.remove({id: `gtceu:rock_breaker/stone`})
                                event.remove({id: `gtceu:rock_breaker/diorite`})
                                event.remove({id: `gtceu:rock_breaker/cobblestone`})
                                
                            //======================================RECIPE REMOVAL END======================================\\

event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:rock_breaker","duration":256,"inputs":{"item":[{"content":{"item":`kubejs:chunk_andesite_${material}`},"chance":0.0}]},"outputs":{"item":[/*{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`tfc:rock/loose/andesite`}},"chance":1.0},*/{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`kubejs:raw_${material}`}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":"gtceu:dust.quartzite"}},"chance":1.0}]},"tickInputs":{"eu":[{"content":8,"chance":1.0}]}})
event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:rock_breaker","duration":256,"inputs":{"item":[{"content":{"item":`kubejs:chunk_basalt_${material}`},"chance":0.0}]},"outputs":{"item":[/*{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`tfc:rock/loose/basalt`}},"chance":1.0},*/{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`kubejs:raw_${material}`}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`gtceu:dust.basalt`}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":"gtceu:dust_small.concrete"}},"chance":1.0}]},"tickInputs":{"eu":[{"content":8,"chance":1.0}]}})
event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:rock_breaker","duration":256,"inputs":{"item":[{"content":{"item":`kubejs:chunk_chalk_${material}`},"chance":0.0}]},"outputs":{"item":[/*{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`tfc:rock/loose/chalk`}},"chance":1.0},*/{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`kubejs:raw_${material}`}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":"gtceu:dust.caclite"}},"chance":1.0}]},"tickInputs":{"eu":[{"content":8,"chance":1.0}]}})                                     
event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:rock_breaker","duration":256,"inputs":{"item":[{"content":{"item":`kubejs:chunk_chert_${material}`},"chance":0.0}]},"outputs":{"item":[/*{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`tfc:rock/loose/chert`}},"chance":1.0},*/{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`kubejs:raw_${material}`}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":"gtceu:dust.silicon_dioxide"}},"chance":1.0}]},"tickInputs":{"eu":[{"content":8,"chance":1.0}]}})                                      
event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:rock_breaker","duration":256,"inputs":{"item":[{"content":{"item":`kubejs:chunk_claystone_${material}`},"chance":0.0}]},"outputs":{"item":[ /*{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`tfc:rock/loose/claystone`}},"chance":1.0},*/{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`kubejs:raw_${material}`}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":"gtceu:dust.clay"}},"chance":1.0}]},"tickInputs":{"eu":[{"content":8,"chance":1.0}]}})
event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:rock_breaker","duration":256,"inputs":{"item":[{"content":{"item":`kubejs:chunk_conglomerate_${material}`},"chance":0.0}]},"outputs":{"item":[/*{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`tfc:rock/loose/conglomerate`}},"chance":1.0},*/{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`kubejs:raw_${material}`}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":"gtceu:dust.quartz_sand"}},"chance":1.0}]},"tickInputs":{"eu":[{"content":8,"chance":1.0}]}})
event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:rock_breaker","duration":256,"inputs":{"item":[{"content":{"item":`kubejs:chunk_dacite_${material}`},"chance":0.0}]},"outputs":{"item":[/*{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`tfc:rock/loose/dacite`}},"chance":1.0},*/{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`kubejs:raw_${material}`}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":"gtceu:dust.obsidian"}},"chance":1.0}]},"tickInputs":{"eu":[{"content":8,"chance":1.0}]}})
event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:rock_breaker","duration":256,"inputs":{"item":[{"content":{"item":`kubejs:chunk_diorite_${material}`},"chance":0.0}]},"outputs":{"item":[/*{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`tfc:rock/loose/diorite`}},"chance":1.0},*/{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`kubejs:raw_${material}`}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":"gtceu:dust.silicon_dioxide"}},"chance":1.0}]},"tickInputs":{"eu":[{"content":8,"chance":1.0}]}})
event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:rock_breaker","duration":256,"inputs":{"item":[{"content":{"item":`kubejs:chunk_dolomite_${material}`},"chance":0.0}]},"outputs":{"item":[/*{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`tfc:rock/loose/dolomite`}},"chance":1.0},*/{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`kubejs:raw_${material}`}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":"gtceu:dust.calcium"}},"chance":1.0}]},"tickInputs":{"eu":[{"content":8,"chance":1.0}]}})
event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:rock_breaker","duration":256,"inputs":{"item":[{"content":{"item":`kubejs:chunk_gabbro_${material}`},"chance":0.0}]},"outputs":{"item":[/*{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`tfc:rock/loose/gabbro`}},"chance":1.0},*/{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`kubejs:raw_${material}`}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":"gtceu:dust.potassium_feldspar"}},"chance":1.0}]},"tickInputs":{"eu":[{"content":8,"chance":1.0}]}})
event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:rock_breaker","duration":256,"inputs":{"item":[{"content":{"item":`kubejs:chunk_gneiss_${material}`},"chance":0.0}]},"outputs":{"item":[/*{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`tfc:rock/loose/gneiss`}},"chance":1.0},*/{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`kubejs:raw_${material}`}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":"gtceu:dust.mica"}},"chance":1.0}]},"tickInputs":{"eu":[{"content":8,"chance":1.0}]}})
event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:rock_breaker","duration":256,"inputs":{"item":[{"content":{"item":`kubejs:chunk_granite_${material}`},"chance":0.0}]},"outputs":{"item":[/*{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`tfc:rock/loose/granite`}},"chance":1.0},*/{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`kubejs:raw_${material}`}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":"gtceu:dust.sodium"}},"chance":1.0}]},"tickInputs":{"eu":[{"content":8,"chance":1.0}]}})
event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:rock_breaker","duration":256,"inputs":{"item":[{"content":{"item":`kubejs:chunk_limestone_${material}`},"chance":0.0}]},"outputs":{"item":[/*{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`tfc:rock/loose/limestone`}},"chance":1.0},*/{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`kubejs:raw_${material}`}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":"gtceu:dust.magnesium"}},"chance":1.0}]},"tickInputs":{"eu":[{"content":8,"chance":1.0}]}})
event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:rock_breaker","duration":256,"inputs":{"item":[{"content":{"item":`kubejs:chunk_marble_${material}`},"chance":0.0}]},"outputs":{"item":[/*{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`tfc:rock/loose/marble`}},"chance":1.0},*/{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`kubejs:raw_${material}`}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":"gtceu:dust.calcite"}},"chance":1.0}]},"tickInputs":{"eu":[{"content":8,"chance":1.0}]}})
event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:rock_breaker","duration":256,"inputs":{"item":[{"content":{"item":`kubejs:chunk_phyllite_${material}`},"chance":0.0}]},"outputs":{"item":[ /*{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`tfc:rock/loose/phyllite`}},"chance":1.0},*/{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`kubejs:raw_${material}`}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":"gtceu:dust.mica"}},"chance":1.0}]},"tickInputs":{"eu":[{"content":8,"chance":1.0}]}})
event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:rock_breaker","duration":256,"inputs":{"item":[{"content":{"item":`kubejs:chunk_quartzite_${material}`},"chance":0.0}]},"outputs":{"item":[ /*{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`tfc:rock/loose/quartzite`}},"chance":1.0},*/{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`kubejs:raw_${material}`}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":"gtceu:dust.quartzite"}},"chance":1.0}]},"tickInputs":{"eu":[{"content":8,"chance":1.0}]}})
event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:rock_breaker","duration":256,"inputs":{"item":[{"content":{"item":`kubejs:chunk_rhyolite_${material}`},"chance":0.0}]},"outputs":{"item":[/*{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`tfc:rock/loose/rhyolite`}},"chance":1.0},*/{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`kubejs:raw_${material}`}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":"gtceu:dust.silicon_dioxide"}},"chance":1.0}]},"tickInputs":{"eu":[{"content":8,"chance":1.0}]}})
event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:rock_breaker","duration":256,"inputs":{"item":[{"content":{"item":`kubejs:chunk_schist_${material}`},"chance":0.0}]},"outputs":{"item":[/*{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`tfc:rock/loose/schist`}},"chance":1.0},*/{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`kubejs:raw_${material}`}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":"gtceu:dust.certus_quartz"}},"chance":1.0}]},"tickInputs":{"eu":[{"content":8,"chance":1.0}]}})
event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:rock_breaker","duration":256,"inputs":{"item":[{"content":{"item":`kubejs:chunk_shale_${material}`},"chance":0.0}]},"outputs":{"item":[/*{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`tfc:rock/loose/shale`}},"chance":1.0},*/{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`kubejs:raw_${material}`}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":"gtceu:dust.clay"}},"chance":1.0}]},"tickInputs":{"eu":[{"content":8,"chance":1.0}]}})
event.custom({"type":"gtceu:gt_recipe_serializer","recipe_type":"gtceu:rock_breaker","duration":256,"inputs":{"item":[{"content":{"item":`kubejs:chunk_slate_${material}`},"chance":0.0}]},"outputs":{"item":[/*{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`tfc:rock/loose/andesite`}},"chance":1.0},*/{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":4,"ingredient":{"item":`kubejs:raw_${material}`}},"chance":1.0},{"content":{"type":"gtceu:sized","fabric:type":"gtceu:sized","count":2,"ingredient":{"item":"gtceu:dust.basalt"}},"chance":1.0}]},"tickInputs":{"eu":[{"content":8,"chance":1.0}]}})
           



                
            })
        })
    })