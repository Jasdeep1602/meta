'use client';

import React, { useEffect, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { usePathname } from 'next/navigation';

export default function WalletAdd() {
  const pathName = usePathname();
  const [isPathActive, setIsPathActive] = useState(false);

  useEffect(() => {
    setIsPathActive(pathName === '/connect-wallet');
  }, [pathName]);

  return (
    <div>
      {isPathActive && (
        <ConnectButton /> // This component only shows when `isPathActive` is true
      )}
    </div>
  );
}
