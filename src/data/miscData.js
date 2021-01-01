export const townPopulations = ["Village", "Town", "City", "Large City"]

export const descriptors = [
    'Claw', 'Ash', 'Incandescent', 'Bright', 'Dancing', 'Dry',
    'Illusionary', 'Gnarled', 'Boneless', 'Twisted', 'Sparkling', 'Moonlight',
    'Dusty', 'Deep', 'Haunted', 'Unquiet', 'Lost', 'Buried',
    'Floating', 'Memory', 'Twilight', 'Calamity', 'Bell', 'Royal',
    'Infested', 'Curious', 'Jigsaw', 'Paradoxical', 'Glorious',
    'Fallen', 'Rainbow', 'Cloud', 'Shining', 'Quiet', 'Shadow',
    'Midnight', 'Proud', 'Pastel', 'Hive', 'Pandemonium', 'Passive',
    'Acorn', 'fruit', 'Layer', 'Fresh', 'Prickly', 'Frozen', 'Tilted',
    'Tangled', 'Painted', 'Plaid', 'Metallic', 'Secret', 'Talon',
    'Scramble', 'Puff', 'Rolling', 'Block', 'Twin', 'False',
    'Butter', 'Patterned', 'Sunshine', 'Glass', 'Vanilla', 'Star',
    'Fuzzy', 'Trick', 'Candy', 'Chrome', 'Broken', 'Treasure',
];

export const propertiesAndEffects = [
    'Poison', 'Spicy', 'Neutral', 'Breathing', 'Lightning', 'Quiet',
    'Light', 'Health', 'Water', 'Jumpy', 'Sour', 'Paralysis',
    'Sweet', 'Refreshing', 'Intelligence', 'Earth', 'Itchy', 'Tough',
    'Joy', 'Delicious', 'Visibility', 'Charm', 'Stretchy', 'Dark',
    'Disgusting', 'Speech', 'Sight', 'Depressant', 'Protection', 'Attractor',
    'Repellent', 'Magic', 'Bait', 'Hearing', 'Condition', 'Perception',
    'Sensation', 'Heat', 'Fear', 'Cold', 'Spirit', 'Preserving',
    'Anti-Venom', 'Hard', 'Painful', 'Slippery', 'Sticky', 'Healing'
];

export const statusEffects = {
    injury: "Injury",
    poisoned: "Poisoned",
    sickness: "Sickness",
    exhaustion: "Exhaustion",
    muddled: "Muddled",
    shock: "Shock"
}

export const randomEvents = [
    { label: "Twisted ankle", statusEffect: statusEffects.injury, strength: 4 },
    { label: "Rock fall/avalanche", statusEffect: statusEffects.injury, strength: 6 },
    { label: "Fall from a great height", statusEffect: statusEffects.injury, strength: 6 },
    { label: "Touching a poisonous plant", statusEffect: statusEffects.poisoned, strength: 4 },
    { label: "Food poisoning", statusEffect: statusEffects.poisoned, strength: 4 },
    { label: "Poisonous snakebite", statusEffect: statusEffects.poisoned, strength: 6 },
    { label: "Catching a cold", statusEffect: statusEffects.sickness, strength: 4 },
    { label: "Heatstroke", statusEffect: statusEffects.sickness, strength: 4 },
    { label: "Contagious disease", statusEffect: statusEffects.sickness, strength: 6 },
    { label: "Insomnia", statusEffect: statusEffects.exhaustion, strength: 4 },
    { label: "Homesickness", statusEffect: statusEffects.exhaustion, strength: 6 },
    { label: "Walking High", statusEffect: statusEffects.muddled, strength: 4 },
    { label: "Drunkenness", statusEffect: statusEffects.muddled, strength: 6 },
];

export const attributes = {
    dexterity: 'DEX',
    strength: 'STR',
    intelligence: 'INT',
    spirit: 'SPI',
    options: [4, 6, 8, 10, 12, 20],
    startOptionIndex: [0, 1, 1, 2]
};

export const difficultyLabels = {
    4: 'Easy',
    7: 'A little difficult',
    9: 'Difficult',
    12: 'Very difficult',
    16: 'Impossible for normal people',
    20: 'Probably requires a miracle',
};

export const evaluationLabels = {
    Fumble: "Total failure",
    4: "Even a kid could do better",
    7: "Pretty good",
    9: "As good as a pro!",
    12: "You’re probably famous in your town",
    16: "Best in the land",
    20: "Legendary",
    Critical: "The best outcome possible",
};

export const monsterLevel = [
    'Minion', 'Weak', 'Scenario Boss', 'Super Hard'
];

export const highestTerrainByLevel = {
    1: 8,
    2: 10,
    3: 10,
    4: 10,
    5: 13,
    6: 13,
    7: 13,
    8: 19,
    9: 19,
    10: 19
};

export const goldRewardPerSessionByLevel = {
    1: Math.ceil(Math.random() * 200) + 500,
    2: Math.ceil(Math.random() * 1300) + 700,
    3: Math.ceil(Math.random() * 1300) + 700,
    4: Math.ceil(Math.random() * 1300) + 700,
    5: Math.ceil(Math.random() * 3000) + 2000,
    6: Math.ceil(Math.random() * 3000) + 2000,
    7: Math.ceil(Math.random() * 3000) + 2000,
    8: 5000,
    9: 5000,
    10: 5000
};

export const levelUpChart = {
    1: 0,
    2: 100,
    3: 600,
    4: 1200,
    5: 2000,
    6: 3000,
    7: 4200,
    8: 5800,
    9: 7500,
    10: 10000
}

export const statExamples = {
    STRSTR: "Digging, Clearing, Manual Labour",
    DEXDEX: "Stealth, Hiding, Keeping Quiet",
    INTINT: "Knowledge (History, Tradition, Class Skills etc), Book Smarts, Education, Know the basics of your Class’s craft",
    SPISPI: "Bravery, Mental Strength",
    STRDEX: "Crafting, Repairs, Felling, Mining, Climbing, Swimming, Hard Exercise",
    STRINT: "Tracking, Gathering, Skilled Labour",
    STRSPI: "Cleaning, Washing, Chores, Drinking, Carousing",
    DEXINT: "Trapping, Hunting, Etiquette, Perception, Searching, Dodging",
    DEXSPI: "Storytelling, Singing, Music, Finesse, Delicate Work, Making intricate items, setting traps",
    INTSPI: "Negotiation, interrogation, Teaching, Talking, Trading, Healing, sense nearby living things",
}

export const nameInspiration = [
    'Sweet', 'Sugar', 'Lollipop', 'Chocolate',
    'Colour', 'Blue', 'Rainbow', 'Storm',
    'Animal', 'Fox', 'Hedgehog', 'Goat',
    'Halloween', 'Pumpkin', 'Bat', 'Candy',
    'Dark', 'Shadow', 'Gloom', 'Midnight',
    'Nut', 'Almond', 'Macadamia', 'Hazel',
    'Cold', 'Frosty', 'Snow', 'Chill',
    'Berry', 'Currant', 'Grape', 'Blueberry',
    'Place', 'Café', 'Hilltop', 'Forest',
    'Flower', 'Petunia', 'Tulip', 'Rose',
    'Positive', 'Hope', 'Truth', 'Happy',
    'Negative', 'Sorrow', 'Despair', 'Heartache',
    'Metal', 'Silver', 'Chrome', 'Shine',
    'Patisserie', 'Donut', 'Cake', 'Cream bun',
    'Above', 'Sky', 'Cloud', 'Flight',
    'Nature', 'Leaf', 'Vine',
    'Water', 'Ocean', 'Lake', 'Mist',
    'Celestial', 'Star', 'Moon', 'Comet',
    'Season', 'Rainy', 'Monsoon', 'Autumn',
    'Occasion', 'Birthday', 'Easter', 'Teatime',
    'Gem', 'Amethyst', 'Bloodstone', 'Onyx',
    'Music', 'Harmony', 'Rhythm', 'Treble',
    'Refreshing', 'Mint', 'Lemonade', 'Cool',
    'Fruit', 'Peach', 'Cherry', 'Banana',
    'Tree', 'Pine', 'Willow', 'Ash',
    'Calm', 'Peace', 'Tranquil', 'Quiet',
    'Symbol', 'Heart', 'Crossbones', 'Infinity',
    'Weapon', 'Sword', 'Bow', 'Boomerang',
    'Dairy', 'Butter', 'Cream', 'Yoghurt',
    'Hot', 'Flame', 'Spark', 'Furnace',
    'Spooky', 'Zombie', 'Curse', 'Cobweb',
    'Tropical', 'Coconut', 'Island', 'Palm',
    'Light', 'Sunshine', 'Day', 'Blue sky',
    'Christmas', 'Present', 'Decoration', 'Pudding',
    'Cute', 'Ribbon', 'Piglet', 'Tiny',
    'Pattern', 'Plaid', 'Polka Dot', 'Stripe'
];
