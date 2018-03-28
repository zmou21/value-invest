import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";

class Stocks extends Component {

  state = {
    ticker: "",
    price: "",
    standardPE: ""
  };

  // Add code here to get all books from the database and save them to this.state.books
  // componentDidMount() { //componentWillMount() another component option
  //   this.getBook();
  // }
  //
  // getBook = () => {
  //   API.getBooks()
  //     .then(res => this.setState({ books: res.data }))
  //     .catch(err => console.log(err));
  // }

  handleFormInput = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    //console.log(this.state.ticker);
    API.getStocksIEX(this.state.ticker)
    .then(res => {
      console.log(res);
      if(this.state.ticker) {
        this.setState({
          price: res.data.quote.close,
          standardPE: res.data.quote.peRatio
        });
      }
    })
    .catch(err => console.log(err));
  };



  render() {
    return (
      <div className="grid-container">
        <div>
          <Input
            name="ticker"
            placeholder="Search Here"
            value={this.state.ticker}
            onChange={this.handleFormInput}
          />
          <FormBtn
            onClick={this.handleFormSubmit}
          >Search Stock
          </FormBtn>
        </div>
      </div>
    );
  }
}

export default Stocks;
