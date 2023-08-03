import { AbilityCard } from "../../components/abilityCard";
import { Icon, SmallIcon } from "../../components/images";
import styles from "./style.module.css";

export const Frontend = () => {
  return (
    <div className={styles["abilities-container"]}>
      <AbilityCard icons={<Icon src="/typescript.svg" alt="Typescript"></Icon>}>
        Typescript para tipagem e superset do JS
      </AbilityCard>
      <AbilityCard
        icons={
          <>
            <SmallIcon src="/react.svg" alt="React"></SmallIcon>
            <SmallIcon src="/next.svg" alt="Next"></SmallIcon>
          </>
        }
      >
        React e Next para criação de páginas HTML com Jsx e SSR
      </AbilityCard>
      <AbilityCard
        icons={
          <>
            <SmallIcon
              src="/styled-components.svg"
              alt="Styled Components"
            ></SmallIcon>
            <SmallIcon src="/chakra.svg" alt="Chakra UI"></SmallIcon>
          </>
        }
      >
        CSS Avançado com Styled Components e Chakra UI
      </AbilityCard>
      <AbilityCard icons={<Icon src="/redux.svg" alt="Redux"></Icon>}>
        Bibliotecas como Redux, Formik, Yup, React Query e Axios
      </AbilityCard>
    </div>
  );
};
