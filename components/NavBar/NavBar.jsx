import CartWidget from "./CartWidget"
import { BsBox } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./navbar.css"

const NavBar = () => {
  
  return (
    <nav className="navbar"> 

      <ul className="categories">
        <li className="category">
          <Link to="/category/america" >America</Link>
        </li>  
        <li className="category">
          <Link to="category/eurasia">Eurasia</Link>
        </li>
        <li className="category">
          <Link to="category/centro america">Centro America</Link>
        </li>
      </ul>

      <Link to="/" className="bran primary-font-color">
        <BsBox className="icon-brand" />
        <p className="title-brand">Box E-commerce</p>
      </Link>

      <CartWidget />
    </nav>
  )
}
export default NavBar
