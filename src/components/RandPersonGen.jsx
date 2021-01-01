import React, { useState } from 'react';
import { attributes } from '../data/miscData';
import { person, levels, levelDependantAttributes } from '../data/people';
import { getRandomItemOf, getRandomIndex, diceRoll } from '../utils/randomizer';

const RandPersonGen = () => {
    const initialPersonState = {
        nameInspiration: '',
        descriptiveTraits: '',
        characterTraits: '',
        descriptiveTraitsSecondary: '',
        characterTraitsSecondary: '',
        appearancePrimary: '',
        appearanceSecondary: '',
        job: '',
        gender: '',
        age: '',
        type: '',
        level: 0,
        strength: 0,
        dexterity: 0,
        intelligence: 0,
        spirit: 0,
        hp: 0,
        mp: 0,
        initiative: 0,
        condition: 0,
        accuracy: '',
        damage: '',
        armor: 0,
        display: false
    }
    const [state, setState] = useState(initialPersonState);
    const [displayInfo, setDisplayInfo] = useState(initialPersonState);

    const generatePerson = event => {
        event.preventDefault();

        let tempState = {...state};

        Object.entries({ ...person, ...levels}).forEach(([key, value]) => {
            if (!tempState[key]) {
                tempState[key] = getRandomItemOf(value.items);
            }
        });

        let statArr = [0, 0, 0, 0]
        for (let i = -3; i < tempState.level; i++) {
            statArr[getRandomIndex(4)]++;
        }

        tempState.strength = attributes.options[statArr[0]];
        tempState.dexterity = attributes.options[statArr[1]];
        tempState.intelligence = attributes.options[statArr[2]];
        tempState.spirit = attributes.options[statArr[3]];
        tempState.hp = tempState.strength * 2 + tempState.level;
        tempState.mp = tempState.spirit * 2 + tempState.level;
        tempState.initiative = diceRoll(tempState.dexterity, tempState.intelligence);
        tempState.condition = diceRoll(tempState.strength, tempState.spirit);
        tempState.accuracy = `d${attributes.options[getRandomItemOf(statArr)]} d${attributes.options[getRandomItemOf(statArr)]}`;
        tempState.damage = `d${attributes.options[getRandomItemOf(statArr)]}`;
        tempState.armor = Math.floor(tempState.level / 2);

        tempState.display = true;

        setDisplayInfo(tempState);
    };

    return (
        <section>
            <header>
                <h3>Random Person Generator</h3>
                <p>Set any presets you want and then press the go button.</p>
            </header>
            <form>
                {
                    Object.entries({ ...person, ...levels, ...levelDependantAttributes }).map(([key, value]) => (
                        <label key={key}>
                            {`${value.title}: `}
                            <select value={state[key]} onChange={e => setState({...state, [key]: e.target.value})}>
                                <option value="">random</option>
                                {
                                    value.items.map(item => <option value={item} key={item}>{item}</option>)
                                }
                            </select>
                        </label>
                    ))
                }
                <button onClick={generatePerson}>Generate Person</button>
            </form>
            <div>
                <p>Person Description:</p>
                {
                    displayInfo.display && 
                    <div>
                        <p>
                            {
                                `You see a person, ${displayInfo.gender.toLowerCase()}, ${displayInfo.age.toLowerCase()}.`
                            }
                        </p>
                        <p>
                            {
                                `Prominent physical descriptors are ${displayInfo.appearancePrimary.toLowerCase()} and ${displayInfo.descriptiveTraits.toLowerCase()} with a little ${displayInfo.appearanceSecondary.toLowerCase()} and ${displayInfo.descriptiveTraitsSecondary.toLowerCase()}.`
                            }
                        </p>
                        <p>
                            {
                                `Their character could be described as ${displayInfo.characterTraits.toLowerCase()} and a little ${displayInfo.characterTraitsSecondary.toLowerCase()}.`
                            }
                        </p>
                        <p>
                            {
                                `Their name is inspired from ${displayInfo.nameInspiration}.`
                            }
                        </p>
                        <p>
                            {
                                `This person is a ${displayInfo.type} type, ${displayInfo.job}, level ${displayInfo.level}.`
                            }
                        </p>
                        <p>Stats</p>
                        <p>
                            {
                                `Level: ${displayInfo.level}`
                            }
                        </p>
                        <p>
                            {
                                `Abilities: ${displayInfo.strength} ${displayInfo.dexterity} ${displayInfo.intelligence} ${displayInfo.spirit}`
                            }
                        </p>
                        <p>
                            {
                                `HP: ${displayInfo.hp}`
                            }
                        </p>
                        <p>
                            {
                                `MP: ${displayInfo.mp}`
                            }
                        </p>
                        <p>
                            {
                                `Initiative: ${displayInfo.initiative}`
                            }
                        </p>
                        <p>
                            {
                                `Condition: ${displayInfo.condition}`
                            }
                        </p>
                        <p>
                            {
                                `Accuracy: ${displayInfo.accuracy}`
                            }
                        </p>
                        <p>
                            {
                                `Damage: ${displayInfo.damage}`
                            }
                        </p>
                        <p>
                            {
                                `Armor: ${displayInfo.armor}`
                            }
                        </p>
                    </div>
                }
            </div>
        </section>
    );
};

export default RandPersonGen;