import React, {useState, useRef} from 'react';
import ShowRerender from '../effect/ShowRerender';
import Increment from './../state/Increment';
import Demo from './../../HelperComponents/Demo';

function RefToSameObject() {
    const countState = useState(0);
    const [withRef, setRef] = useState(false);

    const myObject = {}
    const varObject = myObject;
    const refObject = useRef(myObject);

    const jsx = 
        <div>
            <label>
                <input 
                    type="checkbox"
                    onChange={() => setRef(withRef => !withRef)}
                />
                With useRef
            </label>

            <Increment countState={countState} />

            <ShowRerender changeConditions={[withRef ? refObject : varObject]}
            />
        </div>

    return <Demo params= {{
        id: 'ref-to-same-object',
        heading: 'Storing the Same Reference',
        jsx: jsx
    }} />
}

export default RefToSameObject;