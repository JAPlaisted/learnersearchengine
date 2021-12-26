import React from "react";
import { useStateValue } from "../StateProvider";
import "./SearchPage.css";
import useGoogleSearch from "../useGoogleSearch";
import { Link } from "react-router-dom";

function SearchPage() {
  const [{ term }] = useStateValue();

  //API CALL
  const { data } = useGoogleSearch(term);

  // MOCK API CALL
  //const data = Response;

  console.log(data);

  return (
    <div className="searchPage">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="searchPage__logo">L</h1>
      </Link>

      {term && (
        <div className="searchPage__results grid grid--1x2 grid--1x3">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={
                        item.pagemap?.cse_image.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
