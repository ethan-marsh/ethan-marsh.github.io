import React from 'react'

export const initial = {
    windowWidth: window.innerWidth,
    isMobile: window.innerWidth <= 1024,
}

export const MobileContext = React.createContext({
    windowWidth: initial.windowWidth,
    isMobile: initial.isMobile,
    handleResize: () => {},
})