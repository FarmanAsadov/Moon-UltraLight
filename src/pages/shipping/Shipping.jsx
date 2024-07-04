import './Shipping.scss';

function Shipping() {
  return (
    <>
      <div className="carriage">
        <h1 className="carriage-title">Shipping</h1>
        <p className="carriage-content">
          Most standard shipments are shipped through USPS, UPS ground, or FedEx
          ground. The specific service depends on the size and weight of your
          order. Packages will typically reach their destination in{" "}
          <span className="carriage-content-text">3-4 business</span> days but
          may occasionally take longer. Orders placed after 10 am Pacific Time
          may require +1 day to process. For example, orders placed after 10 am
          on a Friday may not be processed and shipped until the following
          Monday.
        </p>
        <p className="carriage-content">
          Most expedited shipments are shipped through UPS or FedEx. The
          specific service depends on the size and weight of your order.Packages
          usually reach their destination in{" "}
          <span className="carriage-content-text">2-3 business days</span> but
          may occasionally take longer. Orders placed after 10 am Pacific Time
          may require +1 day to process. For example, orders placed after 10 am
          on a Friday may not be processed and shipped until the following
          Monday.
        </p>
      </div>
    </>
  );
}

export default Shipping;
