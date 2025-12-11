"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type NavbarProps = {
  className?: string;
};

const navLinks = [
  { href: "#home", text: "Home" },
  { href: "#experience", text: "Experience" },
  { href: "#skills", text: "Skills" },
  { href: "#projects", text: "Projects" },
];

const Navbar = ({ className }: NavbarProps) => {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.text}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={link.href}>{link.text}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
