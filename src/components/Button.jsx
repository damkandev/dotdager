import { useEffect, useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Registrar ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const Button = ({ children, className, href, onClick, ...rest }) => {
  const buttonRef = useRef(null);

  // Función de manejo del click para el scroll suave
  const handleClick = (e) => {
    // Verificamos si el href es una URL externa o interna
    if (href && !href.startsWith("#")) {
      return; // Si es una URL externa, no hacemos preventDefault, dejamos que el enlace se abra
    }

    e.preventDefault(); // Prevenir comportamiento por defecto solo si es un ancla interna

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
