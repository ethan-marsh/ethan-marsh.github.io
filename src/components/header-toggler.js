import React from 'react';
import { ScrollContext } from './scroll-context';

function HeaderToggler() {
    return (
        <ScrollContext.Consumer>
            {({theme, toggleTheme}) => (
                <button
                    onClick={ toggleTheme }
                    style={{ backgroundColor: theme.background, color: theme.foreground, border: `1px solid ${theme.accent}`, padding: '1rem', zIndex: '1000', position: 'fixed',left: '50%' }}
                >
                    Toggle Header
                </button>
            )}
        </ScrollContext.Consumer>
    )
}

export default HeaderToggler;