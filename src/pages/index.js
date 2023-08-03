import {
  AbilityCard,
  Css,
  Express,
  GitHubButton,
  Html,
  Icon,
  Js,
  MenuButton,
  MyDescription,
  MyImage,
  Node,
  Postgres,
  ProjectCard,
  React,
  SmallIcon,
  SocialIcons,
  StyledComponents,
  Title,
  TypeORM,
  Typescript,
  Vercel,
  WebsiteButton,
} from "@/components";
import { SectionAbilities, SectionDescription } from "@/sections";

export default function Home() {
  return (
    <>
      <header className="c-header">
        <menu className="c-menu">
          <MenuButton scrollTo={"section-home"}>Home</MenuButton>
          <MenuButton scrollTo={"section-abilities"}>Habilidades</MenuButton>
          <MenuButton scrollTo={"section-portfolio"}>Portfólio</MenuButton>
          <MenuButton scrollTo={"section-experiences"}>Experiências</MenuButton>
          <MenuButton scrollTo={"section-frag-components"}>
            Frag Components
          </MenuButton>
        </menu>
        <SocialIcons></SocialIcons>
      </header>
      <main className="c-main" name="section-home">
        <SectionDescription></SectionDescription>

        <Title
          firstText={"Habilidades que"}
          secondText={"Domino"}
          name={"section-abilities"}
        ></Title>

        <SectionAbilities></SectionAbilities>

        <Title
          firstText={"Portfólio de"}
          secondText={"Projetos"}
          name={"section-portfolio"}
        ></Title>

        <section className="c-section c-section--scrollOnMobile">
          <div className="c-section__container c-section__container--scrollOnMobile">
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
          </div>
        </section>

        <Title
          firstText={"Minhas"}
          secondText={"Experiências"}
          name={"section-experiences"}
        ></Title>

        <section className="c-section">
          <div className="c-experience-box">
            <h3 className="c-h3 isBlue">
              Freelancer - Desenvolvedor Fullstack
            </h3>
            <h4 className="c-h4">MAR 2023</h4>
            <p className="c-p">
              Desenvolvo trabalhos autônomos usando React, Next, Typescript e
              Node
            </p>
          </div>
          <div className="c-experience-box">
            <h3 className="c-h3 isBlue">Mapa da Programação - Tutor</h3>
            <h4 className="c-h4">FEV 2023</h4>
            <p className="c-p">
              Dou tutoria aos alunos nos cursos da empresa com foco em React e
              Node
            </p>
          </div>
          <div className="c-experience-box">
            <h3 className="c-h3 isBlue">
              Sprovieri Games - Desenvolvedor Unity C#
            </h3>
            <h4 className="c-h4">JAN 2020 - AGO 2022</h4>
            <p className="c-p">
              Desenvolvi em equipe 14 jogos autorais e de terceiros para
              diversas plataformas como: Steam, Nintendo Switch e Google Play
            </p>
          </div>
          <div className="c-experience-box">
            <h3 className="c-h3 isBlue">Crie Seus Jogos - Tutor e Redator</h3>
            <h4 className="c-h4">JUN 2020 - SET 2021</h4>
            <p className="c-p">
              Atuei como tutor e redatei artigos semanais sobre programação de
              jogos no site crieseusjogos.com
            </p>
          </div>
          <div className="c-experience-box">
            <h3 className="c-h3 isBlue">
              Pinel Games - Desenvolvedor Unity C#
            </h3>
            <h4 className="c-h4">SET 2020 - DEZ 2020</h4>
            <p className="c-p">
              Atuei como desenvolvedor Unity em 2 jogos da empresa, testando,
              corrigindo bugs e desenvolvendo as principais mecânicas
            </p>
          </div>
        </section>

        <Title
          firstText={"Frag"}
          secondText={"Components"}
          name={"section-frag-components"}
        ></Title>

        <section className="c-section">
          <section className="c-section__container">
            <div className="c-frag-container"></div>
          </section>
        </section>
      </main>
      <footer className="c-footer">
        <section className="c-my-name">
          <h2 className="c-h2 isBlue">Igor Sprovieri</h2>
        </section>
        <SocialIcons></SocialIcons>
      </footer>
    </>
  );
}
