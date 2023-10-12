import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@radix-ui/themes/styles.css"
import { Theme, ThemePanel } from '@radix-ui/themes'
import { siteConfig } from "@/config/site"
import { SiteHeader } from '@/components/site-header'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
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
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader/>
        <Theme appearance="light" accentColor="red" grayColor="mauve">
        {children}
        </Theme></body>
    </html>
  )
}
