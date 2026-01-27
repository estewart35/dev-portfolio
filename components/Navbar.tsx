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
import { useAnimatedIndicator } from "@/hooks/useAnimatedIndicator";
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
  const indicator = useAnimatedIndicator<HTMLUListElement>({
    activeValue: activeSection,
    itemSelector: "[data-nav-item]",
    itemAttribute: "data-nav-item",
  });

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList ref={indicator.ref} className="relative">
        {indicator.activePosition && (
          <motion.div
            layoutId="activeNavIndicator"
            className="absolute z-15 bottom-0 h-[2px] bg-logo-blue pointer-events-none"
            initial={false}
            animate={{
              left: indicator.activePosition.left + 6,
              width: indicator.activePosition.width - 12,
            }}
            transition={
              indicator.shouldAnimate
                ? { type: "tween", ease: "easeOut", duration: 0.3 }
                : { duration: 0 }
            }
          />
        )}

        {navLinks.map((link) => {
          const sectionId = link.href.replace("#", "");

          return (
            <NavigationMenuItem key={link.text} data-nav-item={sectionId}>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "relative z-10",
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
