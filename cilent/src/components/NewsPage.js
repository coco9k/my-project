import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import './css/News.css';

export const NewsPage = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/posts")
      .then(res => res.json())
      .then(
        (result) => {
          setPosts(result);
        }
      )
  }, [])

  return (
    <>
        <div className="news-page" id="news-page">
          <Container size={12}>
          {posts.map(posts => (
            <h2 className="news_text">TEAMS
              <span>{posts.title}</span>
            </h2>
            ))}
          </Container>
        </div>
    </>
  )
}