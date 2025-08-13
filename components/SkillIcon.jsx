import { Icon } from "@iconify/react";

const SkillIcon = ({ icon }) => {
  return (
    <div
      className={`flex justify-center items-center aspect-square size-11 rounded-lg ${icon.bgColor}`}
    >
      <Icon icon={icon.code} className={icon.color} width="30" height="30" />
    </div>
  );
};

export default SkillIcon;
