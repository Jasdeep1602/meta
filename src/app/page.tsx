'use client';

import DesignText from '@/components/designText';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();

  const discordImage = '/discord.png';
  const rocketImage = '/rocket-01.png';
  const logo = '/logo-big.png';

  const handleLaunch = () => {
    router.push('/connect-wallet');
  };
  return (
    <div className='mainpage'>
      <DesignText />{' '}
      <div className='twobutton'>
        {' '}
        <div className='discord'>
          <Image width={32} height={32} alt='discord' src={discordImage} />
        </div>
        <button className='lauchapp' onClick={handleLaunch}>
          <span className='button-nav-text'>Launch app</span>
          <Image width={19.25} height={19.25} alt='vault' src={rocketImage} />
        </button>
      </div>
      <div className='animatelogo'>
        {' '}
        <Image width={140} height={140} alt='logo' src={logo} />
      </div>
    </div>
  );
}
