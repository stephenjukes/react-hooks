import {useState, useEffect}from 'react';

function getFromLocalStorage(key) {
    const localStorageObject = localStorage.getItem(key);
    const value = JSON.parse(localStorageObject.key);

    if (localStorageObject instanceof Function) {
        return value()
    }

    return value;
}

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => getFromLocalStorage(key) || {[key]: ''});

    useEffect(() => localStorage.setItem(key, {[key]: value}));

    return [value, setValue];
}