import React from "react";

export const Stockname = props => (
  <div>
    <h1 className="company-name">{props.companyName}</h1>
    <img id="logo" src={props.companyLogo} width="100px" height="100px" alt="logo"/>
    <button onClick={props.postFavorite}>Favorite Ticker</button>
  </div>
);
