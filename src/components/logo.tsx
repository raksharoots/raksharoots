import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import logo from './logo.jpg';

export function Logo({ className }: { className?: string }) {
  return (
    <a href="/" className={cn('inline-block transition-transform duration-300 hover:scale-105', className)}>
      <Image
        src={logo}
        alt="RakshaRoots Logo"
        width={70}
        height={50}
        priority
      />
    </a>
  );
}
