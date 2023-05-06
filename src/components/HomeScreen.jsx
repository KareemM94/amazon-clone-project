import React from "react";
import { useState } from "react";

import Navbar from "./Navbar/Navbar";
import MovieList from "./Movies/MovieList";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Modal from "./Modal/Modal";
import "./HomeScreen.css";

function HomeScreen() {

    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

    return (
      <>
        <Navbar />
        <Banner toggleModal={toggleModal}/>
        <MovieList toggleModal={toggleModal} />
        {isModalOpen && <Modal toggleModal={toggleModal} />}
        <Footer />
      </>
    );
  }


export default HomeScreen;
