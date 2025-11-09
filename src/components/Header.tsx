// components/Header.tsx
'use client'; // NavigationMenu के लिए इसे Client Component बनाना होगा

import React from 'react';
import Link from 'next/link';

// Shadcn UI Components
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

// Navigation Links का डेटा
const navItems = [
  { title: 'Home', href: '/' },
  { title: 'About Us', href: '/About' },
  { title: 'Courses', href: '/courses' },
  { title: 'Contact', href: '/contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        
        {/* Logo/Brand Name */}
        <Link href="/" className="mr-6">
          <h1 className="text-xl font-extrabold text-primary tracking-tight">
            Edu<span className="text-foreground">Sphere</span>
          </h1>
        </Link>
        
        {/* Navigation Menu (Desktop) */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
            
            {/* Courses के लिए एक Dropdown Menu का उदाहरण (Optional) */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>More</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {/* आप यहाँ अपने Course Categories या Documentation Links जोड़ सकते हैं */}
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/courses"
                      >
                         
                        <div className="mb-2 mt-4 text-lg font-medium">
                          All Courses
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Explore our full library of educational content.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li className="flex flex-col space-y-2">
                    <NavigationMenuLink asChild>
                      <Link href="/faq" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">FAQ</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Answers to frequently asked questions.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/blog" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Blog</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Latest news and articles on education.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* CTA Button */}
        <Button asChild>
          <Link href="/signup">
            Join Now
          </Link>
        </Button>
        
        {/* Mobile Navigation (Sheet) यहाँ जोड़ा जा सकता है */}
        {/*... */}
      </div>
    </header>
  );
}