import { MenuButton, SocialIcons } from "@/components";
import styles from "./style.module.css";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <menu className={styles["menu"]}>
        <MenuButton scrollTo={"section-home"}>Home</MenuButton>
        <MenuButton scrollTo={"section-abilities"}>Habilidades</MenuButton>
        <MenuButton scrollTo={"section-portfolio"}>Portfólio</MenuButton>
        <MenuButton scrollTo={"section-experiences"}>Experiências</MenuButton>
        <MenuButton scrollTo={"section-frag-components"}>
          Frag Components
        </MenuButton>
      </menu>
      <SocialIcons></SocialIcons>
    </header>
  );
};
