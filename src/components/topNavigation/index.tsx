'use client';

import Image from 'next/image';
import React from 'react';
import LogoTextButton from '../button';
import WalletAdd from '../walletAdd';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setIsConnectWallet } from '@/redux/slices/auth';

export default function TopNavigation() {
  const dispatch = useAppDispatch();
  const { isConnectWallet } = useAppSelector((state) => state.auth);

  const router = useRouter();
  const vaultImage = '/nav-valut.png';
  const homeImage = '/home-2.png';
  const infoImage = '/i-circle.png';
  const dashImage = '/dash-circle.png';
  const bookImage = '/book-04.png';
  const analysisImage = '/analytics-01.png';
  const discordImage = '/discord.png';

  const handleHome = () => {
    router.push('/');
  };

  const handleDataState = () => {
    dispatch(setIsConnectWallet(!isConnectWallet));
  };

  return (
    <div className='navcontainer'>
      <div className='leftnav'>
        <Image width={73} height={24} alt='vault' src={vaultImage} />
        <div className='side-buttons'>
          <LogoTextButton icon={homeImage} text='Home' onClick={handleHome} />
          <LogoTextButton icon={dashImage} text='Admin' />
          <LogoTextButton icon={analysisImage} text='Analytics' />
          <LogoTextButton icon={bookImage} text='Guide' />
          <LogoTextButton icon={infoImage} text='About' />
        </div>
      </div>
      <div className='discord'>
        <Image width={32} height={32} alt='discord' src={discordImage} />
      </div>
      <div onClick={handleDataState}>
        <WalletAdd />
      </div>
    </div>
  );
}
