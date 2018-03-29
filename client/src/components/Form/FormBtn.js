import React from "react";

export const FormBtn = props => (
  // <button {...props} style={{ marginBottom: 10 }} className="stock">
  //   {props.children} onClick="searchToggle(this, event);"
  // </button>

  <button {...props} className="search-icon">
    {props.children}<span></span>
  </button>
);
