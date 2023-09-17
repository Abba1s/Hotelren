import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import HotelList from "./pages/hotelsList/HotelList";
import Hotel from "./pages/hotel/Hotel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hotelslist" element={<HotelList />}></Route>
          <Route path="/hotelslist/:id" element={<Hotel />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
