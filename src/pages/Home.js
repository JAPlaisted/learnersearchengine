import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Search from "../components/Search.js";

function Home() {
  return (
    <div className="home">
      <section className="home__header">
        <p>Psst.. Try clicking a letter in the logo!</p>
        <div className="home__header--logo">
          <Link className="zoom" to="/searchitem1" rel="stylesheet" href="">
            L
          </Link>
          <Link className="zoom" to="/searchitem2" rel="stylesheet" href="">
            E
          </Link>
          <Link className="zoom" to="/searchitem3" rel="stylesheet" href="">
            A
          </Link>
          <Link className="zoom" to="/searchitem4" rel="stylesheet" href="">
            R
          </Link>
          <Link className="zoom" to="/searchitem5" rel="stylesheet" href="">
            N
          </Link>
          <Link className="zoom" to="/searchitem6" rel="stylesheet" href="">
            E
          </Link>
          <Link className="zoom" to="/searchitem7" rel="stylesheet" href="">
            R
          </Link>
        </div>
      </section>
      <section className="home__body">
        <Search />
      </section>
    </div>
  );
}

export default Home;
