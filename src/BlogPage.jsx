import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "./auth";

const BlogPage = () => {
  const {data: BlogData} = useAuth();
  return (
    <>
      <h1>Blog</h1>

      <ul>
        {BlogData.map((post, index) => {
          return <BlockLink key={index} post={post} />;
        })}
      </ul>

      <Outlet />
    </>
  );
};

function BlockLink({ post }) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
}

export default BlogPage;
