import { ExperienceCard } from "@/components/experienceCard";

export const Experiences = () => {
  return (
    <>
      {" "}
      <ExperienceCard
        title="Freelancer - Desenvolvedor Fullstack"
        period={"MAR 2023"}
      >
        Desenvolvo trabalhos autônomos usando React, Next, Typescript, Node,
        TypeORM, Postgres e Mongo. Para deploy uso Railway e Vercel.
      </ExperienceCard>
      <ExperienceCard title="Seven Class - Tutor" period={"FEV 2023"}>
        Dou tutoria no curso Mapa da Programação em áreas como: Lógica de
        Programação, JavaScript, HTML, CSS, React, SQL, Docker, Node, Postgres,
        Mongo, Mongoose, Sequelize e AWS
      </ExperienceCard>
      <ExperienceCard
        title="Sprovieri Games - Desenvolvedor Unity C#"
        period={"JAN 2020 - AGO 2022"}
      >
        Desenvolvi em equipe 14 jogos autorais e de terceiros para diversas
        plataformas como: Steam, Nintendo Switch e Google Play
      </ExperienceCard>
      <ExperienceCard
        title="Crie Seus Jogos - Tutor e Redator"
        period={"JUN 2020 - SET 2021"}
      >
        Atuei como tutor em cursos sobre Unity C# e redatei artigos semanais
        sobre programação de jogos no site crieseusjogos.com
      </ExperienceCard>
      <ExperienceCard
        title="Pinel Games - Desenvolvedor Unity C#"
        period={"SET 2020 - DEZ 2020"}
      >
        Atuei como desenvolvedor Unity em 2 jogos da empresa. A minha funcão era
        testar, corrigir bugs, otimizar códigos e desenvolver as principais
        mecânicas.
      </ExperienceCard>
    </>
  );
};
