import { GitHubButton, ProjectCard, Window } from "@/components";
import { Projects } from "./projects";
import styles from "./style.module.css";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

export const SectionProjects = () => {
  const [windowOpen, setWindowOpen] = useState(false);
  const [repos, setRepos] = useState([]);
  const { data } = useQuery("repos", async () => {
    return await axios.get(`https://api.github.com/users/IgorSprovieri/repos`, {
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_TOKEN_GITHUB}`,
      },
    });
  });

  return (
    <>
      <Window
        title="Repositórios GitHub"
        open={windowOpen}
        setOpen={setWindowOpen}
      >
        <div className={styles["list-repos-container"]}>
          {data?.data
            ?.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            ?.map((repo) => {
              return (
                <ProjectCard
                  key={repo.id}
                  src={"/blank.png"}
                  alt={`repo ${repo.name}`}
                  title={repo.name}
                  Button={
                    <GitHubButton onClick={() => window.open(repo.html_url)}>
                      Ver Repositório
                    </GitHubButton>
                  }
                >
                  {repo.description}
                </ProjectCard>
              );
            })}
        </div>
      </Window>
      <section className={styles["projects-section"]}>
        <div className={styles["projects-container"]}>
          <Projects></Projects>
        </div>
        <GitHubButton onClick={() => setWindowOpen(true)}>
          Todos os Repositórios
        </GitHubButton>
      </section>
    </>
  );
};
