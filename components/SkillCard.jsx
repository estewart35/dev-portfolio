import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SkillIcon from "@/components/SkillIcon";

const SkillCard = ({ skill }) => {
  return (
    <div className="col-span-1">
      <Card className="border-2 border-logo-blue bg-input/30 hover:bg-input/78 dark:hover:bg-input/50 py-2.5 transition-all">
        <CardContent className="relative flex flex-col xs:flex-row items-center gap-3 px-2.5">
          <SkillIcon icon={skill.icon} />
          <div>
            <h3 className="text-foreground">{skill.name}</h3>
            <p className="hidden xs:block text-muted-foreground text-xs">
              {skill.description}
            </p>
          </div>
          {skill.tags?.includes("learning") && (
            <Badge
              variant="logo"
              className="absolute -right-2 -top-3 rotate-12"
            >
              Learning
            </Badge>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillCard;
