import React from 'react';

export default function CheckboxControl({isChecked, toggleChecked}) {
    return (
        <label>
            <input 
                type='checkbox'
                value={isChecked}
                onClick={() => toggleChecked(isChecked => !isChecked)}
            />
            With Callback
        </label>
    )
}