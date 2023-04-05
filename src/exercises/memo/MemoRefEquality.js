import React, {useState} from 'react';
import MemoControl from './MemoControl';
import Increment from './../state/Increment';
import Demo from './../../HelperComponents/Demo';

function MemoRefEquality() {
    const countState = useState(0);
    const [isDark, setTheme] = useState(false);

    function getThemeStyles() {
        return {
            backgroundColor: isDark ? 'black' : 'white',
            color: isDark ? 'white' : 'black'
        }
    }
    
    const description = `The 'Theme' settings are represented by an object which is assigned to a variable 
    and used as part of the style attribute.
    Since objects are reference types, every time the screen is rendered, the variable is assigned 
    a new reference, and the 'useEffect' hook is fired unncecessarily.
    By adding this object to the 'useMemo' hook, its reference can be cached until it needs to change, 
    meaning that the 'useEffect' hook only needs to fire when the theme values need to change for the theme change 
    and not when the incrementing state is changed.`

    const jsx =             
        <div className="row" style={getThemeStyles()}>
            <MemoControl 
                memoFunc={getThemeStyles}
                changeConditions={[isDark]}    
                forRerender={'#memo-ref-equality .effect'}
            />
            
            <Increment countState={countState} />

            <button onClick={() => setTheme(isDark => !isDark)}>
                Change Theme
            </button>
        </div>

    return < Demo params= {{
        id: 'memo-ref-equality',
        heading: 'Reference Types',
        description: description,
        jsx: jsx
    }} />
}

export default MemoRefEquality;