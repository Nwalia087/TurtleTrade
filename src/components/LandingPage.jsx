import React from "react";
import StockContainer from "./stockContainer";
import UserInvestments from "./UserInvestments";

export default function LandingPage() {
  return (
    <div className="flex">
      <div className="w-2/3">
        <StockContainer />
      </div>
      <div className="w-1/3">
        <UserInvestments />
      </div>
    </div>
  );
}
