"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

function ImageGhost({ className }) {
  // Aceptamos className como prop
  const pfpRef = useRef(null); // Referencia para dager_pfp
  const pepinosRef = useRef(null); // Referencia para dager_pepinos

  useEffect(() => {
    // Inicializar la opacidad de dager_pepinos
    gsap.set(pepinosRef.current, { opacity: 1 });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(pfpRef.current, { opacity: 0, duration: 0.5 });
  };

  const handleMouseLeave = () => {
    gsap.to(pfpRef.current, { opacity: 1, duration: 0.5 });
  };

  return (
    <div
      className={`relative flex justify-center items-center w-full h-full ${className}`} // Aplica el className recibido
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Imagen de pfp */}
      <img
        ref={pfpRef}
        src="/images/dager_pfp.png"
        alt="Dager pfp"
        className="absolute top-0 left-0 w-full h-full object-contain z-10" // Asegura que la imagen cubra todo el espacio sin deformarse
      />
      {/* Imagen de pepinos */}
      <img
        ref={pepinosRef}
        src="/images/dager_pepinos.png"
        alt="Dager pepinos"
        className="absolute top-0 left-0 w-full h-full object-contain z-0" // Igualmente, cubre todo el espacio
      />
    </div>
  );
}

export default ImageGhost;
