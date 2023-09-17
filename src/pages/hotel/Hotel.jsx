import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Subscribe from "../../components/subscribe/Subscribe";
import Footer from "../../components/footer/Footer";
import "./hotel.css";
import one from "../../assets/one.jpg";
import two from "../../assets/two.png";
import three from "../../assets/three.jpg";
import four from "../../assets/four.jpg";
import first from "../../assets/1.jpg";
import second from "../../assets/2.jpeg";
import third from "../../assets/3.jpg";
import fourth from "../../assets/4.jpg";

const Hotel = () => {
  return (
    <>
      <Navbar />
      <Header type="hotel" />

      <div className="hotel">
        <div className="hotelWrrapper">
          <div  className="hotelHeadings">
            <div className="heading">
              <h3 className="hotelName">This Apartment</h3>
              <p className="locaion">NewYork</p>
              <p className="blue">Exellent location 500m away</p>
              <p className="green">Book this apartment and win a prize</p>
            </div>
            <div className="booking">
              <button className="reserveBtn">Reserve now</button>
            </div>
          </div>
          <div className="imageContainer">
            <img src={one} alt="" />
            <img src={two} alt="" />
            <img src={three} alt="" />
            <img src={four} alt="" />
            <img src={first} alt="" />
            <img src={second} alt="" />
          </div>
          <div className="hotelDesciption">
            <div className="rightside">
              <h3>Stay in the heart of the city</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                commodi consequatur doloribus corrupti ab officiis. Atque,
                perspiciatis vero. Qui, tempora autem nemo vitae eveniet
                temporibus beatae voluptate eos ab commodi, consequatur labore,
                quaerat alias? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, error. Perferendis alias nam quidem, maxime harum odit, nesciunt incidunt distinctio animi, vero quod laboriosam sequi? Esse corporis aliquam tempore tenetur aspernatur laboriosam omnis magnam.
              </p>
            </div>
            <div className="card">
              <h4>perfect for a night stay!</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                eligendi ullam quam quasi earum veniam ab. Aliquid fugit sit
                doloribus molestiae vero.
              </p>
              <h3 className="price">500$</h3>
              <button className="reserveBtn">Book Now</button>
            </div>
          </div>
        </div>
      </div>

      <Subscribe />
      <Footer />
    </>
  );
};

export default Hotel;
