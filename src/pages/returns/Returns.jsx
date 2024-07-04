import "./Returns.scss";

function Returns() {
  return (
    <>
      <div className="returns">
        <h1 className="returns-title orange">Returns</h1>
        <p className="returns-content">
          We appreciate your customer loyalty and will make sure we do whatever
          we can to make your experience a great one. If you are not fully
          satisfied with your order, the item(s) can be returned within 30 days
          of the delivery date for a refund or store credit (excluding original
          shipping costs*).{" "}
          <strong className="b">Please ensure your MOON UltraLight</strong>
          is in unused condition with the original packaging still intact. If
          the returned item looks used, we cannot restock it, and your request
          for a refund or store credit will not be processed. The original item
          will be returned to you.
        </p>
        <p className="returns-content">
          *Original shipping charges are non-refundable except in cases where we
          have made a shipping error.
        </p>
        <p className="returns-content">
          Please allow one week for your return to be fully processed and a
          refund or store credit or exchange to be issued.
        </p>
      </div>
    </>
  );
}

export default Returns;
