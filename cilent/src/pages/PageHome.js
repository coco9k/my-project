import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import CarouselTeam from 'react-multi-carousel';
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import 'react-multi-carousel/lib/styles.css';
import './css/PageHome.css'

export const PageHome = () => {

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

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3333/teams")
            .then(res => res.json())
            .then(
                (result) => {
                    setTeams(result);
                }
            )
    }, [])

    const [news, setNews] = useState([]);
    const [newsgame, setNewsgame] = useState([]);
    const [newsofficial, setNewsofficial] = useState([]);

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

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3333/videos")
            .then(res => res.json())
            .then(
                (result) => {
                    setVideos(result.slice(-6));
                }
            )
    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


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
            <div className="teams" id="teams">
                <Container>
                    <Row>
                        <Col size={12}>
                            <div className="teams-bx wow zoomIn">
                                <h2 className="teams_text">TEAMS
                                    <span>ทีม</span>
                                </h2>
                                <CarouselTeam responsive={responsive} infinite={true} className="owl-carousel owl-theme teams-slider">
                                    {teams.map(teams => (
                                        <div className="item" key={teams.id}>
                                            <a href={teams.link} className="team_titel">
                                                <img className="team_img" src={teams.teams_image_url} alt={teams.teams_alt} />
                                                <h5>{teams.teams_title}</h5>
                                            </a>
                                        </div>
                                    ))}
                                </CarouselTeam>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="news" id="news">
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
                                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                                            <Tab.Content id="slideInUp">
                                                <Tab.Pane eventKey="first">
                                                    <Row>
                                                        {news.map(news => (
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
                                                    <Link to="/news">
                                                        <Col style={{ display: "flex", justifyContent: "center" }}>
                                                            <button className="news_btn news_btn_gradient">See More</button>
                                                        </Col>
                                                    </Link>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second">
                                                    <Row>
                                                        {newsgame.map(newsgame => (
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
                                                    <Link to="/news">
                                                        <Col style={{ display: "flex", justifyContent: "center" }}>
                                                            <button className="news_btn news_btn_gradient">See More</button>
                                                        </Col>
                                                    </Link>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="third">
                                                <Row>
                                                        {newsofficial.map(newsofficial => (
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
                                                    <Link to="/news">
                                                        <Col style={{ display: "flex", justifyContent: "center" }}>
                                                            <button className="news_btn news_btn_gradient">See More</button>
                                                        </Col>
                                                    </Link>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image-right" src={colorSharp2}></img>
            </div>

            <div className="videos" id="videos" >
                <Container style={{ maxWidth: '1000px' }}>
                    <Row>
                        <h2 className="video_text">LATEST VIDEOS
                            <span>วิดีโอล่าสุด</span>
                        </h2>
                        {videos.map(videos => (
                            <Col size={12} sm={4} md={4} key={videos.id}>
                                <div className="videos_card">
                                    <iframe src={"https://www.youtube-nocookie.com/embed/" + videos.video_link} />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    )
}