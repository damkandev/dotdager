"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation"; // Importar useRouter para redireccionar

function PickleJar() {
  const pickleRef = useRef(null);
  const router = useRouter(); // Hook de Next.js para redirigir

  // Animación de temblor y movimiento hacia arriba
  const handleClick = () => {
    gsap.to(pickleRef.current, {
      x: "+=20", // Mueve el pepino hacia la derecha
      y: "+=5", // Mueve el pepino hacia arriba
      duration: 0.05, // Duración corta para el temblor
      repeat: 9, // Repite el movimiento para simular el temblor
      yoyo: true, // Hacer que se mueva en sentido contrario después de cada repetición
      ease: "power1.inOut", // Easing suave para el movimiento
      onStart: () => {
        // Comienza la animación de movimiento hacia arriba acelerado
        gsap.to(pickleRef.current, {
          y: "-100vh", // Subir hacia fuera de la jarra
          duration: 0.8, // Duración más corta para una subida más rápida
          ease: "power3.in", // Aceleración aún más fuerte
        });
      },
      onComplete: () => {
        // Redirigir a otro link después de completar el temblor y movimiento
        router.push("/lumberjack"); // Cambia "/nuevo-link" por la URL a la que quieras redirigir
      },
    });
  };

  useEffect(() => {
    gsap.to(pickleRef.current, {
      y: -40,
      duration: 1.5,
      rotation: -20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      onReverseComplete: () => {
        gsap.to(pickleRef.current, { rotation: 20 });
      },
    });
  }, []);

  return (
    <div className="relative flex justify-center items-center">
      {/* Contenedor de la jarra y el pepino con flexbox */}
      <div className="relative flex justify-center items-center mt-5 md:-mt-12 ">
        {/* Jarra */}
        <img
          className="w-[300px] md:w-[400px] cursor-pointer z-10" // Ajuste de tamaño responsivo para la jarra
          src="/images/jarra.png"
          alt="jarra"
          onClick={handleClick} // Detectar el clic en la imagen
        />
        <img
          ref={pickleRef}
          className="absolute mt-[5rem] md:mt-[4rem] cursor-pointer w-[220px] md:w-[250px] z-0" // Ajuste de tamaño para el pepino
          src="/images/pickle_dotdager.png"
          alt="pickle"
        />
      </div>

      <div className="absolute flex flex-col items-center mt-[34rem] md:mt-[35rem] space-y-0">
        <p className="text-center font-General-Medium text-primary  text-lg">
          Reservado para Dager
        </p>
        <p className="text-center font-General-Semibold text-primary text-lg uppercase">
          (No tocar)
        </p>
      </div>
    </div>
  );
}

export default PickleJar;
