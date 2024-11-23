import { useEffect } from "react";
import gsap from "gsap";
import Title from "@/components/Title";
import Paragrah from "@/components/Paragraph";
import Link from "next/link";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaGithub,
  FaTwitch,
  FaSpotify,
} from "react-icons/fa";

function Puto() {
  useEffect(() => {
    // Animación al cargar la sección
    gsap.fromTo(
      ".title-animate", // Selecciona el texto
      {
        opacity: 0, // Empieza con opacidad 0
        x: -100, // Empieza desplazado hacia la izquierda
      },
      {
        opacity: 1, // Cambia a opacidad 100
        x: 0, // Finaliza en su posición original
        duration: 2, // Duración de la animación
        ease: "power2.out", // Efecto de easing suave
      }
    );
  }, []);

  return (
    <section className="flex flex-col items-center justify-center w-full py-10 h-screen">
      <Title className="title-animate uppercase text-[4rem] md:text-[7rem] leading-none text-center">
        PUTO EL QUE LEE
      </Title>
      <div className="text-primary flex px-4">
        <Link href="https://www.instagram.com/dager.32/" className="mx-2">
          <FaInstagram size={35} />
        </Link>
        <Link href="https://www.tiktok.com/@elantrodedager" className="mx-2">
          <FaTiktok size={35} />
        </Link>
        <Link href="https://www.youtube.com/@DotDager" className="mx-2">
          <FaYoutube size={35} />
        </Link>
        <Link
          href="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqa29McUdtSGFpODRSeWMwYjUyTGIzU0xORG5HUXxBQ3Jtc0tsMlR2NzltejdzdExkWFhXY193VUNBdHhfLTFxZTRVXzhDRkpkQmJwelVvN1RoV04wNWdRcU9FcE9VdkRCcXVNeThLazZfaC1XVTd2OG13UUNGQ19YSzJ5cjNLMmRHX2lQcHB1QTRaRjdlY2RfaWNLRQ&q=https%3A%2F%2Fdiscord.gg%2F4NFk6TamAB"
          className="mx-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
            ></path>
          </svg>
        </Link>
      </div>
      <Paragrah className="text-xl text-left text-primary font-General-Medium pt-0 mt-0 md:max-w-[50rem]">
        Seguime o hay tabla
      </Paragrah>
    </section>
  );
}

export default Puto;
