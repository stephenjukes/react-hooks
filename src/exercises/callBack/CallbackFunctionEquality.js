import React, {useState, useMemo, useCallback} from 'react';
import Increment from '../state/Increment';
import Demo from '../../HelperComponents/Demo';
import {sleep} from '../../Helpers'
import CallbackChild from './CallbackChild';
import CheckboxControl from '../../HelperComponents/CheckboxControl';

export default function CallbackFunctionEquality() {
    const countState = useState(0);
    
    const [withCallback, setCallback] = useState();

    const slowFuncCallback = useCallback(
        () => sleep(500),
        withCallback ? [] : null
    )

    const description = 
        `The parent component in this demonstration passes a slow func down to its child, which rerenders
        everytime the function changes. As first-class objects, the function is recreated on every render,
        and slow function impacts the parent's update. By wrapping the slow function in a useCallback hook,
        the parent can ensure that the same function reference is passed down to its child, so that the child
        is not rerendered and the the slow function has now impact on the parent's render.
        `;

    const jsx = 
        <>
            <CheckboxControl isChecked={withCallback} toggleChecked={setCallback}/>
            <Increment countState={countState} /> 
            <CallbackChild func={slowFuncCallback} />
        </>    

    return <Demo params={{
        id: 'callback-function-equality',
        heading: 'Callback function equality',
        description: description,
        jsx: jsx
    }} />
}