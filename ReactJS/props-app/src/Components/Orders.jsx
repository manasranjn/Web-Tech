import React from "react";

const Orders = (props) => {
  console.log(props);

  return (
    <div className="student">
      <h1>Order ID: {props.order.id}</h1>
      <h1>Order Status: {props.order.status}</h1>
      <h1>Order Amount: {props.order.amount}</h1>
    </div>
  );
};

export default Orders;
