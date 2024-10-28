'use client';

import React from 'react';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function page() {
  const infoIcon = '/i-circle.png';
  const upIcon = '/icon-1.png';
  const tvlIcon = '/icon-2.png';
  const hourIcon = '/icon-3.png';
  const settingIcon = '/setting.png';

  return (
    <div className=' h-[80vh] flex justify-center gap-24 relative'>
      <div className='boxone relative'>
        <div className=' flex gap-24 flex-col absolute right-5 bottom-24'>
          <div className=' rounded-full bg-white w-3 h-3' />
          <div className=' rounded-full bg-white w-3 h-3' />
          <div className=' rounded-full bg-white w-3 h-3' />
        </div>
        <div className='inner-boxone'>
          <div className='analyticsbox'>
            <div>Analytics</div>
            <div>
              <Image width={15} height={15} alt='ic' src={infoIcon} />
            </div>
          </div>
          <div className='databox'>No data available</div>
          <div className='flex gap-2'>
            <div className='cards'>
              <div>
                <Image width={32} height={32} alt='ion' src={upIcon} />
              </div>
              <div className='flex-col gap-1 text-[10px]'>
                <div>Current Price </div> <div className=' font-bold'>0</div>
              </div>
            </div>
            <div className='cards'>
              <div>
                <Image width={32} height={32} alt='ion' src={tvlIcon} />
              </div>
              <div className='flex-col gap-1 text-[10px]'>
                <div>TVL </div> <div className=' font-bold'>0</div>
              </div>
            </div>
            <div className='cards'>
              <div>
                <Image width={32} height={32} alt='ion' src={hourIcon} />
              </div>
              <div className='flex-col gap-1 text-[10px]'>
                <div>24HR Volume </div> <div className=' font-bold'>0</div>
              </div>
            </div>
          </div>
          <div className='trades'>Recent Trades</div>
          <div className='brownbox'>
            <div>Timestamp</div>
            <div>Token amount</div>
            <div>ms Token amount</div>
          </div>
          <div className='nodata'>No data available</div>
        </div>
      </div>
      <div className=' flex gap-[104px] flex-col absolute right-[51.7%] bottom-[46.8%]'>
        <div className='  bg-white w-32 h-1' />
        <div className='  bg-white w-32 h-1' />
        <div className='  bg-white w-32 h-1' />
      </div>
      <div className='boxtwo'>
        <div className='toggle'>
          {' '}
          <div className='depo'>Deposit</div> <div>Withdraw</div>
        </div>
        <div className='slip'>
          <div>
            <Image width={24} height={24} alt='icon' src={settingIcon} />
          </div>
          Slippage
        </div>
        <div className='flex-col w-[100vw] items-center justify-center'>
          {' '}
          <div className='boxdif' />
          <div className='boxdi' />
          <div className=' mt-5 flex items-center justify-center w-full '>
            <ConnectButton />
          </div>
        </div>
      </div>
    </div>
  );
}
