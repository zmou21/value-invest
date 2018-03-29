import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Form";
import { Stockname, Quotes } from "../../components/Display";
import API from "../../utils/API";

class Stocks extends Component {
  constructor() {
    super();

    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.postFavorite = this.postFavorite.bind(this);

    this.state = {
      ticker: "",
      companyName: "",
      price: "",
      standardPE: "",
      dayHigh: "",
      dayLow: "",
      priceChange: "",
      marketCap: "",
      volume: "",
      yearHigh: "",
      yearLow: "",
      sector: "",
      exchange: "",
      logo: ""
    };
  }


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

  handleFormInput(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  postFavorite(event) {
    event.preventDefault();
    API.postFavorite(this.state.companyName)
    .then(res => {
      console.log('quicksearch data', res);
    })
    .catch(err => console.log(err));
  }

  handleFormSubmit(event) {
    //console.log("API call is being made");
    event.preventDefault();

    API.getStocksIEX(this.state.ticker)
    .then(res => {
      console.log("---------------");
      console.log(res);
      console.log("---------------");

      if(this.state.ticker) {
        this.setState({
          companyName: res.data.quote.companyName,
          price: res.data.quote.latestPrice,
          standardPE: res.data.quote.peRatio,
          dayHigh: res.data.quote.high,
          dayLow: res.data.quote.low,
          priceChange: res.data.quote.change,
          marketCap: res.data.quote.marketCap,
          volume: res.data.quote.latestVolume,
          yearHigh: res.data.quote.week52High,
          yearLow: res.data.quote.week52Low,
          sector: res.data.quote.sector,
          exchange: res.data.quote.primaryExchange
        });
      }
    })
    .catch(err => console.log(err));

    API.getStockLogo(this.state.ticker)
    .then(res => {
      // console.log(res.data.url);
      if(this.state.ticker) {
        this.setState({
          logo: res.data.url
        });
      }
    })
    .catch(err => console.log(err));

  };



  render() {
    return (
      <div className="grid-container">
        <div>
          {!this.state.price ? (
            <div>
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
          ) : (
            <div>
              <Stockname
                companyName={this.state.companyName}
                companyLogo={this.state.logo}
                postFavorite={this.postFavorite}
              />
              <Quotes
                price={this.state.price}
                standardPE={this.state.standardPE}
                high={this.state.dayHigh}
                low={this.state.dayLow}
                change={this.state.priceChange}
                marketCap={this.state.marketCap}
                volume={this.state.volume}
                yearHigh={this.state.yearHigh}
                yearLow={this.state.yearLow}
                sector={this.state.sector}
                exchange={this.state.exchange}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Stocks;
