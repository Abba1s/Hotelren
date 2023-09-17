import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {

  return (
    <>
    
        <nav>
          <div className="navbar">
              <div className="navlogo" >
               <Link className="link" to={"/"}>A BOOKING</Link>
              </div>
              <div className="buttons">
                <button className="loginbtn">Register</button>
                <button className="loginbtn">Login</button>
              </div>
          </div>
        </nav>
    
    </>
  )
}

export default Navbar