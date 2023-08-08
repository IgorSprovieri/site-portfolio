import {
  SectionAbilities,
  SectionDescription,
  SectionExperiences,
  SectionProjects,
  SectionFrag,
  Header,
  Footer,
  Title,
} from "@/sections";

export default function Home() {
  return (
    <>
      <Header></Header>
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

        <SectionFrag></SectionFrag>
      </main>
      <Footer></Footer>
    </>
  );
}
