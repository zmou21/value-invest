  import React from "react";

  const display = {
    display: 'block'
  };
  const hide = {
    display: 'none'
  };

  export const SignupModal = props => (
    <div id="myModal2" className="modal" style={props.toggle ? display : hide}>
      <div className="modal-content" id="signup">
        <span className="close2" onClick={props.toggleClick}>&times;</span>
        <form className="loginmodal" method="post" onSubmit={props.handleSignUpSubmit}>
          <label>
            <input type="text" id="name-signup" name="name" value={props.name} onChange={props.handleInput} required />
            <div className="label-text">Name</div>
          </label>
          <label>
            <input type="email" id="email-signup" name="email" value={props.email} onChange={props.handleInput} required />
            <div className="label-text">Email</div>
          </label>
          <label>
            <input type="text" id="userName-signup" name="username" value={props.username} onChange={props.handleInput} required />
            <div className="label-text">Username</div>
          </label>
          <label>
              <input type="password" id="password-signup" name="password" value={props.password} onChange={props.handleInput} required />
              <div className="label-text">Password</div>
          </label>
          <button id="signupSubmit">Submit</button>
        </form>
      </div>
    </div>
  );

  // <form action="dashboard.html"></form>
