import  React, {useContext} from 'react';
import {CountContext} from './Context'

export default function ContextComponent({depth}) {
    const count = useContext(CountContext);

    return (
        <div className="theme-context">
            {count * depth}

            {
                depth > 1 && <ContextComponent depth={depth - 1} />
            }
        </div>
    )
} 