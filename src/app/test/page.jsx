"use client";
import PickleJar from "@/components/PickleJar";
import HoverText from "@/components/HoverText";
import ImageGhost from "@/components/ImageGhost";
import CardVideo from "@/components/LatestVideos";
import Navbar from "@/components/Navbar";
import TitleScramble from "@/components/TitleScramble";
export default function Test() {
  return (
    <div className="">
      <Navbar />
      <TitleScramble className="uppercase text-[4rem] md:text-[6rem] leading-none">
        Acá hay chistes de pit* y código
      </TitleScramble>
      <PickleJar />
      <HoverText
        textBefore="Me encantan los"
        textHover="pitos"
        textAfter="gatos"
      />
      <div>
        <HoverText
          textBefore="Me encantan los"
          textHover="pitos"
          textAfter="gatos"
          emoji={true}
          emojiName="cat"
        />
      </div>
      <CardVideo
        href="#"
        src="/images/mini1.jpg"
        className={
          "h-[15rem] w-auto rounded-xl object-cover border border-primary"
        }
        alt="Miniatura numero 1"
      />
      <CardVideo
        href="#"
        src="/images/mini1.jpg"
        className={
          "h-[15rem] w-auto rounded-xl object-cover border border-primary"
        }
        alt="Miniatura numero 1"
      />
      <CardVideo
        href="#"
        src="/images/mini1.jpg"
        className={
          "h-[15rem] w-auto rounded-xl object-cover border border-primary"
        }
        alt="Miniatura numero 1"
      />
      <CardVideo
        href="#"
        src="/images/mini1.jpg"
        className={
          "h-[15rem] w-auto rounded-xl object-cover border border-primary"
        }
        alt="Miniatura numero 1"
      />
      <CardVideo
        href="#"
        src="/images/mini1.jpg"
        className={
          "h-[15rem] w-auto rounded-xl object-cover border border-primary"
        }
        alt="Miniatura numero 1"
      />
      <CardVideo
        href="#"
        src="/images/mini1.jpg"
        className={
          "h-[15rem] w-auto rounded-xl object-cover border border-primary"
        }
        alt="Miniatura numero 1"
      />
      <ImageGhost />
      <ImageGhost />

      <ImageGhost />
      <ImageGhost />
      <ImageGhost />
      <ImageGhost />
      <ImageGhost />
      <ImageGhost />
      <ImageGhost />
      <ImageGhost />
      <ImageGhost />
    </div>
  );
}
