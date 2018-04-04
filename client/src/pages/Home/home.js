import React, { Component } from "react";
import { Form, LoginModal, SignupModal } from "../../components/Home";
import "./style.css";
import "./login.css";
import firebase from '../../firebase.js';
import API from "../../utils/API";

let database = firebase.database();
const auth = firebase.auth();

class Home extends Component {
  constructor() {
    super();

  this.toggleLogin = this.toggleLogin.bind(this);
  this.toggleSignUp = this.toggleSignUp.bind(this);
  this.handleInput = this.handleInput.bind(this);
  this.handleLoginSubmit =  this.handleLoginSubmit.bind(this);
  this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
      image: "",
      name: "",
      email: "",
      comment: "",
      toggleLogin: false,
      toggleSignup: false
    }
  }

  //toggles log in modal
  toggleLogin() {
    //console.log("login modal is being clicked");
    this.setState(prevState => ({
        toggleLogin: !prevState.toggleLogin
    }));
  }

  //toggles sign up modal
  toggleSignUp() {
    //console.log("signup modal is being clicked");
    this.setState(prevState => ({
        toggleSignUp: !prevState.toggleSignUp
    }));
  }

  //form input function
  handleInput(event) {
    const name = event.target.name;
    const value =  event.target.value;

    this.setState({
      [name]: value
    });
  }

  //handle the submission of logging people in
  handleLoginSubmit(event) {
    //console.log("login worked");
    event.preventDefault();

    database.ref().push({
      username: this.state.username,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    const promise = auth.signInWithEmailAndPassword(this.state.email, this.state.password);

    promise.catch(error => console.log(error.message));

    auth.onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(firebaseUser);
        window.location = "/search";
      }
      else {
        console.log("Not logged in");
      }
    });
  }

  //handle the submission of signing people up
  handleSignUpSubmit(event) {
    console.log("signup worked");
    event.preventDefault();

    database.ref().push({
      username: this.state.username,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    if (this.state.username.length < 0) {
      alert("Please enter a username");
      return;
    }
    else if (this.state.password.length < 5) {
      alert("Please enter a valid password");
      return;
    } else if (!this.state.email) {
      console.log("email invalid");
    }
    const promise =  auth.createUserWithEmailAndPassword(this.state.email, this.state.password);

    promise.catch(error => console.log(error.message));

    auth.onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(firebaseUser);
        window.location = "/search";
      }
      else {
        console.log("Not logged in");
      }
    });
  }

  PostUserCredentials() {
    console.log("post route hit in home.js");

    const data = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email
    }

    API.postUserCredentials(data)
    .then(res => {
      console.log('quicksearch data', res);
    })
    .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <div className="bgimg-1">
          <div className="caption">
              <h3 id="header-title">The Best Value Investing Platform on the Web!</h3>
              <a href="/search"><button type="button" name="button">Get Started!</button></a>
          </div>
          <div className="login">
            <div className="logo">
                <img src="#" alt="logo" width="200px" height="75px"/>
            </div>
            <div>
              <span id="loginbtn"><a onClick={this.toggleLogin} className="linkstyle">login</a>
                <LoginModal
                  toggle={this.state.toggleLogin}
                  toggleClick={this.toggleLogin}
                  handleInput={this.handleInput}
                  handleLoginSubmit={this.handleLoginSubmit}
                />
              </span>
            </div>
          </div>
            <div>
              <span id="signupbtn"><a onClick={this.toggleSignUp} className="linkstyle">Sign Up</a>
                <SignupModal
                  name={this.state.name}
                  toggle={this.state.toggleSignUp}
                  toggleClick={this.toggleSignUp}
                  handleInput={this.handleInput}
                  handleSignUpSubmit={this.handleSignUpSubmit}
                />
              </span>
            </div>
        </div>

        <div>
          <h3>Product Features</h3>
          <div className="grid-container">
            <div id="item1">
              <i className="far fa-money-bill-alt" id="fa1"></i>
              <h3>Feature 1</h3>
            </div>
            <div id="item2">
              <i className="far fa-money-bill-alt" id="fa2"></i>
              <h3>Feature 2</h3>
            </div>
            <div id="item3">
              <i className="far fa-money-bill-alt" id="fa3"></i>
              <h3>Feature 3</h3>
            </div>
          </div>
        </div>

        <div className="bgimg-2">
          <div className="caption">
            <span className="border">TBD - Product Image placeholder</span>
          </div>
        </div>

        <div id="about">
          <h3>About</h3>
          <p>Textalign Center; Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
        </div>

        <div className="bgimg-2">
          <div className="caption">
            <span className="border">Image of company/money</span>
          </div>
        </div>

        <div id="contact">
          <div id="contact-div">
            <h3>Contact Me</h3>
            <Form />
          </div>
        </div>

        <div className="bgimg-3">
          <div className="caption">
            <span className="border">SCROLL UP</span>
          </div>
        </div>

        <div id="footer">
          <div id="footer-div">
            <footer>
              &copy 2018 MOUMEN
            </footer>
          </div>
        </div>
      </div>
    );
  };
};

export default Home;
