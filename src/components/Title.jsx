import clsx from "clsx";

const Title = ({ children, color = "default", className }) => {
  const baseClass = "font-Nohemi text-primary";
  const classes = clsx(baseClass, className);
  return <p className={classes}>{children}</p>;
};

export default Title;
