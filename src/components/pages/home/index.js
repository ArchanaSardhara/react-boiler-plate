import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <p>
      <Link to="/todo">Todo page</Link>
    </p>
  </div>
);

export default Home;
