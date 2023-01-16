import React from "react";
import { useAuth } from "./auth";

const LogoutPage = () => {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <>
      <h1>logoutPage</h1>

      <form onSubmit={logout}>
        <label htmlFor="userName">Esta seguro?</label>
        <button type="submit">Logout</button>
      </form>
    </>
  );
};

export default LogoutPage;
