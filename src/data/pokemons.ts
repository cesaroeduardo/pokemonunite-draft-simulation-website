const pokemons = [
  {
    name: 'Venusaur',
    images: {
      main: '/pokemons/roster-venusaur.png',
      big: '/pokemons/roster-venusaur-2x.png'
    },
    active: true
  },
  {
    name: 'Charizard',
    images: {
      main: '/pokemons/roster-charizard.png',
      big: '/pokemons/roster-charizard-2x.png'
    },
    active: true
  },
  {
    name: 'Blastoise',
    images: {
      main: '/pokemons/roster-blastoise.png',
      big: '/pokemons/roster-blastoise-2x.png'
    },
    active: true
  },
  {
    name: 'Pikachu',
    images: {
      main: '/pokemons/roster-pikachu.png',
      big: '/pokemons/roster-pikachu-2x.png'
    },
    active: true
  },
  {
    name: 'Clefable',
    images: {
      main: '/pokemons/roster-clefable.png',
      big: '/pokemons/roster-clefable-2x.png'
    },
    active: true
  },
  {
    name: 'Alolan Ninetales',
    images: {
      main: '/pokemons/roster-alolan-ninetales.png',
      big: '/pokemons/roster-alolan-ninetales-2x.png'
    },
    active: true
  },
  {
    name: 'Wigglytuff',
    images: {
      main: '/pokemons/roster-wigglytuff.png',
      big: '/pokemons/roster-wigglytuff-2x.png'
    },
    active: true
  },
  {
    name: 'Machamp',
    images: {
      main: '/pokemons/roster-machamp.png',
      big: '/pokemons/roster-machamp-2x.png'
    },
    active: true
  },
  {
    name: 'Slowbro',
    images: {
      main: '/pokemons/roster-slowbro.png',
      big: '/pokemons/roster-slowbro-2x.png'
    },
    active: true
  },
  {
    name: 'Dodrio',
    images: {
      main: '/pokemons/roster-dodrio.png',
      big: '/pokemons/roster-dodrio-2x.png'
    },
    active: true
  },
  {
    name: 'Gengar',
    images: {
      main: '/pokemons/roster-gengar.png',
      big: '/pokemons/roster-gengar-2x.png'
    },
    active: true
  },
  {
    name: 'Blissey',
    images: {
      main: '/pokemons/roster-blissey.png',
      big: '/pokemons/roster-blissey-2x.png'
    },
    active: true
  },
  {
    name: 'Mr. Mime',
    images: {
      main: '/pokemons/roster-mr-mime.png',
      big: '/pokemons/roster-mr-mime-2x.png'
    },
    active: true
  },
  {
    name: 'Scizor',
    images: {
      main: '/pokemons/roster-scizor.png',
      big: '/pokemons/roster-scizor-2x.png'
    },
    active: true
  },
  {
    name: 'Lapras',
    images: {
      main: '/pokemons/roster-lapras.png',
      big: '/pokemons/roster-lapras-2x.png'
    },
    active: true
  },
  {
    name: 'Snorlax',
    images: {
      main: '/pokemons/roster-snorlax.png',
      big: '/pokemons/roster-snorlax-2x.png'
    },
    active: true
  },
  {
    name: 'Dragonite',
    images: {
      main: '/pokemons/roster-dragonite.png',
      big: '/pokemons/roster-dragonite-2x.png'
    },
    active: true
  },
  {
    name: 'Mew',
    images: {
      main: '/pokemons/roster-mew.png',
      big: '/pokemons/roster-mew-2x.png'
    },
    active: true
  },
  {
    name: 'Azumarill',
    images: {
      main: '/pokemons/roster-azumarill.png',
      big: '/pokemons/roster-azumarill-2x.png'
    },
    active: true
  },
  {
    name: 'Espeon',
    images: {
      main: '/pokemons/roster-espeon.png',
      big: '/pokemons/roster-espeon-2x.png'
    },
    active: true
  },
  {
    name: 'Umbreon',
    images: {
      main: '/pokemons/roster-umbreon.png',
      big: '/pokemons/roster-umbreon-2x.png'
    },
    active: false
  },
  {
    name: 'Mamoswine',
    images: {
      main: '/pokemons/roster-mamoswine.png',
      big: '/pokemons/roster-mamoswine-2x.png'
    },
    active: true
  },
  {
    name: 'Tyranitar',
    images: {
      main: '/pokemons/roster-tyranitar.png',
      big: '/pokemons/roster-tyranitar-2x.png'
    },
    active: true
  },
  {
    name: 'Gardevoir',
    images: {
      main: '/pokemons/roster-gardevoir.png',
      big: '/pokemons/roster-gardevoir-2x.png'
    },
    active: true
  },
  {
    name: 'Sableye',
    images: {
      main: '/pokemons/roster-sableye.png',
      big: '/pokemons/roster-sableye-2x.png'
    },
    active: true
  },
  {
    name: 'Absol',
    images: {
      main: '/pokemons/roster-absol.png',
      big: '/pokemons/roster-absol-2x.png'
    },
    active: true
  },
  {
    name: 'Garchomp',
    images: {
      main: '/pokemons/roster-garchomp.png',
      big: '/pokemons/roster-garchomp-2x.png'
    },
    active: true
  },
  {
    name: 'Lucario',
    images: {
      main: '/pokemons/roster-lucario.png',
      big: '/pokemons/roster-lucario-2x.png'
    },
    active: true
  },
  {
    name: 'Glaceon',
    images: {
      main: '/pokemons/roster-glaceon.png',
      big: '/pokemons/roster-glaceon-2x.png'
    },
    active: true
  },
  {
    name: 'Crustle',
    images: {
      main: '/pokemons/roster-crustle.png',
      big: '/pokemons/roster-crustle-2x.png'
    },
    active: true
  },
  {
    name: 'Zoroark',
    images: {
      main: '/pokemons/roster-zoroark.png',
      big: '/pokemons/roster-zoroark-2x.png'
    },
    active: true
  },
  {
    name: 'Chandelure',
    images: {
      main: '/pokemons/roster-chandelure.png',
      big: '/pokemons/roster-chandelure-2x.png'
    },
    active: false
  },
  {
    name: 'Delphox',
    images: {
      main: '/pokemons/roster-delphox.png',
      big: '/pokemons/roster-delphox-2x.png'
    },
    active: true
  },
  {
    name: 'Greninja',
    images: {
      main: '/pokemons/roster-greninja.png',
      big: '/pokemons/roster-greninja-2x.png'
    },
    active: true
  },
  {
    name: 'Talonflame',
    images: {
      main: '/pokemons/roster-talonflame.png',
      big: '/pokemons/roster-talonflame-2x.png'
    },
    active: true
  },
  {
    name: 'Aegislash',
    images: {
      main: '/pokemons/roster-aegislash.png',
      big: '/pokemons/roster-aegislash-2x.png'
    },
    active: true
  },
  {
    name: 'Sylveon',
    images: {
      main: '/pokemons/roster-sylveon.png',
      big: '/pokemons/roster-sylveon-2x.png'
    },
    active: true
  },
  {
    name: 'Goodra',
    images: {
      main: '/pokemons/roster-goodra.png',
      big: '/pokemons/roster-goodra-2x.png'
    },
    active: true
  },
  {
    name: 'Trevenant',
    images: {
      main: '/pokemons/roster-trevenant.png',
      big: '/pokemons/roster-trevenant-2x.png'
    },
    active: true
  },
  {
    name: 'Hoopa',
    images: {
      main: '/pokemons/roster-hoopa.png',
      big: '/pokemons/roster-hoopa-2x.png'
    },
    active: true
  },
  {
    name: 'Decidueye',
    images: {
      main: '/pokemons/roster-decidueye.png',
      big: '/pokemons/roster-decidueye-2x.png'
    },
    active: true
  },
  {
    name: 'Tsareena',
    images: {
      main: '/pokemons/roster-tsareena.png',
      big: '/pokemons/roster-tsareena-2x.png'
    },
    active: true
  },
  {
    name: 'Comfey',
    images: {
      main: '/pokemons/roster-comfey.png',
      big: '/pokemons/roster-comfey-2x.png'
    },
    active: true
  },
  {
    name: 'Buzzwole',
    images: {
      main: '/pokemons/roster-buzzwole.png',
      big: '/pokemons/roster-buzzwole-2x.png'
    },
    active: true
  },
  {
    name: 'Zeraora',
    images: {
      main: '/pokemons/roster-zeraora.png',
      big: '/pokemons/roster-zeraora-2x.png'
    },
    active: true
  },
  {
    name: 'Cinderace',
    images: {
      main: '/pokemons/roster-cinderace.png',
      big: '/pokemons/roster-cinderace-2x.png'
    },
    active: true
  },
  {
    name: 'Greedent',
    images: {
      main: '/pokemons/roster-greedent.png',
      big: '/pokemons/roster-greedent-2x.png'
    },
    active: true
  },
  {
    name: 'Eldegoss',
    images: {
      main: '/pokemons/roster-eldegoss.png',
      big: '/pokemons/roster-eldegoss-2x.png'
    },
    active: true
  },
  {
    name: 'Cramorant',
    images: {
      main: '/pokemons/roster-cramorant.png',
      big: '/pokemons/roster-cramorant-2x.png'
    },
    active: true
  },
  {
    name: 'Duraludon',
    images: {
      main: '/pokemons/roster-duraludon.png',
      big: '/pokemons/roster-duraludon-2x.png'
    },
    active: true
  },
  {
    name: 'Dragapult',
    images: {
      main: '/pokemons/roster-dragapult.png',
      big: '/pokemons/roster-dragapult-2x.png'
    },
    active: true
  },
  {
    name: 'Zacian',
    images: {
      main: '/pokemons/roster-zacian.png',
      big: '/pokemons/roster-zacian-2x.png'
    },
    active: true
  },
  {
    name: 'Urshifu',
    images: {
      main: '/pokemons/roster-urshifu.png',
      big: '/pokemons/roster-urshifu-2x.png'
    },
    active: true
  }
]

export default pokemons