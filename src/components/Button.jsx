"use client";
import Link from "next/link";
import clsx from "clsx";

const Button = ({
  children,
  color = "default",
  className,
  href,
  target,
  as = "a",
  onClick,
  type = "button",
  ...rest
}) => {
  const baseClass =
    "font-General-Medium px-11 py-6 rounded-full flex items-center justify-center";
  const classes = clsx(baseClass, className);

  if (as === "button") {
    return (
      <button type={type} className={classes} onClick={onClick} {...rest}>
        {children}
      </button>
    );
  }

  if (as === "link") {
    return (
      <Link href={href} className={classes} target={target} {...rest}>
        {children}
      </Link>
    );
  }

  // Por defecto, renderiza un <a>
  return (
    <a href={href} className={classes} target={target} {...rest}>
      {children}
    </a>
  );
};

export default Button;
