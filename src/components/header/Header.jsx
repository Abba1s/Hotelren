import "./header.css";
import { FaBed } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
const naviagte = useNavigate();


  const [calendarOpen, setCalendarOpen] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [destination, setDestination] = useState();
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleClick = (name, action) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: action === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleDest = (e) => {
    setDestination(e.target.value);
  }


  const handleSearch = () => {
    naviagte("/hotelslist",{ state: {date,options,destination}})
  }

  return (
    <>
      <div className="header">
        <div
          className={
            type === "hotel" ? "headerWrapper hotels" : "headerWrapper"
          }
        >
          <div className="headerItems">
            <div className="item active">
              <FaBed />
              <span>Stay</span>
            </div>
            <div className="item">
              <AiFillCar />
              <span>Travel</span>
            </div>
            <div className="item">
              <FaPlaneDeparture />
              <span>Flights</span>
            </div>
            <div className="item">
              <FaTaxi />
              <span>Taxis</span>
            </div>
          </div>
          {type !== "hotel" && (
            <>
              <div className="headerDescription">
                <h1 className="headerTitle">
                  A lifetime of discounts? it's genius
                </h1>
                <p className="headerPara">
                  Get rewarded for your travels - unlock instant savings of 10%
                  or more with a free AB account
                </p>
                <button className="pBtn">Register</button>
                <div className="headerSearch">
                  <div className="searchItem">
                    <FaBed />
                    <input
                      type="text"
                      value={destination}
                      placeholder="Where are you going?"
                      className="searchInput"
                      onChange={(e) => {
                        handleDest(e)
                      }}
                    />
                  </div>
                  <div className="searchItem">
                    <BsFillCalendarDateFill
                      className="calendarIcon"
                      onClick={() => {
                        setCalendarOpen(!calendarOpen);
                        setOpenOptions(false);
                      }}
                    />
                    <span>
                      {format(date[0].startDate, "MM/dd/yyyy")} to
                      {format(date[0].endDate, "MM/dd/yyyy")}`
                    </span>
                    {calendarOpen && (
                      <DateRange
                        className="date"
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                      />
                    )}
                  </div>
                  <div className="searchItem">
                    <BsFillPeopleFill
                      onClick={() => {
                        setOpenOptions(!openOptions);
                        setCalendarOpen(false);
                      }}
                    />
                    <span>{`${options.adult} adult , ${options.children} children ${options.room} room`}</span>
                    {openOptions && (
                      <div className="options">
                        <div className="optionItem">
                          <span className="optionText">Adult</span>
                          <div className="counter">
                            <button
                              disabled={options.adult <= 1}
                              onClick={() => {
                                handleClick("adult", "d");
                              }}
                            >
                              -
                            </button>
                            <span className="optionCounter">
                              {options.adult}
                            </span>
                            <button
                              onClick={() => {
                                handleClick("adult", "i");
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="optionItem">
                          <span className="optionText">Children</span>
                          <div className="counter">
                            <button
                              disabled={options.children <= 1}
                              onClick={() => {
                                handleClick("children", "d");
                              }}
                            >
                              -
                            </button>
                            <span className="optionCounter">
                              {options.children}
                            </span>
                            <button
                              onClick={() => {
                                handleClick("children", "i");
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="optionItem">
                          <span className="optionText">Room</span>
                          <div className="counter">
                            <button
                              disabled={options.room <= 1}
                              onClick={() => {
                                handleClick("room", "d");
                              }}
                            >
                              -
                            </button>
                            <span className="optionCounter">
                              {options.room}
                            </span>
                            <button
                              onClick={() => {
                                handleClick("room", "i");
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <button
                    className="pBtn"
                    onClick={(e) => {
                      setOpenOptions(false);
                      setCalendarOpen(false);
                     handleSearch();
                    }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
