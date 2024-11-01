/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Image from 'next/image';

interface LogoTextButtonProps {
  text: string;
  icon: string;
  onClick?: any;
}

export default function LogoTextButton({
  icon,
  text,
  onClick,
}: LogoTextButtonProps) {
  return (
    <button className='button-nav' onClick={onClick}>
      <Image width={18} height={18} alt='vault' src={icon} />
      <span className='button-nav-text'>{text}</span>
    </button>
  );
}
