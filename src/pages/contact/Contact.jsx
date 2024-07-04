import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import close from "../../assets/icon/close.png";
import instagram from "../../assets/icon/instagram-icon.svg";
import facebook from "../../assets/icon/facebook-icon.svg";
import twitter from "../../assets/icon/twitter-icon.svg";
import pinterest from "../../assets/icon/pinterest-icon.svg";
import linkedin from "../../assets/icon/linkedin-icon.svg";
import youtube from "../../assets/icon/youtube-icon.svg";
import chat from "../../assets/icon/live-chat-icon.svg";
import support from "../../assets/icon/support-icon.svg";
import email_icon from "../../assets/icon/email-icon.svg";
import "./Contact.scss";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const validateName = (name) => {
    if (!/^[A-Za-z\s]*$/.test(name.target.value) && name.target.value !== "") {
      setNameError("First name must contain only letters");
      setDisabled(true);
    } else if (name.target.value.length < 3 && name.target.value !== "") {
      setNameError("First name must be at least 3 characters");
      setDisabled(true);
    } else {
      setNameError("");
      setDisabled(false);
    }

    setName(name.target.value);
  };

  const validateEmail = (email) => {
    if (!/\S+@\S+\.\S+/.test(email.target.value) && email.target.value !== "") {
      setEmailError("Invalid email address");
      setDisabled(true);
    } else {
      setEmailError("");
      setDisabled(false);
    }

    setEmail(email.target.value);
  };

  const validatePhone = (phone) => {
    if (!/^\d{10}$/.test(phone.target.value) && phone.target.value !== "") {
      setPhoneError("The phone number must consist of 10 digits!");
    } else {
      setPhoneError("");
    }

    setPhone(phone.target.value);
  };

  const validateMessage = (message) => {
    if (message.target.value.length < 10 && message.target.value !== "") {
      setMessageError("Message must be at least 10 characters");
      setDisabled(true);
    } else {
      setMessageError("");
      setDisabled(false);
    }

    setMessage(message.target.value);
  };

  const handleClose = () => {
    setOpen(!open);
    setTimeout(() => {
      navigate("/");
    }, 900);
  };

  useEffect(() => {
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      message === "" ||
      nameError ||
      emailError ||
      phoneError ||
      messageError
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [
    name,
    email,
    phone,
    message,
    nameError,
    emailError,
    phoneError,
    messageError,
  ]);

  return (
    <div
      className="contact"
      style={
        open
          ? { animation: "up 1s ease-in-out" }
          : { animation: "down 1s ease-in-out" }
      }
    >
      <div className="contact-heading">
        <img
          onClick={handleClose}
          className="contact-heading-close"
          src={close}
          alt="close"
        />
      </div>
      <div className="contact-container">
        <div className="contact-container-social">
          <h1 className="contact-container-social-title">Hit us up-</h1>
          <ul className="contact-container-social-list">
            <li className="contact-container-social-list-item">
              <img
                className="contact-container-social-list-item-img"
                src={chat}
                alt="icon"
              />
              <Link
                to="/chat"
                className="contact-container-social-list-item-text"
              >
                Live Chat
              </Link>
            </li>
            <li className="contact-container-social-list-item">
              <img
                className="contact-container-social-list-item-img"
                src={support}
                alt="icon"
              />
              <p className="contact-container-social-list-item-text">Support</p>
            </li>
            <li className="contact-container-social-list-item">
              <img
                className="contact-container-social-list-item-img"
                src={email_icon}
                alt="icon"
              />
              <Link
                to="mailto:support@moonselfie.me?subject=Support%20Email%20Query%20"
                className="contact-container-social-list-item-text"
              >
                support@moonselfie.me
              </Link>
            </li>
          </ul>
          <div>
            <ul className="contact-container-social-directions">
              <Link
                className="contact-container-social-directions-link"
                to="https://www.instagram.com/mymoonultra/"
                target="_blank"
              >
                <img src={instagram} alt="instagram" />
              </Link>
              <Link
                className="contact-container-social-directions-link"
                to="https://www.instagram.com/moonselfie/"
                target="_blank"
              >
                <img src={facebook} alt="facebook" />
              </Link>
              <Link
                className="contact-container-social-directions-link"
                to="https://twitter.com/mymoonultra"
                target="_blank"
              >
                <img src={twitter} alt="twitter" />
              </Link>
              <Link
                className="contact-container-social-directions-link"
                to="https://www.pinterest.com/moonultra/"
                target="_blank"
              >
                <img src={pinterest} alt="pinterest" />
              </Link>
              <Link
                className="contact-container-social-directions-link"
                to="https://www.linkedin.com/company/mymoonultra"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin" />
              </Link>
              <Link
                className="contact-container-social-directions-link"
                to="https://www.youtube.com/channel/UCGDkJCwXRpwYYYXqVJgx1lQ  "
                target="_blank"
              >
                <img src={youtube} alt="youtube" />
              </Link>
            </ul>
            <p className="contact-container-social-text">
              Follow Us on Social Media
            </p>
          </div>
        </div>
        <form className="form">
          <div className="form-box">
            <label className="form-box-label" htmlFor="name">
              Name -
            </label>
            <input
              className="form-box-inp"
              value={name}
              onChange={validateName}
              type="text"
              id="name"
            />
          </div>
          <div className="form-validations">
            <p className="form-validations-text">{nameError && nameError}</p>
          </div>

          <div className="form-box">
            <label className="form-box-label" htmlFor="email">
              Email -
            </label>
            <input
              value={email}
              onChange={validateEmail}
              className="form-box-inp"
              type="email"
              id="email"
            />
          </div>
          <div className="form-validations">
            <p className="form-validations-text">{emailError && emailError}</p>
          </div>
          <div className="form-box">
            <label className="form-box-label" htmlFor="phone">
              Phone -
            </label>
            <input
              value={phone}
              onChange={validatePhone}
              className="form-box-inp"
              type="text"
              id="phone"
            />
          </div>
          <div className="form-validations">
            <p className="form-validations-text">{phoneError && phoneError}</p>
          </div>
          <div className="form-box txt">
            <label className="form-box-label" htmlFor="message">
              Message -
            </label>
            <textarea
              value={message}
              onChange={validateMessage}
              className="form-box-txtarea"
              id="message"
            ></textarea>
          </div>
          <div className="form-validations">
            <p className="form-validations-text">
              {messageError && messageError}
            </p>
          </div>
          <button
            className="form-btn"
            disabled={disabled}
            style={{
              backgroundColor: disabled ? "grey" : "black",
              cursor: disabled ? "not-allowed" : "pointer",
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
