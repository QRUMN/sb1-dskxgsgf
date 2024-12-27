"use client"

import { usePathname } from 'next/navigation';
import { Header } from '@/components/header';

export function HeaderWrapper() {
  const pathname = usePathname();
  const isAdminOrMember = pathname?.startsWith('/admin') || pathname?.startsWith('/member');
  
  if (isAdminOrMember) {
    return null;
  }
  
  return <Header />;
} 