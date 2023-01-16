import React, { useState } from "react";
import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const auth = useAuth();
  const [username, setUserName] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth.login({ username });
  };

  if (auth.user) return <Navigate to="/profile" replace />;

  return (
    <>
      <h1>LoginPage</h1>

      <form onSubmit={login}>
        <label htmlFor="userName">Escribe tu nombre de usuario</label>
        <input
          name="userName"
          id="userName"
          type="text"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginPage;
