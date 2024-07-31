import React from 'react';
import Card from './Card';

const EasyGrid: React.FC = () => {

  const cards = Array.from({ length: 16 }, (_, index) => <Card key={index} emoji='test' />);

  const animals: { [key: string]: string } = {
    'tiger': '🐅',
    'camel': '🐫',
    'elephant': '🐘',
    'rhino': '🦏',
    'fish': '🐟',
    'duck': '🦆',
    'turtle': '🐢'
  }

  let animalUsage: { [key: string]: number } = {
    'tiger': 0,
    'camel': 0,
    'elephant': 0,
    'rhino': 0,
    'fish': 0,
    'duck': 0,
    'turlte': 0
  }

  type IntTuple = [number, number];

  type EmojiLocationObj = { [key: string]: IntTuple };

  let locationArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const emojiLocation: EmojiLocationObj = {}



  return (
    <div className='grid grid-cols-4 gap-4 h-full'>
      {cards}
    </div>
  )
}

export default EasyGrid
