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
import { simpleGet } from "@/services/firebase/requests";
import { getProjects } from "@/services/github/requests";

export const getServerSideProps = async () => {
  const experiences = await simpleGet("experiences");
  const projectsData = await simpleGet("projects");
  const githubProjects = await getProjects();

  const projects = githubProjects?.data
    ?.map(({ name, language, description, updated_at }) => {
      const project = projectsData.find(({ ref }) => {
        return name === ref;
      });

      if (!project) {
        return {
          docId: name + updated_at,
          name,
          language: [language],
          description,
          updatedAt: updated_at,
          imageUrl: `/projects/${name}.svg`,
          visible: true,
          highlight: false,
          readme: `https://api.github.com/repos/IgorSprovieri/${name}/contents/readme.md`,
        };
      }

      return {
        ...project,
        updatedAt: updated_at,
        imageUrl: `/projects/${project.ref}.svg`,
        readme: `https://api.github.com/repos/IgorSprovieri/${name}/contents/readme.md`,
      };
    })
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  const filteredProjects = projects?.filter(({ visible }) => {
    return visible === true;
  });

  return {
    props: { experiences: experiences || [], projects: filteredProjects || [] },
  };
};

export default function Home({ experiences, projects }) {
  return (
    <>
      <Header />
      <main className="c-main" name="section-home">
        <SectionDescription />

        <Title
          firstText={"Habilidades que"}
          secondText={"Domino"}
          name={"section-abilities"}
        ></Title>

        <SectionAbilities />

        <Title
          firstText={"Portfólio de"}
          secondText={"Projetos"}
          name={"section-portfolio"}
        ></Title>

        <SectionProjects data={projects} />

        <Title
          firstText={"Minhas"}
          secondText={"Experiências"}
          name={"section-experiences"}
        ></Title>

        <SectionExperiences data={experiences} />

        <Title
          firstText={"Frag"}
          secondText={"Components"}
          name={"section-frag-components"}
        ></Title>

        <SectionFrag />
      </main>
      <Footer />
    </>
  );
}
