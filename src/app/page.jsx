"use client";
import Title from "@/components/Title";
import Paragrah from "@/components/Paragraph";
import Emoji from "@/components/Emoji";
import Button from "@/components/Button";
import PickleJar from "@/components/PickleJar";
import HoverText from "@/components/HoverText";
import ImageGhost from "@/components/ImageGhost";
import Image from "next/image";
import CardVideo from "@/components/LatestVideos";
import Link from "next/link";
import Lenis from "@studio-freight/lenis"; // Importa la librería
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Chat from "@/components/Chat";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaGithub,
  FaTwitch,
  FaSpotify,
} from "react-icons/fa";
import Puto from "@/sections/Puto";
gsap.registerPlugin(ScrollToPlugin); // Registramos el plugin

export default function Home() {
  const [showPepinoText, setShowPepinoText] = useState(false);

  const handlePepinoDetected = () => {
    setShowPepinoText(true);
  };
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Duración del desplazamiento
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Efecto de suavizado
      smoothWheel: true, // Activar desplazamiento suave con el mouse
      smoothTouch: true, // Activar desplazamiento suave en dispositivos táctiles
    });

    // Animación de scroll suave
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Limpiar en el desmontaje del componente
    };
  }, []);
  return (
    <div className="min-h-screen mt-[6rem] md:mt-0 flex flex-col p-4">
      <section className="h-screen w-auto flex flex-col md:flex-row justify-center items-center space-x-6">
        <div className="text-center md:text-left md:w-1/2">
          <Title className="uppercase text-[4rem] md:text-[6rem] leading-none">
            Acá hay chistes de pit* y código
          </Title>
          <div className="flex justify-center md:justify-start mt-4">
            <Paragrah className="text-lg font-General-Medium">
              Programador FullStack Senior, Amante de las guitarras, los gatos,
              filosofía y...{" "}
              <Emoji
                className=""
                emoji="cucumber"
                height={20}
                width={30}
                alt="Emoji de pepino"
              />
            </Paragrah>
          </div>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <Button className="bg-primary text-claro" href="#sobre-mi">
              Ver más{" "}
              <Emoji
                emoji="flushed"
                height={20}
                width={20}
                className="ml-2"
                alt="Emoji sonrojado"
              />
            </Button>
            <Button
              className="bg-secondary ml-2 text-primary"
              href="https://jorshbg.dev/"
            >
              Chau
            </Button>
          </div>
        </div>

        <div className="mt-8 md:mt-0 flex justify-center md:justify-start transition-transform duration-150 md:rotate-12">
          <PickleJar />
        </div>
      </section>

      <section
        className="h-screen w-auto flex flex-col md:flex-row justify-center items-center space-x-6 mt-[3rem] md:mt-0"
        id="sobre-mi"
      >
        {/* Contenedor de texto */}
        <div className="order-2 md:order-1 text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start space-y-4">
          <Title className="uppercase text-[4rem] md:text-[6rem] leading-none text-left">
            Quien mie*** se supone que soy
          </Title>
          <Paragrah className="text-xl text-left text-primary font-General-Medium md:max-w-[50rem]">
            Mi nombre es Mariano llevo ya un tiempo creando contenido pero desde
            que empecé a hacer chistes de pitos me ha ido mejor, así que nada.
          </Paragrah>
          <Paragrah className="text-primary/40 font-General-Medium text-lg text-left w-full md:w-auto">
            Da tap o pasa el mouse sobre mis gustos.
          </Paragrah>
          {/* Lista */}
          <ul className="list-disc ml-12 md:ml-5 text-left w-full md:w-auto">
            <li>
              <HoverText
                textBefore="Me encantan los"
                textHover="pitos"
                textAfter="gatos"
                emoji={true}
                emojiName="cat"
                initialX={-42}
              />
            </li>
            <li>
              <HoverText
                textBefore="Me gusta"
                textHover="n los pepinos"
                textAfter="programar"
                emoji={true}
                emojiName="laptop"
                initialX={-110}
              />
            </li>
            <li>
              <Paragrah className=" font-General-Medium text-primary text-lg sm:text-xl">
                Me gustan las guitarras{" "}
                <Emoji height={24} width={24} emoji="guitar" />{" "}
              </Paragrah>
            </li>
            <li>
              <Paragrah className=" font-General-Medium text-primary text-lg sm:text-xl">
                La filosofía, por que me las doy de alto pensador
              </Paragrah>
            </li>
            <li>
              <Paragrah className=" font-General-Medium text-primary text-lg sm:text-xl">
                Leer mucho y los pepinos{" "}
                <Emoji height={24} width={24} emoji="books" />
              </Paragrah>
            </li>
          </ul>
        </div>
        <ImageGhost className="mt-[2rem] md:mt-0 order-2 md:order-1 h-full md:h-[40rem] w-full md:w-[40rem]" />
      </section>
      <section
        className="h-screen w-auto flex flex-col md:flex-row justify-center items-center space-x-6 mt-[3rem] md:mt-0"
        id="musica"
      >
        <iframe
          className="rounded-sm w-full md:w-[40%] ml-2 order-2 mt-10"
          src="https://open.spotify.com/embed/artist/6bkClBMJd4qKxJp0J5vHsz?utm_source=generator"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        {/* Contenedor de texto */}
        <div className="order-1 md:order-1 text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start space-y-4">
          <Title className="uppercase text-[4rem] md:text-[6rem] leading-none text-left max-w-[30rem] md:max-w-[50rem]">
            Mi faceta de musico
          </Title>
          <Image
            src="/images/sticker.png"
            width={600}
            height={600}
            className="h-20 md:h-40 w-20 md:w-40 md:mt-[50em] absolute ml-[20rem] "
          />
          <Paragrah className="text-xl text-left text-primary font-General-Medium pt-0 mt-0 md:max-w-[50rem]">
            Usualmente expreso el como me siento a través de la musica, tengo
            sentimientos muy complejos por eso temas como{" "}
            <q>HTML is not a programming language</q>.
          </Paragrah>
        </div>
      </section>
      <section
        className="flex flex-col items-center justify-center w-full py-10 h-screen"
        id="videos"
      >
        <Title className="uppercase text-[4rem] md:text-[4rem] leading-none text-center ">
          Mis ultimas obras de arte
        </Title>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="">
            <CardVideo
              href="https://www.youtube.com/watch?v=DaRes1TR3XQ&t=2s"
              src="/images/mini1.jpg"
              className={
                "h-[15rem] w-auto rounded-xl object-cover border border-primary"
              }
              alt="Miniatura numero 1"
            />
          </div>
          {/* Card 2 */}
          <div className="">
            <CardVideo
              href="https://www.youtube.com/watch?v=YQfRVo5UwOM&t=75s"
              src="/images/mini2.jpg"
              className={
                "h-[15rem] w-auto rounded-xl object-cover border border-primary"
              }
              alt="Miniatura numero 2"
            />
          </div>
          {/* Card 3 */}
          <div className="">
            <CardVideo
              href="https://www.youtube.com/watch?v=FMfLfYus6Yc"
              src="/images/mini3.jpg"
              className={
                "h-[15rem] w-auto rounded-xl object-cover border border-primary"
              }
              alt="Miniatura numero 3"
            />
          </div>
        </div>

        <div className="flex mt-[2rem]">
          <input
            type="text"
            name="email"
            id="email"
            className="rounded-full border-2 border-primary bg-transparent px-6 font-General-Medium placeholder:text-primary/30"
            placeholder="pepino@pepinomail.com"
          />
          <Button
            className="bg-primary ml-4 text-claro"
            href="https://www.youtube.com/watch?v=7YZCUpnaTfg"
          >
            Unirme
          </Button>
        </div>
        <Paragrah className="font-General-Medium mt-4">
          Poné tu correo acá asi te hincho más las bolas 🥚🥚
        </Paragrah>
      </section>
      <section
        id="final"
        className="flex flex-col items-center justify-center w-full py-10 h-screen"
      >
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
      <section
        className="h-screen w-auto flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6"
        id="musica"
      >
        <Chat
          height={600}
          width="30%"
          channel="dagerxiv"
          className="order-2"
          onPepinoDetected={handlePepinoDetected}
        />

        {/* Contenedor de texto */}
        <div className="order-1 md:order-1 text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start space-y-4">
          <Title className="uppercase text-[4rem] md:text-[6rem] leading-none text-left max-w-[30rem] md:max-w-[50rem]">
            Mi chat
          </Title>

          <Paragrah className="text-xl text-left text-primary font-General-Medium pt-0 mt-0 md:max-w-[50rem]">
            Pone pepino en el chat de twitch y ve la magia....
          </Paragrah>
          {showPepinoText && (
            <Paragrah className="text-xl text-left text-primary font-General-Medium pt-0 mt-0 md:max-w-[50rem]">
              ¡Pepino detectado en el chat!
            </Paragrah>
          )}
        </div>
      </section>
    </div>
  );
}
