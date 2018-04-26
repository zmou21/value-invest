import React from "react";


export const Form = props => (
  // <form id="search-form">
  //   Enter Ticker:
  //   <input id="ticker" type="text" {...props}/>
  // </form>
  // Hover Here to Search method="post"
  <form className="contact" action="/">
    <input type="text" className="name-input" name="name" placeholder="name" value={props.name} onChange={props.handleinput} required/>
    <input type="email" className="email-input" name="email" placeholder="email" value={props.email} onChange={props.handleinput} required/>
    <textarea name="comment" rows="12" cols="60" className="comment-area" placeholder="type comment" value={props.comment} onChange={props.handleinput} required></textarea>
    <button type="button" name="button" className="btn waves-effect waves-light blue darken-2 submit-btn" onClick={props.handleformsubmit}>Submit</button>
  </form>

);
