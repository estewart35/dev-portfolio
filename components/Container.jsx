const maxWidthMap = {
  sm: "max-w-screen-sm px-6 sm:px-12",
  md: "max-w-screen-md px-6 sm:px-12",
  lg: "max-w-screen-lg px-6 sm:px-12",
  xl: "max-w-screen-xl px-6 sm:px-12",
  "2xl": "max-w-screen-2xl px-6 sm:px-12",
  full: "w-full",
};

const Container = ({
  id,
  children,
  size = "lg",
  className,
  bgClassName,
  as: Wrapper = "div",
}) => {
  const maxWidthClass = maxWidthMap[size] || maxWidthMap["lg"];

  return (
    <Wrapper id={id} className={bgClassName}>
      <div className={`${maxWidthClass} mx-auto ${className}`}>{children}</div>
    </Wrapper>
  );
};

export default Container;
