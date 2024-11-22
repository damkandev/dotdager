"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Emoji from "./Emoji"; // Importar el componente Emoji

// Componente reutilizable que toma las palabras a mostrar en hover como props
function HoverText({
  textBefore,
  textHover,
  textAfter,
  emoji,
  emojiName,
  initialX = -30, // Posición inicial del texto en X
  initialY = 0, // Posición inicial del texto en Y
}) {
  const highlightRef = useRef(null); // Para la palabra que aparece al hacer hover
  const textRef = useRef(null); // Para el texto que se mueve (por ejemplo "gatos")

  useEffect(() => {
    // Inicialmente la palabra hover está oculta
    gsap.set(highlightRef.current, { opacity: 0, visibility: "hidden" });
    // Inicialmente, el texto y el emoji se encuentran desplazados a la izquierda
    gsap.set(textRef.current, { x: initialX, y: initialY });
  }, [initialX, initialY]);

  const handleMouseEnter = () => {
    // Al hacer hover, la palabra "hover" aparece y el texto se mueve a la derecha
    gsap.to(highlightRef.current, {
      opacity: 1,
      visibility: "visible",
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(textRef.current, {
      x: 0, // Mueve el texto a su posición original
      y: 0, // Mueve el texto a la posición inicial en Y
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    // Al quitar el hover, la palabra "hover" desaparece y el texto regresa
    gsap.to(highlightRef.current, {
      opacity: 0,
      visibility: "hidden",
      duration: 0.5,
      ease: "power2.in",
    });

    gsap.to(textRef.current, {
      x: initialX, // Regresa el texto a la posición inicial en X
      y: initialY, // Regresa el texto a la posición inicial en Y
      duration: 0.5,
      ease: "power2.in",
    });
  };

  return (
    <p
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="font-General-Medium text-primary text-xl"
    >
      {textBefore}{" "}
      <span
        ref={highlightRef}
        style={{ opacity: 0, visibility: "hidden" }}
        className="text-hiddenText"
      >
        {textHover}
      </span>{" "}
      <span ref={textRef} className="inline-block">
        {textAfter}
        {emoji && emojiName && (
          <Emoji
            className="inline ml-2" // Cambiar a inline para que el emoji esté en la misma línea
            alt={emojiName}
            emoji={emojiName}
            width={24}
            height={24}
          />
        )}
      </span>
    </p>
  );
}

export default HoverText;
