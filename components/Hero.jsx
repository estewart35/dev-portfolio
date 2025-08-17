import Image from "next/image";
import Container from "@/components/Container";
import MediaButtons from "@/components/MediaButtons";

const Hero = () => {
  return (
    <Container
      id="home"
      as="section"
      size="lg"
      bgClassName="scroll-mt-22"
      className="py-8"
    >
      <div className="grid grid-cols-12 gap-y-6 gap-x-0 md:items-center">
        <div className="col-span-12 md:col-span-7 text-center md:text-start">
          <div className="mb-4 text-lg">Hey, I'm</div>
          <h1 className="font-good-times font-bold text-5xl md-lg:leading-tight text-logo-blue mb-4">
            Ethan Stewart
          </h1>
          <h2 className="font-good-times leading-tight text-muted-foreground text-xl md:text-lg md-lg:text-xl mb-8 md:mb-6 md-lg:mb-8">
            Full-Stack Web Developer
          </h2>
          <p className="leading-6 text-pretty mb-8">
            I'm a 25-year-old developer based in Ogden, Utah. I'm all about
            clean design, building things that are easy to use, and writing code
            that makes sense.
          </p>
          <MediaButtons withResume />
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
