'use client';

import React from 'react';
import Image from 'next/image';
import { useAppSelector } from '@/hooks/redux';

export default function RightBox() {
  const { isConnectWallet } = useAppSelector((state) => state.auth);

  const infoIcon = '/i-circle.png';
  const upIcon = '/icon-1.png';
  const tvlIcon = '/icon-2.png';
  const hourIcon = '/icon-3.png';
  const depoCard = '/Depocard.png';
  return (
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
        <div className='databox'>
          {isConnectWallet ? (
            <Image width={500} height={500} alt='graph' src={depoCard} />
          ) : (
            'No data available'
          )}
        </div>

        <div className='flex gap-2'>
          <div className='cards'>
            <div>
              <Image width={32} height={32} alt='ion' src={upIcon} />
            </div>
            <div className='flex-col gap-1 text-[10px]'>
              <div>Current Price </div>{' '}
              <div className=' font-bold'>
                {isConnectWallet ? '1.1 DOGE' : '0'}
              </div>
            </div>
          </div>
          <div className='cards'>
            <div>
              <Image width={32} height={32} alt='ion' src={tvlIcon} />
            </div>
            <div className='flex-col gap-1 text-[10px]'>
              <div>TVL </div>{' '}
              <div className=' font-bold'>{isConnectWallet ? '134M' : '0'}</div>
            </div>
          </div>
          <div className='cards'>
            <div>
              <Image width={32} height={32} alt='ion' src={hourIcon} />
            </div>
            <div className='flex-col gap-1 text-[10px]'>
              <div>24HR Volume </div>{' '}
              <div className=' font-bold'>{isConnectWallet ? '13M' : '0'}</div>
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
  );
}
