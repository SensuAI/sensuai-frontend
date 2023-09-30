import { FC, ReactNode } from "react";
import { Theme, ThemePanel } from '@radix-ui/themes'
import { Inter } from 'next/font/google'


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
    
    <div>{children}</div>
  )
};

export default AuthLayout

