import { useEffect } from "react";
import moon from "../../assets/images/moon-background.svg";
import ultralight from "../../assets/images/moon-light.png";
import phoneCase from "../../assets/images/phone-case.png";

import case_H from "../../assets/images/case-horizontal.png";
import light_1 from "../../assets/images/light-1.png";
import light_2 from "../../assets/images/light-2.png";
import light_3 from "../../assets/images/light-3.png";
import light_4 from "../../assets/images/light-4.png";
import battery from "../../assets/images/battery.png";

import "./Main.scss";
import { Link } from "react-router-dom";

function Main() {
  useEffect(() => {
    const maintext = document.querySelector(".main-sticky-parent-text");
    const maincontent = document.querySelector(".main-sticky-parent-content");
    const bg = document.querySelector(".bg");
    const sideline = document.querySelector(".side-nav-parent");
    const sidelinedot = document.querySelector(".side-nav-dot");
    const videolg = document.querySelector(".video-parent-lg");
    const videofull = document.querySelector(".video-full");
    const phoneText = document.querySelector(".section-phone-content-text");

    const slide1 = document.querySelector(".slide-1");
    const slide2 = document.querySelector(".slide-2");
    const img1 = document.querySelector(".img-1");
    const img2 = document.querySelector(".img-2");

    const moonlight = document.querySelector(".moon-light");
    const moonlightback = document.querySelector(".moon-light-back");

    const phoneimgcase = document.querySelector(".phone-case");

    const imgCase = document.querySelector(".container-img");

    const img_1 = document.querySelector(".container-img-1");
    const img_2 = document.querySelector(".container-img-2");
    const img_3 = document.querySelector(".container-img-3");
    const img_4 = document.querySelector(".container-img-4");

    const text_1 = document.querySelector(".text-1");
    const text_2 = document.querySelector(".text-2");
    const btext_1 = document.querySelector(".b-text-1");

    btext_1.setAttribute(
      "style",
      "transform: translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);"
    );

    text_1.setAttribute(
      "style",
      "transform: translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);"
    );
    text_2.setAttribute(
      "style",
      "transform: translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);"
    );

    imgCase.setAttribute("style", "opacity: 0; transition: opacity 0.2s;");

    img_1.setAttribute("style", "opacity: 1; transition: opacity 0.2s;");
    img_2.setAttribute("style", "opacity: 0; transition: opacity 0.2s;");
    img_3.setAttribute("style", "opacity: 0; transition: opacity 0.2s;");
    img_4.setAttribute("style", "opacity: 0; transition: opacity 0.2s;");

    phoneimgcase.setAttribute("style", "opacity: 1;");

    moonlight.setAttribute("style", "opacity: 0; ");
    moonlightback.setAttribute("style", "opacity: 0;");
    imgCase;

    img1.setAttribute(
      "style",
      " opacity: 1; transform: translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
    );
    img2.setAttribute(
      "style",
      "will-change: opacity, transform;opacity: 1; transform: translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
    );

    slide1.setAttribute(
      "style",
      "will-change: opacity, transform;opacity: 1; transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
    );
    slide2.setAttribute(
      "style",
      "will-change: opacity, transform;opacity: 0; transform: translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
    );

    phoneText.setAttribute(
      "style",
      "will-change: opacity, transform; opacity: 0; transform: translate3d(0px, 60vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
    );

    videofull.setAttribute(
      "style",
      "opacity: 0.1; transform: translate3d(0px, 0px, 0px) scale3d(2.3, 2.3, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
    );

    videolg.setAttribute(
      "style",
      "transform: translate3d(0px, 0px, 0px) scale3d(1.8, 1.8, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
    );

    sideline.setAttribute(
      "style",
      "transform: translate3d(-170px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
    );

    maintext.setAttribute(
      "style",
      "transform: translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);"
    );

    const handleScroll = () => {
      const scrollValue = window.scrollY;

      console.log(scrollValue);

      if (scrollValue > 32000) {
        btext_1.style.opacity = 0;
        btext_1.style.transition = "opacity 0.2s";
      } else {
        btext_1.style.opacity = 1;
        btext_1.style.transition = "opacity 0.2s";
      }

      if (scrollValue > 26200) {
        btext_1.style.transform = `translate3d(0px, ${
          6700 - scrollValue / 4.3
        }%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
      } else {
        btext_1.style.transform = `translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
      }

      if (scrollValue > 18900) {
        text_1.style.opacity = `${0.1 + scrollValue / 60000}`;
        text_1.style.transition = "opacity 0.2s";
      }
      if (scrollValue > 19800) {
        text_1.style.opacity = 1;
        text_1.style.transition = "opacity 0.2s";
      }
      if (scrollValue > 20650) {
        img_2.style.opacity = 1;
        img_1.style.transition = "opacity 0.3s";
        img_2.style.transition = "opacity 0.3s";
        text_1.style.opacity = `${3 - scrollValue / 8000}`;
        text_1.style.transition = "opacity 0.2s";
      } else {
        img_1.style.opacity = 1;
        img_2.style.opacity = 0;
      }

      if (scrollValue > 21420) {
        img_3.style.opacity = 1;
        img_1.style.transition = "opacity 0.3s";
        img_2.style.transition = "opacity 0.3s";
        img_3.style.transition = "opacity 0.3s";
        text_2.style.opacity = `${0.1 + scrollValue / 60000}`;
        text_2.style.transition = "opacity 0.2s";
      } else {
        img_3.style.opacity = 0;
      }

      if (scrollValue > 22000) {
        text_2.style.opacity = 1;
        text_2.style.transition = "opacity 0.2s";
      }
      if (scrollValue > 22860) {
        img_4.style.opacity = 1;
        img_1.style.transition = "opacity 0.3s";
        img_2.style.transition = "opacity 0.3s";
        img_3.style.transition = "opacity 0.3s";
        img_4.style.transition = "opacity 0.3s";

        text_2.style.opacity = `${3 - scrollValue / 8000}`;
        text_2.style.transition = "opacity 0.2s";
      } else {
        img_4.style.opacity = 0;
      }

      if (scrollValue > 21300) {
        text_2.style.transform = `translate3d(0px, ${
          (1800 - scrollValue / 12) * 6
        }%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
      } else {
        text_2.style.transform = `translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
      }

      if (scrollValue > 18000) {
        text_1.style.transform = `translate3d(0px, ${
          (1600 - scrollValue / 12) * 5
        }%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
      } else {
        text_1.style.transform = `translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
      }

      if (scrollValue > 13200) {
        moonlight.style.transition = "opacity 3s";
        moonlightback.style.transition = "opacity 3s";
        moonlight.style.opacity = 1;
        moonlightback.style.opacity = 1;
        moonlight.style.background = "#fffc";
        moonlightback.style.background = "#ffffffb3";
      } else {
        moonlight.style.opacity = 0;
        moonlightback.style.opacity = 0;
      }

      if (scrollValue > 15400) {
        moonlight.style.background = "rgb(248, 215, 188)";
        moonlightback.style.background = "rgb(248, 215, 188)";
        moonlight.style.transition = "background 0.2s";
        moonlightback.style.transition = "background 0.2s";
      } else {
        moonlight.style.background = "rgb(255, 255, 255)";
        moonlightback.style.background = "rgb(255, 255, 255)";
        moonlight.style.transition = "background 0.2s";
        moonlightback.style.transition = "background 0.2s";
      }

      if (scrollValue > 15000) {
        slide1.style.transform = `translate3d(0px, ${
          -100 - scrollValue / 2000
        }%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        slide1.style.opacity = `${1 - scrollValue / 14000}`;
        slide1.style.transition = "transform 0.2s ease, opacity 0.2s ease";
        slide2.style.transform = `translate3d(0px, ${
          5 - scrollValue / 2000
        }%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        slide2.style.opacity = `${0 + scrollValue / 14000}`;
        slide2.style.transition = "transform 0.2s ease, opacity 0.2s ease";
        img1.style.transform = `translate3d(${
          -100 - scrollValue / 20000
        }%,0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        img1.style.transition = "transform 0.2s ease";
        img2.style.transform = `translate3d(${
          0 - scrollValue / 20000
        }%,0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        img2.style.transition = "transform 0.2s ease";
      } else {
        slide1.style.transform = `translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        slide1.style.opacity = 1;
        slide1.style.transition = "transform 0.2s ease, opacity 0.2s ease";
        slide2.style.transform = `translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        slide2.style.opacity = 0;
        slide2.style.transition = "transform 0.2s ease, opacity 0.2s ease";
        img1.style.transform = `translate3d(0%,0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        img1.style.transition = "transform 0.2s ease";
        img2.style.transform = `translate3d(100%,0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        img2.style.transition = "transform 0.2s ease";
      }

      if (scrollValue > 11250) {
        phoneText.style.opacity = `${0.1 + scrollValue / 23000}`;
        phoneText.style.transform = `translate3d(0px, ${
          1480 - scrollValue / 8
        }vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        if (scrollValue > 11600) {
          phoneText.style.opacity = `${0.1 + scrollValue / 16000}`;
        }
        if (scrollValue > 11900) {
          phoneText.style.opacity = `${0.7 - scrollValue / 42000}`;
        }
      }

      if (scrollValue > 4500) {
        videofull.style.opacity = `${0.1 + scrollValue / 32000}`;
        videolg.style.transition = "transform 0.1s ease";
        videolg.style.transform = `translate3d(0px, 0px, 0px) scale3d(${
          3.6 - scrollValue / 2200
        }, ${
          3.6 - scrollValue / 2200
        }, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;

        videofull.style.transition = "transform 0.1s ease";
        videofull.style.transform = `
        translate3d(0px, 0px, 0px) scale3d(2.3, 2.3, 1) rotateX(0deg) rotateY(0deg) rotateZ(${
          -305 + scrollValue / 15 > 445 ? 445 : -305 + scrollValue / 15
        }deg) skew(0deg, 0deg)
        `;

        if (scrollValue > 12260) {
          videofull.style.opacity = `${0.7 - scrollValue / 17000}`;
          videofull.style.transition = "opacity 0.2s";

          phoneimgcase.style.transition = "opacity 0.2s";
          phoneimgcase.style.opacity = `${0.8 - scrollValue / 22000}`;
        } else {
          phoneimgcase.style.transition = "opacity 0.2s";

          phoneimgcase.style.opacity = 0.9;
        }

        if (scrollValue > 6500) {
          videolg.style.transform = `translate3d(0px, 0px, 0px) scale3d(${
            3.6 - scrollValue / 2200 < 0.37 ? 0.37 : 3.6 - scrollValue / 2200
          }, ${
            3.6 - scrollValue / 2200 < 0.37 ? 0.37 : 3.6 - scrollValue / 2200
          }, 1) rotateX(0deg) rotateY(0deg) rotateZ(${
            162 - scrollValue / 40 < -90 ? -90 : 162 - scrollValue / 40
          }deg) skew(0deg, 0deg)`;
        }
      } else {
        videolg.style.transform = `translate3d(0px, 0px, 0px) scale3d(1.8, 1.8, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
      }

      if (scrollValue > 1500) {
        sideline.style.transition = "transform 0.3s ease-in-out";
        sideline.style.transform = `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        sidelinedot.style.transition = "background 0.3s ease-in-out";
        sidelinedot.style.transform = `translate3d(0px, ${
          scrollValue / 1750
        }vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        if (scrollValue > 33000) {
          sideline.style.transition = "transform 0.3s ease-in-out";
          sideline.style.transform = `translate3d(-170px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        }
      } else {
        sideline.style.transform = `translate3d(-170px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
      }

      maintext.style.transform = `translate3d(0px, ${
        100 - scrollValue / 18
      }%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;

      maincontent.style.opacity = `${1 - scrollValue / 2500}`;

      if (scrollValue > 2400) {
        // bg.style.transition = "background 0.3s ease-in-out ";
        bg.style.zIndex = 44;
        bg.style = "background: rgb(16, 16, 16);";
      } else {
        bg.style.zIndex = 0;
        bg.style = "background: rgb(211, 211, 211);";
      }

      if (scrollValue > 17700) {
        imgCase.style.opacity = 1;
        imgCase.style.transition = "opacity 0.4s";
      }

      if (scrollValue > 17680) {
        bg.style = "background: rgb(211, 211, 211);";
      } else {
        imgCase.style.opacity = 0;
        imgCase.style.transition = "opacity 0.3s";
      }

      if (scrollValue < 2100) {
        maintext.style.opacity = `${0 + scrollValue / 1900}`;
      } else if (scrollValue > 2100) {
        maintext.style.opacity = `${1 - scrollValue / 9000}`;
      }

      if (scrollValue > 2400) {
        maintext.style.transition = "opacity 0.3s";
        maintext.style.opacity = `${0}`;
      } else {
        maintext.style.transition = "none";
        maintext.style.opacity = `${0 + scrollValue / 1900}`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="home">
        <div className="bg"></div>
        <div className="home-inner">
          <div className="side-nav-parent">
            <div className="side-text left">001</div>
            <div className="side-nav-line">
              <div className="side-nav-dot"></div>
            </div>
            <div className="side-text left-1">010</div>
          </div>
          <div className="main">
            <div className="main-sticky">
              <div className="main-sticky-parent">
                <div className="main-sticky-parent-text">
                  <div className="main-sticky-parent-text-c50">
                    <h1>
                      Meet Mobile’s Most <br /> Revolutionary Lighting Device
                    </h1>
                    <p>
                      MOON UltraLight is a new, ultra-portable lighting device
                      designed with you in mind. Its intuitive touch controls
                      provide customizable brightness and tone, allowing you to
                      perfectly capture your special moments.
                    </p>
                  </div>
                </div>
                <div className="main-sticky-parent-content">
                  <div className="main-sticky-parent-content-images-imgOne">
                    <img src={moon} alt="moon" />
                  </div>
                  <div className="main-sticky-parent-content-images-imgTwo">
                    <img src={ultralight} alt="ultralight" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="section-phone">
            <div className="section-phone-container">
              <div className="video-parent-lg">
                <div className="div-block">
                  <div className="video-full"></div>
                </div>
                <img className="phone-case" src={phoneCase} alt="" />
              </div>
              <div className="section-phone-content">
                <h1 className="section-phone-content-text">
                  MOON UltraLight will showcase your world in the best possible
                  light, capturing all of your life’s important moments like
                  never before. Let your true self shine through.
                </h1>
              </div>
            </div>
          </section>
          <section className="section-adjust">
            <div className="section-adjust-sticky-container">
              <div className="bright-section-1">
                <div className="container">
                  <div className="add-top">
                    <div className="content">
                      <div className="slide-1">
                        <h3>Here's why you will love it</h3>
                        <h1>Adjust Your Brightness</h1>
                        <p>
                          Whether your location is dark or dim, you can adjust
                          the brightness level with precise accuracy.
                        </p>
                      </div>
                      <div className="slide-2">
                        <h3>Here's why you will love it</h3>
                        <h1>Adjust Your Brightness</h1>
                        <p>
                          Whether your location is dark or dim, you can adjust
                          the brightness level with precise accuracy.
                        </p>
                      </div>
                    </div>
                    <div className="case">
                      <div className="case-parent">
                        <img src={case_H} alt="" />
                        <div className="moon-parent">
                          <div className="moon-light"></div>
                          <div className="moon-light-back"></div>
                        </div>
                      </div>
                      <div className="screen">
                        <div className="img-1"></div>
                        <div className="img-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-controlled">
            <div className="section-controlled-sticky-container">
              <div className="container">
                <div className="container-img">
                  <img
                    className="container-img-1"
                    src={light_1}
                    alt="light-1"
                  />
                  <img
                    className="container-img-2"
                    src={light_2}
                    alt="light-2"
                  />
                  <img
                    className="container-img-3"
                    src={light_3}
                    alt="light-3"
                  />
                  <img
                    className="container-img-4"
                    src={light_4}
                    alt="light-4"
                  />
                </div>
                <div className="text-1">
                  <h1>Controlled By Your Touch</h1>
                  <h3>Adjustability at your fingertips</h3>
                </div>
                <div className="text-2">
                  <h1>Rechargeable</h1>
                  <h3>Ready for any moment</h3>
                </div>
              </div>
            </div>
          </section>
          <section className="section-battery">
            <div className="section-battery-sticky-container">
              <div className="container">
                <div className="container-img">
                  <img
                    className="container-img-1"
                    src={battery}
                    alt="battery"
                  />
                </div>
                <div className="b-text-1">
                  <h1>Optimized Battery</h1>
                  <h3>
                    Always bright, no matter how much battery you have left
                  </h3>
                </div>
              </div>
            </div>
          </section>
          <section className="section-coming">
            <div className="section-coming-sticky">
              <div className="section-coming-sticky-img">
                <div className="section-coming-sticky-img-text">
                  <h1>Coming Soon!</h1>
                  <Link className="navigate-direction-connect" to="/shop">
                    <span className="navigate-direction-connect-text">
                      Pre-Order Now
                    </span>
                    <span className="navigate-direction-connect-text-up">
                      Pre-Order Now
                    </span>
                    <span className="navigate-direction-connect-inner"></span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Main;
