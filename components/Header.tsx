"use client"
import React, { useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../contexts/themeContexts'
import { motion } from 'framer-motion'

const Header = () => {
    const { setTheme } = useContext(ThemeContext)
    return (
        <header id={"header"} className='flex flex-col md:flex-row items-center justify-between sticky top-0 uni-padding-x py-2 md:py-4 lg:py-6 shadow dark:shadow-sm dark:shadow-zinc-800 z-50 bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white'>
            <h4 className='text-xl'> <code>&lt;/&gt;</code> <strong>Front devs</strong></h4>
            <nav className='flex flex-col md:flex-row gap-2 md:gap-4 text-sm'>
                <Link href="/" className='font-semibold hover:rotate-6 will-change-transform duration-300'>Home</Link>
                <Link href="/" className='font-semibold hover:opacity-50 duration-300'>Tools</Link>
                <Link href="/" className='font-semibold hover:-translate-y-0.5 will-change-transform duration-300'>About us</Link>
                <motion.button onClick={() => { setTheme(prev => !prev) }} className='rounded-full bg-white border text-zinc-950'><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-1.5v-17a8.5 8.5 0 0 1 0 17"></path></svg></motion.button>
            </nav>
        </header>
    )
}

export default Header