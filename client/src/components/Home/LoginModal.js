import React from "react";

const display = {
  display: 'block'
};
const hide = {
  display: 'none'
};


export const LoginModal = props => (

  <div id="myModal" className="modal" style={props.toggle ? display : hide}>
    <div className="modal-content" id="login">
      <span className="close" onClick={props.toggleClick}>&times;</span>
      <form className="loginmodal" method="post" onSubmit={props.handleLoginSubmit}>
        <label>
          <input type="email" id="userName" name="email" value={props.email} onChange={props.handleInput} required />
          <div className="label-text">Email</div>
        </label>
        <label>
            <input type="password" id="password" name="password" value={props.password} onChange={props.handleInput} required />
            <div className="label-text">Password</div>
        </label>
        <button id="loginSubmit">Submit</button>
      </form>
    </div>
  </div>
);



// <!-- Other Login buttons -->
// <!-- <hr>
// <p>Login with:</p>
//     <a href="/auth/google" class="btn btn-danger"><span class="fa fa-google-plus"></span> Google</a>
//     <a href="/auth/twitter" class="btn btn-info"><span class="fa fa-twitter"></span> Twitter</a>
//     <a href="/auth/facebook" class="btn btn-primary" id="facebook"><span class="fa fa-facebook"></span> Facebook</a> -->
//
// <!-- Login Error Message -->
//     <!-- <hr>
//     <br>
//     <br> -->
//     <!-- <span id="errorMessage" style="color:red;font-weight: bolder;"> <%= error %> </span> -->
