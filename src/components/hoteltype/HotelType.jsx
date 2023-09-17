import "./hotelType.css"
import hotel from "../../assets/hotel.jpg"
import villa from "../../assets/villa.jpg"
import cabinn from "../../assets/cabinn.jpg"
import resort from "../../assets/resort.jpg"
import apartment from "../../assets/apartment.jpg"

const HotelType = () => {
  return (
    <>
    
    <div className="hotelTypes">
        <div className="hotelItem">
            <img src={hotel} alt="hotel" />
            <div className="hotelTitles">
                <h2>Hotels</h2>
                <h4>23 Hotels</h4>
            </div>
        </div>
      
        <div className="hotelItem">
            <img src={apartment} alt="hotel" />
            <div className="hotelTitles">
                <h2>Apartments</h2>
                <h4>355 Apartments</h4>
            </div>
        </div>
        <div className="hotelItem">
            <img src={cabinn} alt="hotel" />
            <div className="hotelTitles">
                <h2>Cabins</h2>
                <h4>223 Cabins</h4>
            </div>
        </div>
        <div className="hotelItem">
            <img src={resort} alt="hotel" />
            <div className="hotelTitles">
                <h2>Resorts</h2>
                <h4>78 Resorts</h4>
            </div>
        </div>

        <div className="hotelItem">
            <img src={villa} alt="hotel" />
            <div className="hotelTitles">
                <h2>Villas</h2>
                <h4>67 Villas</h4>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default HotelType