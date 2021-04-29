events.listen('recipes', function(e) {
    function customBlock(block, item) {
        e.shapeless(item, block, 9)
        e.shaped(block, [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: item
        })
    }

    customBlock('kubejs:nether_star_block', 'minecraft:nether_star')

    function customBlock(block, item) {
        e.shapeless(item, block, 9)
        e.shaped(block, [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: item
        })
    }

    customBlock('kubejs:compressed_nether_star_block', 'kubejs:nether_star_block')

    function customBlock(block, item) {
        e.shapeless(item, block, 9)
        e.shaped(block, [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: item
        })
    }

    customBlock('kubejs:atm_star_block', 'atmadditions:atm_star')
})