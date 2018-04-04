import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Form";
import { Stockname, ShowAnalysis } from "../../components/Display";
import Chart from "../../components/Charts";
import API from "../../utils/API";
import firebase from '../../firebase.js';

const auth = firebase.auth();

class Value extends Component {
  constructor() {
    super();

    this.dcfIntrinsicValue = this.dcfIntrinsicValue.bind(this);
    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.postFavorite = this.postFavorite.bind(this);
    this.searchToggle = this.searchToggle.bind(this);
    this.advancedYahooData = this.advancedYahooData.bind(this);
    this.stockRecommendation = this.stockRecommendation.bind(this);
    this.formatData = this.formatData.bind(this);

    this.state = {
      isHidden: true,
      price: "",
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
      trailingPS: "",
      next5YearGrowth: "",
      totalNPVfcf: 0,
      year10FcfValue: "",
      companyValue: "",
      instrinicValueDCF: "",
      recommendation: "",
      name: "",
      email: ""
    }
  }

  //*********************************************
  //mounts component async
  //*********************************************
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        //console.log(user);
        this.setState({ user, email: user.email });
        this.getUsersName();
      } else {
        window.location = "/";
      }
    });
  };

  //*********************************************
    //logouts users that are signed in
  //*********************************************
  logout() {
  auth.signOut()
    .then(() => {
      this.setState({
        email: null
      });
      window.location = "/";
    })
    .catch(err => console.log(err));
  }

  //*********************************************
  //get users name to display on the page
  //*********************************************
  getUsersName() {
    if(this.state.email) {
      API.getUsersName(this.state.email)
      .then(res => {
        console.log("from database", res);
        this.setState({
          name: res.data.name
        })
      })
    }
  }

  //*********************************************
  //NPV freecashflow calculation
  //*********************************************
  dcfIntrinsicValue() {
    const year = 10;
    const growthDecline = (1 - 0.05);
    const valuationLastFCF = 12;
    const discountRate = 0.15;
    const marginSafety = 0.30;
    const FcfGrowth = [this.state.freeCashFlow];
    const npvFcfArray = [];

    if(this.state.next5YearGrowth < 0 || !this.state.next5YearGrowth) {
      console.log("Negative growth rate, can't do the math OR growth rate doesn't exist");
    }
    else {

      if(this.state.next5YearGrowth > 1 ) {
        let newEarningsRate = this.state.next5YearGrowth / 100;
        newEarningsRate = newEarningsRate * (1 - marginSafety);
        let currentFcf = (1 + newEarningsRate) * (this.state.freeCashFlow);
        FcfGrowth.push(currentFcf);

        for(let i = 1; i < year; i++) {
          const fcf = FcfGrowth[i];
          const decline = (growthDecline ** (i - 1));
          let growthRate = 1 + (newEarningsRate * decline);
          const nextFcf = fcf * (growthRate)
          FcfGrowth.push(nextFcf);

        }
        //console.log(FcfGrowth);
      }
      else {
        this.setState({
          next5YearGrowth: this.state.next5YearGrowth * (1 - marginSafety)
        })
        let currentFcf = (1 + this.state.next5YearGrowth) * (this.state.freeCashFlow);
        FcfGrowth.push(currentFcf);
        for(let i = 1; i < year; i++) {
          const fcf = FcfGrowth[i];
          const decline = (growthDecline ** (i - 1));
          let growthRate = 1 + (this.state.next5YearGrowth * decline);
          const nextFcf = fcf * (growthRate)
          FcfGrowth.push(nextFcf);
        }
        //console.log(FcfGrowth);
      }
    }

    for(let i = 1; i < FcfGrowth.length; i++) {
      let npvFcf = (FcfGrowth[i]) / ((1 + discountRate) ** i);
      npvFcfArray.push(npvFcf);

    }

    for(let i = 0; i < npvFcfArray.length; i++) {
      // this.setState({
        this.state.totalNPVfcf += npvFcfArray[i]
      // })
    }

    // this.setState({
    //
    // })
    this.state.year10FcfValue = npvFcfArray[9] * valuationLastFCF;

    this.state.companyValue = (this.state.year10FcfValue + this.state.totalNPVfcf + this.state.totalCash) - this.state.totalDebt;
    //console.log("companyvalue", this.state.companyValue);

    let calculateIV = this.state.companyValue / this.state.sharesOutstanding;
    calculateIV = calculateIV.toFixed(2);

    this.setState({
      instrinicValueDCF: calculateIV
    })
    //console.log(`Company Value $${this.state.instrinicValueDCF}`);

    this.stockRecommendation();
  }

  //*********************************************
  //compare intrinsic value to current price and output a buy sell or hold recommendation
  //*********************************************

  stockRecommendation() {
    if(this.state.price > this.state.instrinicValueDCF) {
      console.log("Don't buy");
      this.setState({
        recommendation: "Don't Buy!"
      })
    }
    else if(this.state.price === this.state.instrinicValueDCF) {
      this.setState({
        recommendation: "Hold"
      })
    }
    else if (this.state.price < this.state.instrinicValueDCF) {
      console.log("Buy!!");
      this.setState({
        recommendation: "Buy!"
      })
    }
    else {
      console.log("error!");
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
      //console.log("api route is being hit inside function");
      //console.log(res);
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
        trailingPS: res.data.summaryDetail.priceToSalesTrailing12Months,
        price: res.data.price.regularMarketPrice
      })
      // .catch(err => console.log(err))

      API.getGrowthData(this.state.ticker)
      .then(res => {
        //console.log(res);
        this.setState({
          next5YearGrowth: res.data
        })
        this.dcfIntrinsicValue();
      })
      // .catch(err => console.log(err))

      //function called here to format data inputs
      this.formatData();

    })

  }

  formatData(radix) {
    //operating margin
    let opM = this.state.operatingMargins * 100;
    opM = opM.toFixed(2);
    opM = parseInt(opM, radix);

    //profit marginproM
    let proM = this.state.profitMargin * 100;
    proM = proM.toFixed(2);
    proM = parseInt(proM, radix);

    //gross margin
    let gM = this.state.grossMargin * 100;
    gM = gM.toFixed(2);
    gM = parseInt(gM, radix);

    //dividendYield
    let dY = this.state.dividendYield * 100;
    dY = dY.toFixed(2);
    dY = parseInt(dY, radix);

    //dividendYield
    let roa = this.state.ROA * 100;
    roa = roa.toFixed(2);
    roa = parseInt(roa, radix);

    //dividendYield
    let roe = this.state.ROE * 100;
    roe = roe.toFixed(2);
    roe = parseInt(roe, radix);

    //median target price
    let mTP = this.state.targetMedianPrice;
    mTP = mTP.toFixed(2);
    mTP = parseInt(mTP, radix);

    //median target price
    let aTP = this.state.targetMeanPrice;
    aTP = aTP.toFixed(2);
    aTP = parseInt(aTP, radix);

    //current ration

    //quick ration

    //beta

    //debtToEquity

    //earnings growthRate

    //rev growth rate

    //forwardPE

    //price to priceBook

    //price to sales

    //price to earnings


    this.setState({
      operatingMargins: opM,
      profitMargin: proM,
      grossMargin: gM,
      dividendYield: dY,
      ROA: roa,
      ROE: roe,
      targetMedianPrice: mTP,
      targetMeanPrice: aTP
    })
  }

  //create function to calculate operating costs, etc.

  //*********************************************
  //renders to the page
  //*********************************************
  render() {
    return(
      <div>
          <div>
            <a onClick={this.logout} id="logout" style={{cursor: "pointer"}}>Logout</a>
            <h3 id="animate-name">Hello, {this.state.name}</h3>
          </div>
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
                <ShowAnalysis
                  currentRatio={this.state.currentRatio}
                  debtToEquity={this.state.debtToEquity}
                  freeCashFlow={this.state.freeCashFlow}
                  grossMargin={this.state.grossMargin}
                  grossProfit={this.state.grossProfit}
                  operatingCashflow={this.state.operatingCashflow}
                  operatingMargins={this.state.operatingMargins}
                  quickRatio={this.state.quickRatio}
                  profitMargin={this.state.profitMargin}
                  ROA={this.state.ROA}
                  ROE={this.state.ROE}
                  targetMeanPrice={this.state.targetMeanPrice}
                  targetMedianPrice={this.state.targetMedianPrice}
                  totalCash={this.state.totalCash}
                  totalDebt={this.state.totalDebt}
                  totalRevenue={this.state.totalRevenue}
                  forwardPE={this.state.forwardPE}
                  beta={this.state.beta}
                  forwardEPS={this.state.forwardEPS}
                  PEG={this.state.PEG}
                  dividendRate={this.state.dividendRate}
                  dividendYield={this.state.dividendYield}
                  instrinicValueDCF={this.state.instrinicValueDCF}
                  recommendation={this.state.recommendation}
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
