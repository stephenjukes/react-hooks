import React, {useState, useEffect, useRef} from  'react';
import Increment from '../state/Increment';
import Demo from './../../HelperComponents/Demo';

function RefWithEffect() {
    const countState = useState(0);
    const renderCount = useRef(0)

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })

    const description = 
        `'useRef' works very much like state, except that it does not trigger a render when it changes. 
        When tracking the number of renders, setting state inside a 'useEffect' hook, would create an infinite loop:`

    const jsx =
        <div>
            <div className='row'>
                <Increment countState={countState} />
                <span className='render-count-display label'>
                    Rendered {renderCount.current} times
                </span>
            
                {/* <small>(The double render at the beginning is caused by React.StrictMode)</small> */}
            </div>
        </div>
    
    return <Demo params={{
        id: 'ref',
        heading: 'Tracking State Without ReRender',
        description: description,
        jsx: jsx
    }} />
}

export default RefWithEffect;