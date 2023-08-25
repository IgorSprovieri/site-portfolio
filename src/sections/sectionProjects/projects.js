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
import { ProjectCard } from "./projectCard";
import { useState } from "react";

export const Projects = () => {
  const [url, setUrl] = useState(0);
  const [isIframe, setIsIframe] = useState(true);
  const [openWindow, setOpenWindow] = useState(0);
  const [windowTitle, setWindowTitle] = useState("");

  const Iframe = () => {
    return (
      <BigWindow open={openWindow} setOpen={setOpenWindow} title={windowTitle}>
        <iframe
          src={url}
          title="Embedded Site"
          width="100%"
          height="100%"
        ></iframe>
      </BigWindow>
    );
  };

  const Repo = () => {
    return (
      <Window open={openWindow} setOpen={setOpenWindow} title={windowTitle}>
        <MarkdownRender url={url}></MarkdownRender>
      </Window>
    );
  };

  return (
    <>
      {isIframe === true ? <Iframe></Iframe> : <Repo></Repo>}
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
          <WebsiteButton
            onClick={() => {
              setUrl("https://weekly.ispapps.com/src/pages/index.html");
              setWindowTitle("Weekly");
              setIsIframe(true);
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
          <WebsiteButton
            onClick={() => {
              setUrl("https://app.supermarket-list.ispapps.com");
              setWindowTitle("Supermarket List");
              setIsIframe(true);
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
        Button={
          <GitHubButton
            onClick={() => {
              setUrl(
                "https://api.github.com/repos/IgorSprovieri/stock-controller-api/contents/readme.md"
              );
              setWindowTitle("Readme");
              setIsIframe(false);
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
