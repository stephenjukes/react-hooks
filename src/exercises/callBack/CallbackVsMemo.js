import React, {useState, useMemo, useCallback} from 'react';
import Demo from '../../HelperComponents/Demo';

export default function CallbackVsMemo()  {
    const initialColor = '#ffffff';
    const [updateBool, update] = useState(false);
    const [color, setColor] = useState(initialColor);

    const memo = useMemo(
        () => ({ background: color }),
        [updateBool]
    )

    const callback = useCallback(
        color => ({background: color}),
        [updateBool]
    )

    const description =
        `'useCallback' is very similar to 'useMemo', except it is the function that is cached
        as opposed to the function's return value. This is demonstrated by the fact that while both
        'useMemo' and 'useCallback' functions are updated by the Update button, only the callback
        function (which accepts a color and applies it to the background) can change colors without the
        'updating'. The memo on the other hand cannot apply a color change until it has been allowed to update.
        This is not so much as use case, a way of demonstrating the difference between useMemo and useCallback.
        `;

    const  jsx =
        <>
            <div>
                <input 
                    type='color' 
                    value={initialColor}
                    onChange={e => setColor(e.target.value)}    
                />

                <button onClick={() => update(updateBool => !updateBool)}>
                    Update
                </button>
            </div>

            <div id='callback-panels'>
                <div style={memo}>
                    Memo
                </div>

                <div style={callback(color)}>
                    Callback
                </div>
            </div>
        </>

    return  <Demo params= {{
        id:  'callback-vs-memo',
        heading: 'Callback vs Memo',
        description: description,
        jsx: jsx,
        // removeStyling: true
    }} />
}