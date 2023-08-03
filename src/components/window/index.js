import { Button } from "../buttons";
import { H2 } from "../texts";
import styles from "./style.module.css";

export const Window = ({ children, title, open, setOpen }) => {
  return (
    <>
      {open === true ? (
        <div className={styles["window-background"]}>
          <div className={styles["window-container"]}>
            <div className={styles["window-header"]}>
              <H2>{title}</H2>
              <Button onClick={() => setOpen(false)}>X</Button>
            </div>
            <div className={styles["window-content"]}>{children}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};