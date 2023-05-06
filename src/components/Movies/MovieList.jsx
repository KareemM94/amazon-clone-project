import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function MovieList({ toggleModal }) {
  const [movies, setMovies] = useState([]);
  const [renderMore, setRenderMore] = useState(false);

  useEffect(() => {
    fetchMovies();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {

    if (renderMore) {
      return;
    }

    const windowHeight = window.innerHeight;
    const fullHeight = document.body.offsetHeight;
    const distanceToBottom = fullHeight - (window.scrollY + windowHeight);
    if (distanceToBottom < 80) {
      setTimeout(() => {
        setRenderMore(true);
      }, 2000);
    }
    
  }

  const fetchMovies = () => {
    const apiKey = "f81980ff410e46f422d64ddf3a56dddd";

    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);

        setMovies(data.results);
      })
      .catch((error) => console.error(error));
  };

  const genres = [
    { name: "Action", id: 28 },
    { name: "Adventure", id: 12 },
    { name: "Animation", id: 16 },
    { name: "Comedy", id: 35 },
    { name: "Crime", id: 80 },
    { name: "Documentary", id: 99 },
    { name: "Drama", id: 18 },
    { name: "Family", id: 10751 },
    { name: "Fantasy", id: 14 },
    { name: "History", id: 36 },
    { name: "Horror", id: 27 },
    { name: "Music", id: 10402 },
    { name: "Mystery", id: 9648 },
    { name: "Romance", id: 10749 },
    { name: "Science Fiction", id: 878 },
    { name: "TV Movie", id: 10770 },
    { name: "Thriller", id: 53 },
    { name: "War", id: 10752 },
    { name: "Western", id: 37 },
  ];

  if (movies.length === 0) {
    return <div>...loading</div>; // change this to a loading spinner
  }

  return (
    <React.Fragment>
      <div className="movie-list">
        {genres
          .filter((genre) => {
            let numberOfMovies = 0;
            movies.forEach((movie) => {
              if (movie.genre_ids.includes(genre.id)) {
                numberOfMovies++;
              }
            });
            return numberOfMovies > 0;
          })
          .map((genre) => (
            <React.Fragment key={genre.id}>
              <div className="genre-separator">
                <h2>
                  <span>Prime</span> {genre.name} movies we think you'll like!
                </h2>
              </div>
              <Splide
                className="movie-row"
                options={{ perPage: 4, perMove: 1 }}
              >
                {movies
                  .filter((movie) => {
                    return movie.genre_ids.includes(genre.id);
                  })
                  .sort((a, b) => Math.random() - Math.random())
                  .map((movie) => (
                    <SplideSlide key={movie.id}>
                      <MovieCard
                        toggleModal={toggleModal}
                        title={movie.title}
                        year={movie.release_date}
                        overview={movie.overview}
                        imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        backdropUrl={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                        voteAverage={movie.vote_average}
                      />
                    </SplideSlide>
                  ))}
              </Splide>
            </React.Fragment>
          ))}

        {renderMore && (
          <>
            <div className="genre-separator">
              <h2>
                <span>Prime</span> Recommended movies we think you'll like!
              </h2>
            </div>
            <Splide className="movie-row" options={{ perPage: 4, perMove: 1 }}>
              {movies.map((movie) => (
                <SplideSlide key={movie.id}>
                  <MovieCard
                    toggleModal={toggleModal}
                    title={movie.title}
                    year={movie.release_date}
                    overview={movie.overview}
                    imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    backdropUrl={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                    voteAverage={movie.vote_average}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </>
        )}
      </div>
    </React.Fragment>
  );
}

export default MovieList;
