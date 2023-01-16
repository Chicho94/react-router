import React, { createContext, useContext, useState } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import BlogData from "./BlogData";

const adminList = ["Irisval", "RetaxMaster", "freddier"];
let previousURL = '';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [data, setData] = useState(BlogData);
  const [user, setUser] = useState(null);

  const login = ({ username }) => {
    const isAdmin = adminList.find((admin) => admin === username);
    setUser({ username, isAdmin });

    navigate(previousURL || "/profile");
  };

  const updateBlog = (idPost, input, value) => {
    let newPost = data.find((post) => post.id === idPost);
    newPost = { ...newPost, [input]: value };

    const newData = data.map((post) => {
      if (post.id === idPost) return newPost;
      return post;
    });
    setData(newData);
  };

  const deletePost = (idPost) => {
    const newData = data.filter((post) => post.id !== idPost);
    setData(newData);
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  const auth = { user, login, logout, data, updateBlog, deletePost };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

function AuthRoute({ children }) {
  const auth = useContext(AuthContext);
  const { pathname } = useLocation();
  previousURL = pathname;

  if (!auth.user) {
    return <Navigate to="/login" replace/>;
  }

  return children;
}

export { AuthProvider, useAuth, AuthRoute };
