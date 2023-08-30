import Image from "next/image";

export const Icon = ({ src, alt }) => {
  return <Image src={src} alt={alt} width={40} height={40} />;
};

export const SmallIcon = ({ src, alt }) => {
  return <Image src={src} alt={alt} width={32} height={32} />;
};
