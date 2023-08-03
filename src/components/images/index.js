import styles from "./style.module.css";
import Image from "next/image";

export const MyImage = () => {
  return (
    <Image
      className={styles["my-image"]}
      src="/My Photo.jpg"
      alt="Igor Sprovieri"
      width={380}
      height={380}
    />
  );
};

export const Icon = ({ src, alt }) => {
  return <Image src={src} alt={alt} width={40} height={40} />;
};

export const SmallIcon = ({ src, alt }) => {
  return <Image src={src} alt={alt} width={32} height={32} />;
};
