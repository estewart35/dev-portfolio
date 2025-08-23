import Image from "next/image";

const LogoImage = ({ logo }) => {
  return (
    <div
      className={`${logo.spacing} absolute size-16 aspect-square rounded-full border-2 border-logo-blue bg-accent overflow-hidden left-[33px] sm:left-[69px] top-6.5 xs:top-[2px] -translate-x-1/2`}
    >
      {typeof logo.src === "string" ? (
        // Same logo same for both themes
        <Image
          priority
          className="h-full w-full object-contain"
          src={logo.src}
          width={64}
          height={64}
          alt={logo.alt}
        />
      ) : (
        // Render both logos but only show one so theres no delay when switching themes
        <>
          {/* Light mode */}
          <Image
            priority
            className="dark:hidden h-full w-full object-contain"
            src={logo.src.light}
            width={64}
            height={64}
            alt={logo.alt}
          />
          {/* Dark mode */}
          <Image
            priority
            className="hidden dark:block h-full w-full object-contain"
            src={logo.src.dark}
            width={64}
            height={64}
            alt={logo.alt}
          />
        </>
      )}
    </div>
  );
};

export default LogoImage;
