import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MockupImage from "@/components/MockupImage";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Github from "@/components/icons/Github";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative group col-span-1 rounded-xl">
      <Card className="border-2 border-logo-blue pt-0 pb-5 gap-2 overflow-hidden">
        <MockupImage mockup={project.mockup} />
        <CardContent className="px-5">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-3 text-lg font-bold text-logo-blue py-1">
              {project.name}
              <ArrowUpRight className="size-5 group-hover:translate-x-1.25 group-hover:-translate-y-1.25 transition-transform ease-in-out duration-500" />
            </CardTitle>
            {project.githubUrl && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="link"
                    className="z-20 text-muted-foreground hover:text-logo-blue"
                    size="icon"
                    asChild
                  >
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="size-5" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>
            )}
            {project.badgeEmphasis && (
              <Badge
                variant="logo"
                className="absolute right-6.5 top-8.5 rotate-12 group-hover:-translate-y-4 transition-all ease-in-out duration-500"
              >
                {project.badgeEmphasis}
              </Badge>
            )}
          </div>
          <CardDescription className="text-primary text-pretty mb-4">
            {project.description}
          </CardDescription>
          <div className="flex flex-wrap gap-2">
            {project.badges?.map((badge) => (
              <Badge variant="outline" key={badge}>
                {badge}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Whole card link overlay */}
      <Link
        href={project.liveUrl ?? project.githubUrl}
        target="_blank"
        className="absolute inset-0 z-10 rounded-xl"
        aria-label={`Open ${project.name}`}
      >
        <span className="sr-only">Open {project.name}</span>
      </Link>
    </div>
  );
};

export default ProjectCard;
