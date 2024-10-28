'use client';

import React from 'react';

import RightBox from '@/components/connectWallet/RightBox';
import LeftBox from '@/components/connectWallet/LeftBox';

export default function page() {
  return (
    <div className=' h-[80vh] flex justify-center gap-24 relative'>
      <RightBox />
      <div className=' flex gap-[104px] flex-col absolute right-[51.7%] bottom-[46.8%]'>
        <div className='  bg-white w-32 h-1' />
        <div className='  bg-white w-32 h-1' />
        <div className='  bg-white w-32 h-1' />
      </div>
      <LeftBox />
    </div>
  );
}
