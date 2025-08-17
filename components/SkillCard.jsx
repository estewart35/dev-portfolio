import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SkillIcon from "@/components/SkillIcon";

const SkillCard = ({ skill }) => {
  return (
    <Card className="col-span-1 border-2 border-logo-blue bg-accent dark:bg-accent/50 hover:bg-input/78 dark:hover:bg-input/50 py-2.5 transition-all">
      <CardContent className="relative flex flex-col xs:flex-row items-center gap-3 px-2.5">
        <SkillIcon icon={skill.icon} />
        <div>
          <CardTitle className="text-foreground font-normal mb-1 leading-4.5 text-center xs:leading-4 xs:text-start">
            {skill.name}
          </CardTitle>
          <CardDescription className="hidden xs:block text-xs">
            {skill.description}
          </CardDescription>
        </div>
        {skill.tags?.includes("learning") && (
          <Badge variant="logo" className="absolute -right-2 -top-3 rotate-12">
            Learning
          </Badge>
        )}
      </CardContent>
    </Card>
  );
};

export default SkillCard;
