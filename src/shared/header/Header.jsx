import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import icon from "../../assets/logo/moon-logo.svg";
import "./Header.scss";

function Header() {
  const location = useLocation();
  const [style, setStyle] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.pathname !== "/") {
      setStyle(true);
    } else {
      setStyle(false);
    }
  }, [location]);

  return (
    <>
      <header
        id="header"
        style={{ backgroundColor: style ? "#f6f5f4" : "transparent" }}
      >
        <nav className="navigate">
          <Link to="/">
            <img className="navigate-logo" src={icon} alt="logo" />
          </Link>
          <ul className="navigate-direction">
            <NavLink className="navigate-direction-link" to="/where-to-buy">
              Locations
            </NavLink>
            <NavLink className="navigate-direction-link" to="/contact">
              Contact
            </NavLink>
            <NavLink className="navigate-direction-link" to="/login">
              Login
            </NavLink>
            <Link className="navigate-direction-connect" to="/shop">
              <span className="navigate-direction-connect-text">
                Pre-Order Now
              </span>
              <span className="navigate-direction-connect-text-up">
                Pre-Order Now
              </span>
              <span className="navigate-direction-connect-inner"></span>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
