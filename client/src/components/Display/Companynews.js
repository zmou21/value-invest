import React from "react";

export const Companynews = props => (
  <div className="company-news">
      {props.companyNews.map(news => (
        <ul className="news-list" key={news.url}>
            <h5 style={{display: "inline", margin: "1%"}}>Company News</h5>
            <li className="description-item-title"><a href={news.url} target="_blank"><strong className="title-info">{news.headline}</strong></a></li>
            <li className="description-item-news"><strong className="summary-info">Summary:</strong><br/>{news.summary}</li>
            <li className="description-item-source">{news.source}</li>
        </ul>
      ))
      }
  </div>
);
