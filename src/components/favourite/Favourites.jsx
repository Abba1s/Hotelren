import "./favourite.css";
import one from "../../assets/one.jpg";
import two from "../../assets/two.png";
import three from "../../assets/three.jpg";
import four from "../../assets/four.jpg";

const Favourite = () => {
  return (
    <>
      <div className="favourites">
        <div className="favItem">
          <img src={one} alt="hotel" />
          <div className="favTitles">
            <h2>Kings Hotel</h2>
            <h4>Karachi</h4>
          </div>
          <div className="details">
              <h4 className="pricing">Starting from 130 $</h4>
              <p className="ratings">8.9 Exellent</p>
          </div>
        </div>

        <div className="favItem">
          <img src={two} alt="hotel" />
          <div className="favTitles">
            <h2>PC Peshawar</h2>
            <h4>Peshawar</h4>
          </div>
          <div className="details">
              <h4 className="pricing">Starting from 130 $</h4>
              <p className="ratings">8.9 Exellent</p>
          </div>
        </div>
        <div className="favItem">
          <img src={three} alt="hotel" />
          <div className="favTitles">
            <h2>Sky Lahore</h2>
            <h4>Lahore</h4>
          </div>
          <div className="details">
              <h4 className="pricing">Starting from 130 $</h4>
              <p className="ratings">8.9 Exellent</p>
          </div>
        </div>
        <div className="favItem">
          <img src={four} alt="hotel" />
          <div className="favTitles">
            <h2>Swat Marina</h2>
            <h4>Swat</h4>
          </div>
          <div className="details">
              <h4 className="pricing">Starting from 130 $</h4>
              <p className="ratings">8.9 Exellent</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favourite;
