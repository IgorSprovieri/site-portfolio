import { ExperienceCard } from "./experienceCard";

export const Experiences = () => {
  return (
    <>
      {" "}
      <ExperienceCard title="Mapa da Programação - Tutor" period={"FEV 2023"}>
        Dou tutoria aos alunos nos cursos da empresa sobre desenvolvimento web e
        mobile. Tenho aprendido a ensinar e ter paciência com quem está
        iniciando.
      </ExperienceCard>
      <ExperienceCard
        title="Voluntariado - Desenvolvedor Fullstack"
        period={"FEV 2023"}
      >
        Desenvolvi um site de inscrição para eventos para a Igreja Cristã
        Maranata e um sistema auxiliar de gestão para o Auto Posto Canindé. As
        tecnologias utilizadas foram: React, Next, Styled Components, Express,
        TypeORM, mongo e postgres.
      </ExperienceCard>
      <ExperienceCard
        title="Sprovieri Games - Desenvolvedor Unity C#"
        period={"JAN 2020 - AGO 2022"}
      >
        Desenvolvi em equipe 14 jogos autorais e de terceiros para diversas
        plataformas como: Steam, Nintendo Switch e Google Play. Aprendi a
        trabalhar em equipe, cumprir metas e lidar com prazo.
      </ExperienceCard>
      <ExperienceCard
        title="Crie Seus Jogos - Tutor e Redator"
        period={"JUN 2020 - SET 2021"}
      >
        Atuei como tutor com foco em Unity C# nos cursos da empresa e redatei
        artigos semanais sobre programação de jogos no site crieseusjogos.com.
      </ExperienceCard>
      <ExperienceCard
        title="Pinel Games - Desenvolvedor Unity C#"
        period={"SET 2020 - DEZ 2020"}
      >
        Atuei como desenvolvedor Unity em 2 jogos da empresa, testando,
        corrigindo bugs e desenvolvendo as principais mecânicas. Coloquei em
        prática a habilidade de procurar por soluções fazendo testes, lendo
        documentações e pesquisando.
      </ExperienceCard>
    </>
  );
};
