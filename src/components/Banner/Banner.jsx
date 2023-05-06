import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faPlus, faCheckCircle } from "@fortawesome/fontawesome-free-solid";
import Popup from "reactjs-popup";

import "./Banner.css";

function Banner({toggleModal}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = "f81980ff410e46f422d64ddf3a56dddd";

    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`
    )
      .then((response) => response.json())
      .then((data) => {
        const randomMovies = data.results
          .sort(() => Math.random() - 0.5)
          .slice(0, 8);
        setMovies(randomMovies);
      })
      .catch((error) => console.error(error));
  }, []);


  const contentStyle = {
    backgroundColor: "grey",
    border: "1px solid black",
    borderRadius: "20px",
    width: "auto",
    padding: "0 10px",
    margin: "0",
    opacity: "0.7"
  };

  const pStyle = {
    display: "block"
  };

  return (
    <div className="banner">
      <Splide options={{ perPage: 1, autoplay: false, infinite: true }}>
        {movies.map((movie) => (
          <SplideSlide key={movie.id}>
            <div className="banner-text">
              <h1>{movie.title}</h1>
              <p style={pStyle}>
              <FontAwesomeIcon icon={faCheckCircle} style={{color: "#00d1ff", padding:"0 5px"}} /> 
                Included with Prime</p>
              <div className="banner-button-container">
                <div className="banner-play" >
                  <div className="banner-play-button" onClick={toggleModal}></div>
                  <p>Play</p>
                </div>
                <div className="banner-watchlist-button">
                  <Popup className="banner-popup"
                     contentStyle={contentStyle}
                    trigger={
                      <button className="banner_icon_1">
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    }
                    position="bottom center"
                    on="hover"
                  >
                    <p>Watchlist</p>
                  </Popup>
                  <Popup className="banner-popup"
                     contentStyle={contentStyle}
                    trigger={
                      <button className="banner_icon_1">
                      <FontAwesomeIcon icon={faInfoCircle} />
                    </button>
                    }
                    position="bottom center"
                    on="hover"
                  >
                    <p>Details</p>
                  </Popup>

                </div>
              </div>
            </div>
            <div
              className="banner-image"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
              }}
            ></div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Banner;
