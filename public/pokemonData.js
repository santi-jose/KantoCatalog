const pokemonData = [
  {
    id: 1,
    name: "bulbasaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    type: ["grass", "poison"],
  },
  {
    id: 2,
    name: "ivysaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    type: ["grass", "poison"],
  },
  {
    id: 3,
    name: "venusaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    type: ["grass", "poison"],
  },
  {
    id: 4,
    name: "charmander",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    type: ["fire"],
  },
  {
    id: 5,
    name: "charmeleon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    type: ["fire"],
  },
  {
    id: 6,
    name: "charizard",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    type: ["fire", "flying"],
  },
  {
    id: 7,
    name: "squirtle",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    type: ["water"],
  },
  {
    id: 8,
    name: "wartortle",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    type: ["water"],
  },
  {
    id: 9,
    name: "blastoise",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    type: ["water"],
  },
  {
    id: 10,
    name: "caterpie",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    type: ["bug"],
  },
  {
    id: 11,
    name: "metapod",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    type: ["bug"],
  },
  {
    id: 12,
    name: "butterfree",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    type: ["bug", "flying"],
  },
  {
    id: 13,
    name: "weedle",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    type: ["bug", "poison"],
  },
  {
    id: 14,
    name: "kakuna",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    type: ["bug", "poison"],
  },
  {
    id: 15,
    name: "beedrill",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    type: ["bug", "poison"],
  },
  {
    id: 16,
    name: "pidgey",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    type: ["normal", "flying"],
  },
  {
    id: 17,
    name: "pidgeotto",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    type: ["normal", "flying"],
  },
  {
    id: 18,
    name: "pidgeot",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    type: ["normal", "flying"],
  },
  {
    id: 19,
    name: "rattata",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    type: ["normal"],
  },
  {
    id: 20,
    name: "raticate",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    type: ["normal"],
  },
  {
    id: 21,
    name: "spearow",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    type: ["normal", "flying"],
  },
  {
    id: 22,
    name: "fearow",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    type: ["normal", "flying"],
  },
  {
    id: 23,
    name: "ekans",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    type: ["poison"],
  },
  {
    id: 24,
    name: "arbok",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    type: ["poison"],
  },
  {
    id: 25,
    name: "pikachu",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    type: ["electric"],
  },
  {
    id: 26,
    name: "raichu",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    type: ["electric"],
  },
  {
    id: 27,
    name: "sandshrew",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    type: ["ground"],
  },
  {
    id: 28,
    name: "sandslash",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    type: ["ground"],
  },
  {
    id: 29,
    name: "nidoran-f",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    type: ["poison"],
  },
  {
    id: 30,
    name: "nidorina",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    type: ["poison"],
  },
  {
    id: 31,
    name: "nidoqueen",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    type: ["poison", "ground"],
  },
  {
    id: 32,
    name: "nidoran-m",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    type: ["poison"],
  },
  {
    id: 33,
    name: "nidorino",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    type: ["poison"],
  },
  {
    id: 34,
    name: "nidoking",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    type: ["poison", "ground"],
  },
  {
    id: 35,
    name: "clefairy",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    type: ["fairy"],
  },
  {
    id: 36,
    name: "clefable",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    type: ["fairy"],
  },
  {
    id: 37,
    name: "vulpix",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    type: ["fire"],
  },
  {
    id: 38,
    name: "ninetales",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    type: ["fire"],
  },
  {
    id: 39,
    name: "jigglypuff",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    type: ["normal", "fairy"],
  },
  {
    id: 40,
    name: "wigglytuff",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    type: ["normal", "fairy"],
  },
  {
    id: 41,
    name: "zubat",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    type: ["poison", "flying"],
  },
  {
    id: 42,
    name: "golbat",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    type: ["poison", "flying"],
  },
  {
    id: 43,
    name: "oddish",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    type: ["grass", "poison"],
  },
  {
    id: 44,
    name: "gloom",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    type: ["grass", "poison"],
  },
  {
    id: 45,
    name: "vileplume",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    type: ["grass", "poison"],
  },
  {
    id: 46,
    name: "paras",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    type: ["bug", "grass"],
  },
  {
    id: 47,
    name: "parasect",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    type: ["bug", "grass"],
  },
  {
    id: 48,
    name: "venonat",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    type: ["bug", "poison"],
  },
  {
    id: 49,
    name: "venomoth",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    type: ["bug", "poison"],
  },
  {
    id: 50,
    name: "diglett",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    type: ["ground"],
  },
  {
    id: 51,
    name: "dugtrio",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    type: ["ground"],
  },
  {
    id: 52,
    name: "meowth",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    type: ["normal"],
  },
  {
    id: 53,
    name: "persian",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    type: ["normal"],
  },
  {
    id: 54,
    name: "psyduck",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    type: ["water"],
  },
  {
    id: 55,
    name: "golduck",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    type: ["water"],
  },
  {
    id: 56,
    name: "mankey",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    type: ["fighting"],
  },
  {
    id: 57,
    name: "primeape",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    type: ["fighting"],
  },
  {
    id: 58,
    name: "growlithe",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    type: ["fire"],
  },
  {
    id: 59,
    name: "arcanine",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    type: ["fire"],
  },
  {
    id: 60,
    name: "poliwag",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    type: ["water"],
  },
  {
    id: 61,
    name: "poliwhirl",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    type: ["water"],
  },
  {
    id: 62,
    name: "poliwrath",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    type: ["water", "fighting"],
  },
  {
    id: 63,
    name: "abra",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    type: ["psychic"],
  },
  {
    id: 64,
    name: "kadabra",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    type: ["psychic"],
  },
  {
    id: 65,
    name: "alakazam",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    type: ["psychic"],
  },
  {
    id: 66,
    name: "machop",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    type: ["fighting"],
  },
  {
    id: 67,
    name: "machoke",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    type: ["fighting"],
  },
  {
    id: 68,
    name: "machamp",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    type: ["fighting"],
  },
  {
    id: 69,
    name: "bellsprout",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    type: ["grass", "poison"],
  },
  {
    id: 70,
    name: "weepinbell",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    type: ["grass", "poison"],
  },
  {
    id: 71,
    name: "victreebel",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    type: ["grass", "poison"],
  },
  {
    id: 72,
    name: "tentacool",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    type: ["water", "poison"],
  },
  {
    id: 73,
    name: "tentacruel",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    type: ["water", "poison"],
  },
  {
    id: 74,
    name: "geodude",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    type: ["rock", "ground"],
  },
  {
    id: 75,
    name: "graveler",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    type: ["rock", "ground"],
  },
  {
    id: 76,
    name: "golem",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    type: ["rock", "ground"],
  },
  {
    id: 77,
    name: "ponyta",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    type: ["fire"],
  },
  {
    id: 78,
    name: "rapidash",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    type: ["fire"],
  },
  {
    id: 79,
    name: "slowpoke",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    type: ["water", "psychic"],
  },
  {
    id: 80,
    name: "slowbro",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    type: ["water", "psychic"],
  },
  {
    id: 81,
    name: "magnemite",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    type: ["electric", "steel"],
  },
  {
    id: 82,
    name: "magneton",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    type: ["electric", "steel"],
  },
  {
    id: 83,
    name: "farfetchd",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    type: ["normal", "flying"],
  },
  {
    id: 84,
    name: "doduo",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    type: ["normal", "flying"],
  },
  {
    id: 85,
    name: "dodrio",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    type: ["normal", "flying"],
  },
  {
    id: 86,
    name: "seel",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    type: ["water"],
  },
  {
    id: 87,
    name: "dewgong",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    type: ["water", "ice"],
  },
  {
    id: 88,
    name: "grimer",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    type: ["poison"],
  },
  {
    id: 89,
    name: "muk",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    type: ["poison"],
  },
  {
    id: 90,
    name: "shellder",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    type: ["water"],
  },
  {
    id: 91,
    name: "cloyster",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    type: ["water", "ice"],
  },
  {
    id: 92,
    name: "gastly",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    type: ["ghost", "poison"],
  },
  {
    id: 93,
    name: "haunter",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    type: ["ghost", "poison"],
  },
  {
    id: 94,
    name: "gengar",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    type: ["ghost", "poison"],
  },
  {
    id: 95,
    name: "onix",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    type: ["rock", "ground"],
  },
  {
    id: 96,
    name: "drowzee",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    type: ["psychic"],
  },
  {
    id: 97,
    name: "hypno",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    type: ["psychic"],
  },
  {
    id: 98,
    name: "krabby",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    type: ["water"],
  },
  {
    id: 99,
    name: "kingler",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    type: ["water"],
  },
  {
    id: 100,
    name: "voltorb",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    type: ["electric"],
  },
  {
    id: 100,
    name: "voltorb",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    type: ["electric"],
  },
  {
    id: 101,
    name: "electrode",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    type: ["electric"],
  },
  {
    id: 102,
    name: "exeggcute",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    type: ["grass", "psychic"],
  },
  {
    id: 103,
    name: "exeggutor",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    type: ["grass", "psychic"],
  },
  {
    id: 104,
    name: "cubone",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    type: ["ground"],
  },
  {
    id: 105,
    name: "marowak",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    type: ["ground"],
  },
  {
    id: 106,
    name: "hitmonlee",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    type: ["fighting"],
  },
  {
    id: 107,
    name: "hitmonchan",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    type: ["fighting"],
  },
  {
    id: 108,
    name: "lickitung",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    type: ["normal"],
  },
  {
    id: 109,
    name: "koffing",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    type: ["poison"],
  },
  {
    id: 110,
    name: "weezing",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    type: ["poison"],
  },
  {
    id: 111,
    name: "rhyhorn",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    type: ["ground", "rock"],
  },
  {
    id: 112,
    name: "rhydon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    type: ["ground", "rock"],
  },
  {
    id: 113,
    name: "chansey",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    type: ["normal"],
  },
  {
    id: 114,
    name: "tangela",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    type: ["grass"],
  },
  {
    id: 115,
    name: "kangaskhan",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    type: ["normal"],
  },
  {
    id: 116,
    name: "horsea",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    type: ["water"],
  },
  {
    id: 117,
    name: "seadra",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    type: ["water"],
  },
  {
    id: 118,
    name: "goldeen",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    type: ["water"],
  },
  {
    id: 119,
    name: "seaking",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    type: ["water"],
  },
  {
    id: 120,
    name: "staryu",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    type: ["water"],
  },
  {
    id: 121,
    name: "starmie",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    type: ["water", "psychic"],
  },
  {
    id: 122,
    name: "mr-mime",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    type: ["psychic", "fairy"],
  },
  {
    id: 123,
    name: "scyther",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    type: ["bug", "flying"],
  },
  {
    id: 124,
    name: "jynx",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    type: ["ice", "psychic"],
  },
  {
    id: 125,
    name: "electabuzz",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    type: ["electric"],
  },
  {
    id: 126,
    name: "magmar",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    type: ["fire"],
  },
  {
    id: 127,
    name: "pinsir",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    type: ["bug"],
  },
  {
    id: 128,
    name: "tauros",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    type: ["normal"],
  },
  {
    id: 129,
    name: "magikarp",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    type: ["water"],
  },
  {
    id: 130,
    name: "gyarados",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    type: ["water", "flying"],
  },
  {
    id: 131,
    name: "lapras",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    type: ["water", "ice"],
  },
  {
    id: 132,
    name: "ditto",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    type: ["normal"],
  },
  {
    id: 133,
    name: "eevee",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    type: ["normal"],
  },
  {
    id: 134,
    name: "vaporeon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    type: ["water"],
  },
  {
    id: 135,
    name: "jolteon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    type: ["electric"],
  },
  {
    id: 136,
    name: "flareon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    type: ["fire"],
  },
  {
    id: 137,
    name: "porygon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    type: ["normal"],
  },
  {
    id: 138,
    name: "omanyte",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    type: ["rock", "water"],
  },
  {
    id: 139,
    name: "omastar",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    type: ["rock", "water"],
  },
  {
    id: 140,
    name: "kabuto",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    type: ["rock", "water"],
  },
  {
    id: 141,
    name: "kabutops",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    type: ["rock", "water"],
  },
  {
    id: 142,
    name: "aerodactyl",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    type: ["rock", "flying"],
  },
  {
    id: 143,
    name: "snorlax",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    type: ["normal"],
  },
  {
    id: 144,
    name: "articuno",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    type: ["ice", "flying"],
  },
  {
    id: 145,
    name: "zapdos",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    type: ["electric", "flying"],
  },
  {
    id: 146,
    name: "moltres",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    type: ["fire", "flying"],
  },
  {
    id: 147,
    name: "dratini",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    type: ["dragon"],
  },
  {
    id: 148,
    name: "dragonair",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    type: ["dragon"],
  },
  {
    id: 149,
    name: "dragonite",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    type: ["dragon", "flying"],
  },
  {
    id: 150,
    name: "mewtwo",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    type: ["psychic"],
  },
  {
    id: 151,
    name: "mew",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    type: ["psychic"],
  },
];

export default pokemonData;