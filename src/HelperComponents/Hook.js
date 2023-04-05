import React from 'react';

export default function Hook({hook}) {
    return (
        <div id={hook.id} className='hook'>
            <h2 className='hook-heading'>
                {hook.heading}
            </h2>

            <a href="#app">
                to top
            </a>

            {hook.component}
        </div>
    )
}