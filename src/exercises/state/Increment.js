import React from 'react';

function Increment({countState}) {
    const [count, setCount] = countState;

    function incrementCount() {
        setCount(count => (count + 1) % 10)
    }

    return (
        <>
            <button onClick={incrementCount}>+</button>
            <span className="label">{count}</span>
        </>
    )
}

export default Increment;