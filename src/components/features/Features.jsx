import "./Features.scss";

function Features({ icon, title, text }) {
  return (
    <>
      <div className="block">
        <img className="block-img" src={icon} alt="icon" />
        <div className="block-content">
          <h2 className="block-content-title">{title}</h2>
          <p className="block-content-text">{text}</p>
        </div>
      </div>
    </>
  );
}

export default Features;
