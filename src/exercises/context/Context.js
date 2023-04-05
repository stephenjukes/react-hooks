import React, {useState, createContext}from 'react';
import ContextComponent from './ContextComponent';
import Demo from './../../HelperComponents/Demo'

export const CountContext = createContext();

export default function Context() {
    const [count, setCount] = useState(0);
    
    function increment() {
        setCount(count => count + 1);
    }

    const description = 
        `'useContext' provides a context that can be used by all components that descend 
        from the component in which the context is created. In this example a count state is 
        incremented and used as the context provider's 'value' parameter. Descendents access 
        this value using the 'useContext' hook and multiply the incremented state by its position 
        in the nested hierarchy.`
    
    const jsx = 
        <CountContext.Provider value={count}>
            <button onClick={increment}>Increment</button>

            <ContextComponent depth={3}/>
        </CountContext.Provider>

    return <Demo params={{
        id: "context",
        description: description,
        jsx: jsx
    }} />
}