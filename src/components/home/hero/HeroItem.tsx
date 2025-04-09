import Image from "next/image";
import Link from "next/link";

interface IProps {
  imgSrc: string;
  title: string;
  description: string;
  href: string;
  dataAos: string;
}

export default function HeroItem({ imgSrc, title, description, href, dataAos }: IProps) {
  return (
    <Link
      data-aos={dataAos}
      href={href}
      className="group relative flex h-[300px] w-full flex-col items-center justify-center gap-3 overflow-hidden text-center text-background duration-500 lg:h-[600px] md:h-[450px]"
    >
      <Image
        src={imgSrc}
        alt={title}
        fill
        loading="eager"
        className="-z-10 w-full object-cover duration-500 group-hover:scale-110 group-hover:brightness-50"
      />
      <h2 className="font-bold text-3xl duration-500 group-hover:text-primary xl:text-5xl">{title}</h2>
      <span className="text-muted">{description}</span>
    </Link>
  );
}
