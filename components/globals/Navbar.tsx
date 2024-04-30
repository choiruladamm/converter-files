import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { Button } from '../ui/button';
import { icons } from '../icons';
import { ModeToogle } from '.';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Github01Icon, Menu09Icon } from 'hugeicons-react';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="fixed z-50 flex items-center justify-between w-full h-24 px-4 py-10 backdrop-blur-md bg-background bg-opacity-30 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Link href="/">
        <Image
          alt="logo"
          className="w-40 cursor-pointer dark:invert"
          src="/vercel.svg"
          height={100}
          width={170}
        />
      </Link>

      <div className="hidden gap-1 md:gap-2 lg:gap-4 md:flex">
        <Button variant="ghost" className="font-semibold text-md">
          <Link href="/">Home</Link>
        </Button>
        <Link href="/about">
          <Button variant="ghost" className="font-semibold text-md">
            About
          </Button>
        </Link>
        <Link href="/privacy-policy">
          <Button variant="ghost" className="font-semibold text-md">
            Privacy Policy
          </Button>
        </Link>
      </div>

      <div className="items-center hidden gap-2 md:flex">
        <ModeToogle />
        <Link href="https://github.com/choiruladamm">
          <Button
            variant="default"
            className="items-center hidden gap-2 w-fit md:flex"
            size="lg"
          >
            <span>choiruladamm.</span>
            <span>
              <Github01Icon strokeWidth={2} className="size-5 text-primary-foreground" />
            </span>
          </Button>
        </Link>
      </div>

      {/* mobile nav */}
      <Sheet>
        <SheetTrigger className="block p-3 md:hidden">
          <span className="text-2xl text-slate-950 dark:text-slate-200">
            <Menu09Icon />
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div className="flex flex-col w-full h-full">
                <SheetTrigger asChild>
                  <Link href="/">
                    <Button
                      variant="link"
                      className="w-full font-semibold text-md"
                    >
                      Home
                    </Button>
                  </Link>
                </SheetTrigger>
                <SheetTrigger asChild>
                  <Link href="/about">
                    <Button
                      variant="link"
                      className="w-full font-semibold text-md"
                    >
                      About
                    </Button>
                  </Link>
                </SheetTrigger>
                <SheetTrigger asChild>
                  <Link href="/privacy-policy">
                    <Button
                      variant="link"
                      className="w-full font-semibold text-md"
                    >
                      Privacy Policy
                    </Button>
                  </Link>
                </SheetTrigger>
                <ModeToogle />
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
