import Retail from "../../components/retail/Retail";
import { adress } from "../../utils/retail";
import "./Locations.scss";

function Locations() {
  return (
    <>
      <div className="retail">
        <h1 className="retail-title">
          <span className="retail-title-text">Retail Locations</span> you’ll
          find MOON
        </h1>
        <p className="retail-content">b8ta</p>
        <div className="retail-containers">
          {adress.map((adress) => (
            <Retail key={adress.id} adress={adress} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Locations;
