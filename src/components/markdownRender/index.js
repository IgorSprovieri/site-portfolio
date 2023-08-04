import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useQuery } from "react-query";
import axios from "axios";
import rehypeRaw from "rehype-raw";
import styles from "./style.module.css";

export const MarkdownRender = ({ url }) => {
  const [markdown, setMarkdown] = useState("");

  useQuery(
    "readme",
    async () => {
      return axios.get(url);
    },
    {
      onSuccess: async (data) => {
        let content = Buffer.from(data.data.content, "base64").toString();

        const regex = /\((.*?)\)/g;
        const matches = [];

        let match;
        while ((match = regex.exec(content)) !== null) {
          if (match[1].includes("public")) {
            matches.push(match[1]);
          }
        }

        const regex2 = /"([^"]*)"/g;

        while ((match = regex2.exec(content)) !== null) {
          if (match[1].includes("public")) {
            matches.push(match[1]);
          }
        }

        let index = 0;
        for (const link of matches) {
          try {
            const result = await axios.get(
              url.replace("/readme.md", link.replace(".", ""))
            );

            content = content.replace(matches[index], result.data.download_url);
            index = index + 1;
          } catch (error) {
            console.error(error);
          }
        }

        setMarkdown(content);
      },
    }
  );

  return (
    <ReactMarkdown
      className={styles.markdownContainer}
      rehypePlugins={[rehypeRaw]}
    >
      {markdown}
    </ReactMarkdown>
  );
};
