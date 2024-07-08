import React, { useState } from "react";
import CustomGraph from "./customGraph";
import { HiCheckCircle, HiOutlinePlusCircle } from "react-icons/hi";

export default function StockComponent() {
  const [added, setadded] = useState(false);

  function toggleIcon() {
    added ? setadded(false) : setadded(true);
  }
  return (
    <div className="container w-full bg-gray-200 rounded-sm flex justify-between px-5 content-center py-3">
      <div className="content-center">Reliance Industries</div>

      <CustomGraph />
      <div className="flex align-middle">
        <div className="price content-center">
          <div className="font-medium">3177.25</div>
          <div className="text-xs text-green-600">69.20 (2.23%)</div>
        </div>
        <div className="wishlistButton content-center ms-4" onClick={toggleIcon}>
          {!added ? (
            <HiOutlinePlusCircle className="h-6  w-6   text-green-600" />
          ) : (
            <HiCheckCircle className="h-6  w-6   text-green-600" />
          )}
        </div>
      </div>
    </div>
  );
}
