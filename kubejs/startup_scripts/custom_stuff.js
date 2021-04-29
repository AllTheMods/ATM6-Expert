events.listen('block.registry', function (e) {
  e.create('nether_star_block').displayName('§eNether Star Block').material(block.material.iron).hardness(2).lightLevel(1)
  e.create('compressed_nether_star_block').displayName('§eCompressed Nether Star Block').material(block.material.iron).hardness(3).lightLevel(2)

  e.create('atm_star_block').displayName('§eATM Star Block').material(block.material.iron).hardness(5).lightLevel(10)
})