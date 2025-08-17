import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import LogoImage from "@/components/LogoImage";

const ExperienceArticle = ({ article }) => {
  return (
    <article className="relative ps-22 sm:ps-34 not-last:mb-8">
      <LogoImage logo={article.logo} />
      <div className="text-sm text-muted-foreground flex flex-col gap-y-1 gap-x-5 xs:flex-row xs:items-center">
        <span className="inline-flex items-center">
          <Calendar className="size-4 me-1.5" /> {article.timeline}
        </span>
        <span className="inline-flex items-center">
          <MapPin className="size-4 me-1.5" /> {article.location}
        </span>
      </div>
      <h2 className="text-lg font-bold text-logo-blue text-pretty">
        {article.heading}
      </h2>
      <div className="text-muted-foreground text-pretty">
        {article.subHeading}
      </div>
      <ul
        className={`text-sm text-primary mt-2 ${
          article.badges ? "mb-3" : "mb-0"
        } ml-5 list-disc [&>li]:mt-1`}
      >
        {article.listItems.map((item) => (
          <li key={item} className="text-pretty">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {article.badges?.map((badge) => (
          <Badge variant="outline" key={badge}>
            {badge}
          </Badge>
        ))}
      </div>
    </article>
  );
};

export default ExperienceArticle;
