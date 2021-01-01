import React, { useState } from 'react';
import { town, facilities } from '../data/places';
import { getRandomItemOf } from '../utils/randomizer';

const initialTownState = {
    population: '',
    nameInspiration: '',
    government: '',
    rulerPersonality: '',
    specialtyGoods: '',
    mainBuilding: '',
    sights: '',
    sounds: '',
    smells: '',
    threats: '',
    numberOfMarkets: 0,
    facilities: [],
    display: false
}

const RandTownGen = () => {
    const [state, setState] = useState(initialTownState);
    const [displayInfo, setDisplayInfo] = useState(initialTownState);

    const generateTown = event => {
        event.preventDefault();

        let tempState = {...state};

        if (!tempState.population) {
            tempState.population = getRandomItemOf(town.population.items);
        };
        
        let populationIndex = town.population.items.findIndex(pop => pop === tempState.population);
        
        Object.entries(town).forEach(([key, value]) => {
            if (!tempState[key]) {
                tempState[key] = getRandomItemOf(value.items, value.modifierLookup[populationIndex]);
            }
        });
        
        let facilityModifierLookup = { 0: 5, 1: 10, 2: 15, 3: 20 };
        while(tempState.facilities.length <= facilityModifierLookup[populationIndex]) {
            let facility = getRandomItemOf(facilities);
            if (facility.whereFound <= populationIndex && tempState.facilities.findIndex(fac => fac.name === facility.name) === -1) {
                tempState.facilities.push(facility);
            };
        };
        
        let numberOfMarketsLookup = { 0: 1, 1: 1, 2: 3, 3: 5};
        tempState.numberOfMarkets = numberOfMarketsLookup[populationIndex];
        tempState.display = true;

        setDisplayInfo(tempState);
    };

    return (
        <section>
            <header>
                <h3>Random Town Generator</h3>
                <p>Set any presets you want and then press the go button.</p>
            </header>
            <form>
                {
                    Object.entries(town).map(([key, value]) => (
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
                <button onClick={generateTown}>Generate Town</button>
            </form>
            <div>
                <p>Town Description:</p>
                {
                    displayInfo.display && 
                    <div>
                        <p>
                            {
                                `This ${displayInfo.population.toLowerCase()} is ran by its own ${displayInfo.government}, which tends to be ${displayInfo.rulerPersonality.toLowerCase()}. Its name is roughly translated or is inspired from "${displayInfo.nameInspiration}."`
                            }
                        </p>
                        <p>
                            {
                                `This ${displayInfo.population.toLowerCase()} specializes in creating fine ${displayInfo.specialtyGoods.toLowerCase()}. You also hear that the town has been having a lot of trouble recently with ${displayInfo.threats}.`
                            }
                        </p>
                        <p>    
                            {
                                `The most prominent feature is a large ${displayInfo.mainBuilding} in the center.`
                            }
                        </p>
                        <p>    
                            {
                                `The most prominent feature is a large ${displayInfo.mainBuilding} in the center. As you walk through this place, you see prominent ${displayInfo.sights} and hear the sound of ${displayInfo.sounds}. You also catch the aroma of ${displayInfo.smells}.`
                            }
                        </p>
                        <p>
                            {
                                `There ${displayInfo.numberOfMarkets > 1 ? 'are' : 'is'} ${displayInfo.numberOfMarkets} market${displayInfo.numberOfMarkets > 1 ? 's' : ''} here. Some of the facilities you see are:`
                            }
                        </p>
                        {
                            displayInfo.facilities.map((facility, i) => (
                                <p>
                                    {
                                        `${i === displayInfo.facilities.length - 1 && displayInfo.facilities.length !== 1 ? ' and' : ''} a ${facility.name}, where you can ${facility.description.toLowerCase()} for ${facility.cost} gold`
                                    }
                                </p>
                            ))
                        }
                    </div>
                }
            </div>
        </section>
    );
};

export default RandTownGen;