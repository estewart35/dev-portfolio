import Container from "@/components/Container";
import MediaButtons from "@/components/MediaButtons";
import Link from "next/link";

// evaluated once at build time when re-deploying
const buildDate = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "America/Denver",
});

const Footer = () => {
  return (
    <Container
      as="footer"
      size="lg"
      className="py-8 flex flex-col sm:flex-row items-center justify-between gap-8"
    >
      <MediaButtons />
      <div className="text-muted-foreground text-sm text-pretty text-center sm:text-end">
        <div className="mb-1">
          Built with{" "}
          <Link
            href="https://nextjs.org/"
            className="underline underline-offset-3 hover:text-logo-blue rounded-md outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
            target="_blank"
          >
            Next.js
          </Link>
          ,{" "}
          <Link
            href="https://tailwindcss.com/"
            className="underline underline-offset-3 hover:text-logo-blue rounded-md outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
            target="_blank"
          >
            Tailwind CSS
          </Link>
          , and{" "}
          <Link
            href="https://ui.shadcn.com/"
            className="underline underline-offset-3 hover:text-logo-blue rounded-md outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
            target="_blank"
          >
            Shadcn/ui
          </Link>
          .
        </div>
        <div>Last Updated: {buildDate}</div>
      </div>
    </Container>
  );
};

export default Footer;
