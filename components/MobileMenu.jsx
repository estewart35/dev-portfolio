import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
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
import { Menu, SquareArrowOutUpRight, Mail } from "lucide-react";
import Github from "@/components/icons/Github";
import Linkedin from "@/components/icons/Linkedin";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function MobileMenu({ className }) {
  return (
    <Sheet>
      <SheetTrigger asChild className={className}>
        <Button size="icon" variant="ghost" className="p-5">
          <Menu className="size-9 text-logo-blue" />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-6">
        <SheetHeader className="mb-8">
          <SheetTitle className="sr-only">Menu</SheetTitle>
        </SheetHeader>
        <NavigationMenu className="block max-w-full flex-0">
          <NavigationMenuList className="block space-y-8">
            <NavigationMenuItem>
              <SheetClose asChild>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} w-full text-lg h-10`}
                >
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </SheetClose>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <SheetClose asChild>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} w-full text-lg h-10`}
                >
                  <Link href="#experience">Experience</Link>
                </NavigationMenuLink>
              </SheetClose>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <SheetClose asChild>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} w-full text-lg h-10`}
                >
                  <Link href="#skills">Skills</Link>
                </NavigationMenuLink>
              </SheetClose>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <SheetClose asChild>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} w-full text-lg h-10`}
                >
                  <Link href="#projects">Projects</Link>
                </NavigationMenuLink>
              </SheetClose>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Separator className="my-3 border-1" />
        <Button variant="outline" className="font-good-times" asChild>
          <Link href="/resume.pdf" target="_blank">
            <SquareArrowOutUpRight className="size-5" />
            Resume
          </Link>
        </Button>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
