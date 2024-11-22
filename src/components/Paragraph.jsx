import clsx from "clsx";

const Paragrah = ({ children, color = "default", className }) => {
  const baseClass = "font-GeneralMedium text-primary";
  const classes = clsx(baseClass, className);
  return <p className={classes}>{children}</p>;
};

export default Paragrah;
