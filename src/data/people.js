import { nameInspiration, descriptors, attributes } from './miscData';

export const personDescriptiveTraits = [
    "Scarred", "Straight Backed", "Interesting Hair", "Clean", "Stooped", "Hat",
    "Fidgety", "Colorful", "Glasses", "Flawed", "Unpleasant", "Scruffy",
    "Low Voice", "Tall", "Old Clothes", "Bandaged", "Birthmark", "Accented",
    "Broken Limb", "Tattooed", "Cape", "Fur", "Still", "Small",
    "Good Clothes", "Flamboyant", "Broad", "Short", "Slim", "Quality Weapon",
    "Big", "Unusual Eyes", "Stutter", "Rare Equipment", "Amazing Clothes", "Assured Movement",
    "Limp", "Distinctive Symbol", "Missing Something", "High Voice", "Slurred Speech", "Dramatic Voice",
    "Odd Teeth", "Creepy", "Old Injury", "Jewelry", "Debonair", "Disguised",
];

export const personCharacterTraits = [
    "Mature", "Typical", "Stoic", "Chatty", "Interested", "Cynical",
    "Standoffish", "Boring", "Loyal", "Brave", "Professional", "Joyful",
    "Weary", "Touchy", "Unusual", "Stonewall", "Loud", "Frivolous",
    "Quiet", "Generous", "Cowardly", "Childish", "Hunted", "Arrogant",
    "Anxious", "Grumpy", "Repetitive", "Shy", "Odd", "Clumsy",
    "Scarred", "Sarcastic", "Confident", "Defensive", "Kind", "Critical",
    "Faithful", "Useful", "Free", "Loving", "Fanatical", "Selfish",
    "Perfectionist", "Simple", "Careless", "Lazy", "Caring", "Familiar",
    "Hardworking", "Studious", "Rough", "Forgetful", "Protective", "Crude",
    "Absent", "Loquacious", "Honorable", "Academic", "Guilty", "Irreverent",
    "Quick", "Easygoing", "Lucky", "Envious", "Spiteful", "Peaceful",
    "Calm", "Sneaky", "Patient", "Slow", "Unfortunate", "Charming",
    "Fun", "Optimistic", "Malicious", "Sly", "Fiddly", "Careful",
    "Naive", "Silent", "Stubborn", "Cultured", "Adventurous", "Mood-maker",
    "Scared", "Angry", "Dedicated", "Meticulous", "Petty", "Wise",
    "Gloomy", "Fearful", "Honest", "Pessimistic", "Dynamic", "Curious",
    "Bookish", "Jealous", "Charmed", "Prickly", "Weak",
    "Mood-breaker", "Short", "Secretive", "Obsessive", "Snooty", "Organized",
    "Dishonest", "Cruel", "Realist", "Doubtful", "Brutal", "Destructive",
    "Conflicted", "Changeable", "Strong", "Monstrous", "Mysterious", "Fan of PC",
];

export const characterJobs = [
    "dancer", "musician", "minstrel", "trader", "store owner", "caravan leader", "merchant", "hunter", "trapper", "monster hunter", "park ranger", "doctor", "pharmacist", "alchemist", "herbalist", "farmer", "breeder", "milkmaid", "shoemaker", "hatmaker",
    "cook", "artisan", "knight", "samurai", "daimyo", "lord", "noble", "mercenary", "monk", "boxer", "weather forecaster",
    "bodyguard", "priest", "priestess", "soothsayer", "sailor", "pirate", "marine", "captain", "fisherman",
    "pearl diver", "riverboat guide", "Mailman", "Messenger", "Emissary", "Seer", "Oracle",
    "Prophet", "Clairvoyant", "Trainer", "Circus Performer", "Animal Tamer", "Spy", "Thief", "Entertainer",
    "Jester", "Exorcist", "Historian", "Crew Member", "Hermit",
];

export const types = [ "Attack", "Technical", "Magic-Spring", "Magic-Summer", "Magic-Fall", "Magic-Winter", "Magic-Night", "Nimble", "Defense", "Wild"

]

export const person = {
    nameInspiration: {
        title: "Name Inspiration",
        items: nameInspiration
    },
    descriptiveTraits: {
        title: "Main Physical Description",
        items: personDescriptiveTraits
    },
    characterTraits: {
        title: "Main Character Trait",
        items: personCharacterTraits
    },
    descriptiveTraitsSecondary: {
        title: "Secondary Physical Description",
        items: personDescriptiveTraits
    },
    characterTraitsSecondary: {
        title: "Secondary Character Trait",
        items: personCharacterTraits
    },
    appearancePrimary: {
        title: "Primary Appearance (Item or description)",
        items: descriptors
    },
    appearanceSecondary: {
        title: "Secondary Appearance (Item or description)",
        items: descriptors
    },
    job: {
        title: "Job",
        items: characterJobs
    },
    gender: {
        title: "Gender",
        items: ['Male', 'Female']
    },
    age: {
        title: "Age",
        items: ['Child', 'Teenage', 'Young Adult', 'Middle-aged Adult', 'Old', 'Ancient']
    },
    type: {
        title: "Type",
        items: types
    }
}

export const levels = {
    level: {
        title: "Level",
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
}

export const levelDependantAttributes = {
    strength: {
        title: attributes.strength,
        items: attributes.options 
    },
    dexterity: {
        title: attributes.dexterity,
        items: attributes.options
    },
    intelligence: {
        title: attributes.intelligence,
        items: attributes.options
    },
    spirit: {
        title: attributes.spirit,
        items: attributes.options
    },
    hp: {
        title: "HP",
        items: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
    },
    mp: {
        title: "MP",
        items: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
    },
    initiative: {
        title: "Initiative",
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13]
    },
    condition: {
        title: "Condition",
        items: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    },
    accuracy: {
        title: "Accuracy",
        items: ['d4 d4', 'd4 d6', 'd4 d8', 'd4 d10', 'd4 d12', 'd6 d6', 'd6 d8', 'd6 d10', 'd6 d12', 'd8 d8', 'd8 d10', 'd8 d12', 'd10 d10', 'd12 d10']
    },
    damage: {
        title: "Damage",
        items: ['d4', 'd6', 'd8', 'd10', 'd12']
    },
    armor: {
        title: "Armor",
        items: ['0', '1', '2', '3', '4', '5']
    },
}
