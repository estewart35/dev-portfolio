import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import LogoImage from "@/components/LogoImage";

const ExperienceArticle = ({
  logo,
  timeline,
  location,
  heading,
  subHeading,
  listItems,
  badges,
}) => {
  return (
    <article className="relative ps-22 sm:ps-34 not-last:mb-8">
      <LogoImage logo={logo} />
      <p className="text-sm text-muted-foreground flex flex-col gap-y-1 gap-x-5 xs:flex-row xs:items-center">
        <span className="inline-flex items-center">
          <Calendar className="size-4 me-1.5" /> {timeline}
        </span>
        <span className="inline-flex items-center">
          <MapPin className="size-4 me-1.5" /> {location}
        </span>
      </p>
      <h2 className="text-lg font-bold text-logo-blue text-pretty">
        {heading}
      </h2>
      <p className="text-muted-foreground text-pretty">{subHeading}</p>
      <ul
        className={`text-sm text-primary mt-2 ${
          badges ? "mb-3" : "mb-0"
        } ml-5 list-disc [&>li]:mt-1`}
      >
        {listItems.map((item, i) => (
          <li key={i} className="text-pretty">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {badges?.map((tech, i) => (
          <Badge variant="outline" key={i}>
            {tech}
          </Badge>
        ))}
      </div>
    </article>
  );
};

export default ExperienceArticle;
