import { tradeGoodDescriptions } from './itemsAndAttributes';
import { terrainNames } from './weatherAndTerrain';
import { townPopulations } from './miscData';
import { getRandomItemOf } from '../utils/randomizer';
import { nameInspiration } from './miscData';

export const itemsAndEncounters = [
    'Old Clothing', 'Single Boot', 'Ripped Dress', 'Terrible Underwear',
    'Broken Tool', 'Rusted Chisel', 'Broken Shovel',
    'Broken Container', 'Cracked Barrel', 'Smashed Crate',
    'Broken Weapon', 'Hilt', 'Snapped Sword', 'Headless Hammer',
    'monster', 'monster', 'monster', 'monster', 
    'Defaced Sign', 'Scratched Signpost', 'Grafittied Wall',
    'Broken Exotic Item', 'Shattered Hourglass', 'Cracked Mirror',
    'Coin', 'Ancient Coin', 'So Shiny Coin', 'Cursed Coin',
    'Valuable', 'Valuable Shell Necklace', 'Valuable Copper Ring', 'Valuable Wood Brooch',
    'monster', 'monster', 'monster', 'monster', 
    'Toy', 'Spinning Top', 'Carved Horse', 'Tiny Soldier Toy',
    'Tool', 'Shovel', 'Chisel', 'Spyglass',
    'Weapon', 'Dagger', 'Stave', 'Polearm',
    'Book', 'Poetry Book', 'Cooking Book', 'Fighting Book',
    'monster', 'monster', 'monster', 'monster', 
    'Gatherables', 'Gatherables Mushroom Ring', 'Gatherables Flower Field', 'Gatherables Herbs',
    'Big Natural Object', 'Massive Tree', 'Tall Rock', 'Huge Mushroom',
    'Spooky', 'Graveyard', 'Old Mansion', 'Dark Cave',
    'Something Lost', 'Lost Trinket', 'Lost Documents', 'Lost Weapon',
    'monster', 'monster', 'monster', 'monster', 
    'Marker', 'Marker: Danger', 'Marker: Remembrance', 'Town Marker',
    'Well', 'Wishing Well', 'Bottomless Well', 'Overflowing Well',
    'Shrine', 'Overgrown Shrine', 'Shrine Awaiting Offering', 'Spotless Shrine',
    'Dwelling', 'Burnt Cottage', 'Small Hut', 'Stone Tower',
    'monster', 'monster', 'monster', 'monster', 
    'Forgotten', 'Hidden Garden', 'Lost Vault', 'Uncovered Ruin',
    'Special', 'Fallen Star', 'Magic Crystal', 'Enchanted Pool',
    'Monster Sign', 'Huge Cobwebs', 'Large Holes', 'Wreckage',
    'Human', 'Bandit', 'Thief', 'Trickster',
    'monster', 'monster', 'monster', 'monster', 
    'Supernatural', 'Ghostly Presence', 'Spooky Lights', 'Floating Flames',
    'Threat', 'Serious Threat',
    'Neutral', 'Neutral Fairy', 'Neutral Ghost', 'Neutral Spirit',
    'Dangerous Threat', 'Deadly Threat',
    'monster', 'monster', 'monster', 'monster', 
    'Hunters', 'Academics', 'Explorers', 'Travellers', 'Traders', 'Dragon'
];

export const moreRandomThings = [
    'Water', 'pond', 'well', 'oasis', 'river', 'ocean',
    'Hill', 'tiny Hill', 'jagged Hill', 'rocky Hill', 'grassy Hill', 'living Hill',
    'Hole', 'deep Hole', 'shallow Hole', 'multiple Holes', 'magic Hole',
    'Empty', 'oddly Empty', 'ruined', 'burned', 'flat', 'lifeless',
    'Green', 'overgrown', 'full of life', 'garden',
    'Living', 'Living stone', 'Living wood', 'Living objects', 'Living terrain',
    'Battle', 'ongoing Battle', 'past Battle', 'bones', 'weapons',
    'Fire', 'camp', 'remains of a Fire', 'burning', 'eternal Fire',
    'Bones', 'Bones of a building', 'ruins', 'skeletons', 'fish',
    'Animal', 'Animal lair', 'Animal tracks', 'Animal mother', 'lost Animal',
    'Shadow', 'Shadow overhead', 'shady', 'absent Shadow',
    'Statue', 'many Statues', 'huge Statue', 'destroyed Statue', 'beautiful Statue',
    'Tree', 'Tree big', 'Tree tiny', 'out of place Tree', 'artificial Tree',
    'Bridge', 'useful Bridge', 'pointless Bridge', 'wrecked Bridge',
    'Cave', 'deep Cave', 'lair', 'out of place Cave', 'light Cave',
    'Dwelling', 'burnt Dwelling', 'solid Dwelling', 'locked Dwelling', 'tiny Dwelling',
    'Swamp', 'boggy', 'Swamp life', 'foetid Swamp', 'beautiful Swamp',
    'Rock', 'unusual Rock', 'magical Rock', 'precious Rock',
    'Pillar', 'supporting Pillar', 'missing Pillar', 'collapsed Pillar',
    'Carving', 'huge Carving', 'below Carving', 'above Carving', 'natural Carving',
    'Pit', 'hidden Pit', 'obvious Pit', 'Pit leading to',
    'Danger', 'immediate Danger', 'past Danger', 'evidence of Danger', 'threat',
    'Block', 'stone Block', 'living Block', 'many Blocks', 'steps',
    'Thorns', 'natural Thorns', 'artificial Thorns', 'protecting Thorns',
    'Edge', 'cliff', 'shore', 'change of terrain',
    'Dark', 'stars', 'cave', 'Dark beneath', 'unnatural darkness',
    'Engine', 'dead engine', 'vehicle', 'mill', 'wheel',
    'Orb', 'hollow Orb', 'suspended Orb', 'cracked Orb',
    'Grove', 'Grove clearing', 'peaceful Grove', 'inhabited Grove',
    'Spike', 'threatening Spike', 'moving Spike', 'many Spikes',
    'Entrance', 'new Entrance', 'old Entrance', 'secret Entrance', 'trap Entrance',
    'Unstable', 'wild', 'Unstable ground', 'Unstable building',
    'Crystal', 'living Crystal', 'worthless Crystal', 'dangerous Crystal',
    'Trap', 'triggered Trap', 'broken Trap', 'waiting Trap',
    'Ancient', 'Ancient ruin', 'Ancient natural', 'false Ancient',
    'Treasure', 'Treasure chest', 'Treasure cave', 'Treasure goblin', 'lost Treasure'
];

export const diversionsWhileTravelling = [
    'Ruined Shrine', 'Broken Tools', 'Secluded Fishing Spot', 'Injured Person', 'Unfortunate Soul', 'Weather Forecast',
    'Trapped Animal', 'Orchard", "Fruit Trees', 'Lost Soul', 'Clear Signpost', 'Breathtaking View', 'Farm',
    'Good Hunting Spot', 'Injured Animal', 'Dragon Shrine (no staff)',
    'Fortunate Soul', 'Noble Carriage', 'Colorful Terrain',
    'Friendly Merchant', 'Wishing Well', 'Broken Cart', 'Cottage With Garden', 'Signs Of Ore', 'Swimming Hole',
    'Unexpected Shortcut', 'Nomad Camp', 'Someone In Need', 'Little Stone Statues', 'Spiritual Encounter', 'Someone Building',
    'Mysterious Animal', 'Artisan', 'Artist', 'Natural Hot Springs', 'Fellow Travellers', 'Dragon Shrine (staff)', 'Treasure',
];

export const locationOutsideTown = [
    "Monster Cave", "Cemetery", "Dank Swamp", "Mine", "Tangled Thicket", "Low Hill",
    "Abandoned Building", "Haunted Forest", "Farm", "Animal Lair", "Thorny Brush", "Fishing Spot",
    "Rocky Valley", "Windmill", "Logging Camp", "Steep Hill", "Burnt Remains", "Wild Growth",
    "Cottage", "Hunter's Lodge", "Woods", "Trees", "Swimming Hole", "Monastery", "Tower",
    "Outdoor Shrine", "Keep", "Sunken Pit", "Burrows", "Flower Field", "Faery Circle",
    "Bridge", "Wooded Valley", "Defensive Position", "Mushroom Patch", "Lake", "Dragon Roost"
];

export const locationInTown = [
    "Haunted House", "Graveyard", "House", "Square", "Blacksmith", "Park",
    "Cellar", "Sewer", "Trash", "Inn", "Guild Building", "Empty Building", "Merchant",
    "Produce Trader", "Tavern", "Weapons", "Armour", "Clothing Store", "School", "Pub",
    "Town Hall", "Books", "Library", "Scribe", "Shop", "Music Hall", "Market", "Church",
    "Shrine", "Brewer", "Animal Tamer", "Urban Farm", "Garden", "Bakery", "Adventuring Goods",
    "Stables", "General Store", "Well", "Signpost", "Mansion", "Secret Room",
];

export const guilds = [
    {
        name: 'Scouts',
        bonus: {
            terrains: [ terrainNames.woods, terrainNames.deepForest ],
            modifier: 1
        },
        weakness: {
            terrains: [ terrainNames.grassland, terrainNames.swamp ],
            modifier: 1
        }
    },
    {
        name: 'Hikers',
        bonus: {
            terrains: [ terrainNames.mountain, terrainNames.rocky ],
            modifier: 1
        },
        weakness: {
            terrains: [ terrainNames.wasteland, terrainNames.jungle ],
            modifier: 1
        }
    },
    {
        name: 'Travelers',
        bonus: {
            terrains: [ terrainNames.hills, terrainNames.grassland ],
            modifier: 1
        },
        weakness: {
            terrains: [ terrainNames.mountain, terrainNames.desert ],
            modifier: 1
        }
    },
    {
        name: 'Nomads',
        bonus: {
            terrains: [ terrainNames.desert, terrainNames.jungle ],
            modifier: 1
        },
        weakness: {
            terrains: [ terrainNames.woods, terrainNames.deepForest ],
            modifier: 1
        }
    },
    {
        name: 'Rangers',
        bonus: {
            terrains: [ terrainNames.alpine ],
            modifier: 1
        },
        weakness: {
            terrains: [ terrainNames.woods, terrainNames.jungle ],
            modifier: 1
        }
    },
    {
        name: 'Sun'
    },
    {
        name: 'Moon'
    },
    {
        name: 'Neko'
    }
];

export const town = {
    population: {
        title: "Size",
        items: townPopulations
    },
    nameInspiration: {
        title: "Name Inspiration",
        modifierLookup: { 0: 0, 1: 0, 2: 0, 3: 0 },
        items: nameInspiration
    },
    government: {
        title: "Government",
        modifierLookup: { 0: -2, 1: -1, 2: 0, 3: 0 },
        items: ["people (No Formal Leadership)", "Circle of Elders", "Heads of Families", "Guild Representatives", "Mayor", "Elected Officials", "Council", "Lottery (seasonal, weekly, whenever)", "Benevolent Dictatorship", "Hereditary Leaders", "Royalty"],
    },
    rulerPersonality: {
        title: "Ruler Personality",
        modifierLookup: { 0: 0, 1: 0, 2: 0, 3: 0 },
        items: ["Stubborn", "conservative", "scared", "arrogant", "Mysterious", "secretive", "otherwordly", "just weird", "Cynical", "pragmatic", "weary", "sarcastic", "Naive", "inexperienced", "too nice", "young", "Crude", "of no manners", "very impatient", "nonsensical", "Vacant", "forgetful", "spaced out", "hippy", "Petty", "micromanagerial", "fiddly", "cruel", "Generous", " generous to a fault", "generous (plenty to go around)", "just nice", "Meticulous", "finicky", "perfectionist", "meticulous to redeem for made mistakes", "Idealistic", "progressive", "optimistic", "slightly fanatical"]
    },
    specialtyGoods: {
        title: "Specialty Goods",
        modifierLookup: { 0: -7, 1: -5, 2: -2, 3: 0 },
        items: tradeGoodDescriptions,
    },
    mainBuilding: {
        title: "Main Building",
        modifierLookup: { 0: -1, 1: -1, 2: 0, 3: 0 },
        items: [
            "bridge", "crossroad", "canal", "ropeway",
            "market", "dock", "storage facility",
            "shrine", "temple", "meditative space",
            "heavy industry center", "industrial specialty", "ecologically minded industry center",
            "bureaucratic structure", "public works", "archive",
            "statue", "park", "gardens", "theater",
            "castle", "tower", "monument",
        ],
    },
    sights: {
        title: "Sights",
        modifierLookup: { 0: 0, 1: 0, 2: 0, 3: 0 },
        items: [
            "trees", "greenery", "overgrowth",
            "flags", "flowers",
            "functional buildings", "solid buildings", "practical buildings",
            "whimsical buildings", "strange buildings", "beautiful buildings",
            "alien plants", "odd things of nature", "strange beasts",
            "statues", "constructions", "crafts and workshops", "shrines",
        ],
    },
    sounds: {
        title: "Sounds",
        modifierLookup: { 0: 0, 1: 0, 2: 0, 3: 0 },
        items: [
            "water", "wind", "plants",
            "birds", "beasts", "bizarre animals",
            "market people", "singing people", "children",
            "creating metal", "hammering", "something creating music",
            "gurgles", "whispers", "chittering",
            "something unidentifiable", "bubbles", "something glittery",
        ],
    },
    smells: {
        title: "Smells",
        modifierLookup: { 0: 0, 1: 0, 2: 0, 3: 0 },
        items: [
            "landscape", "flowers", "animals",
            "leather", "metal", "wood",
            "herbs", "tea", "books",
            "ash", "vinegar", "citrus",
            "candles", "incense", "spices",
            "baking", "something sweet", "something savoury",
        ],
    },
    threats: {
        title: "Threat",
        modifierLookup: { 0: 0, 1: 0, 2: 0, 3: 0 },
        items: [
            "fires from drought", "fires from a heatwave", "arson",
            "floods", "rain", "contamination",
            "earthquakes", "sinkholes", "caverns",
            "wind", "miasmas", "something blowing in",
            "extreme brightness", "strange effects", "no nights, ever",
            "no light, ever", "missing people", "pitch black nights",
            "monsters raiding", "monsters in town", "competing monsters",
            "vermin", "huge critters", "cute critters",
            "austerity", "monetary imbalance", "greed",
            "feuds", "jealousy", "segregation",
            "physical isolation", "economic isolation", "social isolation",
            "fae", "some magical phenomena", "a magical scarcity",
        ],
    }
};

export const facilities = [
    { 
        name: 'Magical Recharge Stone', 
        cost: 25, 
        whereFound: 0, 
        description:"recover 1d4 MP"
    },
    { 
        name: 'Weather Factory', 
        cost: 300, 
        whereFound: 0, 
        description:"Reduce weather modifier by 3"
    },
    { 
        name: 'Stable', 
        cost: 250, 
        whereFound: 0, 
        description:"Rent a riding animal for 24 hours"
    },
    { 
        name: 'Dojo', 
        cost: 200, 
        whereFound: 1, 
        description:"Gain unarmed as a mastered weapon (req. 2 visits)"
    },
    { 
        name: 'Hot Spring', 
        cost: 150, 
        whereFound: 0, 
        description:"Reduce a status effect's target number to 4"
    },
    { 
        name: 'Quest Shop', 
        cost: 'Free', 
        whereFound: 1,  
        description:"Take on well rewarded quests for a finder's fee"
    },
    { 
        name: `${getRandomItemOf(guilds).name} Guild`, 
        cost: 'Free', 
        whereFound: 1,  
        description:"Join the Guild and gain Guild effects"
    },
    { 
        name: 'Magic Smith', 
        cost: 'the cost of the magical characteristic', 
        whereFound: 1,  
        description:"Imbue an item, weapon, or armor with a magical characteristic"
    },
    { 
        name: 'Public Bath', 
        cost: 2, 
        whereFound: 1,  
        description:"bathe."
    },
    { 
        name: 'Clothing Cleaner', 
        cost: '2gp per item of clothing cleaned', 
        whereFound: 1,  
        description:"get your clothes cleaned"
    },
    { 
        name: 'Post Office', 
        cost: 20, 
        whereFound: 2,  
        description:"Send one sheet of paper to another city"
    },
    { 
        name: 'Shipping Facility', 
        cost: 80, 
        whereFound: 2,  
        description:"Send up to 5 size worth of items to another city"
    },
    { 
        name: 'Healer (Wound healing)', 
        cost: 100, 
        whereFound: 0, 
        description:"Recover 2d8 HP"
    },
    { 
        name: 'Healer (Status Effect: First Aid)', 
        cost: 250, 
        whereFound: 1,  
        description:"Nullify a status effect’s penalty for 12 hours"
    },
    { 
        name: 'Healer (Status Effect: Healing)', 
        cost: 300, 
        whereFound: 1,  
        description:"Reduce a status effect’s target number to 3"
    },
    { 
        name: 'Item repair shop', 
        costMultiplier: 0.2,
        cost: "0.2x the item's base cost",
        whereFound: 0, 
        description:"Repair an item’s durability to max"
    },
    { 
        name: 'Library', 
        cost: 20, 
        whereFound: 3, 
        description:"Look up information about the past, including ancient history"
    },
    { 
        name: 'Information center', 
        cost: 10, 
        whereFound: 1,  
        description:"Get information about the present or recent past"
    },
    { 
        name: 'Weather prediction Facility', 
        cost: 10, 
        whereFound: 0, 
        description:"Get a prediction about the weather for up to 3 days in advance (70% accurate)"
    },
    { 
        name: 'Fortune Teller', 
        cost: 10, 
        whereFound: 2,  
        description:"Hear a prediction about the future"
    },
    { 
        name: 'Inn - Squalor', 
        cost: 5, 
        whereFound: 0, 
        description: 'get A room without so much as a bed. For the next day’s Condition check, roll twice and take the lower roll'
    },
    { 
        name: 'Inn - Basic Room', 
        cost: 20, 
        whereFound: 0, 
        description: 'get A large room with beds for 3-6 people and a table'
    },
    { 
        name: 'Inn - Suite', 
        cost: 100, 
        whereFound: 1, 
        description: 'get A well appointed set of rooms with a soft bed for one individual. Gives a +1 bonus bonus to the next day’s Condition check'
    },
    { 
        name: 'Inn - Royal Suite', 
        cost: 1200, 
        whereFound: 2, 
        description: 'get A set of rooms filled with exquisitely crafted furniture and an extremely comfortable bed. For the next day’s Condition check , roll twice and take the better roll'
    }
];

export const market = {
    occurrence: {
        title: 'Occurrence',
        modifierLookup: { 0: -1, 1: -1, 2: 0, 3: 0 },
        items: [
            {
                label: 'Unique',
                description: 'The market just happens to be here today. Come back tomorrow and it will be gone.',
            },
            {
                label: 'Irregular',
                description: "This market happens now and then, with many of the same vendors, but who knows when it'll pop up again.",
            },
            {
                label: 'Periodic',
                description: "The market occurs once a week, or seasonally.",
            },
            {
                label: 'Permanent',
                description: "The market is in a set space, with permanent stalls and maybe even a roof.",
            }
        ],
    }, 
    vendorRights: {
        title: 'Vendor Rights',
        modifierLookup: { 0: -1, 1: -1, 2: 0, 3: 0 },
        items: [
            {
                label: 'Free',
                description: 'Anyone can set up shop here.',
            },
            {
                label: 'Licensed',
                description: 'Vendors here need a license from a local authority.',
            },
            {
                label: 'Market Association',
                description: 'Anyone can sell here providing they pay a fee to a non-profit market association.',
            },
            {
                label: 'Leased',
                description: 'The market property here is owned by a for-profit venture that makes money leasing market space to vendors.',
            },
            {
                label: 'Monopoly',
                description: 'All vendors here are employees of the same entity.',
            }
        ],
    }, 
    numberOfVendors: {
        title: 'Number of Vendors',
        modifierLookup: { 0: -1, 1: -1, 2: 0, 3: 0 },
        items: [
            {
                label: '2-5',
                description: Math.ceil(Math.random() * 4) + 1, //2-5
            },
            {
                label: '3-8',
                description: Math.ceil(Math.random() * 6) + 2, //3-8
            },
            {
                label: '5-12',
                description: Math.ceil(Math.random() * 8) + 4, //5-12
            },
            {
                label: '8-17',
                description: Math.ceil(Math.random() * 10) + 7, //8-17
            }
        ],
    }, 
    density: {
        title: 'Density',
        modifierLookup: { 0: -1, 1: -1, 2: 0, 3: 0 },
        items: [
            {
                label: 'Sparse',
                description: 'Two or three empty spaces for every vendor.',
            },
            {
                label: 'Below Capacity',
                description: 'One empty space for every two vendors.',
            },
            {
                label: 'At Capacity',
                description: 'No empty spaces. The market is full, or close to it.',
            },
            {
                label: 'Packed',
                description: 'Vendors are squeezed into corners or even share spaces.',
            }
        ],
    }, 
    prices: {
        title: 'Prices',
        modifierLookup: { 0: 0, 1: 0, 2: 0, 3: 0 },
        items: [
            {
                label: 'low',
                description: ', 10% below base price',
                costMultiplier: 0.9
            },
            {
                label: 'fair',
                description: '',
                costMultiplier: 1
            },
            {
                label: 'high',
                description: ', 10% above base price',
                costMultiplier: 1.1
            },
        ],
    }, 
    businessRates: {
        title: 'Business Rate',
        modifierLookup: { 0: -1, 1: -1, 2: 0, 3: 0 },
        items: [
            {
                label: 'Dead',
                description: 'There are one or two customers. Vendors may fight over you. (+2 Trader)',
            },
            {
                label: 'Slow',
                description: 'There are about the same number of customers as vendors. (+1 Trader)',
            },
            {
                label: 'Busy',
                description: 'Customers comfortably outnumber vendors.',
            },
            {
                label: 'Booming',
                description: 'There are far more customers than vendors. (-1 Trader)',
            },
            {
                label: 'Mobbed',
                description: "There are so many customers that it's hard to move. (-2 Trader)",
            }
        ],
    }, 
    arrangement: {
        title: 'Arrangement',
        modifierLookup: { 0: 0, 1: 0, 2: 0, 3: 0 },
        items: [
            {
                label: 'Haphazard',
                description: 'Vendors are set up everywhere, with few or no marked public ways and no formal division of spaces.',
            },
            {
                label: 'Staked',
                description: 'Vendor space is marked with stakes, painted lines, rugs, ropes, or other impermanent boundaries.',
            },
            {
                label: 'Dedicated',
                description: 'Vendor spaces are permanently defined by stalls, stone railings, niches, or other structures.',
            }
        ],
    }, 
    stockLevel: {
        title: 'Stock Level',
        modifierLookup: { 0: -1, 1: -1, 2: 0, 3: 0 },
        items: [
            {
                label: 'Sparse',
                description: "They probably don't have what you want. (+2 Selling/-2 Buying)",
            },
            {
                label: 'Light',
                description: 'There are noticeable gaps in the merchandise. (+1 Selling/-1 Buying)',
            },
            {
                label: 'Full',
                description: 'There is plenty of everything.',
            },
            {
                label: 'Overstocked',
                description: 'They have more items in stock than can be displayed at once. (-1 Selling/+1 Buying)',
            }
        ],
    }, 
    quality: {
        title: 'Quality of Items',
        modifierLookup: { 0: -1, 1: -1, 2: 0, 3: 0 },
        items: [
            {
                label: 'Shoddy',
                description: 'Most items are Used, Uncool, Gross or Smelly.',
            },
            {
                label: 'Standard',
                description: 'Mostly normal, with a few Cute or Sturdy items.',
            },
            {
                label: 'Fine',
                description: 'Cute, Beautiful and Sturdy items are common. High Quality and even Mythril items may be available.',
            },
            {
                label: 'Exceptional',
                description: 'Everything is amazing. Only items with positive modifiers are available. There might even be Orichalcum items.',
            }
        ]
    }, 
};
