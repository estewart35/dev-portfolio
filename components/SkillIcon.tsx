import { Icon } from "@iconify/react";
import { type Skill } from "@/lib/types";
import { cn } from "@/lib/utils";

type SkillIconProps = {
  icon: Skill["icon"];
};

const SkillIcon = ({ icon }: SkillIconProps) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center aspect-square size-11 rounded-lg",
        icon.bgColor
      )}
    >
      <Icon icon={icon.code} className={icon.color} width="30" height="30" />
    </div>
  );
};

export default SkillIcon;
