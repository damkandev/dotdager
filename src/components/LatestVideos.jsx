import Link from "next/link";
import Image from "next/image";
function CardVideo({ src, href, alt, className }) {
  return (
    <Link href={href} target="_blank">
      <Image
        alt={alt}
        src={src}
        height={720}
        width={1200}
        className={className}
      />
    </Link>
  );
}
export default CardVideo;
