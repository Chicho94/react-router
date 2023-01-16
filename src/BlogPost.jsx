import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./auth";
import "./styles.css";

const BlogPost = () => {
  const navigation = useNavigate();
  const auth = useAuth();
  const BlogData = auth.data;

  let { slug } = useParams();
  let BlogPost = BlogData.find((post) => post.slug === slug);
  const authorization = auth.user?.isAdmin || auth.user?.username === BlogPost.author;

  const returnToBlog = () => {
    navigation("/blog");
  };


  return (
    <>
      {(authorization && (
        <>
          <label htmlFor="">Titulo: </label>
          <input
            type="text"
            className="author"
            id="title"
            name="title"
            onChange={(e) => auth.updateBlog(BlogPost.id, e.target.id, e.target.value)}
            value={BlogPost.title}
          />
          <label htmlFor="">Contenido: </label>
          <input
            type="text"
            className="author"
            id="content"
            name="content"
            onChange={(e) => auth.updateBlog(BlogPost.id, e.target.id, e.target.value)}
            value={BlogPost.content}
          />
        </>
      )) || (
        <>
          <h2>{BlogPost.title}</h2>
          <p>{BlogPost.content}</p>
        </>
      )}
      <h5>
        <b>Autor: </b>
        {BlogPost.author}
      </h5>
      <button onClick={returnToBlog}> Volver</button>
      {authorization && <button onClick={() => auth.deletePost(BlogPost.id)}> Eliminar</button>}
    </>
  );
};

export default BlogPost;
