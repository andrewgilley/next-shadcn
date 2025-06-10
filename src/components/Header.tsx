import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <div className="h-screen overflow-y-scroll">
      <div className="flex w-full bg-black/50 position:sticky top-0 backdrop-blur backdrop-filter px-6 pt-2 pb-3">
        <div className="flex w-full justify-start px-2">
          <NavigationMenu viewport={false} className="w-full">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/">
                    <Image 
                      src="/activity.webp" 
                      alt="Example" 
                      width={27} 
                      height={34}
                      className="rounded-md"
                    />        
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="transition-all duration-400 rounded-md bg-black/20 px-3 py-1 text-sm text-white">
                  Home
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="transition-all duration-400 rounded-md bg-black/20 px-3 py-1 text-sm text-white"> 
                  About
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="transition-all duration-400 rounded-md bg-black/20 px-3 py-1 text-sm text-white">
                  Contact
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}
