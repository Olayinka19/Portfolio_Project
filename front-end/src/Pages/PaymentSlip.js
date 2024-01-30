import React, { useState } from 'react';

const PaymentSlip = ({ item, price }) => {
  const [isPaymentComplete, setPaymentComplete] = useState(false);

  const handlePaymentComplete = () => {
    // Perform payment processing here...
    // You can use an API call or any other payment integration

    // Once the payment is complete, set the state to true
    setPaymentComplete(true);
  };

  return (
    <div>
      {isPaymentComplete ? (
        <div>
          <h2>Payment Successful!</h2>
          <p>You have successfully purchased {item} for ${price}.</p>
          {/* Additional success message or action can be added here */}
        </div>
      ) : (
        <div>
          <h2>Payment Slip</h2>
          <p>Item: {item}</p>
          <p>Price: ${price}</p>
          <button onClick={handlePaymentComplete}>Complete Payment</button>
        </div>
      )}
    </div>
  );
};

export default PaymentSlip;
