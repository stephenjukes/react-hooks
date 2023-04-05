import React, {useState} from 'react';
import Demo from './../../HelperComponents/Demo';

function State() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(previousCount => previousCount + 1)
  }

  const description = 
    `'useState' provides a variable to represent the state and a function to change it. 
    The function is triggered by an event and the change in state will be rerendered on the page.`;

  const jsx = 
    <div>
      <button onClick={incrementCount}>+</button>
      <span className="label">{count}</span>
    </div>

  return <Demo params = {{ 
      id: "state", 
      description: description, 
      jsx: jsx
    }} />
}

export default State;