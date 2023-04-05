import React, { useState } from 'react';

function Theme(props) {
    const children = props.children;
    const [isDark, setTheme] = useState(false);

    const themeStyles = {
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black'
    }

    const controlStyles = {
        padding: '2rem',
        border: '1px solid gray',
    }

    return (
        <div style={children ? controlStyles : {...controlStyles, ...themeStyles}}>
            <button onClick={() => setTheme(isDark => !isDark)}>
                Change Theme
            </button>

            {
                children &&
                    <div style={themeStyles}>
                        {children}
                    </div>
            }
        </div>
    )
}

export default Theme;