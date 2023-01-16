import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

const routes = [
  {
    to: "/",
    text: "Home",
    private: false,
    publicOnly: false,
  },
  {
    to: "/Blog",
    text: "Blog",
    private: false,
    publicOnly: false,
  },
  {
    to: "/Profile",
    text: "Profile",
    private: true,
    publicOnly: false,
  },
  {
    to: "/Login",
    text: "Login",
    private: false,
    publicOnly: true,
  },
  {
    to: "/Logout",
    text: "Logout",
    private: true,
    publicOnly: false,
  },
];

const Menu = () => {
  const auth = useAuth();

  return (
    <nav>
      <ul>
        {routes.map((route, index) => {
          if (route.private && !auth.user) return null;
          if (route.publicOnly && auth.user) return null;

          return (
            <li key={index}>
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                to={route.to}
              >
                {route.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
