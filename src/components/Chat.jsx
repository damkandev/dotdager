"use client";
import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt"; // Importar VanillaTilt
import tmi from "tmi.js"; // Importar tmi.js

function Chat({ height, width, channel, onPepinoDetected }) {
  const tiltRef = useRef(null); // Crear una referencia para aplicar VanillaTilt
  const [pepinoCount, setPepinoCount] = useState(0); // Estado para contar las menciones de "pepino"
  const [hostname, setHostname] = useState("");

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

  useEffect(() => {
    const client = new tmi.Client({
      channels: [channel],
    });

    client.connect();

    client.on("message", (channel, tags, message, self) => {
      if (message.toLowerCase().includes("pepino")) {
        setPepinoCount((prevCount) => prevCount + 1); // Incrementar el contador
        onPepinoDetected(pepinoCount + 1); // Pasar el nuevo contador al componente padre
      }
    });

    return () => {
      client.disconnect();
    };
  }, [channel, onPepinoDetected, pepinoCount]);

  return (
    <div
      ref={tiltRef} // Asignar la referencia para aplicar VanillaTilt
      style={{ height, width }}
      className="rounded-xl overflow-hidden"
    >
      {hostname && (
        <iframe
          src={`https://www.twitch.tv/embed/${channel}/chat`}
          width="100%" // Ajusta al ancho del div contenedor
          height="100%" // Ajusta al alto del div contenedor
          frameBorder="0"
          scrolling="no"
          allowFullScreen="true"
          title="Chat de Twitch"
          className="rounded-xl"
        ></iframe>
      )}
      <div className="pepino-count">
        Pepino count: {pepinoCount} {/* Mostrar el contador */}
      </div>
    </div>
  );
}

export default Chat;
