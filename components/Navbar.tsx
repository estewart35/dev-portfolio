"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useAnimatedPill } from "@/hooks/useAnimatedPill";
import { useScrollSectionObserver } from "@/hooks/useScrollSectionObserver";

type NavbarProps = {
  className?: string;
};

const navLinks = [
  { href: "#home", text: "Home" },
  { href: "#experience", text: "Experience" },
  { href: "#skills", text: "Skills" },
  { href: "#projects", text: "Projects" },
];

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

const Navbar = ({ className }: NavbarProps) => {
  const activeSection = useScrollSectionObserver(sectionIds);
  const pill = useAnimatedPill<HTMLUListElement>({
    activeValue: activeSection,
    itemSelector: "[data-nav-item]",
    itemAttribute: "data-nav-item",
  });

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList ref={pill.ref} className="relative">
        {pill.activePosition && (
          <motion.div
            layoutId="activeNavPill"
            className="absolute h-9 bg-input dark:bg-accent border-2 border-logo-blue shadow-sm rounded-md pointer-events-none"
            initial={false}
            animate={{
              left: pill.activePosition.left,
              width: pill.activePosition.width,
            }}
            transition={
              pill.shouldAnimate
                ? { type: "tween", ease: "easeOut", duration: 0.3 }
                : { duration: 0 }
            }
          />
        )}

        {navLinks.map((link) => {
          const sectionId = link.href.replace("#", "");
          const isActive = activeSection === sectionId;

          return (
            <NavigationMenuItem key={link.text} data-nav-item={sectionId}>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "relative z-10",
                  isActive &&
                    "text-accent-foreground hover:bg-transparent dark:hover:bg-transparent"
                )}
              >
                <Link href={link.href}>{link.text}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
