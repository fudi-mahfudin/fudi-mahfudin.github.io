"use client";

import React, { useEffect, useState } from "react";
import useWindowSize from "@/hooks/use-window-size";
import { mergeClasses } from "@/lib/utils";
import useScroll from "@/hooks/use-scroll";
import Typography from "../general/typography";
import Link from "../navigation/link";
import { NAV_LINKS } from "@/lib/data";
import ThemeSwitcher from "../general/theme-switcher";
import DownloadCV from "../general/download-cv";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../navigation/drawer";
import IconButton from "../general/icon-button";
import { Menu, X } from "lucide-react";

const Logo = () => (
  <Typography variant="h3" className="font-bold">
    {"<MF />"}
  </Typography>
);

const Header = () => {
  const scrolled = useScroll(40);
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();

  // close sidebar if open in screen size < 768px
  useEffect(() => {
    if (size?.width && size?.width > 767 && isOpen) {
      setIsOpen(false);
    }
  }, [size, isOpen]);

  return (
    <header
      className={mergeClasses(
        "sticky top-0 z-30 w-full border-b border-transparent bg-gray max-md:border-gray-100",
        scrolled && "bg-gray/50 backdrop-blur-xl md:border-gray-100"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
        <Link href="/" noCustomization>
          <Logo />
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex list-none items-center gap-6">
            {NAV_LINKS.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="h-6 w-0.5 bg-gray-100" />
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <DownloadCV />
          </div>
        </div>
        <div className="flex md:hidden ml-auto mr-6">
          <ThemeSwitcher />
        </div>

        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild className="flex md:hidden">
            <IconButton>
              <Menu />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex items-center justify-between border-b border-gray-100 p-4">
              <Logo />
              <DrawerClose asChild>
                <IconButton>
                  <X />
                </IconButton>
              </DrawerClose>
            </div>
            <div className="border-b border-gray-100 p-4">
              <ul className="flex list-none flex-col gap-4">
                {NAV_LINKS.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={() => {
                        const timeoutId = setTimeout(() => {
                          setIsOpen(false);
                          clearTimeout(timeoutId);
                        }, 500);
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 p-4">
              <div className="flex items-center justify-between">
                <Typography>Switch Theme</Typography>
                <ThemeSwitcher />
              </div>
              <DownloadCV />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
