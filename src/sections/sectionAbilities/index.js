import { useState } from "react";
import { SwitchButton } from "@/components";
import { Backend } from "./backend";
import { Frontend } from "./frontend";
import styles from "./style.module.css";
import { Mobile } from "./mobile";

export const SectionAbilities = () => {
  const [rendered, setRendered] = useState(0);

  const RenderList = [Mobile, Frontend, Backend];

  const Render = RenderList[rendered];

  return (
    <section className={styles["abilities-section"]}>
      <Render />
      <SwitchButton
        texts={["Mobile", "Frontend", "Backend"]}
        value={rendered}
        setValue={setRendered}
      ></SwitchButton>
    </section>
  );
};
