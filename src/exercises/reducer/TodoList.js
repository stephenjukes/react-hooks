import React, {useReducer, useState} from 'react';
import Todo from './Todo';
import Demo from './../../HelperComponents/Demo';

export const ACTIONS = {
    ADD: 'add',
    CLEAR: 'clear',
    TOGGLE: 'toggle',
    DELETE: 'delete',
    DELETE_COMPLETED: 'delete-completed'
}

function reducer(items, action) {
    switch(action.type) {
        case ACTIONS.ADD: 
            return action.payload 
                ? [...items, newTodo(action.payload)] 
                : items;

        case ACTIONS.CLEAR:
            return [];

        case ACTIONS.TOGGLE:
            return items.map(item => item.id === action.payload.id 
                ? {...item, complete: !item.complete}
                : item)

        case ACTIONS.DELETE:
            return items.filter(item => item.id !== action.payload.id)

        case ACTIONS.DELETE_COMPLETED:
            return items.filter(item => !item.complete)
        
        default:
            return items;
    }
}

function newTodo(name) {
    return {id: Date.now(), name: name, complete: false};
}

export default function TodoList() {
    const [items, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState();

    function submit(e, type) {
        e.preventDefault();        
        dispatch({type: type, payload: name});
        setName('');
    }

    const jsx = 
        <div className='default-style'>
            <form className='row'>
                <input 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                />

                <button onClick={e => submit(e, ACTIONS.ADD)}>
                    Add
                </button>

                <button onClick={e => submit(e, ACTIONS.CLEAR)}>
                    Clear
                </button>

                <button onClick={e => submit(e, ACTIONS.DELETE_COMPLETED)}>
                    Remove Completed
                </button>
            </form>
            
            <ul className='todos'>
                {
                    items.map(todo => 
                        <Todo 
                            key={todo.id} 
                            todo={todo} 
                            dispatch={dispatch}
                        />
                    )
                }
            </ul>
        </div>

    return <Demo params={{
        id: 'todo-reducer',
        heading: 'More complex reducer (Todo list)',
        jsx: jsx,
        removeStyling: true
    }} />
}