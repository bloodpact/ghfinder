import React from "react";
import { RepoItem } from "./RepoItem";

export function Repos({ repos }) {
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
}
