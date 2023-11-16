"use client"
import { FC, ReactNode } from "react";

import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@radix-ui/themes/styles.css"
import { usePathname } from 'next/navigation'


import { SiteHeader } from '@/components/site-header'

const inter = Inter({ subsets: ['latin'] })



interface ManagerLayoutProps {
  children: ReactNode;
}
const ManagerLayout: FC<ManagerLayoutProps> = ({ children }) => {
  return (
    <div>
        <SiteHeader />{children}
    </div>
  )
};

export default ManagerLayout;