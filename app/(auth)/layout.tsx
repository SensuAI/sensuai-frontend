import { FC, ReactNode } from "react";
import { Theme, ThemePanel } from '@radix-ui/themes'
import { Inter } from 'next/font/google'
import Background from "@/components/backgroundsvg";
import { SecHeader } from "@/components/sec-header";


interface AuthLayoutProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ['latin'] })

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (

    // <html lang="en">
    //   <body className={inter.className}>
    //     <Theme appearance='dark'>
    //     {children}
    //     </Theme></body>
    // </html>
    
    <div><SecHeader/>{children}</div>
  )
};

export default AuthLayout

