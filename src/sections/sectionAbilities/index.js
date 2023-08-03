import { useState } from "react";
import { SwitchButton } from "../../components/buttons";

import { Backend } from "./backend";
import { Frontend } from "./frontend";
import styles from "./style.module.css";

export const SectionAbilities = () => {
  const [renderFrontend, setRenderFrontend] = useState(true);

  return (
    <section className={styles["abilities-section"]}>
      {renderFrontend ? <Frontend></Frontend> : <Backend></Backend>}
      <SwitchButton
        texts={["Frontend", "Backend"]}
        value={renderFrontend}
        setValue={setRenderFrontend}
      ></SwitchButton>
    </section>
  );
};
