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

    const [posts, setPosts] = useState([]);
    const [postsgame, setPostsgame] = useState([]);
    const [postsofficial, setPostsofficial] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch("http://localhost:3333/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    setPosts(result);
                }
            )
    }, [])

    useEffect(() => {
        fetch("http://localhost:3333/posts/category/Games")
            .then(res => res.json())
            .then(
                (result) => {
                    setPostsgame(result);
                }
            )
    }, [])

    useEffect(() => {
        fetch("http://localhost:3333/posts/category/Official")
            .then(res => res.json())
            .then(
                (result) => {
                    setPostsofficial(result);
                }
            )
    }, [])

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const APIKEY = "AIzaSyD4hAKPef3H83KIS_YFLUtQ8gLIxHezr9A"
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC98DSvjg_7iV8UY7UYW8OKg&maxResults=6&order=date&key=${APIKEY}`
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(url , requestOptions)
          .then(res => res.json())
          .then(
            (result) => {
                setVideos(result.items);
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
                            <Link to="/posts" target="_blank" rel="noreferrer">
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
            <div className="posts" id="posts">
                <Container>
                    <Row>
                        <Col size={12}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <h2 className="posts_text">NEWS
                                            <span>ข่าว</span>
                                        </h2>
                                        <Tab.Container id="posts-tabs" defaultActiveKey="first">
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
                                                        <input className="input_search" type="text" placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
                                                        {posts.filter((value) => {
                                                            if (search === "") {
                                                                return value
                                                            } else if (value.title.toLowerCase().includes(search.toLowerCase())) {
                                                                return value
                                                            }
                                                        })
                                                            .map(posts => (
                                                                <Col className="posts_box" size={12} sm={4} md={4} key={posts.id}>
                                                                    <div className="posts_imgbox">
                                                                        <Link to={`/posts/${posts.id}`}><img className="posts_img" src={`http://localhost:3333/${posts.thumbnail}`} alt={posts.title} /></Link>
                                                                    </div>
                                                                    <h4 className="posts_title"><Link to={`/posts/${posts.id}`}>{posts.title}</Link></h4>
                                                                    <ul className="posts_tag_ul">
                                                                        <li className="posts_tag_li">{posts.game}</li>
                                                                        <li className="posts_date_li">{posts.date.slice(0, 10)}</li>
                                                                    </ul>
                                                                </Col>
                                                            ))}
                                                    </Row>
                                                    <Link to="/posts">
                                                        <Col style={{ display: "flex", justifyContent: "center" }}>
                                                            <button className="posts_btn posts_btn_gradient">See More</button>
                                                        </Col>
                                                    </Link>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second">
                                                    <Row>
                                                        <input className="input_search" type="text" placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
                                                        {postsgame.filter((value) => {
                                                            if (search === "") {
                                                                return value
                                                            } else if (value.title.toLowerCase().includes(search.toLowerCase())) {
                                                                return value
                                                            }
                                                        })
                                                            .map(postsgame => (
                                                                <Col className="posts_box" size={12} sm={4} md={4} key={postsgame.id}>
                                                                    <div className="posts_imgbox">
                                                                        <Link to={`/posts/${postsgame.id}`}><img className="posts_img" src={`http://localhost:3333/${postsgame.thumbnail}`} alt={posts.title} /></Link>
                                                                    </div>
                                                                    <h4 className="posts_title"><Link to={`/posts/${postsgame.id}`}>{postsgame.title}</Link></h4>
                                                                    <ul className="posts_tag_ul">
                                                                        <li className="posts_tag_li">{postsgame.game}</li>
                                                                        <li className="posts_date_li">{postsgame.date.slice(0, 10)}</li>
                                                                    </ul>
                                                                </Col>
                                                            ))}
                                                    </Row>
                                                    <Link to="/posts">
                                                        <Col style={{ display: "flex", justifyContent: "center" }}>
                                                            <button className="posts_btn posts_btn_gradient">See More</button>
                                                        </Col>
                                                    </Link>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="third">
                                                    <Row>
                                                        <input className="input_search" type="text" placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
                                                        {postsofficial.filter((value) => {
                                                            if (search === "") {
                                                                return value
                                                            } else if (value.title.toLowerCase().includes(search.toLowerCase())) {
                                                                return value
                                                            }
                                                        })
                                                            .map(postsofficial => (
                                                                <Col className="posts_box" size={12} sm={4} md={4} key={postsofficial.id}>
                                                                    <div className="posts_imgbox">
                                                                        <Link to={`/posts/${postsofficial.id}`}><img className="posts_img" src={`http://localhost:3333/${postsofficial.thumbnail}`} alt={posts.title} /></Link>
                                                                    </div>
                                                                    <h4 className="posts_title"><Link to={`/posts/${postsofficial.id}`}>{postsofficial.title}</Link></h4>
                                                                    <ul className="posts_tag_ul">
                                                                        <li className="posts_tag_li">{postsofficial.game}</li>
                                                                        <li className="posts_date_li">{postsofficial.date.slice(0, 10)}</li>
                                                                    </ul>
                                                                </Col>
                                                            ))}
                                                    </Row>
                                                    <Link to="/posts">
                                                        <Col style={{ display: "flex", justifyContent: "center" }}>
                                                            <button className="posts_btn posts_btn_gradient">See More</button>
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
                        {videos.map((videos, index) => (
                            <Col size={12} sm={4} md={4} key={videos.id}>
                                <div className="videos_card">
                                    <a href={'https://www.youtube.com/watch?v='+`${videos.id.videoId}`} target="_blank"><img src={videos.snippet.thumbnails.high.url} alt={videos.snippet.title} /></a>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    )
}