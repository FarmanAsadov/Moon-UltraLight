import "./Retail.scss";

function Retail({ adress }) {
  return (
    <>
      <div className="retail-containers-container">
        <h3 className="retail-containers-container-title">{adress.state}</h3>
        <ul className="retail-containers-container-list">
          <li className="retail-containers-container-list-item">
            {adress.adressFirst}
          </li>
          <li className="retail-containers-container-list-item">
            {adress.adressSecond}
          </li>
          <li className="retail-containers-container-list-item">
            {adress.adressThirth}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Retail;
