import axios from "axios";
import { gitHubToken } from ".";

export const getProjects = async () => {
  return await axios.get(`https://api.github.com/users/IgorSprovieri/repos`, {
    headers: {
      Authorization: `token ${gitHubToken}`,
    },
  });
};
