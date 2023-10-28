import { Icon, SmallIcon, AbilityCard } from "@/components";
import styles from "./style.module.css";

export const Frontend = () => {
  return (
    <div className={styles["abilities-container"]}>
      <AbilityCard
        icons={
          <>
            <SmallIcon src="/icons/react.svg" alt="React" />
            <SmallIcon src="/icons/next.svg" alt="Next" />
          </>
        }
      >
        React e Next para criação de páginas HTML com Jsx e SSR
      </AbilityCard>
      <AbilityCard
        icons={
          <>
            <SmallIcon
              src="/icons/styled-components.svg"
              alt="Styled Components"
            />
            <SmallIcon src="/icons/chakra.svg" alt="Chakra UI" />
          </>
        }
      >
        CSS Avançado com Styled Components e Chakra UI
      </AbilityCard>
      <AbilityCard icons={<Icon src="/icons/redux.svg" alt="Redux" />}>
        Bibliotecas como Redux, Formik, Yup, React Query e Axios
      </AbilityCard>
      <AbilityCard icons={<Icon src="/icons/nextron.svg" alt="Nextron" />}>
        Nextron para criação de aplicações desktop
      </AbilityCard>
    </div>
  );
};
