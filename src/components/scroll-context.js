import React from 'react'

export const themes ={
    initial: {
        background: 'transparent',
        foreground: '#FFFFFF',
        accent: 'transparent'
    },
    scrolled: {
        background: '#FFFFFF',
        foreground: '#000000',
        accent: '#CCCCCC',
    },
    mobile: {
        background: '#FFFFFF',
        foreground: '#000000',
        accent: '#000000',
    },
}


export const ScrollContext = React.createContext({
    theme: themes.initial,
    toggleTheme: () => {}
})
