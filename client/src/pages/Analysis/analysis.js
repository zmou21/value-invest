import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Form";
import { Stockname } from "../../components/Display";
import Chart from "../../components/Charts";
import API from "../../utils/API";

class Value extends Component {
  constructor() {
    super();

    this.freeCashFlow = this.freeCashFlow.bind(this);
    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.postFavorite = this.postFavorite.bind(this);
    this.searchToggle = this.searchToggle.bind(this);
    this.advancedYahooData = this.advancedYahooData.bind(this);


    this.state = {
      isHidden: true,
      ticker: "",
      companyName: "",
      currentRatio: "",
      debtToEquity: "",
      earningsGrowth: "",
      freeCashFlow: "",
      grossMargin: "",
      grossProfit: "",
      operatingCashflow: "",
      operatingMargins: "",
      quickRatio: "",
      profitMargin: "",
      ROA: "",
      ROE: "",
      revGrowthPercent: "",
      targetMeanPrice: "",
      targetMedianPrice: "",
      totalCash: "",
      totalCashShare: "",
      totalDebt: "",
      totalRevenue: "",
      forwardPE: "",
      beta: "",
      forwardEPS: "",
      PEG: "",
      priceBook: "",
      sharesOutstanding: "",
      shortRatio: "",
      dividendYield: "",
      dividendRate: "",
      trailingPS: ""
    }
  }

  freeCashFlow() {
    let year = 10;
    let growthDecline = (1 - 0.05);
    const discountRate = 0.15;

    if(this.state.earningsGrowth < 0 || !this.state.earningsGrowth) {
      console.log("Negative growth rate, can't do the math OR growth rate doesn't exist");
    }
    else {

      if(this.state.earningsGrowth > 1 ) {
        let newEarningsRate = this.state.earningsGrowth / 100;
        const npvFCF = [this.state.freeCashFlow];
        let currentFcf = (1 + newEarningsRate) * (this.state.freeCashFlow);
        npvFCF.push(currentFcf);

        for(let i = 1; i < year; i++) {
          const fcf = npvFCF[i];
          const decline = (growthDecline ** (i - 1));
          let growthRate = 1 + (newEarningsRate * decline);
          const nextFcf = fcf * (growthRate)
          npvFCF.push(nextFcf);

        }
        console.log(npvFCF);
      }
      else {
        const npvFCF = [this.state.freeCashFlow];
        let currentFcf = (1 + this.state.earningsGrowth) * (this.state.freeCashFlow);
        npvFCF.push(currentFcf);
        for(let i = 1; i < year; i++) {
          const fcf = npvFCF[i];
          const decline = (growthDecline ** (i - 1));
          let growthRate = 1 + (this.state.earningsGrowth * decline);
          const nextFcf = fcf * (growthRate)
          npvFCF.push(nextFcf);
        }
        console.log(npvFCF);
      }

    }

  }

  //*********************************************
  //toggles the search icon to show and hide the search field
  //*********************************************
  searchToggle(event) {
    console.log("event clicked");
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  //*********************************************
  //posts to api/route and database when a user favorites a stock
  //*********************************************
  postFavorite(event) {
    event.preventDefault();
    console.log("post route hit in quicksearch");
    API.postFavorite(this.state.companyName)
    .then(res => {
      console.log('quicksearch data', res);
    })
    .catch(err => console.log(err));
  }

  //*********************************************
  //handles input of the form
  //*********************************************
  handleFormInput(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  //*********************************************
  //get advanced data from yahoo npm package
  //*********************************************
  advancedYahooData(ticker) {
    console.log("being hit outside of the function");
    API.getAdvancedData(this.state.ticker)
    .then(res => {
      console.log("api route is being hit inside function");
      console.log(res);
    })
  }


  //*********************************************
  //function so that when form is submitted it calls the API route
  //*********************************************
  handleFormSubmit(event) {
    //console.log("API call is being made");
    event.preventDefault();

    API.getStocksIEX(this.state.ticker)
    .then(res => {
      // console.log("---------------");
      // console.log(res);
      // console.log("---------------");

      if(this.state.ticker) {
        this.setState({
          companyName: res.data.quote.companyName
        });
      }
    })
    .catch(err => console.log(err));

// res.data.quote.symbol
    API.postTicker(this.state.ticker)
    .then(res => {
      console.log("big bang",res);

    })
    .catch(err => console.log(err))


    API.getAdvancedData(this.state.ticker)
    .then(res => {
      console.log("api route is being hit inside function");
      console.log(res);
      this.setState({
        currentRatio: res.data.financialData.currentRatio,
        debtToEquity: res.data.financialData.debtToEquity,
        earningsGrowth: res.data.financialData.earningsGrowth,
        freeCashFlow: res.data.financialData.freeCashflow,
        grossMargin: res.data.financialData.grossMargins,
        grossProfit: res.data.financialData.grossProfits,
        operatingCashflow: res.data.financialData.operatingCashflow,
        operatingMargins: res.data.financialData.operatingMargins,
        quickRatio: res.data.financialData.quickRatio,
        profitMargin: res.data.financialData.profitMargins,
        ROA: res.data.financialData.returnOnAssets,
        ROE: res.data.financialData.returnOnEquity,
        revGrowthPercent: res.data.financialData.revenueGrowth,
        targetMeanPrice: res.data.financialData.targetMeanPrice,
        targetMedianPrice: res.data.financialData.targetMedianPrice,
        totalCash: res.data.financialData.totalCash,
        totalCashShare: res.data.financialData.totalCashPerShare,
        totalDebt: res.data.financialData.totalDebt,
        totalRevenue: res.data.financialData.totalRevenue,
        forwardPE: res.data.defaultKeyStatistics.forwardPE,
        beta: res.data.defaultKeyStatistics.beta,
        forwardEPS: res.data.defaultKeyStatistics.forwardEps,
        PEG: res.data.defaultKeyStatistics.pegRatio,
        priceBook: res.data.defaultKeyStatistics.priceToBook,
        sharesOutstanding: res.data.defaultKeyStatistics.sharesOutstanding,
        shortRatio: res.data.defaultKeyStatistics.shortRatio,
        dividendYield: res.data.summaryDetail.dividendYield,
        dividendRate: res.data.summaryDetail.dividendRate,
        trailingPS: res.data.summaryDetail.priceToSalesTrailing12Months
      })

      this.freeCashFlow();
    })

  }

  //*********************************************
  //renders to the page
  //*********************************************
  render() {
    return(
      <div>
          <div className="search-button">
            <h3 className="quicksearch-name">Deep Search</h3>
            <i className="search-toggle fas fa-search" onClick={this.searchToggle}></i>
          </div>
          <div>
            {!this.state.companyName ? ( //ternary operator that displays only if stock is searched
                <div>
                  <h3 className="quicksearch-name">Deep Search</h3>
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
              <div className="row">
                <Stockname
                  companyName={this.state.companyName}
                  website={this.state.website}
                />
              </div>
            )}
          </div>
      </div>
    )
  }

}

export default Value;

// <Chart
// chartData={this.state.chartData}
// company={this.state.companyName}
// legendPosition="bottom"
// />
// <Quotes
//   price={this.state.price}
//   standardPE={this.state.standardPE}
//   high={this.state.dayHigh}
//   low={this.state.dayLow}
//   change={this.state.priceChange}
//   marketCap={this.state.marketCap}
//   volume={this.state.volume}
//   yearHigh={this.state.yearHigh}
//   yearLow={this.state.yearLow}
// />
// <Companyinfo
//   sector={this.state.sector}
//   exchange={this.state.exchange}
//   description={this.state.description}
//   industry={this.state.industry}
// />
// <Companynews
//   companyNews={this.state.companyNews}
// />
