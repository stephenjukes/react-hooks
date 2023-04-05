import React from 'react';
import {ACTIONS} from './TodoList';

export default function Todo({todo, dispatch}) {
    return (
        <li className='todo'>
            <button onClick={() => dispatch({type: ACTIONS.TOGGLE, payload: todo})}>
                Complete
            </button>

            <button onClick={() => dispatch({type: ACTIONS.DELETE, payload: todo })}>
                Delete
            </button>

            <div className={todo.complete ? 'complete' : ''}>
                {todo.name}
            </div>
        </li>
    )
}