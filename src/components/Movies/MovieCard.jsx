import React, { useRef, useState, useEffect } from "react";
import "./MovieCard.css";
import StarRating from "../tools/starRating";

import Popup from "reactjs-popup";
import { faCheckCircle } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faPlus } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({
  title,
  year,
  genre,
  imageUrl,
  overview,
  backdropUrl,
  toggleModal,
  voteAverage,
}) => {
  const truncatedOverview =
    overview.length > 200 ? overview.substring(0, 200) + "..." : overview;

  const pStyle = {
    display: "block",
    paddingTop: "5px",
  };

  const rating = voteAverage / 2;

  // https://stackoverflow.com/questions/73247936/how-to-dynamically-track-width-height-of-div-in-react-js

  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  // useRef allows us to "store" the div in a constant,
  // and to access it via observedImg.current
  const observedImg = useRef(null);

  useEffect(
    () => {
      if (!observedImg.current) {
        // we do not initialize the observer unless the ref has
        // been assigned
        return;
      }

      // we also instantiate the resizeObserver and we pass
      // the event handler to the constructor
      const resizeObserver = new ResizeObserver(() => {
        if (observedImg.current.offsetWidth !== width) {
          setWidth(observedImg.current.offsetWidth);
        }
        if (observedImg.current.offsetHeight !== height) {
          setHeight(observedImg.current.offsetHeight);
        }
      });

      // the code in useEffect will be executed when the component
      // has mounted, so we are certain observedImg.current will contain
      // the div we want to observe
      resizeObserver.observe(observedImg.current);

      // if useEffect returns a function, it is called right before the
      // component unmounts, so it is the right place to stop observing
      // the div
      return function cleanup() {
        resizeObserver.disconnect();
      };
    },
    // only update the effect if the ref element changed
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [observedImg.current]
  );

  console.log("width", width);

  return (
    <div className="popup-wrapper" ref={observedImg}>
      <Popup
        className="moviecard-popup"
        trigger={
          <img className="movie-card__image" src={backdropUrl} alt={title} />
        }
        position="bottom center"
        on="hover"
        mouseLeaveDelay={0}
        mouseEnterDelay={0}
      >
        <div className="movie-card__details-container" style={{ width: width + 2 }}> 
          <p className="movie-card_prime" style={pStyle}>
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#00d1ff", padding: "0 5px" }}
            />
            Included with Prime
          </p>
          <div className="movie-card_button-container">
            <div className="movie-card_play">
              <div className="movie-card_play-div" onClick={toggleModal}></div>
              <p>Play</p>
            </div>
            <div className="movie-card_watchlist-button">
              <div
                style={{
                  marginRight: "5px",
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </div>
            </div>
          </div>
          <h2 className="movie-card__title">{title}</h2>
          <p className="movie-card__year">{year}</p>
          <StarRating rating={rating} />
          <p className="movie-card__genre">{genre}</p>
          <p className="movie-card__overview">{truncatedOverview}</p>
        </div>
      </Popup>
    </div>
  );
};

export default MovieCard;
