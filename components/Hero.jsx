import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { SquareArrowOutUpRight, Mail } from "lucide-react";
import Github from "@/components/icons/Github";
import Linkedin from "@/components/icons/Linkedin";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Hero = () => {
  return (
    <Container id="home" as="section" size="lg" className="py-8">
      <div className="grid grid-cols-12 gap-y-6 gap-x-0 md:items-center">
        <div className="col-span-12 md:col-span-7 text-center md:text-start">
          <div className="mb-4 text-lg">Hey, I'm</div>
          <h1 className="font-good-times font-bold text-5xl md-lg:leading-tight text-logo-blue mb-4">
            Ethan Stewart
          </h1>
          <h2 className="font-good-times leading-tight text-muted-foreground text-xl md:text-lg md-lg:text-xl mb-8 md:mb-6 md-lg:mb-8">
            Full-Stack Web Developer
          </h2>
          <p className="leading-6 text-balance mb-8">
            Passionate full-stack developer focused on clean design, usability,
            and efficient solutions. Detail-oriented, always learning, and
            driven to build thoughtful, user-friendly web experiences.
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-6">
            <Button variant="outline" className="font-good-times" asChild>
              <Link href="/resume.pdf" target="_blank">
                <SquareArrowOutUpRight className="size-5" />
                Resume
              </Link>
            </Button>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com/estewart35">
                    <Github className="size-5" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://www.linkedin.com/in/ethangstewart/">
                    <Linkedin className="size-5" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:ethan.stewart35@gmail.com">
                    <Mail className="size-5" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Email</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 order-first md:order-none mx-auto">
          <Image
            className="border-4 border-logo-blue w-full rounded-full aspect-square max-w-[250px] sm:max-w-[400px]"
            src="/self.jpg"
            width="300"
            height="300"
            alt="Photo of Ethan Stewart"
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
