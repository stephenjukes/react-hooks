import React, {useState, useEffect} from 'react';
import {reRender} from '../../Helpers';
import Demo from './../../HelperComponents/Demo';

function Effect() {
    const [state, setState] = useState(0);

    useEffect(
        () => reRender('#effect .effect'), 
        [state]);

    function handleState(newState) {
        setState(newState);

        const state = document.querySelector('.state');
        reRender(state);
    }

    const description = 
        `'useEffect' fires whenever a component is re-rendered, which occurs during Mounting, or when state is changed. 
        Notice that the useEffect function is triggered on refresh, while the setState (from useState) is not.
        Clicking either of the two buttons will trigger the setState function, but will only trigger the useEffect 
        function if the state changes and the page is rerendered.`;

    const jsx = 
        <div>
            <button onClick={() => handleState(1)}>1</button>
            <button onClick={() => handleState(2)}>2</button>

            <span className="label state">
                State: {state}
            </span>
            
            <span className="label effect">
                Effect
            </span>
        </div>


    return <Demo params = {{
        id:"effect", 
        description: 
        description, jsx: jsx
    }} />
}

export default Effect;