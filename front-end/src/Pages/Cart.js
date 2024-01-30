import React from 'react';

const Chart = ({ cartList }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartList.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal(cartList)}</h3>
    </div>
  );
};

export default Chart;

// Helper function to calculate the total price of items in the cart
const calculateTotal = (cartList) => {
  let total = 0;
  cartList.forEach((item) => {
    total += item.price;
  });
  return total;
};
