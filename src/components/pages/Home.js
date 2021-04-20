import Search from "../Search";
import Users from "../Users";
import Alert from "../Alert";
import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Users />
      <Alert />
    </Fragment>
  );
};
export default Home;
