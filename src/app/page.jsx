"use client";
import Title from "@/components/Title";
import Paragrah from "@/components/Paragraph";
import Emoji from "@/components/Emoji";
import Button from "@/components/Button";
import PickleJar from "@/components/PickleJar";
import HoverText from "@/components/HoverText";
import ImageGhost from "@/components/ImageGhost";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
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
            <Button className="bg-primary text-claro" href="#">
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

        <div className="mt-8 md:mt-0 flex justify-center md:justify-start md:rotate-12">
          <PickleJar />
        </div>
      </section>

      <section className="h-screen w-auto flex flex-col md:flex-row justify-center items-center space-x-6">
        {/* Contenedor de texto */}
        <div className="order-2 md:order-1 text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start space-y-4">
          <Title className="uppercase text-[4rem] md:text-[6rem] leading-none">
            Quien mierda se supone que soy
          </Title>
          <Paragrah className="text-xl text-primary font-General-Medium">
            Mi nombre es Mariano llevo ya un tiempo creando contenido pero desde
            que empecé a hacer chistes de pitos me ha ido mejor, así que nada.
          </Paragrah>
          <Paragrah className="text-primary/40 font-General-Medium text-lg">
            Da tap o pasa el mouse sobre mis gustos.
          </Paragrah>
          {/* Lista */}
          <ul className="list-disc ml-5">
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
          </ul>
        </div>
        <ImageGhost className="order-1 md:order-2" />
      </section>
    </div>
  );
}
