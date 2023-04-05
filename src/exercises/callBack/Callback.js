import React from 'react';
import CallbackFunctionEquality from './CallbackFunctionEquality';
import CallbackVsMemo from './CallbackVsMemo'

export default function Callback() {
    return (
        <>
            <CallbackVsMemo />
            <CallbackFunctionEquality />
        </>
    )
}