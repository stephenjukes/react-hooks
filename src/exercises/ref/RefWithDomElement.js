import React, {useRef} from 'react';
import Demo from './../../HelperComponents/Demo';

function RefWithDomElement() {
    const checkboxRef = useRef();

    function check() {
        checkboxRef.current.click();
    }

    const description = 
        `'useRef' can also be useful in creating references and manipulating DOM elements.
        In this case, a references to the checkbox has been stored, which is clicked when presing the Check button.`;

    const jsx = 
        <div>
            <input ref={checkboxRef} type='checkbox' />
            <button onClick={check}>Check</button>
        </div>
    
    return <Demo params={{
        id: 'ref-with-dom-element',
        heading: 'Capturing Dom Elements',
        description: description,
        jsx: jsx
    }} />
}

export default RefWithDomElement;