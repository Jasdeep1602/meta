import React from 'react';
import Image from 'next/image';

interface LogoTextButtonProps {
  text: string;
  icon: string;
}

export default function LogoTextButton({ icon, text }: LogoTextButtonProps) {
  return (
    <button className='button-nav'>
      <Image width={19.25} height={19.25} alt='vault' src={icon} />
      <span className='button-nav-text'>{text}</span>
    </button>
  );
}
