import React from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAngleDown } from "@fortawesome/fontawesome-free-solid";

function Navbar() {
  const [show, setShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  const [activeDiv, setActiveDiv] = useState("");
  const removeActiveDiv = () => {
    setActiveDiv("");
  };


  const liStyle = {
    // justifyContent: "center",
    display: "flex",
    alignItems: "center"
  };

  return (
    <>
      <div className={`navWrap  ${show && "transitioned_navWrap"}`}>
        <nav className={`Nav ${show && "transitioned_nav"}`}>
          <img
            className="nav_logo"
            src="https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png"
            alt=""
          />
          <div className="links_wrap">
            <div
              className={`dropdown ${activeDiv === 1 ? "active" : ""}`}
              id={1}
              onMouseEnter={() => setActiveDiv(1)}
              onMouseLeave={removeActiveDiv}
            >
              <p style={{ borderBottom: "3px solid white" }}>
                Home
                <FontAwesomeIcon className="nav_icon_1" icon={faAngleDown} />
              </p>

              <div className="dropdown-menu">
                <ul>
                  <li>All</li>
                  <li>Movies</li>
                  <li>Tv Shows</li>
                  <li>Sports</li>
                </ul>
              </div>
            </div>
            <div
              className={`dropdown ${activeDiv === 2 ? "active" : ""}`}
              id={2}
              onMouseEnter={() => setActiveDiv(2)}
              onMouseLeave={removeActiveDiv}
            >
              <p>
                Store
                <FontAwesomeIcon className="nav_icon_1" icon={faAngleDown} />
              </p>
              <div className="dropdown-menu">
                <ul>
                  <li>All</li>
                  <li>Rent or Buy</li>
                  <li>Channels</li>
                  <li>Deals</li>
                </ul>
              </div>
            </div>
            <div
              className={`dropdown ${activeDiv === 3 ? "active" : ""}`}
              id={3}
              onMouseEnter={() => setActiveDiv(3)}
              onMouseLeave={removeActiveDiv}
            >
              <p>
                Free with ads
                <FontAwesomeIcon className="nav_icon_1" icon={faAngleDown} />
              </p>
              <div className="dropdown-menu">
                <ul>
                  <li>All</li>
                  <li>Movies</li>
                  <li>TV Shows</li>
                </ul>
              </div>
            </div>
            <div
              className={`dropdown ${activeDiv === 4 ? "active" : ""}`}
              id={4}
              onMouseEnter={() => setActiveDiv(4)}
              onMouseLeave={removeActiveDiv}
            >
              <p>
                Categories
                <FontAwesomeIcon className="nav_icon_1" icon={faAngleDown} />
              </p>
              <div className="dropdown-menu bigger-dropdown">
                <div className="category cat_1">
                  <p>Genres</p>
                  <ul className="ul_genres_one">
                    <li>Action and adventure</li>
                    <li>Anime</li>
                    <li>Comedy</li>
                    <li>Documentary</li>
                    <li>Drama</li>
                    <li>Fantasy</li>
                    <li>Horror</li>
                    <li>International</li>
                    <li>Kids</li>
                    <li>Music videos and concerts</li>
                    <li>Mystery and thrillers</li>
                    <li>Romance</li>
                  </ul>
                </div>
                <div className="category cat_2">
                  <p>Featured collections</p>
                  <ul className="ul_genres_two">
                    <li>Celebrate Black Culture Every Day</li>
                    <li>Originals TV & Movies</li>
                    <li>Made in Europe</li>
                    <li>New Releases on Home Premiere</li>
                    <li>Sports</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`dropdown ${activeDiv === 5 ? "active" : ""}`}
              id={5}
              onMouseEnter={() => setActiveDiv(5)}
              onMouseLeave={removeActiveDiv}
            >
              <p>
                My Stuff
                <FontAwesomeIcon className="nav_icon_1" icon={faAngleDown} />
              </p>
              <div className="dropdown-menu">
                <ul>
                  <li>All</li>
                  <li>Watchlists</li>
                  <li>Purchased & Rentals</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`dropdown ${activeDiv === 6 ? "active" : ""}`}
            id={6}
            onMouseEnter={() => setActiveDiv(6)}
            onMouseLeave={removeActiveDiv}
          >
            <div className="nav_icon_wrapper">
              <FontAwesomeIcon className="nav_icon" icon={faUser} />
            </div>
            <div className="dropdown-menu medium-dropdown">
              <div className="category cat_1">
                <p>Your Account</p>
                <ul className="ul_genres_one">
                  <li>Getting Started</li>
                  <li>Help</li>
                  <li>Account & Settings</li>
                </ul>
              </div>
              <div className="category cat_2">
                <p>Profiles</p>
                <ul className="ul_genres_two">
                  <li
                    style={liStyle}>
                    <img
                      className="kids-icon"
                      src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/kid-1.png"
                      alt="Kids"
                    />
                    Kids
                  </li>
                  <li
                    style={liStyle}>
                    <img
                      className="kids-icon"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9IiMzMzM3M0QiLz48cGF0aCBkPSJNMjIgMTUuMzM0aC01LjMzNHYtNS4zMzNjMC0uMzY3LS4zLS42NjctLjY2Ni0uNjY3LS4zNjcgMC0uNjY3LjMtLjY2Ny42Njd2NS4zMzNIMTBjLS4zNjcgMC0uNjY3LjMtLjY2Ny42NjcgMCAuMzY2LjMuNjY2LjY2Ny42NjZoNS4zMzN2NS4zMzRjMCAuMzY2LjMuNjY2LjY2Ny42NjYuMzY2IDAgLjY2Ni0uMy42NjYtLjY2NnYtNS4zMzRIMjJjLjM2NiAwIC42NjYtLjMuNjY2LS42NjYgMC0uMzY3LS4zLS42NjctLjY2Ni0uNjY3WiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="
                    alt="Add"/>
                    Add New</li>
                  <li>Manage Profiles</li>
                  <li>Learn More</li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
