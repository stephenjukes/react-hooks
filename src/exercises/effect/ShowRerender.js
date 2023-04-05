import React, {useEffect}  from 'react';
import {reRender} from '../../Helpers';

function ShowRerender({selector, changeConditions}) {
    const now = Date.now();

    useEffect(
        () => reRender(`[data-selector='${now}']`), 
        changeConditions);

    return (
        <span className='label' data-selector={now}>
            Effect
        </span>
    )
}

export default ShowRerender;