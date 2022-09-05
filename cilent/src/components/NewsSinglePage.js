import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Carousel } from "react-bootstrap";
import './css/News.css';

export const NewsSinglePage = () => {

  const [banner, setBanner] = useState([]);
  const [news, setNews] = useState([]);
  const { newsId } = useParams();

  useEffect(() => {
    fetch("http://localhost:3333/banner")
      .then(res => res.json())
      .then(
        (result) => {
          setBanner(result.slice(-3));
        }
      )
  }, [])

  useEffect(() => {
    fetch(`http://localhost:3333/news/${newsId}/`)
      .then(res => res.json())
      .then(
        (result) => {
          setNews(result[0]);
        }
      )
  }, [])

  return (
    <>
      <div className="banner" id="banner">
        <Carousel style={{ maxWidth: '100%' }}>
          {banner.map((banner, index) => (
            <Carousel.Item key={index}>
              <Link to="/news" target="_blank" rel="noreferrer">
                <img
                  className="d-block w-100"
                  src={banner.banner_image}
                  alt={banner.alt}
                />
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="news-single-page" id="news-single-page">
        <Container>
          <Row>
            <Col size={12}>
              <h2 className="news_single_pag_title">{news.title}</h2>
              <div className="news_single_pag_detail" dangerouslySetInnerHTML={{ __html: news.detail }} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}