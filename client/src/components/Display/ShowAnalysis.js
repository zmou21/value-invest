import React from "react";

//<i class="fas fa-check"></i> checkmark (style green)
//<i class="fas fa-times"></i> x (style red)

export const ShowAnalysis = props => (
  <div className="show-analysis">
    <div>
      <h3>Instrinsic Value: ${props.instrinicValueDCF}</h3>
      <p>{props.recommendation}</p>
    </div>
    <ul className="main-list">
      <h3>Price Technicals</h3>
      <li className="description-item"><strong className="title-info">Mean Target Price</strong><br></br>{props.targetMeanPrice}</li>
      <li className="description-item"><strong>Median Target Price</strong><br></br>{props.targetMedianPrice}</li>
      <h4>Dividends</h4>
      <li className="description-item"><strong>Dividend Yield</strong><br></br> {props.dividendYield}</li>
      <li className="description-item"><strong>Dividend Rate</strong><br></br>{props.dividendRate}</li>
    </ul>
    <ul className="main-list">
      <h3>Financials</h3>
      <li className="description-item"><strong className="title-info">Revenue</strong><br></br> {props.totalRevenue}<p>100%</p></li>
      <li className="description-item"><strong>Gross Profit</strong><br></br>{props.grossProfit}<p>{props.grossMargin}</p></li>
      <li className="description-item"><strong>Operating Costs</strong><br></br> {props.operatingCashflow}<p>{props.operatingMargins}</p></li>
      <li className="description-item"><strong>Net Income</strong><br></br> {props.operatingCashflow}<p>{props.profitMargin}</p></li>
    </ul>
    <ul className="main-list">
      <h3>Key Stats</h3>
      <h4>Future Earnings</h4>
      <li className="description-item"><strong>Forward PE</strong><br></br>
       { props.forwardPE <= 15 ? (
         <p>{props.forwardPE}<i className="fas fa-check" style={{color: "green"}}></i></p>
       ) : (
         <p>{props.forwardPE}<i className="fas fa-times" style={{color: "red"}}></i></p>
       ) }
      </li>
      <li className="description-item"><strong>PEG</strong><br></br>
       { props.PEG <= 1 ? (
         <p>{props.PEG}<i className="fas fa-check" style={{color: "green"}}></i></p>
       ) : (
         <p>{props.PEG}<i className="fas fa-times" style={{color: "red"}}></i></p>
       ) }
      </li>
      <h4>Debt Handling</h4>
      <li className="description-item"><strong>Current Ratio</strong><br></br>
       { props.currentRatio >= 1 ? (
         <p>{props.currentRatio}<i className="fas fa-check" style={{color: "green"}}></i></p>
       ) : (
         <p>{props.currentRatio}<i className="fas fa-times" style={{color: "red"}}></i></p>
       ) }
      </li>
      <li className="description-item"><strong>Quick Ratio</strong><br></br>
       { props.quickRatio >= 1 ? (
         <p>{props.quickRatio}<i className="fas fa-check" style={{color: "green"}}></i></p>
       ) : (
         <p>{props.quickRatio}<i className="fas fa-times" style={{color: "red"}}></i></p>
       ) }
      </li>
      <li className="description-item"><strong>Debt to Equity</strong><br></br>
       { props.debtToEquity <= 100 ? (
         <p>{props.debtToEquity}<i className="fas fa-check" style={{color: "green"}}></i></p>
       ) : (
         <p>{props.debtToEquity}<i className="fas fa-times" style={{color: "red"}}></i></p>
       ) }
      </li>
      <h4>Investor Return</h4>
      <li className="description-item"><strong>ROA</strong><br></br>
       { props.ROA >= 10 ? (
         <p>{props.ROA}%<i className="fas fa-check" style={{color: "green"}}></i></p>
       ) : (
         <p>{props.ROA}%<i className="fas fa-times" style={{color: "red"}}></i></p>
       ) }
      </li>
      <li className="description-item"><strong>ROE</strong><br></br>
       { props.ROE >= 10 ? (
         <p>{props.ROE}%<i className="fas fa-check" style={{color: "green"}}></i></p>
       ) : (
         <p>{props.ROE}%<i className="fas fa-times" style={{color: "red"}}></i></p>
       ) }
      </li>
    </ul>
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
