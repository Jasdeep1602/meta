import Image from 'next/image';
import React from 'react';
import LogoTextButton from '../button';

export default function TopNavigation() {
  const vaultImage = '/nav-valut.png';
  const homeImage = '/home-2.png';
  const infoImage = '/i-circle.png';
  const dashImage = '/dash-circle.png';
  const bookImage = '/book-04.png';
  const analysisImage = '/analytics-01.png';
  const discordImage = '/discord.png';

  return (
    <div className='navcontainer'>
      <div className='leftnav'>
        <Image width={73} height={27} alt='vault' src={vaultImage} />
        <div className='side-buttons'>
          <LogoTextButton icon={homeImage} text='Home' />
          <LogoTextButton icon={dashImage} text='Admin' />
          <LogoTextButton icon={analysisImage} text='Analytics' />
          <LogoTextButton icon={bookImage} text='Guide' />
          <LogoTextButton icon={infoImage} text='About' />
        </div>
      </div>
      <div className='discord'>
        <Image width={32} height={32} alt='discord' src={discordImage} />
      </div>
    </div>
  );
}
