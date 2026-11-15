"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  MonitorSmartphone,
  Moon,
  Sun,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Heart,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function Footer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Use "system" as default if theme is not yet loaded
  const currentTheme = mounted ? theme : "system";

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com", 
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
      bgColor: "hover:bg-gray-900 dark:hover:bg-gray-100",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com",
      label: "LinkedIn",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-600",
    },
    { 
      icon: Twitter, 
      href: "https://x.com", 
      label: "Twitter",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-400",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com",
      label: "Instagram",
      color: "hover:text-pink-600",
      bgColor: "hover:bg-pink-600",
    },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-br from-white/95 to-zinc-50/95 dark:from-zinc-900/95 dark:to-zinc-800/95 backdrop-blur-sm rounded-bl-lg rounded-br-lg overflow-hidden">
      {/* Subtle decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary/2 to-primary/0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative px-5 md:px-10 py-10 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
          {/* Social Links */}
          <div 
            className={cn(
              "flex items-center gap-4 transition-all duration-700",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={social.label}
                  style={{
                    transitionDelay: mounted ? `${200 + index * 50}ms` : "0ms",
                  }}
                >
                  {/* Subtle glow effect */}
                  <div className={cn(
                    "absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500",
                    social.bgColor
                  )} />
                  
                  <Button
                    size="icon"
                    variant="ghost"
                    className={cn(
                      "h-12 w-12 rounded-full relative z-10 transition-all duration-300",
                      "group-hover:scale-105 group-hover:rotate-3",
                      "border border-border/50 group-hover:border-primary/20",
                      "shadow-sm group-hover:shadow-md group-hover:shadow-primary/10",
                      "bg-background/50 group-hover:bg-background",
                      social.color
                    )}
                  >
                    <Icon className="h-5 w-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Copyright */}
          <div 
            className={cn(
              "text-sm text-muted-foreground/80 text-center md:text-left transition-all duration-700",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "400ms" }}
          >
            <p className="flex flex-col sm:flex-row items-center gap-2 justify-center md:justify-start">
              <span className="font-medium">© {new Date().getFullYear()} Naveen Bhardwaj</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <span>Made with</span>
                <Heart className="h-3.5 w-3.5 text-primary/70 fill-primary/20 animate-pulse" />
                <span>All rights reserved</span>
              </span>
            </p>
          </div>

          {/* Theme Switcher */}
          <div 
            className={cn(
              "flex items-center gap-1 p-1.5 bg-muted/30 backdrop-blur-sm rounded-xl border border-border/40 transition-all duration-500",
              "hover:bg-muted/50 hover:border-primary/15 hover:shadow-md",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "500ms" }}
          >
            <Button
              size="icon"
              variant={currentTheme === "light" ? "default" : "ghost"}
              onClick={() => setTheme("light")}
              className={cn(
                "h-9 w-9 relative transition-all duration-300 group",
                "hover:scale-105 hover:rotate-6",
                currentTheme === "light" && "shadow-sm shadow-primary/10"
              )}
              aria-label="Light theme"
            >
              <Sun className={cn(
                "h-4 w-4 transition-all duration-300",
              )} />
              {currentTheme === "light" && (
                <Sparkles className="absolute -top-0.5 -right-0.5 h-2 w-2 animate-pulse" />
              )}
            </Button>
            <Button
              size="icon"
              variant={currentTheme === "dark" ? "default" : "ghost"}
              onClick={() => setTheme("dark")}
              className={cn(
                "h-9 w-9 relative transition-all duration-300 group",
                "hover:scale-105 hover:rotate-6",
                currentTheme === "dark" && "shadow-sm shadow-primary/10"
              )}
              aria-label="Dark theme"
            >
              <Moon className={cn(
                "h-4 w-4 transition-all duration-300",
              )} />
              {currentTheme === "dark" && (
                <Sparkles className="absolute -top-0.5 -right-0.5 h-2 w-2 animate-pulse" />
              )}
            </Button>
            <Button
              size="icon"
              variant={currentTheme === "system" || !mounted ? "default" : "ghost"}
              onClick={() => setTheme("system")}
              className={cn(
                "h-9 w-9 relative transition-all duration-300 group",
                "hover:scale-105 hover:rotate-6",
                (currentTheme === "system" || !mounted) && "shadow-sm shadow-primary/10"
              )}
              aria-label="System theme"
            >
              <MonitorSmartphone className={cn(
                "h-4 w-4 transition-all duration-300",
              )} />
              {(currentTheme === "system" || !mounted) && (
                <Sparkles className="absolute -top-0.5 -right-0.5 h-2 w-2 animate-pulse" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
