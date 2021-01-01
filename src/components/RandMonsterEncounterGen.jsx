import React, { useState } from 'react';
import { allMonsters, monsterOptions, monsterStrengthChart, monsters } from '../data/monsters';
import { getRandomItemOf } from '../utils/randomizer';
import { levels } from '../data/people';

const displayObject = (object) => {
    let entries = Object.entries(object);

    return (
        <div>
            {
                entries.map(([key, value]) => {
                    if (Array.isArray(value)) {
                        return (
                            <div key={key}>
                                <p>{key}:</p>
                                {value.map(valueItem => {
                                    if (typeof valueItem === "object") {
                                        return displayObject(valueItem)
                                    } else {
                                        return <p key={valueItem}>{valueItem}</p>
                                    }
                                })}
                            </div>
                        )
                    } else if  (typeof value === "object") {
                        return (
                            <div key={key}>
                                <p>{key}:</p>
                                {displayObject(value)}
                            </div>
                        )
                    } else {
                        return <p key={key}>{`${key}: ${value}`}</p>
                    }
                })
            }
        </div>
    )
}

const RandMonsterEncounterGen = () => {
    const initialMonsterState = {
        habitat: '',
        season: '',
        type: '',
        averagePartyLevel: 1,
        monster: {},
        number: 0,
        display: false
    }
    const [state, setState] = useState(initialMonsterState);
    const [displayInfo, setDisplayInfo] = useState(initialMonsterState);

    const generateEncounter = strength => event => {
        event.preventDefault();
        
        let tempState = {...state};
        let monsters = [...allMonsters];
        
        if (tempState.habitat!== '' && tempState.habitat!== "All") {
            monsters = monsters.filter(monster => monster.habitats.includes(tempState.habitat));
        };
        
        if (tempState.season!== '' && tempState.season!== "All") {
            monsters = monsters.filter(monster => monster.season === tempState.season);
        };
        
        if (tempState.type !== '') {
            monsters = monsters.filter(monster => monster.type === tempState.type);
        };
        
        monsters = monsters.filter(monster => strength.monsterLevels(monster.level, parseInt(tempState.averagePartyLevel, 10)));
        
        tempState.monster = getRandomItemOf(monsters);
        tempState.number = strength.number;
        tempState.display = true;
        
        setDisplayInfo(tempState);
    };

    return (
        <section>
            <header>
                <h3>Random Monster Encounter Generator</h3>
                <p>Set any presets you want and then select the difficulty.</p>
            </header>
            <form>
                {
                    Object.entries(monsterOptions).map(([key, value]) => (
                        <label key={key}>
                            {`${key}: `}
                            <select value={state[key]} onChange={e => setState({...state, [key]: e.target.value})}>
                                <option value="">random</option>
                                {
                                    value.map(item => <option value={item} key={item}>{item}</option>)
                                }
                            </select>
                        </label>
                    ))
                }
                <label key='averagePartyLevel'>
                    Average Party Level:
                    <select value={state.averagePartyLevel} onChange={e => setState({...state, averagePartyLevel: e.target.value})}>
                        {
                            levels.level.items.map(item => <option value={item} key={item}>{item}</option>)
                        }
                    </select>
                </label>
                {
                    monsterStrengthChart.map(item => (
                        <button key={item.strength} onClick={generateEncounter(item)}>
                            {item.strength}
                        </button>
                    ))
                }
            </form>
            {
                displayInfo.monster &&
                <div>
                    <p>Monster Encounter:</p>
                    {
                        displayInfo.display && 
                        <div>
                            <p>
                                {
                                    `You have encountered ${displayInfo.number} ${displayInfo.monster.name}${displayInfo.number > 1 ? 's' : ''}.`
                                }
                            </p>
                            <p>
                                {
                                    `Type: ${displayInfo.monster.type}. ${monsters[displayInfo.monster.familyAddress].description}`
                                }
                            </p>
                            <p>
                                {
                                    displayInfo.monster.description ? `Description: ${displayInfo.monster.description}` : ''
                                }
                            </p>
                            <p>
                                {
                                    displayInfo.monster.specialAbility ? `Special Ability: ${displayInfo.monster.specialAbility}` : ''
                                }
                            </p>
                            <p>Stats:</p>
                            <p>{`Name: ${displayInfo.monster.name}`}</p>
                            <p>{`Level: ${displayInfo.monster.level}`}</p>
                            <p>{`Habitats: ${displayInfo.monster.habitats.reduce((prev, current) => `${prev}, ${current}`)}`}</p>
                            <p>{`Season: ${displayInfo.monster.season}`}</p>
                            <p>{`Materials:`}</p>
                            {
                                displayInfo.monster.materials?.map(item => displayObject(item))
                            }
                            <p>{`Draconica Number: ${displayInfo.monster.dragonicaNumber || 'Not in Draconica'}`}</p>
                            <p>{`HP: ${displayInfo.monster.HP}`}</p>
                            <p>{`MP: ${displayInfo.monster.MP}`}</p>
                            <p>{`Initiative: ${displayInfo.monster.initiative}`}</p>
                            <p>{`Condition: ${displayInfo.monster.condition}`}</p>
                            <p>{`Abilities: ${displayInfo.monster.abilities}`}</p>
                            <p>{`Accuracy: ${displayInfo.monster.accuracy}`}</p>
                            <p>{`Damage: ${displayInfo.monster.damage}`}</p>
                            <p>{`Armor: ${displayInfo.monster.armor}`}</p>
                        </div>
                    }
                </div>
            }
        </section>
    );
};

export default RandMonsterEncounterGen;