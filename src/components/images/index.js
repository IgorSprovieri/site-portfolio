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
