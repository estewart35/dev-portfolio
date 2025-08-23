import Github from "@/components/icons/Github";
import Linkedin from "@/components/icons/Linkedin";
import { SquareArrowOutUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const MediaButtons = ({ withResume = false, className }) => {
  return (
    <div
      className={`flex items-center justify-center md:justify-start space-x-6 ${className}`}
    >
      {withResume && (
        <Button variant="outline" className="font-good-times" asChild>
          <Link href="/resume.pdf" target="_blank">
            <SquareArrowOutUpRight className="size-5" />
            Resume
          </Link>
        </Button>
      )}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://github.com/estewart35" target="_blank">
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
            <Link
              href="https://www.linkedin.com/in/ethangstewart/"
              target="_blank"
            >
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
            <Link href="mailto:ethan.stewart35@gmail.com" target="_blank">
              <Mail className="size-5" />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Email</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default MediaButtons;
