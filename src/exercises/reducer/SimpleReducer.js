import React, {useReducer} from 'react'
import Demo from './../../HelperComponents/Demo';

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

function reducer(state, action) {
    switch(action.type) {
        case ACTIONS.INCREMENT: 
            return { count: state.count + 1 };
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }
}

export default function Reducer() {
    const [state, dispatch] = useReducer(reducer, {count: 0})

    const jsx = 
        <div>
            <button onClick={() => dispatch({type: ACTIONS.DECREMENT})}>
                -
            </button>

            <span>{state.count}</span>

            <button onClick={() => dispatch({type: ACTIONS.INCREMENT})}>
                +
            </button>
        </div>

    return <Demo params={{
        id: 'simple-reducer',
        heading: 'Simple reducer',
        jsx: jsx
    }} />
}