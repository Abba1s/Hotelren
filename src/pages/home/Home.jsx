import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import HotelType from "../../components/hotelType/HotelType";
import Favourite from "../../components/favourite/Favourites";
import Subscribe from "../../components/subscribe/Subscribe";
import Footer from "../../components/footer/Footer";

import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />

        <div className="propertyList">
          <h3 className="homeTypeHeading">Property Types to be booked</h3>
          <HotelType />
        </div>

        <div className="favouriteList">
          <h3 className="favouriteHeading">Homes Guests Love</h3>
          <Favourite/>
        </div>
      </div>

      <div className="subscribeComponent">
        <Subscribe/>
      </div>

      <Footer/>
    </>
  );
};

export default Home;
