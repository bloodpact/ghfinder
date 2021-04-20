import React, { useState, useContext } from "react";
import GithubContext from "../components/context/github/githuContext";
import AlertContext from "../components/context/alert/alertContext";
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");
  const OnChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Enter smthg", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="search"
          value={text}
          onChange={OnChange}
        />
        <input type="submit" className="btn btn-dark btn-block" />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};
export default Search;
