<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt"; // Importar VanillaTilt
import tmi from "tmi.js"; // Importar tmi.js
import ContadorDePepinos from "./ContadorDePepinos"; // Importar el componente ContadorDePepinos

function Chat({ height, width, channel, onPepinoDetected }) {
  const tiltRef = useRef(null); // Crear una referencia para aplicar VanillaTilt
  const [messages, setMessages] = useState([]); // Estado para almacenar los mensajes del chat
  const [pepinoCount, setPepinoCount] = useState(0); // Estado para contar las menciones de "pepino"
=======
"use client";
import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt"; // Importar VanillaTilt
import tmi from "tmi.js"; // Importar tmi.js

function Chat({ height, width, channel, onPepinoDetected }) {
  const tiltRef = useRef(null); // Crear una referencia para aplicar VanillaTilt
  const [pepinoCount, setPepinoCount] = useState(0); // Estado para contar las menciones de "pepino"
  const [hostname, setHostname] = useState("");
>>>>>>> 706fd18c4f9dd8a0810ab1606135155ef907128c

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
<<<<<<< HEAD
      setMessages((prevMessages) => [...prevMessages, { tags, message }]);
      if (message.toLowerCase().includes("pepino")) {
        setPepinoCount((prevCount) => prevCount + 1); // Incrementar el contador
        onPepinoDetected();
=======
      if (message.toLowerCase().includes("pepino")) {
        setPepinoCount((prevCount) => prevCount + 1); // Incrementar el contador
        onPepinoDetected(pepinoCount + 1); // Pasar el nuevo contador al componente padre
>>>>>>> 706fd18c4f9dd8a0810ab1606135155ef907128c
      }
    });

    return () => {
      client.disconnect();
    };
<<<<<<< HEAD
  }, [channel, onPepinoDetected]);
=======
  }, [channel, onPepinoDetected, pepinoCount]);
>>>>>>> 706fd18c4f9dd8a0810ab1606135155ef907128c

  return (
    <div
      ref={tiltRef} // Asignar la referencia para aplicar VanillaTilt
      style={{ height, width }}
      className="rounded-xl overflow-hidden"
    >
<<<<<<< HEAD
      <div className="p-2 bg-[#efffdf] border-2 border-primary text-primary font-bold mb-2">
        <ContadorDePepinos count={pepinoCount} />{" "}
        {/* Usar el componente ContadorDePepinos */}
      </div>
      <div className="chat-messages p-2 bg-[#efffdf] border-2 border-primary text-primary h-full overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message mb-2">
            <span className="chat-user font-General-Semibold text-primary">
              {msg.tags["display-name"]}:
            </span>{" "}
            <span className="chat-text font-General-Medium text-primary">
              {msg.message}
            </span>
          </div>
        ))}
=======
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
>>>>>>> 706fd18c4f9dd8a0810ab1606135155ef907128c
      </div>
    </div>
  );
}

export default Chat;
