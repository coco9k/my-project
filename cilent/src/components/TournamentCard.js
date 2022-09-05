import React, { useState, useEffect } from 'react';
import { Col, Row } from "react-bootstrap";

export const TournamentCard = () => {

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
          <Col className="tournament_box" size={12} sm={4} md={4} key={news.id}>
            <div className="tournament_imgbox">
              <a href="/"><img className="news_img" src={news.thumbnail} /></a>
            </div>
            <h4 className="tournament_title"><a href="/">{news.title}</a></h4>
            <ul className="tournament_tag_ul">
              <li className="tournament_tag_li">{news.tag}</li>
              <li className="tournament_regi">
                <button>สมัครเลย!!</button>
              </li>
            </ul>
          </Col>
        ))}
      </Row>
    </div>
  )
}