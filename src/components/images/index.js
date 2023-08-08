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

export const RepositoryImage = ({ children, language }) => {
  const languageImages = [
    {
      name: "JavaScript",
      src: "javascript.svg",
    },
    {
      name: "TypeScript",
      src: "typescript.svg",
    },
    {
      name: "HTML",
      src: "html.svg",
    },
  ];

  return (
    <div className={styles["repository-image-container"]}>
      <div className={styles["repository-image-circle"]}></div>
      <div className={styles["repository-image-content-container"]}>
        <div className={styles["repository-image-text"]}>
          {children.toUpperCase()}
        </div>
        <div className={styles["repository-image-language"]}>
          <Image
            src={
              languageImages.find((languageImage) => {
                return languageImage.name == language;
              })?.src || "/GitHub.png"
            }
            alt="language"
            width={44}
            height={44}
          ></Image>
        </div>
      </div>
    </div>
  );
};
