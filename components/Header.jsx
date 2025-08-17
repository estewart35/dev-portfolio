import Container from "@/components/Container";
import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import MobileMenu from "@/components/MobileMenu";

const Header = () => {
  return (
    <Container
      as="header"
      size="lg"
      bgClassName="py-5 sticky top-0 z-50 bg-background/50 backdrop-blur-md"
      className="flex h-12 justify-between items-center"
    >
      <Link className="shrink-0" href="/">
        <img src="/logos/ethanstewart_logo.svg" alt="Ethan Stewart Logo" className="h-12" />
      </Link>
      <div className="flex h-5 items-center">
        <Nav className="hidden md:flex md:me-4" />
        <Separator orientation="vertical" className="hidden md:block md:me-4" />
        <ThemeToggle className="me-4 md:me-0" />
        <Separator orientation="vertical" className="md:hidden me-4" />
        <MobileMenu className="inline-flex md:hidden" />
      </div>
    </Container>
  );
};

export default Header;
