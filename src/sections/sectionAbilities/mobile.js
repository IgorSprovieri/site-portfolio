import { Icon, SmallIcon, AbilityCard } from "@/components";
import styles from "./style.module.css";
import Image from "next/image";

export const Mobile = () => {
  return (
    <div className={styles["abilities-container"]}>
      <AbilityCard
        icons={<Icon src="/icons/typescript.svg" alt="Typescript" />}
      >
        Typescript para tipagem e superset do JavaScript
      </AbilityCard>
      <AbilityCard icons={<Icon src="/icons/react.svg" alt="React Native" />}>
        React Native para desenvolvimento IOS e Android
      </AbilityCard>
      <AbilityCard
        icons={
          <Image src="/icons/expo.svg" alt="Expo" width={71.05} height={20} />
        }
      >
        Framework para a criação de apps com React Native
      </AbilityCard>
      <AbilityCard icons={<Icon src="/icons/firebase.svg" alt="Firebase" />}>
        Firebase para database, storage, auth e outros
      </AbilityCard>
    </div>
  );
};
