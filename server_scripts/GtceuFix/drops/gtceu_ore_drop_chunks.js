
LootJS.modifiers((event) => {
var oredrops = ["almandine","aluminium","alunite","amethyst","apatite","asbestos","banded_iron","barite","basaltic","bastnasite","bauxite","bentonite","beryllium","blue_topaz","bornite","brown_limonite","calcite","cassiterite","certus_quartz","chalcocite","chalcopyrite","chromite","cinnabar","coal","cobalt","cobaltite","cooperite","copper","diamond","diatomite","electrotine","emerald","fullers_earth","galena","garnet","garnet_red","garnet_yellow","garnierite","glauconite","gold","granitic","graphite","green_sapphire","grossular","gypsum","ilmenite","iron","kyanite","lapis","lazurite","lead","lepidolite","lithium","magnesite","magnetite","malachite","mica","molybdenite","molybdenum","monazite","naquadah","neodymium","nether_quartz","nickel","oilsands","olivine","opal","palladium","pentlandite","pitchblende","platinum","plutonium","pollucite","powellite","pyrite","pyrochlore","pyrolusite","pyrope","quartzite","realgar","redstone","rock_salt","ruby","salt","saltpeter","sapphire","scheelite","silver","soapstone","sodalite","spessartine","sphalerite","spodumene","stibnite","sulfur","talc","tantalite","tetrahedrite","thorium","tin","topaz","tricalcium_phosphate","trona","tungstate","uraninite","vanadium_magnetite","wulfenite","yellow_limonite","zeolite"]
    oredrops.forEach(oredrop => {
    event
    .addBlockLootModifier(`gtceu:ore_${oredrop}`)
        .removeLoot('*')
        .pool(p => {
             ItemFilter.canPerformAction('pickaxe_dig')
            p.not(n => n.matchMainHand(ItemFilter.hasEnchantment(/.*/)));
            p.addLoot(`chunk_${oredrop}`);
            //p.randomChance(0.5);
            //p.addLoot('kubejs:andesite_chunk');
        });
        event
        .addBlockLootModifier(`gtceu:ore_basalt_${oredrop}`)
            .removeLoot('*')
            .pool(p => {
                 ItemFilter.canPerformAction('pickaxe_dig')
                p.not(n => n.matchMainHand(ItemFilter.hasEnchantment(/.*/)));
                p.addLoot(`chunk_${oredrop}`);
                //p.randomChance(0.5);
                //p.addLoot('kubejs:andesite_chunk');
            });    
        event
        .addBlockLootModifier(`gtceu:ore_sand_${oredrop}`)
            .removeLoot('*')
            .pool(p => {
                 ItemFilter.canPerformAction('pickaxe_dig')
                p.not(n => n.matchMainHand(ItemFilter.hasEnchantment(/.*/)));
                p.addLoot(`chunk_${oredrop}`);
                //p.randomChance(0.5);
                //p.addLoot('kubejs:andesite_chunk');
            });    
        event
            .addBlockLootModifier(`gtceu:ore_granite_${oredrop}`)
                .removeLoot('*')
                .pool(p => {
                     ItemFilter.canPerformAction('pickaxe_dig')
                    p.not(n => n.matchMainHand(ItemFilter.hasEnchantment(/.*/)));
                    p.addLoot(`chunk_${oredrop}`);
                    //p.randomChance(0.5);
                    //p.addLoot('kubejs:andesite_chunk');
                });    
        event
        .addBlockLootModifier(`gtceu:ore_andesite_${oredrop}`)
            .removeLoot('*')
            .pool(p => {
                 ItemFilter.canPerformAction('pickaxe_dig')
                p.not(n => n.matchMainHand(ItemFilter.hasEnchantment(/.*/)));
                p.addLoot(`chunk_${oredrop}`);
                //p.randomChance(0.5);
                //p.addLoot('kubejs:andesite_chunk');
            });   
        event
        .addBlockLootModifier(`gtceu:ore_endstone_${oredrop}`)
            .removeLoot('*')
            .pool(p => {
                 ItemFilter.canPerformAction('pickaxe_dig')
                p.not(n => n.matchMainHand(ItemFilter.hasEnchantment(/.*/)));
                p.addLoot(`chunk_${oredrop}`);
                //p.randomChance(0.5);
                //p.addLoot('kubejs:andesite_chunk');
            });    
        event
        .addBlockLootModifier(`gtceu:ore_red_sand_${oredrop}`)
            .removeLoot('*')
            .pool(p => {
                 ItemFilter.canPerformAction('pickaxe_dig')
                p.not(n => n.matchMainHand(ItemFilter.hasEnchantment(/.*/)));
                p.addLoot(`chunk_${oredrop}`);
                //p.randomChance(0.5);
                //p.addLoot('kubejs:andesite_chunk');
            });    
        event
        .addBlockLootModifier(`gtceu:ore_nether_${oredrop}`)
            .removeLoot('*')
            .pool(p => {
                 ItemFilter.canPerformAction('pickaxe_dig')
                p.not(n => n.matchMainHand(ItemFilter.hasEnchantment(/.*/)));
                p.addLoot(`chunk_${oredrop}`);
                //p.randomChance(0.5);
                //p.addLoot('kubejs:andesite_chunk');
            });    
        event
        .addBlockLootModifier(`gtceu:ore_diorite_${oredrop}`)
            .removeLoot('*')
            .pool(p => 
                {ItemFilter.canPerformAction('pickaxe_dig')
                p.not(n => n.matchMainHand(ItemFilter.hasEnchantment(/.*/)));
                p.addLoot(`chunk_${oredrop}`);
                //p.randomChance(0.5);
                //p.addLoot('kubejs:andesite_chunk');
            });
})
})