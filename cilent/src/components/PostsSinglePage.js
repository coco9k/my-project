import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Carousel } from "react-bootstrap";
import './css/Posts.css';

export const PostsSinglePage = () => {

  const [banner, setBanner] = useState([]);
  const [posts, setPosts] = useState([]);
  const { postsId } = useParams();

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
    fetch(`http://localhost:3333/posts/${postsId}/`)
      .then(res => res.json())
      .then(
        (result) => {
          setPosts(result[0]);
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

      <div className="posts-single-page" id="posts-single-page">
        <Container>
          <Row>
            <Col size={12}>
              <h2 className="posts_single_pag_title">{posts.title}</h2>
              <div className="posts_single_pag_detail" dangerouslySetInnerHTML={{ __html: posts.detail }} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}