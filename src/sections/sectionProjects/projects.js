import {
  BigWindow,
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
  Window,
} from "@/components";
import { useState } from "react";

export const Projects = () => {
  const [embeddedUrl, setEmbeddedUrl] = useState(0);
  const [openWindow, setOpenWindow] = useState(0);
  const [windowTitle, setWindowTitle] = useState("");

  return (
    <>
      <BigWindow open={openWindow} setOpen={setOpenWindow} title={windowTitle}>
        <iframe
          src={embeddedUrl}
          title="Embedded Site"
          width="100%"
          height="100%"
        ></iframe>
      </BigWindow>
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
              setEmbeddedUrl("https://weekly.ispapps.com/src/pages/index.html");
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
              setEmbeddedUrl("https://app.supermarket-list.ispapps.com");
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
              setEmbeddedUrl(
                "https://github.com/IgorSprovieri/stock-controller-api"
              );
              setWindowTitle("Stock Controller Api");
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
