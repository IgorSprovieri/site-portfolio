import { Icon, SmallIcon, AbilityCard } from "@/components";
import styles from "./style.module.css";

export const Backend = () => {
  return (
    <div className={styles["abilities-container"]}>
      <AbilityCard icons={<Icon src="/icons/express-mini.svg" alt="Express" />}>
        Express para criação de rotas HTTP e Api&apos;s REST
      </AbilityCard>
      <AbilityCard
        icons={
          <>
            <SmallIcon src="/icons/postgres.svg" alt="Postgres" />
            <SmallIcon src="/icons/mongo.svg" alt="MongoDB" />
          </>
        }
      >
        Controle de DB SQL e NoSQL como Postgres e Mongo
      </AbilityCard>
      <AbilityCard
        icons={
          <>
            <SmallIcon src="/icons/type-orm-icon.png" alt="Type ORM" />
            <SmallIcon src="/icons/sequelize.svg" alt="Sequelize" />
          </>
        }
      >
        TypeORM e Sequelize para gerenciar DB através de Api&apos;s
      </AbilityCard>
      <AbilityCard
        icons={
          <>
            <SmallIcon src="/icons/aws.svg" alt="AWS" />
            <SmallIcon src="/icons/railway.svg" alt="Railway" />
          </>
        }
      >
        AWS, Railway e Vercel para deploy de Api&apos;s e sites
      </AbilityCard>
    </div>
  );
};
