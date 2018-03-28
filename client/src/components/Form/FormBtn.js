import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ marginBottom: 10 }} className="stock">
    {props.children}
  </button>
);
