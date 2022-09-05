import React, { useState, useEffect } from 'react';
import { Container, Carousel, Row, Col, Tab, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import TrackVisibility from 'react-on-screen';
import './css/News.css';

export const News = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/banner")
      .then(res => res.json())
      .then(
        (result) => {
          setBanner(result);
        }
      )
  }, [])

  const [news, setNews] = useState([]);
  const [newsgame, setNewsgame] = useState([]);
  const [newsofficial, setNewsofficial] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch("http://localhost:3333/news")
      .then(res => res.json())
      .then(
        (result) => {
          setNews(result);
        }
      )
  }, [])

  useEffect(() => {
    fetch("http://localhost:3333/news/category/Games")
      .then(res => res.json())
      .then(
        (result) => {
          setNewsgame(result);
        }
      )
  }, [])

  useEffect(() => {
    fetch("http://localhost:3333/news/category/Official")
      .then(res => res.json())
      .then(
        (result) => {
          setNewsofficial(result);
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

      <div className="news-page" id="news-page">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2 className="news_text">NEWS
                      <span>ข่าว</span>
                    </h2>
                    <Tab.Container id="news-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-4" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">News</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Games</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Official</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            <input className="input_search" type="text" placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
                            {news.filter((value) => {
                              if (search === "") {
                                return value
                              } else if (value.title.toLowerCase().includes(search.toLowerCase())) {
                                return value
                              }
                            })
                              .map(news => (
                                <Col className="news_box" size={12} sm={4} md={4} key={news.id}>
                                  <div className="news_imgbox">
                                    <Link to={`/news/${news.id}`}><img className="news_img" src={news.thumbnail} /></Link>
                                  </div>
                                  <h4 className="news_title"><Link to={`/news/${news.id}`}>{news.title}</Link></h4>
                                  <ul className="news_tag_ul">
                                    <li className="news_tag_li">{news.tag}</li>
                                    <li className="news_date_li">{news.date.slice(0, 10)}</li>
                                  </ul>
                                </Col>
                              ))}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                            <input className="input_search" type="text" placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
                            {newsgame.filter((value) => {
                              if (search === "") {
                                return value
                              } else if (value.title.toLowerCase().includes(search.toLowerCase())) {
                                return value
                              }
                            })
                              .map(newsgame => (
                                <Col className="news_box" size={12} sm={4} md={4} key={newsgame.id}>
                                  <div className="news_imgbox">
                                    <Link to={`/news/${newsgame.id}`}><img className="news_img" src={newsgame.thumbnail} /></Link>
                                  </div>
                                  <h4 className="news_title"><Link to={`/news/${newsgame.id}`}>{newsgame.title}</Link></h4>
                                  <ul className="news_tag_ul">
                                    <li className="news_tag_li">{newsgame.tag}</li>
                                    <li className="news_date_li">{newsgame.date.slice(0, 10)}</li>
                                  </ul>
                                </Col>
                              ))}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Row>
                            <input className="input_search" type="text" placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
                            {newsofficial.filter((value) => {
                              if (search === "") {
                                return value
                              } else if (value.title.toLowerCase().includes(search.toLowerCase())) {
                                return value
                              }
                            })
                              .map(newsofficial => (
                                <Col className="news_box" size={12} sm={4} md={4} key={newsofficial.id}>
                                  <div className="news_imgbox">
                                    <Link to={`/news/${newsofficial.id}`}><img className="news_img" src={newsofficial.thumbnail} /></Link>
                                  </div>
                                  <h4 className="news_title"><Link to={`/news/${newsofficial.id}`}>{newsofficial.title}</Link></h4>
                                  <ul className="news_tag_ul">
                                    <li className="news_tag_li">{newsofficial.tag}</li>
                                    <li className="news_date_li">{newsofficial.date.slice(0, 10)}</li>
                                  </ul>
                                </Col>
                              ))}
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}