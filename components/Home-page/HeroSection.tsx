"use client"
import { AnimatePresence, motion } from 'framer-motion'
import React, { useContext, useState } from 'react'
import { tilesContainerVariants, tilesVariants } from '../../lib/framer-motion'
import { ThemeContext } from '../../contexts/themeContexts'
import HHAS from '../Sections'
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.min.css';

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const highlightedCode = hljs.highlight(`export default function RootLayout() {
    return (
      <html lang='en'>
        <head> ... </head>
        <body>
          <h1> Welcome to Front-devs </h1>
        </body>
      </html>
    );
  }`, { language: 'javascript' }).value
  return (
    <>
      <HHAS className='relative overflow-hidden w-full grid grid-cols-2 h-full place-items-center uni-padding-x'>
        <AnimatePresence >
          {
            !theme &&
            <motion.div className="grid grid-cols-9 py-px gap-px bg-inherit absolute top-0 left-0 -z-10 w-full h-full revert-uni-padding-x" variants={tilesContainerVariants} initial={"hidden"} animate={"visible"} exit={"go"}>
              {
                [...Array(36)].map((elem, i) => {
                  return (
                    <motion.div custom={i} className={`bg-zinc-950 [filter:drop-shadow(0_0_8px_rgb(0_0_0))] origin-bottom`} key={"tile-" + i} variants={tilesVariants} />
                  )
                })
              }
            </motion.div>
          }
        </AnimatePresence >
        <div className='text-zinc-950 dark:text-white space-y-8'>
          <h1 className='text-5xl tracking-tight font-thin'> We are <strong className='text-zinc-950 dark:bg-white rounded tracking-widest font-bold'> Front-devs </strong></h1>
          <p className='leading-8 tracking-wide text-balance text-sm'>We don't just <code>&lt;code/&gt;</code>, we <strong>create</strong> <svg className='inline -translate-y-0.5' xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m21.72 11.01l-4.01-7A1.968 1.968 0 0 0 15.98 3H8a1.968 1.968 0 0 0-1.73 1.01L4.74 6.68l-.8 1.39l-1.68 2.94A2.033 2.033 0 0 0 2 12a2.004 2.004 0 0 0 .26.99l1.68 2.94l.8 1.39l1.53 2.67A1.968 1.968 0 0 0 8 21h7.98a1.968 1.968 0 0 0 1.73-1.01l4.01-7a2.004 2.004 0 0 0 .26-.99a1.956 1.956 0 0 0-.26-.99m-4.384 5.974l.006-.004l-.004.007ZM20.28 12l-2.935 4.974c-.118.01-.234.026-.355.026A4.994 4.994 0 0 1 12 12.098v-.118A5.004 5.004 0 0 0 7 7a2.96 2.96 0 0 0-.31.03L7.89 5h8.26l4.14 7Z"></path></svg>. We bring your ideas to life with a friendly approach and exceptional front-end development skills.</p>
        </div>
        <div className='[perspective:700px] h-full w-full grid place-items-center'>
          <motion.div className='rounded-xl dark:bg-zinc-900 bg-zinc-100 min-h-[75%] min-w-[75%] border-2 dark:border-zinc-800 border-zinc-200 overflow-hidden drop-shadow-lg' initial={{y:5, rotateY: "-10deg",}} animate={{ rotateY: "-10deg", y:-5 }} transition={{duration: 1, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror'}}>
            <ul className='rounded-t-xl p-2 flex gap-1 dark:bg-zinc-800 bg-zinc-200'>
              <li className='size-2 rounded-full bg-yellow-600'></li>
              <li className='size-2 rounded-full bg-red-600'></li>
              <li className='size-2 rounded-full bg-green-600'></li>
            </ul>
            <div className='h-auto p-2'>
              <pre className='dark:text-white text-zinc-800'>
                <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
              </pre>
            </div>
          </motion.div>
        </div>
      </HHAS>
    </>
  )
}

export default Hero