import React, { useState } from 'react';
import { levels } from '../data/people';
import { itemTypes, rewardGPByLevel } from '../data/itemsAndAttributes';
import { getRandomItemOf } from '../utils/randomizer';
import { getGPValue } from '../utils/calc';

const RandTreasureGen = () => {
    const [players, setPlayers] = useState({1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0});
    const [displayData, setDisplayData] = useState({display: false, treasure: []});
    const [selectedTreasureTypes, setSelectedTreasureTypes] = useState([]);
    let treasureOptions = Object.entries(itemTypes);

    const generateTreasure = () => {
        const totalGP = rewardGPByLevel(players);
        let tempTreasure = [];
        let currentValue = 0;
        let availableTreasure = selectedTreasureTypes.length ? treasureOptions.filter(([optionKey, optionValue]) => selectedTreasureTypes.includes(optionKey)) : treasureOptions;
        const noAttribute = { name: '', label: '' };

        debugger;
        do {
            let itemType = getRandomItemOf(availableTreasure)[1];
            let item = getRandomItemOf(itemType.source);
            let attribute = Math.random() > .5 ? noAttribute : getRandomItemOf(itemType.attributes);
            let value = getGPValue(item, attribute);

            tempTreasure.push({item, attribute, value});
            currentValue += value;
        } while (currentValue <= Math.floor(totalGP * 2 / 3));

        if (totalGP > currentValue) {
            tempTreasure.push({
                item: {name: 'Gold Coins'}, 
                attribute: noAttribute,
                value: totalGP - currentValue
            });
        };

        setDisplayData({display: true, treasure: tempTreasure});
    }

    return (
        <section>
            <header>
                <h3>Random Treasure Generator</h3>
                <p>Set the number of players for each level and select the type of treasure available</p>
            </header>
            <form>
                {
                    levels.level.items.map((level) => (
                        <label key={level}>
                            {`Number of level ${level} Players:`}
                            <input 
                                type="number" 
                                min={1}  
                                value={players[level]} 
                                onChange={e => setPlayers({ ...players, [level]: e.target.value})}
                            />
                        </label>
                    ))
            git remote add origin https://github.com/Sharper044/ryutama.git
git branch -M main
git push -u origin main    }
                {
                    treasureOptions.map(([optionKey, optionValue]) => (
                        <label key={optionKey}>
                            {optionValue.label}
                            <input 
                                type="checkbox"  
                                value={selectedTreasureTypes[optionKey]} 
                                onChange={e => setSelectedTreasureTypes(selectedTreasureTypes.includes(optionKey) ? selectedTreasureTypes.slice().filter(treasureType => treasureType !== optionKey) : [ ...selectedTreasureTypes, optionKey])}
                            />
                        </label>
                    ))
                }
                <button onClick={() => generateTreasure()}>Generate Treasure</button>
            </form>
            <div>
                <p>Treasure:</p>
                {
                    displayData.display && 
                    <div>
                        {displayData.treasure.map(({item, attribute, value}, index) => (
                            <p key={item.name + index}>{attribute.name ? `${attribute.name} ${item.name}, worth: ${value}` : `${item.name}, worth: ${value}`}</p>
                        ))}
                    </div>
                }
            </div>
        </section>
    );
}

export default RandTreasureGen;