'use client';

import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const { toast } = useToast();
  const router = useRouter();

  const redirect = () => {
    const userString: any = localStorage.getItem("user");

    if (!userString) {
      redirectToHomePage();
      return;
    }

    const user = JSON.parse(userString);

    if (user.role == "MANAGER") {
      window.location.href = '/manager';
    } else if (user.role == "ADMIN") {
      window.location.href = '/admin';
    } else {
      redirectToHomePage();
    }
  };

  const redirectToHomePage = () => {
    router.push('/');
    toast({
      description: "Log in to access our services!",
      duration: 6000,
    });
  };

  return (
    <div className="flex flex-1 gap-6 md:gap-10 space-x-2 mt-6">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.EYYE className="h-6 w-6"/>
        <span className="inline-block font-bold" onClick={redirect}>{siteConfig.name}</span>
      </Link>
      <div className="flex justify-center w-full">
      {items?.length ? (
        <nav className="ml-10 w-full flex items-center justify-center gap-10 space-x-2">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
      </div>
    </div>
  )
}

