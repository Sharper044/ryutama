import React, { useState } from 'react';
import { randomEvents } from '../data/miscData';
import { getRandomItemOf } from '../utils/randomizer';

const nothingHappened = { 
    label: 'Nothing happen',
    statusEffect: '', 
    strength: 0
}

const RandEventGen = () => {
    const [numOfPlayers, setNumOfPlayers] = useState(1);
    const [randEvent, setRandEvent] = useState(nothingHappened);

    const genRandomEvent = num => event => {
        event.preventDefault();
        let events = [getRandomItemOf(randomEvents)];
        while (events.length <= num) {
            events.push(nothingHappened);
        }

        setRandEvent(getRandomItemOf(events));
    };

    return (
        <section>
            <header>
                <h3>Random Negative Event Generator</h3>
                <p>Set the number of players and click once for each travel check.</p>
            </header>
            <form>
                <label>
                    Number of Players:
                    <input 
                        type="number" 
                        min={1} 
                        max={15} 
                        value={numOfPlayers} 
                        onChange={e => setNumOfPlayers(e.target.value)}
                    />
                </label>
                <button onClick={genRandomEvent(3)}>Easy</button>
                <button onClick={genRandomEvent(2)}>Medium</button>
                <button onClick={genRandomEvent(1)}>Hard</button>
                <button onClick={genRandomEvent(0)}>Impossible</button>
            </form>
            <p>
                {
                    `Player ${Math.ceil(Math.random() * numOfPlayers)} has ${randEvent.label.toLowerCase()}. ${randEvent.statusEffect}${randEvent.strength ? `[${randEvent.strength}]` : ''}`
                }
            </p>
        </section>
    );

};

export default RandEventGen;