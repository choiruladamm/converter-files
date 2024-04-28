import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { Button } from '../ui/button';
import { icons } from '../icons';
import { ModeToogle } from '.';

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
        <Link href="https://github.com/benlhachemi/modifio.git">
          <Button
            variant="default"
            className="items-center hidden gap-2 w-fit md:flex"
            size="lg"
          >
            <span>choiruladamm.</span>
            <span>
              <icons.github className="size-5 text-primary-foreground" />
            </span>
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
