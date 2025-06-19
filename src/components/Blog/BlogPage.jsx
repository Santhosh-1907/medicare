// src/components/Blog/BlogPage.jsx
import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import BlogCard from "./BlogCard";
import blogPosts from "./BlogData";
import "./BlogPage.css"; // 👈 Add styles here

const BlogPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) =>
    (category === "All" || post.category === category) &&
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const categories = ["All", ...new Set(blogPosts.map((p) => p.category))];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Health Tips & Blog</h2>

      <Row className="mb-4">
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
        <Col md={6}>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      <Row>
        <TransitionGroup className="d-flex flex-wrap gap-4 justify-content-center w-100">
          {filteredPosts.map((post) => (
            <CSSTransition key={post.id} timeout={400} classNames="fade-slide">
              <Col md={4}>
                <BlogCard post={post} />
              </Col>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Row>
    </Container>
  );
};

export default BlogPage;
