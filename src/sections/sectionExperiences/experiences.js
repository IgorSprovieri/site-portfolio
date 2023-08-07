import { ExperienceCard } from "@/components/experienceCard";

export const Experiences = () => {
  return (
    <>
      {" "}
      <ExperienceCard
        title="Freelancer - Desenvolvedor Fullstack"
        period={"MAR 2023"}
      >
        Desenvolvo trabalhos autônomos usando React, Next, Typescript e Node
      </ExperienceCard>
      <ExperienceCard title="Mapa da Programação - Tutor" period={"FEV 2023"}>
        Dou tutoria aos alunos nos cursos da empresa com foco em React e Node
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
        Atuei como tutor e redatei artigos semanais sobre programação de jogos
        no site crieseusjogos.com
      </ExperienceCard>
      <ExperienceCard
        title="Pinel Games - Desenvolvedor Unity C#"
        period={"SET 2020 - DEZ 2020"}
      >
        Atuei como desenvolvedor Unity em 2 jogos da empresa, testando,
        corrigindo bugs e desenvolvendo as principais mecânicas
      </ExperienceCard>
    </>
  );
};
