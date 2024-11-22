"use client";
import PickleJar from "@/components/PickleJar";
import HoverText from "@/components/HoverText";
import ImageGhost from "@/components/ImageGhost";

export default function Test() {
  return (
    <div className="">
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
      <ImageGhost />
    </div>
  );
}
