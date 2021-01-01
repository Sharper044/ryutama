import BlizzardImg from '../assets/Weather/Blizzard.png';
import ClearImg from '../assets/Weather/Clear.png';
import CloudyImg from '../assets/Weather/Cloudy.png';
import ColdImg from '../assets/Weather/Cold.png';
import DarknessImg from '../assets/Weather/Darkness.png';
import DeepFogImg from '../assets/Weather/DeepFog.png';
import FogImg from '../assets/Weather/Fog.png';
import HardRainImg from '../assets/Weather/HardRain.png';
import HotImg from '../assets/Weather/Hot.png';
import HurricaneImg from '../assets/Weather/Hurricane.png';
import RainImg from '../assets/Weather/Rain.png';
import SnowImg from '../assets/Weather/Snow.png';
import StrongWindImg from '../assets/Weather/StrongWind.png';
import ThunderStormImg from '../assets/Weather/ThunderStorm.png';

import AlpineImg from '../assets/Terrain/Alpine.png';
import DeepForestImg from '../assets/Terrain/DeepForest.png';
import DesertImg from '../assets/Terrain/Desert.png';
import GrasslandImg from '../assets/Terrain/Grassland.png';
import HillsImg from '../assets/Terrain/Hills.png';
import JungleImg from '../assets/Terrain/Jungle.png';
import MountainImg from '../assets/Terrain/Mountain.png';
import RockyImg from '../assets/Terrain/Rocky.png';
import SwampImg from '../assets/Terrain/Swamp.png';
import WastelandImg from '../assets/Terrain/Wasteland.png';
import WoodsImg from '../assets/Terrain/Woods.png';

/* 
Graded Randomness In Travels
If you don't want your terrain to be completely random, grasslands one minute, alpine peaks the next, then try this:
When moving from one square (or hex or whatever) to another, roll 1d6. On a 1-2, the terrain gets more difficult.
Choose from the next topography level, or roll for it. On a 3-4, the terrain stays the same. On a 5-6, the terrain gets
easier. Choose from the lower topography level, or roll for it. This creates more realistic gradual changes in terrain,
although how much realism you want in your Ryuutama is up to you.
Weather can be handled the same way. Every day, roll 1d6. On a 1-2, it gets worse, on a 3-4, it stays the same, on a 5-6, it
improves.
So for example, your band of travellers has camped in woods on a rainy day. The next day you roll for weather, getting a
2. The rain worsens, becoming hard rain. For terrain, the roll is a 3. The woodlands continue, but with this worsening
weather hopefully that next town is somewhere close...
*/

export const terrainNames = {
    all: "All",
    grassland: "Grassland",
    wasteland: "Wasteland",
    woods: "Woods",
    hills: "Hills",
    rocky: "Rocky Terrain",
    deepForest: "Deep Forest",
    swamp: "Swamp",
    mountain: "Mountain",
    desert: "Desert",
    jungle: "Jungle",
    alpine: "Alpine",
    sea: "Sea",
    urban: "Urban"
}

export const terrain = [
    {
        name: terrainNames.grassland,
        level: 1,
        targetNumber: 6,
        altNames: ["Plains", "Lake", "Vale", "River", "Fields"],
        sights: ['Grassy Thickets', 'Sparse Trees', 'Fields of Flowers', 'Burrows and Dens', 'Small Rivers', "Animal Tracks", "Wild Animals", "Insects", "Dragon Statues"],
        img: GrasslandImg,
        movementMultiplier: 1,
        description: 'Rolling plains of relatively peaceful, grassy land with shrubs and maybe small or stunted trees. There are usually few dangers in the grassland, but it can be easy to get lost due to the lack of landmarks',

    },
    {
        name: terrainNames.wasteland,
        level: 1,
        targetNumber: 6,
        altNames: ["Ruins", "Mesa", "Barrens"],
        img: WastelandImg,
        sights: ['Animal Remains', 'Bones', 'Withered Trees', 'Withering Grass', 'Rocks', 'Sand', 'Boulders', 'An Abandoned Shack', 'Fallen Trees', 'Cliffs', 'Scree and Rubble', "Animal Tracks", "Wild Animals", "Insects", "Dragon Statues"],
        movementMultiplier: 1,
        description: 'Craggy wastes, dried lakebeds, or rocky areas between mountains where life has yet to firmly take root - or has already died off Danger is scarce, but so are animals and resources.'
    },
    {
        name: terrainNames.woods,
        level: 2,
        targetNumber: 8,
        altNames: ["Grove", "Brush", "Bush"],
        sights: ['Thickets', 'A Grove of Trees', 'Seeds/Acorns', 'Fallen Leaves', 'Fallen Trees', 'Sunlight Filtering through Trees', 'Flowers', 'Animal Trails', "Animal Tracks", "Wild Animals", "Insects", "Dragon Statues"],
        img: WoodsImg,
        movementMultiplier: 1,
        description: 'Gentle, forested areas of trees or bamboo, full of plant and animal life.'
    },
    {
        name: terrainNames.hills,
        level: 2,
        targetNumber: 8,
        altNames: ["Highlands", "Downs", "Plateau"],
        sights: ["Hills", "Grassy Thickets", "Fields of Flowers", "Pastureland", "Fences", "Trees", "Cow or Sheep Stables", "Animal Droppings", "Animal Tracks", "Wild Animals", "Insects", "Dragon Statues"],
        img: HillsImg,
        movementMultiplier: 1,
        description: 'Sloping hills and elevated plateaus, usually covered in pasture land and rich in plant life.'
    },
    {
        name: terrainNames.rocky,
        level: 2,
        targetNumber: 8,
        altNames: ["Hill", "Mines", "Valley", "Canyon"],
        sights: ['Ledges', 'Rocky Paths', 'Falling Rocks', 'Boulders', 'Rocks', 'Bluffs', 'Gravel Banks', 'River Rapids', 'Chasms', "Animal Tracks", "Wild Animals", "Insects", "Dragon Statues"],
        img: RockyImg,
        movementMultiplier: 1,
        description: 'Rough areas, tougher to traverse than wastelands, but not quite mountainous. These rocky areas tend to be steep, stony inclines, with little plant and animal life; or else flat and very dry, verging on being desert.'
    },
    {
        name: terrainNames.deepForest,
        level: 3,
        targetNumber: 10,
        altNames: ["Taiga", "Primeval Forest"],
        sights: ["Moss-Covered Rocks", "Dense Trees", "Seeds/Acorns", "Thickets", "Fallen Trees", "Fallen Leaves", "Mushrooms", "Mist", "Animal Trails", "Animal Tracks", "Wild Animals", "Insects", "Dragon Statues"],
        img: DeepForestImg,
        movementMultiplier: 0.5,
        description: 'Ancient, dark, powerful forests that seem to swallow the sunlight. No amount of familiarity will allow you to feel truly at ease here, and it can be easy for unwary travelers to become lost.'
    },
    {
        name: terrainNames.swamp,
        level: 3,
        targetNumber: 10,
        altNames: ["Mire", "Bog", "Wetland", "Marsh", ],
        sights: ["Bogs", "Mud", "Holes", "Quagmires", "Thickets", "Driftwood", "Lotus Petals", "Frogs", "Snakes", "Bubbling Water", "Small Paths", "A Bridge", "Animal Tracks", "Wild Animals", "Insects", "Dragon Statues"],
        img: SwampImg,
        movementMultiplier: 0.5,
        description: 'Wetlands or forested bogs, swamps tend to be rich ecologies with a wide variety of plants, animals and bugs. However, it is difficult to cross wetlands quickly, and it is all too easy for gear to be lost or ruined in the process.'
    },
    {
        name: terrainNames.mountain,
        level: 3,
        targetNumber: 10,
        altNames: ["Caves"],
        sights: ["Valleys", "Hills", "Steep Slopes", "Suspension Bridges", "Animal Trails", "Signposts", "Groves of Trees", "Geysers", "Hot Springs", "Poisonous Gasses", "Waterfalls", "Emergency Shelters", "Animal Tracks", "Wild Animals", "Insects", "Dragon Statues"],
        img: MountainImg,
        movementMultiplier: 0.5,
        description: 'Huge, rocky protrusions that reach into the clouds and can stretch for miles. Mountains and mountain ranges are home to specialized flora and fauna that have adapted to steep slopes and frigid temperatures. They can be very dangerous to cross without a lot of preparation.'
    },
    {
        name: terrainNames.desert,
        level: 4,
        targetNumber: 12,
        altNames: ["Dunes"],
        sights: ["Sand", "Quicksand", "Sand Dunes", "Boulders", "Rocks", "Bones", "Cactus", "Sandstorms", "Mirages", "Heat Haze", "Oasis Springs", "Ruins Half-Buried in Sand", "A Pyramid", "Ancient Ruins", "Animal Tracks", "Wild Animals", "Insects", "Dragon Statues"],
        img: DesertImg,
        movementMultiplier: 0.33,
        description: 'Barren, sandy land with little plant or animal life. Extremely hazardous to cross without preparation.'
    },
    {
        name: terrainNames.jungle,
        level: 4,
        targetNumber: 12,
        altNames: ["Rainforest"],
        sights: ["Coiling Vines", "Tree Canopies", "Brightly Colored Flowers", "Giant Plants", "Mist", "Mud", "Fallen Trees", "Animal Cries", "Bleached-White Bones", "Mushrooms", "Animal Trails", "Giant Insects", "Ancient Ruins", "Mysterious Objects from Another Civilization", "Animal Tracks", "Wild Animals", "Insects", "Dragon Statues"],
        img: JungleImg,
        movementMultiplier: 0.33,
        description: 'A rich biome, rife with dangers both obvious and hidden. Jungles have great biodiversity, always surprising travelers with new sights, smells and experiences, but great care must be taken in dealing with the plants and animals found there.'
    },
    {
        name: terrainNames.alpine,
        level: 5,
        targetNumber: 14,
        altNames: ["Peaks", "Glacier", "Volcano"],
        sights: ["Snow", "Ice", "Alpine Plants", "Boulders", "Snow Drifts", "Sheer Cliffs", "Falling Rocks", "Scree and Rubble", "Volcanic Caldera", "Vapor", "Geysers", "Ledges", "Emergency Shelters", "Animal Tracks", "Wild Animals", "Insects", "Dragon Statues"],
        img: AlpineImg,
        movementMultiplier: 0.25,
        description: 'The highest, coldest reaches of the tallest mountains, alpine regions are almost entirely devoid of life. Travelers come here only if there is no other path, and can do nothing but hasten on their way. Extremely dangerous without proper gear and training. This terrain can also represent the tops of active volcanic mountains, which present their own challenges.'
    }
];

export const weatherNames = {
    clear: 'Clear Skies',
    cloudy: 'Cloudy',
    strongWind: 'Strong Wind',
    rain: 'Rain',
    fog: 'Fog',
    hot: 'Hot',
    cold: 'Cold',
    hardRain: 'Hard Rain',
    snow: 'Snow',
    deepFog: 'Deep Fog',
    thunderstorm: 'Thunderstorm',
    darkness: 'Darkness',
    night: 'Night',
    hurricane: 'Hurricane',
    blizzard: 'Blizzard'
}

export const weather = [
    {
        name: weatherNames.clear,
        modifier: 0,
        img: ClearImg
    },
    {
        name: weatherNames.cloudy,
        modifier: 0,
        img: CloudyImg
    },
    {
        name: weatherNames.strongWind,
        modifier: 1,
        img: StrongWindImg
    },
    {
        name: weatherNames.rain,
        modifier: 1,
        img: RainImg
    },
    {
        name: weatherNames.fog,
        modifier: 1,
        img: FogImg
    },
    {
        name: weatherNames.hot,
        modifier: 1,
        img: HotImg
    },
    {
        name: weatherNames.cold,
        modifier: 1,
        img: ColdImg
    },
    {
        name: weatherNames.hardRain,
        modifier: 3,
        img: HardRainImg
    },
    {
        name: weatherNames.snow,
        modifier: 3,
        img: SnowImg
    },
    {
        name: weatherNames.deepFog,
        modifier: 3,
        img: DeepFogImg
    },
    {
        name: weatherNames.thunderstorm,
        modifier: 3,
        img: ThunderStormImg
    },
    {
        name: weatherNames.darkness,
        modifier: 3,
        img: DarknessImg
    },
    {
        name: weatherNames.night,
        modifier: 3,
        img: DarknessImg
    },
    {
        name: weatherNames.hurricane,
        modifier: 5,
        img: HurricaneImg
    },
    {
        name: weatherNames.blizzard,
        modifier: 5,
        img: BlizzardImg
    }
];

/*
If you get unseasonal weather, roll 1d6. On a 1-3, move one season back (Summer becomes Spring). On a 4-6, move one
season forward (Spring becomes Summer). Then roll again using that season's list.
*/
export const randomWeatherBySeason = {
    spring: [
        { name: "Deep Fog", weatherIndex: 9 },
        { name: "Driving Rain", weatherIndex: 7 },
        { name: "Cold Breeze", weatherIndex: 6 },
        { name: "Hard Rain", weatherIndex: 7 },
        { name: "Light Drizzle", weatherIndex: 3 },
        { name: "Now Warm, Now Cool", weatherIndex: 0 },
        { name: "Misty Air", weatherIndex: 4 },
        { name: "High Clouds, Low Wind", weatherIndex: 1 },
        { name: "Nuisance Gusts", weatherIndex: 2 },
        { name: "Calm, Cool, Clear", weatherIndex: 0 },
        { name: "Bright Sun", weatherIndex: 5 },
        { name: "Spring Showers", weatherIndex: 3 },
        { name: "Optimistic Breeze", weatherIndex: 0 },
        { name: "Bright & Clear", weatherIndex: 0 },
        { name: "Perfect Spring Day", weatherIndex: 0 },
    ],
    summer: [
        { name: "Hurricane", weatherIndex: 13 },
        { name: "Hard Rain", weatherIndex: 7 },
        { name: "Just Too Hot", weatherIndex: 5 },
        { name: "Hazy Mist", weatherIndex: 4 },
        { name: "Hot Breeze", weatherIndex: 2 },
        { name: "Overcast & Stifling", weatherIndex: 5 },
        { name: "Almost Too Warm", weatherIndex: 0 },
        { name: "Dry Heat", weatherIndex: 5 },
        { name: "Overcast", weatherIndex: 1 },
        { name: "So Humid", weatherIndex: 5 },
        { name: "Sun Showers", weatherIndex: 3 },
        { name: "Scattered Clouds", weatherIndex: 1 },
        { name: "Hopeful Sky", weatherIndex: 0 },
        { name: "Warm & Breezy", weatherIndex: 0 },
        { name: "Perfect Summer Day", weatherIndex: 0 },
    ],
    fall: [
        { name: "Hurricane", weatherIndex: 13 },
        { name: "Deep Fog", weatherIndex: 9 },
        { name: "Downpour", weatherIndex: 7 },
        { name: "Cold & Blowy", weatherIndex: 6 },
        { name: "Late Heat", weatherIndex: 5 },
        { name: "Miserable Drizzle", weatherIndex: 3 },
        { name: "Strong Winds", weatherIndex: 2 },
        { name: "Blustery", weatherIndex: 2 },
        { name: "Still & Silent", weatherIndex: 0 },
        { name: "Cool, Clear, Infrequent Gusts", weatherIndex: 0 },
        { name: "Cloudy & Wet", weatherIndex: 3 },
        { name: "Brisk But Sunny", weatherIndex: 0 },
        { name: "Melancholy Light", weatherIndex: 1 },
        { name: "Colourful Leaves & Gentle Breeze", weatherIndex: 1 },
        { name: "Perfect Autumn Day", weatherIndex: 0 },
    ],
    winter: [
        { name: "Blizzard", weatherIndex: 14 },
        { name: "Frigid Flurries", weatherIndex: 8 },
        { name: "Freezing Fog", weatherIndex: 9 },
        { name: "Fluffy Drifts", weatherIndex: 8 },
        { name: "Chill Fog", weatherIndex: 4 },
        { name: "Lazy Wind", weatherIndex: 6 },
        { name: "Icy Rain", weatherIndex: 7 },
        { name: "Low Sky, Dull Light", weatherIndex: 1 },
        { name: "Sleet", weatherIndex: 3 },
        { name: "Clear Sky, Cool Air", weatherIndex: 0 },
        { name: "I Can See My Breath", weatherIndex: 6 },
        { name: "Dancing Snowflakes", weatherIndex: 6 },
        { name: "Reflective Air", weatherIndex: 0 },
        { name: "Crisp & Clean", weatherIndex: 0 },
        { name: "Perfect Winter Day", weatherIndex: 0 },
    ]
};

export const seasonNames = {
    spring: 'Spring',
    summer: 'Summer',
    fall: 'Fall',
    winter: 'Winter',
    all: 'All'
}


