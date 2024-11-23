import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt"; // Importar VanillaTilt

function Chat({ height, width, channel }) {
  const tiltRef = useRef(null); // Crear una referencia para aplicar VanillaTilt

  useEffect(() => {
    // Inicializar VanillaTilt en el div contenedor
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25, // Máxima inclinación en grados
        speed: 400, // Velocidad del movimiento
        glare: true, // Efecto de reflejo
        "max-glare": 0.5, // Intensidad del reflejo
        scale: 1.05, // Escalado al mover el ratón
      });
    }

    return () => {
      // Limpiar cuando el componente se desmonte
      if (tiltRef.current) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={tiltRef} // Asignar la referencia para aplicar VanillaTilt
      style={{ height, width }}
      className="rounded-xl overflow-hidden"
    >
      <iframe
        src={`https://www.twitch.tv/embed/${channel}/chat?parent=${window.location.hostname}&theme=dark`}
        width="100%" // Ajusta al ancho del div contenedor
        height="100%" // Ajusta al alto del div contenedor
        frameBorder="0"
        scrolling="no"
        allowFullScreen="true"
        title="Chat de Twitch"
        className="rounded-xl"
      ></iframe>
    </div>
  );
}

export default Chat;
