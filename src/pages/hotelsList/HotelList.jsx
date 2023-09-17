import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Subscribe from "../../components/subscribe/Subscribe";
import Footer from "../../components/footer/Footer";
import one from "../../assets/one.jpg";
import two from "../../assets/two.png";
import three from "../../assets/three.jpg";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./hotelList.css";
import { useLocation } from "react-router-dom";

const HotelList = () => {
  const location = useLocation();

  const [date, setDate] = useState(location.state.date);
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);

  const [calendarOpen, setCalendarOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Header type="hotel" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="searchBar">
            <form action="">
              <h2>Search</h2>
              <label htmlFor="dest">Destination</label>
              <input type="text" value={destination} onChange={(e)=>{
                setDestination(e.target.value)
              }}/>

              <label htmlFor="check">Check In Date</label>
              <span className="searchDate" onClick={()=>{setCalendarOpen(!calendarOpen)}}>
                {format(date[0].startDate, "MM/dd/yyyy")} to{" "}
                {format(date[0].endDate, "MM/dd/yyyy")}
              </span>
              {calendarOpen && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />
              )}

              <h3 className="opt">Options</h3>
              <div className="searchOptions">
                <div className="searchOption">
                  <label htmlFor="">Min Price</label>
                  <input type="number" name="" id="" min={0}/>
                </div>

                <div className="searchOption">
                  <label htmlFor="">Max Price</label>
                  <input type="number" name="" id="" min={0}/>
                </div>

                <div className="searchOption">
                  <label htmlFor="">Adult</label>
                  <input type="number" name="" id="" placeholder={options.adult} min={1} />
                </div>

                <div className="searchOption">
                  <label htmlFor="">Children</label>
                  <input type="number" name="" id="" placeholder={options.children} min={0}/>
                </div>

                <div className="searchOption">
                  <label htmlFor="">Room</label>
                  <input type="number" name="" id="" placeholder={options.room} min={1} />
                </div>
              </div>
              <button className="searchBtn">Search</button>
            </form>
          </div>
          <div className="hotelsList">
            <div className="listItem">
              <div>
                <img src={three} alt="" className="listImg" />
              </div>
              <div>
                <h3>Tower street apartments</h3>
                <p> 2km from center</p>
                <p>Free Airport taxi</p>
                <h4>Studio apartment with air conditionings</h4>
                <p>Entire studio 1 bathroom 21m bed</p>
                <p>Free Cancelation</p>
                <p>
                  You can cancel later so you can lock at this current price
                </p>
              </div>
              <div className="rating">
                <div className="upper">
                  <h4 className="review">Excellent</h4>
                  <p className="stars">8.9</p>
                </div>
                <div className="hoteldetails">
                  <h4 className="price">$110</h4>
                  <p>Including taxes and fees</p>
                  <button className="availabilty">See Availabilty</button>
                </div>
              </div>
            </div>
            <div className="listItem">
              <div>
                <img src={three} alt="" className="listImg" />
              </div>
              <div>
                <h3>Tower street apartments</h3>
                <p> 2km from center</p>
                <p>Free Airport taxi</p>
                <h4>Studio apartment with air conditionings</h4>
                <p>Entire studio 1 bathroom 21m bed</p>
                <p>Free Cancelation</p>
                <p>
                  You can cancel later so you can lock at this current price
                </p>
              </div>
              <div className="rating">
                <div className="upper">
                  <h4 className="review">Excellent</h4>
                  <p className="stars">8.9</p>
                </div>
                <div className="hoteldetails">
                  <h4 className="price">$110</h4>
                  <p>Including taxes and fees</p>
                  <button className="availabilty">See Availabilty</button>
                </div>
              </div>
            </div>
            <div className="listItem">
              <div>
                <img src={three} alt="" className="listImg" />
              </div>
              <div>
                <h3>Tower street apartments</h3>
                <p> 2km from center</p>
                <p>Free Airport taxi</p>
                <h4>Studio apartment with air conditionings</h4>
                <p>Entire studio 1 bathroom 21m bed</p>
                <p>Free Cancelation</p>
                <p>
                  You can cancel later so you can lock at this current price
                </p>
              </div>
              <div className="rating">
                <div className="upper">
                  <h4 className="review">Excellent</h4>
                  <p className="stars">8.9</p>
                </div>
                <div className="hoteldetails">
                  <h4 className="price">$110</h4>
                  <p>Including taxes and fees</p>
                  <button className="availabilty">See Availabilty</button>
                </div>
              </div>
            </div>
            <div className="listItem">
              <div>
                <img src={three} alt="" className="listImg" />
              </div>
              <div>
                <h3>Tower street apartments</h3>
                <p> 2km from center</p>
                <p>Free Airport taxi</p>
                <h4>Studio apartment with air conditionings</h4>
                <p>Entire studio 1 bathroom 21m bed</p>
                <p>Free Cancelation</p>
                <p>
                  You can cancel later so you can lock at this current price
                </p>
              </div>
              <div className="rating">
                <div className="upper">
                  <h4 className="review">Excellent</h4>
                  <p className="stars">8.9</p>
                </div>
                <div className="hoteldetails">
                  <h4 className="price">$110</h4>
                  <p>Including taxes and fees</p>
                  <button className="availabilty">See Availabilty</button>
                </div>
              </div>
            </div>
            <div className="listItem">
              <div>
                <img src={three} alt="" className="listImg" />
              </div>
              <div>
                <h3>Tower street apartments</h3>
                <p> 2km from center</p>
                <p>Free Airport taxi</p>
                <h4>Studio apartment with air conditionings</h4>
                <p>Entire studio 1 bathroom 21m bed</p>
                <p>Free Cancelation</p>
                <p>
                  You can cancel later so you can lock at this current price
                </p>
              </div>
              <div className="rating">
                <div className="upper">
                  <h4 className="review">Excellent</h4>
                  <p className="stars">8.9</p>
                </div>
                <div className="hoteldetails">
                  <h4 className="price">$110</h4>
                  <p>Including taxes and fees</p>
                  <button className="availabilty">See Availabilty</button>
                </div>
              </div>
            </div>
            <div className="listItem">
              <div>
                <img src={three} alt="" className="listImg" />
              </div>
              <div>
                <h3>Tower street apartments</h3>
                <p> 2km from center</p>
                <p>Free Airport taxi</p>
                <h4>Studio apartment with air conditionings</h4>
                <p>Entire studio 1 bathroom 21m bed</p>
                <p>Free Cancelation</p>
                <p>
                  You can cancel later so you can lock at this current price
                </p>
              </div>
              <div className="rating">
                <div className="upper">
                  <h4 className="review">Excellent</h4>
                  <p className="stars">8.9</p>
                </div>
                <div className="hoteldetails">
                  <h4 className="price">$110</h4>
                  <p>Including taxes and fees</p>
                  <button className="availabilty">See Availabilty</button>
                </div>
              </div>
            </div>
            <div className="listItem">
              <div>
                <img src={three} alt="" className="listImg" />
              </div>
              <div>
                <h3>Tower street apartments</h3>
                <p> 2km from center</p>
                <p>Free Airport taxi</p>
                <h4>Studio apartment with air conditionings</h4>
                <p>Entire studio 1 bathroom 21m bed</p>
                <p>Free Cancelation</p>
                <p>
                  You can cancel later so you can lock at this current price
                </p>
              </div>
              <div className="rating">
                <div className="upper">
                  <h4 className="review">Excellent</h4>
                  <p className="stars">8.9</p>
                </div>
                <div className="hoteldetails">
                  <h4 className="price">$110</h4>
                  <p>Including taxes and fees</p>
                  <button className="availabilty">See Availabilty</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Subscribe />
      <Footer />
    </>
  );
};

export default HotelList;
