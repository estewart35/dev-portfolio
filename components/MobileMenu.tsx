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
import { Menu, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  className?: string;
};

const navLinks = [
  { href: "#home", text: "Home" },
  { href: "#experience", text: "Experience" },
  { href: "#skills", text: "Skills" },
  { href: "#projects", text: "Projects" },
];

function MobileMenu({ className }: MobileMenuProps) {
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
        <NavigationMenu
          orientation="vertical"
          className="block max-w-full flex-0"
        >
          <NavigationMenuList className="block space-y-8">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.text}>
                <SheetClose asChild>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "w-full text-lg h-10"
                    )}
                  >
                    <Link href={link.href}>{link.text}</Link>
                  </NavigationMenuLink>
                </SheetClose>
              </NavigationMenuItem>
            ))}
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
