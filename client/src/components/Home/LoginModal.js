import React from "react";

export const LoginModal = props => (

    <div id="myModal" className="modal" style={{display: props.style}}>
      <div className="modal-content" id="login">
        <span className="close" onClick={props.close}>&times;</span>

        <form className="loginmodal" method="post" action="/login">
          <label>
            <input type="text" id="userName" name="userName" required />
            <div className="label-text">Username</div>
          </label>
          <label>
              <input type="password" id="password" name="password" required />
              <div className="label-text">Password</div>
          </label>
          <button id="loginSubmit">Submit</button>

        </form>
        <form action="../main.html"></form>
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
