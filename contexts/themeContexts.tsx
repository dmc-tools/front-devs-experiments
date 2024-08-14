"use client"
import React, { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useState } from 'react'
import { Open_Sans, Montserrat } from 'next/font/google'
const openSans = Open_Sans(
    {
        weight: ["300", "400", "500", "600", "700", "800"],
        display: 'swap',
        style: ['normal', 'italic'],
        subsets: ['latin']
    }
)
const montserrat = Montserrat(
    {
        weight: ["300", "400", "500", "600", "700", "800"],
        display: 'swap',
        style: ['normal', 'italic'],
        subsets: ['latin']
    }
)

type ThemeContextProps = PropsWithChildren & {
    theme: boolean,
    setTheme: Dispatch<SetStateAction<boolean>>
}

export const ThemeContext = createContext<ThemeContextProps>({ theme: false, setTheme: () => { } });

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState(false) // false is dark , true is light
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <html lang="en" className={`${theme ? `` : `dark`} ` + montserrat.className}>
                <body>
                    {children}
                </body>
            </html>
        </ThemeContext.Provider>
    )
}