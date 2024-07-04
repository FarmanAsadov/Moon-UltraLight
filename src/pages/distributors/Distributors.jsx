import { Link } from "react-router-dom";
import "./Distributors.scss";
function Distributors() {
  return (
    <>
      <div className="distributor">
        <h1 className="distributor-title orange">Distributors</h1>
        <p className="distributor-content">
          Thanks for your interest in becoming an Authorised Moon Dealer! For
          inquiries on becoming a domestic or international dealer, please email
          <Link
            className="orange"
            to="mailto:dist@moonultra.com?subject=Distributors%20Request"
          >
            {" "}
            dist@moonultra.com
          </Link>{" "}
          for more information.
        </p>
      </div>
    </>
  );
}

export default Distributors;
