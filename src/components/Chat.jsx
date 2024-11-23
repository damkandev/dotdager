import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt"; // Importar VanillaTilt
import tmi from "tmi.js"; // Importar tmi.js
import ContadorDePepinos from "./ContadorDePepinos"; // Importar el componente ContadorDePepinos

function Chat({ height, width, channel, onPepinoDetected }) {
  const tiltRef = useRef(null); // Crear una referencia para aplicar VanillaTilt
  const [messages, setMessages] = useState([]); // Estado para almacenar los mensajes del chat
  const [pepinoCount, setPepinoCount] = useState(0); // Estado para contar las menciones de "pepino"

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
      setMessages((prevMessages) => [...prevMessages, { tags, message }]);
      if (message.toLowerCase().includes("pepino")) {
        setPepinoCount((prevCount) => prevCount + 1); // Incrementar el contador
        onPepinoDetected();
      }
    });

    return () => {
      client.disconnect();
    };
  }, [channel, onPepinoDetected]);

  return (
    <div
      ref={tiltRef} // Asignar la referencia para aplicar VanillaTilt
      style={{ height, width }}
      className=" overflow-hidden mt-[13rem]"
    >
      <div className="p-2 bg-transparent rounded-xl border-2 border-primary text-primary font-bold mb-2">
        <ContadorDePepinos count={pepinoCount} />{" "}
        {/* Usar el componente ContadorDePepinos */}
      </div>
      <div className="chat-messages rounded-lg p-2 bg-[#efffdf] border-2 border-primary text-primary h-[20rem] overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message mb-2 ">
            <span className="chat-user font-General-Semibold text-primary">
              {msg.tags["display-name"]}:
            </span>{" "}
            <span className="chat-text font-General-Medium text-primary">
              {msg.message}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
