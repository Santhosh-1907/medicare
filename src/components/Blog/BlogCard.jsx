// src/components/Blog/BlogCard.jsx
import React from "react";
import { Card, Button } from "react-bootstrap";

const BlogCard = ({ post }) => (
  <Card className="mb-4 shadow-sm h-100">
    <Card.Img variant="top" src={post.image} style={{ height: "200px", objectFit: "cover" }} />
    <Card.Body>
      <Card.Title>{post.title}</Card.Title>
      <Card.Text>{post.content.slice(0, 100)}...</Card.Text>
      <p className="text-muted small">By {post.author} | {post.category}</p>
      <Button variant="primary">Read More</Button>
    </Card.Body>
  </Card>
);

export default BlogCard;
