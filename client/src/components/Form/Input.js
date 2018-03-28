import React from "react";

export const Input = props => (
  <form id="search-form">
    Enter Ticker:
    <input id="ticker" type="text" {...props}/>
  </form>
);
