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
import {
  SectionAbilities,
  SectionDescription,
  SectionExperiences,
  SectionProjects,
} from "@/sections";

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

        <SectionProjects></SectionProjects>

        <Title
          firstText={"Minhas"}
          secondText={"Experiências"}
          name={"section-experiences"}
        ></Title>

        <SectionExperiences></SectionExperiences>

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
