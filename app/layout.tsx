"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@radix-ui/themes/styles.css"
import { Theme, ThemePanel } from '@radix-ui/themes'
import { siteConfig } from "@/config/site"
import { SiteHeader } from '@/components/site-header'
import { UserProvider } from './Context/userContext'
import { Toaster } from "@/components/ui/toaster"
import {usePathname} from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}


export default function RootLayout({ children }: RootLayoutProps) {

  const pathname = usePathname()
    // Lista de rutas en las que se desea mostrar la NavBar.
    const headerVisibleRoutes = ['/']; 

    
    const isHeaderVisible = headerVisibleRoutes.includes(pathname);
  
  return (
    <html lang="en"  suppressHydrationWarning>
      <body className={inter.className}>
      {isHeaderVisible && <SiteHeader />}
        {/* {pathname.startsWith('/listing') && <SiteHeader />} */}
        <Theme appearance="light" accentColor="red" grayColor="mauve">
          <UserProvider>
            {children}
          </UserProvider>
          <Toaster />
        </Theme>
      </body>
    </html>
  )
}
