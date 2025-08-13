"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Nav = ({ className }) => {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="#home">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="#experience">Experience</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="#skills">Skills</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <Tooltip>
          <TooltipTrigger asChild>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <button disabled>Projects</button>
                {/* <Link href="#projects">Projects</Link> */}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </TooltipTrigger>
          <TooltipContent>
            <p>Still working on this — check back later!</p>
          </TooltipContent>
        </Tooltip>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Nav;
