import { AbilityCard } from "../../components/abilityCard";
import { Icon, SmallIcon } from "../../components/images";
import styles from "./style.module.css";

export const Backend = () => {
  return (
    <div className={styles["abilities-container"]}>
      {" "}
      <AbilityCard icons={<Icon src="/express-mini.svg" alt="Express"></Icon>}>
        Express para criação de rotas HTTP e Api&apos;s REST
      </AbilityCard>
      <AbilityCard
        icons={
          <>
            <SmallIcon src="/postgres.svg" alt="Postgres"></SmallIcon>
            <SmallIcon src="/mongo.svg" alt="MongoDB"></SmallIcon>
          </>
        }
      >
        Controle de DB SQL e NoSQL como Postgres e Mongo
      </AbilityCard>
      <AbilityCard
        icons={
          <>
            <SmallIcon src="/type-orm-icon.png" alt="Type ORM"></SmallIcon>
            <SmallIcon src="/sequelize.svg" alt="Sequelize"></SmallIcon>
          </>
        }
      >
        TypeORM e Sequelize para gerenciar DB através de Api&apos;s
      </AbilityCard>
      <AbilityCard
        icons={
          <>
            <SmallIcon src="/aws.svg" alt="AWS"></SmallIcon>
            <SmallIcon src="/railway.svg" alt="Railway"></SmallIcon>
          </>
        }
      >
        AWS, Railway e Vercel para deploy de Api&apos;s e sites
      </AbilityCard>
    </div>
  );
};
