import Container from "./Container";
import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <Container
      as="header"
      size="lg"
      bgClassName="py-6"
      className="flex h-12 justify-between items-center"
    >
      <Link className="shrink-0" href="/">
        <img src="/logos/ethanstewart_logo.svg" alt="Logo" className="h-12" />
      </Link>
      <div className="flex h-5 items-center">
        <Nav className="hidden md:flex md:me-4" />
        <Separator
          orientation="vertical"
          className="hidden md:block md:me-4"
        />
        <ThemeToggle className="me-4 md:me-0" />
        <Separator orientation="vertical" className="md:hidden me-4" />
        <MobileMenu className="inline-flex md:hidden" />
      </div>
    </Container>
  );
};

export default Header;
