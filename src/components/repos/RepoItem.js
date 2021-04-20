import React from "react";

export function RepoItem({ repo }) {
  return (
    <div className={"card"}>
      <a href={repo.html_url}>{repo.name}</a>
    </div>
  );
}
