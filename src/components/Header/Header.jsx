import {React} from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

  import './Header.css'

  function Header() {
    return (
        <nav>
          <Link className="nav__Link" to="/">
            All Recipes
          </Link>
          <Link className="nav__Link" to="/categories/">
            Categories
          </Link>
        </nav>
      );
  }

  export default Header;

