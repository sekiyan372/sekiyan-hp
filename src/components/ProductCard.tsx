import { FC } from "react";
import Image from "next/image";
import TechLabel from "~/components/TechLabel";

type Props = {
  url?: string;
  imagePath: string;
  alt: string;
  title?: string;
  organization?: string;
  desc: string;
  technologies?: string[];
};

export const ProductCard: FC<Props> = ({
  url,
  imagePath,
  alt,
  title,
  organization,
  desc,
  technologies,
}) => {
  return (
    <div className="md:w-104 m-3 border-4 rounded-lg p-3 hover:opacity-80 text-center">
      <a href={url} target="blank">
        <Image src={imagePath} alt={alt} />
        <div className="text-2xl">{title}</div>
        {organization && <div>({organization})</div>}
        <div className="my-3">{desc}</div>
        {technologies &&
          technologies.map((tech) => <TechLabel key={tech}>{tech}</TechLabel>)}
      </a>
    </div>
  );
};

export const BigProductCard: FC<Props> = ({
  url,
  imagePath,
  alt,
  title,
  organization,
  desc,
  technologies,
}) => {
  return (
    <div className="md:w-160 m-3 border-4 rounded-lg p-3 hover:opacity-80 text-center">
      <a href={url} target="blank">
        <Image src={imagePath} alt={alt} />
        <div className="text-2xl">{title}</div>
        {organization && <div>({organization})</div>}
        <div className="my-3">{desc}</div>
        {technologies &&
          technologies.map((tech) => <TechLabel key={tech}>{tech}</TechLabel>)}
      </a>
    </div>
  );
};
