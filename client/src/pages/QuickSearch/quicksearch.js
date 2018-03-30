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
    this.searchToggle = this.searchToggle.bind(this);

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
      logo: "",
      isHidden: true
    };
  }


  // Add code here to get all books from the database and save them to this.state.books
  // componentDidMount() { //componentWillMount() another component option
  //   this.getBook();
  // }

  //toggles the search icon to show and hide the search field
  searchToggle(event) {
    console.log("event clicked");

    this.setState({
      isHidden: !this.state.isHidden
    })

  }

  handleFormInput(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  postFavorite(event) {
    event.preventDefault();
    console.log("post route hit in quicksearch");
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


//className="grid-container"
  render() {
    return (
      <div>
        <div>
          {this.state.isHidden ? (
              <div className="search-button">
                <h3 className="quicksearch-name">Quick Search</h3>
                <i className="search-toggle fas fa-search" onClick={this.searchToggle}></i>
              </div>
              ) : (
              <div>
                {!this.state.price ? ( //ternary operator that displays only if stock is searched
                    <div>
                      <h3 className="quicksearch-name">Quick Search</h3>
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
                ) : (
                  <div>
                    <Stockname
                      companyName={this.state.companyName}
                      companyLogo={this.state.logo}
                      postFavorite={this.postFavorite}
                    />
                  <hr/>
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
            )}
          </div>
      </div>
    );
  }
}

export default Stocks;
