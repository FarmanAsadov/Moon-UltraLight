import { Link } from "react-router-dom";
import "./Live.scss";

function Live() {
  return (
    <>
      <div className="live">
        <h1 className="live-title">
          Live <span className="live-title-text">Chat</span>
        </h1>
        <span className="live-text">
          Mail:{" "}
          <Link
            to="mailto:support@moonselfie.me?subject=Support%20Email%20Query%20"
            className="live-text-link"
          >
            support@moonselfie.me
          </Link>
        </span>
        <span className="live-text">
          Mobile:{" "}
          <Link to="tel:(512)887-4055" className="live-text-link">
            (512) 887-4055
          </Link>
        </span>
      </div>
    </>
  );
}

export default Live;
