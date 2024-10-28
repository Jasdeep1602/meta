'use client';

import React from 'react';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setIsConnectWallet } from '@/redux/slices/auth';

export default function LeftBox() {
  const dispatch = useAppDispatch();
  const { isConnectWallet } = useAppSelector((state) => state.auth);

  const infoIcon = '/i-circle.png';

  const settingIcon = '/setting.png';
  const dogeIcon = '/doge.png';
  const arrowIcon = '/arrow-down.png';
  const yellow = '/yellow.png';
  const logo = '/logo-big.png';

  const handleDataState = () => {
    dispatch(setIsConnectWallet(!isConnectWallet));
  };
  return (
    <div className='boxtwo'>
      <div className='toggle'>
        {' '}
        <div className='depo'>Deposit</div> <div>Withdraw</div>
      </div>
      <div className='slip'>
        <div>
          <Image width={24} height={24} alt='icon' src={settingIcon} />
        </div>
        Slippage: 0.05%
      </div>
      <div className='flex-col w-[100vw] items-center justify-center'>
        {' '}
        <div className='boxdif'>
          <div className='flex justify-between mb-2'>
            <div className=' text-[12px]'>Deposit</div>{' '}
            <div className=' text-[12px]'>Asset Balance: 0.000 DOGE</div>
          </div>
          <div className='flex justify-between mb-6'>
            <div className='text-[20px] text-slate-400 '>0.00</div>
            <div className='text-[12px] flex gap-4 items-center justify-center bg-[#204af8e5]  p-1 rounded-md border-white border-2  '>
              <Image
                className='mb-1'
                width={15}
                height={15}
                alt='doge'
                src={dogeIcon}
              />
              DOGE <Image width={10} height={10} alt='arrow' src={arrowIcon} />
            </div>
          </div>
          <div className='flex justify-between'>
            <div className=' text-[12px]'>$0</div>
            <div className='bar'>
              <div className='absolute left-0 bottom-[-8px]'>
                <Image
                  className='mb-1'
                  width={14}
                  height={14}
                  alt='doge'
                  src={dogeIcon}
                />
              </div>
              <div className=' flex gap-11  absolute right-0 bottom-0'>
                <div className=' rounded-full bg-white w-1.5 h-1.5' />
                <div className=' rounded-full bg-white w-1.5 h-1.5' />
                <div className=' rounded-full bg-white w-1.5 h-1.5' />
              </div>
              <div className=' flex gap-7 absolute right-0 bottom-[-18px] text-[8px]'>
                <div>min</div>
                <div>25%</div>
                <div>75%</div>
                <div>max</div>
              </div>
            </div>
          </div>
        </div>
        <div className='boxdi'>
          <div className='flex justify-between mb-2'>
            <div className=' text-[12px]'>Withdraw</div>{' '}
            <div className=' text-[12px]'>ms Doge Balance: 0.000 DOGE</div>
          </div>
          <div className='flex justify-between mb-6'>
            <div className='text-[20px] text-slate-400'>0.00</div>
            <div className='text-[12px] flex gap-4 items-center justify-center bg-[#204af8e5]  p-1 rounded-md border-white border-2  '>
              <Image
                className='mb-1'
                width={15}
                height={15}
                alt='doge'
                src={dogeIcon}
              />
              ms DOGE{' '}
            </div>
          </div>
          <div>
            <Image src={yellow} width={150} height={50} alt='yellow' />
          </div>
        </div>
        <div className='flex justify-between fontchange text-[12px] mx-6'>
          <div className='flex justify-center items-center '>
            <div>
              <Image width={15} height={15} alt='ic' src={infoIcon} />
            </div>{' '}
            Vault entry fees
          </div>
          <div>0.80%</div>
        </div>
        <div
          className=' mt-5 flex items-center justify-center w-full '
          onClick={handleDataState}>
          <ConnectButton />
        </div>
      </div>
      <div className=' absolute bottom-[-60px] right-16 rotate-45'>
        {' '}
        <Image src={logo} width={85} height={85} alt='logo' />
      </div>
    </div>
  );
}
