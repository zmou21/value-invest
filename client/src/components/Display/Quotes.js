import React from "react";

export const Quotes = props => (
  <div className="quote-list">
    <ul className="left-list">
      <li>Latest Price: {props.price}</li>
      <li>Day-High: {props.high}</li>
      <li>Day-Low: {props.low}</li>
      <li>Price Change: {props.change}</li>
    </ul>
    <ul className="middle-list">
      <li>Market Cap: {props.marketCap}</li>
      <li>Latest Volume: {props.volume}</li>
      <li>52-Week-High: {props.yearHigh}</li>
      <li>52-Week-Low: {props.yearLow}</li>
    </ul>
    <ul className="left-list">
      <li>Sector: {props.sector}</li>
      <li>Exchange: {props.exchange}</li>
    </ul>
  </div>
);
