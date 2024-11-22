"use client";
import Image from "next/image";

const Emoji = ({ className, alt, emoji, width, height }) => {
  return (
    <Image
      className={`inline-block ${className}`} // Asegura que sea inline
      alt={alt}
      src={`/images/${emoji}.png`}
      width={width}
      height={height}
    />
  );
};

export default Emoji;
