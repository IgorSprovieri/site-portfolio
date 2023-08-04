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
        const content = Buffer.from(data.data.content, "base64").toString();
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
