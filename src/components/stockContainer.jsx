import React from "react";
import StockComponent from "./stockComponent.jsx";
export default function StockContainer() {
  const stockComponents = [];
  for (let i = 0; i < 10; i++) {
    stockComponents.push(<StockComponent key={i} />);
  }

  return <div>{stockComponents}</div>;
}
