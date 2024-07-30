"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CardProps } from '../lib/cardInterface';

const Card: React.FC<CardProps> = ({ emoji }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleFlip = () => {
        if(!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }

    // const animals: { [key: string]: string } = {
    //     'tiger': '🐅',
    //     'camel': '🐫',
    //     'elephant': '🐘',
    //     'rhino': '🦏',
    //     'fish': '🐟',
    //     'duck': '🦆',
    //     'turtle': '🐢'
    // }

    // type IntTuple = [number, number];

    // type EmojiLocationObj = { [key: string]: IntTuple };

    // const emojiLocation: EmojiLocationObj = {}

  return (
    <div className='flip-card rounded-md flex items-center justify-center bg-#121212 size-16 cursor-pointer' onClick={handleFlip}>
        <motion.div
            className='flip-card-inner w-full h-full'
            initial={false}
            animate={{rotateY: isFlipped ? 180 : 360}}
            transition={{ duration: 0.6, animationDirection: 'normal' }}
            onAnimationComplete={() => setIsAnimating(false)}
        >
            <div className='flip-card-front flex items-center justify-center h-full w-full bg-slate-600 shadow-md border-slate-500 border-[4px] rounded-md'></div>

            <div className='flip-card-back flex items-center justify-center h-full w-full bg-slate-700 shadow-md text-white rounded-md text-5xl'>
                {emoji}
            </div>
        </motion.div>
    </div>
  )
}

export default Card
