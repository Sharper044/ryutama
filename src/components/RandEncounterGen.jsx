import React, { useState } from 'react';
import { descriptors, propertiesAndEffects } from '../data/miscData';
import { diversionsWhileTravelling, itemsAndEncounters, locationInTown, locationOutsideTown, moreRandomThings } from '../data/places';
import { minorQuestProblemOrSituation } from '../data/serendipity';
import { getRandomItemOf } from '../utils/randomizer';

const RandEncounterGen = () => {
    const initialEncounterState = {
        descriptor: '',
        encounter: '',
        location: '',
        propertyOrEffect: '',
        randomThing: '',
        display: false
    }
    const [state, setState] = useState(initialEncounterState);

    const generateEncounter = inTown => event => {
        event.preventDefault();

        let tempState = {...state};
        let encounters = inTown ? [ ...itemsAndEncounters, ...minorQuestProblemOrSituation ] : [ ...itemsAndEncounters, ...diversionsWhileTravelling, ...minorQuestProblemOrSituation ];
        let locations = inTown ? locationInTown : locationOutsideTown;

        tempState.descriptor = getRandomItemOf(descriptors);
        tempState.encounter = getRandomItemOf(encounters);
        tempState.location = getRandomItemOf(locations);
        tempState.propertyOrEffect = getRandomItemOf(propertiesAndEffects);
        tempState.randomThing = getRandomItemOf(moreRandomThings);
        
        tempState.display = true;

        setState(tempState);
    };

    return (
        <section>
            <header>
                <h3>Random Encounter Generator</h3>
                <p>Select if this is in town or out of town.</p>
            </header>
            <form>
                <button onClick={generateEncounter(true)}>In Town</button>
                <button onClick={generateEncounter(false)}>Out of Town</button>
            </form>
            <div>
                <p>encounter:</p>
                {
                    state.display && 
                    <div>
                        <p>
                            {
                                `At a ${state.location.toLowerCase()} you encounter ${state.encounter.toLowerCase()}, which could be described as ${state.descriptor.toLowerCase()}.`
                            }
                        </p>
                        <p>
                            {
                                `Ether the location or the encounter has the property or effect of ${state.propertyOrEffect.toLowerCase()}. Nearby there is also a ${state.randomThing.toLowerCase()}`
                            }
                        </p>
                    </div>
                }
            </div>
        </section>
    );
};

export default RandEncounterGen;