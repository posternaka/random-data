import { useState } from 'react';
import { randomInteger } from './helpers/random';
import { LOCALE } from './utils/localizeUtil';
import Users from './components/Users';

const App = () => {
    const [randomNumber, setRandomNumber] = useState(1);
    const [rangeNumber, setRangeNumber] = useState(0);
    const [language, setLanguage] = useState(LOCALE.RU);
    const [page, setPage] = useState(1);
    
    const array = Array.from(Array(page + 1).keys()).slice(1);

    const checkRange = (e) => {
        if (e >= 1000) {
            return setRangeNumber(1000)
        } else if (e <= 0) {
            return setRangeNumber(0);
        }

        return setRangeNumber(e);
    }

    const checkRandom = (e) => {
        if (e >= 10_000_000) {
            return setRandomNumber(10_000_000)
        }

        return setRandomNumber(e);
    }

    return (
        <div>
            <div className='is-flex is-justify-content-space-around'>
                <div className="select  mr-6">
                    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                        {
                            Object.values(LOCALE).map((it, i) => (
                                <option key={i} value={it}>{it.toUpperCase()}</option>
                            ))
                        }
                    </select>
                </div>

                <label className=' mr-6'>
                    <input className="input" type="number" placeholder="53" value={rangeNumber} onChange={(e) => checkRange(e.target.value)} /> 
                    <input type="range" value={rangeNumber} min="0" max="10"  step="0.25" onChange={(e) => setRangeNumber(e.target.value)} />
                </label>
                
                <label>
                    <input className="input" type="number" min="1" placeholder="174" value={randomNumber} onChange={(e) => checkRandom(e.target.value)} />
                    <button className="button mr-5" onClick={() => setRandomNumber(randomInteger())}>Random</button>
                    <button className="button" onClick={() => setRandomNumber(1)}>Reset</button>
                </label>
            </div>
        
            <table className='table is-striped is-fullwidth' >
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                {
                    array.map(it => (
                        <Users
                            key={it}
                            language={language}
                            rangeNumber={rangeNumber}
                            randomNumber={randomNumber}
                            page={it}
                            allPage={page}
                            setPage={setPage}
                        />
                    ))
                }
                </tbody>
                
            </table>
        </div>
    )
}

export default App