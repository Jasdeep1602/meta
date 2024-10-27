import Image from 'next/image';
import React from 'react';

export default function DesignText() {
  const textOne = '/Group731.png';
  const textTwo = '/Group732.png';
  const textThree = '/is.png';
  const textFour = '/it.png';

  return (
    <div className='designtext'>
      <div className='designone'>
        <Image width={246} height={43} alt='image' src={textTwo} />
        <Image width={362} height={45} alt='image' src={textThree} />
      </div>
      <div className='designone'>
        <Image width={93} height={33} alt='image' src={textFour} />
        <Image width={221} height={32} alt='image' src={textOne} />
      </div>
    </div>
  );
}
