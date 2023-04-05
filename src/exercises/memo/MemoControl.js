import React, {useState, useMemo} from 'react';
import ShowRerender from '../effect/ShowRerender';

function MemoControl({memoFunc, changeConditions, forRerender}) {
    const [withMemo, setMemo] = useState(false);

    const memo = useMemo(
        memoFunc, 
        withMemo ? changeConditions : null);

    return (
        <section className='row'>
            <label>
                <input 
                    type='checkbox'
                    value={withMemo}
                    onChange={() => setMemo(withMemo => !withMemo)}
                />
                With Memo
            </label>

            {
                forRerender &&
                    <ShowRerender changeConditions={[memo]} />
            }
        </section>
    )
}

export default MemoControl;