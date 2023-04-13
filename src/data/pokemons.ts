const pokemons = [
  {
    name: 'Venusaur',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/venusaur/roster/roster-venusaur.png',
      big: 'https://unite.pokemon.com/images/pokemon/venusaur/roster/roster-venusaur-2x.png'
    }
  },
  {
    name: 'Charizard',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/charizard/roster/roster-charizard.png',
      big: 'https://unite.pokemon.com/images/pokemon/charizard/roster/roster-charizard-2x.png'
    }
  },
  {
    name: 'Blastoise',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/blastoise/roster/roster-blastoise.png',
      big: 'https://unite.pokemon.com/images/pokemon/blastoise/roster/roster-blastoise-2x.png'
    }
  },
  {
    name: 'Pikachu',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/pikachu/roster/roster-pikachu.png',
      big: 'https://unite.pokemon.com/images/pokemon/pikachu/roster/roster-pikachu-2x.png'
    }
  },
  {
    name: 'Clefable',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/clefable/roster/roster-clefable.png',
      big: 'https://unite.pokemon.com/images/pokemon/clefable/roster/roster-clefable-2x.png'
    }
  },
  {
    name: 'Alolan Ninetales',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/alolan-ninetales/roster/roster-alolan-ninetales.png',
      big: 'https://unite.pokemon.com/images/pokemon/alolan-ninetales/roster/roster-alolan-ninetales-2x.png'
    }
  },
  {
    name: 'Wigglytuff',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/wigglytuff/roster/roster-wigglytuff.png',
      big: 'https://unite.pokemon.com/images/pokemon/wigglytuff/roster/roster-wigglytuff-2x.png'
    }
  },
  {
    name: 'Machamp',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/machamp/roster/roster-machamp.png',
      big: 'https://unite.pokemon.com/images/pokemon/machamp/roster/roster-machamp-2x.png'
    }
  },
  {
    name: 'Slowbro',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/slowbro/roster/roster-slowbro.png',
      big: 'https://unite.pokemon.com/images/pokemon/slowbro/roster/roster-slowbro-2x.png'
    }
  },
  {
    name: 'Dodrio',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/dodrio/roster/roster-dodrio.png',
      big: 'https://unite.pokemon.com/images/pokemon/dodrio/roster/roster-dodrio-2x.png'
    }
  },
  {
    name: 'Gengar',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/gengar/roster/roster-gengar.png',
      big: 'https://unite.pokemon.com/images/pokemon/gengar/roster/roster-gengar-2x.png'
    }
  },
  {
    name: 'Blissey',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/blissey/roster/roster-blissey.png',
      big: 'https://unite.pokemon.com/images/pokemon/blissey/roster/roster-blissey-2x.png'
    }
  },
  {
    name: 'Mr. Mime',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/mr-mime/roster/roster-mr-mime.png',
      big: 'https://unite.pokemon.com/images/pokemon/mr-mime/roster/roster-mr-mime-2x.png'
    }
  },
  {
    name: 'Scizor',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/scizor/roster/roster-scizor.png',
      big: 'https://unite.pokemon.com/images/pokemon/scizor/roster/roster-scizor-2x.png'
    }
  },
  {
    name: 'Lapras',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/lapras/roster/roster-lapras.png',
      big: 'https://unite.pokemon.com/images/pokemon/lapras/roster/roster-lapras-2x.png'
    }
  },
  {
    name: 'Snorlax',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/snorlax/roster/roster-snorlax.png',
      big: 'https://unite.pokemon.com/images/pokemon/snorlax/roster/roster-snorlax-2x.png'
    }
  },
  {
    name: 'Dragonite',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/dragonite/roster/roster-dragonite.png',
      big: 'https://unite.pokemon.com/images/pokemon/dragonite/roster/roster-dragonite-2x.png'
    }
  },
  {
    name: 'Mew',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/mew/roster/roster-mew.png',
      big: 'https://unite.pokemon.com/images/pokemon/mew/roster/roster-mew-2x.png'
    }
  },
  {
    name: 'Azumarill',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/azumarill/roster/roster-azumarill.png',
      big: 'https://unite.pokemon.com/images/pokemon/azumarill/roster/roster-azumarill-2x.png'
    }
  },
  {
    name: 'Espeon',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/espeon/roster/roster-espeon.png',
      big: 'https://unite.pokemon.com/images/pokemon/espeon/roster/roster-espeon-2x.png'
    }
  },
  {
    name: 'Umbreon',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/umbreon/roster/roster-umbreon.png',
      big: 'https://unite.pokemon.com/images/pokemon/umbreon/roster/roster-umbreon-2x.png'
    }
  },
  {
    name: 'Mamoswine',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/mamoswine/roster/roster-mamoswine.png',
      big: 'https://unite.pokemon.com/images/pokemon/mamoswine/roster/roster-mamoswine-2x.png'
    }
  },
  {
    name: 'Tyranitar',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/tyranitar/roster/roster-tyranitar.png',
      big: 'https://unite.pokemon.com/images/pokemon/tyranitar/roster/roster-tyranitar-2x.png'
    }
  },
  {
    name: 'Gardevoir',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/gardevoir/roster/roster-gardevoir.png',
      big: 'https://unite.pokemon.com/images/pokemon/gardevoir/roster/roster-gardevoir-2x.png'
    }
  },
  {
    name: 'Sableye',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/sableye/roster/roster-sableye.png',
      big: 'https://unite.pokemon.com/images/pokemon/sableye/roster/roster-sableye-2x.png'
    }
  },
  {
    name: 'Absol',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/absol/roster/roster-absol.png',
      big: 'https://unite.pokemon.com/images/pokemon/absol/roster/roster-absol-2x.png'
    }
  },
  {
    name: 'Garchomp',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/garchomp/roster/roster-garchomp.png',
      big: 'https://unite.pokemon.com/images/pokemon/garchomp/roster/roster-garchomp-2x.png'
    }
  },
  {
    name: 'Lucario',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/lucario/roster/roster-lucario.png',
      big: 'https://unite.pokemon.com/images/pokemon/lucario/roster/roster-lucario-2x.png'
    }
  },
  {
    name: 'Glaceon',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/glaceon/roster/roster-glaceon.png',
      big: 'https://unite.pokemon.com/images/pokemon/glaceon/roster/roster-glaceon-2x.png'
    }
  },
  {
    name: 'Crustle',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/crustle/roster/roster-crustle.png',
      big: 'https://unite.pokemon.com/images/pokemon/crustle/roster/roster-crustle-2x.png'
    }
  },
  {
    name: 'Zoroark',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/zoroark/roster/roster-zoroark.png',
      big: 'https://unite.pokemon.com/images/pokemon/zoroark/roster/roster-zoroark-2x.png'
    }
  },
  {
    name: 'Chandelure',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/chandelure/roster/roster-chandelure.png',
      big: 'https://unite.pokemon.com/images/pokemon/chandelure/roster/roster-chandelure-2x.png'
    }
  },
  {
    name: 'Delphox',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/delphox/roster/roster-delphox.png',
      big: 'https://unite.pokemon.com/images/pokemon/delphox/roster/roster-delphox-2x.png'
    }
  },
  {
    name: 'Greninja',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/greninja/roster/roster-greninja.png',
      big: 'https://unite.pokemon.com/images/pokemon/greninja/roster/roster-greninja-2x.png'
    }
  },
  {
    name: 'Talonflame',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/talonflame/roster/roster-talonflame.png',
      big: 'https://unite.pokemon.com/images/pokemon/talonflame/roster/roster-talonflame-2x.png'
    }
  },
  {
    name: 'Aegislash',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/aegislash/roster/roster-aegislash.png',
      big: 'https://unite.pokemon.com/images/pokemon/aegislash/roster/roster-aegislash-2x.png'
    }
  },
  {
    name: 'Sylveon',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/sylveon/roster/roster-sylveon.png',
      big: 'https://unite.pokemon.com/images/pokemon/sylveon/roster/roster-sylveon-2x.png'
    }
  },
  {
    name: 'Goodra',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/goodra/roster/roster-goodra.png',
      big: 'https://unite.pokemon.com/images/pokemon/goodra/roster/roster-goodra-2x.png'
    }
  },
  {
    name: 'Trevenant',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/trevenant/roster/roster-trevenant.png',
      big: 'https://unite.pokemon.com/images/pokemon/trevenant/roster/roster-trevenant-2x.png'
    }
  },
  {
    name: 'Hoopa',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/hoopa/roster/roster-hoopa.png',
      big: 'https://unite.pokemon.com/images/pokemon/hoopa/roster/roster-hoopa-2x.png'
    }
  },
  {
    name: 'Decidueye',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/decidueye/roster/roster-decidueye.png',
      big: 'https://unite.pokemon.com/images/pokemon/decidueye/roster/roster-decidueye-2x.png'
    }
  },
  {
    name: 'Tsareena',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/tsareena/roster/roster-tsareena.png',
      big: 'https://unite.pokemon.com/images/pokemon/tsareena/roster/roster-tsareena-2x.png'
    }
  },
  {
    name: 'Comfey',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/comfey/roster/roster-comfey.png',
      big: 'https://unite.pokemon.com/images/pokemon/comfey/roster/roster-comfey-2x.png'
    }
  },
  {
    name: 'Buzzwole',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/buzzwole/roster/roster-buzzwole.png',
      big: 'https://unite.pokemon.com/images/pokemon/buzzwole/roster/roster-buzzwole-2x.png'
    }
  },
  {
    name: 'Zeraora',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/zeraora/roster/roster-zeraora.png',
      big: 'https://unite.pokemon.com/images/pokemon/zeraora/roster/roster-zeraora-2x.png'
    }
  },
  {
    name: 'Cinderace',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/cinderace/roster/roster-cinderace.png',
      big: 'https://unite.pokemon.com/images/pokemon/cinderace/roster/roster-cinderace-2x.png'
    }
  },
  {
    name: 'Greedent',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/greedent/roster/roster-greedent.png',
      big: 'https://unite.pokemon.com/images/pokemon/greedent/roster/roster-greedent-2x.png'
    }
  },
  {
    name: 'Eldegoss',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/eldegoss/roster/roster-eldegoss.png',
      big: 'https://unite.pokemon.com/images/pokemon/eldegoss/roster/roster-eldegoss-2x.png'
    }
  },
  {
    name: 'Cramorant',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/cramorant/roster/roster-cramorant.png',
      big: 'https://unite.pokemon.com/images/pokemon/cramorant/roster/roster-cramorant-2x.png'
    }
  },
  {
    name: 'Duraludon',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/duraludon/roster/roster-duraludon.png',
      big: 'https://unite.pokemon.com/images/pokemon/duraludon/roster/roster-duraludon-2x.png'
    }
  },
  {
    name: 'Dragapult',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/dragapult/roster/roster-dragapult.png',
      big: 'https://unite.pokemon.com/images/pokemon/dragapult/roster/roster-dragapult-2x.png'
    }
  },
  {
    name: 'Zacian',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/zacian/roster/roster-zacian.png',
      big: 'https://unite.pokemon.com/images/pokemon/zacian/roster/roster-zacian-2x.png'
    }
  },
  {
    name: 'Urshifu',
    images: {
      main: 'https://unite.pokemon.com/images/pokemon/urshifu/roster/roster-urshifu.png',
      big: 'https://unite.pokemon.com/images/pokemon/urshifu/roster/roster-urshifu-2x.png'
    }
  }
]

export default pokemons