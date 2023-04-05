import React from 'react';

export default function Demo({params}) {
    return(
        <div id={params.id} className='demo-container'>

            {
                params.heading &&
                    <h3>
                        {params.heading}
                    </h3>
            }

            {
                params.description &&
                    <p>{params.description}</p>
            }
            
            {
                params.jsx &&
                    <div className={params.removeStyling || 'demo row'} >
                        {params.jsx} 
                    </div>
            }

        </div>
    )
}