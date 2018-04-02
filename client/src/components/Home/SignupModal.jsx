import React from "react";

export const SignupModal = props => (

  <div id="myModal2" className="modal">
    <div className="modal-content" id="signup">
      <span className="close2">&times;</span>
      <form className="loginmodal" method="post" action="/signup">
        <label>
          <input type="text" id="email-signup" name="email" required />
          <div className="label-text">Email</div>
        </label>
        <label>
          <input type="text" id="userName-signup" name="userName"  required />
          <div className="label-text">Username</div>
        </label>
        <label>
            <input type="text" id="password-signup" name="password" required />
            <div className="label-text">Password</div>
        </label>
        <button id="signupSubmit">Submit</button>
      </form>
      <form action="dashboard.html"></form>
    </div>
  </div>

);


// <!-- Other Login buttons -->
// <!-- <hr>
// <p>Login with:</p>
//     <a href="/auth/google" class="btn btn-danger"><span class="fa fa-google-plus"></span> Google</a>
//     <a href="/auth/twitter" class="btn btn-info"><span class="fa fa-twitter"></span> Twitter</a>
//     <a href="/auth/facebook" class="btn btn-primary"><span class="fa fa-facebook"></span> Facebook</a> -->
//
// <!-- Signup Error Message -->
//     <!-- <hr>
//     <br>
//     <br> -->
//     <!-- <span id="errorMessage2" style="color:red;font-weight: bolder;"> <%= error %> </span> -->
