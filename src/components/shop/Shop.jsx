import { features } from "../../utils/features";
import { products } from "../../utils/products";
import ReactCompareImage from "react-compare-image";
import Products from "../products/Products";
import Features from "../features/Features";
import back_min from "../../assets/images/back-min.png";
import calendar from "../../assets/icon/calendar-light.svg";
import undo_icon from "../../assets/icon/undo-light.svg";
import shipping_fast from "../../assets/icon/shipping-fast-light-icon.svg";
import phone_mock from "../../assets/images/phone-mock-min.png";
import salat_dark from "../../assets/images/salat-dark.png";
import salat_light from "../../assets/images/salat-light.png";
import man_cup from "../../assets/images/man-cup.png";
import man_cup_dark from "../../assets/images/man-cup-dark.png";
import woman_dark from "../../assets/images/woman-dark.png";
import woman_light from "../../assets/images/woman-light.png";
import "./Shop.scss";

function Shop() {
  return (
    <>
      <section className="product">
        <div className="product-c">
          <img className="product-image" src={back_min} alt="back-min" />
          <div className="slider-dot"></div>
        </div>
        <div className="product-container">
          <h1 className="product-container-title">
            <span className="orange">MOON</span> UltraLight
          </h1>
          <p className="product-container-desc">
            A new, ultra-portable lighting accessory designed with intuitive
            touch controls that provide customizable brightness and tone,
            allowing you to perfectly capture your beautiful moment.
          </p>
          <h2 className="product-container-price">$79.99</h2>
          <ul className="product-container-list">
            <li className="product-container-list-item">
              <img
                className="product-container-list-item-icon"
                src={calendar}
                alt="calendar"
              />
              <span className="product-container-list-item-text">
                PRE-ORDER Shipping Dec 2019
              </span>
            </li>
            <li className="product-container-list-item">
              <img
                className="product-container-list-item-icon"
                src={undo_icon}
                alt="undo"
              />
              <span className="product-container-list-item-text">
                Free 30 day <span className="orange">Returns</span>{" "}
              </span>
            </li>
            <li className="product-container-list-item">
              <img
                className="product-container-list-item-icon"
                src={shipping_fast}
                alt="shipping-fast"
              />
              <span className="product-container-list-item-text">
                Fast Worldwide <span className="orange">Shipping</span>
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className="features">
        <div className="features-container">
          {features.map((feature) => (
            <Features
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
            />
          ))}
        </div>
        <img className="features-img" src={phone_mock} alt="" />
      </section>

      <section className="difference">
        <h2 className="difference-title">See the Difference</h2>
        <div className="difference-container">
          <ReactCompareImage
            className="difference-container-img"
            leftImage={salat_dark}
            rightImage={salat_light}
          />

          <ReactCompareImage
            className="difference-container-img"
            leftImage={man_cup_dark}
            rightImage={man_cup}
          />
          <ReactCompareImage
            className="difference-container-img"
            leftImage={woman_dark}
            rightImage={woman_light}
          />
        </div>
      </section>

      <section className="specs">
        <h2 className="specs-title">Technical Specs</h2>
        <div className="specs-container">
          <div className="specs-container-block">
            <div className="specs-container-block-content p-50">
              <h2 className="specs-container-block-content-title">
                Compatibility
              </h2>
              <p className="specs-container-block-content-desc">
                Present to fit devices 6mm - 10mm thick
              </p>
              <p className="specs-container-block-content-desc">
                Manually adjustable clip to fit thinnger of thicker devices
              </p>
            </div>
            <div className="specs-container-block">
              <div className="specs-container-block-content">
                <h2 className="specs-container-block-content-title">
                  Size & Weight
                </h2>
                <p className="specs-container-block-content-desc">
                  Height: 1.38 inches (35mm)
                </p>
                <p className="specs-container-block-content-desc">
                  Width: 0.98 inches (25mm)
                </p>
                <p className="specs-container-block-content-desc">
                  Depth: 0.94 inch (24mm)
                </p>
                <p className="specs-container-block-content-desc">
                  Weight: 2.11 ounces (6 grams)
                </p>
              </div>
              <div className="specs-container-block-content">
                <h2 className="specs-container-block-content-title">
                  Advanced Features
                </h2>
                <p className="specs-container-block-content-desc">
                  Anti-Flicker Lighting: Smooth Transitions and Continuous
                  Lighting (i.e. videos)
                </p>
                <p className="specs-container-block-content-desc">
                  Smart Power Management: Maintains Performance and Brightness
                  even on Low Battery
                </p>
              </div>
            </div>
          </div>
          <div className="specs-container-block">
            <div className="specs-container-block-content">
              <h2 className="specs-container-block-content-title">Lighting</h2>
              <p className="specs-container-block-content-desc">
                Preset to fit devices 6mm - 10mm thick
              </p>
              <p className="specs-container-block-content-desc">
                Tungsten color tone 27ook CCT
              </p>
              <p className="specs-container-block-content-desc">
                Daylight color tone 5000CCT
              </p>
              <p className="specs-container-block-content-desc">
                Luminous Flux: 28 Lumens (typical)
              </p>
              <p className="specs-container-block-content-desc">
                Frosted diffusion lens
              </p>
            </div>
            <div className="specs-container-block-content">
              <h2 className="specs-container-block-content-title">
                Power & Battery
              </h2>
              <p className="specs-container-block-content-desc">
                Last over 24 hours on normal use (e.g. turn off after use)
              </p>
              <p className="specs-container-block-content-desc">
                Lasts up to 3.5 hours on continuous (e.g. video mode)
              </p>
              <p className="specs-container-block-content-desc">
                Fast-charge capable: Up to 60% charge in 30 minutes
              </p>
              <p className="specs-container-block-content-desc">
                Built-in rechargeable lithium-ion battery
              </p>
              <p className="specs-container-block-content-desc">
                Charging via Micro USB to power bank/adapter or computer
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="included">
        <h2 className="included-title">What's Included</h2>
        <div className="included-container">
          {products.map((product) => (
            <Products
              key={product.id}
              image={product.image}
              title={product.title}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Shop;
