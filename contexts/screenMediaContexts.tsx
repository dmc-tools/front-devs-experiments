"use client"
import React, { createContext, FC, PropsWithChildren, useEffect, useState } from 'react'

type ScreenMediaContextProps = PropsWithChildren & {
    clientWidth: number,
}

export const ScreenMediaContext = createContext<ScreenMediaContextProps>({ clientWidth: 0 });

export const ScreenMediaContextProvider: FC<PropsWithChildren> = ({ children }) => {

    // States
    const [clientWidth, setClientWidth] = useState(0);

    // useEffect having dependecy clientWidth
    useEffect(() => {
        window.addEventListener('resize', () => { setClientWidth(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)) })
        return () => { window.addEventListener('resize', () => { setClientWidth(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)) }) }
    }, [clientWidth])

    return (
        <ScreenMediaContext.Provider value={{ clientWidth }}>
            {children}
        </ScreenMediaContext.Provider>
    )
}