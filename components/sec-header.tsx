'use client';

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { cn } from "@/lib/utils"
import { useRouter } from 'next/navigation';


export function SecHeader() {
  const router = useRouter();

  const clearLocalStorage = () => {
    localStorage.clear();
    router.push('/');
  };
  return (
    <div style={{ zIndex: -1 }}>
      <header className="bg-gray-500/[.06] sticky top-0 z-40 w-full border-b h-20">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav />
          <div className="flex items-center justify-end space-x-4 mt-4">
            <nav className="flex items-center space-x-1">
            <button onClick={clearLocalStorage}>Cerrar Sesión</button>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}
