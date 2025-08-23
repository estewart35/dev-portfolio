import Image from "next/image";

const MockupImage = ({ mockup }) => {
  return (
    <div className="px-8 overflow-hidden bg-linear-to-b from-input/78 dark:from-input/50 to-background group-hover:from-logo-blue dark:group-hover:from-logo-blue">
      <Image
        priority
        className="dark:hidden w-full h-auto translate-y-8 group-hover:translate-y-4 transition-all ease-in-out duration-500"
        src={mockup.src.light}
        height="375"
        width="287"
        alt={mockup.alt}
      />
      <Image
        priority
        className="hidden dark:block w-full h-auto translate-y-8 group-hover:translate-y-4 transition-transform ease-in-out duration-500"
        src={mockup.src.dark}
        height="375"
        width="287"
        alt={mockup.alt}
      />
    </div>
  );
};

export default MockupImage;
