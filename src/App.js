import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// CONTEXT
import { AuthProvider, AuthRoute } from "./auth";

// PAGES
import Menu from "./Menu";
import HomePage from "./HomePage";
import BlogPage from "./BlogPage";
import ProfilePage from "./ProfilePage";
import BlogPost from "./BlogPost";
import LoginPage from "./LoginPage";
import LogoutPage from "./LogoutPage";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>
            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              }
            />
            <Route path="/Login" element={<LoginPage />} />
            <Route
              path="/Logout"
              element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
              }
            />
            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
