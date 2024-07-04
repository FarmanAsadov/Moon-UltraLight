import "./Product.scss";

function Products({ image, title }) {
  return (
    <>
      <div className="product-card">
        <img src={image} alt="product" />
        <p>{title}</p>
      </div>
    </>
  );
}

export default Products;
