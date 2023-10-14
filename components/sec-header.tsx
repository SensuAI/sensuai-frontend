import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { cn } from "@/lib/utils"

export function SecHeader() {
  return (
    <div style={{ zIndex: -1 }}>
    <header  className="bg-gray-500/[.06] sticky top-0 z-40 w-full border-b h-20">
      <div   className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav/>
      </div>
    </header>
    </div>
  )
}
