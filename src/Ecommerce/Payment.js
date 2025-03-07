import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Studies.css";

const Payment = () => {
  const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handlePayment = () => {
    alert("Payment Successful!");
    navigate("/catalogue");
  };

  return (
    <div className="payment-container">
      <h1>Payment Page</h1>
      <div className="payment-box">
        <input
          type="text"
          placeholder="Card Number"
          value={paymentDetails.cardNumber}
          onChange={(e) =>
            setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Expiry (MM/YY)"
          value={paymentDetails.expiry}
          onChange={(e) =>
            setPaymentDetails({ ...paymentDetails, expiry: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="CVV"
          value={paymentDetails.cvv}
          onChange={(e) =>
            setPaymentDetails({ ...paymentDetails, cvv: e.target.value })
          }
        />
        <button onClick={handlePayment}>Pay Now</button>
      </div>
    </div>
  );
};

export default Payment;
