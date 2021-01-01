import React, { useState } from 'react';
import { market } from '../data/places';
import { townPopulations } from '../data/miscData';
import { getRandomItemOf } from '../utils/randomizer';

const RandMarketGen = () => {
    const initialMarketState = {
        population: '',
        occurrence: '',
        vendorRights: '',
        numberOfVendors: '',
        density: '',
        prices: '',
        businessRates: '',
        arrangement: '',
        stockLevel: '',
        quality: '',
        display: false
    }
    const [state, setState] = useState(initialMarketState);
    const [displayInfo, setDisplayInfo] = useState(initialMarketState);

    const generateMarket = event => {
        event.preventDefault();

        let tempState = {...state};

        if (!tempState.population) {
            tempState.population = getRandomItemOf(townPopulations);
        };
        
        let populationIndex = townPopulations.findIndex(pop => pop === tempState.population);

        Object.entries(market).forEach(([key, value]) => {
            if (!tempState[key]) {
                tempState[key] = getRandomItemOf(value.items, value.modifierLookup[populationIndex]);
            }
        });

        tempState.display = true;

        setDisplayInfo(tempState);
    };

    return (
        <section>
            <header>
                <h3>Random Market Generator</h3>
                <p>Set any presets you want and then press the go button.</p>
            </header>
            <form>
                <label>
                    Location Size:
                    <select value={state.population} onChange={e => setState({...state, population: e.target.value})}>
                        <option value="">random</option>
                        {
                            townPopulations.map(pop => <option value={pop} key={'pop-' + pop}>{pop}</option>)
                        }
                    </select>
                </label>
                {
                    Object.entries(market).map(([key, value]) => (
                        <label key={key}>
                            {`${value.title}: `}
                            <select value={state[key]} onChange={e => setState({...state, [key]: e.target.value})}>
                                <option value="">random</option>
                                {
                                    value.items.map(item => <option value={item.label} key={item.label}>{item.label}</option>)
                                }
                            </select>
                        </label>
                    ))
                }
                <button onClick={generateMarket}>Generate Market</button>
            </form>
            <div>
                <p>Market Description:</p>
                {
                    displayInfo.display && 
                    <div>
                        <p>
                            {
                                `This ${displayInfo.population.toLowerCase()} market is ${displayInfo.occurrence.label.toLowerCase()}. ${displayInfo.occurrence.description}`
                            }
                        </p>
                        <p>
                            {
                                `The arrangement is ${displayInfo.arrangement.label.toLowerCase()}. ${displayInfo.arrangement.description}`
                            }
                        </p>
                        <p>
                            {
                                `There appear to be about ${displayInfo.numberOfVendors.description} vendors here. It also appears that there are ${displayInfo.density.description}`
                            }
                        </p>
                        <p>
                            {
                                `Business today is ${displayInfo.businessRates.label.toLowerCase()}. ${displayInfo.businessRates.description}`
                            }
                        </p>
                        <p>
                            {
                                `The vendor's stock levels are ${displayInfo.stockLevel.label.toLowerCase()}. ${displayInfo.stockLevel.description}`
                            }
                        </p>
                        <p>
                            {
                                `The quality of these items are ${displayInfo.quality.label.toLowerCase()}. ${displayInfo.quality.description}`
                            }
                        </p>
                        <p>
                            {
                                `Prices are ${displayInfo.prices.label}${displayInfo.prices.description}.`
                            }
                        </p>
                    </div>
                }
            </div>
        </section>
    );
};

export default RandMarketGen;