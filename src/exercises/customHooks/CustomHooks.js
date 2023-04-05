// import {useState, useRef} from 'react';
// import CheckboxControl from '../../HelperComponents/CheckboxControl';
// import useLocalStorage from './LocalStorage';

// export default function CustomHooks() {
//     const localStorageInputRef = useRef()
    
//     const [usingLocalStorage, toggleUsingLocalStorage] = useLocalStorage("usingLocalStorage", false)

//     console.log(typeof usingLocalStorage);
    
    
//     const [name, setName] = useLocalStorage("name")

//     return (
//         <>
//             <CheckboxControl 
//                 isChecked={usingLocalStorage} 
//                 toggleChecked={toggleUsingLocalStorage} 
//             />

//             <input 
//                 ref={localStorageInputRef}
//                 value={usingLocalStorage ? name : localStorageInputRef.value}
//                 onChange={e => setName(e.target.value)} 
//             />
//         </>
        
//     )
// }