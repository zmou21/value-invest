import React, { Component } from "react";
import { Form, LoginModal, SignupModal } from "../../components/Home";
import "./style.css";
import "./login.css";
import firebase from '../../firebase.js';
import API from "../../utils/API";
import logo from "../../images/logo.png";
// import Video from "../../images/test_1.mp4";


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
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  this.PostUserCredentials = this.PostUserCredentials.bind(this);

    this.state = {
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
      name: this.state.name,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    const promise = auth.signInWithEmailAndPassword(this.state.email, this.state.password);
    promise.then(() => {
      auth.onAuthStateChanged(firebaseUser => {
          if (firebaseUser) {
            console.log(firebaseUser);
            window.location = "/search";
          } else {
            console.log("not logged in");
          }
        })
    }
    )
    promise.catch(error => console.log(error.message));
  }

  //handle the submission of signing people up
  handleSignUpSubmit(event) {
    console.log("signup worked");
    event.preventDefault();

    database.ref().push({
      name: this.state.name,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    if (this.state.name.length < 0) {
      alert("Please enter a you name");
      return;
    }
    else if (this.state.password.length < 5) {
      alert("Please enter a valid password");
      return;
    } else if (!this.state.email) {
      console.log("email invalid");
    }
    const promise =  auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
    promise.then(() => {
      auth.onAuthStateChanged(firebaseUser => {
          if (firebaseUser) {
            console.log(firebaseUser);
            window.location = "/search";
          } else {
            console.log("not logged in");
          }
        })
    })
    promise.catch(error => console.log(error.message));

    this.PostUserCredentials();
  }

  handleFormSubmit() {
    //setup API route to submit comment and store in backend
    const data = {
      name: this.state.name,
      email: this.state.email,
      comment: this.state.comment
    }
    //console.log("Form Submitted!", data)

    API.postComment(data)
    .then(res => {
      //console.log("this is being posted", data);
    })
    .catch(err => console.log(err))
  }

  PostUserCredentials() {
    console.log("post route hit in home.js");

    const data = {
      username: this.state.name,
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
          <div className="login">
            <div className="logo">
                <img src={logo} alt="logo" width="200px" height="70px"/>
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
          <div className="caption">
              <h3 id="header-title">The Best Value Investing Platform on the Web!</h3>
              <a href="/search"><button type="button" name="button">Get Started!</button></a>
          </div>
        </div>

        <div>
          <h3>Product Features</h3>
          <div className="grid-container">
            <div id="item1">
              <i className="far fa-money-bill-alt" id="fa1"></i>
              <h3>Discounted Cash Flow Analysis</h3>
            </div>
            <div id="item2">
              <i className="far fa-money-bill-alt" id="fa2"></i>
              <h3>Buy Sell Hold Recommendations</h3>
            </div>
            <div id="item3">
              <i className="far fa-money-bill-alt" id="fa3"></i>
              <h3>Clean Interface</h3>
            </div>
          </div>
        </div>

        <div className="bgimg-2">
          <div className="caption">
          </div>
        </div>

        <div id="about">
          <h3>About</h3>
          <p>Textalign Center; This will be filled out soon! I promise! Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
        </div>

        <div className="bgimg-2">
          <div className="caption">
            <span className="border">Image of company/money</span>
          </div>
        </div>

        <div id="contact">
          <div id="contact-div">
            <h3>Contact Me</h3>
            <Form
              name={this.state.name}
              comment={this.state.comment}
              email={this.state.email}
              handleinput={this.handleInput}
              handleformsubmit={this.handleFormSubmit}
            />
          </div>
        </div>

        <div className="bgimg-3">
          <div className="caption">

          </div>
        </div>

        <div id="footer">
          <div id="footer-div">
            <footer style={{textAlign: "center"}}>
              &copy; 2018 MOUMEN
            </footer>
          </div>
        </div>
      </div>
    );
  };
};

export default Home;


// <video autoPlay muted loop id="myVideo">
//   <source src={Video} type="video/mp4"/>
// </video>
//
