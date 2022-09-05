import React, { useState, useEffect } from 'react';
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NewsCardHome = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/news")
      .then(res => res.json())
      .then(
        (result) => {
          setNews(result.slice(0, 6));
        }
      )
  }, [])

  return (
    <div>
      <Row>
        {news.map(news => (
          <Col size={12} sm={4} md={4} key={news.id}>
            <div className="news_imgbox">
            <Link to={`/news/${news.id}`}><img className="news_img" src={news.thumbnail	} /></Link>
            </div>
            <h4 className="news_title"><Link to={`/news/${news.id}`}>{news.title}</Link></h4>
            <ul className="news_tag_ul">
              <li className="news_tag_li">{news.tag}</li>
            </ul>
          </Col>
        ))}
      </Row>
      <Link to="/news">
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <button className="news_btn news_btn_gradient">See More</button>
        </Col>
      </Link>
    </div>
  )
}