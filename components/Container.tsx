import { type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils";

type ContainerSize = keyof typeof maxWidthMap;

type ContainerProps = {
  id?: string;
  children: ReactNode;
  size?: ContainerSize;
  bgClassName?: string;
  className?: string;
  as?: ElementType;
};

const maxWidthMap = {
  sm: "max-w-screen-sm px-6 sm:px-12",
  md: "max-w-screen-md px-6 sm:px-12",
  lg: "max-w-screen-lg px-6 sm:px-12",
  xl: "max-w-screen-xl px-6 sm:px-12",
  "2xl": "max-w-screen-2xl px-6 sm:px-12",
  full: "w-full",
} as const;

const Container = ({
  id,
  children,
  size = "lg",
  className,
  bgClassName,
  as: Wrapper = "div",
}: ContainerProps) => {
  const maxWidthClass = maxWidthMap[size] ?? maxWidthMap["lg"];

  return (
    <Wrapper id={id} className={bgClassName}>
      <div className={cn("mx-auto", maxWidthClass, className)}>{children}</div>
    </Wrapper>
  );
};

export default Container;
