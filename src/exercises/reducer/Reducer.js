import React from 'react'
import SimpleReducer from './SimpleReducer';
import TodoList from './TodoList';

export default function Reducer() {
    return (
        <>
            <p>
               'useReducer' works very much like Redux, where events 'dispatch'actions to a reducer,
               and state is changed according the action type. One of the advantages of this hook is
               that all the logic controlling state changes can be contained within a single reducer 
               function. The following are both demostrations of the 'useReducer' hook, the first being 
               a very simple introduction, and the second showing slightly more complexity.
            </p>

            <SimpleReducer />
            <TodoList />
        </> 
    )
}