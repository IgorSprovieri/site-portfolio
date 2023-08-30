import { GitHubButton, Window } from "@/components";
import { Projects } from "./projects";
import styles from "./style.module.css";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { RepositoryCard } from "../../components/projectCard";

export const SectionProjects = () => {
  const ignoreRepos = process.env.NEXT_PUBLIC_IGNORE_REPOS.split(",");
  const [windowOpen, setWindowOpen] = useState(false);
  const { data } = useQuery("repos", async () => {
    return await axios.get(`https://api.github.com/users/IgorSprovieri/repos`, {
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_TOKEN_GITHUB}`,
      },
    });
  });

  return (
    <>
      <Window title="Outros Projetos" open={windowOpen} setOpen={setWindowOpen}>
        <div className={styles["list-repos-container"]}>
          {data?.data
            ?.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
            ?.map((repo) => {
              let ignoreRepo = false;
              ignoreRepos.forEach((ignoreRepoName) => {
                if (repo.name === ignoreRepoName) {
                  ignoreRepo = true;
                }
              });

              return ignoreRepo === false ? (
                <RepositoryCard key={repo.id} repo={repo}></RepositoryCard>
              ) : (
                <></>
              );
            })}
        </div>
      </Window>
      <section className={styles["projects-section"]}>
        <div className={styles["projects-container"]}>
          <Projects></Projects>
        </div>
        <GitHubButton onClick={() => setWindowOpen(true)}>
          Ver Todos os Projetos
        </GitHubButton>
      </section>
    </>
  );
};
