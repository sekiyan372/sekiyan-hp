import { FC, HTMLAttributes } from "react";
import Link from "next/link";
import Image from "next/image";
import ClassNames from "classnames";

type DivProps = HTMLAttributes<HTMLDivElement>;

type Props = {
  url: string;
  src: string;
  alt: string;
  width: number;
  height: number;
} & DivProps;

const LinkIcon: FC<Props> = ({ url, src, alt, width, height, className }) => {
  return (
    <div className={ClassNames("inline-block md:mx-5 mx-3", className)}>
      <Link href={url} passHref>
        <a target="_blank">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="cursor-pointer hover:opacity-50"
          />
        </a>
      </Link>
    </div>
  );
};

export default LinkIcon;
