import React from "react";

//<i class="fas fa-check"></i> checkmark (style green)
//<i class="fas fa-times"></i> x (style red)

export const ShowAnalysis = props => (
  <div className="show-analysis">
    <div id="analysis">
      <h3 id="intrinsic">Instrinsic Value: ${props.instrinicValueDCF}</h3>
      <p id="recommendation">{props.recommendation}</p>
    </div>
    <ul className="main-list-analysis-1">
      <h3>Price Technicals</h3>
      <li className="description-item-analysis"><strong className="list-titles">Mean Target Price</strong><br></br>${props.targetMeanPrice}</li>
      <li className="description-item-analysis"><strong className="list-titles">Median Target Price</strong><br></br>${props.targetMedianPrice}</li>
      <h4 style={{textDecoration: "underline"}}>Dividends</h4>
      <li className="description-item-analysis"><strong className="list-titles">Dividend Yield</strong><br></br> {props.dividendYield}%</li>
      <li className="description-item-analysis"><strong className="list-titles">Dividend Rate</strong><br></br>{props.dividendRate}</li>
    </ul>
    <ul className="main-list-analysis-2">
      <h3>Financials</h3>
      <li className="description-item-analysis"><strong className="list-titles">Revenue</strong><br></br>${props.totalRevenue}<p style={{display: "inline", marginLeft: "60%"}}>100%</p></li>
      <li className="description-item-analysis"><strong className="list-titles">Gross Profit</strong><br></br>${props.grossProfit}<p style={{display: "inline", marginLeft: "60%"}}>{props.grossMargin}%</p></li>
      <li className="description-item-analysis"><strong className="list-titles">Operating Costs</strong><br></br>${props.operatingCashflow}<p style={{display: "inline", marginLeft: "65%"}}>{props.operatingMargins}%</p></li>
      <li className="description-item-analysis"><strong className="list-titles">Net Income</strong><br></br>${props.operatingCashflow}<p style={{display: "inline", marginLeft: "65%"}}>{props.profitMargin}%</p></li>
    </ul>
    <div className="main-list-analysis-3">
      <h3>Key Stats</h3>
      <ul className="stats-1">
        <h4 style={{textDecoration: "underline"}}>Future Earnings</h4>
        <li className="description-item-analysis"><strong className="list-titles">Forward PE</strong><br></br>
         { props.forwardPE <= 15 ? (
           <p className="show-results">{props.forwardPE}<i className="fa-icons fas fa-check" style={{color: "green"}}></i></p>
         ) : (
           <p className="show-results">{props.forwardPE}<i className="fa-icons fas fa-times" style={{color: "red"}}></i></p>
         ) }
        </li>
        <li className="description-item-analysis"><strong className="list-titles">PEG</strong><br></br>
         { props.PEG <= 1 ? (
           <p className="show-results">{props.PEG}<i className="fa-icons fas fa-check" style={{color: "green"}}></i></p>
         ) : (
           <p className="show-results">{props.PEG}<i className="fa-icons fas fa-times" style={{color: "red"}}></i></p>
         ) }
        </li>
        </ul>
        <ul className="stats-2">
          <h4 style={{textDecoration: "underline", display: "inline"}}>Debt Handling</h4>
          <li className="description-item-analysis"><strong className="list-titles">Current Ratio</strong><br></br>
           { props.currentRatio >= 1 ? (
             <p className="show-results">{props.currentRatio}<i className="fa-icons fas fa-check" style={{color: "green"}}></i></p>
           ) : (
             <p className="show-results">{props.currentRatio}<i className="fa-icons fas fa-times" style={{color: "red"}}></i></p>
           ) }
          </li>
          <li className="description-item-analysis"><strong className="list-titles">Quick Ratio</strong><br></br>
           { props.quickRatio >= 1 ? (
             <p className="show-results">{props.quickRatio}<i className="fa-icons fas fa-check" style={{color: "green"}}></i></p>
           ) : (
             <p className="show-results">{props.quickRatio}<i className="fa-icons fas fa-times" style={{color: "red"}}></i></p>
           ) }
          </li>
          <li className="description-item-analysis"><strong className="list-titles">Debt to Equity</strong><br></br>
           { props.debtToEquity <= 100 ? (
             <p className="show-results">{props.debtToEquity}%<i className="fa-icons fas fa-check" style={{color: "green"}}></i></p>
           ) : (
             <p className="show-results">{props.debtToEquity}%<i className="fa-icons fas fa-times" style={{color: "red"}}></i></p>
           ) }
          </li>
        </ul>
        <ul className="stats-3">
        <h4 style={{textDecoration: "underline"}}>Investor Return</h4>
        <li className="description-item-analysis"><strong className="list-titles">ROA</strong><br></br>
         { props.ROA >= 10 ? (
           <p className="show-results">{props.ROA}%<i className="fa-icons fas fa-check" style={{color: "green"}}></i></p>
         ) : (
           <p className="show-results">{props.ROA}%<i className="fa-icons fas fa-times" style={{color: "red"}}></i></p>
         ) }
        </li>
        <li className="description-item-analysis"><strong className="list-titles">ROE</strong><br></br>
         { props.ROE >= 10 ? (
           <p className="show-results">{props.ROE}%<i className="fa-icons fas fa-check" style={{color: "green"}}></i></p>
         ) : (
           <p className="show-results">{props.ROE}%<i className="fa-icons fas fa-times" style={{color: "red"}}></i></p>
         ) }
        </li>
      </ul>
    </div>

  </div>
);

//setup ternary conditional for forwardPE, ROE, etc
//breakup based on fundamentals/balance sheet/income statement, etc.
//calculate operating cost, COGS, net income

//currentRatio: res.data.financialData.currentRatio, > 1
// debtToEquity: res.data.financialData.debtToEquity, < 1
// earningsGrowth: res.data.financialData.earningsGrowth,
// freeCashFlow: res.data.financialData.freeCashflow, > 0
// grossMargin: res.data.financialData.grossMargins,
// grossProfit: res.data.financialData.grossProfits,
// operatingCashflow: res.data.financialData.operatingCashflow,
// operatingMargins: res.data.financialData.operatingMargins,
// quickRatio: res.data.financialData.quickRatio,
// profitMargin: res.data.financialData.profitMargins,
// ROA: res.data.financialData.returnOnAssets,
// ROE: res.data.financialData.returnOnEquity,
// revGrowthPercent: res.data.financialData.revenueGrowth,
// targetMeanPrice: res.data.financialData.targetMeanPrice,
// targetMedianPrice: res.data.financialData.targetMedianPrice,
// totalCash: res.data.financialData.totalCash,
// totalCashShare: res.data.financialData.totalCashPerShare,
// totalDebt: res.data.financialData.totalDebt,
// totalRevenue: res.data.financialData.totalRevenue,
// forwardPE: res.data.defaultKeyStatistics.forwardPE,
// beta: res.data.defaultKeyStatistics.beta,
// forwardEPS: res.data.defaultKeyStatistics.forwardEps,
// PEG: res.data.defaultKeyStatistics.pegRatio,
// priceBook: res.data.defaultKeyStatistics.priceToBook,
// sharesOutstanding: res.data.defaultKeyStatistics.sharesOutstanding,
// shortRatio: res.data.defaultKeyStatistics.shortRatio,
// dividendYield: res.data.summaryDetail.dividendYield,
// dividendRate: res.data.summaryDetail.dividendRate,
// trailingPS: res.data.summaryDetail.priceToSalesTrailing12Months,
// price: res.data.price.regularMarketPrice
