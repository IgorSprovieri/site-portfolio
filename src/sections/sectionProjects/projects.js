import {
  Css,
  Express,
  GitHubButton,
  Html,
  Js,
  Node,
  Postgres,
  ProjectCard,
  React,
  StyledComponents,
  TypeORM,
  Typescript,
  Vercel,
  WebsiteButton,
} from "@/components";

export const Projects = () => {
  return (
    <>
      {" "}
      <ProjectCard
        src="/weekly.png"
        alt="Weekly"
        title="Weekly"
        Icons={
          <>
            <Html></Html>
            <Css></Css>
            <Js></Js>
          </>
        }
        Button={
          <WebsiteButton onClick={() => window.open()}>
            Visitar Website
          </WebsiteButton>
        }
      >
        Weekly é um aplicativo web para gerenciar tarefas semanais
      </ProjectCard>
      <ProjectCard
        src="/supermarket-list.png"
        alt="Supermarket List"
        title="Supermarket List"
        Icons={
          <>
            <React></React>
            <StyledComponents></StyledComponents>
            <Vercel></Vercel>
          </>
        }
        Button={
          <WebsiteButton onClick={() => window.open()}>
            Visitar Website
          </WebsiteButton>
        }
      >
        Um web app para ajudar nas compras de supermercado
      </ProjectCard>
      <ProjectCard
        src="/Rest API.svg"
        alt="Rest API"
        title="Stock Controller"
        Icons={
          <>
            <Node></Node>
            <Typescript></Typescript>
            <Postgres></Postgres>
            <Express></Express>
            <TypeORM></TypeORM>
          </>
        }
        Button={<GitHubButton>Ver Repositório</GitHubButton>}
      >
        Uma api para controle de estoque de lojas, varejo, etc.
      </ProjectCard>
    </>
  );
};
