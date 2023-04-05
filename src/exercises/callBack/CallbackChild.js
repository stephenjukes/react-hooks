import React, {useEffect} from 'react';

export default function CallbackChild({func}) {
    useEffect(func, [func])

    return null;
}