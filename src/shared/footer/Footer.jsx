import { Link } from "react-router-dom";
import contact_icon from "../../assets/icon/conctact-icon.svg";
import arrow_up_icon from "../../assets/icon/arrow-up-icon.svg";
import instagram from "../../assets/icon/instagram-icon.svg";
import facebook from "../../assets/icon/facebook-icon.svg";
import twitter from "../../assets/icon/twitter-icon.svg";
import pinterest from "../../assets/icon/pinterest-icon.svg";
import linkedin from "../../assets/icon/linkedin-icon.svg";
import youtube from "../../assets/icon/youtube-icon.svg";

import "./Footer.scss";

function Footer() {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <Link className="footer-top-link" to="/contact">
            Get in Touch <img src={contact_icon} alt="contact" />
          </Link>
          <button onClick={handleTop} className="footer-top-btn">
            <img src={arrow_up_icon} alt="arrow" />
            Back to Top
          </button>
          <ul className="footer-top-directions">
            <Link
              className="footer-top-directions-link"
              to="https://www.instagram.com/mymoonultra/"
              target="_blank"
            >
              <img src={instagram} alt="instagram" />
            </Link>
            <Link
              className="footer-top-directions-link"
              to="https://www.instagram.com/moonselfie/"
              target="_blank"
            >
              <img src={facebook} alt="facebook" />
            </Link>
            <Link
              className="footer-top-directions-link"
              to="https://twitter.com/mymoonultra"
              target="_blank"
            >
              <img src={twitter} alt="twitter" />
            </Link>
            <Link
              className="footer-top-directions-link"
              to="https://www.pinterest.com/moonultra/"
              target="_blank"
            >
              <img src={pinterest} alt="pinterest" />
            </Link>
            <Link
              className="footer-top-directions-link"
              to="https://www.linkedin.com/company/mymoonultra"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" />
            </Link>
            <Link
              className="footer-top-directions-link"
              to="https://www.youtube.com/channel/UCGDkJCwXRpwYYYXqVJgx1lQ  "
              target="_blank"
            >
              <img src={youtube} alt="youtube" />
            </Link>
          </ul>
        </div>
        <div className="footer-container">
          <ul className="footer-container-direction">
            <li>SHOP MOON</li>
            <Link className="footer-container-direction-link" to="/shop">
              Pre-Order Now
            </Link>
            <Link
              className="footer-container-direction-link"
              to="/where-to-buy"
            >
              Where to Buy
            </Link>
          </ul>
          <ul className="footer-container-direction">
            <li>ABOUT MOON</li>
            <Link
              className="footer-container-direction-link"
              to="/terms-of-use"
            >
              Terms of Use
            </Link>
            <Link
              className="footer-container-direction-link"
              to="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="footer-container-direction-link"
              to="/limited-warranty"
            >
              Warranty Policy
            </Link>
          </ul>
          <ul className="footer-container-direction">
            <li>SUPPORT</li>
            <Link
              className="footer-container-direction-link"
              to="/pre-order-policy"
            >
              Pre-Order Policy
            </Link>
            <Link className="footer-container-direction-link" to="/returns">
              Returns
            </Link>
            <Link className="footer-container-direction-link" to="/shipping">
              Shipping
            </Link>
          </ul>
          <ul className="footer-container-direction">
            <li>CONTACT US</li>
            <Link className="footer-container-direction-link" to="/chat">
              Live Chat
            </Link>
            <Link
              className="footer-container-direction-link"
              to="mailto:support@moonselfie.me?subject=Support%20Email%20Query%20"
            >
              support@moonselfie.me
            </Link>
            <Link
              className="footer-container-direction-link"
              to="tel:(512)887-4055"
            >
              (512) 887-4055
            </Link>
          </ul>
          <ul className="footer-container-direction">
            <li>PARTNER</li>
            <Link
              className="footer-container-direction-link"
              to="/distributors"
            >
              Distributors
            </Link>
          </ul>
          <form className="footer-container-form">
            <p className="footer-container-form-title">SIGN UP</p>
            <span className="footer-container-form-text">
              Don’t miss out on exclusive offers, moments and stories.
            </span>
            <div className="footer-container-form-input">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" />
              <button className="footer-container-form-btn">Sign up</button>
            </div>
          </form>
        </div>
        <p className="footer-bottom-text">
          ® 2024 MOON Selfiie. All Rights Reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;
