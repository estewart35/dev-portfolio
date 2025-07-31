"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

const LogoImage = ({ logo }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`${logo.spacing} absolute size-16 aspect-square rounded-full border-2 border-logo-blue bg-accent overflow-hidden left-[33px] sm:left-[69px] top-6.5 xs:top-[2px] -translate-x-1/2`}
    >
      <Image
        className="h-full w-full object-contain"
        src={
          typeof logo.src === "string"
            ? logo.src
            : theme === "dark"
            ? logo.src.dark
            : logo.src.light
        }
        width="64"
        height="64"
        alt={logo.alt}
      />
    </div>
  );
};

export default LogoImage;
