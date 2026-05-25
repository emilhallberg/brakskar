import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  backgroundImage?: string;
  backgroundColor?: "#f2e5d9" | "#efdccc" | "#dbc2ad" | "#d1b7a1";
  linkHref?: string;
  linkText?: string;
  children?: ReactNode;
}

const Section = ({
  linkHref,
  linkText,
  backgroundImage,
  backgroundColor = "#f2e5d9",
  children,
}: Props) => (
  <section
    className="relative grid min-h-full grid-rows-[1fr_max-content] border-r border-white p-10 pt-[20vh]"
    style={{ backgroundColor }}
  >
    {backgroundImage && (
      <Image
        src={backgroundImage}
        alt="Brakskär"
        fill
        priority
        sizes="(min-width: 768px) 360px, min(360px, 100vw)"
        className="object-cover"
      />
    )}
    <article className="relative z-10 min-w-0 [&_li]:my-2 [&_p]:my-2">
      {children}
    </article>
    {linkHref && (
      <Link
        href={linkHref}
        className="relative z-10 mb-5 grid place-items-center border border-black p-2.5 transition hover:border-blue-700 hover:bg-blue-700 hover:text-white"
      >
        {linkText ?? "Läs mer"}
      </Link>
    )}
  </section>
);

export default Section;
