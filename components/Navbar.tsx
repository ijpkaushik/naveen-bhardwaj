"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import { navItems } from "@/constants/navItems";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 flex items-center justify-between rounded-t-lg gap-4 border-b border-border/50 bg-background/60 px-4 py-4 backdrop-blur-md sm:px-6 md:px-8 md:py-5",
      )}
    >
      <Link
        href="/"
        className="relative z-10 shrink-0 text-xl font-bold tracking-tight md:text-2xl"
      >
        <span className="text-primary">Naveen</span>
        <span className="text-foreground"> Folio</span>
      </Link>

      <div className="hidden md:flex md:items-center md:gap-1 py-5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.url;
          return (
            <Link key={item.url} href={item.url}>
              <Button
                size="sm"
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "gap-2 font-medium",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "hover:bg-muted",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          );
        })}
      </div>

      {/* Mobile menu - Sheet */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 shrink-0 md:hidden"
            aria-label="Open menu"
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="">
          <SheetHeader>
            <SheetTitle className="sr-only">Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 pt-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.url;
              return (
                <Link
                  key={item.url}
                  href={item.url}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button
                    size="lg"
                    variant={isActive ? "default" : "ghost"}
                    className={cn(
                      "w-full justify-start gap-3 font-medium",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
