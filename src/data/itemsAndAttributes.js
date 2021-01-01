import { terrainNames, weatherNames } from './weatherAndTerrain';
import { attributes } from './miscData';
import { townPopulations } from './miscData';
import { getRandomItemOf } from '../utils/randomizer'

// Also useful for determining a region/settlement/merchant's scarcities and abundances. It seems reasonable that scarce 
// goods would sell for 20 - 50% more and those in abundance cost 20 - 50% less.

export const tradeGoodDescriptions = [
    'Grain/Wheat/Flour', 'Fruits', 'Lumber', 'Ore', 'Meat', 'Alcohol', 'Raw Natural Materials', 'Basic Food',
    'Animal Hides', 'Furs', 'Fabrics', 'Cotton', 'Wool', 'Flax', 'Processed Metal', 'Leather', 'Clothing',
    'Wood Carvings', 'Herbs', 'Utensils', 'Furniture', 'Salt', 'Sugar', 'Stone', 'Pets', 'Exotic Food',
    'Paintings', 'Livestock', 'Vegetables', 'Spices', 'Housewares', 'Sculptures',
    'Pottery', 'Honey', 'Gems', 'Books', 'Precious Metals', 'Parchment/Paper', "Wine", "Ale", "Liquor",
    'Hats', 'Capes', 'Shoes', 'Staffs', 'Camping Equipment', 'Rations', 'Planks',
    'Cleaning', 'Rope/Handcrafts', 'Clockwork', 'Umbrellas', 'Navigation Items', 'Instruments/Song',
    'Cute Items', 'Cool Items', 'Beautiful Items', 'Sturdy Items', 'High Quality Items', 'Monster Parts',
    'Riding Animals', 'Pack Animals', 'Containers', 'Armour', 'Shields', 'Weapons', "Scrolls",
    'Jewelry', 'Potions/Healing', 'Perfume', 'Fine Tools', 'Mythril', 'Orichalcum', "Accessories", "Crafts"
]

export const tradeGoodsAndItems = [
    { 
        name: "Large Goods", 
        gpValue: 1000, 
        size: 5, 
        descriptions: tradeGoodDescriptions
    },
    { 
        name: "Medium Goods", 
        gpValue: 500, 
        size: 3, 
        descriptions: tradeGoodDescriptions
    },
    { 
        name: "Small Goods",  
        gpValue: 100, 
        size: 1, 
        descriptions: tradeGoodDescriptions
    },
]; 

export const randomTreasure = [
    { 
        name: 'Mug', 
        description: ['Cute', 'Cool', 'Weird'], 
        gpValue: 15 
    },
    { 
        name: 'Gem', 
        description: ['Turquoise', 'Agate', 'Lapis Lazuli'], 
        gpValue: 70 
    },
    { 
        name: 'Small Box', 
        description: ['Sewing Needles', 'Buttons', 'Polished Stones'], 
        gpValue: 20 
    },
    { 
        name: 'Herb Pouch', 
        description: ['Dry', 'Fresh', 'Pressed'], 
        gpValue: 20 
    },
    { 
        name: 'Eyepatch', 
        description: ['Cute', 'Fancy', 'Cool'], 
        gpValue: 40 
    },
    { 
        name: 'Brooch', 
        description: ['Wooden', 'Painted', 'Bone'], 
        gpValue: 90 
    },
    { 
        name: 'Coins', 
        gpValue: 3 * Math.ceil(Math.random() * 12)
    },
    { 
        name: 'Ring', 
        description: ['Simple', 'Tarnished', 'Tacky'], 
        gpValue: 90 
    },
    { 
        name: 'Charm', 
        description: ['Clover', 'Heart', 'Moon'], 
        gpValue: 150 
    },
    { 
        name: 'Gem', 
        description: ['Bloodstone', 'Peridot', 'Jasper'], 
        gpValue: 140 
    },
    { 
        name: 'Utensils', 
        description: ['Sturdy', 'Precious', 'Unique'], 
        gpValue: 30 
    },
    { 
        name: 'Accessory', 
        description: ['Hair Clip', 'Ribbon', 'Comb'], 
        gpValue: 120 
    },
    { 
        name: 'Miniature', 
        description: ['Detailed', 'Precious', 'Cute'], 
        gpValue: 100 
    },
    { 
        name: 'Dice', 
        description: ['Precious', 'Interesting', 'Fine'], 
        gpValue: 90 
    },
    { 
        name: 'Statuette', 
        description: ['Animal', 'Princess', 'Insect'], 
        gpValue: 160 
    },
    { 
        name: 'Necklace', 
        description: ['Tacky', 'Big', 'Fancy'], 
        gpValue: 300 
    },
    { 
        name: 'Gem', 
        description: ['Amethyst', 'Jade', 'Garnet'], 
        gpValue: 200 
    },
    { 
        name: 'Perfume Bottle', 
        description: ['Precious', 'Interesting', 'Lovely'], 
        gpValue: 120 
    },
    { 
        name: 'Gem', 
        description: ['Aquamarine', 'Black Pearl', 'Alexandrite'], 
        gpValue: 300 
    },
    { 
        name: 'Candle holder', 
        description: ['Precious', 'Strange', 'Pretty'], 
        gpValue: 220 
    },
    { 
        name: 'Mirror', 
        description: ['Precious', 'Tiny', 'Detailed'], 
        gpValue: 300 
    },
    { 
        name: 'Symbol', 
        description: ['Faction', 'Ancient', 'Interesting'], 
        gpValue: 210 
    },
    { 
        name: 'Coins', 
        gpValue: 30 * Math.ceil(Math.random() * 12)
    },
    { 
        name: 'Ring', 
        description: ['Pretty', 'Precious', 'Gemstone'], 
        gpValue: 370 
    },
    { 
        name: 'Bracelet', 
        description: ['Beautiful', 'Intricate', 'Cute'], 
        gpValue: 230 
    },
    { 
        name: 'Earring', 
        description: ['Precious', 'Jewelled', 'Pretty'], 
        gpValue: 150 
    },
    { 
        name: 'Gem', 
        description: ['Opal', 'Corundum', 'Diamond'], 
        gpValue: 400 
    },
    { 
        name: 'Guild Item', 
        description: ['Trader', 'Artificer', 'Hunter'], 
        gpValue: 300 
    },
    { 
        name: 'Fine Tools', 
        description: ["Thief 's", "Jeweller's", "Dentist's"], 
        gpValue: 350 
    },
    { 
        name: 'Ornamental Weapon', 
        description: ['Sword', 'Bow', 'Chakram'], 
        gpValue: 400 
    },
    { 
        name: 'Tiara', 
        description: ['Pretty', 'Precious', 'Cute'], 
        gpValue: 400 
    },
    { 
        name: 'Bracelet', 
        description: ['Intricate', 'Cute', 'Beautiful'], 
        gpValue: 420 
    },
    { 
        name: 'Necklace', 
        description: ['Amazing', 'Precious', 'Fancy'], 
        gpValue: 480 
    },
    { 
        name: 'Ring', 
        description: ['Intricate', 'Precious', 'Huge'], 
        gpValue: 450 
    },
    { 
        name: 'Gem', 
        description: ['Emerald', 'Sapphire', 'Ruby'], 
        gpValue: 500 
    },
    { 
        name: 'Coins', 
        gpValue: 50 * Math.ceil(Math.random() * 12)
    }
];

export const equipLocations = {
    oneHand: '1 hand',
    twoHands: '2 hands',
    head: 'head',
    chest: 'chest',
    cape: 'cape',
    back: 'back',
    feet: 'feet',
    accessory: 'accessory'
};

export const armor = [
    { 
        name: "Clothes",  
        gpValue: 50, 
        size: 3, 
        equip: equipLocations.chest 
    },
    { 
        name: "Light Shield",  
        gpValue: 400, 
        size: 3, 
        equip: equipLocations.oneHand, 
        shieldDodgeValue: 7, 
        defense: 1 
    },
    { 
        name: "Heavy Shield",  
        gpValue: 1200, 
        size: 3, 
        equip: equipLocations.oneHand, 
        shieldDodgeValue: 9, 
        penalty: -1, 
        defense: 2 
    },
    { 
        name: "Light Armour",  
        gpValue: 900, 
        size: 3, 
        equip: equipLocations.chest, 
        defense: 1 
    },
    { 
        name: "Medium Armour",  
        gpValue: 2000, 
        size: 5, 
        equip: equipLocations.chest, 
        penalty: -1, 
        defense: 2 
    },
    { 
        name: "Heavy Armour",  
        gpValue: 10000, 
        size: 5, 
        equip: equipLocations.chest, 
        penalty: -3, 
        defense: 3 
    },
    { 
        name: "Flimsy Shield", 
        gpValue: 300, 
        size: 2, 
        equip: equipLocations.oneHand, 
        shieldDodgeValue: 5, 
        defense: 1 
    },
    { 
        name: "Fire Cape",  
        gpValue: 700, 
        size: 3, 
        type: "Armor", 
        defense: 1,
        equip: equipLocations.chest 
    },
];

export const weapons = [
    { 
        name: "Blade",  
        gpValue: 700, 
        size: 3, 
        equip: equipLocations.oneHand, 
        accuracy: {
            attributes: [attributes.dexterity, attributes.strength],
            modifier: 0
        }, 
        damage: {
            attribute: attributes.strength,
            modifier: 0
        }
    },
    { 
        name: "Light Blade",  
        gpValue: 400, 
        size: 1, 
        equip: equipLocations.oneHand, 
        accuracy: {
            attributes: [attributes.dexterity, attributes.intelligence],
            modifier: 1
        }, 
        damage: {
            attribute: attributes.intelligence,
            modifier: -1
        }
    },
    { 
        name: "Polearm", 
        gpValue: 350, 
        size: 3, 
        equip: equipLocations.twoHands, 
        accuracy: {
            attributes: [attributes.dexterity, attributes.strength],
            modifier: 0
        }, 
        damage: {
            attribute: attributes.strength,
            modifier: 1
        }
    },
    { 
        name: "Axe",  
        gpValue: 500, 
        size: 3, 
        equip: equipLocations.twoHands, 
        accuracy: {
            attributes: [attributes.strength , attributes.strength ],
            modifier: -1
        }, 
        damage: {
            attribute: attributes.strength,
            modifier: 0
        }
    },
    { 
        name: "Bow",  
        gpValue: 750, 
        size: 3, 
        equip: equipLocations.twoHands, 
        accuracy: {
            attributes: [attributes.dexterity , attributes.intelligence],
            modifier: -2
        }, 
        damage: {
            attribute: attributes.dexterity,
            modifier: 0
        }
    },
    { 
        name: "Hammer", 
        gpValue: 500, 
        size: 3, 
        equip: equipLocations.twoHands, 
        accuracy: {
            attributes: [attributes.strength, attributes.strength],
            modifier: -2
        }, 
        damage: {
            attribute: attributes.strength,
            modifier: 1
        }
    },
    { 
        name: "Shuriken", 
        gpValue: 400, 
        size: 1, 
        equip: equipLocations.oneHand, 
        accuracy: {
            attributes: [attributes.dexterity , attributes.intelligence],
            modifier: 1
        }, 
        damage: {
            attribute: attributes.dexterity,
            modifier: -1
        }
    },
    { 
        name: "Great Sword", 
        gpValue: 750, 
        size: 3, 
        equip: equipLocations.twoHands, 
        accuracy: {
            attributes: [attributes.dexterity , attributes.strength],
            modifier: -2
        }, 
        damage: {
            attribute: attributes.strength,
            modifier: 1
        }
    },
    { 
        name: "Spear", 
        gpValue: 500, 
        size: 3, 
        equip: equipLocations.twoHands, 
        accuracy: {
            attributes: [attributes.strength, attributes.strength],
            modifier: 0
        }, 
        damage: {
            attribute: attributes.strength,
            modifier: -1
        }
    },
    { 
        name: "Knuckles", 
        gpValue: 350, 
        size: 1, 
        equip: equipLocations.twoHands, 
        accuracy: {
            attributes: [attributes.dexterity , attributes.strength],
            modifier: 0
        }, 
        damage: {
            attribute: attributes.strength,
            modifier: 1
        }
    },
    { 
        name: "Whip", 
        gpValue: 900, 
        size: 2, 
        equip: equipLocations.oneHand, 
        accuracy: {
            attributes: [attributes.dexterity , attributes.strength],
            modifier: 0
        }, 
        damage: {
            attribute: attributes.strength,
            modifier: 1
        }
    },
    { 
        name: "Dagger", 
        gpValue: 300, 
        size: 1, 
        equip: equipLocations.oneHand, 
        accuracy: {
            attributes: [attributes.dexterity , attributes.intelligence],
            modifier: -1
        }, 
        damage: {
            attribute: attributes.dexterity,
            modifier: 0
        }
    },
]

export const food = [
    { 
        name: "Food",  
        gpValue: 5, 
        size: 1
    },
    { 
        name: "Alcohol",  
        gpValue: 10, 
        size: 1,
        liquid: true
    },
    { 
        name: "Water",  
        gpValue: 1, 
        size: 1,
        liquid: true
    },
    { 
        name: "Milk",  
        gpValue: 5, 
        size: 1,
        liquid: true
    },
    { 
        name: "Rations",  
        gpValue: 10, 
        size: 1
    },
    { 
        name: "Animal Feed",  
        gpValue: 5, 
        size: 1
    },
];

export const miscItems = [
    { 
        name: 'Pot', 
        size: 1, 
        gpValue: 30 
    },
    { 
        name: "Soap",  
        gpValue: 5, 
        size: 1
    },
    { 
        name: "Quill Pen",  
        gpValue: 2, 
        size: 1
    },
    { 
        name: "Torch",  
        gpValue: 5, 
        size: 1
    },
    { 
        name: "Washing Set",  
        gpValue: 15, 
        size: 3
    },
    { 
        name: "Utensils", 
        gpValue: 10, 
        size: 1
    },
    { 
        name: "Lantern",  
        gpValue: 80, 
        size: 1
    },
    { 
        name: "Instrument",  
        gpValue: 300, 
        size: 3
    },
    { 
        name: "Mirror", 
        gpValue: 300, 
        size: 1
    },
    { 
        name: "Glass Pen",  
        gpValue: 120, 
        size: 1
    },
    { 
        name: "Rope",  
        gpValue: 50, 
        size: 1
    },
    { 
        name: "Repair Kit",  
        gpValue: 100, 
        size: 1
    },
    { 
        name: "Notebook", 
        gpValue: 100, 
        size: 1
    },
    { 
        name: "Stuffed Toy (Size 3)",  
        gpValue: 3, 
        size: 3
    },
    { 
        name: "Stuffed Toy (Size 5)",  
        gpValue: 10, 
        size: 5
    },
    { 
        name: "Ring",  
        gpValue: 100, 
        size: 1
    },
    { 
        name: "Firestarter Set",  
        gpValue: 20, 
        size: 1
    },
    { 
        name: "Earrings",  
        gpValue: 100, 
        size: 1
    },
    { 
        name: "Portable Bath",  
        gpValue: 450, 
        size: 5
    },
    { 
        name: "Perfume",  
        gpValue: 500, 
        size: 1
    },
    { 
        name: "Grandfather Clock",  
        gpValue: 1000, 
        size: 5
    },
    { 
        name: "Bracelet", 
        gpValue: 100, 
        size: 1
    },
    {
        name: 'Safeway Gloves',
        gpValue: 300,
        size: 1
    },
    {
        name: 'Carving Knife',
        gpValue: 400,
        size: 1,
        trappingModifier: 1
    },
    {
        name: 'Veil Mask',
        gpValue: 260,
        size: 1
    },
    {
        name: 'Ear Plugs',
        gpValue: 20,
        size: 1
    },
    {
        name: 'Fishing Tackle',
        gpValue: 160,
        size: 3
    }
];

export const campingItems = [
    { 
        name: "Bedding",  
        gpValue: 40, 
        size: 1,
        capacity: 1  
    },
    { 
        name: "Tent", 
        gpValue: 120, 
        size: 3,
        capacity: 3 
    },
    { 
        name: "Sleeping Bag",  
        gpValue: 50, 
        size: 1,
        capacity: 1 
    },
    { 
        name: "Stuffed Toy",  
        gpValue: 1, 
        size: 1
    },
    { 
        name: "Insect Net",  
        gpValue: 50, 
        size: 1,
        capacity: 1
    },
    { 
        name: "Pillow",  
        gpValue: 10, 
        size: 1
    },
    { 
        name: "Arctic Tent", 
        gpValue: 300, 
        size: 5,
        capacity: 3,
        campingBonus: {
            weather: [ weatherNames.cold, weatherNames.snow ],
            modifier: 2
        }
    },
    { 
        name: "Large Tent",  
        gpValue: 500, 
        size: 5,
        capacity: 10 
    },
    { 
        name: "Flow Stone", 
        gpValue: 20, 
        size: 2
    },
];

export const containers = [
    { 
        name: "Travel Bag",  
        gpValue: 10, 
        size: 1, 
        canHold: 3, 
        canHoldWater: 15 
    },
    { 
        name: "Herb Bottle",  
        gpValue: 100, 
        size: 3,
        canHoldHerbs: 10
    },
    { 
        name: "Waterskin",  
        gpValue: 30, 
        size: 1, 
        canHold: 0, 
        canHoldWater: 1 
    },
    { 
        name: "Magic Jar",  
        gpValue: 2000, 
        size: 1,
        canHold: 0, 
        canHoldWater: 1
    },
    { 
        name: "Barrel", 
        gpValue: 10, 
        size: 5, 
        canHold: 10, 
        canHoldWater: 15 
    },
    { 
        name: "Chest", 
        gpValue: 10, 
        size: 5, 
        canHold: 15, 
        canHoldWater: 0 
    },
    { 
        name: "Backpack",  
        gpValue: 20, 
        size: 3, 
        canHold: 15, 
        canHoldWater: 0 
    },
    { 
        name: "Large Backpack",  
        gpValue: 40, 
        size: 5, 
        canHold: 10, 
        canHoldWater: 0 
    },
    {
        name: 'Glass Jar/Bottle',
        gpValue: 40,
        size: 1,
        doses: 3,
        canHoldWater: 1
    },
    {
        name: 'Large Glass Jar/Bottle',
        gpValue: 60,
        size: 3,
        doses: 10,
        canHoldWater: 3,
        durability: 1
    },
    {
        name: 'Sample Set',
        gpValue: 200,
        size: 3,
        doses: 10
    },
    {
        name: 'Waterproof Bag',
        gpValue: 40,
        size: 1,
        canHold: 3,
        canHoldWater: 0
    },
    {
        name: 'Meat Chest',
        gpValue: 50,
        size: 3,
        canHold: 6,
        canHoldWater: 0
    },
    {
        name: 'Large Meat Chest',
        gpValue: 80,
        size: 5,
        canHold: 12,
        canHoldWater: 0
    },
    {
        name: 'Icebox',
        gpValue: 600,
        size: 3,
        canHold: 6,
        canHoldWater: 0
    },
    {
        name: 'Large Icebox',
        gpValue: 1000,
        size: 5,
        canHold: 12,
        canHoldWater: 0
    },
];

export const herbs = [
    { 
        name: "Healing Herb lvl 1", 
        gpValue: 100, 
        size: 1,
        herbs: [
            {
                name: 'Sunset Hime Apple',
                level: 1,
                terrain: [terrainNames.grassland],
                part: "Fruit",
                Use: "Recover 2 HP",
                Description: 'A fruit that resembles an apple. Hime Apples become rich and nourishing as their colors deepen like the sunset.',
                type: 'physical'
            },
            {
                name: 'Crowned Morning Glory',
                level: 1,
                terrain: [terrainNames.wasteland],
                part: "Flower",
                Use: "Used to help ease sleep. Next day’s Condition will be 6.",
                Description: 'An annual that blooms into several gorgeous flowers. The colors of the flowers vary between white, violet, crimson, and indigo, depending on the weather.',
                type: 'physical'
            }
        ]
    },
    { 
        name: "Healing Herb lvl 2", 
        gpValue: 300, 
        size: 1,
        herbs: [
            {
                name: 'Giant’s Palm',
                level: 2,
                terrain: [terrainNames.rocky],
                part: "Leaf",
                Use: "Used to help ease foot pain. Used after taking damage from a Travel Check: recover that damage.",
                Description: 'An annual that produces light green leaves covered in mucus. It prefers wet climates.',
                type: 'physical'
            },
            
            {
                name: 'Demon Lacquer',
                level: 2,
                terrain: [terrainNames.woods],
                part: "Sap",
                Use: "Enough for 1 poison arrow: add 2 damage to 1 bow attack.",
                Description: 'A deciduous tree that grows to about 12 feet tall with ash-white bark. A dark sap oozes when cuts are made in its bark.',
                type: 'physical'
            },
            {
                name: 'Churchbell Dayflower',
                level: 2,
                terrain: [terrainNames.hills],
                part: "Flower",
                Use: "Next check using [SPI] gets a +1 bonus",
                Description: 'Cousin to the ordinary dayflower, the Churchbell Dayflower produces blooms of up to three feet in size. They prefer to grow on hills and bloom only in the brightest sun.',
                type: 'mental'
            },
        ]
    },
    { 
        name: "Healing Herb lvl 3", 
        gpValue: 800, 
        size: 1,
        herbs: [
            {
                name: 'Daybreak Crimsonflower',
                level: 3,
                terrain: [terrainNames.swamp],
                part: "Stalk",
                Use: "Use after making a Condition Check to remove a physical status ailment; Reroll the check with a +1 bonus.",
                Description: 'A thistle where blood red flowers bloom. The stalk contains a powerful narcotic, so care must be taken in handling it.',
                type: 'physical'
            },
            {
                name: 'Moonlight Snowgrass',
                level: 3,
                terrain: [terrainNames.deepForest],
                part: "Leaf",
                Use: "Helps focus the mind: For one full day, when MP is used, 1 less MP is spent. Has no effect when spending 1 MP.",
                Description: 'A diminutive species of grass that only grows in the moonlight, it is said that it takes an entire year to grow even a single centimeter. Juice squeezed from this grass is used to rouse one’s spirit.',
                type: 'mental'
            },
            {
                name: 'White Night Chrysanthemum',
                level: 3,
                terrain: [terrainNames.mountain],
                part: "Leaf",
                Use: "May be used to reroll a Condition Check in order to cure a mental status ailment. Reroll once with a +1 bonus.",
                Description: 'A chrysanthemum with a deep violet hue. It only grows in frigid climes and blooms only during the shortest winter nights. Locals use it to brew a kind of tea.',
                type: 'mental'
            },
            {
                name: 'Firefly Darkpouch',
                level: 3,
                terrain: [terrainNames.deepForest, terrainNames.swamp, terrainNames.mountain],
                weather: [weatherNames.night],
                part: "Pollen",
                Use: "Magical effects that deal damage or recover HP receive a bonus equal to the Caster’s Level.",
                Description: 'An annual that blooms only at night. The light-purple flower resembles a pouch, and glows in total darkness.',
                type: 'enhance'
            },
        ]
    },
    { 
        name: "Healing Herb lvl 4", 
        gpValue: 2100, 
        size: 1,
        herbs: [
            {
                name: 'Kingmilk Salve',
                level: 4,
                terrain: [terrainNames.jungle],
                part: "Hive",
                Use: "Duration of the next magic spell cast is doubled; Has no effect on “instant” duration spells.",
                Description: 'Honeycomb from a type of jungle bee; Their nests can be over two meters tall, resembling ant hives made of rock-hard mud and dirt.',
                type: 'enhance'
            },
            {
                name: 'Windcrying Tulip',
                level: 4,
                terrain: [terrainNames.jungle],
                weather: [weatherNames.strongWind],
                part: "Flower",
                Use: "When casting a single target spell, you may select one additional target.",
                Description: 'A type of tulip that only takes root in areas with strong winds. The jade hued petals of its flowers are carried by the wind to disperse its pollen.',
                type: 'enhance'
            },
            {
                name: 'Black Temple Melon',
                level: 4,
                terrain: [terrainNames.desert],
                part: "Fruit",
                Use: "May cast one '1 area' or 'all area' spell without harming allies in the area.",
                Description: 'A type of melon that thrives in the shelter of deadfalls. Well known for the fact that every part of the plant, from leaves, to roots and even the fruit, is jet black. Has the distinct odor of cheese. Really stinky cheese.',
                type: 'enhance'
            },
        ]
    },
    { 
        name: "Healing Herb lvl 5", 
        gpValue: 6300, 
        size: 1,
        herbs: [
            {
                name: 'Barrierwood Stalk',
                level: 5,
                terrain: [terrainNames.alpine],
                part: "Branch",
                Use: 'May use a “normal” incantation spell as a “ritual” spell. The target becomes “all nearby companions”, and the duration becomes 12 hours. No effect on spells with “instant” duration, and only affects spells with “single” targets.',
                Description: 'A subspecies of Barrierwood, also known as the Guardsman of the Woods. Thrives on alpine heights, and said to be as hard as orichalcum.',
                type: 'enhance'
            },
        ]
    },
];

export const travelingItems = [
    { 
        name: "Umbrella",  
        gpValue: 50, 
        size: 3,
        equip: equipLocations.oneHand,
        bonus: {
            weather: [ weatherNames.hot, weatherNames.rain ],
            travelModifier: 1
        },
    },
    { 
        name: "Compass",  
        gpValue: 1500, 
        size: 1,
        equip: equipLocations.oneHand,
        bonus: {
            directionCheckModifier: 1,
        },
    },
    { 
        name: "Walking Stick", 
        gpValue: 50, 
        size: 3, 
        type: "Traveling", 
        bonus: {
            terrains: [terrainNames.grassland, terrainNames.wasteland, terrainNames.woods, terrainNames.hills, terrainNames.rocky, terrainNames.deepForest, terrainNames.swamp, terrainNames.mountain],
            travelModifier: 1
        },
        equip: equipLocations.oneHand 
    },
    { 
        name: "Snow Staff",  
        gpValue: 280, 
        size: 1, 
        type: "Traveling", 
        bonus: {
            weather: [weatherNames.snow],
            travelModifier: 1
        },
        equip: equipLocations.oneHand 
    },

    { 
        name: "Hat",  
        gpValue: 120, 
        size: 1, 
        type: "Traveling", 
        equip: equipLocations.head 
    },
    { 
        name: "Sand Hood", 
        gpValue: 340, 
        size: 1, 
        type: "Traveling", 
        bonus: {
            terrains: [terrainNames.desert],
            travelModifier: 1
        }, 
        equip: equipLocations.head 
    },
    { 
        name: "Sun Hat",  
        gpValue: 180, 
        size: 1, 
        type: "Traveling", 
        bonus: {
            weather: [ weatherNames.hot ],
            travelModifier: 1
        },
        equip: equipLocations.head 
    },

    { 
        name: "Jungle Boots",  
        gpValue: 600, 
        size: 1, 
        type: "Traveling", 
        bonus: {
            terrains: [terrainNames.woods, terrainNames.deepForest, terrainNames.jungle],
            travelModifier: 1
        },
        equip: equipLocations.feet 
    },
    { 
        name: "Mud Boots",  
        gpValue: 500, 
        size: 1, 
        type: "Traveling", 
        bonus: {
            terrains: [terrainNames.swamp],
            travelModifier: 1
        },
        equip: equipLocations.feet 
    },
    { 
        name: "Snow Boots",  
        gpValue: 500, 
        size: 1, 
        type: "Traveling", 
        bonus: {
            weather: [weatherNames.snow, weatherNames.blizzard],
            travelModifier: 1
        },
        equip: equipLocations.feet 
    },
    { 
        name: "Climbing Shoes", 
        gpValue: 450, 
        size: 1, 
        type: "Traveling", 
        bonus: {
            terrains: [terrainNames.wasteland, terrainNames.alpine, terrainNames.rocky, terrainNames.mountain],
            travelModifier: 1
        },
        equip: equipLocations.feet 
    },

    { 
        name: "Sun Cape", 
        gpValue: 400, 
        size: 3, 
        type: "Traveling", 
        bonus: {
            weather: [ weatherNames.hot ],
            travelModifier: 1
        },
        equip: equipLocations.cape 
    },
    { 
        name: "Camouflage Cape",  
        gpValue: 400, 
        size: 3, 
        type: "Traveling", 
        equip: equipLocations.cape 
    },
    { 
        name: "Arctic Cape",  
        gpValue: 300, 
        size: 5, 
        type: "Traveling", 
        bonus: {
            weather: [weatherNames.cold],
            travelModifier: 1
        },
        equip: equipLocations.cape 
    },

    { 
        name: "Woollen Hat",  
        gpValue: 200, 
        size: 1, 
        type: "Traveling", 
        bonus: {
            weather: [weatherNames.cold],
            travelModifier: 1
        },
        equip: equipLocations.head 
    },
    { 
        name: "Windbreaker", 
        gpValue: 120, 
        size: 3, 
        type: "Traveling", 
        bonus: {
            weather: [weatherNames.strongWind],
            terrains: [],
            travelModifier: 1
        },
        equip: equipLocations.chest 
    },
    { 
        name: "Hiking Staff",  
        gpValue: 100, 
        size: 3, 
        type: "Traveling", 
        bonus: {
            terrains: [terrainNames.rocky, terrainNames.mountain],
            travelModifier: 1
        },
        equip: equipLocations.chest 
    },
    { 
        name: "Walking Shoes",  
        gpValue: 350, 
        size: 1, 
        type: "Traveling", 
        bonus: {
            terrains: [terrainNames.grassland, terrainNames.wasteland],
            travelModifier: 1
        }, 
        equip: equipLocations.chest 
    },
    { 
        name: "Raincoat", 
        gpValue: 400, 
        size: 3, 
        type: "Traveling", 
        bonus: {
            weather: [ weatherNames.rain, weatherNames.hardRain, weatherNames.snow ],
            travelModifier: 1
        },
        equip: equipLocations.chest 
    },
    { 
        name: "Rain Boots", 
        gpValue: 300, 
        size: 1, 
        type: "Traveling", 
        bonus: {
            weather: [weatherNames.rain, weatherNames.hardRain, weatherNames.thunderstorm],
            travelModifier: 1
        },
        equip: equipLocations.chest 
    },
    
    { 
        name: "Goggles",  
        gpValue: 4000, 
        size: 1, 
        type: "Traveling", 
        bonus: {
            weather: [weatherNames.rain, weatherNames.hardRain, weatherNames.snow, weatherNames.blizzard, weatherNames.strongWind, weatherNames.thunderstorm],
            travelModifier: 1
        }, 
        equip: equipLocations.accessory 
    },
];

export const itemAttributes = [
    { 
        name: "Tidy", 
        magical: true, 
        costModifier: 1000, 
        label: 'Cleans itself of all dirt and grime at the end of a day' 
    },
    { 
        name: "Levitating", 
        magical: true, 
        costModifier: 2500, 
        label: 'Floats 4 feet from the ground when not being carried' 
    },
    { 
        name: "Mending", 
        magical: true, 
        costModifier: 4000, 
        label: 'Repairs 1 point of durability per week' 
    },
    { 
        name: "Mirage", 
        magical: true, 
        costModifier: 3000, 
        label: 'Uses illusions to change appearance in minor ways (a compass can become a flask)' 
    },
    { 
        name: "Miasma", 
        magical: true, 
        costModifier: 4000, 
        label: 'Oozes a cool looking black smoke' 
    },
    { 
        name: "Mimicking", 
        magical: true, 
        costModifier: 2000, 
        label: 'Can mimic up to one sound decided upon by GM' 
    },
    { 
        name: "Unbreaking", 
        magical: true, 
        costModifier: 7000, 
        label: 'Will never break' 
    },
    { 
        name: "Smiling", 
        magical: true, 
        costModifier: 2500, 
        label: 'Makes people friendlier towards you' 
    },
    { 
        name: "Frowning", 
        magical: true, 
        costModifier: -1000, 
        label: 'Makes people less likely to trust you' 
    },
    { 
        name: "Famished", 
        magical: true, 
        costModifier: -1000, 
        label: 'The item must be fed appropriate rations in order to use'
    },
    { 
        name: "Burning", 
        magical: true, 
        costModifier: 4500, 
        label: 'The item glows red hot and can be used to start a fire' 
    },
    { 
        name: "Divining", 
        magical: true, 
        costModifier: 3500, 
        label: `Shakes and wiggles in the vague direction of ${getRandomItemOf(tradeGoodDescriptions)}`
    },
    { 
        name: "Comprehending", 
        magical: true, 
        costModifier: 2000, 
        label: 'Translates different languages when held' 
    },
    { 
        name: "Floating", 
        magical: true, 
        costModifier: 5000, 
        label: 'Floats on water, can only carry items, capacity 2', 
        canHold: 2, 
        canHoldWater: 2
    },
    { 
        name: "Musical", 
        magical: true, 
        costModifier: 2000, 
        label: 'Can be played like an instrument'
    },
    { 
        name: "Flying", 
        magical: true, 
        costModifier: 7000, 
        label: 'Flies through the air, can carry only items, capacity 2.', 
        canHold: 2, 
        canHoldWater: 2
    },
    { 
        name: "Feathery", 
        magical: true, 
        costModifier: 5000, 
        label: 'Incredibly lightweight, any item with this effect is size 1', 
        size: 1
    },
    { 
        name: "Beaconing", 
        magical: true, 
        costModifier: -1000, 
        label: 'Makes Monster encounters more likely'
    },
    { 
        name: "Morphing", 
        magical: true, 
        costModifier: 4000, 
        label: 'Allows the user to shape change into a small animal'
    },
    { 
        name: "Cold", 
        magical: true, 
        costModifier: 4500, 
        label: 'The item stays at freezing temperature and can be used to keep people and/or food/drink cold.'
    },
    { 
        name: "Plus 1", 
        magical: true, 
        costModifier: 8000, 
        label: 'Weapon: damage +1; Armor: defense +1, other items: +1 to item bonus', 
        damageModifier: 1, 
        defenseModifier: 1, 
        modifier: 1
    },
    { 
        name: "Shining", 
        magical: true, 
        costModifier: 1200, 
        label: 'Emits light about equal to a torch'
    },
    { 
        name: "Speaking", 
        magical: true, 
        costModifier: 2000, 
        label: 'Loves to talk'
    },
    { 
        name: "Obsidian", 
        costMultiplier: 3, 
        label: 'Reduce armor penalties by 1, durability starts at 2', 
        durabilityModifier: 2,
        penaltyModifier: -1 
    },
    { 
        name: "Frail", 
        costMultiplier: 1, 
        label: 'Only has 1 point of durability', 
        durability: 1
    },
    { 
        name: "Key", 
        costMultiplier:  2, 
        label: 'Is used as a key to gain access somewhere'
    },
    { 
        name: "Strange", 
        costMultiplier:  3, 
        label: 'The item is made from an abnormal material'
    },
    { 
        name: "Secretive", 
        costMultiplier:  2, 
        label: 'Holds a secret message somewhere on the item'
    },
    { 
        name: "Orichalcum", 
        costMultiplier:  50, 
        label: 'Will never break. If worn, Max HP and MP +2'
    },
    { 
        name: "Mythril", 
        costMultiplier:  10, 
        label: 'Reduce armor penalties by 1, size value is -2 due to lightness, durability automatically starts at 5', 
        sizeModifier: -2, 
        durabilityModifier: 5,
        penaltyModifier: -1
    },
    { 
        name: "High Quality", 
        costMultiplier:  5, 
        accuracyModifier: 1, 
        defenseModifier: 1, 
        modifier: 1, 
        label: 'Weapons: Accuracy +1, armor: +1 defense, others items: +1 to item bonus', 
    },
    { 
        name: "Walking", 
        costMultiplier:  0.5, 
        label: ''
    },
    { 
        name: "Sturdy", 
        costMultiplier: 3, 
        durabilityMultiplier: 2, 
        label: 'The item’s durability is doubled', 
    },
    { 
        name: "Beautiful", 
        costMultiplier: 2, 
        label: 'The shape or color is beautiful'
    },
    { 
        name: "Cute", 
        costMultiplier: 2, 
        label: 'The shape or color is cute'
    },
    { 
        name: "Used", 
        costMultiplier: 0.8, 
        durabilityMultiplier: 0.8, 
        label: 'The item’s durability is 0.8 x its original value', 
    },
    { 
        name: "Uncool", 
        costMultiplier: 0.8, 
        label: 'Old, or made with poor style sense'
    },
    { 
        name: "Gross", 
        costMultiplier: 0.8, 
        label: 'The sight of it makes you uncomfortable'
    },
    { 
        name: "Smelly", 
        costMultiplier: 0.7, 
        label: 'Has a horrible smell that doesn’t come off, even after washing'
    },
    { 
        name: "Broken", 
        costMultiplier: 0.5, 
        label: 'Unusable until fixed'
    },
    { 
        name: "Cursed",  
        costMultiplier: 0.5, 
        label: 'The user suffers a -1 penalty to Condition checks every day', 
        conditionCheckModifier: -1
    },
];

export const foodAttributes = [
    { 
        name: "Disgusting", 
        costMultiplier: 0.3, 
        label: '-1 penalty to next day’s Condition Check', 
        conditionCheckModifier: -1
    },
    { 
        name: "Normal", 
        costMultiplier: 1, 
        label: ''
    },
    { 
        name: "Delicious", 
        costMultiplier: 10, 
        label: '+1 bonus to next day’s Condition Check', 
        conditionCheckModifier: 1
    },
    { 
        name: "Feast", 
        whereFound: townPopulations[3], 
        costMultiplier: 500, 
        label: '+3 bonus to next day’s Condition Check',  
        conditionCheckModifier: 3
    },
];

export const animals = [
    { 
        name: 'Riding animal', 
        gpValue: 900, 
        bonus: { 
            terrains: [ terrainNames.grassland, terrainNames.wasteland, terrainNames.woods, terrainNames.hills, terrainNames.rocky ],
            travelModifier: 1 
        }, 
        label: '+1 bonus to travel checks on topographies of Level 2 or less. Only one person may ride at a time.' 
    },
    { 
        name: 'Large Riding animal', 
        gpValue: 3800, 
        bonus: { 
            terrains: [ terrainNames.grassland, terrainNames.wasteland, terrainNames.woods, terrainNames.hills, terrainNames.rocky ],
            travelModifier: 1 
        },  
        label: '+1 bonus to travel checks on topographies of Level 2 or less. Four people may ride at a time.' 
    },
    { 
        name: 'Pack animal', 
        gpValue: 500, 
        canHold: 15, 
        label: 'This animal has a carrying capacity of 15' 
    },
    { 
        name: 'Large Pack animal', 
        gpValue: 2000, 
        canHold: 30, 
        label: 'This animal has a carrying capacity of 30' 
    },
    { 
        name: 'Pet animal', 
        gpValue: 300, 
        label: 'A pet; must be no larger than one meter. i.e.: cat, turtle, rabbit, etc' 
    },
]

export const animalAttributes = [
    { 
        name: 'Tough', 
        costMultiplier: 2, 
        label:'Needs no food, even in desert or alpine environments' 
    },
    { 
        name: 'Clever', 
        costMultiplier: 3, 
        label:'Understands and tries to follow its owner’s commands' 
    },
    { 
        name: 'Bad attitude', 
        costMultiplier: 0.7, 
        label:'Sometimes does not follow its owner’s commands' 
    },
    { 
        name: 'Loud', 
        costMultiplier: 0.7, 
        label:'Calls/brays/footsteps are loud and annoying' 
    },
    { 
        name: 'Baby', 
        costMultiplier: 0.3, 
        label:'Not more than 6 months old. Has no abilities and counts as Pet animal' 
    },
    { 
        name: 'Loyal', 
        costModifier: 1000, 
        label:'Never leaves its owner’s side. You may pay 1000g to add this to any animal you have with you' 
    },
    { 
        name: 'Well-traveled', 
        costModifier: 5000, 
        travelModifier: 1,
        label:'Grants a +1 bonus to all travel checks. May only be applied to riding animals. Pay 5000g to add this to any animal you have with you' 
    },
]

export const itemTypes = {
    goods: {
        label: "Goods",
        source: tradeGoodsAndItems,
        attributes: itemAttributes
    },
    randomTreasure: {
        label: "Treasure",
        source: randomTreasure,
        attributes: itemAttributes
    },
    armor: {
        label: "Armor",
        source: armor,
        attributes: itemAttributes
    },
    weapons: {
        label: "Weapon",
        source: weapons,
        attributes: itemAttributes
    },
    food: {
        label: "Food",
        source: food,
        attributes: foodAttributes
    },
    misc: {
        label: "Misc",
        source: miscItems,
        attributes: itemAttributes
    },
    containers: {
        label: "Containers",
        source: containers,
        attributes: itemAttributes
    },
    camping: {
        label: "Camping Gear",
        source: campingItems,
        attributes: itemAttributes
    },
    herbs: {
        label: "Herbs",
        source: herbs,
        attributes: itemAttributes
    },
    animals: {
        label: "Animals",
        source: animals,
        attributes: animalAttributes
    }
}

// party is an object {1: numOfPlayersThatLevel, ...}
export const rewardGPByLevel = (party) => {
    let partyEntries = Object.entries(party);
    let gp = partyEntries.reduce((prevGP, [levelStr, playerNumStr]) => {
        let currentGP = 0;
        const level = parseInt(levelStr, 10);
        const playerNum = parseInt(playerNumStr, 10);

        if (level === 1) {
            currentGP = playerNum * (500 + Math.floor(Math.random() * 200));
        } else if (level >= 2 && level <= 4) {
            currentGP = playerNum * (700 + Math.floor(Math.random() * 1300));
        } else if (level >= 5 && level <= 7) {
            currentGP = playerNum * (2000 + Math.floor(Math.random() * 3000));
        }  else if (level >= 8) {
            currentGP = playerNum * 5000;
        }
        return currentGP + prevGP;
    }, 0);

    return gp;
}
