import { useEffect, useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";

const Button = ({ children, className, href, onClick, ...rest }) => {
  const buttonRef = useRef(null);

  // Función de manejo del click para el scroll suave
  const handleClick = (e) => {
    e.preventDefault(); // Prevenir comportamiento por defecto del enlace

    const targetId = href?.slice(1); // Extraemos el id de la sección (suponiendo que el href tiene el formato "#sectionId")
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Usamos GSAP para hacer un scroll suave hasta la sección
      gsap.to(window, {
        scrollTo: {
          y: targetElement.offsetTop,
          autoKill: false,
        },
        duration: 1,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    const button = buttonRef.current;

    // Animación de hover con GSAP
    const handleHoverIn = () => {
      gsap.to(button, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    };

    const handleHoverOut = () => {
      gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    if (button) {
      button.addEventListener("mouseenter", handleHoverIn);
      button.addEventListener("mouseleave", handleHoverOut);
    }

    // Limpiar eventos cuando el componente se desmonte
    return () => {
      if (button) {
        button.removeEventListener("mouseenter", handleHoverIn);
        button.removeEventListener("mouseleave", handleHoverOut);
      }
    };
  }, []);

  const baseClass =
    "font-General-Medium px-11 py-6 rounded-full flex items-center justify-center";
  const classes = clsx(baseClass, className);

  return (
    <a
      href={href} // El href se mantiene para navegación de accesibilidad
      onClick={handleClick} // Agregamos el controlador del click
      className={classes}
      ref={buttonRef}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Button;
