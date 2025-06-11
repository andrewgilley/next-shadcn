import React from 'react'; 
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Footer() {
  return (

    <div className="bg-teal-500 pt-4 px-6 pb-8">
      <NavigationMenu>
        <NavigationMenuList>
          <div className="text-white text-md pr-4">© Municeps</div>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href="/" className="text-white text-md">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href="/" className="text-white text-md">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href="/" className="text-white text-md">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>

  )
}
