import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    console.log("searched: ", input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    navigate("./search");
  };

  return (
    <form className="search-bar">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>

      {!hideButtons ? (
        <div className="search__button">
          <Button type="submit" onClick={search} variant="outlined">
            Search
          </Button>
        </div>
      ) : (
        <div className="search__button search__button--hidden">
          <Button type="submit" onClick={search} variant="outlined">
            Search
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
