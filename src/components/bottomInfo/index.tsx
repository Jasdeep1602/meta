import Image from 'next/image';
import React from 'react';

export default function BottomInfo() {
  const footerImage = '/footerLogo.png';
  const discordImage = '/discord.png';

  return (
    <div className='footercontainer'>
      <div className='twoinfo'>
        <div className='footer-left'>
          <Image width={84} height={25} alt='logo' src={footerImage} />
          <div>
            {' '}
            <div>
              The ultimate platform for turning coins into long-term gains.
            </div>
            <div>
              Stake, hold, and grow your assets with strategies designed for
              degen investors
            </div>
          </div>
        </div>
        <div>
          <div className='dx'>Product</div>
          <div>About product</div>
          <div>Guide</div>
          <div className='flex gap-1'>
            Join Discord{' '}
            <Image width={20} height={20} alt='img' src={discordImage} />
          </div>
        </div>
      </div>
      <div className='copy'>2024 @metaborong all rights reserved</div>
    </div>
  );
}
