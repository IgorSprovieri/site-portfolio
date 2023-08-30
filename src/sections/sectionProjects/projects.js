import {
  BigWindow,
  Css,
  Express,
  GitHubButton,
  Html,
  Js,
  Node,
  Postgres,
  React,
  StyledComponents,
  TypeORM,
  Typescript,
  Vercel,
  WebsiteButton,
  Window,
  MarkdownRender,
} from "@/components";
import { ProjectCard } from "../../components/projectCard";
import { useState } from "react";

export const Projects = () => {
  const [url, setUrl] = useState(0);
  const [openWindow, setOpenWindow] = useState(0);
  const [windowTitle, setWindowTitle] = useState("");

  return (
    <>
      <Window open={openWindow} setOpen={setOpenWindow} title={windowTitle}>
        <MarkdownRender url={url}></MarkdownRender>
      </Window>
      <ProjectCard
        src="/projects/weekly-web.svg"
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
          <WebsiteButton
            onClick={() => {
              setUrl(
                "https://api.github.com/repos/IgorSprovieri/weekly-web/contents/readme.md"
              );
              setWindowTitle("Weekly");
              setOpenWindow(true);
            }}
          >
            Visitar Website
          </WebsiteButton>
        }
      >
        Weekly é um aplicativo web para gerenciar tarefas semanais
      </ProjectCard>
      <ProjectCard
        src="/projects/supermarket-list-web.svg"
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
          <WebsiteButton
            onClick={() => {
              setUrl(
                "https://api.github.com/repos/IgorSprovieri/supermarket-list-web/contents/README.md"
              );
              setWindowTitle("Supermarket List");
              setOpenWindow(true);
            }}
          >
            Visitar Website
          </WebsiteButton>
        }
      >
        Um web app para ajudar nas compras de supermercado
      </ProjectCard>
      <ProjectCard
        src="/projects/stock-controller-api.svg"
        alt="Stock Controller"
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
        Button={
          <GitHubButton
            onClick={() => {
              setUrl(
                "https://api.github.com/repos/IgorSprovieri/stock-controller-api/contents/readme.md"
              );
              setWindowTitle("Readme");
              setOpenWindow(true);
            }}
          >
            Ver Repositório
          </GitHubButton>
        }
      >
        Uma api para controle de estoque de lojas, varejo, etc.
      </ProjectCard>
    </>
  );
};
