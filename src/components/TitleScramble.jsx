import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import clsx from "clsx";

const TitleScramble = ({ children, color = "default", className }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const letters = titleRef.current.querySelectorAll("span"); // Selecciona todas las letras
    gsap.fromTo(
      letters,
      {
        y: 50, // Inicia desde 50px hacia abajo
        opacity: 0, // Inicia con opacidad 0
      },
      {
        y: 0, // Finaliza en su posición original
        opacity: 1, // Finaliza con opacidad 1
        duration: 0.6,
        stagger: 0.05, // Retraso entre cada letra
        ease: "power3.out", // Tipo de animación
      }
    );
  }, [children]);

  const baseClass = "font-Nohemi text-primary";
  const classes = clsx(baseClass, className);

  return (
    <p className={classes} ref={titleRef}>
      {children.split("").map((char, index) => (
        <span key={index}>{char}</span> // Cada letra dentro de un span
      ))}
    </p>
  );
};

export default TitleScramble;
