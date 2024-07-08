import React from "react";
import Watchlist from "./Watchlist";

export default function UserInvestments() {
  return (
    <div className="mx-10">
      <div className="yourInvestments capitalize font-medium flex justify-between">
        <div className="text-lg ">Your Investments</div>
        <div className="text-green-600">
          <a href="">dashboard</a>
        </div>
      </div>
      <div className="border rounded-sm py-3 px-2 mt-3 border-slate-300 flex justify-between">
        <div className="total-returns content-center">
          <div className="text-green-600 font-medium">+₹2200</div>
          <div className="text-xs capitalize text-slate-600">Total Returns</div>
        </div>
        <div className="current-value content-center">
          <div className=" font-medium">16000</div>
          <div className="text-xs capitalize  text-slate-600">current value</div>
        </div>
      </div>
      <div className="your-watchlist mt-10 capitalize font-medium flex justify-between">
        <div className="text-lg ">Your Watchlist</div>
        <div className="text-green-600">
          <a href="">view all</a>
        </div>
      </div>
      <div className="border rounded-sm py-3 px-2 mt-3 border-slate-300 flex justify-between">
        <Watchlist />
      </div>
    </div>
  );
}
