import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Form";
// import { Stockname, Quotes, Companyinfo, Companynews } from "../../components/Display";
// import Chart from "../../components/Charts";
// import API from "../../utils/API";
// import firebase from '../../firebase.js';
// import ImageUploader from 'react-images-upload';
import "../../css/dashboard.css";
import axios from "axios";

class Profile extends Component {
  constructor() {
    super();

    this.fileHandler = this.fileHandler.bind(this);

    this.state = {
      image: [],
      biography: "",
      name: "",
      email: "",
      phoneNumber: "",
      favoritedStocks: []
    }
  };

    componentDidMount() {

    }

    fileHandler = event => {
      console.log(event.target.files[0]);
      this.setState({
        image: event.target.files[0]
      })
    }

    uploadHandler = () => {
      axios.post('')
    }

    addUserInformation() {
      //add image, phone number, and biography
    }

    addFavoritedStocks() {
      //add favorited stocks from database
    }

    //possibly add function for update user information

    onDrop(picture) {
            this.setState({
                pictures: this.state.pictures.concat(picture),
            });
        }

  render() {
      return (
        <div>
          <input type='file' onChange={this.fileHandler}/>
        </div>
      );
  }

}

export default Profile;

// <ImageUploader
//     withIcon={true}
//     buttonText='Choose images'
//     onChange={this.onDrop}
//     imgExtension={['.jpg', '.gif', '.png', '.gif']}
//     maxFileSize={5242880}
// />
