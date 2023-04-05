import  React from 'react';
import MemoSlowFunc from './MemoSlowFunc';
import MemoRefEquality from './MemoRefEquality';

function Memo(){
    return (
        <>
            <p>
                'useMemo' provides a way of storing a value, similar to cache. 
                There are two ways in which this becomes useful.
            </p>

            <MemoSlowFunc />
            <MemoRefEquality />
        </>
    )
}

export default Memo;