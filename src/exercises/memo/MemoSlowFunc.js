import React, {useState} from 'react';
import {sleep} from '../../Helpers';
import Increment from '../state/Increment';
import MemoControl from './MemoControl';
import Demo from './../../HelperComponents/Demo';

function MemoSlowFunc() {
    const countState = useState(0);
    const count = countState[0];

    const [isDark, setTheme] = useState(false);
    
    const themeStyles = {
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black'
    }

    function slowFunc() {
        sleep(300);
    }

    const description = 
        `The 'increment' button represent an expensive way (almost half a second) to retrieve new state. 
        If this wasn't bad enough, the 'Change Theme' function is also affected, since changing the 
        theme will rerender the page, which in turn needs to wait for the expensive state retrieval.
        By adding the state retrieval to the 'useMemo' hook, the 'cached' value can be used when there 
        is no change to state, and the theme is free to change without being encumbered.
        However, the expensive call still needs to be made when a new state is required.`;

    const jsx = 
        <div className='row' style={themeStyles}>
            <MemoControl 
                memoFunc={slowFunc}
                changeConditions={[count]}    
            />

            <Increment countState={countState} />

            <button onClick={() => setTheme(isDark => !isDark)}>
                Change Theme
            </button>
        </div>

    return  <Demo params= {{
        id: 'memo-slow-func',
        heading: 'Slow functions',
        description: description,
        jsx: jsx
    }} />
}

export default MemoSlowFunc;