"use client"
import React, { FC, PropsWithChildren } from 'react'
import useHeightWidth from '../hooks/useHeightWidth'
import { motion } from 'framer-motion';

type HHASProps = PropsWithChildren & { className? : string}

const HHAS: FC<HHASProps> = ({ className, children }) => {
    const { elementHeight: headerHeight } = useHeightWidth("header");
    
    return (
        <motion.section animate={{ minHeight: `calc(100vh - ${headerHeight}px)` }} className={className}>
            {children}
        </motion.section>
    )
}

export default HHAS