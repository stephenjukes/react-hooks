import React from 'react'
import RefToSameObject from './RefToSameObject';
import RefWithDomElement from './RefWithDomElement';
import RefWithEffect from './RefWithEffect';

function Ref() {
    return (
        <>
            <RefWithEffect />
            <RefWithDomElement />
            <RefToSameObject />
        </>
    )
}

export default Ref;