import React from "react";

export const Quotes = props => (
  <div className="quote-list animated slideInRight">
    <ul className="left-list">
      <li className="main-list-item">Price: ${props.price}</li>
      <li className="less-list-item">High ${props.high} |</li>
      <li className="less-list-item">Low ${props.low} |</li>
      <li className="less-list-item">&Delta; ${props.change}</li>
      <hr/>
      <li className="main-list-item">Market Cap ${props.marketCap}</li>
      <li className="less-list-item">Volume: {props.volume} |</li>
      <li className="less-list-item">52-WH: ${props.yearHigh} |</li>
      <li className="less-list-item">52-WL: ${props.yearLow}</li>
  </ul>

  </div>
);
