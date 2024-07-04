import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import main from "../../assets/images/moon-light.png";
import "./Notfound.scss";

function NotFound() {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const image = imageRef.current;
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      const moveX = (clientX / innerWidth) * 20 - 15;
      const moveY = (clientY / innerHeight) * 20 - 15;

      if (image) {
        image.style.transform = `translate(${moveX}px, ${moveY}px)`;
        image.style.transition = "0.1s";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="not-found">
      <img
        ref={imageRef}
        className="not-found-image"
        src={main}
        alt="ultralight"
      />
      <h2 className="not-found-title">Page not found</h2>
      <p className="not-found-content">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="not-found-link">
        Go back to the main page
      </Link>
    </div>
  );
}

export default NotFound;
