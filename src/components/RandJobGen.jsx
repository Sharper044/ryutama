import React, { useState } from 'react';
import { expandedJobPostings } from '../data/serendipity';
import { getRandomItemOf } from '../utils/randomizer';

const RandJobGen = () => {
    const initialJobState = {
        wanted: '',
        task: '',
        location: '',
        danger: '',
        display: false
    }
    const [state, setState] = useState(initialJobState);
    const [displayInfo, setDisplayInfo] = useState(initialJobState);

    const generateJob = event => {
        event.preventDefault();

        let tempState = {...state};

        Object.entries(expandedJobPostings).forEach(([key, value]) => {
            if (!tempState[key]) {
                tempState[key] = getRandomItemOf(value);
            }
        });

        tempState.display = true;

        setDisplayInfo(tempState);
    };

    return (
        <section>
            <header>
                <h3>Random Job Generator</h3>
                <p>Set any presets you want and then press the go button.</p>
            </header>
            <form>
                {
                    Object.entries(expandedJobPostings).map(([key, value]) => (
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
                <button onClick={generateJob}>Generate Job</button>
            </form>
            <div>
                <p>Job Posting:</p>
                {
                    displayInfo.display && 
                    <div>
                        <p>
                            {
                                `${displayInfo.wanted} ${displayInfo.task.toLowerCase()} at ${displayInfo.location.toLowerCase()} ${displayInfo.danger}`
                            }
                        </p>
                    </div>
                }
            </div>
        </section>
    );
};

export default RandJobGen;