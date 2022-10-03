import React, { useState, useEffect } from 'react';
import { Container, Carousel, Row, Col, Tab, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import TrackVisibility from 'react-on-screen';
import './css/Posts.css';

export const Posts = () => {
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

      <div className="posts-page" id="posts-page">
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
                                    <Link to={`/posts/${posts.id}`}><img className="posts_img" src={posts.thumbnail} alt={posts.title} /></Link>
                                  </div>
                                  <h4 className="posts_title"><Link to={`/posts/${posts.id}`}>{posts.title}</Link></h4>
                                  <ul className="posts_tag_ul">
                                    <li className="posts_tag_li">{posts.game}</li>
                                    <li className="posts_date_li">{posts.date.slice(0, 10)}</li>
                                  </ul>
                                </Col>
                              ))}
                          </Row>
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
                                    <Link to={`/posts/${postsgame.id}`}><img className="posts_img" src={postsgame.thumbnail} alt={posts.title} /></Link>
                                  </div>
                                  <h4 className="posts_title"><Link to={`/posts/${postsgame.id}`}>{postsgame.title}</Link></h4>
                                  <ul className="posts_tag_ul">
                                    <li className="posts_tag_li">{postsgame.game}</li>
                                    <li className="posts_date_li">{postsgame.date.slice(0, 10)}</li>
                                  </ul>
                                </Col>
                              ))}
                          </Row>
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
                                    <Link to={`/posts/${postsofficial.id}`}><img className="posts_img" src={postsofficial.thumbnail} alt={posts.title} /></Link>
                                  </div>
                                  <h4 className="posts_title"><Link to={`/posts/${postsofficial.id}`}>{postsofficial.title}</Link></h4>
                                  <ul className="posts_tag_ul">
                                    <li className="posts_tag_li">{postsofficial.game}</li>
                                    <li className="posts_date_li">{postsofficial.date.slice(0, 10)}</li>
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