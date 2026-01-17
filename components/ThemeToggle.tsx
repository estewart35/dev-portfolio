"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const [spin, setSpin] = useState(false);

  const handleToggle = () => {
    setSpin(true);
    setTheme(theme === "light" ? "dark" : "light");
    setTimeout(() => setSpin(false), 500);
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("p-5 md:p-0", className)}
          onClick={handleToggle}
        >
          <Sun
            className={cn(
              "dark:hidden size-6 md:size-5",
              spin && "animate-[halfSpinRight_500ms_ease-out]"
            )}
          />
          <Moon
            className={cn(
              "hidden dark:block size-6 md:size-5",
              spin && "animate-[halfSpinLeft_500ms_ease-out]"
            )}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Toggle Theme</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ThemeToggle;
